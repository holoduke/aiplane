import * as THREE from "three";
import { LensFlare } from "./LensFlare.js";
import { sampleHeight } from "./noise/index.js";
import { sampleSkyColors, computeSunDirection } from "./sky.js";
import { material } from "./material.js";
import { geometry } from "./geometry.js";
import { texture } from "./texture.js";
import { scene } from "./scene.js";
import { camera } from "./camera.js";
import { renderer } from "./renderer.js";
import { container } from "./container.js";
import obeliskVert from "./assets/shaders/obelisk.vert?raw";
import obeliskFrag from "./assets/shaders/obelisk.frag?raw";

const WORLD_UP = new THREE.Vector3(0, 0, 1);
const SUN_COLOR_COOL = new THREE.Color(0.6, 0.75, 0.98);
const SUN_COLOR_WARM = new THREE.Color(1.0, 0.75, 0.52);
const AMBIENT_COLOR_COOL = new THREE.Color(0.32, 0.44, 0.6);
const AMBIENT_COLOR_WARM = new THREE.Color(0.6, 0.48, 0.36);
const SKY_TINT_COOL = new THREE.Color(0.62, 0.76, 0.98);
const SKY_TINT_WARM = new THREE.Color(0.98, 0.68, 0.52);
const NEUTRAL_SKY_COLOR = new THREE.Color(0.5, 0.7, 0.9);

// Temp variables
const _tmpSunColor = new THREE.Color();
const _tmpSkyAdjust = new THREE.Color();
const _tmpOffset = new THREE.Vector3();
const _tmpFocus = new THREE.Vector3();

export class LightingAndShadows {
  constructor(app) {
    this.app = app;

    // Lighting properties
    this.sunTime = 16.7;
    this.sunStrengthBase = 1.2;
    this.sunDirection = new THREE.Vector3(0, 1, 0);
    this.currentSunIntensity = 1.0;
    this.sunWarmth = 0.75;
    this.sunLightColor = new THREE.Color(1.0, 0.85, 0.65);
    this.ambientStrength = 0.3;
    this.ambientColor = new THREE.Color(0.45, 0.42, 0.35);
    this.ambientDirection = new THREE.Vector3(1, 0, 0);
    this.sunWorldPosition = new THREE.Vector3();
    this.sunDistance = 15000;

    // Shadow properties
    this.shadowsEnabled = true;
    this.shadowCascadeCount = 3;
    this.shadowResolution = 4192;
    this.shadowLambda = 0.6;
    this.shadowMaxDistance = 3600;
    this.shadowBias = 0.0015;
    this.shadowStrength = 1.0;
    this.shadowSoftness = 1.0;
    this.shadowCascadeOverlap = 0.1;
    this.shadowCascades = [];
    this.shadowMatrices = [];
    this.shadowSplitsVec = new THREE.Vector4(0, 0, 0, 0);
    this.shadowTempCorners = Array.from(
      { length: 8 },
      () => new THREE.Vector3()
    );
    this.shadowCascadeEnabled = [true, true, true];
    this.shadowDebugEnabled = false;
    this.shadowDebugHelpers = [];

    // Debug lights and objects
    this.debugAmbientLight = null;
    this.debugSunLight = null;
    this.lensFlare = null;
    this.sunMesh = null;
    this.debugObelisk = null;

    // Bind methods
    this.updateSun = this.updateSun.bind(this);
    this.setupShadows = this.setupShadows.bind(this);
    this.renderShadowMaps = this.renderShadowMaps.bind(this);
    this.setShadowEnabled = this.setShadowEnabled.bind(this);
    this.setShadowStrength = this.setShadowStrength.bind(this);
    this.setShadowBias = this.setShadowBias.bind(this);
    this.setShadowMaxDistance = this.setShadowMaxDistance.bind(this);
    this.setShadowResolution = this.setShadowResolution.bind(this);
    this.setShadowCascadeEnabled = this.setShadowCascadeEnabled.bind(this);
    this.setShadowSoftness = this.setShadowSoftness.bind(this);
  }

