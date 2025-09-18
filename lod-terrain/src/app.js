import * as THREE from "three";
import Stats from "stats.js";

import { camera } from "./camera.js";
import { container } from "./container.js";
import { geometry } from "./geometry.js";
import { material } from "./material.js";
import {
  noise,
  setNoiseSmoothing,
  setNoiseHeightGain,
  setNoiseWidth,
  getNoiseWidth,
  DEFAULT_NOISE_SMOOTHING,
  MIN_NOISE_WIDTH,
  MAX_NOISE_WIDTH,
} from "./noise.js";
import {
  renderer,
  setRendererPixelRatio,
  getRendererPixelRatio,
} from "./renderer.js";
import { scene } from "./scene.js";
import { Terrain } from "./terrain.js";
import { LensFlare } from "./LensFlare.js";
import { texture } from "./texture.js";

import {
  computeSunDirection,
  sampleSkyColors,
  NEUTRAL_SKY_COLOR,
  SKY_KEYFRAMES,
} from "./app/sky.js";
import { createPostProcessing } from "./app/postprocessing.js";
import { createIntroOverlay } from "./app/ui/IntroOverlay.js";
import { createControlPanel } from "./app/ui/ControlPanel.js";
import { applyEnvironment } from "./app/environment.js";
import { createEnvironmentToggle } from "./app/ui/EnvironmentToggle.js";

const WORLD_UP = new THREE.Vector3(0, 0, 1);
const _tmpDirection = new THREE.Vector3();
const _tmpRight = new THREE.Vector3();
const _tmpLookTarget = new THREE.Vector3();
const _tmpFocus = new THREE.Vector3();
const _tmpOffset = new THREE.Vector3();
const _mouseState = { lastX: 0, lastY: 0 };
const _hudEl = document.createElement("div");
const _skyBlendColor = new THREE.Color();

