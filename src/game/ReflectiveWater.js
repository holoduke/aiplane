import * as THREE from "three";

export class ReflectiveWater {
  constructor(scene, renderer, camera) {
    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    
    this.waterMesh = null;
    this.reflectionCamera = null;
    this.reflectionRenderTarget = null;
    this.normalMap = null;
    
    // Water properties
    this.seaLevel = 40;
    this.waterSize = 50000;
    
    // Don't call init() here - it's now async and called from Game.js
  }

  async init() {
    this.setupReflection();
    await this.loadNormalMap();
    this.createWater();
    console.log("🌊 Enhanced reflective water system initialized");
  }

  async loadNormalMap() {
    const loader = new THREE.TextureLoader();
    try {
      this.normalMap = await loader.loadAsync('/waternormals.jpg');
      this.normalMap.wrapS = this.normalMap.wrapT = THREE.RepeatWrapping;
      this.normalMap.repeat.set(4, 4);
      console.log("🌊 Water normal map loaded");
    } catch (error) {
      console.warn("🌊 Failed to load water normal map:", error);
      this.normalMap = null;
    }
  }

  setupReflection() {
    // Create reflection render target
    this.reflectionRenderTarget = new THREE.WebGLRenderTarget(512, 512, {
      format: THREE.RGBFormat,
      type: THREE.UnsignedByteType,
      generateMipmaps: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter
    });

    // Create reflection camera
    this.reflectionCamera = new THREE.PerspectiveCamera(
      this.camera.fov,
      1.0, // Square aspect ratio for simplicity
      this.camera.near,
      this.camera.far
    );

    console.log("🌊 Reflection setup complete");
  }

