import * as THREE from "three";

export class StreamingHeightmapTerrain {
  constructor(scene) {
    this.scene = scene;
    this.heightData = null;
    this.metadata = null;
    // Streaming mesh approach with LOD system
    this.terrainMeshes = []; // Multiple LOD meshes
    this.terrainSize = 16000; // 16km visible terrain
    this.heightmapTileSize = 8000; // Each heightmap tile covers 8km
    // LOD system - multiple resolution levels
    this.lodLevels = [
      { size: 4000, resolution: 1024, name: "Ultra", maxDistance: 2000 }, // Ultra detail for close terrain
      { size: 8000, resolution: 256, name: "High", maxDistance: 4000 }, // High detail for medium distance
      { size: 16000, resolution: 128, name: "Medium", maxDistance: 8000 }, // Medium detail for far terrain
      { size: 32000, resolution: 128, name: "Low", maxDistance: 16000 }, // Low detail for far terrain
    ];
    // Player tracking
    this.lastPlayerPosition = new THREE.Vector3();
    this.updateThreshold = 100; // Update when player moves 100m
    this.init();
  }

  async init() {
    console.log("🚀 Initializing Streaming Heightmap Terrain...");
    try {
      await this.loadHeightmapData();
      this.createStreamingTerrain();
      console.log("✅ Streaming heightmap terrain ready!");
    } catch (error) {
      console.error("❌ Failed to load heightmap:", error);
      this.createFallbackTerrain();
    }
  }

  async loadHeightmapData() {
    const metaResponse = await fetch("/heightmaps/heightmap-info.json");
    if (!metaResponse.ok) {
      throw new Error("Could not load heightmap metadata");
    }
    this.metadata = await metaResponse.json();
    const heightmapResponse = await fetch("/heightmaps/heightmap.pgm");
    if (!heightmapResponse.ok) {
      throw new Error("Could not load heightmap file");
    }
    const arrayBuffer = await heightmapResponse.arrayBuffer();
    this.heightData = this.parsePGM(arrayBuffer);
    console.log(
      `📊 Heightmap loaded: ${this.metadata.size}x${this.metadata.size} pixels`
    );
  }

  parsePGM(arrayBuffer) {
    const data = new Uint8Array(arrayBuffer);
    const decoder = new TextDecoder();
    let offset = 0;

    function readLine() {
      let line = "";
      while (
        offset < data.length &&
        data[offset] !== 10 &&
        data[offset] !== 13
      ) {
        line += String.fromCharCode(data[offset]);
        offset++;
      }
      if (
        offset < data.length &&
        data[offset] === 13 &&
        data[offset + 1] === 10
      )
        offset += 2;
      else if (offset < data.length) offset++;
      return line.trim();
    }

    let magic = readLine();
    while (magic.startsWith("#") || magic === "") magic = readLine();
    if (magic !== "P5") throw new Error("Invalid PGM format: Expected P5");

    let width, height;
    while (true) {
      let line = readLine();
      if (line.startsWith("#") || line === "") continue;
      const parts = line.split(/\s+/).filter((p) => p !== "");
      width = parseInt(parts[0]);
      height = parseInt(parts[1]);
      break;
    }

    let maxval;
    while (true) {
      let line = readLine();
      if (line.startsWith("#") || line === "") continue;
      maxval = parseInt(line);
      break;
    }

    if (maxval !== 255)
      console.warn("PGM maxval is not 255, may affect height scaling");
    return data.slice(offset);
  }

