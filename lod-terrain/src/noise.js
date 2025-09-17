import * as THREE from "three";
import { ImprovedNoise } from "./ImprovedNoise.js";

const WIDTH = 1024;
const SIZE = WIDTH * WIDTH;
const DEFAULT_SMOOTH_STRENGTH = 0.25;
const MAX_SMOOTH_PASSES = 12;

const baseHeight = new Float32Array(SIZE);
const workingA = new Float32Array(SIZE);
const workingB = new Float32Array(SIZE);
const textureData = new Uint8Array(SIZE);

let heightScale = 1.0;
let currentSmoothStrength = DEFAULT_SMOOTH_STRENGTH;
let heightGain = 1.0;

generateBaseHeight();

export const noise = new THREE.DataTexture(
  textureData,
  WIDTH,
  WIDTH,
  THREE.RedFormat,
  THREE.UnsignedByteType
);

noise.wrapS = THREE.MirroredRepeatWrapping;
noise.wrapT = THREE.MirroredRepeatWrapping;
noise.magFilter = THREE.LinearFilter;
noise.minFilter = THREE.LinearMipMapLinearFilter;
noise.generateMipmaps = true;
noise.needsUpdate = true;

applySmoothing(DEFAULT_SMOOTH_STRENGTH);

export function setNoiseSmoothing(strength) {
  const clamped = THREE.MathUtils.clamp(strength, 0, 1);
  if (Math.abs(clamped - currentSmoothStrength) < 1e-4) {
    return;
  }
  currentSmoothStrength = clamped;
  applySmoothing(clamped);
}

export const DEFAULT_NOISE_SMOOTHING = DEFAULT_SMOOTH_STRENGTH;

export function setNoiseHeightGain(gain) {
  const clamped = THREE.MathUtils.clamp(gain, 0, 4);
  if (Math.abs(clamped - heightGain) < 1e-4) {
    return;
  }
  heightGain = clamped;
  applySmoothing(currentSmoothStrength);
}

function generateBaseHeight() {
  const perlin = new ImprovedNoise();
  const z = Math.random() * 100;

  baseHeight.fill(0);

  let quality = 1;
  let maxValue = 0;

  for (let iteration = 0; iteration < 4; iteration++) {
    for (let i = 0; i < SIZE; i++) {
      const x = i % WIDTH;
      const y = Math.floor(i / WIDTH);
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
      const t = passes > 1 ? p / (passes - 1) : 1;
      const blend = THREE.MathUtils.lerp(0.15, 0.85, Math.max(clampedStrength, t));
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
  // Top and bottom edges remain untouched to preserve tiling seams
  for (let x = 0; x < WIDTH; x++) {
    dst[x] = src[x];
    dst[(WIDTH - 1) * WIDTH + x] = src[(WIDTH - 1) * WIDTH + x];
  }

  for (let y = 1; y < WIDTH - 1; y++) {
    const row = y * WIDTH;
    dst[row] = src[row];
    dst[row + WIDTH - 1] = src[row + WIDTH - 1];

    for (let x = 1; x < WIDTH - 1; x++) {
      const i = row + x;
      const center = src[i];
      const cross =
        src[i - 1] + src[i + 1] + src[i - WIDTH] + src[i + WIDTH];
      const diagonals =
        src[i - WIDTH - 1] +
        src[i - WIDTH + 1] +
        src[i + WIDTH - 1] +
        src[i + WIDTH + 1];
      const neighborAvg = (center * 4 + cross * 2 + diagonals) / 16;
      dst[i] = THREE.MathUtils.lerp(center, neighborAvg, blend);
    }
  }
}

function writeTextureData(source) {
  for (let i = 0; i < SIZE; i++) {
    const value = Math.max(
      0,
      Math.min(255, Math.round(source[i] * heightScale * heightGain))
    );
    textureData[i] = value;
  }
  noise.needsUpdate = true;
}
