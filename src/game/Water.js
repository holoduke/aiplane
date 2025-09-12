import * as THREE from "three";

export class Water {
  constructor(scene, renderer, camera, sunLight) {
    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    this.sunLight = sunLight;

    this.waterMesh = null;
    this.waterUniforms = null;

    // Reflection setup
    this.reflectionCamera = null;
    this.reflectionRenderTarget = null;
    this.reflectionPlane = new THREE.Plane();
    this.reflectionMatrix = new THREE.Matrix4();
    this.clipPlane = new THREE.Vector4();

    // Water properties
    this.seaLevel = 400; // Height where water appears (matches terrain color levels)
    this.waterSize = 5000; // Reduced water plane size for better scale

    this.init();
  }

  init() {
    this.setupReflection();
    this.createWaterShader();
    console.log("🌊 Realistic water shader system initialized");
  }

  setupReflection() {
    // Create reflection render target with better size
    const width = Math.min(1024, window.innerWidth);
    const height = Math.min(1024, window.innerHeight);

    this.reflectionRenderTarget = new THREE.WebGLRenderTarget(width, height, {
      format: THREE.RGBFormat,
      type: THREE.UnsignedByteType,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrap,
      wrapT: THREE.ClampToEdgeWrap,
    });

    // Create reflection camera
    this.reflectionCamera = new THREE.PerspectiveCamera(
      this.camera.fov,
      this.camera.aspect,
      this.camera.near,
      this.camera.far
    );

    // Set up reflection plane (water surface)
    this.reflectionPlane.setFromNormalAndCoplanarPoint(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, this.seaLevel, 0)
    );

