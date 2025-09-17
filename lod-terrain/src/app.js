import * as THREE from "three";
import Stats from "stats.js";
import { camera } from "./camera.js";
import { container } from "./container.js";
import { geometry } from "./geometry.js";
import { material } from "./material.js";
import { noise } from "./noise.js";
import { renderer } from "./renderer.js";
import { scene } from "./scene.js";
import { Terrain } from "./terrain.js";
import { LensFlare } from "./LensFlare.js";
import { texture } from "./texture.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const WORLD_UP = new THREE.Vector3(0, 0, 1);
const _tmpDirection = new THREE.Vector3();
const _tmpRight = new THREE.Vector3();
const _tmpLookTarget = new THREE.Vector3();
const _mouseState = { lastX: 0, lastY: 0 };
const _hudEl = document.createElement("div");
const _neutralSkyColor = new THREE.Color(0.92, 0.96, 1.0);
const _skyBlendColor = new THREE.Color();

const SKY_KEYFRAMES = [
  { time: 0, horizon: 0x081622, sky: 0x04070f, intensity: 0.05 },
  { time: 5.5, horizon: 0x69304a, sky: 0x0c1830, intensity: 0.25 },
  { time: 6.8, horizon: 0xfea772, sky: 0x6e8fbf, intensity: 0.6 },
  { time: 12.0, horizon: 0xf0f8ff, sky: 0xb8d4f0, intensity: 1.0 }, // White horizon, very light sky
  { time: 18.5, horizon: 0xf0f8ff, sky: 0xb8d4f0, intensity: 0.9 }, // Keep blue daylight longer
  { time: 19.5, horizon: 0xffb37a, sky: 0x7ca0d0, intensity: 0.65 }, // Orange only starts at 7:30 PM
  { time: 20.5, horizon: 0x293162, sky: 0x0b1630, intensity: 0.2 },
  { time: 24.0, horizon: 0x081622, sky: 0x04070f, intensity: 0.05 },
];

function sampleSkyColors(time) {
  const wrapped = ((time % 24) + 24) % 24;
  let index = 0;
  for (let i = 0; i < SKY_KEYFRAMES.length - 1; i++) {
    const current = SKY_KEYFRAMES[i];
    const next = SKY_KEYFRAMES[i + 1];
    if (wrapped >= current.time && wrapped <= next.time) {
      index = i;
      break;
    }
    if (wrapped >= SKY_KEYFRAMES[SKY_KEYFRAMES.length - 1].time) {
      index = SKY_KEYFRAMES.length - 1;
    }
  }

  const start = SKY_KEYFRAMES[index];
  const end = SKY_KEYFRAMES[(index + 1) % SKY_KEYFRAMES.length];
  let span = end.time - start.time;
  if (span <= 0) span += 24;
  let offset = wrapped - start.time;
  if (offset < 0) offset += 24;
  const alpha = span === 0 ? 0 : THREE.MathUtils.clamp(offset / span, 0, 1);

  const horizonColor = new THREE.Color(start.horizon).lerp(
    new THREE.Color(end.horizon),
    alpha
  );
  const skyColor = new THREE.Color(start.sky).lerp(
    new THREE.Color(end.sky),
    alpha
  );
  const intensity = THREE.MathUtils.lerp(start.intensity, end.intensity, alpha);

  return { horizonColor, skyColor, intensity };
}

function computeSunDirection(time) {
  const wrapped = ((time % 24) + 24) % 24;
  const azimuth = (wrapped / 24) * Math.PI * 2;
  const elevationFactor = Math.sin(((wrapped - 6) / 12) * Math.PI);
  const clampedElevation = THREE.MathUtils.clamp(elevationFactor, -0.35, 1.0);
  const lerpValue = (clampedElevation + 0.35) / 1.35;
  const elevation = THREE.MathUtils.lerp(
    THREE.MathUtils.degToRad(-20),
    THREE.MathUtils.degToRad(80),
    lerpValue
  );

  const dir = new THREE.Vector3(
    Math.cos(elevation) * Math.sin(azimuth),
    Math.cos(elevation) * Math.cos(azimuth),
    Math.sin(elevation)
  );
  return dir.normalize();
}

