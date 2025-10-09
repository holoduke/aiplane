import * as THREE from "three";

// Default terrain configuration
export const DEFAULT_TERRAIN_INDEX = 2; // Mars terrain

// Constants
export const WORLD_UP = new THREE.Vector3(0, 0, 1);

// Color constants
export const SUN_COLOR_COOL = new THREE.Color(0.6, 0.75, 0.98);
export const SUN_COLOR_WARM = new THREE.Color(1.0, 0.75, 0.52);
export const AMBIENT_COLOR_COOL = new THREE.Color(0.32, 0.44, 0.6);
export const AMBIENT_COLOR_WARM = new THREE.Color(0.6, 0.48, 0.36);
export const SKY_TINT_COOL = new THREE.Color(0.62, 0.76, 0.98);
export const SKY_TINT_WARM = new THREE.Color(0.98, 0.68, 0.52);

const vector = (x, y, z) => ({ x, y, z });
const color = (r, g, b) => ({ r, g, b });

export const DEFAULT_APP_CONFIG = {
  movement: {
    moveSpeed: 2.0,
    lookSpeed: 0.004,
    useFreeCamera: true,
  },
  fog: {
    enabled: true,
    baseNear: 300,
    baseFar: 800,
    nearScale: 0.34,
    farScale: 0.71,
    fadeStartScale: 0.9,
    fadeEndScale: 1.0,
    morphRegion: 0.9,
  },
  bloom: {
    enabled: true,
    strength: 0.05,
    threshold: 1.0,
    softKnee: 0.76,
    sigma: 4,
    resolution: 356,
  },
  antialiasing: {
    enabled: true,
    subpixelBlending: 1.0,
    contrastThreshold: 0.0312,
    relativeThreshold: 0.063,
  },
  lighting: {
    sunTime: 16.7,
    sunStrengthBase: 1.2,
    sunDirection: vector(0, 1, 0),
    currentSunIntensity: 1.0,
    sunWarmth: 0.75,
    sunLightColor: color(1.0, 0.85, 0.65),
    ambientStrength: 0.3,
    ambientColor: color(0.45, 0.42, 0.35),
    ambientDirection: vector(1, 0, 0),
    normalSmoothFactor: 0.65,
    specularStrength: 1.0,
    skyTintStrength: 0.15,
    skyTintColor: color(0.62, 0.72, 0.88),
    sunDistance: 15000,
  },
  rendering: {
    brightnessAdjustment: -0.06,
    contrastAdjustment: 0.1,
    postProcessingEnabled: true,
    pixelRatio: null,
  },
  terrain: {
    levels: 5,
    resolution: 192,
    mobileResolution: 96,
    heightSmoothStrength: 0.02,
    heightGain: 0.84,
    detailStrength: 0.5,
    frustumCullingEnabled: false,
  },
  shadows: {
    enabled: true,
    cascadeCount: 3,
    resolution: 4192,
    lambda: 0.6,
    maxDistance: 3600,
    bias: 0.0015,
    strength: 1.0,
    softness: 1.0,
    overlap: 0.1,
    cascadesEnabled: [true, true, true],
    debugEnabled: false,
  },
  noise: {
    resolution: null,
  },
  debug: {
    lod: false,
  },
  intro: {
    startActive: true,
  },
};

// Backwards compatibility export for existing imports
export const DEFAULT_CONFIG = DEFAULT_APP_CONFIG;

const isPlainObject = (value) =>
  Object.prototype.toString.call(value) === "[object Object]";

const cloneDeep = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => cloneDeep(item));
  }
  if (value instanceof THREE.Color || value instanceof THREE.Vector3) {
    return value.clone();
  }
  if (isPlainObject(value)) {
    const result = {};
    for (const key of Object.keys(value)) {
      result[key] = cloneDeep(value[key]);
    }
    return result;
  }
  return value;
};

const mergeDeep = (target, source) => {
  if (!isPlainObject(source)) {
    return target;
  }

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];

    if (Array.isArray(sourceValue)) {
      target[key] = sourceValue.map((item) => cloneDeep(item));
      continue;
    }

    if (sourceValue instanceof THREE.Color || sourceValue instanceof THREE.Vector3) {
      target[key] = sourceValue.clone();
      continue;
    }

    if (isPlainObject(sourceValue)) {
      const baseValue = target[key];
      const baseObject = isPlainObject(baseValue) ? baseValue : {};
      target[key] = mergeDeep(baseObject, sourceValue);
      continue;
    }

    if (sourceValue !== undefined) {
      target[key] = sourceValue;
    }
  }

  return target;
};

export const createAppConfig = (overrides = {}) => {
  const base = cloneDeep(DEFAULT_APP_CONFIG);
  if (!overrides || !isPlainObject(overrides) || !Object.keys(overrides).length) {
    return base;
  }
  return mergeDeep(base, overrides);
};
