import * as THREE from "three";

export class LensFlare {
  constructor(scene, camera, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.lensFlareGroup = new THREE.Group();
    this.flareElements = [];
    this.sunPosition = new THREE.Vector3();
    this.screenPosition = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.occluded = false;
    this.visibility = 0.0;

    this.init();
  }

  init() {
    this.createLensFlareElements();
    this.lensFlareGroup.renderOrder = 10000;
    this.scene.add(this.lensFlareGroup);
    console.log("✨ Lens flare system initialized");
  }

  createLensFlareElements() {
    const flareConfigs = [
      {
        distance: 0.0,
        size: 2200,
        color: new THREE.Color(1.0, 0.95, 0.8),
        opacity: 0.8,
        type: "sun",
      },
      {
        distance: 0.25,
        size: 1200,
        color: new THREE.Color(1.0, 0.6, 0.3),
        opacity: 0.35,
        type: "ghost",
      },
      {
        distance: 0.45,
        size: 900,
        color: new THREE.Color(0.7, 1.0, 0.5),
        opacity: 0.25,
        type: "ring",
      },
      {
        distance: 0.75,
        size: 1500,
        color: new THREE.Color(0.5, 0.8, 1.0),
        opacity: 0.25,
        type: "ghost",
      },
      {
        distance: 1.05,
        size: 600,
        color: new THREE.Color(1.0, 0.4, 0.7),
        opacity: 0.28,
        type: "ring",
      },
      {
        distance: 1.35,
        size: 800,
        color: new THREE.Color(0.9, 0.9, 0.3),
        opacity: 0.22,
        type: "ghost",
      },
      {
        distance: 1.65,
        size: 500,
        color: new THREE.Color(0.7, 0.4, 1.0),
        opacity: 0.18,
        type: "ring",
      },
    ];

    flareConfigs.forEach((config) => {
      const mesh = this.createFlareElement(config);
      this.flareElements.push({
        mesh,
        distance: config.distance,
        baseSize: config.size,
        baseOpacity: config.opacity,
        type: config.type,
        intensity: 1.0,
      });
      this.lensFlareGroup.add(mesh);
    });
  }

  createFlareElement(config) {
    let geometry;

    // Create different geometries for different flare types
    if (config.type === "sun") {
      geometry = new THREE.CircleGeometry(1, 48);
    } else if (config.type === "ring") {
      geometry = new THREE.RingGeometry(0.6, 1.0, 48);
    } else {
      geometry = new THREE.CircleGeometry(1, 32);
    }

    // Create material with specific shader for lens flare effects
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: config.color },
        opacity: { value: config.opacity },
        center: { value: new THREE.Vector2(0.5, 0.5) },
        time: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        uniform vec2 center;
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv - center;
          float dist = length(uv);
          
          float alpha = opacity;
          
          ${
            config.type === "sun"
              ? `
            // Sun flare - bright center with soft falloff
            alpha *= (1.0 - smoothstep(0.0, 0.5, dist));
            alpha *= (1.0 + 0.1 * sin(time * 2.0 + dist * 10.0)); // Subtle shimmer
          `
              : config.type === "ring"
              ? `
            // Ring flare
            float ringDist = abs(dist - 0.3);
            alpha *= (1.0 - smoothstep(0.0, 0.2, ringDist));
          `
              : `
            // Ghost flare - soft circular gradient
            alpha *= (1.0 - smoothstep(0.1, 0.4, dist));
            alpha *= (0.8 + 0.2 * sin(time * 3.0 + dist * 15.0)); // Subtle variation
          `
          }
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 10001;
    mesh.frustumCulled = false;
    mesh.userData.baseSize = config.size;

