import * as THREE from "three";

import { SKY_KEYFRAMES } from "./sky.js";

export const SKY_PRESETS = {
  classic: SKY_KEYFRAMES,
  daylight: [
    { time: 0, horizon: 0x9db7ff, sky: 0x2d4f9d, intensity: 0.3 },
    { time: 6, horizon: 0xb9d6ff, sky: 0x5f8cd6, intensity: 0.8 },
    { time: 12, horizon: 0xe4f2ff, sky: 0xbfdcff, intensity: 1.0 },
    { time: 18, horizon: 0xbdd2ff, sky: 0x6b92d6, intensity: 0.75 },
    { time: 24, horizon: 0x9db7ff, sky: 0x2d4f9d, intensity: 0.3 },
  ],
  golden: [
    { time: 0, horizon: 0x14090f, sky: 0x050309, intensity: 0.04 },
    { time: 5.5, horizon: 0x7a3a1d, sky: 0x231713, intensity: 0.22 },
    { time: 6.8, horizon: 0xffb45a, sky: 0x84563a, intensity: 0.55 },
    { time: 12.0, horizon: 0xfff4c2, sky: 0xe4c675, intensity: 0.95 },
    { time: 18.5, horizon: 0xffe49d, sky: 0xc7a055, intensity: 0.8 },
    { time: 19.5, horizon: 0xff8c3b, sky: 0x70422f, intensity: 0.5 },
    { time: 20.5, horizon: 0x2b1020, sky: 0x0f0a16, intensity: 0.18 },
    { time: 24.0, horizon: 0x14090f, sky: 0x050309, intensity: 0.04 },
  ],
  alpine: [
    { time: 0, horizon: 0x09111f, sky: 0x050813, intensity: 0.06 },
    { time: 5.5, horizon: 0x4c6fc1, sky: 0x1c2748, intensity: 0.28 },
    { time: 6.8, horizon: 0xa2d9ff, sky: 0x4a87d0, intensity: 0.65 },
    { time: 12.0, horizon: 0xeaf6ff, sky: 0xb8deff, intensity: 1.0 },
    { time: 18.5, horizon: 0xcbe7ff, sky: 0x76b3ff, intensity: 0.85 },
    { time: 19.5, horizon: 0x7b9eff, sky: 0x2f4ba8, intensity: 0.55 },
    { time: 20.5, horizon: 0x1a2a4f, sky: 0x0b1327, intensity: 0.2 },
    { time: 24.0, horizon: 0x09111f, sky: 0x050813, intensity: 0.06 },
  ],
  twilight: [
    { time: 0, horizon: 0x04040a, sky: 0x030207, intensity: 0.04 },
    { time: 5.5, horizon: 0x35234f, sky: 0x160c28, intensity: 0.18 },
    { time: 6.8, horizon: 0x0c032b, sky: 0x3b2d69, intensity: 0.4 },
    { time: 12.0, horizon: 0x5c4d9a, sky: 0x08031c, intensity: 0.7 },
    { time: 18.5, horizon: 0x5c4d9a, sky: 0x08031c, intensity: 0.55 },
    { time: 19.5, horizon: 0x0c032b, sky: 0x1a153f, intensity: 0.35 },
    { time: 20.5, horizon: 0x120a21, sky: 0x070414, intensity: 0.12 },
    { time: 24.0, horizon: 0x04040a, sky: 0x030207, intensity: 0.04 },
  ],
  vulcanic: [
    { time: 0, horizon: 0x200303, sky: 0x080101, intensity: 0.05 },
    { time: 5.5, horizon: 0x3f0704, sky: 0x110202, intensity: 0.12 },
    { time: 7.0, horizon: 0x7c1407, sky: 0x2a0402, intensity: 0.25 },
    { time: 12.0, horizon: 0x7c1407, sky: 0x3f0804, intensity: 0.4 },
    { time: 17.5, horizon: 0x7c1407, sky: 0x2a0402, intensity: 0.22 },
    { time: 19.5, horizon: 0x410705, sky: 0x130303, intensity: 0.1 },
    { time: 24.0, horizon: 0x200303, sky: 0x080101, intensity: 0.05 },
  ],
};

export const SHADER_SEQUENCE = [
  "Terrain",
  "Snowy",
  "Toon",
  "Realistic",
  "Volcanic",
];