class TerrainApp {
  constructor() {
    this.clock = new THREE.Clock();
    this.keys = {};
    this.cameraRotation = { x: 0, y: 0 };
    this.moveSpeed = 2.0;
    this.lookSpeed = 0.004;
    this.stats = null;
    this.useFreeCamera = true;
    this.lookTarget = null;
    this.pointerLocked = false;
    this.mouseDragging = false;
    this.fogEnabled = true;
    this.sceneFog = null;
    this.baseFogNear = 300;
    this.baseFogFar = 800;
    this.fogNearScale = 0.34;
    this.fogFarScale = 0.71;
    this.fadeStartScale = 0.9;
    this.fadeEndScale = 1.0;
    this.morphRegion = 0.9;
    this.bloomEnabled = true;
    this.bloomStrength = 0.05;
    this.bloomThreshold = 1.0;
    this.bloomSoftKnee = 0.76;
    this.bloomSigma = 4;
    this.bloomResolution = 356;
    this.aaEnabled = true;
    this.aaSubpixelBlending = 1.0;
    this.aaContrastThreshold = 0.0312;
    this.aaRelativeThreshold = 0.063;
    this.sunTime = 16.7;
    this.sunStrengthBase = 1.2;
    this.sunDirection = new THREE.Vector3(0, 1, 0);
    this.currentSunIntensity = 1.0;
    this.ambientStrength = 0.9;
    this.ambientColor = new THREE.Color(0.45, 0.42, 0.35);
    this.ambientDirection = new THREE.Vector3(1, 0, 0);
    this.normalSmoothFactor = 0.65;
    this.specularStrength = 1.0;
    this.skyTintStrength = 0.15;
    this.skyTintColor = new THREE.Color(0.62, 0.72, 0.88);
    this.contrastAdjustment = 0.1;
    this.brightnessAdjustment = -0.06;
    this.noiseResolution = getNoiseWidth();
    this.shadowsEnabled = true;
    this.shadowCascadeCount = 3;
    this.shadowResolution = 2048;
    this.shadowLambda = 0.6;
    this.shadowMaxDistance = 5000;
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
    this.debugAmbientLight = null;
    this.debugSunLight = null;
    this.cameraForward = new THREE.Vector3(0, 1, 0);
    this.viewMatrix = new THREE.Matrix4();
    this.shadowCascadeEnabled = [true, true, true];
    this.shadowDebugEnabled = true;
    this.shadowDebugHelpers = [];
    this.introActive = true;
    this.introElapsed = 0;
    this.introOverlay = null;
    this.introController = null;
    this.composer = null;
    this.brightPass = null;
    this.blurPassH = null;
    this.blurPassV = null;
    this.compositePass = null;
    this.fxaaPass = null;
    this.brightnessContrastPass = null;
    this.updateBloomResolutionFn = null;
    this.applyAASettingsFn = null;
    this.renderPixelRatio = getRendererPixelRatio();
    this.environmentToggle = null;
    this.postProcessingEnabled = true;
    this.handleComposerResize = null;
    this.lensFlare = null;
    this.sunWorldPosition = new THREE.Vector3();
    this.sunDistance = 15000;
    this.terrainLevels = 5;
    this.terrainResolution = 192;
    this.terrain = null;
    this.center = null;
    this.sky = null;
    this.sky2 = null;
    this.sunMesh = null;
    this.heightSmoothStrength = 0.15;
    this.heightGain = 0.74;
    this.skyKeyframes = SKY_KEYFRAMES;

    this.applyShaderEnvironment = this.applyShaderEnvironment.bind(this);
    this.updateSun = this.updateSun.bind(this);
    this.animate = this.animate.bind(this);
    this.startExperience = this.startExperience.bind(this);
    this.setBloomResolution = this.setBloomResolution.bind(this);
    this.setRenderPixelRatio = this.setRenderPixelRatio.bind(this);
    this.setPostProcessingEnabled = this.setPostProcessingEnabled.bind(this);
    this.setAntialiasEnabled = this.setAntialiasEnabled.bind(this);
    this.setAntialiasSubpixel = this.setAntialiasSubpixel.bind(this);
    this.setAntialiasContrast = this.setAntialiasContrast.bind(this);
    this.setAntialiasRelative = this.setAntialiasRelative.bind(this);
    this.setNoiseResolution = this.setNoiseResolution.bind(this);
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
    this.setupStats();
    this.setupHud();

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.terrainResolution = isMobile ? 96 : 192;
    setNoiseSmoothing(this.heightSmoothStrength);
    setNoiseHeightGain(this.heightGain);

    this.createTerrain();

    this.setupPostProcessing();
    this.setupShadows();
    this.setupLensFlare();
    this.setupSunMesh();
    this.setupDebugHelpers();
    this.setupSky();
    this.setupIntroOverlay();

    camera.position.set(0, 0, 50);
    camera.up.copy(WORLD_UP);
    camera.lookAt(new THREE.Vector3(0, 1, 0));
    camera.updateMatrixWorld(true);
    this.viewMatrix.copy(camera.matrixWorldInverse);
    camera.getWorldDirection(this.cameraForward);
    this.cameraForward.normalize();

    this.center = new THREE.Vector3(0, 0, 0);
    this.lookTarget = this.center.clone();
    this.updateDebugLight();
    this.terrain?.updateViewMatrix(this.viewMatrix);

    this.setupEnvironmentToggle();
    this.setupControlPanel();
    this.setupInputHandlers();

    this.applyShaderEnvironment(this.terrain.activeShaderIndex);
  }

  setupStats() {
    this.stats = new Stats();
    this.stats.showPanel(0);
    this.stats.dom.style.position = "absolute";
    this.stats.dom.style.left = "10px";
    this.stats.dom.style.bottom = "10px";
    this.stats.dom.style.top = "auto";
    document.body.appendChild(this.stats.dom);
  }

  setupHud() {
    _hudEl.style.position = "absolute";
    _hudEl.style.bottom = "10px";
    _hudEl.style.right = "10px";
    _hudEl.style.padding = "6px 10px";
    _hudEl.style.background = "rgba(0, 0, 0, 0.45)";
    _hudEl.style.color = "#fff";
    _hudEl.style.fontFamily = "monospace";
    _hudEl.style.fontSize = "12px";
    _hudEl.style.lineHeight = "1.4";
    _hudEl.style.pointerEvents = "none";
    container.appendChild(_hudEl);
  }