    return mesh;
  }

  update(deltaTime, sunWorldPosition, terrain) {
    if (!sunWorldPosition) {
      console.log("🔥 Lens flare: No sun position provided");
      return;
    }

    this.sunPosition.copy(sunWorldPosition);

    // Convert sun world position to screen coordinates
    const sunScreenPos = this.sunPosition.clone();
    sunScreenPos.project(this.camera);

    this.screenPosition.set(sunScreenPos.x, sunScreenPos.y);

    // Check if sun is behind camera (remove restrictive screen bounds check)
    const isBehindCamera = sunScreenPos.z > 1.0;

    if (isBehindCamera) {
      this.lensFlareGroup.visible = false;
      return;
    }

    this.checkOcclusion(terrain);
    if (this.occluded) {
      this.visibility = 0;
      this.lensFlareGroup.visible = false;
      return;
    }

    // Calculate lens flare visibility based on sun angle to camera
    const cameraDirection = new THREE.Vector3(0, 0, -1);
    cameraDirection.applyQuaternion(this.camera.quaternion);

    const sunDirection = this.sunPosition
      .clone()
      .sub(this.camera.position)
      .normalize();
    const sunAngle = cameraDirection.dot(sunDirection);

    let targetVisibility = THREE.MathUtils.clamp(
      (sunAngle + 0.2) / 1.2,
      0.0,
      1.0
    );
    if (sunDirection.z < -0.05) targetVisibility = 0.0;
    const lerpFactor = 1 - Math.exp(-deltaTime * 6);
    this.visibility = THREE.MathUtils.lerp(
      this.visibility,
      targetVisibility,
      lerpFactor
    );
    this.visibility = THREE.MathUtils.clamp(this.visibility, 0.0, 1.0);

    if (this.visibility <= 0.02) {
      this.lensFlareGroup.visible = false;
      return;
    }

    this.lensFlareGroup.visible = true;

    // Update each flare element
    this.updateFlareElements(deltaTime, this.visibility);
  }

  checkOcclusion(terrain) {
    if (!terrain) {
      this.occluded = false;
      return;
    }

    if (!terrain.userData.lensFlareMeshes) {
      const meshes = [];
      terrain.traverse((obj) => {
        if (obj.isMesh && obj.visible) {
          meshes.push(obj);
        }
      });
      terrain.userData.lensFlareMeshes = meshes;
    }

    const meshes = terrain.userData.lensFlareMeshes;
    if (!meshes.length) {
      this.occluded = false;
      return;
    }

    const origin = this.camera.position;
    const direction = this.sunPosition.clone().sub(origin);
    const distance = direction.length();
    if (distance <= 0.001) {
      this.occluded = false;
      return;
    }

    direction.normalize();
    this.raycaster.set(origin, direction);
    this.raycaster.far = distance;

    const intersections = this.raycaster.intersectObjects(meshes, true);
    this.occluded = intersections.some((hit) => hit.distance < distance);
  }

  updateFlareElements(deltaTime, visibility) {
    const baseDistance = this.camera.position.distanceTo(this.sunPosition);
    const axisX = -this.screenPosition.x;
    const axisY = -this.screenPosition.y;

    this.flareElements.forEach((element, index) => {
      const mesh = element.mesh;
      let worldPos;

      if (index === 0) {
        worldPos = this.sunPosition.clone();
      } else {
        const screenX = this.screenPosition.x + axisX * element.distance;
        const screenY = this.screenPosition.y + axisY * element.distance;
        const clipPos = new THREE.Vector3(screenX, screenY, 0.6);
        worldPos = clipPos.unproject(this.camera);
        const dir = worldPos.sub(this.camera.position).normalize();
        const dist = baseDistance * (1.0 + element.distance * 0.6);
        worldPos = this.camera.position.clone().add(dir.multiplyScalar(dist));
      }

      mesh.position.copy(worldPos);
      mesh.lookAt(this.camera.position);

      if (mesh.material.uniforms) {
        mesh.material.uniforms.time.value += deltaTime;
        const finalOpacity = THREE.MathUtils.clamp(
          element.baseOpacity * visibility * element.intensity,
          0.0,
          1.0
        );
        mesh.material.uniforms.opacity.value = finalOpacity;
      }

      const size = element.baseSize * (0.6 + 0.6 * visibility);
      mesh.scale.setScalar(size);
    });
  }

  setSunIntensity(intensity) {
    const clamped = THREE.MathUtils.clamp(intensity, 0.0, 2.0);
    this.flareElements.forEach((element) => {
      element.intensity = clamped;
    });
  }

  cleanup() {
    if (this.lensFlareGroup) {
      this.scene.remove(this.lensFlareGroup);

      this.flareElements.forEach((element) => {
        element.mesh.geometry.dispose();
        element.mesh.material.dispose();
      });

      this.flareElements = [];
    }
  }
}
