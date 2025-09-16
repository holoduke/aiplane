import * as THREE from "three";

// Individual terrain chunk
class TerrainChunk {
  constructor(x, z, size, level) {
    this.x = x;
    this.z = z;
    this.size = size;
    this.level = level;
    this.mesh = null;
    this.geometry = null;
    this.material = null;

    // Generate debug color based on position and level
    this.debugColor = this.generateDebugColor();
  }

  generateDebugColor() {
    // Create distinct colors based on LOD level
    switch (this.level) {
      case 0:
        return new THREE.Color(1.0, 0.2, 0.2); // Red for level 0 (800 units - smallest chunks)
      case 1:
        return new THREE.Color(0.2, 1.0, 0.2); // Green for level 1 (1600 units)
      case 2:
        return new THREE.Color(0.2, 0.2, 1.0); // Blue for level 2 (3200 units)
      case 3:
        return new THREE.Color(1.0, 1.0, 0.2); // Yellow for level 3 (6400 units)
      case 4:
        return new THREE.Color(1.0, 0.2, 1.0); // Magenta for level 4 (12800 units)
      default:
        // Fallback with position-based color for even larger chunks
        const hash = Math.abs(this.x * 73 + this.z * 37) % 1000;
        const r = ((hash % 100) / 100) * 0.7 + 0.3;
        const g = (((hash / 100) % 100) / 100) * 0.7 + 0.3;
        const b = (((hash / 10000) % 100) / 100) * 0.7 + 0.3;
        return new THREE.Color(r, g, b);
    }
  }

  create(scene) {
    if (this.mesh) return; // Already created

    // Use minimal geometry with visible triangles for debugging
    const resolution = 2; // 2x2 = 8 triangles, 9 vertices - minimal but visible

    // Geometry creation logging disabled for performance

    this.geometry = new THREE.PlaneGeometry(
      this.size,
      this.size,
      resolution,
      resolution
    );

    // Rotate to be horizontal (Y-up)
    this.geometry.rotateX(-Math.PI / 2);

    // Ensure proper normals for lighting
    this.geometry.computeVertexNormals();

    // Create debug material with flat shading and double-sided rendering
    this.material = new THREE.MeshLambertMaterial({
      color: this.debugColor,
      flatShading: true,
      wireframe: false, // Set to true for wireframe debugging
      //side: THREE.DoubleSide, // Render both sides to ensure visibility
      transparent: false,
      opacity: 1.0,
    });

    // Wireframe enabled for debugging triangles
    this.wireframeGeometry = this.geometry.clone();
    this.wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      opacity: 0.5,
      transparent: true,
    });
    this.wireframeMesh = new THREE.Mesh(
      this.wireframeGeometry,
      this.wireframeMaterial
    );

    // Create main mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, -50, this.z); // Slightly below ground level for better visibility

    // Position wireframe mesh slightly above the main mesh to be visible
    this.wireframeMesh.position.set(this.x, -49, this.z);

    // Ensure the mesh casts and receives shadows (if lighting is enabled)
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    // Add both meshes to scene for debugging
    scene.add(this.mesh);
    scene.add(this.wireframeMesh);

    // Chunk creation logging disabled for performance
  }

  destroy(scene) {
    if (this.mesh) {
      scene.remove(this.mesh);
      this.mesh = null;
    }

    if (this.wireframeMesh) {
      scene.remove(this.wireframeMesh);
      this.wireframeMesh = null;
    }

    // Dispose of geometry and materials
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }

    if (this.wireframeGeometry) {
      this.wireframeGeometry.dispose();
      this.wireframeGeometry = null;
    }

    if (this.material) {
      this.material.dispose();
      this.material = null;
    }

    if (this.wireframeMaterial) {
      this.wireframeMaterial.dispose();
      this.wireframeMaterial = null;
    }
  }

  // Placeholder for future heightmap functionality
  getHeightAtPosition(x, z) {
    // For now, return 0 (flat terrain)
    // Later this will sample from heightmap
    return 0;
  }
}

export class QuadChunkTerrain {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;

    // Three LOD level system - squares subdivide into smaller squares
    this.baseChunkSize = 400; // Smallest chunk size (level 0) - red
    this.maxChunks = 120; // Enough for mixed LOD levels
    this.maxLevel = 2; // 0=400 (red), 1=800 (green), 2=1600 (blue)
    
