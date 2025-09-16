import * as THREE from "three";

// Improved Noise implementation
class ImprovedNoise {
  constructor() {
    this.p = new Array(512);
    this.permutation = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148,
      247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32,
      57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,
      74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
      60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
      65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
      200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64,
      52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212,
      207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213,
      119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
      129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104,
      218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
    ];

    for (let i = 0; i < 256; i++) {
      this.p[256 + i] = this.p[i] = this.permutation[i];
    }
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t, a, b) {
    return a + t * (b - a);
  }

  grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.p[X] + Y;
    const AA = this.p[A] + Z;
    const AB = this.p[A + 1] + Z;
    const B = this.p[X + 1] + Y;
    const BA = this.p[B] + Z;
    const BB = this.p[B + 1] + Z;

    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)),
        this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))
      ),
      this.lerp(
        v,
        this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)),
        this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1), this.grad(this.p[BB + 1], x - 1, y - 1, z - 1))
      )
    );
  }
}

// Edge flags for morphing
const Edge = {
  NONE: 0,
  TOP: 1,
  LEFT: 2,
  BOTTOM: 4,
  RIGHT: 8
};

// Terrain tile class
class TerrainTile extends THREE.Object3D {
  constructor(worldWidth, level, x, z, heightData, material) {
    super();
    
    this.worldWidth = worldWidth;
    this.level = level;
    this.x = x;
    this.z = z;
    this.heightData = heightData;
    this.size = worldWidth / Math.pow(2, level);
    this.edgeMorph = Edge.NONE;
    
    // Create geometry - standard plane
    this.geometry = new THREE.PlaneGeometry(1, 1, 128, 128);
    this.geometry.rotateX(-Math.PI / 2);
    
    // Create material instance
    this.material = material.clone();
    this.material.uniforms.uScale.value = this.size;
    this.material.uniforms.uTileOffset.value.set(x, z);
    this.material.uniforms.uEdgeMorph.value = this.edgeMorph;
    
    // Create mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(this.size, 1, this.size);
    this.mesh.position.set(x, 0, z);
    
    this.add(this.mesh);
  }
  
  setEdgeMorph(edgeMorph) {
    this.edgeMorph = edgeMorph;
    this.material.uniforms.uEdgeMorph.value = edgeMorph;
  }
  
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}

// Main terrain class based on felixpalmer implementation
export class FelixTerrain extends THREE.Object3D {
  constructor(scene, camera, worldWidth = 1024, levels = 6, resolution = 128) {
    super();
    
    this.scene = scene;
    this.camera = camera;
    this.worldWidth = worldWidth;
    this.levels = levels;
    this.resolution = resolution;
    this.tiles = [];
    
    // Generate height data
    this.heightData = this.generateHeightData();
    
    // Create terrain material
    this.terrainMaterial = this.createTerrainMaterial();
    
    // Generate terrain tiles
    this.generateTerrain();
    
    // Add to scene
    scene.add(this);
    
    console.log(`🌍 FelixTerrain initialized: ${worldWidth}x${worldWidth}, ${levels} levels`);
  }
  
  generateHeightData() {
    const width = 1024;
    const size = width * width;
    const data = new Uint8Array(size * 4); // RGBA format needs 4 components
    
    const perlin = new ImprovedNoise();
    let quality = 1;
    const z = Math.random() * 100;
    
    // Initialize height accumulation array
    const heightValues = new Array(size).fill(0);
    
    // Do several passes to get more detail
    for (let iteration = 0; iteration < 4; iteration++) {
      for (let i = 0; i < size; i++) {
        const x = i % width;
        const y = Math.floor(i / width);
        heightValues[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality);
      }
      quality *= 5;
    }
    
    // Convert to texture data and normalize
    for (let i = 0; i < size; i++) {
      const heightValue = Math.min(255, Math.max(0, heightValues[i]));
      
      // Set RGBA values (store height in all channels for compatibility)
      const index = i * 4;
      data[index] = heightValue;     // R
      data[index + 1] = heightValue; // G  
      data[index + 2] = heightValue; // B
      data[index + 3] = heightValue; // A (height data)
    }
    
    const heightTexture = new THREE.DataTexture(data, width, width, THREE.RGBAFormat);
    heightTexture.wrapS = THREE.MirroredRepeatWrapping;
    heightTexture.wrapT = THREE.MirroredRepeatWrapping;
    heightTexture.magFilter = THREE.LinearFilter;
    heightTexture.minFilter = THREE.LinearFilter; // Don't use mipmaps initially
    heightTexture.generateMipmaps = false; // Disable mipmaps to avoid format issues
    heightTexture.needsUpdate = true;
    
    console.log("🗻 Generated height data texture (RGBA format)");
    return heightTexture;
  }
  