  createTerrain() {
    const previousShaderIndex = this.terrain
      ? this.terrain.activeShaderIndex
      : 0;

    if (this.terrain) {
      const materials = new Set();
      const geometries = new Set();
      this.terrain.traverse((child) => {
        if (child.geometry) geometries.add(child.geometry);
        if (child.material) materials.add(child.material);
        if (child.userData?.mainMaterial) {
          materials.add(child.userData.mainMaterial);
        }
        if (child.userData?.depthMaterial) {
          materials.add(child.userData.depthMaterial);
        }
      });
      materials.forEach((mat) => mat?.dispose?.());
      geometries.forEach((geo) => geo?.dispose?.());
      scene.remove(this.terrain);
    }

    this.terrain = new Terrain(
      noise,
      8192,
      this.terrainLevels,
      this.terrainResolution,
      { enableShadows: this.shadowsEnabled }
    );
    scene.add(this.terrain);

    this.terrain.setShader(previousShaderIndex);
    this.terrain.setShadowsEnabled(this.shadowsEnabled);

    this.terrain.updateMorphRegion(this.morphRegion);
    this.terrain.updateSun(this.sunDirection, this.currentSunIntensity);
    this.terrain.updateAmbient(
      this.ambientDirection,
      this.ambientStrength,
      this.ambientColor
    );
    this.terrain.updateSmoothFactor(this.normalSmoothFactor);
    this.terrain.updateSpecularStrength(this.specularStrength);
    this.terrain.updateSkyTint(this.skyTintColor, this.skyTintStrength);

    this.applyShadowUniformsToTerrain();
    this.terrain.updateCascadeEnabled(this.shadowCascadeEnabled);
    this.terrain.updateViewMatrix(this.viewMatrix);
  }

  setupPostProcessing() {
    const {
      composer,
      brightPass,
      blurPassH,
      blurPassV,
      compositePass,
      fxaaPass,
      brightnessContrastPass,
      setBloomResolution,
      applyAntialiasSettings,
      handleResize,
    } = createPostProcessing({
      renderer,
      scene,
      camera,
      bloomStrength: this.bloomStrength,
      bloomThreshold: this.bloomThreshold,
      bloomSoftKnee: this.bloomSoftKnee,
      bloomSigma: this.bloomSigma,
      bloomResolution: this.bloomResolution,
      aaEnabled: this.aaEnabled,
      aaSubpixelBlending: this.aaSubpixelBlending,
      aaContrastThreshold: this.aaContrastThreshold,
      aaRelativeThreshold: this.aaRelativeThreshold,
      brightness: this.brightnessAdjustment,
      contrast: this.contrastAdjustment,
    });

    this.composer = composer;
    this.brightPass = brightPass;
    this.blurPassH = blurPassH;
    this.blurPassV = blurPassV;
    this.compositePass = compositePass;
    this.fxaaPass = fxaaPass;
    this.brightnessContrastPass = brightnessContrastPass;
    this.updateBloomResolutionFn = setBloomResolution;
    this.applyAASettingsFn = applyAntialiasSettings;

    if (this.brightPass) {
      this.brightPass.material.uniforms.uThreshold.value = this.bloomThreshold;
      this.brightPass.material.uniforms.uSoftKnee.value = this.bloomSoftKnee;
    }
    if (this.blurPassH) {
      this.blurPassH.material.uniforms.uSigma.value = this.bloomSigma;
    }
    if (this.blurPassV) {
      this.blurPassV.material.uniforms.uSigma.value = this.bloomSigma;
    }
    if (this.compositePass) {
      this.compositePass.material.uniforms.uBloomStrength.value =
        this.bloomStrength;
    }
    this.setBloomResolution(this.bloomResolution);

    this.handleComposerResize = () => {
      if (!this.composer) return;
      handleResize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener("resize", this.handleComposerResize);
    this.handleComposerResize();

    this.applyBloomSettings();
    this.applyAntialiasSettings();
  }

  applyBloomSettings() {
    if (this.brightPass) {
      this.brightPass.material.uniforms.uThreshold.value = this.bloomThreshold;
      this.brightPass.material.uniforms.uSoftKnee.value = this.bloomSoftKnee;
    }
    if (this.blurPassH) {
      this.blurPassH.setSigma(this.bloomSigma);
    }
    if (this.blurPassV) {
      this.blurPassV.setSigma(this.bloomSigma);
    }
  }

  setBloomResolution(pixels) {
    const clamped = THREE.MathUtils.clamp(pixels, 32, 1024);
    this.bloomResolution = clamped;
    this.updateBloomResolutionFn?.(clamped);
  }

  setRenderPixelRatio(value) {
    const clamped = THREE.MathUtils.clamp(value, 0.5, 3.0);
    this.renderPixelRatio = clamped;
    setRendererPixelRatio(clamped);
    this.handleComposerResize?.();
  }

  setPostProcessingEnabled(value) {
    this.postProcessingEnabled = Boolean(value);
    this.applyAntialiasSettings();
  }

  setNoiseResolution(value) {
    const clamped = THREE.MathUtils.clamp(
      value,
      MIN_NOISE_WIDTH,
      MAX_NOISE_WIDTH
    );
    const pow2 = Math.pow(2, Math.round(Math.log2(clamped)));
    const applied = setNoiseWidth(pow2);
    this.noiseResolution = applied;
  }

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
      this.terrain?.setShadowsEnabled(false);
      this.applyShadowUniformsToTerrain();
    }
    this.terrain?.updateCascadeEnabled(this.shadowCascadeEnabled);
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
    this.terrain?.updateCascadeEnabled(this.shadowCascadeEnabled);
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