  init() {
    this.setupShadows();
    this.setupLensFlare();
    this.setupSunMesh();
    this.setupDebugHelpers();
    this.updateDebugLight();
  }

  setupLensFlare() {
    this.lensFlare = new LensFlare(scene, camera, renderer);
    this.lensFlare.setSunColor(this.sunLightColor);
  }

  setupSunMesh() {
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
    this.sunMesh.layers.set(1); // Put on layer 1 (effects layer) to avoid terrain occlusion
    scene.add(this.sunMesh);
  }

  setupDebugHelpers() {
    const obeliskHeight = 420;
    const spikeHeight = 80;
    // Main obelisk body (tapered cylinder)
    const obeliskGeometry = new THREE.CylinderGeometry(
      28,
      52,
      obeliskHeight,
      6,
      1
    );

    // Sharp spike on top (cone)
    const spikeGeometry = new THREE.ConeGeometry(15, spikeHeight, 6);

    // Try custom shader first, fallback to standard material if it fails
    let obeliskMaterial;
    try {
      obeliskMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uBaseColor: { value: new THREE.Color(0xd0d8e0) }, // Silver color
          uSunDirection: { value: this.sunDirection.clone() },
          uSunIntensity: { value: this.currentSunIntensity },
          uSunColor: { value: this.sunLightColor.clone() },
          uAmbientStrength: { value: this.ambientStrength },
          uAmbientColor: { value: this.ambientColor.clone() },
        },
        vertexShader: obeliskVert,
        fragmentShader: obeliskFrag,
      });
      console.log("Obelisk custom shader created successfully");
    } catch (error) {
      console.error("Shader creation failed, using fallback:", error);
      // Fallback to simple visible material
      obeliskMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6600, // Bright orange for visibility
      });
    }

    // Create meshes
    const obelisk = new THREE.Mesh(obeliskGeometry, obeliskMaterial);
    const spike = new THREE.Mesh(spikeGeometry, obeliskMaterial);

    // Create group to combine both parts
    const obeliskGroup = new THREE.Group();

    // Rotate to stand upright (CylinderGeometry is Y-up, we need Z-up)
    obelisk.rotation.x = Math.PI / 2;
    spike.rotation.x = Math.PI / 2;

    // Position spike on top of obelisk
    spike.position.z = obeliskHeight * 0.5 + spikeHeight * 0.5;

    obeliskGroup.add(obelisk);
    obeliskGroup.add(spike);

    // Position partially embedded in terrain
    const obeliskX = 200;
    const obeliskY = 120;
    const terrainHeight = sampleHeight(obeliskX, obeliskY);
    const finalZ = terrainHeight - obeliskHeight * 0.2; // Embed 20% into terrain

    obeliskGroup.position.set(obeliskX, obeliskY, finalZ);
    obelisk.castShadow = true;
    obelisk.receiveShadow = true;
    spike.castShadow = true;
    spike.receiveShadow = true;
    scene.add(obeliskGroup);
    this.debugObelisk = obeliskGroup;

    console.log(
      `Obelisk created at position: (${obeliskX}, ${obeliskY}, ${finalZ.toFixed(
        2
      )})`
    );
    console.log(`Terrain height at obelisk: ${terrainHeight.toFixed(2)}`);
    console.log("Obelisk with spike added to scene");

    this.debugAmbientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(this.debugAmbientLight);

    this.debugSunLight = new THREE.DirectionalLight(0xffffff, 0.7);
    this.debugSunLight.castShadow = false;
    scene.add(this.debugSunLight);
    this.debugSunLight.target.position.copy(this.app.center ?? new THREE.Vector3());
    scene.add(this.debugSunLight.target);
    this.updateDebugLight();
  }

  setupShadows() {
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
      this.app.terrain?.setShadowsEnabled(false);
      this.applyShadowUniformsToTerrain();
      return;
    }

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
      renderTarget.depthTexture.type = THREE.UnsignedInt248Type;

      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2048);
      camera.layers.set(0); // Only render layer 0 for shadows
      const helper = new THREE.CameraHelper(camera);
      helper.visible = this.shadowDebugEnabled;
      scene.add(helper);
      this.shadowCascades.push({ camera, renderTarget, helper });
      this.shadowDebugHelpers.push(helper);
      this.shadowMatrices.push(new THREE.Matrix4());
    }

    this.shadowSplitsVec.set(0, 0, 0, this.shadowMaxDistance);
    this.app.terrain?.setShadowsEnabled(true);
    this.applyShadowUniformsToTerrain();
  }

  applyShadowUniformsToTerrain() {
    if (!this.app.terrain) return;
    const textures = [null, null, null];
    for (
      let i = 0;
      i < Math.min(this.shadowCascades.length, textures.length);
      i++
    ) {
      textures[i] = this.shadowCascades[i].renderTarget.depthTexture;
    }
    this.app.terrain.updateShadowUniforms(
      this.shadowMatrices,
      this.shadowSplitsVec,
      textures,
      this.shadowBias,
      this.shadowStrength,
      this.shadowsEnabled && this.shadowCascades.length > 0,
      this.shadowCascadeEnabled,
      this.shadowResolution,
      this.shadowSoftness
    );
    this.app.terrain.updateCascadeEnabled(this.shadowCascadeEnabled);
    if (this.app.viewMatrix) {
      this.app.terrain.updateViewMatrix(this.app.viewMatrix);
    }
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

    this.applyShadowUniformsToTerrain();
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

    const focusWorld = _tmpFocus.copy(perspectiveCamera.position);
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
    if (this.app.terrain?.offset) {
      extendBounds(_tmpOffset.copy(this.app.terrain.offset));
    }

    const cascadeCount = this.shadowCascades.length || 1;
    const cascadeT = cascadeCount > 1 ? index / (cascadeCount - 1) : 0;

    const groundReach = THREE.MathUtils.lerp(
      400,
      this.shadowMaxDistance,
      cascadeT
    );
    // Extend bounds downward for ground coverage
    extendBounds(focusWorld.clone().addScaledVector(WORLD_UP, -groundReach));

    // Extend bounds upward for tall objects (especially important when looking down)
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

    // Ensure snapping did not shrink coverage
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

    const lightCamera = cascade.camera;
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

  renderShadowMaps() {
    if (!this.shadowsEnabled || !this.shadowCascades.length || !this.app.terrain) {
      return;
    }

    this.calculateShadowCascades();

    const previousRenderTarget = renderer.getRenderTarget();
    const previousAutoClear = renderer.autoClear;

    const skyVisible = this.app.sky?.visible;
    const atmosphereVisible = this.app.sky2?.visible;
    const sunMeshVisible = this.sunMesh?.visible;
    if (this.app.sky) this.app.sky.visible = false;
    if (this.app.sky2) this.app.sky2.visible = false;
    if (this.sunMesh) this.sunMesh.visible = false;

    this.app.terrain.useDepthMaterial(true);

    renderer.autoClear = true;
    for (let i = 0; i < this.shadowCascades.length; i++) {
      const cascade = this.shadowCascades[i];
      if (!this.shadowCascadeEnabled[i]) continue;
      renderer.setRenderTarget(cascade.renderTarget);
      renderer.clear(true, true, true);
      renderer.render(scene, cascade.camera);
    }

    this.app.terrain.useDepthMaterial(false);

    if (this.app.sky !== undefined) this.app.sky.visible = skyVisible;
    if (this.app.sky2 !== undefined) this.app.sky2.visible = atmosphereVisible;
    if (this.sunMesh !== undefined) this.sunMesh.visible = sunMeshVisible;

    renderer.setRenderTarget(previousRenderTarget);
    renderer.autoClear = previousAutoClear;
  }

  updateSun() {
    const skySample = sampleSkyColors(this.sunTime, this.app.skyKeyframes);
    const sunDir = computeSunDirection(this.sunTime);

    this.sunDirection.copy(sunDir);
    this.currentSunIntensity = this.sunStrengthBase * skySample.intensity;

    const ambientDir = new THREE.Vector3(-sunDir.y, sunDir.x, 0);
    if (ambientDir.lengthSq() < 1e-4) {
      ambientDir.set(1, 0, 0);
    }
    ambientDir.normalize();
    this.ambientDirection.copy(ambientDir);

    const warmth = THREE.MathUtils.clamp(this.sunWarmth, 0.0, 1.0);
    this.ambientColor.lerpColors(
      AMBIENT_COLOR_COOL,
      AMBIENT_COLOR_WARM,
      warmth
    );
    _tmpSunColor.lerpColors(SUN_COLOR_COOL, SUN_COLOR_WARM, warmth);
    this.sunLightColor.copy(_tmpSunColor);

    const _skyBlendColor = new THREE.Color();
    _skyBlendColor.copy(skySample.skyColor);
    _skyBlendColor.lerp(skySample.horizonColor, 0.2);
    _skyBlendColor.lerp(NEUTRAL_SKY_COLOR, 0.55);
    this.app.skyTintColor.copy(_skyBlendColor);
    _tmpSkyAdjust.lerpColors(SKY_TINT_COOL, SKY_TINT_WARM, warmth);
    this.app.skyTintColor.lerp(_tmpSkyAdjust, 0.35);

    if (this.app.terrain) {
      this.app.terrain.updateSun(this.sunDirection, this.currentSunIntensity);
      this.app.terrain.updateSunWarmth(this.sunWarmth);
      this.app.terrain.updateAmbient(
        ambientDir,
        this.ambientStrength,
        this.ambientColor
      );
      this.app.terrain.updateSkyTint(this.app.skyTintColor, this.app.skyTintStrength);
    }

    this.updateDebugLight();
    if (this.debugSunLight) {
      this.debugSunLight.color.copy(this.sunLightColor);
    }
    if (this.debugAmbientLight) {
      this.debugAmbientLight.color.copy(this.ambientColor);
    }

    if (material.atmosphere.uniforms.uHorizonColor) {
      material.atmosphere.uniforms.uHorizonColor.value.copy(
        skySample.horizonColor
      );
    }
    if (material.atmosphere.uniforms.uSkyColor) {
      material.atmosphere.uniforms.uSkyColor.value.copy(skySample.skyColor);
    }

    if (this.sunMesh) {
      const intensityTint = Math.max(0.35, this.currentSunIntensity);
      this.sunMesh.material.color
        .copy(this.sunLightColor)
        .multiplyScalar(intensityTint);
    }

    if (this.lensFlare) {
      this.lensFlare.setSunIntensity(this.currentSunIntensity);
      this.lensFlare.setSunColor(this.sunLightColor);
    }

    // Update obelisk shader uniforms for all meshes in the group
    if (this.debugObelisk && this.debugObelisk.isGroup) {
      this.debugObelisk.children.forEach((mesh) => {
        if (mesh.material && mesh.material.uniforms) {
          const uniforms = mesh.material.uniforms;

          if (uniforms.uSunDirection) {
            uniforms.uSunDirection.value.copy(this.sunDirection);
          }
          if (uniforms.uSunIntensity) {
            uniforms.uSunIntensity.value = this.currentSunIntensity;
          }
          if (uniforms.uSunColor) {
            uniforms.uSunColor.value.copy(this.sunLightColor);
          }
          if (uniforms.uAmbientStrength) {
            uniforms.uAmbientStrength.value = this.ambientStrength;
          }
          if (uniforms.uAmbientColor) {
            uniforms.uAmbientColor.value.copy(this.ambientColor);
          }
        }
      });
    }
  }

  updateDebugLight() {
    if (!this.debugSunLight) return;
    const focus = this.app.center ? this.app.center.clone() : new THREE.Vector3();
    const offset = this.sunDirection.clone().normalize().multiplyScalar(600);
    this.debugSunLight.position.copy(focus).add(offset);
    this.debugSunLight.intensity = Math.max(0.1, this.currentSunIntensity);
    if (this.debugSunLight.target) {
      this.debugSunLight.target.position.copy(focus);
      this.debugSunLight.target.updateMatrixWorld(true);
    }
  }

  // Animation update method
  update(deltaTime) {
    // Update sun world position
    if (this.sunWorldPosition && this.sunDirection) {
      this.sunWorldPosition
        .copy(camera.position)
        .addScaledVector(this.sunDirection, this.sunDistance);
      if (this.sunMesh) {
        this.sunMesh.position.copy(this.sunWorldPosition);
      }
    }

    // Update lens flare
    if (this.lensFlare) {
      this.lensFlare.update(deltaTime, this.sunWorldPosition, this.app.terrain);
      this.lensFlare.setSunColor(this.sunLightColor);
      if (this.sunMesh) {
        this.sunMesh.visible =
          this.currentSunIntensity > 0.02 && !this.lensFlare.occluded;
      }
    } else if (this.sunMesh) {
      this.sunMesh.visible = this.currentSunIntensity > 0.02;
    }

    // Render shadow maps
    if (this.shadowsEnabled && this.shadowCascades.length) {
      this.renderShadowMaps();
    }
  }

  // Terrain setup integration
  setupTerrainLighting() {
    if (!this.app.terrain) return;

    this.app.terrain.setShadowsEnabled(this.shadowsEnabled);
    this.app.terrain.updateSun(this.sunDirection, this.currentSunIntensity);
    this.app.terrain.updateAmbient(
      this.ambientDirection,
      this.ambientStrength,
      this.ambientColor
    );
    this.applyShadowUniformsToTerrain();
    this.app.terrain.updateCascadeEnabled(this.shadowCascadeEnabled);
  }

  // Shadow setter methods
  setShadowEnabled(value) {
    const enabled = Boolean(value);
    if (this.shadowsEnabled === enabled) return;
    this.shadowsEnabled = enabled;
    if (enabled) {
      this.setupShadows();
      this.renderShadowMaps();
    } else {
      this.shadowCascades.forEach((cascade) => {
        cascade.renderTarget?.dispose?.();
      });
      this.shadowCascades = [];
      this.shadowMatrices = [];
      this.shadowSplitsVec.set(0, 0, 0, 0);
      this.app.terrain?.setShadowsEnabled(false);
      this.applyShadowUniformsToTerrain();
    }
    this.app.terrain?.updateCascadeEnabled(this.shadowCascadeEnabled);
  }

  setShadowStrength(value) {
    this.shadowStrength = THREE.MathUtils.clamp(value, 0.0, 1.0);
    this.applyShadowUniformsToTerrain();
    this.renderShadowMaps();
  }

  setShadowBias(value) {
    this.shadowBias = THREE.MathUtils.clamp(value, 0.00001, 0.01);
    this.applyShadowUniformsToTerrain();
  }

  setShadowMaxDistance(value) {
    this.shadowMaxDistance = Math.max(50, value);
    this.calculateShadowCascades();
    this.renderShadowMaps();
  }

  setShadowResolution(value) {
    const clamped = Math.max(128, Math.min(2048, value));
    const pow2 = Math.pow(2, Math.round(Math.log2(clamped)));
    if (pow2 === this.shadowResolution) return;
    this.shadowResolution = pow2;
    this.setupShadows();
    this.renderShadowMaps();
  }

  setShadowSoftness(value) {
    this.shadowSoftness = THREE.MathUtils.clamp(value, 0.1, 4.0);
    this.applyShadowUniformsToTerrain();
  }

  setShadowCascadeEnabled(index, value) {
    if (index < 0 || index >= this.shadowCascadeEnabled.length) return;
    this.shadowCascadeEnabled[index] = Boolean(value);
    this.app.terrain?.updateCascadeEnabled(this.shadowCascadeEnabled);
    this.applyShadowUniformsToTerrain();
    if (this.shadowsEnabled) {
      this.renderShadowMaps();
    }
    if (this.shadowDebugHelpers[index]) {
      this.shadowDebugHelpers[index].visible =
        this.shadowDebugEnabled && this.shadowCascadeEnabled[index];
    }
  }

  setShadowDebugEnabled(value) {
    this.shadowDebugEnabled = Boolean(value);
    this.shadowDebugHelpers.forEach((helper, idx) => {
      if (helper) {
        helper.visible =
          this.shadowDebugEnabled && this.shadowCascadeEnabled[idx];
      }
    });
  }
}