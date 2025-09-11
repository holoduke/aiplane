import * as THREE from "three";

export class HeightmapTerrain {
  constructor(scene) {
    this.scene = scene;
    this.chunks = new Map(); // Currently loaded chunks
    this.chunkCache = new Map(); // Cached heightmap data
    this.lastPlayerChunk = { x: null, z: null };

    // Settings from generated heightmaps
    this.chunkSize = 500; // 2km x 2km chunks
    this.resolution = 256; // 256x256 vertices per chunk
    this.renderDistance = 3; // Load 3 chunks in each direction
    this.unloadDistance = 5; // Unload chunks 5 chunks away

    this.init();
  }

  async init() {
    console.log("Initializing heightmap-based terrain...");
    try {
      // Load the index file to get metadata
      const response = await fetch("/heightmaps/index.json");
      if (!response.ok) {
        throw new Error(
          "Heightmaps not found - run generate-heightmaps.js first"
        );
      }

      this.index = await response.json();
      console.log(
        `Heightmap terrain initialized: ${this.index.worldSize / 1000}km x ${
          this.index.worldSize / 1000
        }km world`
      );
    } catch (error) {
      console.error("Failed to load heightmaps:", error);
      // Fallback to procedural generation if heightmaps aren't available
      this.useFallback = true;
    }
  }

  getChunkKey(chunkX, chunkZ) {
    return `${chunkX},${chunkZ}`;
  }

  worldToChunk(worldX, worldZ) {
    return {
      x: Math.floor(worldX / this.chunkSize),
      z: Math.floor(worldZ / this.chunkSize),
    };
  }

  async loadChunkData(chunkX, chunkZ) {
    const key = this.getChunkKey(chunkX, chunkZ);

    // Check cache first
    if (this.chunkCache.has(key)) {
      return this.chunkCache.get(key);
    }

    try {
      const response = await fetch(
        `/heightmaps/chunk_${chunkX}_${chunkZ}.json`
      );
      if (!response.ok) {
        return this.generateFallbackChunk(chunkX, chunkZ);
      }

      const chunkData = await response.json();
      this.chunkCache.set(key, chunkData);
      return chunkData;
    } catch (error) {
      console.warn(`Failed to load chunk ${chunkX},${chunkZ}, using fallback`);
      return this.generateFallbackChunk(chunkX, chunkZ);
    }
  }

  generateFallbackChunk(chunkX, chunkZ) {
    // Simple fallback terrain generation
    const heights = [];
    const worldX = chunkX * this.chunkSize;
    const worldZ = chunkZ * this.chunkSize;

    for (let z = 0; z < this.resolution; z++) {
      for (let x = 0; x < this.resolution; x++) {
        const sampleX =
          worldX + (x / (this.resolution - 1) - 0.5) * this.chunkSize;
        const sampleZ =
          worldZ + (z / (this.resolution - 1) - 0.5) * this.chunkSize;

        // Simple noise-based height
        const height =
          100 + Math.sin(sampleX * 0.001) * 50 + Math.cos(sampleZ * 0.001) * 30;
        heights.push(height);
      }
    }

    return {
      chunkX,
      chunkZ,
      worldX,
      worldZ: worldZ,
      resolution: this.resolution,
      chunkSize: this.chunkSize,
      heights,
      minHeight: 50,
      maxHeight: 180,
    };
  }

  async generateChunkMesh(chunkData) {
    const geometry = new THREE.PlaneGeometry(
      this.chunkSize,
      this.chunkSize,
      this.resolution - 1,
      this.resolution - 1
    );

    const vertices = geometry.attributes.position.array;
    const colors = new Float32Array(vertices.length);

    // Apply heightmap data to vertices
    let vertexIndex = 0;
    for (let z = 0; z < this.resolution; z++) {
      for (let x = 0; x < this.resolution; x++) {
        const height = chunkData.heights[vertexIndex];

        // Set vertex height
        vertices[vertexIndex * 3 + 2] = height;

        // Set vertex color based on height
        this.setVertexColor(colors, vertexIndex, height);

        vertexIndex++;
      }
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Create material
    const material = new THREE.MeshLambertMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide,
    });

    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(chunkData.worldX, 0, chunkData.worldZ);
    mesh.receiveShadow = true;
    mesh.castShadow = false;

    return mesh;
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3;