  setAntialiasEnabled(value) {
    this.aaEnabled = Boolean(value);
    this.applyAntialiasSettings();
  }

  setAntialiasSubpixel(value) {
    this.aaSubpixelBlending = THREE.MathUtils.clamp(value, 0.0, 1.5);
    this.applyAntialiasSettings();
  }

  setAntialiasContrast(value) {
    this.aaContrastThreshold = THREE.MathUtils.clamp(value, 0.001, 0.2);
    this.applyAntialiasSettings();
  }

  setAntialiasRelative(value) {
    this.aaRelativeThreshold = THREE.MathUtils.clamp(value, 0.001, 0.3);
    this.applyAntialiasSettings();
  }

  applyAntialiasSettings() {
    this.applyAASettingsFn?.({
      enabled: this.aaEnabled && this.postProcessingEnabled,
      subpixel: this.aaSubpixelBlending,
      contrastThreshold: this.aaContrastThreshold,
      relativeThreshold: this.aaRelativeThreshold,
    });
  }

  setupLensFlare() {
    this.lensFlare = new LensFlare(scene, camera, renderer);
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
    scene.add(this.sunMesh);
  }

  setupDebugHelpers() {
    const debugGeometry = new THREE.BoxGeometry(60, 60, 300);
    const debugMaterial = new THREE.MeshStandardMaterial({
      color: 0xff5522,
      metalness: 0.2,
      roughness: 0.65,
    });
    const cube = new THREE.Mesh(debugGeometry, debugMaterial);
    cube.position.set(200, 120, 150);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
    this.debugCube = cube;

    this.debugAmbientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(this.debugAmbientLight);

    this.debugSunLight = new THREE.DirectionalLight(0xffffff, 0.7);
    this.debugSunLight.castShadow = false;
    scene.add(this.debugSunLight);
    this.debugSunLight.target.position.copy(this.center ?? new THREE.Vector3());
    scene.add(this.debugSunLight.target);
    this.updateDebugLight();
  }

