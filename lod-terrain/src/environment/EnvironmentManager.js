import * as THREE from "three";
import { scene } from "../scene.js";
import { camera } from "../camera.js";
import { geometry } from "../geometry.js";
import { texture } from "../texture.js";
import { material } from "../material.js";
import { renderer } from "../renderer.js";

const WORLD_UP = new THREE.Vector3(0, 0, 1);

export class EnvironmentManager {
  constructor() {
    // Sun/Lighting properties
    this.sunTime = 16.7;
    this.sunStrengthBase = 1.2;
    this.sunDirection = new THREE.Vector3(0, 1, 0);
    this.currentSunIntensity = 1.0;
    this.sunWarmth = 0.75;
    this.sunLightColor = new THREE.Color(1.0, 0.85, 0.65);
    this.sunMesh = null;

    // Ambient lighting
    this.ambientDirection = new THREE.Vector3(0, 0, 1);
    this.ambientStrength = 0.75;
    this.ambientColor = new THREE.Color(0.5, 0.6, 0.8);

    // Sky/Atmosphere
    this.skyTintStrength = 0.15;
    this.skyTintColor = new THREE.Color(0.62, 0.72, 0.88);
    this.sky = null;
    this.sky2 = null;

    // Fog
    this.fogEnabled = true;
    this.fogColor = new THREE.Color(0.5, 0.6, 0.75);
    this.fogNearScale = 0.34;
    this.fogFarScale = 0.71;
    this.sceneFog = null;
    this.baseFogNear = 300;
    this.baseFogFar = 1000;
    this.fadeStartScale = 0.9;
    this.fadeEndScale = 1.0;

    // Shadow system
    this.shadowsEnabled = true;
    this.shadowCascadeCount = 3;
    this.shadowResolution = 4096;
    this.shadowLambda = 0.6;
    this.shadowMaxDistance = 3600;
    this.shadowBias = 0.0015;
    this.shadowStrength = 0.65;
    this.shadowSoftness = 1.0;
    this.shadowCascadeOverlap = 0.5;
    this.shadowLambda = 0.6;
    this.shadowCascadeEnabled = [true, true, true];
    this.shadowCascades = [];
    this.shadowMatrices = [];
    this.shadowSplitsVec = new THREE.Vector4();
    this.shadowDebugHelpers = [];
    this.shadowTempCorners = Array.from({ length: 8 }, () => new THREE.Vector3());

    // Camera
    this.cameraRotation = { x: 0, y: 0 };
    this.viewMatrix = new THREE.Matrix4();
    this.cameraForward = new THREE.Vector3(0, 1, 0);

    // Post-processing effects
    this.normalSmoothFactor = 1.05;
    this.specularStrength = 0.4;

    console.log("🌍 Environment Manager initialized");
  }

  // Initialize all environment systems
  initialize() {
    this.setupCamera();
    this.setupSun();
    this.setupSky();
    this.setupShadows();

    console.log("🌍 Environment systems initialized");
  }

  // === CAMERA SYSTEM ===
  setupCamera() {
    camera.position.set(0, 0, 50);
    camera.up.copy(WORLD_UP);
    camera.lookAt(new THREE.Vector3(0, 1, 0));
    camera.updateMatrixWorld(true);
    this.viewMatrix.copy(camera.matrixWorldInverse);
    camera.getWorldDirection(this.cameraForward);
    this.cameraForward.normalize();

    console.log("📷 Camera system initialized");
  }

  updateCameraMatrices() {
    camera.updateMatrixWorld(true);
    this.viewMatrix.copy(camera.matrixWorldInverse);
    camera.getWorldDirection(this.cameraForward);
    this.cameraForward.normalize();
  }

  // === SUN/LIGHTING SYSTEM ===
  setupSun() {
    // Create sun mesh
    const geometry = new THREE.SphereGeometry(200, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff88,
      fog: false,
      depthTest: true,
      depthWrite: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });
    material.color.multiplyScalar(2.0);