    if (height < 0) {
      // Deep water - dark blue
      colors[i] = 0.05;
      colors[i + 1] = 0.15;
      colors[i + 2] = 0.5;
    } else if (height < 30) {
      // Shallow water/coastline - bright blue
      colors[i] = 0.1;
      colors[i + 1] = 0.5;
      colors[i + 2] = 0.9;
    } else if (height < 100) {
      // Green lowlands and valleys - bright green
      colors[i] = 0.1;
      colors[i + 1] = 0.8;
      colors[i + 2] = 0.2;
    } else if (height < 300) {
      // Rolling hills - medium green
      colors[i] = 0.2;
      colors[i + 1] = 0.6;
      colors[i + 2] = 0.1;
    } else if (height < 600) {
      // Forested foothills - darker green
      colors[i] = 0.15;
      colors[i + 1] = 0.4;
      colors[i + 2] = 0.05;
    } else if (height < 900) {
      // Mountain slopes - brown/tan
      colors[i] = 0.5;
      colors[i + 1] = 0.4;
      colors[i + 2] = 0.2;
    } else if (height < 1200) {
      // Rocky high mountains - dark gray
      colors[i] = 0.4;
      colors[i + 1] = 0.4;
      colors[i + 2] = 0.3;
    } else if (height < 1400) {
      // High peaks - light gray
      colors[i] = 0.6;
      colors[i + 1] = 0.6;
      colors[i + 2] = 0.5;
    } else {
      // Snow-capped peaks - bright white
      colors[i] = 0.95;
      colors[i + 1] = 0.95;
      colors[i + 2] = 1.0;
    }
  }

  async loadChunk(chunkX, chunkZ) {
    const key = this.getChunkKey(chunkX, chunkZ);

    if (this.chunks.has(key)) {
      return; // Already loaded
    }

    console.log(`Loading chunk ${chunkX}, ${chunkZ}`);

    try {
      const chunkData = await this.loadChunkData(chunkX, chunkZ);
      const mesh = await this.generateChunkMesh(chunkData);

      this.chunks.set(key, { mesh, data: chunkData });
      this.scene.add(mesh);
    } catch (error) {
      console.error(`Failed to load chunk ${chunkX}, ${chunkZ}:`, error);
    }
  }

  unloadChunk(chunkX, chunkZ) {
    const key = this.getChunkKey(chunkX, chunkZ);
    const chunk = this.chunks.get(key);

    if (chunk) {
      console.log(`Unloading chunk ${chunkX}, ${chunkZ}`);
      this.scene.remove(chunk.mesh);
      chunk.mesh.geometry.dispose();
      chunk.mesh.material.dispose();
      this.chunks.delete(key);
    }
  }

  async update(playerPosition) {
    const playerChunk = this.worldToChunk(playerPosition.x, playerPosition.z);

    // Only update if player moved to a different chunk
    if (
      playerChunk.x === this.lastPlayerChunk.x &&
      playerChunk.z === this.lastPlayerChunk.z
    ) {
      return;
    }

    this.lastPlayerChunk = playerChunk;

    // Load chunks around player
    const loadPromises = [];
    for (
      let x = playerChunk.x - this.renderDistance;
      x <= playerChunk.x + this.renderDistance;
      x++
    ) {
      for (
        let z = playerChunk.z - this.renderDistance;
        z <= playerChunk.z + this.renderDistance;
        z++
      ) {
        loadPromises.push(this.loadChunk(x, z));
      }
    }

    // Wait for chunks to load
    await Promise.all(loadPromises);

    // Unload distant chunks
    const chunksToUnload = [];
    for (const [key, chunk] of this.chunks) {
      const [chunkX, chunkZ] = key.split(",").map(Number);
      const distance = Math.max(
        Math.abs(chunkX - playerChunk.x),
        Math.abs(chunkZ - playerChunk.z)
      );

      if (distance > this.unloadDistance) {
        chunksToUnload.push([chunkX, chunkZ]);
      }
    }

    chunksToUnload.forEach(([chunkX, chunkZ]) => {
      this.unloadChunk(chunkX, chunkZ);
    });
  }

  getHeightAtPosition(worldX, worldZ) {
    const chunkCoords = this.worldToChunk(worldX, worldZ);
    const key = this.getChunkKey(chunkCoords.x, chunkCoords.z);
    const chunk = this.chunks.get(key);

    if (!chunk) {
      // Fallback height if chunk not loaded
      return 100 + Math.sin(worldX * 0.001) * 50;
    }

    // Calculate position within chunk
    const chunkData = chunk.data;
    const localX =
      ((worldX - chunkData.worldX) / this.chunkSize + 0.5) *
      (this.resolution - 1);
    const localZ =
      ((worldZ - chunkData.worldZ) / this.chunkSize + 0.5) *
      (this.resolution - 1);

    // Clamp to valid range
    const x = Math.max(0, Math.min(this.resolution - 1, Math.floor(localX)));
    const z = Math.max(0, Math.min(this.resolution - 1, Math.floor(localZ)));

    const index = z * this.resolution + x;
    return chunkData.heights[index] || 100;
  }

  cleanup() {
    // Clean up all chunks
    for (const [key, chunk] of this.chunks) {
      this.scene.remove(chunk.mesh);
      chunk.mesh.geometry.dispose();
      chunk.mesh.material.dispose();
    }
    this.chunks.clear();
    this.chunkCache.clear();
  }
}