    // Distance thresholds for each subdivision level
    this.lodDistances = [
      1000, // Level 0 (400) - subdivide green to red when closer than this
      2400  // Level 1 (800) - subdivide blue to green when closer than this
    ];

    console.log(
      `🔵🟢🔴 Three LOD system: Level 0=${this.baseChunkSize} (red), Level 1=${this.baseChunkSize * 2} (green), Level 2=${this.baseChunkSize * 4} (blue)`
    );

    // Configurable terrain generation settings
    this.settings = {
      forwardOffset: 1000, // Moderate forward offset
      viewDistance: 40000, // Increased to include adjacent roots for gradual expansion
      updateThreshold: 100, // More responsive for testing LOD
    };

    // Active chunks tracking
    this.activeChunks = new Map(); // key -> TerrainChunk

    // Performance tracking
    this.lastUpdatePosition = new THREE.Vector3(Infinity, Infinity, Infinity);

    console.log(
      "🌍 QuadChunkTerrain initialized with LOD system:",
      "base size:",
      this.baseChunkSize,
      "max level:",
      this.maxLevel,
      "max chunks:",
      this.maxChunks
    );

    // Force initial update at origin to show chunks immediately
    this.update(new THREE.Vector3(0, 0, 0));
  }

  update(playerPosition) {
    // Only update if player moved significantly
    const distance = playerPosition.distanceTo(this.lastUpdatePosition);
    if (distance < this.settings.updateThreshold) {
      return;
    }

    // Smart update strategy: rebuild when needed
    const needsFullRebuild =
      distance > this.settings.updateThreshold * 2 ||
      this.activeChunks.size < 15;

    if (!needsFullRebuild && this.activeChunks.size > 30) {
      // Skip update if we have sufficient chunks and moved very little
      return;
    }

    this.lastUpdatePosition.copy(playerPosition);

    console.log(
      `🌍 Updating terrain LOD around player at (${playerPosition.x.toFixed(
        0
      )}, ${playerPosition.z.toFixed(0)})`
    );

    // Incremental update system - only create/destroy chunks when actually needed
    const requiredChunks = new Set(); // Track which chunks we actually need

    // Get camera direction and offset terrain center forward
    const cameraDirection = new THREE.Vector3();
    this.camera.getWorldDirection(cameraDirection);

    // Offset terrain center forward using configurable setting
    const terrainCenterX =
      playerPosition.x + cameraDirection.x * this.settings.forwardOffset;
    const terrainCenterZ =
      playerPosition.z + cameraDirection.z * this.settings.forwardOffset;

    // Define chunk sizes for all three levels
    const redChunkSize = this.baseChunkSize;      // 400 (level 0)
    const greenChunkSize = this.baseChunkSize * 2; // 800 (level 1)  
    const blueChunkSize = this.baseChunkSize * 4;  // 1600 (level 2)
    
    const gridRadius = 4; // Cover reasonable area
    
    // Build set of required chunks without creating them yet
    const blueGridSize = blueChunkSize;
    const centerBlueX = Math.floor(terrainCenterX / blueGridSize);
    const centerBlueZ = Math.floor(terrainCenterZ / blueGridSize);
    
    for (let x = centerBlueX - gridRadius; x <= centerBlueX + gridRadius; x++) {
      for (let z = centerBlueZ - gridRadius; z <= centerBlueZ + gridRadius; z++) {
        const worldX = x * blueGridSize;
        const worldZ = z * blueGridSize;
        
        // Calculate distance from this position to terrain center
        const distance = Math.sqrt(
          (worldX - terrainCenterX) ** 2 + (worldZ - terrainCenterZ) ** 2
        );
        
        if (distance < this.lodDistances[0]) {
          // Very close: Need 16 red chunks (4x4 grid)
          for (let rx = 0; rx < 4; rx++) {
            for (let rz = 0; rz < 4; rz++) {
              const redX = worldX - blueChunkSize/2 + redChunkSize/2 + rx * redChunkSize;
              const redZ = worldZ - blueChunkSize/2 + redChunkSize/2 + rz * redChunkSize;
              const key = this.getChunkKey(redX, redZ, redChunkSize);
              requiredChunks.add(key);
            }
          }
        } else if (distance < this.lodDistances[1]) {
          // Medium distance: Need 4 green chunks (2x2 grid)
          for (let gx = 0; gx < 2; gx++) {
            for (let gz = 0; gz < 2; gz++) {
              const greenX = worldX - blueChunkSize/2 + greenChunkSize/2 + gx * greenChunkSize;
              const greenZ = worldZ - blueChunkSize/2 + greenChunkSize/2 + gz * greenChunkSize;
              const key = this.getChunkKey(greenX, greenZ, greenChunkSize);
              requiredChunks.add(key);
            }
          }
        } else {
          // Far: Need 1 blue chunk
          const key = this.getChunkKey(worldX, worldZ, blueChunkSize);
          requiredChunks.add(key);
        }
      }
    }
    
    // Remove chunks that are no longer needed
    const chunksToRemove = [];
    for (const [key, chunk] of this.activeChunks.entries()) {
      if (!requiredChunks.has(key)) {
        chunksToRemove.push(key);
      }
    }
    
    for (const key of chunksToRemove) {
      const chunk = this.activeChunks.get(key);
      chunk.destroy();
      this.activeChunks.delete(key);
    }
    
    // Create chunks that are needed but don't exist yet
    let newChunksCreated = 0;
    for (const key of requiredChunks) {
      if (!this.activeChunks.has(key) && this.activeChunks.size < this.maxChunks) {
        const [x, z, size] = this.parseChunkKey(key);
        const level = size === redChunkSize ? 0 : size === greenChunkSize ? 1 : 2;
        this.createSquareChunk(x, z, size, level);
        newChunksCreated++;
      }
    }
    
    if (newChunksCreated > 0 || chunksToRemove.length > 0) {
      console.log(
        `🌍 Terrain updated: +${newChunksCreated} chunks created, -${chunksToRemove.length} chunks removed, total: ${this.activeChunks.size}/${this.maxChunks}`
      );
    }

  }
  
  // Helper method to generate unique chunk keys
  getChunkKey(x, z, size) {
    return `${Math.round(x)},${Math.round(z)},${size}`;
  }
  
  // Helper method to parse chunk keys back to coordinates
  parseChunkKey(key) {
    const [x, z, size] = key.split(',').map(Number);
    return [x, z, size];
  }

  clearAllChunks() {
    for (const [key, chunk] of this.activeChunks.entries()) {
      chunk.destroy(this.scene);
    }
    this.activeChunks.clear();
  }

  cleanupOldChunks(oldChunks) {
    // Remove all old chunks since we rebuilt the entire LOD structure
    let removedCount = 0;
    for (const [key, chunk] of oldChunks.entries()) {
      // Destroy the old chunk
      chunk.destroy(this.scene);
      removedCount++;
    }
    
    if (removedCount > 0) {
      console.log(`🧹 Cleaned up ${removedCount} old chunks after LOD rebuild`);
    }
  }

  buildQuadTree(centerX, centerZ, size, terrainCenterX, terrainCenterZ, depth = 0) {
    // Stop if we're at chunk limit or max depth
    if (this.activeChunks.size >= this.maxChunks || depth > 3) {
      return;
    }

    // Calculate distance from this chunk center to terrain center
    const distance = Math.sqrt(
      (centerX - terrainCenterX) ** 2 + (centerZ - terrainCenterZ) ** 2
    );

    // Determine what level this chunk should be based on distance
    let targetLevel = this.maxLevel; // Start with largest chunks (blue)
    if (distance < this.lodDistance) {
      targetLevel = 0; // Close = small chunks (red)
    }

    const targetSize = this.baseChunkSize * Math.pow(2, targetLevel);

    console.log(`🔍 Pos(${centerX}, ${centerZ}) size=${size} dist=${distance.toFixed(0)} → target level=${targetLevel} size=${targetSize}`);

    if (size === targetSize) {
      // Create chunk at this level
      this.createSquareChunk(centerX, centerZ, size, targetLevel);
    } else if (size > targetSize) {
      // Subdivide into 4 smaller square chunks
      const childSize = size / 2;
      const offset = childSize / 2;

      console.log(`📂 Subdividing ${size} → 4 chunks of ${childSize}`);

      // Create 4 child chunks (proper quad tree subdivision)
      this.buildQuadTree(centerX - offset, centerZ - offset, childSize, terrainCenterX, terrainCenterZ, depth + 1);
      this.buildQuadTree(centerX + offset, centerZ - offset, childSize, terrainCenterX, terrainCenterZ, depth + 1);
      this.buildQuadTree(centerX - offset, centerZ + offset, childSize, terrainCenterX, terrainCenterZ, depth + 1);
      this.buildQuadTree(centerX + offset, centerZ + offset, childSize, terrainCenterX, terrainCenterZ, depth + 1);
    }
    // If size < targetSize, don't create anything (shouldn't happen in proper quad tree)
  }

  createSquareChunk(centerX, centerZ, size, level) {
    // Create unique key for this square chunk using consistent format
    const key = this.getChunkKey(centerX, centerZ, size);

    // Skip if chunk already exists (prevents duplicate creation during LOD transitions)
    if (this.activeChunks.has(key)) {
      return true;
    }

    // Stop if we're at chunk limit
    if (this.activeChunks.size >= this.maxChunks) {
      console.log(`⚠️ Square chunk limit ${this.maxChunks} reached`);
      return false;
    }

    try {
      const chunk = new TerrainChunk(centerX, centerZ, size, level);
      chunk.create(this.scene);
      this.activeChunks.set(key, chunk);

      const levelNames = ['red', 'green', 'blue'];
      const levelName = levelNames[level] || 'unknown';
      console.log(
        `🟦 Created ${levelName} chunk ${this.activeChunks.size}/${this.maxChunks} at (${centerX}, ${centerZ}) size ${size} level ${level}`
      );
      return true;
    } catch (error) {
      console.error(
        `❌ Failed to create square chunk at (${centerX}, ${centerZ}):`,
        error
      );
      return false;
    }
  }

  isChunkInCameraFrustum(chunkX, chunkZ, chunkSize) {
    // Get camera properties
    const camera = this.camera;
    const cameraPosition = camera.position;

    // Calculate camera forward direction from camera matrix
    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);

    // Project camera direction onto XZ plane (ignore Y component)
    const cameraForwardXZ = new THREE.Vector2(
      cameraDirection.x,
      cameraDirection.z
    ).normalize();

    // Calculate vector from camera to chunk center
    const chunkCenter = new THREE.Vector2(chunkX, chunkZ);
    const cameraPositionXZ = new THREE.Vector2(
      cameraPosition.x,
      cameraPosition.z
    );
    const cameraToChunk = chunkCenter.clone().sub(cameraPositionXZ);

    // If chunk is very close, always include it (avoid culling chunks right under the camera)
    if (cameraToChunk.length() < chunkSize) {
      return true;
    }

    // Normalize the vector to chunk
    const cameraToChunkNormalized = cameraToChunk.normalize();

    // Calculate the dot product (cosine of angle between camera direction and chunk direction)
    const dotProduct = cameraForwardXZ.dot(cameraToChunkNormalized);

    // Camera FOV consideration - tightened to 90 degrees total view angle
    const frustumCosine = 0.0; // Stricter: ~90 degrees (reduces side chunks)

    // Chunk is visible if it's roughly in front of the camera
    const isInFrustum = dotProduct > frustumCosine;

    // Frustum culling logging disabled for performance

    return isInFrustum;
  }

  // Old createChunk method removed - using createSquareChunk instead

  // Get height at position (for compatibility with existing code)
  getHeightAtPosition(x, z, useInterpolation = false) {
    // For now, return 0 (flat terrain)
    // Later this will sample from heightmap
    return 0;
  }

  // Cleanup method
  cleanup() {
    // Destroy all active chunks
    for (const [key, chunk] of this.activeChunks.entries()) {
      chunk.destroy(this.scene);
    }

    this.activeChunks.clear();

    console.log("🧹 QuadChunkTerrain cleaned up");
  }

  // Method to adjust terrain generation settings
  updateSettings(newSettings) {
    Object.assign(this.settings, newSettings);
    console.log("🔧 Terrain settings updated:", this.settings);

    // Force terrain rebuild with new settings
    this.lastUpdatePosition.set(Infinity, Infinity, Infinity);
  }

  // Debug information
  getDebugInfo() {
    const chunksByLevel = {};
    for (const [key, chunk] of this.activeChunks.entries()) {
      chunksByLevel[chunk.level] = (chunksByLevel[chunk.level] || 0) + 1;
    }

    return {
      activeChunks: this.activeChunks.size,
      baseChunkSize: this.baseChunkSize,
      maxChunks: this.maxChunks,
      maxLevel: this.maxLevel,
      settings: this.settings,
      chunksByLevel: chunksByLevel,
      lodDistances: this.lodDistances,
    };
  }
}
