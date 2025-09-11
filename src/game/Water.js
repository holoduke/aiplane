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
    this.seaLevel = 40; // Height where water appears (matches terrain color levels)
    this.waterSize = 50000; // Reduced water plane size for better scale

    this.init();
  }

  init() {
    this.setupReflection();
    this.createWaterShader();
    console.log("🌊 Realistic water shader system initialized");
  }

  setupReflection() {
    // Create reflection render target
    this.reflectionRenderTarget = new THREE.WebGLRenderTarget(1024, 1024, {
      format: THREE.RGBFormat,
      type: THREE.UnsignedByteType,
      generateMipmaps: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter
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
        
        // Sample reflection texture
        vec3 terrainReflection = texture2D(reflectionTexture, reflectionUV).rgb;
        
        // Simple sky color for areas without terrain reflection
        vec3 skyColor = vec3(0.5, 0.7, 1.0);
        
        // Mix terrain reflection with sky
        vec3 finalReflection = mix(skyColor, terrainReflection, 0.8);
        
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
      textureMatrix: { value: new THREE.Matrix4() }
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

    // Update time for animation
    this.waterUniforms.time.value += deltaTime;

    // Update sun position and properties
    if (sunLight) {
      this.waterUniforms.sunPosition.value.copy(sunLight.position);
      this.waterUniforms.sunIntensity.value = sunLight.intensity || 1.0;
    }

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

    // Calculate reflection matrix
    const waterWorldPosition = new THREE.Vector3(0, this.seaLevel, 0);
    this.reflectionMatrix.makeScale(1, -1, 1);
    this.reflectionMatrix.setPosition(
      0, 
      2 * this.seaLevel - camera.position.y, 
      0
    );

    // Position reflection camera
    const reflectedCameraPosition = camera.position.clone();
    reflectedCameraPosition.applyMatrix4(this.reflectionMatrix);
    
    this.reflectionCamera.position.copy(reflectedCameraPosition);
    this.reflectionCamera.up.set(0, 1, 0);
    this.reflectionCamera.up.applyMatrix4(this.reflectionMatrix);
    this.reflectionCamera.lookAt(
      camera.getWorldDirection(new THREE.Vector3())
        .applyMatrix4(this.reflectionMatrix)
        .add(reflectedCameraPosition)
    );

    // Update texture matrix for projection
    this.waterUniforms.textureMatrix.value
      .set(
        0.5, 0.0, 0.0, 0.5,
        0.0, 0.5, 0.0, 0.5,
        0.0, 0.0, 0.5, 0.5,
        0.0, 0.0, 0.0, 1.0
      )
      .multiply(this.reflectionCamera.projectionMatrix)
      .multiply(this.reflectionCamera.matrixWorldInverse);
  }

  renderReflection() {
    // This method should be called from the game's render loop before rendering water
    if (!this.reflectionRenderTarget || !this.reflectionCamera) return;

    // Hide water mesh during reflection rendering
    const originalVisible = this.waterMesh.visible;
    this.waterMesh.visible = false;

    // Store original render target
    const originalRenderTarget = this.renderer.getRenderTarget();
    
    // Render reflection
    this.renderer.setRenderTarget(this.reflectionRenderTarget);
    this.renderer.render(this.scene, this.reflectionCamera);
    
    // Restore original render target and water visibility
    this.renderer.setRenderTarget(originalRenderTarget);
    this.waterMesh.visible = originalVisible;
  }

  // Methods to adjust water properties
  setWaveHeight(height) {
    if (this.waterUniforms) {
      this.waterUniforms.waveHeight.value = height;
    }
  }

  setWaveSpeed(speed) {
    if (this.waterUniforms) {
      this.waterUniforms.waveSpeed.value = speed;
    }
  }

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

  // Preset water configurations
  setCalmWater() {
    this.setWaveHeight(0.8);
    this.setWaveSpeed(0.5);
    this.setTransparency(0.9);
    this.setReflectivity(0.95);
    console.log("🌊 Water set to calm");
  }

  setRoughSea() {
    this.setWaveHeight(2.5);
    this.setWaveSpeed(2.0);
    this.setTransparency(0.7);
    this.setReflectivity(0.8);
    console.log("🌊 Water set to rough sea");
  }

  setStormyWater() {
    this.setWaveHeight(4.0);
    this.setWaveSpeed(0.3);
    this.setTransparency(0.6);
    this.setReflectivity(0.7);
    if (this.waterUniforms) {
      this.waterUniforms.foamIntensity.value = 1.5;
    }
    console.log("🌊 Water set to stormy");
  }

  setTropicalWater() {
    this.setWaveHeight(1.2);
    this.setWaveSpeed(0.8);
    this.setWaterColor(0x00bfff);
    this.setTransparency(0.95);
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