    console.log(`🌊 Reflection render target created: ${width}x${height}`);
  }

  createWaterShader() {
    // Simple plane geometry for water surface
    const geometry = new THREE.PlaneGeometry(this.waterSize, this.waterSize);

    // Simple vertex shader - no waves
    const vertexShader = `
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vWorldPosition = worldPos;
        
        vec4 mvPosition = viewMatrix * vec4(worldPos, 1.0);
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    // Simple fragment shader - only reflections
    const fragmentShader = `
      uniform vec3 waterColor;
      uniform float transparency;
      uniform float reflectivity;
      uniform sampler2D reflectionTexture;
      uniform mat4 textureMatrix;
      
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        
        // Fresnel effect for realistic reflection
        float fresnelFactor = pow(1.0 - max(dot(viewDirection, normal), 0.0), 2.0);
        fresnelFactor = mix(0.3, 1.0, fresnelFactor);
        
        // Sample terrain reflection
        vec4 projectedCoord = textureMatrix * vec4(vWorldPosition, 1.0);
        vec2 reflectionUV = projectedCoord.xy / projectedCoord.w;
        
        // Clamp UV coordinates to prevent sampling outside texture
        reflectionUV = clamp(reflectionUV, 0.0, 1.0);
        
        // Sample reflection texture
        vec3 terrainReflection = texture2D(reflectionTexture, reflectionUV).rgb;
        
        // Debug: Show reflection texture directly for testing
        // Uncomment this line to see raw reflection texture
        // gl_FragColor = vec4(terrainReflection, 1.0); return;
        
        // Simple sky color for areas without terrain reflection
        vec3 skyColor = vec3(0.5, 0.7, 1.0);
        
        // Mix terrain reflection with sky (favor terrain reflection more)
        vec3 finalReflection = mix(skyColor, terrainReflection, 0.9);
        
        // Combine water color with reflection
        vec3 waterColorFinal = mix(waterColor, finalReflection, fresnelFactor * reflectivity);
        
        gl_FragColor = vec4(waterColorFinal, transparency);
      }
    `;

    // Simple uniforms for water appearance
    this.waterUniforms = {
      waterColor: { value: new THREE.Color(0.1, 0.3, 0.5) },
      transparency: { value: 0.8 },
      reflectivity: { value: 0.9 },
      reflectionTexture: { value: this.reflectionRenderTarget.texture },
      textureMatrix: { value: new THREE.Matrix4() },
    };

    // Create water material
    const waterMaterial = new THREE.ShaderMaterial({
      uniforms: this.waterUniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false, // Important for transparency
    });

    // Create water mesh
    this.waterMesh = new THREE.Mesh(geometry, waterMaterial);
    this.waterMesh.rotation.x = -Math.PI / 2; // Rotate to horizontal
    this.waterMesh.position.y = this.seaLevel;
    this.waterMesh.receiveShadow = true;

    // Add to scene
    this.scene.add(this.waterMesh);
  }

  update(deltaTime, camera, sunLight) {
    if (!this.waterUniforms) return;

    // Keep water centered on camera (for infinite ocean effect)
    if (camera) {
      this.waterMesh.position.x = camera.position.x;
      this.waterMesh.position.z = camera.position.z;
    }

    // Update reflection
    this.updateReflection(camera);
  }

  updateReflection(camera) {
    if (!this.reflectionCamera || !this.reflectionRenderTarget) return;

    // Mirror camera position across water plane
    const reflectedPosition = camera.position.clone();
    reflectedPosition.y = 2 * this.seaLevel - camera.position.y;

    this.reflectionCamera.position.copy(reflectedPosition);
    this.reflectionCamera.rotation.copy(camera.rotation);
    this.reflectionCamera.fov = camera.fov;
    this.reflectionCamera.aspect = camera.aspect;
    this.reflectionCamera.near = camera.near;
    this.reflectionCamera.far = camera.far;
    this.reflectionCamera.updateProjectionMatrix();

    // Flip the camera's up vector
    this.reflectionCamera.up.set(0, -1, 0);

    // Look in the same direction as main camera but flipped
    const lookTarget = new THREE.Vector3();
    camera.getWorldDirection(lookTarget);
    lookTarget.y = -lookTarget.y; // Flip Y component
    lookTarget.add(reflectedPosition);

    this.reflectionCamera.lookAt(lookTarget);

    // Update texture matrix for screen-space projection
    this.waterUniforms.textureMatrix.value
      .set(
        0.5,
        0.0,
        0.0,
        0.5,
        0.0,
        0.5,
        0.0,
        0.5,
        0.0,
        0.0,
        0.5,
        0.5,
        0.0,
        0.0,
        0.0,
        1.0
      )
      .multiply(this.reflectionCamera.projectionMatrix)
      .multiply(this.reflectionCamera.matrixWorldInverse);
  }

  renderReflection() {
    // This method should be called from the game's render loop before rendering water
    if (!this.reflectionRenderTarget || !this.reflectionCamera) {
      console.warn("🌊 Reflection system not ready");
      return;
    }

    // Hide water mesh during reflection rendering
    const originalVisible = this.waterMesh.visible;
    this.waterMesh.visible = false;

    // Store original render target and clear color
    const originalRenderTarget = this.renderer.getRenderTarget();
    const originalClearColor = new THREE.Color();
    this.renderer.getClearColor(originalClearColor);

    // Set clear color for reflection (sky blue)
    this.renderer.setClearColor(0x87ceeb, 1.0);

    // Render reflection
    this.renderer.setRenderTarget(this.reflectionRenderTarget);
    this.renderer.clear();
    this.renderer.render(this.scene, this.reflectionCamera);

    // Restore original render target, clear color and water visibility
    this.renderer.setRenderTarget(originalRenderTarget);
    this.renderer.setClearColor(originalClearColor, 1.0);
    this.waterMesh.visible = originalVisible;
  }

  // Simple methods to adjust water properties
  setWaterColor(color) {
    if (this.waterUniforms) {
      this.waterUniforms.waterColor.value.setHex(color);
    }
  }

  setTransparency(transparency) {
    if (this.waterUniforms) {
      this.waterUniforms.transparency.value = transparency;
    }
  }

  setReflectivity(reflectivity) {
    if (this.waterUniforms) {
      this.waterUniforms.reflectivity.value = reflectivity;
    }
  }

  // Simple preset water configurations
  setClearWater() {
    this.setWaterColor(0x1e3a8a);
    this.setTransparency(0.85);
    this.setReflectivity(0.95);
    console.log("🌊 Water set to clear");
  }

  setDeepWater() {
    this.setWaterColor(0x0f172a);
    this.setTransparency(0.7);
    this.setReflectivity(0.9);
    console.log("🌊 Water set to deep");
  }

  setTropicalWater() {
    this.setWaterColor(0x06b6d4);
    this.setTransparency(0.9);
    this.setReflectivity(0.98);
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