  createTerrainMaterial() {
    const vertexShader = `
      uniform vec3 uGlobalOffset;
      uniform sampler2D uHeightData;
      uniform vec2 uTileOffset;
      uniform float uScale;
      uniform int uEdgeMorph;
      
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vMorphFactor;
      
      #define TILE_RESOLUTION 128.0
      #define EDGE_MORPH_TOP 1
      #define EDGE_MORPH_LEFT 2
      #define EDGE_MORPH_BOTTOM 4
      #define EDGE_MORPH_RIGHT 8
      #define MORPH_REGION 0.3
      
      bool edgePresent(int edge) {
        int e = uEdgeMorph / edge;
        return 2 * (e / 2) != e;
      }
      
      float calculateMorph(vec3 p) {
        float morphFactor = 0.0;
        if (edgePresent(EDGE_MORPH_TOP) && p.y >= 1.0 - MORPH_REGION) {
          float m = 1.0 - clamp((1.0 - p.y) / MORPH_REGION, 0.0, 1.0);
          morphFactor = max(m, morphFactor);
        }
        if (edgePresent(EDGE_MORPH_LEFT) && p.x <= MORPH_REGION) {
          float m = 1.0 - clamp(p.x / MORPH_REGION, 0.0, 1.0);
          morphFactor = max(m, morphFactor);
        }
        if (edgePresent(EDGE_MORPH_BOTTOM) && p.y <= MORPH_REGION) {
          float m = 1.0 - clamp(p.y / MORPH_REGION, 0.0, 1.0);
          morphFactor = max(m, morphFactor);
        }
        if (edgePresent(EDGE_MORPH_RIGHT) && p.x >= 1.0 - MORPH_REGION) {
          float m = 1.0 - clamp((1.0 - p.x) / MORPH_REGION, 0.0, 1.0);
          morphFactor = max(m, morphFactor);
        }
        return morphFactor;
      }
      
      float getHeight(vec3 p) {
        vec2 st = p.xy / 1024.0;
        
        float h = 1024.0 * texture2D(uHeightData, st).a;
        h += 64.0 * texture2D(uHeightData, 16.0 * st).a;
        h += 4.0 * texture2D(uHeightData, 256.0 * st).a;
        
        return h * h / 2000.0;
      }
      
      void main() {
        vec3 worldPos = position;
        worldPos.xz *= uScale;
        worldPos.xz += uTileOffset;
        worldPos += uGlobalOffset;
        
        vMorphFactor = calculateMorph(position + vec3(0.5, 0.0, 0.5));
        
        float height = getHeight(worldPos);
        worldPos.y = height;
        
        // Calculate simple normal using nearby height samples
        float offset = uScale / 128.0;
        vec3 posX = worldPos + vec3(offset, 0.0, 0.0);
        vec3 posZ = worldPos + vec3(0.0, 0.0, offset);
        posX.y = getHeight(posX);
        posZ.y = getHeight(posZ);
        
        vec3 tangentX = posX - worldPos;
        vec3 tangentZ = posZ - worldPos;
        vec3 calculatedNormal = normalize(cross(tangentZ, tangentX));
        
        vPosition = worldPos;
        vNormal = calculatedNormal;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
      }
    `;
    
    const fragmentShader = `
      uniform float uScale;
      uniform sampler2D uHeightData;
      
      varying float vMorphFactor;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      vec3 colorForScale(float scale) {
        if (scale > 32.0) {
          scale /= 32.0;
        }
        if (scale <= 1.0) {
          return vec3(1.0, 0, 0);
        } else if (scale <= 2.0) {
          return vec3(0, 1.0, 0);
        } else if (scale <= 4.0) {
          return vec3(0, 0, 1.0);
        } else if (scale <= 8.0) {
          return vec3(1.0, 1.0, 0);
        } else if (scale <= 16.0) {
          return vec3(1.0, 0, 1.0);
        } else if (scale <= 32.0) {
          return vec3(1.0, 1.0, 1.0);
        }
        return vec3(0, 0, 0);
      }
      
      float getHeight(vec3 p) {
        vec2 st = p.xy / 1024.0;
        
        float h = 1024.0 * texture2D(uHeightData, st).a;
        h += 64.0 * texture2D(uHeightData, 16.0 * st).a;
        h += 4.0 * texture2D(uHeightData, 256.0 * st).a;
        
        return h * h / 2000.0;
      }
      
      void main() {
        vec3 light = vec3(80.0, 150.0, 50.0);
        vec3 color = colorForScale(uScale);
        
        // Use the passed normal instead of calculating it
        vec3 normal = normalize(vNormal);
        
        float incidence = dot(normalize(light - vPosition), normal);
        incidence = clamp(incidence, 0.0, 1.0);
        incidence = pow(incidence, 0.02);
        color = mix(vec3(0, 0, 0), color, incidence);
        
        // Add some ambient
        color += vec3(0.1, 0.1, 0.1);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;
    
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uGlobalOffset: { value: new THREE.Vector3(0, 0, 0) },
        uHeightData: { value: this.heightData },
        uTileOffset: { value: new THREE.Vector2(0, 0) },
        uScale: { value: 1.0 },
        uEdgeMorph: { value: Edge.NONE }
      },
      side: THREE.DoubleSide
    });
  }
  
  generateTerrain() {
    // Clear existing tiles
    this.clearTiles();
    
    // Generate tiles for each level
    for (let level = 0; level < this.levels; level++) {
      const scale = Math.pow(2, level);
      const tileSize = this.worldWidth / scale;
      const numTiles = scale;
      
      for (let x = 0; x < numTiles; x++) {
        for (let z = 0; z < numTiles; z++) {
          const tileX = (x - numTiles / 2) * tileSize + tileSize / 2;
          const tileZ = (z - numTiles / 2) * tileSize + tileSize / 2;
          
          const tile = new TerrainTile(
            this.worldWidth,
            level,
            tileX,
            tileZ,
            this.heightData,
            this.terrainMaterial
          );
          
          // Calculate edge morphing flags
          let edgeMorph = Edge.NONE;
          if (level > 0) {
            if (x === 0) edgeMorph |= Edge.LEFT;
            if (x === numTiles - 1) edgeMorph |= Edge.RIGHT;
            if (z === 0) edgeMorph |= Edge.BOTTOM;
            if (z === numTiles - 1) edgeMorph |= Edge.TOP;
          }
          tile.setEdgeMorph(edgeMorph);
          
          this.tiles.push(tile);
          this.add(tile);
        }
      }
    }
    
    console.log(`🔄 Generated ${this.tiles.length} terrain tiles`);
  }
  
  update(deltaTime) {
    // Update global offset based on camera position
    const cameraPos = this.camera.position;
    this.terrainMaterial.uniforms.uGlobalOffset.value.set(
      -cameraPos.x,
      0,
      -cameraPos.z
    );
  }
  
  clearTiles() {
    for (const tile of this.tiles) {
      this.remove(tile);
      tile.dispose();
    }
    this.tiles = [];
  }
  
  getHeightAtPosition(x, z) {
    // Sample height from noise function
    const perlin = new ImprovedNoise();
    let height = 0;
    let quality = 1;
    
    for (let i = 0; i < 4; i++) {
      height += Math.abs(perlin.noise(x / quality, z / quality, 0) * quality);
      quality *= 5;
    }
    
    return height * height / 2000.0;
  }
  
  cleanup() {
    this.clearTiles();
    this.heightData?.dispose();
    this.terrainMaterial?.dispose();
    this.scene.remove(this);
    console.log("🧹 FelixTerrain cleaned up");
  }
}