export const app = {
  clock: new THREE.Clock(),
  keys: {},
  cameraRotation: { x: 0, y: 0 },
  moveSpeed: 2.0,
  lookSpeed: 0.004,
  stats: null,
  useFreeCamera: false,
  lookTarget: null,
  pointerLocked: false,
  mouseDragging: false,
  fogEnabled: true,
  sceneFog: null,
  fogNearScale: 0.34,
  fogFarScale: 0.71,
  fadeStartScale: 0.9,
  fadeEndScale: 1.0,
  morphRegion: 0.9,
  bloomEnabled: true,
  bloomStrength: 0.0,
  sunTime: 15.3,
  sunStrengthBase: 0.4,
  sunDirection: new THREE.Vector3(0, 1, 0),
  currentSunIntensity: 1.0,
  sunDistance: 15000,
  ambientStrength: 0.9,
  ambientColor: new THREE.Color(0.45, 0.42, 0.35),
  ambientDirection: new THREE.Vector3(1, 0, 0),
  normalSmoothFactor: 0.4,
  specularStrength: 1.0,
  skyTintStrength: 0.15,
  skyTintColor: new THREE.Color(0.62, 0.72, 0.88),
  composer: null,
  bloomPass: null,
  lensFlare: null,
  sunWorldPosition: new THREE.Vector3(),
  init: function () {
    // Initialize performance stats
    app.stats = new Stats();
    app.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    app.stats.dom.style.position = "absolute";
    app.stats.dom.style.left = "10px";
    app.stats.dom.style.bottom = "10px";
    app.stats.dom.style.top = "auto";
    document.body.appendChild(app.stats.dom);

    // Terrain( heightdata, worldWidth, levels of detail, tile resolution )
    const createTerrain = () => {
      if (app.terrain) {
        scene.remove(app.terrain);
        app.terrain.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      }

      app.terrain = new Terrain(
        noise,
        8192,
        app.terrainLevels,
        app.terrainResolution
      );
      scene.add(app.terrain);
      app.terrain.updateMorphRegion(app.morphRegion);
      app.terrain.updateSun(app.sunDirection, app.currentSunIntensity);
      app.terrain.updateAmbient(
        app.ambientDirection || new THREE.Vector3(1, 0, 0),
        app.ambientStrength,
        app.ambientColor || new THREE.Color(0.45, 0.42, 0.35)
      );
      app.terrain.updateSmoothFactor(app.normalSmoothFactor);
      app.terrain.updateSpecularStrength(app.specularStrength);
      app.terrain.updateSkyTint(
        app.skyTintColor || new THREE.Color(0.62, 0.72, 0.88),
        app.skyTintStrength
      );
    };

    app.terrainLevels = 12;
    app.terrainResolution = 256;
    createTerrain();

    const size = new THREE.Vector2();
    renderer.getSize(size);
    app.composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    app.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.x, size.y),
      0.6,
      0.35,
      0.05
    );
    app.bloomPass.threshold = 0.9; // High threshold - only very bright objects will bloom
    app.bloomPass.strength = app.bloomStrength;
    app.bloomPass.radius = 0.2;
    app.composer.addPass(renderPass);
    app.composer.addPass(app.bloomPass);

    const handleComposerResize = () => {
      if (!app.composer) return;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      app.composer.setSize(width, height);
      app.bloomPass.setSize(width, height);
    };
    window.addEventListener("resize", handleComposerResize);
    handleComposerResize();

    app.lensFlare = new LensFlare(scene, camera, renderer);

    // Recreate exactly what worked - start with green, then blue
    const debugSunGeometry = new THREE.SphereGeometry(200, 16, 16);
    const debugSunMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00, // Green
      wireframe: false,
      fog: false,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });
    app.debugSun = new THREE.Mesh(debugSunGeometry, debugSunMaterial);
    app.debugSun.renderOrder = 9999;
    app.debugSun.frustumCulled = false;
    app.debugSun.position.set(
      camera.position.x + 500,
      camera.position.y,
      camera.position.z + 200
    );
    //scene.add(app.debugSun);

    // Blue sun that was working (second one)
    const testSun2Geometry = new THREE.SphereGeometry(200, 16, 16);
    const testSun2Material = new THREE.MeshBasicMaterial({
      color: 0xffff88, // Bright yellow-white for glow effect
      wireframe: false,
      fog: false,
      depthTest: true,
      depthWrite: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });

    // Make the sun bright enough for bloom
    testSun2Material.color.multiplyScalar(2.0);
    app.sunMesh = new THREE.Mesh(testSun2Geometry, testSun2Material);
    //app.sunMesh.renderOrder = 9997;
    app.sunMesh.frustumCulled = true;
    app.sunMesh.position.set(
      camera.position.x + 700,
      camera.position.y,
      camera.position.z + 200
    );
    scene.add(app.sunMesh);
    console.log("🔵 Blue sun recreated:", app.sunMesh.position);

    const updateSun = () => {
      const skySample = sampleSkyColors(app.sunTime);
      const sunDir = computeSunDirection(app.sunTime);
      app.sunDirection.copy(sunDir);
      app.currentSunIntensity = app.sunStrengthBase * skySample.intensity;
      const ambientDir = new THREE.Vector3(-sunDir.y, sunDir.x, 0);
      if (ambientDir.lengthSq() < 1e-4) {
        ambientDir.set(1, 0, 0);
      }
      ambientDir.normalize();
      app.ambientDirection = ambientDir;

      if (app.terrain) {
        app.terrain.updateSun(app.sunDirection, app.currentSunIntensity);
        app.terrain.updateAmbient(
          ambientDir,
          app.ambientStrength,
          app.ambientColor || new THREE.Color(0.45, 0.42, 0.35)
        );
        _skyBlendColor.copy(skySample.skyColor);
        _skyBlendColor.lerp(skySample.horizonColor, 0.2);
        _skyBlendColor.lerp(_neutralSkyColor, 0.55);
        app.skyTintColor.copy(_skyBlendColor);
        app.terrain.updateSkyTint(app.skyTintColor, app.skyTintStrength);
      }

      if (material.atmosphere.uniforms.uHorizonColor) {
        material.atmosphere.uniforms.uHorizonColor.value.copy(
          skySample.horizonColor
        );
      }
      if (material.atmosphere.uniforms.uSkyColor) {
        material.atmosphere.uniforms.uSkyColor.value.copy(skySample.skyColor);
      }

      if (app.sunMesh) {
        app.sunMesh.material.color.setHSL(
          0.15,
          0.3,
          Math.max(0.2, app.currentSunIntensity)
        );
      }

      if (app.lensFlare) {
        app.lensFlare.setSunIntensity(app.currentSunIntensity);
      }
    };

    app.updateSun = updateSun;
    app.updateSun();

    // Add debug cube at terrain center
    const debugGeometry = new THREE.BoxGeometry(50, 50, 50);
    const debugMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const debugCube = new THREE.Mesh(debugGeometry, debugMaterial);
    debugCube.position.set(205, 135, 25); // At terrain center, slightly above ground
    scene.add(debugCube);
    console.log("Debug cube added at terrain center (205, 135, 25)");

    // Add skybox
    const skyMaterial = new THREE.MeshBasicMaterial({
      map: texture.sky,
      side: THREE.BackSide,
      depthWrite: false,
    });
    app.sky = new THREE.Mesh(geometry.sky, skyMaterial);
    app.sky.visible = true;
    app.sky.frustumCulled = false;
    //scene.add(app.sky);

    // Atmospheric sphere overlay
    app.sky2 = new THREE.Mesh(geometry.sky2, material.atmosphere);
    app.sky2.renderOrder = 10000; // Render well before everything else
    scene.add(app.sky2);

    if (!scene.fog) {
      scene.fog = new THREE.Fog(0x000000, 300, 1000);
    }
    app.sceneFog = scene.fog;

    const pointerLockElement = renderer.domElement;
    pointerLockElement.tabIndex = 0;

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
      if (exit) {
        exit.call(document);
      }
    };

    const onPointerLockChange = () => {
      app.pointerLocked = getPointerLockElement() === pointerLockElement;
      console.log("Pointer lock change:", app.pointerLocked);
      if (app.pointerLocked) {
        app.mouseDragging = false;
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "auto";
      }
    };

    const onPointerLockError = (event) => {
      console.warn("Pointer lock failed", event);
    };

    const applyMouseDelta = (dx, dy) => {
      app.cameraRotation.y -= dx * app.lookSpeed;
      app.cameraRotation.x -= dy * app.lookSpeed;
    };

    const onMouseMove = (event) => {
      if (!app.useFreeCamera) return;

      if (app.pointerLocked) {
        const movementX =
          event.movementX ?? event.mozMovementX ?? event.webkitMovementX ?? 0;
        const movementY =
          event.movementY ?? event.mozMovementY ?? event.webkitMovementY ?? 0;
        //console.log("Mouse move (locked):", movementX, movementY);
        applyMouseDelta(movementX, movementY);
      } else if (app.mouseDragging) {
        const dx = event.clientX - _mouseState.lastX;
        const dy = event.clientY - _mouseState.lastY;
        _mouseState.lastX = event.clientX;
        _mouseState.lastY = event.clientY;
        //console.log("Mouse move (drag):", dx, dy);
        applyMouseDelta(dx, dy);
      }
    };

    const onMouseDown = (event) => {
      if (!app.useFreeCamera || event.button !== 0) return;
      pointerLockElement.focus();
      const locked = requestPointerLock();
      if (!locked) {
        app.mouseDragging = true;
        _mouseState.lastX = event.clientX;
        _mouseState.lastY = event.clientY;
      }
    };

    const stopDragging = () => {
      app.mouseDragging = false;
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

    const fogScale = app.terrain.worldWidth / 1024;
    const baseFogNear = scene.fog ? scene.fog.near : 300;
    const baseFogFar = scene.fog ? scene.fog.far : 800;
    const shaderEnvironments = [
      {
        sky: "classic",
        fogColor: 0x000000,
        fogNearScale: 1.0,
        fogFarScale: 0.8,
      },
      {
        sky: "atmosphere",
        horizon: 0xfff1d8,
        skyColor: 0xf9f9ff,
        fogColor: 0xfff1d8,
        fogNearScale: 250 / Math.max(baseFogNear, 1e-3),
        fogFarScale: 0.9,
      },
      {
        sky: "atmosphere",
        horizon: 0xffffff,
        skyColor: 0x55b9ff,
        fogColor: 0x99d6ff,
        fogNearScale: 350 / Math.max(baseFogNear, 1e-3),
        fogFarScale: 1.2,
      },
      {
        sky: "atmosphere",
        horizon: 0xd7f0ff,
        skyColor: "#87c7ff",
        fogColor: 0x88c6ff,
        fogNearAbsolute: 220,
        fogFarAbsolute: 520,
      },
    ];

    const applyShaderEnvironment = (index) => {
      const config = shaderEnvironments[index] || shaderEnvironments[0];

      app.sky.visible = true;

      if (config.sky === "classic") {
        app.sky2.visible = true;
      } else {
        app.sky2.visible = true;
        if (config.horizon)
          material.atmosphere.uniforms.uHorizonColor.value = new THREE.Color(
            config.horizon
          );
        if (config.skyColor)
          material.atmosphere.uniforms.uSkyColor.value = new THREE.Color(
            config.skyColor
          );
      }

      const baseNear =
        config.fogNearAbsolute != null
          ? config.fogNearAbsolute * fogScale
          : (config.fogNearScale ?? 1.0) * baseFogNear * fogScale;
      const baseFar =
        config.fogFarAbsolute != null
          ? config.fogFarAbsolute * fogScale
          : (config.fogFarScale ?? 1.0) * baseFogFar * fogScale;
      const scaledNear = baseNear * app.fogNearScale;
      const scaledFar = baseFar * app.fogFarScale;
      const safeFar = Math.max(scaledFar, scaledNear + 1);

      const fadeStartDist = safeFar * Math.min(app.fadeStartScale, 0.95);
      const desiredFadeEnd = safeFar * Math.min(app.fadeEndScale, 1.0);
      const fadeStart = Math.min(fadeStartDist, desiredFadeEnd - 1.0);
      const fadeEnd = Math.max(desiredFadeEnd, fadeStart + 1.0);

      if (app.fogEnabled) {
        if (!scene.fog) {
          scene.fog = app.sceneFog;
        }
        if (scene.fog) {
          scene.fog.color.set(config.fogColor ?? 0x000000);
          scene.fog.near = scaledNear;
          scene.fog.far = safeFar;
          app.terrain.updateFog(scene.fog);
        }
        app.terrain.updateFade(fadeStart, fadeEnd);
      } else {
        scene.fog = null;
        app.terrain.updateFog(null);
        app.terrain.updateFade(fadeStart, fadeEnd);
      }

      if (app.updateSun) {
        app.updateSun();
      }

      if (app.terrain) {
        app.terrain.updateSmoothFactor(app.normalSmoothFactor);
      }
    };

    const fogControl = document.createElement("div");
    fogControl.style.position = "absolute";
    fogControl.style.top = "10px";
    fogControl.style.right = "10px";
    fogControl.style.padding = "8px 10px";
    fogControl.style.background = "rgba(0, 0, 0, 0.45)";
    fogControl.style.color = "#fff";
    fogControl.style.fontFamily = "monospace";
    fogControl.style.fontSize = "12px";
    fogControl.style.lineHeight = "1.5";
    fogControl.style.borderRadius = "4px";
    fogControl.style.pointerEvents = "auto";

    const fogLabel = document.createElement("div");
    fogLabel.textContent = "Fog near: 10%";
    fogControl.appendChild(fogLabel);

    const fogSlider = document.createElement("input");
    fogSlider.type = "range";
    fogSlider.min = "1";
    fogSlider.max = "200";
    fogSlider.value = "10";
    fogSlider.style.width = "160px";
    fogSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.fogNearScale = value / 100;
      fogLabel.textContent = `Fog near: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    });
    fogControl.appendChild(fogSlider);

    const fogFarLabel = document.createElement("div");
    fogFarLabel.textContent = `Fog far: ${Math.round(app.fogFarScale * 100)}%`;
    fogControl.appendChild(fogFarLabel);

    const fogFarSlider = document.createElement("input");
    fogFarSlider.type = "range";
    fogFarSlider.min = "5";
    fogFarSlider.max = "300";
    fogFarSlider.value = String(Math.round(app.fogFarScale * 100));
    fogFarSlider.style.width = "160px";
    fogFarSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.fogFarScale = Math.max(value / 100, 0.05);
      fogFarLabel.textContent = `Fog far: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    });
    fogControl.appendChild(fogFarSlider);

    const fadeStartLabel = document.createElement("div");
    fadeStartLabel.textContent = `Fade start: ${Math.round(
      app.fadeStartScale * 100
    )}%`;
    fogControl.appendChild(fadeStartLabel);

    const fadeStartSlider = document.createElement("input");
    fadeStartSlider.type = "range";
    fadeStartSlider.min = "0";
    fadeStartSlider.max = "95";
    fadeStartSlider.value = String(Math.round(app.fadeStartScale * 100));
    fadeStartSlider.style.width = "160px";
    fadeStartSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.fadeStartScale = Math.min(value / 100, 0.95);
      fadeStartLabel.textContent = `Fade start: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    });
    fogControl.appendChild(fadeStartSlider);

    const fadeEndLabel = document.createElement("div");
    fadeEndLabel.textContent = `Fade end: ${Math.round(
      app.fadeEndScale * 100
    )}%`;
    fogControl.appendChild(fadeEndLabel);

    const fadeEndSlider = document.createElement("input");
    fadeEndSlider.type = "range";
    fadeEndSlider.min = "50";
    fadeEndSlider.max = "100";
    fadeEndSlider.value = String(Math.round(app.fadeEndScale * 100));
    fadeEndSlider.style.width = "160px";
    fadeEndSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.fadeEndScale = Math.max(value / 100, app.fadeStartScale + 0.05);
      fadeEndLabel.textContent = `Fade end: ${Math.round(
        app.fadeEndScale * 100
      )}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    });
    fogControl.appendChild(fadeEndSlider);

    const morphLabel = document.createElement("div");
    morphLabel.textContent = `Morph width: ${Math.round(
      app.morphRegion * 100
    )}%`;
    fogControl.appendChild(morphLabel);

    const morphSlider = document.createElement("input");
    morphSlider.type = "range";
    morphSlider.min = "5";
    morphSlider.max = "100";
    morphSlider.value = String(Math.round(app.morphRegion * 100));
    morphSlider.style.width = "160px";
    morphSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.morphRegion = Math.max(value / 100, 0.05);
      morphLabel.textContent = `Morph width: ${value}%`;
      if (app.terrain) {
        app.terrain.updateMorphRegion(app.morphRegion);
      }
    });
    fogControl.appendChild(morphSlider);

    const bloomToggle = document.createElement("div");
    bloomToggle.textContent = `Bloom: ${app.bloomEnabled ? "On" : "Off"}`;
    bloomToggle.style.cursor = "pointer";
    bloomToggle.addEventListener("click", () => {
      app.bloomEnabled = !app.bloomEnabled;
      bloomToggle.textContent = `Bloom: ${app.bloomEnabled ? "On" : "Off"}`;
    });
    fogControl.appendChild(bloomToggle);

    const bloomLabel = document.createElement("div");
    bloomLabel.textContent = `Bloom strength: ${Math.round(
      app.bloomStrength * 100
    )}%`;
    fogControl.appendChild(bloomLabel);

    const bloomSlider = document.createElement("input");
    bloomSlider.type = "range";
    bloomSlider.min = "0";
    bloomSlider.max = "200";
    bloomSlider.value = String(Math.round(app.bloomStrength * 100));
    bloomSlider.style.width = "160px";
    bloomSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.bloomStrength = value / 100;
      bloomLabel.textContent = `Bloom strength: ${value}%`;
      if (app.bloomStrength <= 0.001) {
        app.bloomEnabled = false;
        bloomToggle.textContent = "Bloom: Off";
      } else if (!app.bloomEnabled) {
        app.bloomEnabled = true;
        bloomToggle.textContent = "Bloom: On";
      }
    });
    fogControl.appendChild(bloomSlider);

    const ambientLabel = document.createElement("div");
    ambientLabel.textContent = `Ambient strength: ${Math.round(
      app.ambientStrength * 100
    )}%`;
    fogControl.appendChild(ambientLabel);

    const ambientSlider = document.createElement("input");
    ambientSlider.type = "range";
    ambientSlider.min = "0";
    ambientSlider.max = "200";
    ambientSlider.value = String(Math.round(app.ambientStrength * 100));
    ambientSlider.style.width = "160px";
    ambientSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.ambientStrength = value / 100;
      ambientLabel.textContent = `Ambient strength: ${value}%`;
      if (app.terrain && app.ambientDirection) {
        app.terrain.updateAmbient(
          app.ambientDirection,
          app.ambientStrength,
          app.ambientColor || new THREE.Color(0.45, 0.42, 0.35)
        );
      }
    });
    fogControl.appendChild(ambientSlider);

    const skyTintLabel = document.createElement("div");
    skyTintLabel.textContent = `Sky tint: ${Math.round(
      app.skyTintStrength * 100
    )}%`;
    fogControl.appendChild(skyTintLabel);

    const skyTintSlider = document.createElement("input");
    skyTintSlider.type = "range";
    skyTintSlider.min = "0";
    skyTintSlider.max = "50";
    skyTintSlider.value = String(Math.round(app.skyTintStrength * 100));
    skyTintSlider.style.width = "160px";
    skyTintSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.skyTintStrength = value / 100;
      skyTintLabel.textContent = `Sky tint: ${value}%`;
      if (app.terrain) {
        app.terrain.updateSkyTint(app.skyTintColor, app.skyTintStrength);
      }
    });
    fogControl.appendChild(skyTintSlider);

    const smoothLabel = document.createElement("div");
    smoothLabel.textContent = `Normal smoothing: ${Math.round(
      app.normalSmoothFactor * 100
    )}%`;
    fogControl.appendChild(smoothLabel);

    const smoothSlider = document.createElement("input");
    smoothSlider.type = "range";
    smoothSlider.min = "0";
    smoothSlider.max = "100";
    smoothSlider.value = String(Math.round(app.normalSmoothFactor * 100));
    smoothSlider.style.width = "160px";
    smoothSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.normalSmoothFactor = value / 100;
      smoothLabel.textContent = `Normal smoothing: ${value}%`;
      if (app.terrain) {
        app.terrain.updateSmoothFactor(app.normalSmoothFactor);
      }
    });
    fogControl.appendChild(smoothSlider);

    const specularLabel = document.createElement("div");
    specularLabel.textContent = `Specular strength: ${Math.round(
      app.specularStrength * 100
    )}%`;
    fogControl.appendChild(specularLabel);

    const specularSlider = document.createElement("input");
    specularSlider.type = "range";
    specularSlider.min = "0";
    specularSlider.max = "300";
    specularSlider.value = String(Math.round(app.specularStrength * 100));
    specularSlider.style.width = "160px";
    specularSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.specularStrength = value / 100;
      specularLabel.textContent = `Specular strength: ${value}%`;
      if (app.terrain) {
        app.terrain.updateSpecularStrength(app.specularStrength);
      }
    });
    fogControl.appendChild(specularSlider);

    const sunStrengthLabel = document.createElement("div");
    sunStrengthLabel.textContent = `Sun strength: ${Math.round(
      app.sunStrengthBase * 100
    )}%`;
    fogControl.appendChild(sunStrengthLabel);

    const sunStrengthSlider = document.createElement("input");
    sunStrengthSlider.type = "range";
    sunStrengthSlider.min = "0";
    sunStrengthSlider.max = "200";
    sunStrengthSlider.value = String(Math.round(app.sunStrengthBase * 100));
    sunStrengthSlider.style.width = "160px";
    sunStrengthSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.sunStrengthBase = value / 100;
      sunStrengthLabel.textContent = `Sun strength: ${value}%`;
      app.updateSun();
    });
    fogControl.appendChild(sunStrengthSlider);

    const sunTimeLabel = document.createElement("div");
    sunTimeLabel.textContent = `Time: ${app.sunTime.toFixed(1)}h`;
    fogControl.appendChild(sunTimeLabel);

    const sunTimeSlider = document.createElement("input");
    sunTimeSlider.type = "range";
    sunTimeSlider.min = "0";
    sunTimeSlider.max = "24";
    sunTimeSlider.step = "0.1";
    sunTimeSlider.value = String(app.sunTime);
    sunTimeSlider.style.width = "160px";
    sunTimeSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.sunTime = value;
      sunTimeLabel.textContent = `Time: ${value.toFixed(1)}h`;
      app.updateSun();
    });
    fogControl.appendChild(sunTimeSlider);

    const lodLabel = document.createElement("div");
    lodLabel.textContent = `LOD levels: ${app.terrainLevels}`;
    fogControl.appendChild(lodLabel);

    const lodSlider = document.createElement("input");
    lodSlider.type = "range";
    lodSlider.min = "2";
    lodSlider.max = "32";
    lodSlider.value = String(app.terrainLevels);
    lodSlider.style.width = "160px";
    lodSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.terrainLevels = Math.max(2, Math.min(32, Math.round(value)));
      lodLabel.textContent = `LOD levels: ${app.terrainLevels}`;
      createTerrain();
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    });
    fogControl.appendChild(lodSlider);

    const resolutionLabel = document.createElement("div");
    resolutionLabel.textContent = `Tile resolution: ${app.terrainResolution}`;
    fogControl.appendChild(resolutionLabel);

    const resolutionSlider = document.createElement("input");
    resolutionSlider.type = "range";
    resolutionSlider.min = "16";
    resolutionSlider.max = "4096";
    resolutionSlider.step = "16";
    resolutionSlider.value = String(app.terrainResolution);
    resolutionSlider.style.width = "160px";
    resolutionSlider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      app.terrainResolution = Math.max(8, Math.round(value / 16) * 16);
      resolutionLabel.textContent = `Tile resolution: ${app.terrainResolution}`;
      createTerrain();
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    });
    fogControl.appendChild(resolutionSlider);
    container.appendChild(fogControl);

    applyShaderEnvironment(app.terrain.activeShaderIndex);

    // Set camera to a reasonable position for terrain view
    camera.position.set(450, 750, 50);
    camera.up.copy(WORLD_UP);

    // Initialize look target (starts at terrain center)
    app.center = new THREE.Vector3(205, 135, 0);
    app.lookTarget = app.center.clone();

    // Keyboard controls
    document.addEventListener("keydown", function (e) {
      app.keys[e.code] = true;

      if (e.code === "KeyT") {
        // Switch between different frag shaders
        const s = app.terrain.cycleShader();
        applyShaderEnvironment(s);
        e.preventDefault();
      }

      if (e.code === "KeyF") {
        app.fogEnabled = !app.fogEnabled;
        if (app.fogEnabled) {
          if (!app.sceneFog) {
            app.sceneFog = new THREE.Fog(0x000000, baseFogNear, baseFogFar);
          }
          scene.fog = app.sceneFog;
        } else {
          if (scene.fog) {
            app.sceneFog = scene.fog;
          }
          scene.fog = null;
        }
        applyShaderEnvironment(app.terrain.activeShaderIndex);
        e.preventDefault();
      }

      if (e.code === "KeyP") {
        // Cycle through stats panels: FPS, MS, MB
        const currentPanel =
          app.stats.dom.children[0].style.display === "block"
            ? 0
            : app.stats.dom.children[1].style.display === "block"
            ? 1
            : 2;
        const nextPanel = (currentPanel + 1) % 3;
        app.stats.showPanel(nextPanel);
        e.preventDefault();
      }

      // Look up/down controls
      if (e.code === "ArrowUp") {
        app.cameraRotation.x += 0.1; // Look up
        app.cameraRotation.x = Math.min(Math.PI / 2, app.cameraRotation.x);
        e.preventDefault();
      }
      if (e.code === "ArrowDown") {
        app.cameraRotation.x -= 0.1; // Look down
        app.cameraRotation.x = Math.max(-Math.PI / 2, app.cameraRotation.x);
        e.preventDefault();
      }
      if (e.code === "ArrowLeft") {
        app.cameraRotation.y += 0.1; // Look left
        e.preventDefault();
      }
      if (e.code === "ArrowRight") {
        app.cameraRotation.y -= 0.1; // Look right
        e.preventDefault();
      }

      // Toggle between free camera and look-at mode
      if (e.code === "KeyC") {
        app.useFreeCamera = !app.useFreeCamera;
        if (app.useFreeCamera) {
          camera.rotation.order = "YXZ";
          camera.getWorldDirection(_tmpDirection);
          _tmpDirection.normalize();
          app.cameraRotation.x = Math.asin(
            THREE.MathUtils.clamp(_tmpDirection.z, -1, 1)
          );
          app.cameraRotation.y = Math.atan2(_tmpDirection.x, _tmpDirection.y);
          if (!app.pointerLocked) {
            const locked = requestPointerLock();
            if (!locked) {
              app.mouseDragging = false;
            }
          }
        } else {
          camera.up.copy(WORLD_UP);
          camera.lookAt(app.center);
          app.mouseDragging = false;
          if (app.pointerLocked) {
            exitPointerLock();
          }
        }
        console.log("Camera mode:", app.useFreeCamera ? "Free" : "Look-at");
        console.log("Current camera rotation:", camera.rotation);
        console.log("Current camera position:", camera.position);
        console.log("Terrain children count:", app.terrain.children.length);
        e.preventDefault();
      }

      // Prevent default for movement keys
      if (
        [
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
        ].includes(e.code)
      ) {
        e.preventDefault();
      }
    });

    document.addEventListener("keyup", function (e) {
      app.keys[e.code] = false;
    });

    // Prevent context menu on right click
    container.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  },
  //   height: function() {
  //     var i = Math.floor( camera.position.x % 1024 );
  //     var j = 1023 - Math.floor( camera.position.y % 1024 );
  //     //var h = 1024 * noise.image.data[ 13 ];
  //     var h = 1024 * noise.image.data[i + 1024 * j] / 255;
  //     return h * h / 2000 + 20;
  //   },
  animate: function () {
    window.requestAnimationFrame(app.animate);

    // Begin performance monitoring
    app.stats.begin();

    const deltaTime = app.clock.getDelta();

    if (scene.fog) {
      app.terrain.updateFog(scene.fog);
    }

    // Simple keyboard movement (just move camera position)
    const moveSpeed = app.moveSpeed;
    if (app.useFreeCamera) {
      const maxPitch = Math.PI / 2 - 0.01;
      app.cameraRotation.x = THREE.MathUtils.clamp(
        app.cameraRotation.x,
        -maxPitch,
        maxPitch
      );

      const cosPitch = Math.cos(app.cameraRotation.x);
      _tmpDirection.set(
        Math.sin(app.cameraRotation.y) * cosPitch,
        Math.cos(app.cameraRotation.y) * cosPitch,
        Math.sin(app.cameraRotation.x)
      );
      _tmpDirection.normalize();

      _tmpRight.crossVectors(_tmpDirection, WORLD_UP).normalize();
      _tmpLookTarget.copy(_tmpDirection).add(camera.position);
      camera.up.copy(WORLD_UP);
      camera.lookAt(_tmpLookTarget);

      if (app.keys["KeyW"]) {
        camera.position.addScaledVector(_tmpDirection, moveSpeed);
      }
      if (app.keys["KeyS"]) {
        camera.position.addScaledVector(_tmpDirection, -moveSpeed);
      }
      if (app.keys["KeyA"]) {
        camera.position.addScaledVector(_tmpRight, -moveSpeed);
      }
      if (app.keys["KeyD"]) {
        camera.position.addScaledVector(_tmpRight, moveSpeed);
      }
      if (app.keys["KeyQ"] || app.keys["Space"]) {
        camera.position.addScaledVector(WORLD_UP, moveSpeed);
      }
      if (app.keys["KeyE"] || app.keys["ShiftLeft"]) {
        camera.position.addScaledVector(WORLD_UP, -moveSpeed);
      }
    } else {
      if (app.keys["KeyW"]) camera.position.y -= moveSpeed;
      if (app.keys["KeyS"]) camera.position.y += moveSpeed;
      if (app.keys["KeyA"]) camera.position.x -= moveSpeed;
      if (app.keys["KeyD"]) camera.position.x += moveSpeed;
      if (app.keys["KeyQ"] || app.keys["Space"]) camera.position.z += moveSpeed;
      if (app.keys["KeyE"] || app.keys["ShiftLeft"])
        camera.position.z -= moveSpeed;

      camera.lookAt(app.center);
      app.cameraRotation.x = camera.rotation.x;
      app.cameraRotation.y = camera.rotation.y;
    }

    // Update terrain LOD offset to camera position
    app.terrain.offset.x = camera.position.x;
    app.terrain.offset.y = camera.position.y;

    // Keep sun anchored to camera direction to prevent lens flare parallax drift
    if (app.sunWorldPosition && app.sunDirection) {
      app.sunWorldPosition
        .copy(camera.position)
        .addScaledVector(app.sunDirection, app.sunDistance);
      if (app.sunMesh) {
        app.sunMesh.position.copy(app.sunWorldPosition);
      }
    }

    // Keep sky geometry centered on the camera for an infinite effect
    if (app.sky) {
      app.sky.position.copy(camera.position);
      app.sky.updateMatrixWorld();
    }
    if (app.sky2) {
      app.sky2.position.copy(camera.position);
      app.sky2.updateMatrixWorld();
    }

    camera.updateMatrixWorld(true);

    if (app.lensFlare) {
      app.lensFlare.update(deltaTime, app.sunWorldPosition, app.terrain);
      if (app.sunMesh) {
        const visible =
          app.currentSunIntensity > 0.02 && !app.lensFlare.occluded;
        app.sunMesh.visible = visible;
      }
    } else if (app.sunMesh) {
      app.sunMesh.visible = app.currentSunIntensity > 0.02;
    }

    _hudEl.textContent = `Camera: ${camera.position.x.toFixed(
      1
    )}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(
      1
    )}\nRotation: ${app.cameraRotation.x.toFixed(
      2
    )}, ${app.cameraRotation.y.toFixed(2)}\nFog: ${
      app.fogEnabled ? "On" : "Off"
    }\nSun: ${app.sunTime.toFixed(1)}h`;

    const canBloom =
      app.composer &&
      app.bloomPass &&
      app.bloomEnabled &&
      app.bloomStrength > 0.001;

    if (canBloom) {
      app.bloomPass.enabled = true;
      app.bloomPass.strength = app.bloomStrength;
      app.composer.render();
    } else {
      if (app.composer && app.bloomPass) {
        app.bloomPass.enabled = false;
      }
      renderer.render(scene, camera);
    }

    // End performance monitoring
    app.stats.end();
  },
};