  createWater() {
    // Simple plane geometry
    const geometry = new THREE.PlaneGeometry(this.waterSize, this.waterSize);
    
    // Enhanced water shader material with normal mapping
    const material = new THREE.ShaderMaterial({
      uniforms: {
        reflectionTexture: { value: this.reflectionRenderTarget.texture },
        normalMap: { value: this.normalMap },
        waterColor: { value: new THREE.Color(0.1, 0.4, 0.8) },
        sunColor: { value: new THREE.Color(0xffffff) },
        sunDirection: { value: new THREE.Vector3(0.70707, 0.70707, 0.0) },
        alpha: { value: 0.8 },
        time: { value: 0.0 },
        size: { value: 1.0 },
        distortionScale: { value: 20.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying vec4 vScreenSpace;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vScreenSpace = gl_Position;
        }
      `,
      fragmentShader: `
        uniform sampler2D reflectionTexture;
        uniform sampler2D normalMap;
        uniform vec3 waterColor;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform float alpha;
        uniform float time;
        uniform float size;
        uniform float distortionScale;
        
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying vec4 vScreenSpace;
        varying vec3 vNormal;
        
        vec3 getNoise(vec2 uv) {
          float offset = time * 0.01;
          
          vec2 uv0 = (uv / 103.0) + vec2(offset / 17.0, offset / 29.0);
          vec2 uv1 = (uv / 107.0) - vec2(offset / -19.0, offset / 31.0);
          vec2 uv2 = (uv / vec2(8907.0, 9803.0)) + vec2(offset / 101.0, offset / 97.0);
          vec2 uv3 = (uv / vec2(1091.0, 1027.0)) - vec2(offset / 109.0, offset / -113.0);
          
          vec3 sample0 = texture2D(normalMap, uv0).rgb;
          vec3 sample1 = texture2D(normalMap, uv1).rgb;
          vec3 sample2 = texture2D(normalMap, uv2).rgb;
          vec3 sample3 = texture2D(normalMap, uv3).rgb;
          
          vec3 noise = sample0 + sample1 + sample2 + sample3;
          return noise * 0.5 - 1.0;
        }
        
        void main() {
          vec2 worldUV = vWorldPosition.xz * size * 0.001;
          
          // Get surface normal from noise function
          vec3 noise = getNoise(worldUV);
          vec3 surfaceNormal = normalize(vec3(noise.x * 1.5, 1.0, noise.z * 1.5));
          
          // Calculate view direction
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          
          // Calculate distortion for reflection sampling
          float distance = length(cameraPosition - vWorldPosition);
          vec2 distortion = surfaceNormal.xz * (0.001 + 1.0 / distance) * distortionScale * 0.01;
          
          // Calculate screen-space UV coordinates with distortion
          vec2 screenUV = (vScreenSpace.xy / vScreenSpace.w) * 0.5 + 0.5;
          screenUV.y = 1.0 - screenUV.y; // Flip Y for reflection
          screenUV += distortion;
          screenUV = clamp(screenUV, 0.0, 1.0);
          
          // Sample reflection texture
          vec3 reflection = texture2D(reflectionTexture, screenUV).rgb;
          
          // Fresnel effect
          float theta = max(dot(viewDirection, surfaceNormal), 0.0);
          float rf0 = 0.3;
          float reflectance = pow(1.0 - theta, 5.0) * (1.0 - rf0) + rf0;
          
          // Specular reflection
          vec3 reflectionDir = normalize(reflect(-sunDirection, surfaceNormal));
          float direction = max(0.0, dot(viewDirection, reflectionDir));
          vec3 specularLight = pow(direction, 100.0) * sunColor * 2.0;
          
          // Diffuse lighting
          vec3 diffuseLight = max(dot(sunDirection, surfaceNormal), 0.0) * sunColor * 0.5;
          
          // Scatter effect
          vec3 scatter = max(0.0, dot(surfaceNormal, viewDirection)) * waterColor;
          
          // Combine all effects
          vec3 albedo = mix(
            sunColor * diffuseLight * 0.3 + scatter,
            reflection * specularLight + reflection * 0.9 + vec3(0.1),
            reflectance
          );
          
          gl_FragColor = vec4(albedo, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });

    // Create water mesh
    this.waterMesh = new THREE.Mesh(geometry, material);
    this.waterMesh.rotation.x = -Math.PI / 2; // Rotate to horizontal
    this.waterMesh.position.y = this.seaLevel;
    this.waterMesh.receiveShadow = true;
    
    // Add to scene
    this.scene.add(this.waterMesh);
  }

  update(deltaTime, camera) {
    // Keep water centered on camera
    if (camera && this.waterMesh) {
      this.waterMesh.position.x = camera.position.x;
      this.waterMesh.position.z = camera.position.z;
    }

    // Update time uniform for wave animation
    if (this.waterMesh && this.waterMesh.material.uniforms) {
      this.waterMesh.material.uniforms.time.value += deltaTime * 100;
    }

    // Update reflection camera
    this.updateReflection(camera);
    
    // Render reflection - this should be called before the main render
    this.renderReflection();
  }

  updateReflection(camera) {
    if (!this.reflectionCamera) return;

    // Position reflection camera below water surface
    this.reflectionCamera.position.copy(camera.position);
    this.reflectionCamera.position.y = 2 * this.seaLevel - camera.position.y;
    
    // Copy camera properties
    this.reflectionCamera.fov = camera.fov;
    this.reflectionCamera.far = camera.far;
    this.reflectionCamera.near = camera.near;
    this.reflectionCamera.updateProjectionMatrix();

    // Look in reflected direction
    const target = new THREE.Vector3();
    camera.getWorldDirection(target);
    target.y = -target.y; // Flip Y component
    target.add(this.reflectionCamera.position);
    
    this.reflectionCamera.lookAt(target);
  }

  renderReflection() {
    if (!this.reflectionRenderTarget || !this.reflectionCamera || !this.waterMesh) return;

    // Hide water during reflection rendering
    const wasVisible = this.waterMesh.visible;
    this.waterMesh.visible = false;

    // Store original render target
    const originalRenderTarget = this.renderer.getRenderTarget();
    
    // Render reflection
    this.renderer.setRenderTarget(this.reflectionRenderTarget);
    this.renderer.render(this.scene, this.reflectionCamera);
    
    // Restore original render target and water visibility
    this.renderer.setRenderTarget(originalRenderTarget);
    this.waterMesh.visible = wasVisible;
  }

  // Water color controls
  setWaterColor(color) {
    if (this.waterMesh && this.waterMesh.material.uniforms) {
      this.waterMesh.material.uniforms.waterColor.value.setHex(color);
    }
  }

  setAlpha(alpha) {
    if (this.waterMesh && this.waterMesh.material.uniforms) {
      this.waterMesh.material.uniforms.alpha.value = alpha;
    }
  }

  // Simple presets
  setClearWater() {
    this.setWaterColor(0x1e3a8a);
    this.setAlpha(0.8);
    console.log("🌊 Water set to clear");
  }

  setDeepWater() {
    this.setWaterColor(0x0f172a);
    this.setAlpha(0.7);
    console.log("🌊 Water set to deep");
  }

  setTropicalWater() {
    this.setWaterColor(0x06b6d4);
    this.setAlpha(0.9);
    console.log("🌊 Water set to tropical");
  }

  cleanup() {
    if (this.waterMesh) {
      this.scene.remove(this.waterMesh);
      this.waterMesh.geometry.dispose();
      this.waterMesh.material.dispose();
    }
    
    if (this.reflectionRenderTarget) {
      this.reflectionRenderTarget.dispose();
    }
  }
}