  createStreamingTerrain() {
    this.cleanup(); // Clear any existing meshes to manage memory
    // Create multiple LOD terrain meshes
    this.lodLevels.forEach((lod, index) => {
      const geometry = new THREE.PlaneGeometry(
        lod.size,
        lod.size,
        lod.resolution - 1,
        lod.resolution - 1
      );
      // Define uniforms explicitly
      const uniforms = {
        minDistance: {
          value: index > 0 ? this.lodLevels[index - 1].maxDistance : 0,
        },
        maxDistance: { value: lod.maxDistance },
        center: { value: new THREE.Vector3() },
      };
      // Create material with enhanced visuals
      const material = new THREE.MeshLambertMaterial({
        vertexColors: true,
        transparent: false,
        side: THREE.FrontSide,
        uniforms: uniforms, // Assign uniforms to material
      });
      // Modify shader to discard fragments outside LOD distance range
      material.onBeforeCompile = (shader) => {
        shader.uniforms.minDistance = uniforms.minDistance;
        shader.uniforms.maxDistance = uniforms.maxDistance;
        shader.uniforms.center = uniforms.center;
        shader.vertexShader =
          `varying vec3 vWorldPosition;\n` + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>\nvWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`
        );
        shader.fragmentShader =
          `uniform float minDistance;\nuniform float maxDistance;\nuniform vec3 center;\nvarying vec3 vWorldPosition;\n` +
          shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace(
          `#include <clipping_planes_fragment>`,
          `#include <clipping_planes_fragment>\nfloat dist = length(vec2(vWorldPosition.x - center.x, vWorldPosition.z - center.z));\nif (dist < minDistance || dist > maxDistance) discard;`
        );
      };
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      mesh.userData.lodLevel = index;
      mesh.userData.lodInfo = lod;
      this.terrainMeshes.push(mesh);
      this.scene.add(mesh);
    });
    // Initial terrain generation for all LOD levels
    this.updateAllTerrainGeometry(new THREE.Vector3(0, 0, 0));
    console.log(
      `🏔️ Multi-LOD streaming terrain created: ${this.lodLevels.length} levels`
    );
    console.log(
      ` Ultra: ${this.lodLevels[0].resolution}x${this.lodLevels[0].resolution} (${this.lodLevels[0].size}m, max ${this.lodLevels[0].maxDistance}m)`
    );
    console.log(
      ` High: ${this.lodLevels[1].resolution}x${this.lodLevels[1].resolution} (${this.lodLevels[1].size}m, max ${this.lodLevels[1].maxDistance}m)`
    );
    console.log(
      ` Medium: ${this.lodLevels[2].resolution}x${this.lodLevels[2].resolution} (${this.lodLevels[2].size}m, max ${this.lodLevels[2].maxDistance}m)`
    );
    console.log(
      ` Low: ${this.lodLevels[3].resolution}x${this.lodLevels[3].resolution} (${this.lodLevels[3].size}m, max ${this.lodLevels[3].maxDistance}m)`
    );
  }

  updateAllTerrainGeometry(centerPosition) {
    if (!this.terrainMeshes.length) return;
    this.terrainMeshes.forEach((terrainMesh, lodIndex) => {
      this.updateTerrainGeometry(terrainMesh, centerPosition, lodIndex);
    });
  }

  updateTerrainGeometry(terrainMesh, centerPosition, lodIndex) {
    const lod = this.lodLevels[lodIndex];
    const geometry = terrainMesh.geometry;
    const vertices = geometry.attributes.position.array;
    const colors = new Float32Array(vertices.length);
    // Calculate terrain bounds centered on player
    const halfSize = lod.size / 2;
    const minX = centerPosition.x - halfSize;
    const minZ = centerPosition.z - halfSize;
    let vertexIndex = 0;
    for (let z = 0; z < lod.resolution; z++) {
      for (let x = 0; x < lod.resolution; x++) {
        // World position for this vertex
        const worldX = minX + (x / (lod.resolution - 1)) * lod.size;
        const worldZ = minZ + (z / (lod.resolution - 1)) * lod.size;
        // Get height from tiled heightmap or procedural
        const height = this.getHeightAtPosition(worldX, worldZ);
        // Set vertex height (Z is up in plane geometry)
        vertices[vertexIndex * 3 + 2] = height;
        // Set vertex color based on height
        this.setVertexColor(colors, vertexIndex, height);
        vertexIndex++;
      }
    }
    // Update geometry
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
    // Position the mesh to center on player
    terrainMesh.position.set(centerPosition.x, 0, centerPosition.z);
    // Update shader uniform for center
    if (terrainMesh.material.uniforms && terrainMesh.material.uniforms.center) {
      terrainMesh.material.uniforms.center.value.copy(centerPosition);
    } else {
      console.warn(
        "Uniforms not properly initialized for mesh at LOD",
        lodIndex
      );
    }
  }

  getHeightAtPosition(worldX, worldZ) {
    if (!this.heightData || !this.metadata) {
      return this.generateProceduralHeight(worldX, worldZ);
    }
    // Convert world coordinates to heightmap UV with infinite tiling
    let u = (worldX / this.heightmapTileSize) % 1;
    let v = (worldZ / this.heightmapTileSize) % 1;
    // Handle negative coordinates properly
    if (u < 0) u += 1;
    if (v < 0) v += 1;
    // Bilinear interpolation for smooth terrain
    const size = this.metadata.size - 1;
    const pixelX = u * size;
    const pixelY = v * size;
    const x0 = Math.floor(pixelX);
    const x1 = Math.min(x0 + 1, size);
    const y0 = Math.floor(pixelY);
    const y1 = Math.min(y0 + 1, size);
    // Bilinear interpolation
    const fx = pixelX - x0;
    const fy = pixelY - y0;
    const h00 = this.heightData[y0 * this.metadata.size + x0] || 0;
    const h10 = this.heightData[y0 * this.metadata.size + x1] || 0;
    const h01 = this.heightData[y1 * this.metadata.size + x0] || 0;
    const h11 = this.heightData[y1 * this.metadata.size + x1] || 0;
    const height =
      h00 * (1 - fx) * (1 - fy) +
      h10 * fx * (1 - fy) +
      h01 * (1 - fx) * fy +
      h11 * fx * fy;
    return (height / 255) * (this.metadata.maxHeight || 700);
  }

  generateProceduralHeight(worldX, worldZ) {
    let height = 50; // Base height
    // Large scale features
    height += Math.sin(worldX * 0.0003) * Math.cos(worldZ * 0.0002) * 200;
    height += Math.sin(worldX * 0.0008 + worldZ * 0.0006) * 150;
    // Medium scale hills
    height += Math.sin(worldX * 0.002) * Math.cos(worldZ * 0.0025) * 80;
    // Fine detail
    height += Math.sin(worldX * 0.01) * Math.sin(worldZ * 0.012) * 30;
    return Math.max(0, Math.min(600, height));
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3;
    if (height < 20) {
      // Deep water - dark blue
      colors[i] = 0.1;
      colors[i + 1] = 0.3;
      colors[i + 2] = 0.8;
    } else if (height < 50) {
      // Shallow water - light blue
      colors[i] = 0.2;
      colors[i + 1] = 0.6;
      colors[i + 2] = 1.0;
    } else if (height < 120) {
      // Lowlands - vibrant green
      colors[i] = 0.2;
      colors[i + 1] = 0.8;
      colors[i + 2] = 0.3;
    } else if (height < 200) {
      // Hills - medium green
      colors[i] = 0.3;
      colors[i + 1] = 0.7;
      colors[i + 2] = 0.2;
    } else if (height < 300) {
      // Foothills - dark green
      colors[i] = 0.25;
      colors[i + 1] = 0.5;
      colors[i + 2] = 0.15;
    } else if (height < 450) {
      // Mountain slopes - brown
      colors[i] = 0.6;
      colors[i + 1] = 0.4;
      colors[i + 2] = 0.2;
    } else if (height < 550) {
      // Rocky peaks - gray
      colors[i] = 0.5;
      colors[i + 1] = 0.5;
      colors[i + 2] = 0.5;
    } else {
      // Snow peaks - white
      colors[i] = 0.9;
      colors[i + 1] = 0.95;
      colors[i + 2] = 1.0;
    }
  }

  createFallbackTerrain() {
    console.log("🔄 Creating fallback procedural terrain...");
    this.cleanup(); // Clear any existing meshes to manage memory
    // Create fallback terrain with same LOD system
    this.lodLevels.forEach((lod, index) => {
      const geometry = new THREE.PlaneGeometry(
        lod.size,
        lod.size,
        lod.resolution - 1,
        lod.resolution - 1
      );
      // Define uniforms explicitly
      const uniforms = {
        minDistance: {
          value: index > 0 ? this.lodLevels[index - 1].maxDistance : 0,
        },
        maxDistance: { value: lod.maxDistance },
        center: { value: new THREE.Vector3() },
      };
      const material = new THREE.MeshLambertMaterial({
        vertexColors: true,
        side: THREE.FrontSide,
        uniforms: uniforms, // Assign uniforms to material
      });
      // Modify shader to discard fragments outside LOD distance range
      material.onBeforeCompile = (shader) => {
        shader.uniforms.minDistance = uniforms.minDistance;
        shader.uniforms.maxDistance = uniforms.maxDistance;
        shader.uniforms.center = uniforms.center;
        shader.vertexShader =
          `varying vec3 vWorldPosition;\n` + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>\nvWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`
        );
        shader.fragmentShader =
          `uniform float minDistance;\nuniform float maxDistance;\nuniform vec3 center;\nvarying vec3 vWorldPosition;\n` +
          shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace(
          `#include <clipping_planes_fragment>`,
          `#include <clipping_planes_fragment>\nfloat dist = length(vec2(vWorldPosition.x - center.x, vWorldPosition.z - center.z));\nif (dist < minDistance || dist > maxDistance) discard;`
        );
      };
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      mesh.userData.lodLevel = index;
      mesh.userData.lodInfo = lod;
      this.terrainMeshes.push(mesh);
      this.scene.add(mesh);
    });
    // Initial update using procedural heights
    this.updateAllTerrainGeometry(new THREE.Vector3(0, 0, 0));
    console.log("🏔️ Fallback terrain created with multiple LOD levels");
  }

  update(playerPosition) {
    if (!this.terrainMeshes.length) return;
    // Only update when player has moved significantly
    const distance = playerPosition.distanceTo(this.lastPlayerPosition);
    if (distance > this.updateThreshold) {
      this.updateAllTerrainGeometry(playerPosition);
      this.lastPlayerPosition.copy(playerPosition);
    }
  }

  cleanup() {
    this.terrainMeshes.forEach((mesh) => {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    });
    this.terrainMeshes = [];
  }
}
