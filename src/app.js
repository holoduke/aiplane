import * as THREE from "three";
import Stats from "stats.js";

import { camera } from "./camera.js";
import { container } from "./container.js";
import { geometry } from "./geometry.js";
import { texture } from "./texture.js";
import { material } from "./material.js";
import { scene } from "./scene.js";
import { EnvironmentManager } from "./environment/EnvironmentManager.js";
import {
  noise,
  getNoise,
  setNoiseSmoothing,
  setNoiseHeightGain,
  setNoiseWidth,
  getNoiseWidth,
  sampleHeight,
  regenerateNoise,
  getTerrainTexture,
  DEFAULT_NOISE_SMOOTHING,
  MIN_NOISE_WIDTH,
  MAX_NOISE_WIDTH,
} from "./noise/index.js";
import { PerlinNoise } from "./noise/PerlinNoise.js";
import {
  renderer,
  setRendererPixelRatio,
  getRendererPixelRatio,
} from "./renderer.js";
import { Terrain } from "./terrain.js";
import { LensFlare } from "./LensFlare.js";
import obeliskVert from "./assets/shaders/obelisk.vert?raw";
import obeliskFrag from "./assets/shaders/obelisk.frag?raw";

// Default terrain configuration
const DEFAULT_TERRAIN_INDEX = 2; // Mars terrain

import {
  computeSunDirection,
  sampleSkyColors,
  NEUTRAL_SKY_COLOR,
  SKY_KEYFRAMES,
} from "./sky.js";
import { createPostProcessing } from "./postprocessing.js";
import { createIntroOverlay } from "./ui/IntroOverlay.js";
import { createControlPanel } from "./ui/ControlPanel.js";
import { createEnvironmentToggle } from "./ui/EnvironmentToggle.js";
import { Game } from "./game/Game.js";
import { AudioManager } from "./audio/AudioManager.js";

