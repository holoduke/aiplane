import * as THREE from "three";

export class StreamingTerrain {
  constructor(scene) {
    this.scene = scene;
    this.chunkSize = 2000; // 2km x 2km chunks for better performance
    this.chunkResolution = 150; // 150x150 vertices per chunk
    this.renderDistance = 5; // Load 5 chunks in each direction
    this.unloadDistance = 7; // Unload chunks 7 chunks away

    this.chunks = new Map(); // Map of chunk coordinates to mesh objects
    this.chunkPool = []; // Reuse geometries for performance
    this.lastPlayerChunk = { x: null, z: null };

    // Enhanced noise parameters for realistic terrain
    this.noiseParams = {
      scale: 0.1008,
      octaves: 6,
      persistence: 0.55,
      lacunarity: 2.1,
      heightScale: 4000,
    };

    // Seed for consistent world generation
    this.worldSeed = Math.random() * 1000;

    this.init();
  }

  init() {
    console.log("Initializing AAA-style streaming terrain...");
    // Pre-create geometry pool for better performance
    for (let i = 0; i < 16; i++) {
      this.chunkPool.push(this.createChunkGeometry());
    }
  }

  createChunkGeometry() {
    return new THREE.PlaneGeometry(
      this.chunkSize,
      this.chunkSize,
      this.chunkResolution - 1,
      this.chunkResolution - 1
    );
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

  chunkToWorld(chunkX, chunkZ) {
    return {
      x: chunkX * this.chunkSize,
      z: chunkZ * this.chunkSize,
    };
  }

  // Smooth interpolated noise for realistic terrain
  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(a, b, t) {
    return a + t * (b - a);
  }

  grad(hash, x, z) {
    const h = hash & 15;
    const u = h < 8 ? x : z;
    const v = h < 4 ? z : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x, z, seed = 0) {
    // Simple but smooth noise
    const X = Math.floor(x) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(z);

    // Hash coordinates with seed
    const seedOffset = seed * 73 + this.worldSeed;
    const A = (X + seedOffset) & 255;
    const B = (X + 1 + seedOffset) & 255;
    const AA = (A + Z) & 255;
    const AB = (A + Z + 1) & 255;
    const BA = (B + Z) & 255;
    const BB = (B + Z + 1) & 255;

    // Generate smooth gradients
    const g1 = this.simpleHash(AA) / 256.0 - 0.5;
    const g2 = this.simpleHash(BA) / 256.0 - 0.5;
    const g3 = this.simpleHash(AB) / 256.0 - 0.5;
    const g4 = this.simpleHash(BB) / 256.0 - 0.5;

    return this.lerp(this.lerp(g1, g2, u), this.lerp(g3, g4, u), v);
  }

  simpleHash(n) {
    n = (n << 13) ^ n;
    return (n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff;
  }

  smoothNoise(x, z, octaves = 4, persistence = 0.4, scale = 1, amplitude = 1) {
    let value = 0;
    let currentAmplitude = amplitude;
    let frequency = scale;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      value +=
        this.noise(x * frequency, z * frequency, i * 137) * currentAmplitude;
      maxValue += currentAmplitude;
      currentAmplitude *= persistence;
      frequency *= 1.8; // Less aggressive frequency multiplication
    }

    return value / maxValue;
  }

  generateHeightAt(worldX, worldZ) {
    let height = 0;

    // Base sea level
    height += 50;

    // Large-scale continental features
    height += this.smoothNoise(worldX, worldZ, 2, 0.5, 0.00005, 200);

    // Mountain ranges - more dramatic heights
    const mountainRange1 = this.createMountainRange(
      worldX,
      worldZ,
      0,
      0,
      1400,
      0.0001
    );
    const mountainRange2 = this.createMountainRange(
      worldX,
      worldZ,
      8000,
      5000,
      1200,
      0.00012
    );
    const mountainRange3 = this.createMountainRange(
      worldX,
      worldZ,
      -6000,
      8000,
      1100,
      0.00015
    );

    // Take the maximum for distinct mountain ranges
    height += Math.max(
      mountainRange1,
      mountainRange2 * 0.9,
      mountainRange3 * 0.8
    );

    // Valley systems that carve through terrain
    const valley1 = this.createValley(worldX, worldZ, 2000, -2000, 300, 0.0002);
    const valley2 = this.createValley(
      worldX,
      worldZ,
      -4000,
      3000,
      250,
      0.00018
    );

    height -= Math.max(valley1 * 0.8, valley2 * 0.6);

    // Rolling hills for natural variation
    height += this.smoothNoise(worldX, worldZ, 3, 0.4, 0.0008, 120);

    // Medium-scale features
    height += this.smoothNoise(worldX, worldZ, 4, 0.3, 0.002, 50);

    // Fine detail
    height += this.smoothNoise(worldX, worldZ, 2, 0.25, 0.006, 15);

    return Math.max(-10, Math.min(1500, height)); // Allow some water areas
  }

  createMountainRange(x, z, centerX, centerZ, maxHeight, frequency) {
    const dx = x - centerX;
    const dz = z - centerZ;
    const distance = Math.sqrt(dx * dx + dz * dz);

    // Mountain profile with better range and steepness
    const mountainProfile = Math.max(0, 1 - (distance / 2500) ** 0.8);

    // Ridge system with more dramatic variation
    const ridgeNoise = this.smoothNoise(x, z, 3, 0.7, frequency, 1.0);
    const peakVariation = this.smoothNoise(x, z, 2, 0.6, frequency * 2, 0.8);

    // Create more dramatic peaks
    return (
      mountainProfile *
      maxHeight *
      (0.4 + ridgeNoise * 0.4 + peakVariation * 0.2)
    );
  }

  createValley(x, z, centerX, centerZ, depth, frequency) {
    const dx = x - centerX;
    const dz = z - centerZ;
    const distance = Math.sqrt(dx * dx + dz * dz);

    // Smoother valley profile
    const valleyProfile = Math.max(0, 1 - (distance / 2500) ** 1.5);

    // Gentle river meandering
    const riverMeander = this.smoothNoise(x, z, 2, 0.5, frequency, 0.4);

    return valleyProfile * depth * (0.7 + Math.abs(riverMeander) * 0.3);
  }

  getChunkKey(chunkX, chunkZ) {
    return `${chunkX},${chunkZ}`;
  }

  generateChunk(chunkX, chunkZ) {
    // Get geometry from pool or create new one
    let geometry = this.chunkPool.pop();
    if (!geometry) {
      geometry = this.createChunkGeometry();
    }

    const worldPos = this.chunkToWorld(chunkX, chunkZ);
    const vertices = geometry.attributes.position.array;
    const colors = new Float32Array(vertices.length);

    let minHeight = Infinity;
    let maxHeight = -Infinity;

    let vertexIndex = 0;
    for (let z = 0; z < this.chunkResolution; z++) {
      for (let x = 0; x < this.chunkResolution; x++) {
        const worldX =
          worldPos.x + (x / (this.chunkResolution - 1) - 0.5) * this.chunkSize;
        const worldZ =
          worldPos.z + (z / (this.chunkResolution - 1) - 0.5) * this.chunkSize;

        const height = this.generateHeightAt(worldX, worldZ);

        minHeight = Math.min(minHeight, height);
        maxHeight = Math.max(maxHeight, height);

        // Set vertex height
        vertices[vertexIndex * 3 + 2] = height;

        // Set vertex color based on height
        this.setVertexColor(colors, vertexIndex, height);

        vertexIndex++;
      }
    }

    // Debug logging for first few chunks
    if (this.chunks.size < 3) {
      console.log(
        `Chunk ${chunkX},${chunkZ} height range: ${minHeight.toFixed(
          1
        )} to ${maxHeight.toFixed(1)}`
      );
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
    mesh.position.set(worldPos.x, 0, worldPos.z);
    mesh.receiveShadow = true;
    mesh.castShadow = false;

    // Add some structures to this chunk
    this.addChunkStructures(mesh, worldPos.x, worldPos.z);

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

  addChunkStructures(chunkMesh, chunkWorldX, chunkWorldZ) {
    // Add some structures to this chunk
    const numStructures = Math.floor(Math.random() * 6) + 3;

    for (let i = 0; i < numStructures; i++) {
      const localX = (Math.random() - 0.5) * this.chunkSize * 0.8;
      const localZ = (Math.random() - 0.5) * this.chunkSize * 0.8;
      const worldX = chunkWorldX + localX;
      const worldZ = chunkWorldZ + localZ;
      const height = this.getHeightAtPosition(worldX, worldZ);

      if (height > 20 && height < 800) {
        this.createStructure(worldX, height, worldZ);
      }
    }
  }

  createStructure(x, y, z) {
    const structureType = Math.random();
    let structure = null;

    if (structureType < 0.3) {
      structure = this.createFuturisticBuilding(x, y + 20, z);
    } else if (structureType < 0.6) {
      structure = this.createEnergyTower(x, y + 30, z);
    } else if (structureType < 0.8) {
      structure = this.createCrystalFormation(x, y + 15, z);
    } else {
      structure = this.createFloatingPlatform(x, y + 100, z);
    }

    return structure;
  }

  createBuilding(x, y, z) {
    const width = 20 + Math.random() * 40;
    const height = 30 + Math.random() * 80;
    const depth = 20 + Math.random() * 40;

    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.6, 0.7, 0.4 + Math.random() * 0.3),
      transparent: true,
      opacity: 0.8,
    });

    const building = new THREE.Mesh(geometry, material);
    building.position.set(x, y + height / 2, z);
    building.castShadow = true;
    building.receiveShadow = true;

    this.scene.add(building);
    return building;
  }

