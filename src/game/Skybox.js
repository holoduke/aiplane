import * as THREE from "three";

export class Skybox {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.skyboxMesh = null;
    this.skyUniforms = null;
  }

  init() {
    this.createProceduralSkybox();
    console.log("🌤️ Realistic procedural skybox created");
  }

  createProceduralSkybox() {
    // Create a large sphere geometry for the skybox
    const geometry = new THREE.SphereGeometry(50000, 64, 32);
    
    // Vertex shader
    const vertexShader = `
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment shader with realistic sky and clouds
    const fragmentShader = `
      uniform float time;
      uniform vec3 sunPosition;
      uniform float sunIntensity;
      uniform vec3 skyColor;
      uniform vec3 horizonColor;
      uniform vec3 groundColor;
      uniform float cloudCoverage;
      uniform float cloudSpeed;
      
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      
      // Noise functions for clouds
      float hash(float n) {
        return fract(sin(n) * 43758.5453123);
      }
      
      float noise(vec3 x) {
        vec3 p = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = p.x + p.y * 57.0 + 113.0 * p.z;
        return mix(
          mix(
            mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 57.0), hash(n + 58.0), f.x),
            f.y
          ),
          mix(
            mix(hash(n + 113.0), hash(n + 114.0), f.x),
            mix(hash(n + 170.0), hash(n + 171.0), f.x),
            f.y
          ),
          f.z
        );
      }
      
      float fbm(vec3 p) {
        float f = 0.0;
        f += 0.5000 * noise(p); p *= 2.02;
        f += 0.2500 * noise(p); p *= 2.03;
        f += 0.1250 * noise(p); p *= 2.01;
        f += 0.0625 * noise(p);
        return f;
      }
      
      void main() {
        vec3 direction = normalize(vWorldPosition);
        float elevation = direction.y;
        
        // Sky gradient based on elevation
        vec3 skyGradient;
        if (elevation > 0.0) {
          // Above horizon - blend from horizon to sky color
          float t = pow(elevation, 0.4);
          skyGradient = mix(horizonColor, skyColor, t);
        } else {
          // Below horizon - use ground color (rarely visible in flight sim)
          skyGradient = groundColor;
        }
        
        // Sun effects
        vec3 sunDir = normalize(sunPosition);
        float sunDot = max(dot(direction, sunDir), 0.0);
        
        // Sun disk
        float sunDisk = smoothstep(0.9995, 0.9998, sunDot);
        vec3 sunGlow = vec3(1.0, 0.8, 0.4) * sunDisk * sunIntensity;
        
        // Sun halo
        float sunHalo = pow(sunDot, 8.0) * 0.3;
        sunGlow += vec3(1.0, 0.6, 0.2) * sunHalo * sunIntensity;
        
        // Clouds - only render above horizon
        float cloudDensity = 0.0;
        if (elevation > -0.1) {
          vec3 cloudPos = direction * 1000.0;
          cloudPos.x += time * cloudSpeed;
          cloudPos.z += time * cloudSpeed * 0.7;
          
          // Multiple octaves of noise for realistic clouds
          float noise1 = fbm(cloudPos * 0.0008);
          float noise2 = fbm(cloudPos * 0.0016 + vec3(100.0, 100.0, 100.0));
          float noise3 = fbm(cloudPos * 0.0032 + vec3(200.0, 200.0, 200.0));
          
          cloudDensity = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;
          cloudDensity = smoothstep(1.0 - cloudCoverage, 1.0, cloudDensity);
          
          // Fade clouds near horizon
          float horizonFade = smoothstep(-0.05, 0.1, elevation);
          cloudDensity *= horizonFade;
          
          // Cloud lighting based on sun position
          float cloudLight = dot(direction, sunDir) * 0.5 + 0.5;
          cloudLight = pow(cloudLight, 2.0);
          
          // Cloud colors
          vec3 cloudColorBright = vec3(1.0, 0.95, 0.85);
          vec3 cloudColorDark = vec3(0.4, 0.4, 0.5);
          vec3 cloudColor = mix(cloudColorDark, cloudColorBright, cloudLight);
          
          // Apply cloud density
          skyGradient = mix(skyGradient, cloudColor, cloudDensity);
        }
        
        // Add sun glow to final color
        skyGradient += sunGlow;
        
        // Atmospheric perspective
        float atmosphericDensity = exp(-elevation * 2.0);
        skyGradient = mix(skyGradient, horizonColor, atmosphericDensity * 0.1);
        
        gl_FragColor = vec4(skyGradient, 1.0);
      }
    `;

    // Uniforms for controlling the sky appearance
    this.skyUniforms = {
      time: { value: 0.0 },
      sunPosition: { value: new THREE.Vector3(0.0, 0.3, -1.0) },
      sunIntensity: { value: 2.0 },
      skyColor: { value: new THREE.Color(0x4A90E2) }, // Nice blue sky
      horizonColor: { value: new THREE.Color(0xF5F5DC) }, // Warm horizon
      groundColor: { value: new THREE.Color(0x8B7355) }, // Earth tone
      cloudCoverage: { value: 0.5 },
      cloudSpeed: { value: 0.5 }
    };

    // Create shader material
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: false
    });

    // Create skybox mesh
    this.skyboxMesh = new THREE.Mesh(geometry, skyMaterial);
    this.skyboxMesh.renderOrder = -1000; // Render first
    this.scene.add(this.skyboxMesh);
  }

  update(deltaTime, playerPosition) {
    if (this.skyUniforms) {
      // Update time for animated clouds
      this.skyUniforms.time.value += deltaTime;
      
      // Keep skybox centered on player
      if (playerPosition) {
        this.skyboxMesh.position.copy(playerPosition);
      }
    }
  }

  // Method to change sky settings
  setSkySettings(settings) {
    if (!this.skyUniforms) return;
    
    if (settings.sunPosition) {
      this.skyUniforms.sunPosition.value.copy(settings.sunPosition);
    }
    if (settings.sunIntensity !== undefined) {
      this.skyUniforms.sunIntensity.value = settings.sunIntensity;
    }
    if (settings.skyColor) {
      this.skyUniforms.skyColor.value.setHex(settings.skyColor);
    }
    if (settings.horizonColor) {
      this.skyUniforms.horizonColor.value.setHex(settings.horizonColor);
    }
    if (settings.cloudCoverage !== undefined) {
      this.skyUniforms.cloudCoverage.value = settings.cloudCoverage;
    }
    if (settings.cloudSpeed !== undefined) {
      this.skyUniforms.cloudSpeed.value = settings.cloudSpeed;
    }
  }

  // Preset sky configurations
  setDaytimeSky() {
    this.setSkySettings({
      sunPosition: new THREE.Vector3(0.0, 0.4, -0.8),
      sunIntensity: 2.0,
      skyColor: 0x4A90E2,
      horizonColor: 0xF5F5DC,
      cloudCoverage: 0.4,
      cloudSpeed: 0.3
    });
  }

  setSunsetSky() {
    this.setSkySettings({
      sunPosition: new THREE.Vector3(0.8, 0.1, -0.5),
      sunIntensity: 1.5,
      skyColor: 0xFF6B35,
      horizonColor: 0xFFD700,
      cloudCoverage: 0.6,
      cloudSpeed: 0.2
    });
  }

  setStormySky() {
    this.setSkySettings({
      sunPosition: new THREE.Vector3(0.0, 0.2, -1.0),
      sunIntensity: 0.5,
      skyColor: 0x2F4F4F,
      horizonColor: 0x696969,
      cloudCoverage: 0.9,
      cloudSpeed: 1.0
    });
  }

  cleanup() {
    if (this.skyboxMesh) {
      this.scene.remove(this.skyboxMesh);
      this.skyboxMesh.geometry.dispose();
      this.skyboxMesh.material.dispose();
    }
  }
}