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
import { renderer } from "./renderer.js";
import { Terrain } from "./terrain.js";
import { LensFlare } from "./LensFlare.js";
import obeliskVert from "./assets/shaders/obelisk.vert?raw";
import obeliskFrag from "./assets/shaders/obelisk.frag?raw";
import skyscraperVert from "./assets/shaders/skyscraper.vert?raw";
import skyscraperFrag from "./assets/shaders/skyscraper.frag?raw";

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
import { HeightmapPipeline } from "./world/HeightmapPipeline.js";
import { ShadowController } from "./rendering/ShadowController.js";
import { PostProcessingController } from "./rendering/PostProcessingController.js";
import { SunController } from "./world/SunController.js";

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
    this.normalSmoothFactor = 0.65;
    this.specularStrength = 1.0;
    this.contrastAdjustment = 0.1;
    this.brightnessAdjustment = -0.06;
    this.noiseResolution = getNoiseWidth();
    this.debugLOD = false;
    this.debugAmbientLight = null;
    this.debugSunLight = null;
    this.cameraForward = new THREE.Vector3(0, 1, 0);
    this.viewMatrix = new THREE.Matrix4();
    this.introActive = true;
    this.introElapsed = 0;
    this.introOverlay = null;
    this.introController = null;
    this.environmentToggle = null;
    this.game = null;
    this.audioManager = null;
    this.lensFlare = null;
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

    this.sunController = new SunController();
    this.environmentManager = new EnvironmentManager(this);
    this.heightmapPipeline = new HeightmapPipeline(this);
    this.shadowController = new ShadowController(this);
    this.postProcessing = new PostProcessingController(this);
    this.applyShaderEnvironment = this.applyShaderEnvironment.bind(this);
    this.animate = this.animate.bind(this);
    this.startExperience = this.startExperience.bind(this);
    this.setNoiseResolution = this.setNoiseResolution.bind(this);
  }

  // Post-processing state proxies (preserve public API for ControlPanel).
  // Setters for derived state throw — mutations must go through set*() methods
  // on the controller so logic (applyAntialiasSettings, etc.) runs consistently.
  get bloomEnabled() { return this.postProcessing.bloomEnabled; }
  set bloomEnabled(v) { this.postProcessing.bloomEnabled = Boolean(v); }
  get bloomStrength() { return this.postProcessing.bloomStrength; }
  set bloomStrength(v) { this.postProcessing.bloomStrength = v; }
  get bloomThreshold() { return this.postProcessing.bloomThreshold; }
  set bloomThreshold(v) { this.postProcessing.bloomThreshold = v; }
  get bloomSoftKnee() { return this.postProcessing.bloomSoftKnee; }
  set bloomSoftKnee(v) { this.postProcessing.bloomSoftKnee = v; }
  get bloomSigma() { return this.postProcessing.bloomSigma; }
  set bloomSigma(v) { this.postProcessing.bloomSigma = v; }
  get bloomResolution() { return this.postProcessing.bloomResolution; }
  set bloomResolution(_) { throw new Error("use setBloomResolution()"); }
  get aaEnabled() { return this.postProcessing.aaEnabled; }
  set aaEnabled(_) { throw new Error("use setAntialiasEnabled()"); }
  get aaSubpixelBlending() { return this.postProcessing.aaSubpixelBlending; }
  set aaSubpixelBlending(_) { throw new Error("use setAntialiasSubpixel()"); }
  get aaContrastThreshold() { return this.postProcessing.aaContrastThreshold; }
  set aaContrastThreshold(_) { throw new Error("use setAntialiasContrast()"); }
  get aaRelativeThreshold() { return this.postProcessing.aaRelativeThreshold; }
  set aaRelativeThreshold(_) { throw new Error("use setAntialiasRelative()"); }
  get postProcessingEnabled() { return this.postProcessing.enabled; }
  set postProcessingEnabled(_) { throw new Error("use setPostProcessingEnabled()"); }
  get renderPixelRatio() { return this.postProcessing.renderPixelRatio; }
  set renderPixelRatio(_) { throw new Error("use setRenderPixelRatio()"); }
  get composer() { return this.postProcessing.composer; }
  get brightPass() { return this.postProcessing.brightPass; }
  get blurPassH() { return this.postProcessing.blurPassH; }
  get blurPassV() { return this.postProcessing.blurPassV; }
  get compositePass() { return this.postProcessing.compositePass; }
  get fxaaPass() { return this.postProcessing.fxaaPass; }
  get brightnessContrastPass() { return this.postProcessing.brightnessContrastPass; }

  setBloomResolution(v) { this.postProcessing.setBloomResolution(v); }
  setRenderPixelRatio(v) { this.postProcessing.setRenderPixelRatio(v); }
  setPostProcessingEnabled(v) { this.postProcessing.setEnabled(v); }
  setAntialiasEnabled(v) { this.postProcessing.setAntialiasEnabled(v); }
  setAntialiasSubpixel(v) { this.postProcessing.setAntialiasSubpixel(v); }
  setAntialiasContrast(v) { this.postProcessing.setAntialiasContrast(v); }
  setAntialiasRelative(v) { this.postProcessing.setAntialiasRelative(v); }
  applyBloomSettings() { this.postProcessing.applyBloomSettings(); }

  // Shadow state proxies — mutations must go through set*() methods so that
  // shadow maps and uniforms stay in sync with the new value.
  get shadowsEnabled() { return this.shadowController.enabled; }
  set shadowsEnabled(_) { throw new Error("use setShadowEnabled()"); }
  get shadowStrength() { return this.shadowController.strength; }
  set shadowStrength(_) { throw new Error("use setShadowStrength()"); }
  get shadowSoftness() { return this.shadowController.softness; }
  set shadowSoftness(_) { throw new Error("use setShadowSoftness()"); }
  get shadowBias() { return this.shadowController.bias; }
  set shadowBias(_) { throw new Error("use setShadowBias()"); }
  get shadowMaxDistance() { return this.shadowController.maxDistance; }
  set shadowMaxDistance(_) { throw new Error("use setShadowMaxDistance()"); }
  get shadowResolution() { return this.shadowController.resolution; }
  set shadowResolution(_) { throw new Error("use setShadowResolution()"); }
  get shadowCascadeEnabled() { return this.shadowController.cascadeEnabled; }
  get shadowDebugEnabled() { return this.shadowController.debugEnabled; }
  set shadowDebugEnabled(_) { throw new Error("use setShadowDebugEnabled()"); }
  get shadowCascades() { return this.shadowController.cascades; }

  // Sun/lighting state proxies — read+write since EnvironmentManager.updateSun
  // and ControlPanel sliders write these directly each frame.
  get sunTime() { return this.sunController.sunTime; }
  set sunTime(v) { this.sunController.sunTime = v; }
  get sunStrengthBase() { return this.sunController.sunStrengthBase; }
  set sunStrengthBase(v) { this.sunController.sunStrengthBase = v; }
  get sunWarmth() { return this.sunController.sunWarmth; }
  set sunWarmth(v) { this.sunController.sunWarmth = v; }
  get sunDirection() { return this.sunController.sunDirection; }
  get currentSunIntensity() { return this.sunController.currentSunIntensity; }
  set currentSunIntensity(v) { this.sunController.currentSunIntensity = v; }
  get sunLightColor() { return this.sunController.sunLightColor; }
  get ambientStrength() { return this.sunController.ambientStrength; }
  set ambientStrength(v) { this.sunController.ambientStrength = v; }
  get ambientColor() { return this.sunController.ambientColor; }
  get ambientDirection() { return this.sunController.ambientDirection; }
  get skyTintStrength() { return this.sunController.skyTintStrength; }
  set skyTintStrength(v) { this.sunController.skyTintStrength = v; }
  get skyTintColor() { return this.sunController.skyTintColor; }
  get sunWorldPosition() { return this.sunController.sunWorldPosition; }
  get sunDistance() { return this.sunController.sunDistance; }
  set sunDistance(v) { this.sunController.sunDistance = v; }

  setShadowEnabled(v) { this.shadowController.setEnabled(v); }
  setShadowStrength(v) { this.shadowController.setStrength(v); }
  setShadowBias(v) { this.shadowController.setBias(v); }
  setShadowMaxDistance(v) { this.shadowController.setMaxDistance(v); }
  setShadowResolution(v) { this.shadowController.setResolution(v); }
  setShadowSoftness(v) { this.shadowController.setSoftness(v); }
  setShadowCascadeEnabled(i, v) { this.shadowController.setCascadeEnabled(i, v); }
  setShadowDebugEnabled(v) { this.shadowController.setDebugEnabled(v); }

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

    this.postProcessing.setup();
    this.shadowController.setup();
    this.setupLensFlare();
    this.setupSunMesh();
    this.setupDebugHelpers();
    this.setupBuildings();
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

    this.shadowController.applyUniformsToTerrain();
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
      // Heightmap just changed → buildings need to be re-grounded (their
      // initial Z used procedural noise, which may differ from the .bin data).
      this._placeBuildingsOnFlatTerrain(); this._groundBuildings();
    }

    // Apply shader environment after terrain is created
    this.applyShaderEnvironment(this.terrain.activeShaderIndex);
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
    this.heightmapPipeline.reset();

    // Initialize new master heightmap from the resized terrain
    this.heightmapPipeline.initializeMasterHeightmap("procedural");

    // Apply stored detail strength to the newly resized terrain
    this.terrain?.updateDetailStrength(this.detailStrength);

    // Update collision detector with new terrain
    const proceduralTexture = getNoise();
    if (this.game && this.game.collisionDetector) {
      this.game.collisionDetector.setHeightmapTexture(proceduralTexture);
      this.game.collisionDetector.setDetailStrength(this.detailStrength);
      this.game.collisionDetector.setHeightMultiplier(this.heightGain);
      this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
      this._placeBuildingsOnFlatTerrain(); this._groundBuildings();
    }

    console.log(
      `🔧 Noise resolution changed to ${applied}x${applied} with all settings applied`
    );
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

    // Track obstacle for registration. Game may not exist yet (init order),
    // so we register lazily in setupGame once collisionDetector is available.
    this._pendingObstacles = this._pendingObstacles ?? [];
    this._pendingObstacles.push({
      mesh: obeliskGroup,
      userData: { kind: "obelisk" },
    });

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

  setupBuildings() {
    // Default density; ControlPanel's slider rewires this via setBuildingDensity().
    this.buildingDensity = this.buildingDensity ?? 10;
    this.maxBuildingDensity = 25;
    this.buildings = [];
    this._rebuildBuildingTemplates();
  }

  /**
   * Generate `maxBuildingDensity` fresh skyscraper templates. Called at init
   * and again whenever the density changes (so we always have enough
   * templates for the max requested count). Palette cycles through a fixed
   * set so repeated generations look stable.
   */
  _rebuildBuildingTemplates() {
    const WALL_PALETTE = [
      0x8090a8, 0x758598, 0x8a97a8, 0x6a7688, 0x92969c,
      0x7a8798, 0x828c9c, 0x6e798c, 0x88909e, 0x7c8698,
    ];
    const GLASS_PALETTE = [
      0x2e4258, 0x283a50, 0x34485e, 0x22344a, 0x3a485a,
      0x2a3c50, 0x2e4056, 0x263850, 0x324356, 0x2c3e54,
    ];
    const LIT = 0xffcc66;

    // Stable pseudo-random from a template index + salt.
    const r = (idx, salt) =>
      (Math.sin(idx * 97.3 + salt * 13.1) + 1) * 0.5;

    this._unplacedBuildings = [];
    for (let i = 0; i < this.maxBuildingDensity; i++) {
      const w = 55 + Math.floor(r(i, 1) * 45);    // 55..99
      const d = 55 + Math.floor(r(i, 2) * 45);    // 55..99
      const h = 160 + Math.floor(r(i, 3) * 240);  // 160..399
      const wall = WALL_PALETTE[i % WALL_PALETTE.length];
      const glass = GLASS_PALETTE[i % GLASS_PALETTE.length];

      const group = this._createBuilding({
        x: 0,
        y: 0,
        w,
        d,
        h,
        wall,
        glass,
        litColor: LIT,
        seed: i * 17.3,
      });
      this._unplacedBuildings.push({ group, template: { w, d, h, wall, glass, litColor: LIT } });
    }
    console.log(
      `🏢 Prepared ${this._unplacedBuildings.length} skyscraper templates`
    );
  }

  /**
   * Set building density (number of skyscrapers, 0..maxBuildingDensity).
   * Tears down existing buildings, regenerates templates, and re-runs flat
   * placement on the current heightmap.
   */
  setBuildingDensity(count) {
    const clamped = THREE.MathUtils.clamp(
      Math.round(count),
      0,
      this.maxBuildingDensity
    );
    this.buildingDensity = clamped;

    this._disposeBuildings();
    this._rebuildBuildingTemplates();
    this._placeBuildingsOnFlatTerrain();
    console.log(`🏙️ Building density set to ${clamped}`);
  }

  _disposeBuildings() {
    if (!this.buildings?.length && !this._unplacedBuildings?.length) return;
    const cd = this.game?.collisionDetector;

    // Remove placed buildings from the scene and the obstacle index.
    if (this.buildings?.length) {
      for (const group of this.buildings) {
        this.scene.remove(group);
        group.traverse((obj) => {
          obj.geometry?.dispose?.();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose?.());
            } else {
              obj.material.dispose?.();
            }
          }
        });
      }
      this.buildings = [];
    }
    if (cd) {
      const entries = cd.obstacles.obstacles.filter(
        (o) => o.userData?.kind === "building"
      );
      for (const e of entries) cd.obstacles.remove(e);
    }

    // Templates not yet placed also need disposal.
    if (this._unplacedBuildings?.length) {
      for (const { group } of this._unplacedBuildings) {
        group.traverse((obj) => {
          obj.geometry?.dispose?.();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose?.());
            } else {
              obj.material.dispose?.();
            }
          }
        });
      }
      this._unplacedBuildings = [];
    }
  }

  /**
   * Scan a grid of candidate positions, measure terrain flatness at each,
   * and assign the N flattest spots (spaced apart) to the unplaced building
   * templates. Runs the first time the real heightmap is available and
   * becomes a no-op thereafter.
   *
   * "Flatness" is the height variation across a 3×3 sample grid inside the
   * building's footprint — smaller = flatter. Threshold is in world height
   * units (same scale as sampleHeightFromTexture output).
   */
  _placeBuildingsOnFlatTerrain() {
    if (!this._unplacedBuildings?.length) return;
    const cd = this.game?.collisionDetector;
    if (!cd) return;
    // Zero density → dispose any pre-built templates and skip scanning.
    if ((this.buildingDensity ?? 0) <= 0) {
      for (const { group } of this._unplacedBuildings) {
        group.traverse((obj) => {
          obj.geometry?.dispose?.();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
            else obj.material.dispose?.();
          }
        });
      }
      this._unplacedBuildings = [];
      return;
    }

    const targetCount = Math.min(
      this.buildingDensity ?? this._unplacedBuildings.length,
      this._unplacedBuildings.length
    );

    const searchBounds = { min: -1400, max: 1400 };
    const gridStep = 80;          // sample every 80 world-units
    const checkRadius = 90;       // flatness sampled within ±90 units
    const maxHeightDelta = 28;    // tune: larger = allow slopier sites
    const minSpacing = 260;       // skyscrapers at least this far apart

    // Scan grid for flat candidates
    const candidates = [];
    for (let y = searchBounds.min; y <= searchBounds.max; y += gridStep) {
      for (let x = searchBounds.min; x <= searchBounds.max; x += gridStep) {
        const delta = this._measureFlatness(x, y, checkRadius);
        if (delta <= maxHeightDelta) {
          candidates.push({ x, y, delta });
        }
      }
    }

    // Flatter first, then pick with spacing constraint.
    candidates.sort((a, b) => a.delta - b.delta);
    const selected = [];
    for (const c of candidates) {
      const tooClose = selected.some(
        (s) => Math.hypot(s.x - c.x, s.y - c.y) < minSpacing
      );
      if (!tooClose) {
        selected.push(c);
        if (selected.length >= targetCount) break;
      }
    }

    console.log(
      `🏙️ Scanned ${((searchBounds.max - searchBounds.min) / gridStep + 1) ** 2} candidate cells → ${candidates.length} flat (Δh ≤ ${maxHeightDelta}) → ${selected.length} placed (target ${targetCount})`
    );

    // Assign sites to templates and commit them to the scene + obstacle index.
    for (let i = 0; i < selected.length; i++) {
      const { group } = this._unplacedBuildings[i];
      const site = selected[i];
      const terrainH = cd.sampleHeightFromTexture(site.x, site.y);

      group.rotation.z = Math.sin(site.x * 0.031 + site.y * 0.017) * 0.5;
      group.position.set(site.x, site.y, terrainH - 12);
      group.userData.siteX = site.x;
      group.userData.siteY = site.y;

      this.scene.add(group);
      this.buildings.push(group);
      cd.registerObstacle(group, { kind: "building" });
    }

    // Dispose any leftover templates we didn't place (either fewer flat sites
    // than density requested, or density is less than the pool).
    for (let i = selected.length; i < this._unplacedBuildings.length; i++) {
      const { group } = this._unplacedBuildings[i];
      group.traverse((obj) => {
        obj.geometry?.dispose?.();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material.dispose?.();
        }
      });
    }
    this._unplacedBuildings = [];
  }

  _measureFlatness(x, y, radius) {
    const cd = this.game.collisionDetector;
    let minH = Infinity;
    let maxH = -Infinity;
    // 3×3 sample grid inside the footprint
    for (const dy of [-radius, 0, radius]) {
      for (const dx of [-radius, 0, radius]) {
        const h = cd.sampleHeightFromTexture(x + dx, y + dy);
        if (h < minH) minH = h;
        if (h > maxH) maxH = h;
      }
    }
    return maxH - minH;
  }

  _createBuilding({ x, y, w, d, h, wall, glass, litColor, seed: seedOverride }) {
    const group = new THREE.Group();

    // Skyscraper shader: procedural window grid, fresnel sky reflection that
    // is strong on the glass and subtle on walls, and a per-window "lit"
    // emission pattern keyed off uSeed. Uniforms are refreshed each frame by
    // EnvironmentManager.updateSun() so time-of-day colors flow through.
    const makeSkyscraperMat = (wallHex, glassHex, seed) =>
      new THREE.ShaderMaterial({
        uniforms: {
          uWallColor: { value: new THREE.Color(wallHex) },
          uGlassColor: { value: new THREE.Color(glassHex) },
          uLitWindowColor: { value: new THREE.Color(litColor) },
          uSunDirection: { value: this.sunDirection.clone() },
          uSunIntensity: { value: this.currentSunIntensity },
          uSunColor: { value: this.sunLightColor.clone() },
          uAmbientStrength: { value: this.ambientStrength },
          uAmbientColor: { value: this.ambientColor.clone() },
          uSkyTintColor: { value: this.skyTintColor.clone() },
          uWindowCell: { value: new THREE.Vector2(11, 15) }, // ~11w × 15h per window
          uSeed: { value: seed },
        },
        vertexShader: skyscraperVert,
        fragmentShader: skyscraperFrag,
      });

    // Per-building seed — stable per-instance. When creating templates before
    // placement we pass an explicit seedOverride; otherwise derive from coords.
    const seed =
      seedOverride != null
        ? seedOverride
        : (Math.abs(x) * 0.13 + Math.abs(y) * 0.27) % 1000;

    const bodyMat = makeSkyscraperMat(wall, glass, seed);
    const bodyGeom = new THREE.BoxGeometry(w, d, h);
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.castShadow = true;
    body.receiveShadow = true;
    body.position.z = h / 2;
    group.add(body);

    // Rooftop crown: slightly inset, darker, shorter — breaks the silhouette
    // and reads as mechanical/penthouse. No window grid (its local Z axis
    // dimensions are small, so the seed randomness picks up naturally).
    const capHeight = 22;
    const capWall = new THREE.Color(wall).multiplyScalar(0.55).getHex();
    const capGlass = new THREE.Color(glass).multiplyScalar(0.7).getHex();
    const capMat = makeSkyscraperMat(capWall, capGlass, seed + 7.7);
    const capGeom = new THREE.BoxGeometry(w * 0.8, d * 0.8, capHeight);
    const cap = new THREE.Mesh(capGeom, capMat);
    cap.castShadow = true;
    cap.receiveShadow = true;
    cap.position.z = h + capHeight / 2;
    group.add(cap);

    // Slim antenna / spire — adds verticality on the tallest towers.
    if (h > 280) {
      const spireHeight = 60 + Math.random() * 30;
      const spireGeom = new THREE.CylinderGeometry(1.2, 2.5, spireHeight, 6);
      const spireMat = new THREE.MeshBasicMaterial({ color: 0x2a2a2a });
      const spire = new THREE.Mesh(spireGeom, spireMat);
      spire.rotation.x = Math.PI / 2;
      spire.position.z = h + capHeight + spireHeight / 2;
      group.add(spire);
    }

    // Position + rotation are deferred: when used as a pre-placement template
    // the caller leaves the group at origin; _placeBuildingsOnFlatTerrain()
    // fills in siteX/siteY and sets rotation.z once a flat site is chosen.
    group.userData.baseEmbed = 12;
    group.userData.height = h;

    return group;
  }

  /**
   * Re-sample each building's terrain height from the actual rendered
   * heightmap texture (via CollisionDetector.sampleHeightFromTexture) so they
   * sit flush on the real ground — not the procedural-noise approximation.
   * Also refreshes the obstacle index bounds so collision matches visuals.
   */
  _groundBuildings() {
    if (!this.buildings?.length) return;
    const cd = this.game?.collisionDetector;
    if (!cd) return;

    for (const group of this.buildings) {
      const { siteX, siteY, baseEmbed } = group.userData;
      const terrainHeight = cd.sampleHeightFromTexture(siteX, siteY);
      group.position.z = terrainHeight - baseEmbed;
    }

    // Rebuild the obstacle spatial index so AABBs match new world positions.
    const obstacles = cd.obstacles;
    const buildingEntries = obstacles.obstacles.filter(
      (o) => o.userData?.kind === "building"
    );
    for (const entry of buildingEntries) obstacles.remove(entry);
    for (const group of this.buildings) {
      cd.registerObstacle(group, { kind: "building" });
    }
  }

  setupSky() {
    this.environmentManager.setupSky();
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

    // Register any static obstacles queued during scene setup. At this point
    // the collisionDetector exists (created in Game's constructor) so we can
    // flush the pending list.
    if (this._pendingObstacles && this.game.collisionDetector) {
      for (const { mesh, userData } of this._pendingObstacles) {
        this.game.collisionDetector.registerObstacle(mesh, userData);
      }
      const stats = this.game.collisionDetector.obstacles.stats();
      console.log(
        `🗼 Registered ${stats.obstacles} static obstacle(s) across ${stats.cells} spatial cells`
      );
      this._pendingObstacles = [];
    }

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

      if (e.code === "KeyG") {
        // WebGPU toggle temporarily disabled due to import path issues
        // TODO: Re-enable once WebGPU import paths are resolved
        console.log('🚧 WebGPU toggle temporarily disabled - import path issues with Vite');
        console.log('💡 Currently using stable WebGL renderer');
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
      this.shadowController.render();
    }

    this.postProcessing.render();

    this.stats?.end();
  }

  setTerrainSmoothing(strength) {
    this.heightSmoothStrength = THREE.MathUtils.clamp(strength, 0, 1);

    // If we have master heightmap data, update terrain display
    if (this.heightmapPipeline.masterHeightmap) {
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
    if (this.heightmapPipeline.masterHeightmap) {
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

    // Reset pipeline state for fresh procedural terrain
    this.heightmapPipeline.reset();

    // Resize terrain texture to current noise resolution
    const terrainTexture = getTerrainTexture();
    terrainTexture.resize(this.noiseResolution, this.noiseResolution);

    regenerateNoise({
      heightGain: this.heightGain,
      smoothing: this.heightSmoothStrength,
    });

    this.createTerrain();
    this.applyShaderEnvironment(this.terrain.activeShaderIndex);
    this.heightmapPipeline.initializeMasterHeightmap("procedural");
    this._syncCollisionDetectorWithProcedural();
    this.terrain?.updateDetailStrength(this.detailStrength);

    console.log(
      `🌋 Generated new procedural terrain (${this.noiseResolution}x${
        this.noiseResolution
      }) with height gain: ${this.heightGain}x, smoothing: ${Math.round(
        this.heightSmoothStrength * 100
      )}%`
    );
  }

  _syncCollisionDetectorWithProcedural() {
    if (!this.game || !this.game.collisionDetector) return;
    const proceduralTexture = getNoise();
    this.game.collisionDetector.setHeightmapTexture(proceduralTexture);
    this.game.collisionDetector.setDetailStrength(this.detailStrength);
    this.game.collisionDetector.setHeightMultiplier(this.heightGain);
    this.game.collisionDetector.setHeightSmoothing(this.heightSmoothStrength);
    this._placeBuildingsOnFlatTerrain(); this._groundBuildings();
    console.log(
      "🎯 Updated collision detector with procedural heightmap and all terrain parameters"
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

  // Rebuild the terrain mesh + shaders from the current pipeline heightmap.
  // Called after the pipeline regenerates the master heightmap via an effect.
  updateTerrainFromMaster() {
    if (!this.heightmapPipeline.updateTerrainFromMaster()) return;

    this.createTerrain();
    this.applyShaderEnvironment(this.terrain.activeShaderIndex);

    console.log(
      "🔄 Updated terrain from master heightmap with current settings"
    );
  }

  // Public entry point used by ControlPanel effect buttons.
  applyTerrainEffect(effectType, parameters = {}) {
    if (this.generatedHeightTexture) {
      console.log(
        "⚠️ Terrain effects only work with procedural terrain. Generate terrain first."
      );
      return;
    }

    if (!this.heightmapPipeline.baseHeightmap) {
      this.heightmapPipeline.initializeMasterHeightmap("procedural");
    }

    const success = this.heightmapPipeline.applyHeightmapEffect(
      effectType,
      parameters
    );
    if (!success) return;

    this.updateTerrainFromMaster();

    console.log(`✅ Applied ${effectType} effect to terrain`);
  }

}

export const app = new TerrainApp();

// Dev-only debug handle. Safe to keep: grants the browser console access to
// the running app for inspection/testing. Not referenced elsewhere in code.
if (typeof window !== "undefined" && import.meta.env?.DEV) {
  window.__aiplane = app;
}
