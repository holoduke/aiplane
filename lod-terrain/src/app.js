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
  DEFAULT_NOISE_SMOOTHING,
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
    this.useFreeCamera = false;
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
    this.sunTime = 15.3;
    this.sunStrengthBase = 0.4;
    this.sunDirection = new THREE.Vector3(0, 1, 0);
    this.currentSunIntensity = 1.0;
    this.ambientStrength = 1.19;
    this.ambientColor = new THREE.Color(0.45, 0.42, 0.35);
    this.ambientDirection = new THREE.Vector3(1, 0, 0);
    this.normalSmoothFactor = 0.4;
    this.specularStrength = 1.0;
    this.skyTintStrength = 0.15;
    this.skyTintColor = new THREE.Color(0.62, 0.72, 0.88);
    this.contrastAdjustment = 0.1;
    this.brightnessAdjustment = -0.06;
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
    this.terrainLevels = 7;
    this.terrainResolution = 256;
    this.terrain = null;
    this.center = null;
    this.sky = null;
    this.sky2 = null;
    this.sunMesh = null;
    this.heightSmoothStrength = DEFAULT_NOISE_SMOOTHING;
    this.heightGain = 0.5;
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
  }

  init() {
    this.setupStats();
    this.setupHud();

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.terrainResolution = isMobile ? 96 : 256;
    setNoiseSmoothing(this.heightSmoothStrength);
    setNoiseHeightGain(this.heightGain);
    this.createTerrain();

    this.setupPostProcessing();
    this.setupLensFlare();
    this.setupSunMesh();
    this.setupDebugHelpers();
    this.setupSky();
    this.setupIntroOverlay();

    camera.position.set(450, 750, 50);
    camera.up.copy(WORLD_UP);
    this.center = new THREE.Vector3(205, 135, 0);
    this.lookTarget = this.center.clone();

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
      scene.remove(this.terrain);
      this.terrain.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }

    this.terrain = new Terrain(
      noise,
      8192,
      this.terrainLevels,
      this.terrainResolution
    );
    scene.add(this.terrain);

    this.terrain.setShader(previousShaderIndex);

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
    const debugGeometry = new THREE.BoxGeometry(50, 50, 50);
    const debugMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const cube = new THREE.Mesh(debugGeometry, debugMaterial);
    cube.position.set(205, 135, 25);
    scene.add(cube);
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
      const height = 150 + 55 * Math.sin(this.introElapsed * 0.2);
      const lookOrbit = 120 * Math.sin(this.introElapsed * 0.6);

      camera.position.set(
        this.center.x + Math.cos(angle) * radius,
        this.center.y + Math.sin(angle) * radius,
        height
      );

      _tmpLookTarget
        .copy(this.center)
        .addScaledVector(WORLD_UP, 40 + 30 * Math.sin(this.introElapsed * 0.8));
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
