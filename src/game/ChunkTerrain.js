import * as THREE from "three";

export class ChunkTerrain {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} [camera]
   */
  constructor(scene, camera = null) {
    this.scene = scene;
    this.camera = camera;

    // Data
    this.heightData = null; // Uint8Array
    this.metadata = null; // { size:number, maxHeight?:number }

    // Streaming / budget
    this.lastPlayerWorld = new THREE.Vector3(Infinity, 0, Infinity);
    this.maxChunksPerFrame = 6; // Increased for faster initial loading

    // LOD rings (near → far). Ensure complete coverage around player
    this.lods = [
      { id: 0, maxRange: 3, chunkSize: 400, resolution: 65, skirtDepth: 0 }, // High detail close - increased range
      { id: 1, maxRange: 8, chunkSize: 800, resolution: 33, skirtDepth: 0 }, // Medium detail
      { id: 2, maxRange: 15, chunkSize: 1600, resolution: 17, skirtDepth: 0 }, // Lower detail
      { id: 3, maxRange: 25, chunkSize: 3200, resolution: 9, skirtDepth: 0 }, // Lowest detail far
    ];

    this.maxRenderDistance =
      this.lods[this.lods.length - 1].maxRange *
      this.lods[this.lods.length - 1].chunkSize;

    // Storage
    this.chunks = new Map(); // key: `${lod}:${cx},${cz}` -> chunkObj
    this.chunksToGenerate = []; // queue entries {key,lod,cx,cz,priority,onScreen}
    this.materials = new Map(); // lodId -> MeshStandardMaterial

    // Heightmap tiling
    this.heightmapTileSize = 4000;

    // Scratch
    this._tmpFrustum = new THREE.Frustum();
    this._tmpMatrix = new THREE.Matrix4();

    this.init();
  }

  setCamera(camera) {
    this.camera = camera;
  }

  async init() {
    // Create materials immediately (don't wait for heightmap)
    for (const lod of this.lods) {
      this.materials.set(lod.id, this.makeMaterial());
    }
    console.log("✅ Materials created for all LOD levels");

    try {
      await this.loadHeightmapData();
      console.log("✅ LOD terrain ready with heightmap");
      this.terrainReady = true; // Mark terrain as ready for chunk generation
    } catch (e) {
      console.warn("Heightmap failed; using procedural heights.", e);
      console.log("✅ LOD terrain ready with procedural generation");
      this.terrainReady = true; // Still allow procedural generation
    }
  }

  async loadHeightmapData() {
    const metaResponse = await fetch("/heightmaps/heightmap-info.json");
    if (!metaResponse.ok) throw new Error("Could not load heightmap metadata");
    this.metadata = await metaResponse.json();

    const heightmapResponse = await fetch("/heightmaps/heightmap.bmp");
    if (!heightmapResponse.ok) throw new Error("Could not load heightmap file");

    const arrayBuffer = await heightmapResponse.arrayBuffer();
    this.heightData = this.parsePGM(arrayBuffer);

    console.log(
      `📊 Heightmap: ${this.metadata.size}x${this.metadata.size}, maxHeight=${
        this.metadata.maxHeight ?? 700
      }`
    );
  }

  // Call every frame
  update(playerPosition) {
    // Don't generate chunks until terrain is ready (heightmap loaded)
    if (!this.terrainReady) {
      console.log("⏳ Terrain waiting for heightmap to load...");
      return;
    }

    const playerWorld = this._toVector3(playerPosition);

    const moveThreshold = 50; // meters
    const isFirstUpdate = !isFinite(this.lastPlayerWorld.x);

    // console.log(
    //   `🌍 Terrain update: player at (${playerWorld.x.toFixed(
    //     0
    //   )}, ${playerWorld.z.toFixed(0)}), isFirst=${isFirstUpdate}, chunks=${
    //     this.chunks.size
    //   }`
    // );

    if (
      isFirstUpdate ||
      playerWorld.distanceToSquared(this.lastPlayerWorld) >
        moveThreshold * moveThreshold
    ) {
      // console.log(
      //   `🔄 Triggering terrain rebuild: moved ${Math.sqrt(
      //     playerWorld.distanceToSquared(this.lastPlayerWorld)
      //   ).toFixed(0)}m`
      // );
      this.lastPlayerWorld.copy(playerWorld);
      this.buildQueue(playerWorld);
      this.unloadFar(playerWorld);

      // Force immediate generation of all chunks on first update
      if (isFirstUpdate) {
        this.maxChunksPerFrame = 500; // Generate all chunks immediately (enough for all LODs)
        // console.log(
        //   `🚀 First terrain update: generating ${this.maxChunksPerFrame} chunks per frame`
        // );
      } else {
        this.maxChunksPerFrame = 6; // Back to normal rate
      }
    }
    this.processQueue();
  }

  cleanup() {
    for (const c of this.chunks.values()) this._destroyChunk(c);
    this.chunks.clear();
    this.materials.forEach((m) => m.dispose());
    this.materials.clear();
  }

  // ---------- internals ----------

  _toVector3(pos) {
    if (pos && pos.isVector3) return pos;
    const x = pos?.x ?? 0,
      y = pos?.y ?? 0,
      z = pos?.z ?? 0;
    return new THREE.Vector3(x, y, z);
  }

  parsePGM(arrayBuffer) {
    const data = new Uint8Array(arrayBuffer);
    let headerEnd = 0,
      newline = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 10) {
        // '\n'
        if (++newline === 3) {
          headerEnd = i + 1;
          break;
        }
      }
    }
    return data.slice(headerEnd); // raw 8-bit pixels
  }

  getHeightAtPosition(worldX, worldZ) {
    if (!this.heightData || !this.metadata) {
      // console.log(
      //   `⚠️ Using procedural heights at (${worldX.toFixed(0)}, ${worldZ.toFixed(
      //     0
      //   )}) - heightmap not loaded yet`
      // );
      // Procedural fallback
      let h = 50;
      h += Math.sin(worldX * 0.001) * Math.cos(worldZ * 0.001) * 100;
      h += Math.sin(worldX * 0.003) * Math.sin(worldZ * 0.003) * 30;
      return Math.max(0, Math.min(500, h));
    }

    // Infinite tiling with actual heightmap data
    let u = (worldX / this.heightmapTileSize) % 1;
    let v = (worldZ / this.heightmapTileSize) % 1;
    if (u < 0) u += 1;
    if (v < 0) v += 1;

    const size = this.metadata.size;
    const px = Math.floor(u * (size - 1));
    const py = Math.floor(v * (size - 1));
    const idx = py * size + px;
    const value = this.heightData[idx] ?? 0;
    const height = (value / 255) * (this.metadata.maxHeight || 700);

    return height;
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3;
    if (height < 40) {
      colors[i] = 0.2;
      colors[i + 1] = 0.6;
      colors[i + 2] = 1.0;
    } else if (height < 80) {
      colors[i] = 0.3;
      colors[i + 1] = 0.9;
      colors[i + 2] = 0.4;
    } else if (height < 150) {
      colors[i] = 0.4;
      colors[i + 1] = 0.8;
      colors[i + 2] = 0.3;
    } else if (height < 250) {
      colors[i] = 0.3;
      colors[i + 1] = 0.7;
      colors[i + 2] = 0.2;
    } else if (height < 400) {
      colors[i] = 0.7;
      colors[i + 1] = 0.5;
      colors[i + 2] = 0.3;
    } else if (height < 550) {
      colors[i] = 0.6;
      colors[i + 1] = 0.6;
      colors[i + 2] = 0.6;
    } else {
      colors[i] = 0.95;
      colors[i + 1] = 0.98;
      colors[i + 2] = 1.0;
    }
  }

  makeMaterial() {
    const m = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide,
      roughness: 0.6,
      metalness: 0.3,
    });
    m.needsUpdate = true;
    return m;
  }

  keyFor(lod, cx, cz) {
    return `${lod}:${cx},${cz}`;
  }

  buildQueue(playerWorld) {
    const queue = [];
    // console.log(
    //   `🎯 Building queue for player at (${playerWorld.x.toFixed(
    //     0
    //   )}, ${playerWorld.z.toFixed(0)})`
    // );

    // Generate chunks for all LOD levels using proper distance-based selection
    for (let lodIndex = 0; lodIndex < this.lods.length; lodIndex++) {
      const lod = this.lods[lodIndex];
      const lodSize = lod.chunkSize;
      const lodCx = Math.floor(playerWorld.x / lodSize);
      const lodCz = Math.floor(playerWorld.z / lodSize);

      // console.log(
      //   `🎯 LOD${lod.id}: size=${lodSize}, center=(${lodCx},${lodCz}), maxRange=${lod.maxRange}`
      // );

      // Generate chunks in a square around player within LOD range
      for (let x = lodCx - lod.maxRange; x <= lodCx + lod.maxRange; x++) {
        for (let z = lodCz - lod.maxRange; z <= lodCz + lod.maxRange; z++) {
          const key = this.keyFor(lod.id, x, z);
          if (this.chunks.has(key)) {
            continue;
          }

          const centerX = (x + 0.5) * lodSize;
          const centerZ = (z + 0.5) * lodSize;
          const distanceToPlayer = Math.sqrt(
            (centerX - playerWorld.x) ** 2 + (centerZ - playerWorld.z) ** 2
          );

          // Check if this chunk should use this LOD level
          let shouldUseLOD = true;

          // For LOD 0, always use if within range
          if (lod.id === 0) {
            shouldUseLOD = distanceToPlayer <= lod.maxRange * lodSize;
          } else {
            // For higher LODs, only use if beyond previous LOD's range
            const prevLod = this.lods[lodIndex - 1];
            const minDist = prevLod.maxRange * prevLod.chunkSize;
            const maxDist = lod.maxRange * lodSize;
            shouldUseLOD =
              distanceToPlayer > minDist && distanceToPlayer <= maxDist;
          }

          if (shouldUseLOD) {
            // console.log(
            //   `➕ Adding LOD${
            //     lod.id
            //   } chunk (${x},${z}) at distance ${distanceToPlayer.toFixed(0)}m`
            // );
            queue.push({
              key,
              lod: lod.id,
              cx: x,
              cz: z,
              priority: distanceToPlayer,
              onScreen: true,
            });
          }
        }
      }
    }

    queue.sort((a, b) => a.priority - b.priority);
    this.chunksToGenerate = queue;

    //console.log(`📋 Queued ${queue.length} chunks total across all LODs`);
    for (let i = 0; i < Math.min(10, queue.length); i++) {
      const q = queue[i];
      // console.log(
      //   `  ${i + 1}. LOD${q.lod} chunk (${q.cx},${
      //     q.cz
      //   }) priority=${q.priority.toFixed(0)}m`
      // );
    }
  }

  processQueue() {
    if (!this.chunksToGenerate.length) return;
    let built = 0;
    while (built < this.maxChunksPerFrame && this.chunksToGenerate.length) {
      const job = this.chunksToGenerate.shift();
      if (!job) break;
      if (this.chunks.has(job.key)) continue;
      this._buildChunk(job.lod, job.cx, job.cz);
      built++;
    }
  }

  unloadFar(playerWorld) {
    const toRemove = [];
    for (const [key, c] of this.chunks.entries()) {
      const centerX = (c.cx + 0.5) * c.size;
      const centerZ = (c.cz + 0.5) * c.size;
      const dx = Math.abs(centerX - playerWorld.x);
      const dz = Math.abs(centerZ - playerWorld.z);
      const cheb = Math.max(dx, dz);
      const maxDistWithBuffer = this.maxRenderDistance + c.size;
      if (cheb > maxDistWithBuffer) toRemove.push(key);
    }
    for (const k of toRemove) {
      const c = this.chunks.get(k);
      if (!c) continue;
      this._destroyChunk(c);
      this.chunks.delete(k);
    }
  }

  _destroyChunk(c) {
    this.scene.remove(c.mesh);
    c.mesh.geometry.dispose();
    // Do NOT dispose shared materials here
  }

  _buildChunk(lodIndex, cx, cz) {
    //console.log(`🔨 Building LOD${lodIndex} chunk (${cx},${cz})`);

    const lod = this.lods[lodIndex];
    const size = lod.chunkSize;
    const res = lod.resolution;

    const geom = new THREE.PlaneGeometry(size, size, res - 1, res - 1);
    const pos = geom.attributes.position.array;

    const colors = new Float32Array(res * res * 3);
    let v = 0;
    let avgHeight = 0;
    for (let z = 0; z < res; z++) {
      for (let x = 0; x < res; x++, v++) {
        const localX = (x / (res - 1)) * size;
        const localZ = (z / (res - 1)) * size;
        const worldX = cx * size + localX;
        const worldZ = cz * size + localZ;

        const height = this.getHeightAtPosition(worldX, worldZ);
        pos[v * 3 + 2] = height; // Z up (after rotation)
        this.setVertexColor(colors, v, height);
        avgHeight += height;
      }
    }
    avgHeight /= res * res;

    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geom.computeVertexNormals();
    geom.computeBoundingSphere();

    const material = this.materials.get(lod.id);
    if (!material) {
      console.error(`❌ No material found for LOD${lod.id}`);
      return;
    }

    const mesh = new THREE.Mesh(geom, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(cx * size + size / 2, 0, cz * size + size / 2);
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    const chunk = {
      key: this.keyFor(lod.id, cx, cz),
      lod: lod.id,
      cx,
      cz,
      mesh,
      size,
      resolution: res,
    };

    this.scene.add(mesh);
    this.chunks.set(chunk.key, chunk);

    // console.log(
    //   `✅ Built LOD${
    //     lod.id
    //   } chunk (${cx},${cz}) at world pos (${mesh.position.x.toFixed(
    //     0
    //   )}, ${mesh.position.z.toFixed(0)}) avgHeight=${avgHeight.toFixed(0)}m`
    // );
  }
}