  createTower(x, y, z) {
    const radius = 8 + Math.random() * 12;
    const height = 60 + Math.random() * 100;

    const geometry = new THREE.CylinderGeometry(
      radius,
      radius * 1.2,
      height,
      8
    );
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.8, 0.8, 0.5),
      transparent: true,
      opacity: 0.7,
    });

    const tower = new THREE.Mesh(geometry, material);
    tower.position.set(x, y + height / 2, z);
    tower.castShadow = true;
    tower.receiveShadow = true;

    this.scene.add(tower);
    return tower;
  }

  createCrystal(x, y, z) {
    const size = 12 + Math.random() * 20;
    const geometry = new THREE.OctahedronGeometry(size);
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.3 + Math.random() * 0.4, 1.0, 0.6),
      transparent: true,
      opacity: 0.6,
      emissive: new THREE.Color().setHSL(0.3, 0.5, 0.1),
    });

    const crystal = new THREE.Mesh(geometry, material);
    crystal.position.set(x, y + size, z);
    crystal.rotation.x = Math.random() * Math.PI;
    crystal.rotation.z = Math.random() * Math.PI;
    crystal.castShadow = true;
    crystal.receiveShadow = true;

    this.scene.add(crystal);
    return crystal;
  }

  createStructure(x, y, z) {
    const structureType = Math.random();

    if (structureType < 0.4) {
      return this.createBuilding(x, y, z);
    } else if (structureType < 0.7) {
      return this.createTower(x, y, z);
    } else {
      return this.createCrystal(x, y, z);
    }
  }

  loadChunk(chunkX, chunkZ) {
    const key = this.getChunkKey(chunkX, chunkZ);

    if (this.chunks.has(key)) {
      return; // Already loaded
    }

    console.log(`Loading chunk ${chunkX}, ${chunkZ}`);
    const chunkMesh = this.generateChunk(chunkX, chunkZ);
    this.chunks.set(key, chunkMesh);
    this.scene.add(chunkMesh);
  }

  unloadChunk(chunkX, chunkZ) {
    const key = this.getChunkKey(chunkX, chunkZ);
    const chunk = this.chunks.get(key);

    if (chunk) {
      console.log(`Unloading chunk ${chunkX}, ${chunkZ}`);
      this.scene.remove(chunk);

      // Return geometry to pool for reuse
      this.chunkPool.push(chunk.geometry);
      chunk.material.dispose();

      this.chunks.delete(key);
    }
  }

  update(playerPosition) {
    const playerChunk = this.worldToChunk(playerPosition.x, playerPosition.z);

    // Only update if player moved to a different chunk
    if (
      playerChunk.x === this.lastPlayerChunk.x &&
      playerChunk.z === this.lastPlayerChunk.z
    ) {
      return;
    }

    this.lastPlayerChunk = playerChunk;

    // Load chunks around player in all directions (infinite world)
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
        this.loadChunk(x, z);
      }
    }

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
    // For height queries, we generate height on-demand
    return this.generateHeightAt(worldX, worldZ);
  }

  cleanup() {
    // Clean up all chunks
    for (const [key, chunk] of this.chunks) {
      this.scene.remove(chunk);
      chunk.geometry.dispose();
      chunk.material.dispose();
    }
    this.chunks.clear();

    // Clean up geometry pool
    this.chunkPool.forEach((geometry) => geometry.dispose());
    this.chunkPool = [];
  }
}