    this.sunMesh = new THREE.Mesh(geometry, material);
    this.sunMesh.frustumCulled = true;
    scene.add(this.sunMesh);

    // Update sun position
    this.updateSun();

    console.log("🌞 Sun system initialized");
  }

  updateSun() {
    const sunRadius = 8000;
    const sunAngle = (this.sunTime / 24) * Math.PI * 2 - Math.PI / 2;

    this.sunDirection.set(
      Math.cos(sunAngle),
      Math.sin(sunAngle),
      0.3
    ).normalize();

    if (this.sunMesh) {
      this.sunMesh.position.copy(this.sunDirection).multiplyScalar(sunRadius);
    }

    // Update sun intensity based on time
    const intensityFactor = Math.max(0.1, Math.sin(sunAngle) * 0.8 + 0.2);
    this.currentSunIntensity = this.sunStrengthBase * intensityFactor;

    // Update sun color based on angle
    const warmthFactor = Math.max(0.3, 1.0 - Math.abs(sunAngle) * 0.5);
    this.sunLightColor.setHSL(
      0.1 * warmthFactor,
      this.sunWarmth * warmthFactor,
      0.8 + 0.2 * intensityFactor
    );
  }

  // === SKY/ATMOSPHERE SYSTEM ===
  setupSky() {
    // Main sky
    const skyMaterial = new THREE.MeshBasicMaterial({
      map: texture.sky,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.sky = new THREE.Mesh(geometry.sky, skyMaterial);
    this.sky.visible = true;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // Atmosphere layer
    this.sky2 = new THREE.Mesh(geometry.sky2, material.atmosphere);
    this.sky2.renderOrder = 10000;
    scene.add(this.sky2);

    // Setup fog
    this.setupFog();

    console.log("🌌 Sky system initialized");
  }

  setupFog() {
    if (!scene.fog) {
      scene.fog = new THREE.Fog(0x000000, 300, 1000);
    }
    this.sceneFog = scene.fog;
    this.baseFogNear = scene.fog.near;
    this.baseFogFar = scene.fog.far;

    console.log("🌫️ Fog system initialized");
  }

  updateFog() {
    if (this.sceneFog && this.fogEnabled) {
      this.sceneFog.near = this.baseFogNear * this.fogNearScale;
      this.sceneFog.far = this.baseFogFar * this.fogFarScale;
      this.sceneFog.color.copy(this.fogColor);
    }
  }

  // === SHADOW SYSTEM ===
  setupShadows() {
    // Cleanup existing shadows
    this.shadowCascades.forEach((cascade) => {
      cascade.renderTarget?.dispose?.();
      if (cascade.helper) {
        cascade.helper.parent?.remove(cascade.helper);
        cascade.helper.geometry?.dispose?.();
        cascade.helper.material?.dispose?.();
      }
    });
    this.shadowCascades = [];
    this.shadowMatrices = [];
    this.shadowDebugHelpers = [];

    if (!this.shadowsEnabled) {
      console.log("🌑 Shadows disabled");
      return;
    }

    // Create shadow cascades
    for (let i = 0; i < this.shadowCascadeCount; i++) {
      const renderTarget = new THREE.WebGLRenderTarget(
        this.shadowResolution,
        this.shadowResolution
      );
      renderTarget.texture.minFilter = THREE.LinearFilter;
      renderTarget.texture.magFilter = THREE.LinearFilter;
      renderTarget.texture.generateMipmaps = false;
      renderTarget.depthTexture = new THREE.DepthTexture(
        this.shadowResolution,
        this.shadowResolution
      );
      renderTarget.depthTexture.type = THREE.FloatType;

      const lightCamera = new THREE.OrthographicCamera(
        -1000, 1000, 1000, -1000, 0.1, this.shadowMaxDistance
      );

      this.shadowCascades.push({
        renderTarget,
        lightCamera,
        frustum: new THREE.Frustum(),
        shadowMatrix: new THREE.Matrix4(),
        helper: null
      });

      this.shadowMatrices.push(new THREE.Matrix4());
    }

    console.log(`🌑 Shadow system initialized with ${this.shadowCascadeCount} cascades`);
  }

  calculateShadowCascades() {
    if (!this.shadowCascades.length || !this.shadowsEnabled) return;

    const shadowCamera = camera;
    const near = shadowCamera.near;
    const far = Math.min(this.shadowMaxDistance, shadowCamera.far);
    const lambda = this.shadowLambda;
    const cascadeCount = this.shadowCascades.length;

    const splits = [];
    for (let i = 0; i < cascadeCount; i++) {
      const p = (i + 1) / cascadeCount;
      const log = near * Math.pow(far / near, p);
      const uniform = near + (far - near) * p;
      const splitDist = THREE.MathUtils.lerp(uniform, log, lambda);
      splits.push(splitDist);
    }

    const adjustedSplits = [];

    let previousSplit = near;
    let previousRawSplit = near;
    for (let i = 0; i < cascadeCount; i++) {
      const currentSplit = splits[i];
      if (currentSplit == null) continue;

      const segmentLength = Math.max(currentSplit - previousRawSplit, 0);
      const overlapAmount = segmentLength * this.shadowCascadeOverlap;

      const cascadeNear = previousSplit;
      const cascadeFar = Math.min(far, currentSplit + overlapAmount);

      if (cascadeFar > cascadeNear + 1e-3) {
        this.updateCascadeCamera(i, cascadeNear, cascadeFar, shadowCamera);
      }

      const adjustedSplit = Math.max(
        cascadeNear + 1e-3,
        currentSplit - overlapAmount
      );
      adjustedSplits[i] = adjustedSplit;

      previousSplit = adjustedSplit;
      previousRawSplit = currentSplit;
    }

    this.shadowSplitsVec.set(
      adjustedSplits[0] ?? far,
      adjustedSplits[1] ?? far,
      adjustedSplits[2] ?? far,
      far
    );
  }

  updateCascadeCamera(index, nearDist, farDist, perspectiveCamera) {
    const cascade = this.shadowCascades[index];
    if (!cascade) return;

    const camDir = new THREE.Vector3();
    perspectiveCamera.getWorldDirection(camDir);
    camDir.normalize();

    const up = new THREE.Vector3().copy(perspectiveCamera.up).normalize();
    const right = new THREE.Vector3().crossVectors(camDir, up).normalize();
    up.crossVectors(right, camDir).normalize();

    const camPos = new THREE.Vector3().copy(perspectiveCamera.position);

    const tanHalfFov = Math.tan(
      THREE.MathUtils.degToRad(perspectiveCamera.fov * 0.5)
    );
    const aspect = perspectiveCamera.aspect;

    const nearCenter = camPos
      .clone()
      .add(camDir.clone().multiplyScalar(nearDist));
    const farCenter = camPos
      .clone()
      .add(camDir.clone().multiplyScalar(farDist));

    const nearHeight = tanHalfFov * nearDist;
    const nearWidth = nearHeight * aspect;
    const farHeight = tanHalfFov * farDist;
    const farWidth = farHeight * aspect;

    const corners = this.shadowTempCorners;

    const nearUp = up.clone().multiplyScalar(nearHeight);
    const nearRight = right.clone().multiplyScalar(nearWidth);
    const farUp = up.clone().multiplyScalar(farHeight);
    const farRight = right.clone().multiplyScalar(farWidth);

    corners[0].copy(nearCenter).sub(nearRight).sub(nearUp);
    corners[1].copy(nearCenter).add(nearRight).sub(nearUp);
    corners[2].copy(nearCenter).sub(nearRight).add(nearUp);
    corners[3].copy(nearCenter).add(nearRight).add(nearUp);
    corners[4].copy(farCenter).sub(farRight).sub(farUp);
    corners[5].copy(farCenter).add(farRight).sub(farUp);
    corners[6].copy(farCenter).sub(farRight).add(farUp);
    corners[7].copy(farCenter).add(farRight).add(farUp);

    const lightDir = this.sunDirection.clone().normalize();
    const lightForward = lightDir.clone().negate();
    const worldUp =
      Math.abs(lightForward.z) > 0.99
        ? new THREE.Vector3(1, 0, 0)
        : new THREE.Vector3(0, 0, 1);
    const lightRight = new THREE.Vector3()
      .crossVectors(worldUp, lightForward)
      .normalize();
    const lightUp = new THREE.Vector3()
      .crossVectors(lightForward, lightRight)
      .normalize();

    const minBounds = { x: Infinity, y: Infinity, z: Infinity };
    const maxBounds = { x: -Infinity, y: -Infinity, z: -Infinity };

    const focusWorld = new THREE.Vector3().copy(perspectiveCamera.position);
    const focusX = focusWorld.dot(lightRight);
    const focusY = focusWorld.dot(lightUp);
    const focusZ = focusWorld.dot(lightForward);

    const extendBounds = (point) => {
      const x = point.dot(lightRight);
      const y = point.dot(lightUp);
      const z = point.dot(lightForward);

      if (x < minBounds.x) minBounds.x = x;
      if (y < minBounds.y) minBounds.y = y;
      if (z < minBounds.z) minBounds.z = z;
      if (x > maxBounds.x) maxBounds.x = x;
      if (y > maxBounds.y) maxBounds.y = y;
      if (z > maxBounds.z) maxBounds.z = z;
    };

    for (let i = 0; i < 8; i++) {
      extendBounds(corners[i]);
    }

    extendBounds(focusWorld);

    const cascadeCount = this.shadowCascades.length || 1;
    const cascadeT = cascadeCount > 1 ? index / (cascadeCount - 1) : 0;

    const groundReach = THREE.MathUtils.lerp(
      400,
      this.shadowMaxDistance,
      cascadeT
    );
    extendBounds(focusWorld.clone().addScaledVector(WORLD_UP, -groundReach));

    const skyReach = THREE.MathUtils.lerp(600, 1200, cascadeT);
    extendBounds(focusWorld.clone().addScaledVector(WORLD_UP, skyReach));
    const marginXY = THREE.MathUtils.lerp(18, 60, cascadeT);
    const marginZ = THREE.MathUtils.lerp(100, 300, cascadeT);

    const boundsCenterX = (minBounds.x + maxBounds.x) * 0.5;
    const boundsCenterY = (minBounds.y + maxBounds.y) * 0.5;

    let centerX = THREE.MathUtils.lerp(focusX, boundsCenterX, cascadeT);
    let centerY = THREE.MathUtils.lerp(focusY, boundsCenterY, cascadeT);

    let halfExtentX = Math.max(
      Math.abs(centerX - minBounds.x),
      Math.abs(centerX - maxBounds.x)
    );
    let halfExtentY = Math.max(
      Math.abs(centerY - minBounds.y),
      Math.abs(centerY - maxBounds.y)
    );

    let halfWidth = Math.max(halfExtentX, halfExtentY) + marginXY;
    halfWidth = Math.max(halfWidth, 1e-3);

    const minZ = minBounds.z - marginZ;
    const maxZ = maxBounds.z + marginZ;
    const depth = Math.max(1.0, maxZ - minZ);
    const centerZ = (minZ + maxZ) * 0.5;
    const cameraOffset = depth * 0.5;

    const texelSize = (halfWidth * 2) / this.shadowResolution;
    if (texelSize > 0) {
      centerX = Math.round((centerX - focusX) / texelSize) * texelSize + focusX;
      centerY = Math.round((centerY - focusY) / texelSize) * texelSize + focusY;
    }

    halfExtentX = Math.max(
      Math.abs(centerX - minBounds.x),
      Math.abs(centerX - maxBounds.x)
    );
    halfExtentY = Math.max(
      Math.abs(centerY - minBounds.y),
      Math.abs(centerY - maxBounds.y)
    );
    halfWidth = Math.max(
      halfWidth,
      halfExtentX + marginXY,
      halfExtentY + marginXY
    );
    const halfHeight = halfWidth;

    const centerWorld = focusWorld
      .clone()
      .addScaledVector(lightRight, centerX - focusX)
      .addScaledVector(lightUp, centerY - focusY)
      .addScaledVector(lightForward, centerZ - focusZ);

    const lightCamera = cascade.lightCamera;
    const eyeWorld = centerWorld
      .clone()
      .sub(lightForward.clone().multiplyScalar(cameraOffset));
    lightCamera.position.copy(eyeWorld);
    lightCamera.up.copy(lightUp);
    lightCamera.lookAt(centerWorld);
    lightCamera.updateMatrixWorld(true);
    lightCamera.matrixWorldInverse.copy(lightCamera.matrixWorld).invert();

    lightCamera.left = -halfWidth;
    lightCamera.right = halfWidth;
    lightCamera.bottom = -halfHeight;
    lightCamera.top = halfHeight;
    lightCamera.near = 0.1;
    lightCamera.far = depth;
    lightCamera.updateProjectionMatrix();
    lightCamera.updateMatrixWorld(true);
    lightCamera.matrixWorldInverse.copy(lightCamera.matrixWorld).invert();

    this.shadowMatrices[index]
      .copy(lightCamera.projectionMatrix)
      .multiply(lightCamera.matrixWorldInverse);

    if (cascade.helper) {
      cascade.helper.update();
      cascade.helper.visible =
        this.shadowDebugEnabled && this.shadowCascadeEnabled[index];
    }
  }

  // === ENVIRONMENT PRESETS ===
  applyPreset(presetName) {
    const presets = {
      dawn: {
        sunTime: 6.0,
        sunWarmth: 0.9,
        ambientStrength: 0.4,
        fogColor: new THREE.Color(0.8, 0.7, 0.6),
        skyTintColor: new THREE.Color(1.0, 0.8, 0.6)
      },
      noon: {
        sunTime: 12.0,
        sunWarmth: 0.6,
        ambientStrength: 0.8,
        fogColor: new THREE.Color(0.6, 0.7, 0.9),
        skyTintColor: new THREE.Color(0.6, 0.7, 0.9)
      },
      dusk: {
        sunTime: 18.0,
        sunWarmth: 1.0,
        ambientStrength: 0.3,
        fogColor: new THREE.Color(0.9, 0.6, 0.4),
        skyTintColor: new THREE.Color(1.0, 0.7, 0.5)
      },
      night: {
        sunTime: 0.0,
        sunWarmth: 0.2,
        ambientStrength: 0.2,
        fogColor: new THREE.Color(0.1, 0.2, 0.4),
        skyTintColor: new THREE.Color(0.2, 0.3, 0.6)
      }
    };

    const preset = presets[presetName];
    if (preset) {
      Object.assign(this, preset);
      this.updateSun();
      this.updateFog();
      console.log(`🌍 Applied environment preset: ${presetName}`);
    }
  }

  // === UPDATE METHODS ===
  update(deltaTime) {
    this.updateCameraMatrices();
    this.calculateShadowCascades();
    this.updateFog();
  }

  // === GETTERS/SETTERS ===
  setSunTime(time) {
    this.sunTime = time;
    this.updateSun();
  }

  setShadowsEnabled(enabled) {
    this.shadowsEnabled = enabled;
    this.setupShadows();
  }

  setFogEnabled(enabled) {
    this.fogEnabled = enabled;
    if (this.sceneFog) {
      this.sceneFog.far = enabled ? this.baseFogFar * this.fogFarScale : 100000;
    }
  }

  setShadowSoftness(value) {
    this.shadowSoftness = THREE.MathUtils.clamp(value, 0.1, 4.0);
  }

  setShadowResolution(value) {
    const clamped = Math.max(128, Math.min(2048, value));
    const pow2 = Math.pow(2, Math.round(Math.log2(clamped)));
    if (pow2 === this.shadowResolution) return;
    this.shadowResolution = pow2;
    this.setupShadows();
  }

  setShadowCascadeEnabled(index, value) {
    if (index < 0 || index >= this.shadowCascadeEnabled.length) return;
    this.shadowCascadeEnabled[index] = Boolean(value);
    if (this.shadowsEnabled) {
      this.renderShadowMaps();
    }
    if (this.shadowDebugHelpers[index]) {
      this.shadowDebugHelpers[index].visible =
        this.shadowDebugEnabled && this.shadowCascadeEnabled[index];
    }
  }

  // === TERRAIN INTEGRATION ===
  applyToTerrain(terrain) {
    if (!terrain) return;

    terrain.updateSun(this.sunDirection, this.currentSunIntensity);
    terrain.updateAmbient(this.ambientDirection, this.ambientStrength, this.ambientColor);
    terrain.updateSmoothFactor(this.normalSmoothFactor);
    terrain.updateSpecularStrength(this.specularStrength);
    terrain.updateSkyTint(this.skyTintColor, this.skyTintStrength);
    terrain.updateViewMatrix(this.viewMatrix);

    const shadowMaps = this.shadowCascades.map(
      (cascade) => cascade.renderTarget?.depthTexture || null
    );

    terrain.updateShadowUniforms(
      this.shadowMatrices,
      this.shadowSplitsVec,
      shadowMaps,
      this.shadowBias,
      this.shadowStrength,
      this.shadowsEnabled,
      this.shadowCascadeEnabled,
      this.shadowResolution,
      this.shadowSoftness
    );
  }

  // === SHADOW RENDERING ===
  renderShadowMaps(terrain, renderer) {
    if (!this.shadowsEnabled || !this.shadowCascades.length || !terrain) {
      return;
    }

    this.calculateShadowCascades();

    const previousRenderTarget = renderer.getRenderTarget();
    const previousAutoClear = renderer.autoClear;

    const skyVisible = this.sky?.visible;
    const atmosphereVisible = this.sky2?.visible;
    const sunMeshVisible = this.sunMesh?.visible;
    if (this.sky) this.sky.visible = false;
    if (this.sky2) this.sky2.visible = false;
    if (this.sunMesh) this.sunMesh.visible = false;

    terrain.useDepthMaterial(true);

    renderer.autoClear = true;
    for (let i = 0; i < this.shadowCascades.length; i++) {
      const cascade = this.shadowCascades[i];
      if (!this.shadowCascadeEnabled[i]) continue;
      renderer.setRenderTarget(cascade.renderTarget);
      renderer.clear(true, true, true);
      renderer.render(scene, cascade.lightCamera);
    }

    terrain.useDepthMaterial(false);

    if (this.sky !== undefined) this.sky.visible = skyVisible;
    if (this.sky2 !== undefined) this.sky2.visible = atmosphereVisible;
    if (this.sunMesh !== undefined) this.sunMesh.visible = sunMeshVisible;

    renderer.setRenderTarget(previousRenderTarget);
    renderer.autoClear = previousAutoClear;
  }

  // === CLEANUP ===
  dispose() {
    // Dispose shadow resources
    this.shadowCascades.forEach((cascade) => {
      cascade.renderTarget?.dispose?.();
      if (cascade.helper) {
        cascade.helper.parent?.remove(cascade.helper);
        cascade.helper.geometry?.dispose?.();
        cascade.helper.material?.dispose?.();
      }
    });

    // Remove sun mesh
    if (this.sunMesh) {
      scene.remove(this.sunMesh);
      this.sunMesh.geometry?.dispose?.();
      this.sunMesh.material?.dispose?.();
    }

    // Remove sky meshes
    if (this.sky) {
      scene.remove(this.sky);
      this.sky.geometry?.dispose?.();
      this.sky.material?.dispose?.();
    }
    if (this.sky2) {
      scene.remove(this.sky2);
    }

    console.log("🗑️ Environment Manager disposed");
  }
}