  setupSky() {
    const skyMaterial = new THREE.MeshBasicMaterial({
      map: texture.sky,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.sky = new THREE.Mesh(geometry.sky, skyMaterial);
    this.sky.visible = true;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    this.sky2 = new THREE.Mesh(geometry.sky2, material.atmosphere);
    this.sky2.renderOrder = 10000;
    scene.add(this.sky2);

    if (!scene.fog) {
      scene.fog = new THREE.Fog(0x000000, 300, 1000);
    }
    this.sceneFog = scene.fog;
    this.baseFogNear = scene.fog.near;
    this.baseFogFar = scene.fog.far;
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
      this.terrain?.setShadowsEnabled(false);
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
      const helper = new THREE.CameraHelper(camera);
      helper.visible = this.shadowDebugEnabled;
      scene.add(helper);
      this.shadowCascades.push({ camera, renderTarget, helper });
      this.shadowDebugHelpers.push(helper);
      this.shadowMatrices.push(new THREE.Matrix4());
    }

    this.shadowSplitsVec.set(0, 0, 0, this.shadowMaxDistance);
    this.terrain?.setShadowsEnabled(true);
    this.applyShadowUniformsToTerrain();
  }

  applyShadowUniformsToTerrain() {
    if (!this.terrain) return;
    const textures = [null, null, null];
    for (
      let i = 0;
      i < Math.min(this.shadowCascades.length, textures.length);
      i++
    ) {
      textures[i] = this.shadowCascades[i].renderTarget.depthTexture;
    }
    this.terrain.updateShadowUniforms(
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
    this.terrain.updateCascadeEnabled(this.shadowCascadeEnabled);
    if (this.viewMatrix) {
      this.terrain.updateViewMatrix(this.viewMatrix);
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
    if (this.terrain?.offset) {
      extendBounds(_tmpOffset.copy(this.terrain.offset));
    }

    const cascadeCount = this.shadowCascades.length || 1;
    const cascadeT = cascadeCount > 1 ? index / (cascadeCount - 1) : 0;

    const groundReach = THREE.MathUtils.lerp(
      400,
      this.shadowMaxDistance,
      cascadeT
    );
    extendBounds(focusWorld.clone().addScaledVector(WORLD_UP, -groundReach));
    const marginXY = THREE.MathUtils.lerp(18, 60, cascadeT);
    const marginZ = THREE.MathUtils.lerp(50, 180, cascadeT);

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
    if (!this.shadowsEnabled || !this.shadowCascades.length || !this.terrain) {
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

    this.terrain.useDepthMaterial(true);

    renderer.autoClear = true;
    for (let i = 0; i < this.shadowCascades.length; i++) {
      const cascade = this.shadowCascades[i];
      if (!this.shadowCascadeEnabled[i]) continue;
      renderer.setRenderTarget(cascade.renderTarget);
      renderer.clear(true, true, true);
      renderer.render(scene, cascade.camera);
    }

    this.terrain.useDepthMaterial(false);

    if (this.sky !== undefined) this.sky.visible = skyVisible;
    if (this.sky2 !== undefined) this.sky2.visible = atmosphereVisible;
    if (this.sunMesh !== undefined) this.sunMesh.visible = sunMeshVisible;

    renderer.setRenderTarget(previousRenderTarget);
    renderer.autoClear = previousAutoClear;
  }

  setupIntroOverlay() {
    this.introController = createIntroOverlay({
      container,
      onStart: this.startExperience,
    });
    this.introOverlay = this.introController.overlay;
  }

  setupControlPanel() {
    createControlPanel({
      app: this,
      container,
      applyShaderEnvironment: this.applyShaderEnvironment,
      createTerrain: () => this.createTerrain(),
      setTerrainSmoothing: (value) => this.setTerrainSmoothing(value),
      setHeightGain: (value) => this.setHeightGain(value),
    });
  }

  setupEnvironmentToggle() {
    this.environmentToggle = createEnvironmentToggle({
      app: this,
      container,
    });
  }

  setupInputHandlers() {
    const pointerLockElement = renderer.domElement;
    pointerLockElement.tabIndex = 0;

    const getPointerLockElement = () =>
      document.pointerLockElement ||
      document.mozPointerLockElement ||
      document.webkitPointerLockElement;

    const requestPointerLock = () => {
      const request =
        pointerLockElement.requestPointerLock ||
        pointerLockElement.mozRequestPointerLock ||
        pointerLockElement.webkitRequestPointerLock;
      if (request) {
        request.call(pointerLockElement);
        return true;
      }
      return false;
    };

    const exitPointerLock = () => {
      const exit =
        document.exitPointerLock ||
        document.mozExitPointerLock ||
        document.webkitExitPointerLock;
      exit?.call(document);
    };

    const onPointerLockChange = () => {
      this.pointerLocked = getPointerLockElement() === pointerLockElement;
      if (this.pointerLocked) {
        this.mouseDragging = false;
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "auto";
      }
    };

    const onPointerLockError = (event) => {
      console.warn("Pointer lock failed", event);
    };

    const applyMouseDelta = (dx, dy) => {
      this.cameraRotation.y -= dx * this.lookSpeed;
      this.cameraRotation.x -= dy * this.lookSpeed;
    };

    const onMouseMove = (event) => {
      if (!this.useFreeCamera) return;

      if (this.pointerLocked) {
        const movementX =
          event.movementX ?? event.mozMovementX ?? event.webkitMovementX ?? 0;
        const movementY =
          event.movementY ?? event.mozMovementY ?? event.webkitMovementY ?? 0;
        applyMouseDelta(movementX, movementY);
      } else if (this.mouseDragging) {
        const dx = event.clientX - _mouseState.lastX;
        const dy = event.clientY - _mouseState.lastY;
        _mouseState.lastX = event.clientX;
        _mouseState.lastY = event.clientY;
        applyMouseDelta(dx, dy);
      }
    };

    const onMouseDown = (event) => {
      if (!this.useFreeCamera || event.button !== 0) return;
      pointerLockElement.focus();
      const locked = requestPointerLock();
      if (!locked) {
        this.mouseDragging = true;
        _mouseState.lastX = event.clientX;
        _mouseState.lastY = event.clientY;
      }
    };

    const stopDragging = () => {
      this.mouseDragging = false;
    };

    document.addEventListener("pointerlockchange", onPointerLockChange);
    document.addEventListener("mozpointerlockchange", onPointerLockChange);
    document.addEventListener("webkitpointerlockchange", onPointerLockChange);
    document.addEventListener("pointerlockerror", onPointerLockError);
    document.addEventListener("mozpointerlockerror", onPointerLockError);
    document.addEventListener("webkitpointerlockerror", onPointerLockError);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("pointermove", onMouseMove);
    document.addEventListener("mouseup", stopDragging);
    pointerLockElement.addEventListener("mousedown", onMouseDown);
    pointerLockElement.addEventListener("mouseleave", stopDragging);

    document.addEventListener("keydown", (e) => {
      if (
        this.introActive &&
        (e.code === "Enter" || e.code === "NumpadEnter")
      ) {
        this.startExperience();
        e.preventDefault();
        return;
      }

      this.keys[e.code] = true;

      if (e.code === "KeyT") {
        const shaderIndex = this.terrain.cycleShader();
        this.applyShaderEnvironment(shaderIndex);
        e.preventDefault();
      }

      if (e.code === "KeyF") {
        this.fogEnabled = !this.fogEnabled;
        if (this.fogEnabled) {
          if (!this.sceneFog) {
            this.sceneFog = new THREE.Fog(
              0x000000,
              this.baseFogNear,
              this.baseFogFar
            );
          }
          scene.fog = this.sceneFog;
        } else {
          this.sceneFog = scene.fog;
          scene.fog = null;
        }
        this.applyShaderEnvironment(this.terrain.activeShaderIndex);
        e.preventDefault();
      }

      if (e.code === "KeyP" && this.stats) {
        const panels = this.stats.dom.children;
        let current = 0;
        for (let i = 0; i < panels.length; i++) {
          if (panels[i].style.display === "block") {
            current = i;
            break;
          }
        }
        const next = (current + 1) % 3;
        this.stats.showPanel(next);
        e.preventDefault();
      }

      if (e.code === "ArrowUp") {
        this.cameraRotation.x = Math.min(
          this.cameraRotation.x + 0.1,
          Math.PI / 2
        );
        e.preventDefault();
      }
      if (e.code === "ArrowDown") {
        this.cameraRotation.x = Math.max(
          this.cameraRotation.x - 0.1,
          -Math.PI / 2
        );
        e.preventDefault();
      }
      if (e.code === "ArrowLeft") {
        this.cameraRotation.y += 0.1;
        e.preventDefault();
      }
      if (e.code === "ArrowRight") {
        this.cameraRotation.y -= 0.1;
        e.preventDefault();
      }

      if (e.code === "KeyC") {
        this.useFreeCamera = !this.useFreeCamera;
        if (this.useFreeCamera) {
          camera.rotation.order = "YXZ";
          camera.getWorldDirection(_tmpDirection).normalize();
          this.cameraRotation.x = Math.asin(
            THREE.MathUtils.clamp(_tmpDirection.z, -1, 1)
          );
          this.cameraRotation.y = Math.atan2(_tmpDirection.x, _tmpDirection.y);
          if (!this.pointerLocked) {
            const locked = requestPointerLock();
            if (!locked) {
              this.mouseDragging = false;
            }
          }
        } else {
          camera.up.copy(WORLD_UP);
          camera.lookAt(this.center);
          this.mouseDragging = false;
          if (this.pointerLocked) {
            exitPointerLock();
          }
        }
        e.preventDefault();
      }

      const movementKeys = [
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
        "KeyQ",
        "KeyE",
        "Space",
        "ShiftLeft",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
      ];

      if (movementKeys.includes(e.code)) {
        e.preventDefault();
      }
    });

    document.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
    });

    container.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  applyShaderEnvironment(index = 0) {
    const { config } = applyEnvironment(this, index, { scene, material });
    this.updateSun();
    const label = config?.name || this.environmentName || "Environment";
    this.environmentToggle?.update(label);
    return config;
  }

  updateSun() {
    const skySample = sampleSkyColors(this.sunTime, this.skyKeyframes);
    const sunDir = computeSunDirection(this.sunTime);

    this.sunDirection.copy(sunDir);
    this.currentSunIntensity = this.sunStrengthBase * skySample.intensity;

    const ambientDir = new THREE.Vector3(-sunDir.y, sunDir.x, 0);
    if (ambientDir.lengthSq() < 1e-4) {
      ambientDir.set(1, 0, 0);
    }
    ambientDir.normalize();
    this.ambientDirection.copy(ambientDir);

    if (this.terrain) {
      this.terrain.updateSun(this.sunDirection, this.currentSunIntensity);
      this.terrain.updateAmbient(
        ambientDir,
        this.ambientStrength,
        this.ambientColor
      );

      _skyBlendColor.copy(skySample.skyColor);
      _skyBlendColor.lerp(skySample.horizonColor, 0.2);
      _skyBlendColor.lerp(NEUTRAL_SKY_COLOR, 0.55);
      this.skyTintColor.copy(_skyBlendColor);
      this.terrain.updateSkyTint(this.skyTintColor, this.skyTintStrength);
    }

    this.updateDebugLight();

    if (material.atmosphere.uniforms.uHorizonColor) {
      material.atmosphere.uniforms.uHorizonColor.value.copy(
        skySample.horizonColor
      );
    }
    if (material.atmosphere.uniforms.uSkyColor) {
      material.atmosphere.uniforms.uSkyColor.value.copy(skySample.skyColor);
    }

    if (this.sunMesh) {
      this.sunMesh.material.color.setHSL(
        0.15,
        0.3,
        Math.max(0.2, this.currentSunIntensity)
      );
    }

    if (this.lensFlare) {
      this.lensFlare.setSunIntensity(this.currentSunIntensity);
    }
  }

  updateDebugLight() {
    if (!this.debugSunLight) return;
    const focus = this.center ? this.center.clone() : new THREE.Vector3();
    const offset = this.sunDirection.clone().normalize().multiplyScalar(600);
    this.debugSunLight.position.copy(focus).add(offset);
    this.debugSunLight.intensity = Math.max(0.1, this.currentSunIntensity);
    if (this.debugSunLight.target) {
      this.debugSunLight.target.position.copy(focus);
      this.debugSunLight.target.updateMatrixWorld(true);
    }
  }

  startExperience() {
    if (!this.introActive) return;
    this.introActive = false;
    this.introElapsed = 0;
    Object.keys(this.keys).forEach((key) => {
      this.keys[key] = false;
    });
    this.introController?.fadeOut?.();
  }

  animate() {
    window.requestAnimationFrame(this.animate);

    this.stats?.begin();

    const deltaTime = this.clock.getDelta();
    if (this.introActive) {
      this.introElapsed += deltaTime;
    }

    if (scene.fog) {
      this.terrain.updateFog(scene.fog);
    }

    if (this.introActive) {
      const radius = 900 + 65 * Math.sin(this.introElapsed * 0.45);
      const angle = this.introElapsed * 0.18;
      const height = 170 + 55 * Math.sin(this.introElapsed * 0.2);
      const lookOrbit = 120 * Math.sin(this.introElapsed * 0.6);

      camera.position.set(
        this.center.x + Math.cos(angle) * radius,
        this.center.y + Math.sin(angle) * radius,
        height
      );

      _tmpLookTarget
        .copy(this.center)
        .addScaledVector(WORLD_UP, 60 + 30 * Math.sin(this.introElapsed * 0.8));
      _tmpLookTarget.x += Math.cos(angle + Math.PI / 2) * lookOrbit;
      _tmpLookTarget.y += Math.sin(angle + Math.PI / 2) * lookOrbit;
      camera.up.copy(WORLD_UP);
      camera.lookAt(_tmpLookTarget);
      this.cameraRotation.x = camera.rotation.x;
      this.cameraRotation.y = camera.rotation.y;
    } else {
      const moveSpeed = this.moveSpeed;
      if (this.useFreeCamera) {
        const maxPitch = Math.PI / 2 - 0.01;
        this.cameraRotation.x = THREE.MathUtils.clamp(
          this.cameraRotation.x,
          -maxPitch,
          maxPitch
        );

        const cosPitch = Math.cos(this.cameraRotation.x);
        _tmpDirection
          .set(
            Math.sin(this.cameraRotation.y) * cosPitch,
            Math.cos(this.cameraRotation.y) * cosPitch,
            Math.sin(this.cameraRotation.x)
          )
          .normalize();

        _tmpRight.crossVectors(_tmpDirection, WORLD_UP).normalize();
        _tmpLookTarget.copy(_tmpDirection).add(camera.position);
        camera.up.copy(WORLD_UP);
        camera.lookAt(_tmpLookTarget);

        if (this.keys["KeyW"]) {
          camera.position.addScaledVector(_tmpDirection, moveSpeed);
        }
        if (this.keys["KeyS"]) {
          camera.position.addScaledVector(_tmpDirection, -moveSpeed);
        }
        if (this.keys["KeyA"]) {
          camera.position.addScaledVector(_tmpRight, -moveSpeed);
        }
        if (this.keys["KeyD"]) {
          camera.position.addScaledVector(_tmpRight, moveSpeed);
        }
        if (this.keys["KeyQ"] || this.keys["Space"]) {
          camera.position.addScaledVector(WORLD_UP, moveSpeed);
        }
        if (this.keys["KeyE"] || this.keys["ShiftLeft"]) {
          camera.position.addScaledVector(WORLD_UP, -moveSpeed);
        }
      } else {
        if (this.keys["KeyW"]) camera.position.y -= moveSpeed;
        if (this.keys["KeyS"]) camera.position.y += moveSpeed;
        if (this.keys["KeyA"]) camera.position.x -= moveSpeed;
        if (this.keys["KeyD"]) camera.position.x += moveSpeed;
        if (this.keys["KeyQ"] || this.keys["Space"])
          camera.position.z += moveSpeed;
        if (this.keys["KeyE"] || this.keys["ShiftLeft"]) {
          camera.position.z -= moveSpeed;
        }

        camera.lookAt(this.center);
        this.cameraRotation.x = camera.rotation.x;
        this.cameraRotation.y = camera.rotation.y;
      }
    }

    this.terrain.offset.x = camera.position.x;
    this.terrain.offset.y = camera.position.y;

    if (this.sunWorldPosition && this.sunDirection) {
      this.sunWorldPosition
        .copy(camera.position)
        .addScaledVector(this.sunDirection, this.sunDistance);
      if (this.sunMesh) {
        this.sunMesh.position.copy(this.sunWorldPosition);
      }
    }

    if (this.sky) {
      this.sky.position.copy(camera.position);
      this.sky.updateMatrixWorld();
    }
    if (this.sky2) {
      this.sky2.position.copy(camera.position);
      this.sky2.updateMatrixWorld();
    }

    camera.updateMatrixWorld(true);
    this.viewMatrix.copy(camera.matrixWorldInverse);
    this.terrain?.updateViewMatrix(this.viewMatrix);

    if (this.lensFlare) {
      this.lensFlare.update(deltaTime, this.sunWorldPosition, this.terrain);
      if (this.sunMesh) {
        this.sunMesh.visible =
          this.currentSunIntensity > 0.02 && !this.lensFlare.occluded;
      }
    } else if (this.sunMesh) {
      this.sunMesh.visible = this.currentSunIntensity > 0.02;
    }

    _hudEl.textContent = `Camera: ${camera.position.x.toFixed(
      1
    )}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(
      1
    )}\nRotation: ${this.cameraRotation.x.toFixed(
      2
    )}, ${this.cameraRotation.y.toFixed(2)}\nFog: ${
      this.fogEnabled ? "On" : "Off"
    }\nSun: ${this.sunTime.toFixed(1)}h`;

    if (this.shadowsEnabled && this.shadowCascades.length) {
      this.renderShadowMaps();
    }

    if (this.composer && this.postProcessingEnabled) {
      const shouldBloom = this.bloomEnabled && this.bloomStrength > 0.001;

      if (this.compositePass) {
        this.compositePass.material.uniforms.uBloomStrength.value = shouldBloom
          ? this.bloomStrength
          : 0.0;
      }

      if (this.brightPass) {
        this.brightPass.enabled = shouldBloom;
      }
      if (this.blurPassH) {
        this.blurPassH.enabled = shouldBloom;
      }
      if (this.blurPassV) {
        this.blurPassV.enabled = shouldBloom;
      }
      this.composer.render();
    } else {
      if (this.brightPass) this.brightPass.enabled = false;
      if (this.blurPassH) this.blurPassH.enabled = false;
      if (this.blurPassV) this.blurPassV.enabled = false;
      renderer.render(scene, camera);
    }

    this.stats?.end();
  }

  setTerrainSmoothing(strength) {
    this.heightSmoothStrength = THREE.MathUtils.clamp(strength, 0, 1);
    setNoiseSmoothing(this.heightSmoothStrength);
  }

  setHeightGain(multiplier) {
    this.heightGain = THREE.MathUtils.clamp(multiplier, 0, 4);
    setNoiseHeightGain(this.heightGain);
  }
}

export const app = new TerrainApp();
