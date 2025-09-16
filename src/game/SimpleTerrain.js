import * as THREE from "three";

// Simple terrain tile class
class TerrainTile {
  constructor(x, z, size, detail) {
    this.x = x;
    this.z = z;
    this.size = size;
    this.detail = detail; // number of segments per side
    this.mesh = null;
    this.geometry = null;
    this.material = null;
  }

  create(scene) {
    if (this.mesh) return;

    // Create simple plane geometry
    this.geometry = new THREE.PlaneGeometry(
      this.size,
      this.size,
      this.detail,
      this.detail
    );

    // Rotate to be horizontal
    this.geometry.rotateX(-Math.PI / 2);

    // Add some simple height variation
    const vertices = this.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i] + this.x;
      const z = vertices[i + 2] + this.z;
      
      // Simple noise-like height
      vertices[i + 1] = (Math.sin(x * 0.01) + Math.cos(z * 0.01)) * 20;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.computeVertexNormals();

    // Create material based on detail level
    const colors = [
      0xff0000, // Red for highest detail
      0x00ff00, // Green for medium detail  
      0x0000ff  // Blue for lowest detail
    ];
    
    this.material = new THREE.MeshLambertMaterial({
      color: colors[this.detail] || 0x888888,
      wireframe: false
    });

    // Create mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, 0, this.z);
    
    scene.add(this.mesh);
  }

  destroy(scene) {
    if (this.mesh) {
      scene.remove(this.mesh);
      this.geometry?.dispose();
      this.material?.dispose();
      this.mesh = null;
      this.geometry = null;
      this.material = null;
    }
  }

  getKey() {
    return `${this.x}_${this.z}_${this.size}`;
  }
}

// Simple LOD terrain system
export class SimpleTerrain {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    
    // Simple configuration
    this.tileSize = 1000;
    this.tiles = new Map();
    this.lastCameraPosition = new THREE.Vector3();
    this.updateDistance = 500; // Only update when camera moves this far
    
    console.log("🌍 SimpleTerrain initialized");
    
    // Create initial tiles
    this.generateTiles();
  }

  generateTiles() {
    const cameraX = this.camera.position.x;
    const cameraZ = this.camera.position.z;
    
    // Clear existing tiles
    this.clearTiles();
    
    // Generate 3x3 grid of tiles around camera
    const radius = 1;
    for (let x = -radius; x <= radius; x++) {
      for (let z = -radius; z <= radius; z++) {
        const tileX = Math.floor(cameraX / this.tileSize) * this.tileSize + x * this.tileSize;
        const tileZ = Math.floor(cameraZ / this.tileSize) * this.tileSize + z * this.tileSize;
        
        // Calculate distance from camera for LOD
        const distance = Math.sqrt(
          Math.pow(tileX - cameraX, 2) + Math.pow(tileZ - cameraZ, 2)
        );
        
        // Determine detail level based on distance
        let detail;
        if (distance < 500) {
          detail = 0; // High detail (64 segments)
        } else if (distance < 1500) {
          detail = 1; // Medium detail (32 segments)
        } else {
          detail = 2; // Low detail (16 segments)
        }
        
        const segments = [64, 32, 16][detail];
        
        // Create tile
        const tile = new TerrainTile(tileX, tileZ, this.tileSize, segments);
        tile.create(this.scene);
        this.tiles.set(tile.getKey(), tile);
      }
    }
    
    console.log(`🔄 Generated ${this.tiles.size} simple terrain tiles`);
  }

  update(deltaTime) {
    const cameraPosition = this.camera.position;
    
    // Only update if camera moved significantly
    const distance = cameraPosition.distanceTo(this.lastCameraPosition);
    if (distance > this.updateDistance) {
      this.generateTiles();
      this.lastCameraPosition.copy(cameraPosition);
    }
  }

  clearTiles() {
    for (const [key, tile] of this.tiles) {
      tile.destroy(this.scene);
    }
    this.tiles.clear();
  }

  getHeightAtPosition(x, z) {
    // Simple height calculation matching the terrain generation
    return (Math.sin(x * 0.01) + Math.cos(z * 0.01)) * 20;
  }

  cleanup() {
    this.clearTiles();
    console.log("🧹 SimpleTerrain cleaned up");
  }
}