import * as THREE from "three";

const TERRAIN_TYPES = {
  NORMAL: 0,
  SIDE: 1,
};

export class ChunkTerrain {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} [camera]
   */
  constructor(scene, camera = null) {
    this.scene = scene;
    this.camera = camera;

    // Data
    this.heightData = []; // Uint8Array

    // Streaming / budget
    this.lastPlayerWorld = new THREE.Vector3(Infinity, 0, Infinity);
    this.maxChunksPerFrame = 8; // Reduced for better frame rate

    // Performance optimizations
    this.geometryCache = new Map(); // Cache geometries to avoid recreation
    this.materialPool = new Map(); // Shared materials pool

    // LOD rings (near → far). Ensure complete coverage around player
    this.lods = [
      { id: 0, maxRange: 9, chunkSize: 400, resolution: 45, skirtDepth: 0 }, // High detail close - increased range
      { id: 1, maxRange: 11, chunkSize: 800, resolution: 40, skirtDepth: 0 }, // Medium detail
      { id: 2, maxRange: 13, chunkSize: 1600, resolution: 25, skirtDepth: 0 }, // Lower detail
      { id: 3, maxRange: 26, chunkSize: 3200, resolution: 5, skirtDepth: 0 }, // Lowest detail far
    ];

    this.maxRenderDistance =
      this.lods[this.lods.length - 1].maxRange *
      this.lods[this.lods.length - 1].chunkSize;

    // Storage
    this.chunks = new Map(); // key: `${lod}:${cx},${cz}` -> chunkObj
    this.chunksToGenerate = []; // queue entries {key,lod,cx,cz,priority,onScreen}
    this.materials = new Map(); // lodId -> MeshStandardMaterial

    // Heightmap tiling
    this.heightmapTileSize = 5120;

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
      this.materials.set(lod.id, this.makeMaterial(lod.id));
    }
    console.log("✅ Materials created for all LOD levels");

    try {
      this.heightData[TERRAIN_TYPES.NORMAL] = await this.loadHeightmapData(
        "heightmap33.jpg",
        700,
        512
      );
      this.heightData[TERRAIN_TYPES.SIDE] = await this.loadHeightmapData(
        "heightmap34.jpg",
        1300,
        512
      );
      console.log("✅ LOD terrain ready with heightmap");
      this.terrainReady = true; // Mark terrain as ready for chunk generation
    } catch (e) {
      console.warn("Heightmap failed; using procedural heights.", e);
      console.log("✅ LOD terrain ready with procedural generation");
      this.terrainReady = true; // Still allow procedural generation
    }
  }

  async loadHeightmapData(filename, maxHeight, heightMapSize) {
    // Try different heightmap formats
    const data = {};
    let heightmapData = null;

    const response = await fetch(`/heightmaps/${filename}`);
    console.log(response);
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      const result = await this.parseHeightmapFile(arrayBuffer, filename);
      if (result) {
        heightmapData = result.data;
        data["metadata"] = { maxHeight: maxHeight, size: heightMapSize };
      }
    }

    if (!heightmapData) {
      throw new Error("No valid heightmap found in supported formats");
    }
    data["data"] = heightmapData;
    console.log(`✅ Heightmap loaded: ${data}`, data);
    return data;
  }

  // Call every frame
  update(playerPosition) {
    // Don't generate chunks until terrain is ready (heightmap loaded)
    if (!this.terrainReady) {
      console.log("⏳ Terrain waiting for heightmap to load...");
      return;
    }

    const playerWorld = this._toVector3(playerPosition);

    // Dynamic update threshold based on player speed
    let moveThreshold = 200; // Base threshold
    let maxChunksPerFrame = 6; // Base generation rate
    
    if (window.game && window.game.player) {
      const playerSpeed = window.game.player.forwardSpeed;
      
      // Adjust thresholds based on speed
      if (playerSpeed > 6000) {
        // Very high speed - moderate generation
        moveThreshold = 180;
        maxChunksPerFrame = 8;
      } else if (playerSpeed > 4000) {
        // High speed - slightly increased generation  
        moveThreshold = 200;
        maxChunksPerFrame = 6;
      } else if (playerSpeed > 2000) {
        // Medium speed
        moveThreshold = 220;
        maxChunksPerFrame = 4;
      }
    }
    
    const isFirstUpdate = !isFinite(this.lastPlayerWorld.x);

    if (
      isFirstUpdate ||
      playerWorld.distanceToSquared(this.lastPlayerWorld) >
        moveThreshold * moveThreshold
    ) {
      this.lastPlayerWorld.copy(playerWorld);
      this.buildQueue(playerWorld);
      this.unloadFar(playerWorld);
      
      // Only run culling every few updates to reduce overhead
      if (!this._cullCounter) this._cullCounter = 0;
      this._cullCounter++;
      if (this._cullCounter % 3 === 0) { // Every 3rd update
        this.cullInvisibleChunks(playerWorld);
      }

      // Set adaptive generation rate
      if (isFirstUpdate) {
        this.maxChunksPerFrame = 16; // More on first load
      } else {
        this.maxChunksPerFrame = maxChunksPerFrame;
      }
    }
    this.processQueue();
  }

  cleanup() {
    // Clean up chunks
    for (const c of this.chunks.values()) this._destroyChunk(c);
    this.chunks.clear();

    // Clean up materials
    this.materials.forEach((m) => m.dispose());
    this.materials.clear();

    // Clean up cached resources
    this.materialPool.forEach((m) => m.dispose());
    this.materialPool.clear();

    this.geometryCache.forEach((g) => g.dispose());
    this.geometryCache.clear();
  }

  // ---------- internals ----------

  _toVector3(pos) {
    if (pos && pos.isVector3) return pos;
    const x = pos?.x ?? 0,
      y = pos?.y ?? 0,
      z = pos?.z ?? 0;
    return new THREE.Vector3(x, y, z);
  }

  async parseHeightmapFile(arrayBuffer, filename) {
    const extension = filename.split(".").pop().toLowerCase();

    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
        return await this.parseImageFile(arrayBuffer, extension);
      default:
        return null;
    }
  }

  async parseImageFile(arrayBuffer, extension) {
    // For JPG/PNG, we need to use Canvas to extract pixel data
    return new Promise((resolve, reject) => {
      const mimeType =
        extension === "jpg" ? "image/jpeg" : `image/${extension}`;
      const blob = new Blob([arrayBuffer], { type: mimeType });
      const img = new Image();

      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d", { willReadFrequently: true });

          canvas.width = img.width;
          canvas.height = img.height;

          // Clear canvas and draw image
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, img.width, img.height);
          const pixels = imageData.data;

          console.log(
            `🖼️ Image loaded: ${img.width}x${img.height}, ${pixels.length} bytes`
          );

          // Convert RGBA to grayscale using luminance formula
          const grayscale = new Uint8Array(img.width * img.height);
          for (let i = 0; i < pixels.length; i += 4) {
            // Use standard luminance conversion
            const gray = Math.round(
              pixels[i] * 0.2126 +
                pixels[i + 1] * 0.7152 +
                pixels[i + 2] * 0.0722
            );
            grayscale[i / 4] = gray;
          }

          // Clean up
          URL.revokeObjectURL(img.src);

          resolve({
            data: grayscale,
            metadata: {
              size: Math.min(img.width, img.height),
              maxHeight: 700,
              format: extension,
            },
            format: extension,
          });
        } catch (error) {
          console.error("Canvas processing error:", error);
          URL.revokeObjectURL(img.src);
          resolve(null);
        }
      };

      img.onerror = (error) => {
        console.error("Image load error:", error);
        URL.revokeObjectURL(img.src);
        resolve(null);
      };

      img.crossOrigin = "anonymous"; // Handle CORS if needed
      img.src = URL.createObjectURL(blob);
    });
  }

  getHeightAtPosition(worldX, worldZ, useInterpolation = false) {
    //if terrain
    let terrainType = TERRAIN_TYPES.NORMAL;

    if (worldX > 5000) terrainType = TERRAIN_TYPES.SIDE;
    if (worldX < -5000) terrainType = TERRAIN_TYPES.SIDE;

    if (
      !this.heightData[terrainType] ||
      !this.heightData[terrainType].metadata
    ) {
      return 0;
    }

    // Infinite tiling with actual heightmap data
    let u = (worldX / this.heightmapTileSize) % 1;
    let v = (worldZ / this.heightmapTileSize) % 1;
    if (u < 0) u += 1;
    if (v < 0) v += 1;

    const size = this.heightData[terrainType].metadata.size;

    if (useInterpolation) {
      // Use bilinear interpolation for high-detail terrain (LOD 0 only)
      const fx = u * (size - 1);
      const fy = v * (size - 1);

      const x0 = Math.floor(fx);
      const y0 = Math.floor(fy);
      const x1 = Math.min(x0 + 1, size - 1);
      const y1 = Math.min(y0 + 1, size - 1);

      const dx = fx - x0;
      const dy = fy - y0;

      // Sample four corners
      const h00 = this.heightData[terrainType].data[y0 * size + x0] ?? 0;
      const h10 = this.heightData[terrainType].data[y0 * size + x1] ?? 0;
      const h01 = this.heightData[terrainType].data[y1 * size + x0] ?? 0;
      const h11 = this.heightData[terrainType].data[y1 * size + x1] ?? 0;

      // Bilinear interpolation
      const h0 = h00 * (1 - dx) + h10 * dx;
      const h1 = h01 * (1 - dx) + h11 * dx;
      const value = h0 * (1 - dy) + h1 * dy;

      const height =
        (value / 255) * this.heightData[terrainType].metadata.maxHeight;
      return height;
    } else {
      // Fast nearest-neighbor sampling for distant terrain
      const px = Math.floor(u * (size - 1));
      const py = Math.floor(v * (size - 1));
      const idx = py * size + px;
      const value = this.heightData[terrainType].data[idx] ?? 0;
      const height =
        (value / 255) * this.heightData[terrainType].metadata.maxHeight;
      return height;
    }
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

  makeMaterial(lodId) {
    // Use cached material if available
    const cacheKey = `lod_${lodId}`;
    if (this.materialPool.has(cacheKey)) {
      return this.materialPool.get(cacheKey);
    }

    const m = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide,
      roughness: 0.6,
      metalness: 0.3,
      // Very subtle emissive for slight bloom on snow peaks
      emissive: new THREE.Color(0x001122), // Very dark blue
      emissiveIntensity: 0.02, // Very subtle
    });

    // Cache the material
    this.materialPool.set(cacheKey, m);
    return m;
  }

  keyFor(lod, cx, cz) {
    return `${lod}:${cx},${cz}`;
  }

  buildQueue(playerWorld) {
    const queue = [];
    
    // Get player direction for priority sorting when flying fast
    let playerForward = null;
    if (window.game && window.game.player && window.game.player.mesh) {
      playerForward = new THREE.Vector3(0, 0, 1);
      playerForward.applyQuaternion(window.game.player.mesh.quaternion);
    }

    // Generate chunks for all LOD levels using proper distance-based selection
    for (let lodIndex = 0; lodIndex < this.lods.length; lodIndex++) {
      const lod = this.lods[lodIndex];
      const lodSize = lod.chunkSize;
      const lodCx = Math.floor(playerWorld.x / lodSize);
      const lodCz = Math.floor(playerWorld.z / lodSize);

      // Generate chunks in a square around player within LOD range
      const effectiveRange = lod.maxRange - 1;
      for (let x = lodCx - effectiveRange; x <= lodCx + effectiveRange; x++) {
        for (let z = lodCz - effectiveRange; z <= lodCz + effectiveRange; z++) {
          const key = this.keyFor(lod.id, x, z);
          if (this.chunks.has(key)) {
            continue;
          }

          const centerX = (x + 0.5) * lodSize;
          const centerZ = (z + 0.5) * lodSize;
          const distanceToPlayer = Math.sqrt(
            (centerX - playerWorld.x) ** 2 + (centerZ - playerWorld.z) ** 2
          );

          // Determine the best LOD for this distance
          let bestLodIndex = this.lods.length - 1;
          for (let i = 0; i < this.lods.length; i++) {
            const testLod = this.lods[i];
            const maxDistForLod = testLod.maxRange * testLod.chunkSize;
            if (distanceToPlayer <= maxDistForLod) {
              bestLodIndex = i;
              break;
            }
          }

          const shouldUseLOD = lodIndex === bestLodIndex;

          if (shouldUseLOD) {
            let priority = distanceToPlayer;
            
            // Boost priority for chunks ahead when flying fast
            if (playerForward && window.game.player.forwardSpeed > 4000) {
              // Use direction without creating new vectors
              const dx = centerX - playerWorld.x;
              const dz = centerZ - playerWorld.z;
              const dist = Math.sqrt(dx * dx + dz * dz);
              
              if (dist > 0) {
                const forwardDot = (dx * playerForward.x + dz * playerForward.z) / dist;
                
                // Chunks ahead get higher priority (lower value = higher priority)
                if (forwardDot > 0.3) {
                  priority *= 0.5; // Much higher priority for forward chunks
                } else if (forwardDot > 0) {
                  priority *= 0.8; // Higher priority for somewhat forward chunks
                }
              }
            }
            
            queue.push({
              key,
              lod: lod.id,
              cx: x,
              cz: z,
              priority: priority,
              onScreen: true,
            });
          }
        }
      }
    }

    queue.sort((a, b) => a.priority - b.priority);
    this.chunksToGenerate = queue;
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

    // Create set of pending chunk positions for quick lookup
    const pendingChunks = new Set();
    for (const job of this.chunksToGenerate) {
      pendingChunks.add(`${job.cx},${job.cz}`);
    }

    for (const [key, c] of this.chunks.entries()) {
      const centerX = (c.cx + 0.5) * c.size;
      const centerZ = (c.cz + 0.5) * c.size;
      const distance = Math.sqrt(
        (centerX - playerWorld.x) ** 2 + (centerZ - playerWorld.z) ** 2
      );

      // Remove if too far away (with large buffer to prevent flickering)
      const maxDistWithBuffer = this.maxRenderDistance + c.size * 3; // Tripled buffer
      if (distance > maxDistWithBuffer) {
        toRemove.push(key);
        continue;
      }

      // Check if wrong LOD level for current distance
      let bestLodIndex = this.lods.length - 1;
      for (let i = 0; i < this.lods.length; i++) {
        const testLod = this.lods[i];
        const maxDistForLod = testLod.maxRange * testLod.chunkSize;
        if (distance <= maxDistForLod) {
          bestLodIndex = i;
          break;
        }
      }

      // Skip LOD-based removal when using single LOD level
      if (this.lods.length > 1) {
        // Check if chunk should be at different LOD level with hysteresis
        const currentLod = this.lods[c.lod];
        const currentMaxDist = currentLod.maxRange * currentLod.chunkSize;
        const hysteresis = c.size * 0.75; // 75% of chunk size as hysteresis buffer

        let shouldRemove = false;

        if (bestLodIndex > c.lod) {
          // Should be lower detail - only remove if well beyond current LOD range
          shouldRemove = distance > currentMaxDist + hysteresis;
        } else if (bestLodIndex < c.lod) {
          // Should be higher detail - only remove if well within higher LOD range
          const higherLod = this.lods[bestLodIndex];
          const higherMaxDist = higherLod.maxRange * higherLod.chunkSize;
          shouldRemove = distance < higherMaxDist - hysteresis;
        }

        if (shouldRemove) {
          const chunkPos = `${c.cx},${c.cz}`;
          // Only remove if there's no pending replacement chunk for this position
          if (!pendingChunks.has(chunkPos)) {
            toRemove.push(key);
          }
        }
      }
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

    // Try to reuse geometry from cache
    const geomKey = `lod${lodIndex}_${res}`;
    let geom;

    if (this.geometryCache.has(geomKey)) {
      // Clone cached geometry for performance
      const cachedGeom = this.geometryCache.get(geomKey);
      geom = cachedGeom.clone();
    } else {
      // Create new geometry and cache it
      geom = new THREE.PlaneGeometry(size, size, res - 1, res - 1);
      this.geometryCache.set(geomKey, geom.clone());
    }

    const pos = geom.attributes.position.array;

    const colors = new Float32Array(res * res * 3);
    let v = 0;
    let avgHeight = 0;
    const useInterpolation = lodIndex === 0; // Only use expensive interpolation for highest LOD
    const sizeInv = 1 / (res - 1); // Pre-compute division

    for (let z = 0; z < res; z++) {
      const localZ = z * sizeInv * size;
      const worldZ = cz * size + localZ;

      for (let x = 0; x < res; x++, v++) {
        const localX = x * sizeInv * size;
        const worldX = cx * size + localX;

        const height = this.getHeightAtPosition(
          worldX,
          worldZ,
          useInterpolation
        );
        pos[v * 3 + 2] = height; // Z up (after rotation)
        this.setVertexColor(colors, v, height);
        avgHeight += height;
      }
    }
    avgHeight *= sizeInv * sizeInv; // Faster than division

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
  }

  cullInvisibleChunks(playerWorld) {
    if (
      !this.camera ||
      !window.game ||
      !window.game.player ||
      !window.game.player.mesh
    ) {
      return;
    }

    const player = window.game.player;
    const playerMesh = player.mesh;

    // Get player's backward direction for culling chunks behind (reuse vector)
    if (!this._backwardVector) {
      this._backwardVector = new THREE.Vector3(0, 0, -1);
    }
    this._backwardVector.set(0, 0, -1).applyQuaternion(playerMesh.quaternion);

    let culledCount = 0;
    let visibleCount = 0;

    for (const [key, chunk] of this.chunks.entries()) {
      // Calculate chunk center position
      const chunkCenterX = chunk.cx * chunk.size + chunk.size / 2;
      const chunkCenterZ = chunk.cz * chunk.size + chunk.size / 2;

      // Vector from player to chunk center (no vector objects)
      const dx = chunkCenterX - playerWorld.x;
      const dz = chunkCenterZ - playerWorld.z;
      const distanceToChunk = Math.sqrt(dx * dx + dz * dz);

      // Check if chunk is significantly behind the player
      let dotProduct = 0;
      if (distanceToChunk > 0) {
        // Normalize and dot product manually
        dotProduct = (dx * this._backwardVector.x + dz * this._backwardVector.z) / distanceToChunk;
      }

      // Cull chunks that are:
      // 1. Behind the player (dot product > 0.3 means more than ~70 degrees behind)
      // 2. Far enough away (> 1500 units) to avoid culling nearby terrain
      const shouldCull = dotProduct > 0.3 && distanceToChunk > 1500;

      if (chunk.mesh) {
        const wasVisible = chunk.mesh.visible;
        chunk.mesh.visible = !shouldCull;

        if (shouldCull && wasVisible) {
          culledCount++;
        } else if (!shouldCull) {
          visibleCount++;
        }
      }
    }

    // Optional debug logging (uncomment to see culling stats)
    // if (culledCount > 0) {
    //   console.log(`🎭 Culled ${culledCount} chunks, ${visibleCount} visible`);
    // }
  }
}
