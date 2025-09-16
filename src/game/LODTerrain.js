import * as THREE from "three";

// Perlin noise implementation for heightmap generation
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

// Terrain tile class for LOD system
class TerrainTile {
  constructor(x, z, scale, resolution = 64) {
    this.x = x;
    this.z = z;
    this.scale = scale;
    this.resolution = resolution;
    this.mesh = null;
    this.geometry = null;
    this.material = null;
  }

  create(scene, heightTexture, terrainMaterial) {
    if (this.mesh) return;

    // Create plane geometry with specified resolution
    this.geometry = new THREE.PlaneGeometry(
      this.scale,
      this.scale,
      this.resolution - 1,
      this.resolution - 1
    );

    // Rotate to be horizontal
    this.geometry.rotateX(-Math.PI / 2);

    // Create material instance for this tile
    this.material = terrainMaterial.clone();
    this.material.uniforms.uOffset.value.set(this.x, this.z);
    this.material.uniforms.uScale.value = this.scale;

    // Create mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, 0, this.z);
    this.mesh.frustumCulled = false; // We handle culling manually

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

  updateMorphFactor(camera) {
    if (!this.material) return;

    // Calculate distance from camera to tile center
    const distance = Math.sqrt(
      Math.pow(camera.position.x - this.x, 2) +
      Math.pow(camera.position.z - this.z, 2)
    );

    // Simple morphing based on distance
    const morphDistance = this.scale * 0.3;
    const morphFactor = Math.max(0, Math.min(1, (morphDistance - distance) / morphDistance));
    this.material.uniforms.uMorphFactor.value = morphFactor;
  }
}

// Main LOD terrain system
export class LODTerrain {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    
    // Configuration
    this.worldSize = 8192;
    this.detailLevels = 5;
    this.tileResolution = 64;
    this.baseScale = 128;
    this.heightScale = 200;
    
    // State
    this.tiles = [];
    this.heightTexture = null;
    this.terrainMaterial = null;
    this.noiseGenerator = new ImprovedNoise();
    
    console.log("🌍 LODTerrain initialized with felixpalmer approach");
    
    this.init();
  }

  async init() {
    // Generate heightmap texture
    await this.generateHeightTexture();
    
    // Create terrain material with shaders
    this.createTerrainMaterial();
    
    // Generate initial tiles
    this.generateTiles();
    
    console.log(`🌍 LOD Terrain ready with ${this.tiles.length} tiles`);
  }