const WORLD_UP = new THREE.Vector3(0, 0, 1);
const SUN_COLOR_COOL = new THREE.Color(0.6, 0.75, 0.98);
const SUN_COLOR_WARM = new THREE.Color(1.0, 0.75, 0.52);
const AMBIENT_COLOR_COOL = new THREE.Color(0.32, 0.44, 0.6);
const AMBIENT_COLOR_WARM = new THREE.Color(0.6, 0.48, 0.36);
const SKY_TINT_COOL = new THREE.Color(0.62, 0.76, 0.98);
const SKY_TINT_WARM = new THREE.Color(0.98, 0.68, 0.52);
const _tmpDirection = new THREE.Vector3();
const _tmpRight = new THREE.Vector3();
const _tmpLookTarget = new THREE.Vector3();
const _tmpFocus = new THREE.Vector3();
const _tmpOffset = new THREE.Vector3();
const _tmpSunColor = new THREE.Color();
const _tmpSkyAdjust = new THREE.Color();
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
    this.sunWarmth = 0.75;
    this.sunLightColor = new THREE.Color(1.0, 0.85, 0.65);
    this.ambientStrength = 0.6;
    this.ambientColor = new THREE.Color(0.45, 0.42, 0.35);
    this.ambientDirection = new THREE.Vector3(1, 0, 0);
    this.normalSmoothFactor = 0.65;
    this.specularStrength = 1.0;
    this.skyTintStrength = 0.15;
    this.skyTintColor = new THREE.Color(0.62, 0.72, 0.88);
    this.contrastAdjustment = 0.1;
    this.brightnessAdjustment = -0.06;
    this.noiseResolution = getNoiseWidth();
    this.debugLOD = false;
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
    this.debugAmbientLight = null;
    this.debugSunLight = null;
    this.cameraForward = new THREE.Vector3(0, 1, 0);
    this.viewMatrix = new THREE.Matrix4();
    this.shadowCascadeEnabled = [true, true, true];
    this.shadowDebugEnabled = false;
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
    this.game = null;
    this.audioManager = null;
    this.postProcessingEnabled = true;
    this.handleComposerResize = null;
    this.lensFlare = null;
    this.sunWorldPosition = new THREE.Vector3();
    this.sunDistance = 15000;
    this.terrainLevels = 5;
    this.terrainResolution = 192;
    this.frustumCullingEnabled = false; // Default: disabled for smooth experience
    this.terrain = null;
    this.center = null;
    this.sky = null;
    this.sky2 = null;
    this.sunMesh = null;
    this.material = material;
    this.scene = scene;
    this.texture = texture;
    this.geometry = geometry;
    this.heightSmoothStrength = 0.02;
    this.heightGain = 0.74;
    this.detailStrength = 0.5; // Default detail strength (50%)
    this.skyKeyframes = SKY_KEYFRAMES;

    this.environmentManager = new EnvironmentManager(this);
    this.applyShaderEnvironment = this.applyShaderEnvironment.bind(this);
    //this.updateSun = this.updateSun.bind(this);
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
    this.setupAudio();

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.terrainResolution = isMobile ? 96 : 192;
    setNoiseSmoothing(this.heightSmoothStrength);
    setNoiseHeightGain(this.heightGain);

    // Load generated heightmap and create terrain
    this.loadGeneratedHeightmap()
      .then(() => {
        this.createTerrain();
      })
      .catch(() => {
        // Fallback to procedural terrain if heightmap loading fails
        console.log("🔄 Falling back to procedural terrain");
        this.createTerrain();
      });

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
    this.setupGame();
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

  setupAudio() {
    this.audioManager = new AudioManager();
    this.audioManager.registerAudio(
      "menu-music",
      "/src/assets/audio/SkylineShowdown.mp3",
      { type: "music", loop: true }
    );
    this.audioManager.registerAudio(
      "game-music",
      "/src/assets/audio/level1.mp3",
      { type: "music", loop: true }
    );
  }

  async loadGeneratedHeightmap() {
    try {
      console.log("🗺️ Loading generated heightmap...");
      this.generatedHeightTexture = await this.createTextureFromBin(
        "tools/heightmap-generator/output/heightmap_center.bin"
      );
      console.log("✅ Generated heightmap loaded");
    } catch (error) {
      console.error("❌ Failed to load generated heightmap:", error);
      this.generatedHeightTexture = null;
    }
  }

  async createTextureFromBin(path) {
    const url = path.startsWith("/") ? path : `/${path}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    if (uint8Array.length !== 65536) {
      // 256x256
      throw new Error(
        `Invalid heightmap size: ${uint8Array.length} bytes (expected 65536)`
      );
    }

    const texture = new THREE.DataTexture(
      uint8Array,
      256,
      256,
      THREE.RedFormat,
      THREE.UnsignedByteType
    );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;

    return texture;
  }

  createTerrain() {
    const previousShaderIndex = this.terrain
      ? this.terrain.activeShaderIndex
      : DEFAULT_TERRAIN_INDEX;

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
      this.scene.remove(this.terrain);
    }

    // Use generated heightmap if available, fallback to original noise
    const heightTexture = this.generatedHeightTexture || getNoise();

    if (this.generatedHeightTexture) {
      console.log("🎯 Creating terrain with generated heightmap (.bin file)");
    } else {
      console.log("🔄 Creating terrain with procedural noise (fallback)");
    }

    this.terrain = new Terrain(
      heightTexture,
      8192,
      this.terrainLevels,
      this.terrainResolution,
      {
        enableShadows: this.shadowsEnabled,
        defaultShaderIndex: DEFAULT_TERRAIN_INDEX,
      }
    );
    this.scene.add(this.terrain);

    this.terrain.setShader(previousShaderIndex);
    this.terrain.setShadowsEnabled(this.shadowsEnabled);
    if (this.terrain.setDebugMode) {
      this.terrain.setDebugMode(this.debugLOD);
    }

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

    // Apply all current terrain settings to the newly created terrain
    this.terrain.updateDetailStrength(this.detailStrength);
    this.terrain.updateHeightMultiplier(this.heightGain);
    this.terrain.updateHeightSmoothing(this.heightSmoothStrength);

    // Connect heightmap texture to collision detector if game exists
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setHeightmapTexture(heightTexture);
      this.game.collisionDetector.setDetailStrength(this.detailStrength);
      this.game.collisionDetector.setHeightMultiplier(this.heightGain);
      this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
      console.log(
        "🔗 Connected heightmap texture to collision detector with all settings"
      );
    }

    // Apply shader environment after terrain is created
    this.applyShaderEnvironment(this.terrain.activeShaderIndex);
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
      scene: this.scene,
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

    // Regenerate terrain with current settings when resolution changes
    regenerateNoise({
      heightGain: this.heightGain,
      smoothing: this.heightSmoothStrength,
    });

    // Clear heightmap data since we have new terrain
    this.rawHeightmap = null;
    this.originalHeightmap = null;
    this.baseHeightmap = null;
    this.masterHeightmap = null;

    // Reset effect parameters
    this.effectParameters = {
      thermal: { iterations: 0, talus: 0.01 },
      hydraulic: {
        droplets: 0,
        inertia: 0.05,
        capacity: 4,
        deposition: 0.1,
        erosion: 0.3,
      },
      smooth: { passes: 0 },
      terracing: { steps: 1 },
    };

    // Initialize new master heightmap from the resized terrain
    this.initializeMasterHeightmap("procedural");

    // Apply stored detail strength to the newly resized terrain
    this.terrain?.updateDetailStrength(this.detailStrength);

    // Update collision detector with new terrain
    const proceduralTexture = getNoise();
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setHeightmapTexture(proceduralTexture);
      this.game.collisionDetector.setDetailStrength(this.detailStrength);
      this.game.collisionDetector.setHeightMultiplier(this.heightGain);
      this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
    }

    console.log(
      `🔧 Noise resolution changed to ${applied}x${applied} with all settings applied`
    );
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
    this.lensFlare = new LensFlare(this.scene, camera, renderer);
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
    this.scene.add(this.sunMesh);
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
    this.scene.add(obeliskGroup);
    this.debugObelisk = obeliskGroup;

    console.log(
      `Obelisk created at position: (${obeliskX}, ${obeliskY}, ${finalZ.toFixed(
        2
      )})`
    );
    console.log(`Terrain height at obelisk: ${terrainHeight.toFixed(2)}`);
    console.log("Obelisk with spike added to scene");

    this.debugAmbientLight = new THREE.AmbientLight(0xffffff, 0.35);
    this.scene.add(this.debugAmbientLight);

    this.debugSunLight = new THREE.DirectionalLight(0xffffff, 0.7);
    this.debugSunLight.castShadow = false;
    this.scene.add(this.debugSunLight);
    this.debugSunLight.target.position.copy(this.center ?? new THREE.Vector3());
    this.scene.add(this.debugSunLight.target);
    this.updateDebugLight();
  }

  setupSky() {
    this.environmentManager.setupSky();
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
      this.scene.add(helper);
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
      renderer.render(this.scene, cascade.camera);
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
    this.controlPanel = createControlPanel({
      app: this,
      container,
      applyShaderEnvironment: this.applyShaderEnvironment,
      createTerrain: () => this.createTerrain(),
      generateProceduralTerrain: () => this.generateProceduralTerrain(),
      loadDefaultHeightmap: () => this.loadDefaultHeightmap(),
      applyTerrainEffect: (effectType, parameters) =>
        this.applyTerrainEffect(effectType, parameters),
      setTerrainSmoothing: (value) => this.setTerrainSmoothing(value),
      setHeightGain: (value) => this.setHeightGain(value),
      setDetailStrength: (value) => this.setDetailStrength(value),
      getNoise: getNoise,
    });
  }

  setupEnvironmentToggle() {
    this.environmentToggle = createEnvironmentToggle({
      app: this,
      container,
    });
  }

  setupGame() {
    this.game = new Game(this);

    // Make the game globally accessible for Player.js integration
    window.game = this.game;

    // Show start screen and hide control panel initially
    this.game.uiManager.showStartScreen();
    this.audioManager.transitionToMainMenu();

    // Hide control panel, controls info, position info, and environment toggle in main menu
    if (this.controlPanel?.panel) {
      this.controlPanel.panel.style.display = "none";
    }
    const controlsInfo = document.getElementById("controls-info");
    if (controlsInfo) {
      controlsInfo.style.display = "none";
    }
    // Hide position info (bottom right HUD)
    const hudEl = document.querySelector(
      'div[style*="bottom: 10px"][style*="right: 10px"]'
    );
    if (hudEl) {
      hudEl.style.display = "none";
    }
    // Hide environment toggle (terrain selector)
    if (this.environmentToggle?.element) {
      this.environmentToggle.element.style.display = "none";
    }

    console.log("🎮 Game system integrated with TerrainApp");
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
        // Check if we're in float mode when pointer is unlocked - this likely means escape was pressed
        if (this.game && this.game.gameMode === "float") {
          console.log(
            "🚪 Pointer unlocked in float mode - returning to main menu"
          );
        }
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

      // Check if click target is a UI element (control panel, sliders, buttons)
      const target = event.target;
      if (
        target &&
        (target.closest(".control-panel") ||
          target.closest(".slider") ||
          target.closest('[style*="cursor: pointer"]') ||
          target.matches("input") ||
          target.matches("button") ||
          target.matches('[role="slider"]') ||
          (target.tagName === "DIV" && target.style.cursor === "pointer"))
      ) {
        // Don't lock pointer when clicking on UI elements
        return;
      }

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

      if (e.code === "Escape") {
        // Handle escape in float mode - return to main menu
        if (this.game && this.game.gameMode === "float") {
          console.log(
            "🚪 Escape pressed in float mode - returning to main menu"
          );
          // Stop the game and return to main menu (this will handle pointer unlock)
          this.game.stopGame();
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

  applyShaderEnvironment(index = DEFAULT_TERRAIN_INDEX) {
    const { config } = this.environmentManager.applyEnvironment(index);
    this.environmentManager.updateSun();
    const label = config?.name || this.environmentName || "Environment";
    this.environmentToggle?.update(label);
    return config;
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

    if (this.scene.fog && this.terrain) {
      this.terrain.updateFog(this.scene.fog);
    }

    if (this.introActive) {
      const radius = 900 + 65 * Math.sin(this.introElapsed * 0.45);
      const angle = this.introElapsed * 0.18;
      const height = 210 + 55 * Math.sin(this.introElapsed * 0.2);
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

    if (this.terrain) {
      this.terrain.offset.x = camera.position.x;
      this.terrain.offset.y = camera.position.y;
    }

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

    // Update game system first
    if (this.game) {
      this.game.update(deltaTime);
    }

    // Then update camera matrix and view matrix AFTER game updates
    camera.updateMatrixWorld(true);
    this.viewMatrix.copy(camera.matrixWorldInverse);
    this.terrain?.updateViewMatrix(this.viewMatrix);

    if (this.lensFlare) {
      this.lensFlare.update(deltaTime, this.sunWorldPosition, this.terrain);
      this.lensFlare.setSunColor(this.sunLightColor);
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
      renderer.render(this.scene, camera);
    }

    this.stats?.end();
  }

  setTerrainSmoothing(strength) {
    this.heightSmoothStrength = THREE.MathUtils.clamp(strength, 0, 1);

    // If we have master heightmap data, update terrain display
    if (this.masterHeightmap) {
      this.updateTerrainFromMaster();
    } else {
      // Fallback to shader uniforms for pure procedural terrain
      this.terrain?.updateHeightSmoothing(this.heightSmoothStrength);
    }

    // Update collision detector
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
    }
  }

  setHeightGain(multiplier) {
    this.heightGain = THREE.MathUtils.clamp(multiplier, 0, 4);

    // If we have master heightmap data, update terrain display
    if (this.masterHeightmap) {
      this.updateTerrainFromMaster();
    } else {
      // Fallback to shader uniforms for pure procedural terrain
      this.terrain?.updateHeightMultiplier(this.heightGain);
    }

    // Update collision detector
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setHeightMultiplier(this.heightGain);
    }
  }

  setDetailStrength(strength) {
    this.detailStrength = THREE.MathUtils.clamp(strength, 0, 1);
    this.terrain?.updateDetailStrength(this.detailStrength);
    // Also update collision detector
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setDetailStrength(this.detailStrength);
    }
  }

  generateProceduralTerrain() {
    // Clear generated heightmap to force procedural generation
    this.generatedHeightTexture = null;

    // Clear stored heightmaps for fresh effects
    this.originalHeightmap = null; // Legacy
    this.rawHeightmap = null; // Legacy

    // Centralized heightmap management - single source of truth
    this.baseHeightmap = null; // Clean reference copy - never modified
    this.masterHeightmap = null; // Contains all applied effects

    // Reset effect parameters
    this.effectParameters = {
      thermal: { iterations: 0, talus: 0.01 },
      hydraulic: {
        droplets: 0,
        inertia: 0.05,
        capacity: 4,
        deposition: 0.1,
        erosion: 0.3,
      },
      smooth: { passes: 0 },
      terracing: { steps: 1 },
    };
    this.baseHeightmapType = null; // Track the source: 'procedural', 'generated', or 'custom'
    this.heightmapWidth = null;
    this.heightmapHeight = null;

    // Effect parameters for reference-based rebuilding
    this.effectParameters = {
      thermal: { iterations: 0, talus: 0.01 },
      hydraulic: {
        droplets: 0,
        inertia: 0.05,
        capacity: 4,
        deposition: 0.1,
        erosion: 0.3,
      },
      smooth: { passes: 0 },
      terracing: { steps: 1 },
    };

    // Resize terrain texture to current noise resolution
    const terrainTexture = getTerrainTexture();
    terrainTexture.resize(this.noiseResolution, this.noiseResolution);

    // Regenerate noise with current settings including height gain
    regenerateNoise({
      heightGain: this.heightGain,
      smoothing: this.heightSmoothStrength,
    });

    // Recreate terrain with procedural noise
    this.createTerrain();
    this.applyShaderEnvironment(this.terrain.activeShaderIndex);

    // Initialize master heightmap from the newly created procedural terrain
    this.initializeMasterHeightmap("procedural");

    // Update collision detector with the procedural texture
    const proceduralTexture = getNoise();
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setHeightmapTexture(proceduralTexture);
      // Sync all terrain parameters with collision detector using stored app values
      this.game.collisionDetector.setDetailStrength(this.detailStrength);
      this.game.collisionDetector.setHeightMultiplier(this.heightGain);
      this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
      console.log(
        "🎯 Updated collision detector with procedural heightmap and all terrain parameters"
      );
    }

    // Apply stored detail strength to the newly created terrain
    this.terrain?.updateDetailStrength(this.detailStrength);

    console.log(
      `🌋 Generated new procedural terrain (${this.noiseResolution}x${
        this.noiseResolution
      }) with height gain: ${this.heightGain}x, smoothing: ${Math.round(
        this.heightSmoothStrength * 100
      )}%`
    );
  }

  async loadDefaultHeightmap() {
    try {
      // Reload the generated heightmap
      await this.loadGeneratedHeightmap();

      // Recreate terrain with the default heightmap
      this.createTerrain();
      this.applyShaderEnvironment(this.terrain.activeShaderIndex);

      // Update collision detector with the .bin file heightmap
      if (
        this.game &&
        this.game.collisionDetector &&
        this.generatedHeightTexture
      ) {
        this.game.collisionDetector.setHeightmapTexture(
          this.generatedHeightTexture
        );
        console.log("🎯 Updated collision detector with .bin heightmap");
      }

      console.log("🗺️ Loaded default heightmap (.bin file)");
    } catch (error) {
      console.error("❌ Failed to load default heightmap:", error);
    }
  }

  // Store original heightmap for terrain effects
  storeOriginalHeightmap() {
    if (this.generatedHeightTexture) {
      console.log(
        "⚠️ Original heightmap storage only works with procedural terrain."
      );
      return;
    }

    const terrainTexture = getTerrainTexture();
    if (
      !terrainTexture ||
      !terrainTexture.texture ||
      !terrainTexture.texture.image
    ) {
      console.log("⚠️ No procedural terrain texture available");
      return;
    }

    const data = terrainTexture.texture.image.data;
    this.originalHeightmap = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++) {
      this.originalHeightmap[i] = data[i] / 255.0; // Normalize to 0-1
    }
    this.heightmapWidth = terrainTexture.texture.image.width;
    this.heightmapHeight = terrainTexture.texture.image.height;
    console.log("📸 Stored original heightmap for terrain effects");
  }

  storeRawHeightmap() {
    if (this.generatedHeightTexture) {
      console.log(
        "⚠️ Raw heightmap storage only works with procedural terrain."
      );
      return;
    }

    // For now, this method generates raw Perlin noise data without any settings applied
    // This ensures we always have a clean baseline for terrain effects
    const width = this.noiseResolution;
    const height = this.noiseResolution;

    // Generate raw Perlin noise without height multiplier or smoothing
    const rawData = PerlinNoise.generatePerlinNoise(width, height, 0.01, 6);

    this.rawHeightmap = rawData.slice(); // Store copy
    this.heightmapWidth = width;
    this.heightmapHeight = height;

    console.log(
      "📸 Stored raw heightmap (without settings) for terrain effects"
    );
  }

  // Centralized heightmap management - single source of truth
  initializeMasterHeightmap(type = "procedural") {
    if (this.generatedHeightTexture) {
      // Initialize from .bin file
      console.log(
        "🎯 Initializing master heightmap from generated texture (.bin file)"
      );
      this.baseHeightmapType = "generated";
      // TODO: Extract data from this.generatedHeightTexture
      return;
    }

    // Initialize from procedural noise
    const terrainTexture = getTerrainTexture();
    if (
      !terrainTexture ||
      !terrainTexture.texture ||
      !terrainTexture.texture.image
    ) {
      console.warn("⚠️ No terrain texture available for master heightmap");
      return;
    }

    const data = terrainTexture.texture.image.data;
    this.heightmapWidth = terrainTexture.texture.image.width;
    this.heightmapHeight = terrainTexture.texture.image.height;

    // Store normalized heightmap data (0-1 range) as base reference (never modified)
    this.baseHeightmap = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++) {
      this.baseHeightmap[i] = data[i] / 255.0; // Normalize to 0-1
    }

    // Initially master is same as base
    this.masterHeightmap = this.baseHeightmap.slice();

    this.baseHeightmapType = type;
    console.log(
      `📋 Initialized base & master heightmap (${this.heightmapWidth}x${this.heightmapHeight}) from ${type} source`
    );
  }

  // Rebuild master heightmap from base + all current effect parameters
  rebuildMasterHeightmap() {
    if (!this.baseHeightmap) {
      console.warn("⚠️ No base heightmap available for rebuilding");
      return false;
    }

    const width = this.heightmapWidth;
    const height = this.heightmapHeight;

    // Start with clean base copy
    let workingHeightmap = this.baseHeightmap.slice();

    // Apply effects in order based on current parameters
    const params = this.effectParameters;

    // Apply thermal erosion
    if (params.thermal.iterations > 0) {
      console.log(
        `🔥 Applying thermal erosion (${params.thermal.iterations} iterations)`
      );
      workingHeightmap = PerlinNoise.thermalErosion(
        workingHeightmap,
        width,
        height,
        params.thermal.iterations,
        params.thermal.talus
      );
    }

    // Apply hydraulic erosion
    if (params.hydraulic.droplets > 0) {
      console.log(
        `💧 Applying hydraulic erosion (${params.hydraulic.droplets} droplets)`
      );
      workingHeightmap = PerlinNoise.hydraulicErosion(
        workingHeightmap,
        width,
        height,
        params.hydraulic.droplets,
        params.hydraulic.inertia,
        params.hydraulic.capacity,
        params.hydraulic.deposition,
        params.hydraulic.erosion
      );
    }

    // Apply smoothing
    if (params.smooth.passes > 0) {
      console.log(`✨ Applying smoothing (${params.smooth.passes} passes)`);
      workingHeightmap = PerlinNoise.smoothHeightmap(
        workingHeightmap,
        width,
        height,
        params.smooth.passes
      );
    }

    // Apply terracing
    if (params.terracing.steps > 1) {
      console.log(`🪜 Applying terracing (${params.terracing.steps} steps)`);
      workingHeightmap = PerlinNoise.applyTerracing(
        workingHeightmap,
        width,
        height,
        params.terracing.steps
      );
    }

    // Update master heightmap with final result
    this.masterHeightmap = workingHeightmap;
    console.log("✅ Rebuilt master heightmap from base + all effects");
    return true;
  }

  // Apply an effect by updating parameters and rebuilding (reference-based)
  applyHeightmapEffect(effectType, parameters = {}) {
    if (!this.baseHeightmap) {
      console.warn("⚠️ No base heightmap available for effect application");
      return false;
    }

    // Handle terrain generation cases (replace base heightmap entirely)
    if (["ridged", "cellular", "billow", "warped"].includes(effectType)) {
      const width = this.heightmapWidth;
      const height = this.heightmapHeight;
      let newHeightmap;

      switch (effectType) {
        case "ridged":
          console.log(
            `🏔️ Generating ridged terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateRidgedTerrain(
            width,
            height,
            parameters.scale || 0.01,
            parameters.octaves || 6
          );
          break;
        case "cellular":
          console.log(
            `🕳️ Generating cellular terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateCellularTerrain(
            width,
            height,
            parameters.scale || 0.02,
            parameters.invert || false
          );
          break;
        case "billow":
          console.log(
            `☁️ Generating billow terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateBillowTerrain(
            width,
            height,
            parameters.scale || 0.01,
            parameters.octaves || 4
          );
          break;
        case "warped":
          console.log(
            `🌊 Generating domain-warped terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateWarpedTerrain(
            width,
            height,
            parameters.scale || 0.01,
            parameters.warpStrength || 30.0
          );
          break;
      }

      // Replace base heightmap with generated terrain
      this.baseHeightmap = newHeightmap;
      // Reset all effect parameters when generating new terrain
      this.effectParameters = {
        thermal: { iterations: 0, talus: 0.01 },
        hydraulic: {
          droplets: 0,
          inertia: 0.05,
          capacity: 4,
          deposition: 0.1,
          erosion: 0.3,
        },
        smooth: { passes: 0 },
        terracing: { steps: 1 },
      };
      this.baseHeightmapType = effectType;
    } else {
      // Handle erosion/effect cases - update parameters and rebuild
      switch (effectType) {
        case "thermal":
          this.effectParameters.thermal.iterations = parameters.iterations || 0;
          this.effectParameters.thermal.talus = parameters.talus || 0.01;
          break;
        case "hydraulic":
          this.effectParameters.hydraulic.droplets = parameters.droplets || 0;
          this.effectParameters.hydraulic.inertia = parameters.inertia || 0.05;
          this.effectParameters.hydraulic.capacity = parameters.capacity || 4;
          this.effectParameters.hydraulic.deposition =
            parameters.deposition || 0.1;
          this.effectParameters.hydraulic.erosion = parameters.erosion || 0.3;
          break;
        case "smooth":
          this.effectParameters.smooth.passes = parameters.passes || 0;
          break;
        case "terracing":
          this.effectParameters.terracing.steps = parameters.steps || 1;
          break;
        default:
          console.warn(`⚠️ Unknown heightmap effect: ${effectType}`);
          return false;
      }
    }

    // Rebuild master heightmap from base + all effects
    return this.rebuildMasterHeightmap();
  }

  // Update terrain from master heightmap with current settings
  updateTerrainFromMaster() {
    if (!this.masterHeightmap) {
      console.warn("⚠️ No master heightmap available");
      return;
    }

    // Apply current settings (height multiplier, smoothing) to master data for display
    const displayHeightmap = PerlinNoise.applyTerrainSettings(
      this.masterHeightmap,
      this.heightGain,
      this.heightSmoothStrength
    );

    // Update terrain texture
    this.updateTerrainTextureFromHeightmap(
      displayHeightmap,
      this.heightmapWidth,
      this.heightmapHeight
    );

    // Recreate terrain
    this.createTerrain();
    this.applyShaderEnvironment(this.terrain.activeShaderIndex);

    console.log(
      "🔄 Updated terrain from master heightmap with current settings"
    );
  }

  // Helper function to apply current terrain settings using static methods
  applyTerrainSettings(heightmap, width, height) {
    console.log(
      `📏 Applying terrain settings: height gain ${this.heightGain}, smoothing ${this.heightSmoothStrength}`
    );
    return PerlinNoise.applyTerrainSettings(
      heightmap,
      this.heightGain,
      this.heightSmoothStrength
    );
  }

  // Reapply current terrain settings to raw heightmap and update the texture
  reapplyTerrainSettings() {
    if (!this.rawHeightmap || !this.heightmapWidth || !this.heightmapHeight) {
      console.warn(
        "⚠️ No raw heightmap data available for settings reapplication"
      );
      return;
    }

    console.log("🔄 Reapplying terrain settings to raw heightmap data...");

    // Apply current settings to raw data
    const processedHeightmap = this.applyTerrainSettings(
      this.rawHeightmap,
      this.heightmapWidth,
      this.heightmapHeight
    );

    // Update the terrain texture with processed data
    this.updateTerrainTextureFromHeightmap(
      processedHeightmap,
      this.heightmapWidth,
      this.heightmapHeight
    );

    // Update collision detector
    if (this.game && this.game.collisionDetector) {
      const terrainTexture = getTerrainTexture();
      this.game.collisionDetector.setHeightmapTexture(terrainTexture.texture);
      this.game.collisionDetector.setHeightMultiplier(this.heightGain);
      this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
    }
  }

  // Update terrain texture from processed heightmap data
  updateTerrainTextureFromHeightmap(heightmap, width, height) {
    const terrainTexture = getTerrainTexture();
    if (!terrainTexture || !terrainTexture.texture) {
      console.warn("⚠️ No terrain texture available for update");
      return;
    }

    // Ensure texture dimensions match
    if (
      terrainTexture.texture.image.width !== width ||
      terrainTexture.texture.image.height !== height
    ) {
      terrainTexture.resize(width, height);
    }

    // Convert heightmap data to texture format (0-255 range)
    const textureData = terrainTexture.texture.image.data;
    for (let i = 0; i < heightmap.length; i++) {
      textureData[i] = Math.round(
        THREE.MathUtils.clamp(heightmap[i], 0, 1) * 255
      );
    }

    // Mark texture as needing update
    terrainTexture.texture.needsUpdate = true;

    console.log("🖼️ Updated terrain texture from heightmap data");
  }

  // Apply terrain processing effects using centralized heightmap management
  applyTerrainEffect(effectType, parameters = {}) {
    // Only works with procedural terrain
    if (this.generatedHeightTexture) {
      console.log(
        "⚠️ Terrain effects only work with procedural terrain. Generate terrain first."
      );
      return;
    }

    // Initialize base & master heightmap if not already done
    if (!this.baseHeightmap) {
      this.initializeMasterHeightmap("procedural");
    }

    // Apply the effect using reference-based rebuilding
    const success = this.applyHeightmapEffect(effectType, parameters);
    if (!success) {
      return;
    }

    // Update terrain display from master heightmap
    this.updateTerrainFromMaster();

    console.log(`✅ Applied ${effectType} effect to terrain`);
    return;
  }
}

export const app = new TerrainApp();
