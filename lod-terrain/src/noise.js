import * as THREE from "three";
import { ImprovedNoise } from "./ImprovedNoise.js";

const DEFAULT_WIDTH = 256;
const MIN_WIDTH = 64;
const MAX_WIDTH = 1024;
const DEFAULT_SMOOTH_STRENGTH = 0.25;
const MAX_SMOOTH_PASSES = 120;

let noiseWidth = DEFAULT_WIDTH;
let size = noiseWidth * noiseWidth;

let baseHeight = new Float32Array(size);
let workingA = new Float32Array(size);
let workingB = new Float32Array(size);
let textureData = new Uint8Array(size);

let heightScale = 1.0;
let currentSmoothStrength = DEFAULT_SMOOTH_STRENGTH;
let heightGain = 1.0;

export const noise = new THREE.DataTexture(
  textureData,
  noiseWidth,
  noiseWidth,
  THREE.RedFormat,
  THREE.UnsignedByteType
);

noise.wrapS = THREE.MirroredRepeatWrapping;
noise.wrapT = THREE.MirroredRepeatWrapping;
noise.magFilter = THREE.LinearFilter;
noise.minFilter = THREE.LinearMipMapLinearFilter;
noise.generateMipmaps = true;
noise.needsUpdate = true;

initializeHeightField();

export const DEFAULT_NOISE_SMOOTHING = DEFAULT_SMOOTH_STRENGTH;
export const DEFAULT_NOISE_WIDTH = DEFAULT_WIDTH;
export const MIN_NOISE_WIDTH = MIN_WIDTH;
export const MAX_NOISE_WIDTH = MAX_WIDTH;

export function getNoiseWidth() {
  return noiseWidth;
}

export function setNoiseWidth(width) {
  const clamped = clampToPowerOfTwo(
    THREE.MathUtils.clamp(Math.round(width), MIN_WIDTH, MAX_WIDTH)
  );

  if (clamped === noiseWidth) {
    return noiseWidth;
  }

  noiseWidth = clamped;
  size = noiseWidth * noiseWidth;

  baseHeight = new Float32Array(size);
  workingA = new Float32Array(size);
  workingB = new Float32Array(size);
  textureData = new Uint8Array(size);

  if (typeof noise.dispose === "function") {
    noise.dispose();
  }

  noise.image = {
    data: textureData,
    width: noiseWidth,
    height: noiseWidth,
  };
  noise.mipmaps = [];
  noise.needsUpdate = true;

  initializeHeightField();

  return noiseWidth;
}

export function setNoiseSmoothing(strength) {
  const clamped = THREE.MathUtils.clamp(strength, 0, 1);
  if (Math.abs(clamped - currentSmoothStrength) < 1e-4) {
    return;
  }
  currentSmoothStrength = clamped;
  applySmoothing(clamped);
}

export function setNoiseHeightGain(gain) {
  const clamped = THREE.MathUtils.clamp(gain, 0, 4);
  if (Math.abs(clamped - heightGain) < 1e-4) {
    return;
  }
  heightGain = clamped;
  applySmoothing(currentSmoothStrength);
}

export function sampleHeight(x, y) {
  // Same height calculation as used in the shaders
  const st = { x: x / 1024.0, y: y / 1024.0 };

  // Sample the base texture
  const u = Math.floor((st.x % 1.0) * noiseWidth);
  const v = Math.floor((st.y % 1.0) * noiseWidth);
  const index = Math.min(size - 1, Math.max(0, v * noiseWidth + u));
  let h = (textureData[index] / 255.0) * 1024.0;

  // Add detail layer (16x scale)
  const u16 = Math.floor(((st.x * 16.0) % 1.0) * noiseWidth);
  const v16 = Math.floor(((st.y * 16.0) % 1.0) * noiseWidth);
  const index16 = Math.min(size - 1, Math.max(0, v16 * noiseWidth + u16));
  h += (textureData[index16] / 255.0) * 64.0;

  // Apply the same transformation as in shaders: h * h / 2000.0
  return (h * h) / 2000.0;
}

function initializeHeightField() {
  generateBaseHeight();
  applySmoothing(currentSmoothStrength);
}

function generateBaseHeight() {
  const perlin = new ImprovedNoise();
  const z = Math.random() * 100;

  baseHeight.fill(0);

  let quality = 1;
  let maxValue = 0;

  for (let iteration = 0; iteration < 4; iteration++) {
    for (let i = 0; i < size; i++) {
      const x = i % noiseWidth;
      const y = Math.floor(i / noiseWidth);
      const value = Math.abs(perlin.noise(x / quality, y / quality, z));
      baseHeight[i] += value * quality;
      if (baseHeight[i] > maxValue) {
        maxValue = baseHeight[i];
      }
    }
    quality *= 5;
  }

  heightScale = maxValue > 0 ? 255 / maxValue : 1;
}

function applySmoothing(strength) {
  const clampedStrength = THREE.MathUtils.clamp(strength, 0, 1);
  const passes = Math.round(clampedStrength * MAX_SMOOTH_PASSES);

  workingA.set(baseHeight);

  if (passes > 0 && clampedStrength > 0) {
    let src = workingA;
    let dst = workingB;

    for (let p = 0; p < passes; p++) {
      const t = passes > 1 ? p / Math.max(passes - 1, 1) : 1;
      const blend = THREE.MathUtils.lerp(
        0.15,
        0.85,
        Math.max(clampedStrength, t)
      );
      smoothPass(src, dst, blend);
      const temp = src;
      src = dst;
      dst = temp;
    }

    if (passes % 2 === 1) {
      workingA.set(workingB);
    }
  }

  writeTextureData(workingA);
}

function smoothPass(src, dst, blend) {
  for (let x = 0; x < noiseWidth; x++) {
    dst[x] = src[x];
    dst[(noiseWidth - 1) * noiseWidth + x] =
      src[(noiseWidth - 1) * noiseWidth + x];
  }

  for (let y = 1; y < noiseWidth - 1; y++) {
    const row = y * noiseWidth;
    dst[row] = src[row];
    dst[row + noiseWidth - 1] = src[row + noiseWidth - 1];

    for (let x = 1; x < noiseWidth - 1; x++) {
      const i = row + x;
      const center = src[i];
      const cross =
        src[i - 1] + src[i + 1] + src[i - noiseWidth] + src[i + noiseWidth];
      const diagonals =
        src[i - noiseWidth - 1] +
        src[i - noiseWidth + 1] +
        src[i + noiseWidth - 1] +
        src[i + noiseWidth + 1];
      const neighborAvg = (center * 4 + cross * 2 + diagonals) / 16;
      dst[i] = THREE.MathUtils.lerp(center, neighborAvg, blend);
    }
  }
}

function writeTextureData(source) {
  for (let i = 0; i < size; i++) {
    const value = Math.max(
      0,
      Math.min(255, Math.round(source[i] * heightScale * heightGain))
    );
    textureData[i] = value;
  }
  noise.needsUpdate = true;
}

function clampToPowerOfTwo(value) {
  const exponent = Math.ceil(Math.log2(value));
  return Math.pow(2, exponent);
}