  generateHeightTexture() {
    const size = 1024;
    const data = new Uint8Array(size * size * 4);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const x = (i / size) * 8;
        const z = (j / size) * 8;
        
        // Generate multi-octave noise
        let height = 0;
        height += this.noiseGenerator.noise(x, z, 0) * 0.5;
        height += this.noiseGenerator.noise(x * 2, z * 2, 0) * 0.25;
        height += this.noiseGenerator.noise(x * 4, z * 4, 0) * 0.125;
        height += this.noiseGenerator.noise(x * 8, z * 8, 0) * 0.0625;
        
        // Normalize and scale
        height = (height + 1) * 0.5; // Convert from [-1,1] to [0,1]
        const heightValue = Math.floor(height * 255);

        const index = (i * size + j) * 4;
        data[index] = heightValue;     // R
        data[index + 1] = heightValue; // G
        data[index + 2] = heightValue; // B
        data[index + 3] = heightValue; // A (height data)
      }
    }

    this.heightTexture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    this.heightTexture.generateMipmaps = true;
    this.heightTexture.wrapS = THREE.RepeatWrapping;
    this.heightTexture.wrapT = THREE.RepeatWrapping;
    this.heightTexture.needsUpdate = true;

    console.log("🗻 Generated 1024x1024 heightmap texture");
  }

  createTerrainMaterial() {
    const vertexShader = `
      uniform vec2 uOffset;
      uniform float uScale;
      uniform float uMorphFactor;
      uniform float uHeightScale;
      uniform sampler2D uHeightTexture;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying float vHeight;
      
      vec3 getHeight(vec2 pos) {
        vec2 uv = (pos + vec2(4096.0)) / 8192.0;
        
        // Multi-scale sampling for detail
        float height1 = texture2D(uHeightTexture, uv).a;
        float height2 = texture2D(uHeightTexture, uv * 16.0).a;
        float height3 = texture2D(uHeightTexture, uv * 256.0).a;
        
        float height = (height1 + height2 * 0.1 + height3 * 0.01);
        return vec3(pos.x, height * uHeightScale, pos.y);
      }
      
      void main() {
        vUv = uv;
        
        // Calculate world position
        vec3 worldPos = position;
        worldPos.xz *= uScale;
        worldPos.xz += uOffset;
        
        // Get height from texture
        vec3 heightPos = getHeight(worldPos.xz);
        worldPos.y = heightPos.y;
        
        // Calculate normal using nearby samples
        float offset = uScale / 64.0;
        vec3 posX = getHeight(worldPos.xz + vec2(offset, 0.0));
        vec3 posZ = getHeight(worldPos.xz + vec2(0.0, offset));
        vec3 normal = normalize(cross(posX - worldPos, posZ - worldPos));
        
        vPosition = worldPos;
        vNormal = normal;
        vHeight = heightPos.y;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 uLightDirection;
      uniform vec3 uLightColor;
      uniform vec3 uAmbientColor;
      uniform vec3 uFogColor;
      uniform float uFogNear;
      uniform float uFogFar;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying float vHeight;
      
      void main() {
        // Basic terrain coloring based on height
        vec3 grassColor = vec3(0.3, 0.6, 0.2);
        vec3 rockColor = vec3(0.5, 0.4, 0.3);
        vec3 snowColor = vec3(0.9, 0.9, 0.9);
        
        float grassHeight = 50.0;
        float rockHeight = 150.0;
        
        vec3 color = grassColor;
        if (vHeight > grassHeight) {
          float blend = (vHeight - grassHeight) / (rockHeight - grassHeight);
          blend = clamp(blend, 0.0, 1.0);
          color = mix(grassColor, rockColor, blend);
        }
        if (vHeight > rockHeight) {
          float blend = (vHeight - rockHeight) / 50.0;
          blend = clamp(blend, 0.0, 1.0);
          color = mix(rockColor, snowColor, blend);
        }
        
        // Lighting
        float dotNL = max(dot(vNormal, uLightDirection), 0.0);
        vec3 lighting = uAmbientColor + uLightColor * dotNL;
        color *= lighting;
        
        // Fog
        float distance = length(vPosition - cameraPosition);
        float fogFactor = (uFogFar - distance) / (uFogFar - uFogNear);
        fogFactor = clamp(fogFactor, 0.0, 1.0);
        color = mix(uFogColor, color, fogFactor);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    this.terrainMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uOffset: { value: new THREE.Vector2(0, 0) },
        uScale: { value: 1.0 },
        uMorphFactor: { value: 0.0 },
        uHeightScale: { value: this.heightScale },
        uHeightTexture: { value: this.heightTexture },
        uLightDirection: { value: new THREE.Vector3(0.5, 1.0, 0.3).normalize() },
        uLightColor: { value: new THREE.Vector3(1.0, 0.9, 0.8) },
        uAmbientColor: { value: new THREE.Vector3(0.3, 0.3, 0.4) },
        uFogColor: { value: new THREE.Vector3(0.7, 0.8, 0.9) },
        uFogNear: { value: 1000 },
        uFogFar: { value: 8000 }
      },
      side: THREE.DoubleSide
    });

    console.log("🎨 Created terrain shader material");
  }

  generateTiles() {
    // Clear existing tiles
    this.clearTiles();

    // Generate concentric shells of tiles around camera
    const cameraX = this.camera.position.x;
    const cameraZ = this.camera.position.z;

    for (let level = 0; level < this.detailLevels; level++) {
      const scale = this.baseScale * Math.pow(2, level);
      const shellRadius = level + 1;
      
      // Generate tiles in a grid pattern for this level
      for (let x = -shellRadius; x <= shellRadius; x++) {
        for (let z = -shellRadius; z <= shellRadius; z++) {
          // Skip inner tiles that should be handled by higher detail levels
          if (level > 0 && Math.abs(x) <= shellRadius - 1 && Math.abs(z) <= shellRadius - 1) {
            continue;
          }
          
          // Calculate tile center position
          const tileX = Math.floor(cameraX / scale) * scale + x * scale;
          const tileZ = Math.floor(cameraZ / scale) * scale + z * scale;
          
          // Create tile
          const tile = new TerrainTile(tileX, tileZ, scale, this.tileResolution);
          tile.create(this.scene, this.heightTexture, this.terrainMaterial);
          this.tiles.push(tile);
        }
      }
    }

    console.log(`🔄 Generated ${this.tiles.length} terrain tiles`);
  }

  update(deltaTime) {
    // Update morph factors for smooth transitions
    for (const tile of this.tiles) {
      tile.updateMorphFactor(this.camera);
    }
    
    // Check if we need to regenerate tiles (when camera moves significantly)
    const cameraX = this.camera.position.x;
    const cameraZ = this.camera.position.z;
    
    if (!this.lastCameraPosition || 
        Math.abs(cameraX - this.lastCameraPosition.x) > this.baseScale / 2 ||
        Math.abs(cameraZ - this.lastCameraPosition.z) > this.baseScale / 2) {
      
      this.generateTiles();
      this.lastCameraPosition = { x: cameraX, z: cameraZ };
    }
  }

  clearTiles() {
    for (const tile of this.tiles) {
      tile.destroy(this.scene);
    }
    this.tiles = [];
  }

  getHeightAtPosition(x, z) {
    // Sample height from the same noise function used in shader
    const uvX = (x + 4096) / 8192;
    const uvZ = (z + 4096) / 8192;
    
    let height = 0;
    height += this.noiseGenerator.noise(uvX * 8, uvZ * 8, 0) * 0.5;
    height += this.noiseGenerator.noise(uvX * 32, uvZ * 32, 0) * 0.25;
    height += this.noiseGenerator.noise(uvX * 64, uvZ * 64, 0) * 0.125;
    height += this.noiseGenerator.noise(uvX * 128, uvZ * 128, 0) * 0.0625;
    
    height = (height + 1) * 0.5; // Normalize to [0,1]
    return height * this.heightScale;
  }

  cleanup() {
    this.clearTiles();
    this.heightTexture?.dispose();
    this.terrainMaterial?.dispose();
    console.log("🧹 LODTerrain cleaned up");
  }
}