export const ENVIRONMENTS = {
  Terrain: {
    name: "Terrain",
    skyMode: "atmosphere",
    fogColor: 0xbfdcff,
    fogNearScale: 0.9,
    fogFarScale: 1.0,
    horizon: 0xe4f2ff,
    skyColor: 0xbfdcff,
    skyKeyframes: SKY_PRESETS.daylight,
  },
  Snowy: {
    name: "Snowy",
    skyMode: "atmosphere",
    horizon: 0xfff1d8,
    skyColor: 0xf9f9ff,
    fogColor: 0xfff1d8,
    fogNearScale: 250 / 300,
    fogFarScale: 0.9,
    skyKeyframes: SKY_PRESETS.alpine,
  },
  Toon: {
    name: "Toon",
    skyMode: "classic",
    fogColor: 0x8fb5ff,
    fogNearScale: 0.85,
    fogFarScale: 0.95,
    skyKeyframes: SKY_PRESETS.golden,
  },
  Realistic: {
    name: "Realistic",
    skyMode: "atmosphere",
    horizon: 0xd7f0ff,
    skyColor: 0x87c7ff,
    fogColor: 0x88c6ff,
    fogNearAbsolute: 220,
    fogFarAbsolute: 520,
    skyKeyframes: SKY_PRESETS.alpine,
  },
  Volcanic: {
    name: "Volcanic",
    skyMode: "atmosphere",
    horizon: 0x431313,
    skyColor: 0x1c0c0c,
    fogColor: 0x341111,
    fogNearScale: 0.8,
    fogFarScale: 0.92,
    skyKeyframes: SKY_PRESETS.vulcanic,
  },
};

export function getEnvironment(index) {
  const shaderName = SHADER_SEQUENCE[index] || SHADER_SEQUENCE[0];
  return {
    shaderName,
    config: ENVIRONMENTS[shaderName] || ENVIRONMENTS[SHADER_SEQUENCE[0]],
  };
}

export function applyEnvironment(app, index, { scene, material }) {
  const { shaderName, config } = getEnvironment(index);

  if (!scene.fog) {
    scene.fog = app.sceneFog || new THREE.Fog(0x000000, 300, 1000);
  }

  app.sceneFog = scene.fog;
  app.environmentName = shaderName;

  if (app.baseFogNear == null) {
    app.baseFogNear = scene.fog.near;
  }
  if (app.baseFogFar == null) {
    app.baseFogFar = scene.fog.far;
  }

  if (app.sky) {
    app.sky.visible = true;
  }

  const useAtmosphere = config.skyMode !== "classic";

  if (app.sky2) {
    app.sky2.visible = useAtmosphere;

    if (useAtmosphere) {
      if (config.horizon) {
        material.atmosphere.uniforms.uHorizonColor.value = new THREE.Color(
          config.horizon
        );
      }
      if (config.skyColor) {
        material.atmosphere.uniforms.uSkyColor.value = new THREE.Color(
          config.skyColor
        );
      }
    }
  }

  const fogScale = app.terrain.worldWidth / 1024;
  const baseFogNear = app.baseFogNear ?? scene.fog.near ?? 300;
  const baseFogFar = app.baseFogFar ?? scene.fog.far ?? 800;

  const baseNear =
    config.fogNearAbsolute != null
      ? config.fogNearAbsolute * fogScale
      : (config.fogNearScale ?? 1.0) * baseFogNear * fogScale;

  const baseFar =
    config.fogFarAbsolute != null
      ? config.fogFarAbsolute * fogScale
      : (config.fogFarScale ?? 1.0) * baseFogFar * fogScale;

  const scaledNear = baseNear * app.fogNearScale;
  const scaledFar = Math.max(baseFar * app.fogFarScale, scaledNear + 1);

  const fadeStart = Math.min(
    scaledFar * Math.min(app.fadeStartScale, 0.95),
    scaledFar * Math.min(app.fadeEndScale, 1.0) - 1.0
  );
  const fadeEnd = Math.max(
    scaledFar * Math.min(app.fadeEndScale, 1.0),
    fadeStart + 1.0
  );

  if (app.fogEnabled) {
    const fog = app.sceneFog || scene.fog;
    fog.color.set(config.fogColor ?? 0x000000);
    fog.near = scaledNear;
    fog.far = scaledFar;
    scene.fog = fog;
    app.terrain.updateFog(scene.fog);
  } else {
    scene.fog = null;
    app.terrain.updateFog(null);
  }

  app.terrain.updateFade(fadeStart, fadeEnd);
  app.terrain.updateSmoothFactor(app.normalSmoothFactor);

  app.skyKeyframes = config.skyKeyframes || SKY_KEYFRAMES;

  return { shaderName, config };
}
