import * as THREE from "three";
import { TerrainTexture } from "./TerrainTexture.js";

/**
 * Noise System - Main API for terrain noise generation
 * Provides backward compatibility with the original noise.js interface
 */

// Configuration constants
export const DEFAULT_NOISE_SMOOTHING = 0.25;
export const DEFAULT_NOISE_WIDTH = 256;
export const MIN_NOISE_WIDTH = 64;
export const MAX_NOISE_WIDTH = 1024;

// Create global terrain texture instance
const terrainTexture = new TerrainTexture({
  width: DEFAULT_NOISE_WIDTH,
  height: DEFAULT_NOISE_WIDTH,
  smoothStrength: DEFAULT_NOISE_SMOOTHING
});

// Export the texture for backward compatibility
export const getNoise = () => terrainTexture.getTexture();

/**
 * Get current noise texture width
 */
export function getNoiseWidth() {
  return terrainTexture.width;
}

/**
 * Set noise texture width (creates new texture)
 */
export function setNoiseWidth(width) {
  const clamped = clampToPowerOfTwo(
    THREE.MathUtils.clamp(Math.round(width), MIN_NOISE_WIDTH, MAX_NOISE_WIDTH)
  );

  if (clamped === terrainTexture.width) {
    return clamped;
  }

  // Resize the terrain texture
  terrainTexture.resize(clamped);

  console.log(`🔧 Noise width set to: ${clamped}x${clamped}`);
  return clamped;
}

/**
 * Set noise smoothing strength
 */
export function setNoiseSmoothing(strength) {
  const clamped = THREE.MathUtils.clamp(strength, 0, 1);
  terrainTexture.setSmoothing(clamped);
  console.log(`🔧 Noise smoothing set to: ${clamped.toFixed(3)}`);
}

/**
 * Set noise height gain multiplier
 */
export function setNoiseHeightGain(gain) {
  const clamped = THREE.MathUtils.clamp(gain, 0, 4);
  terrainTexture.setHeightGain(clamped);
  console.log(`🔧 Noise height gain set to: ${clamped.toFixed(3)}`);
}

/**
 * Sample height at world coordinates (for collision detection)
 * Matches the shader sampling logic exactly
 */
export function sampleHeight(x, y) {
  return terrainTexture.sampleHeight(x, y);
}

/**
 * Regenerate the noise texture with current settings
 */
export function regenerateNoise(options = {}) {
  terrainTexture.regenerate(options);
  console.log('🔄 Noise texture regenerated');
}

/**
 * Get the terrain texture instance (for advanced usage)
 */
export function getTerrainTexture() {
  return terrainTexture;
}

/**
 * Utility: Clamp value to nearest power of two
 */
function clampToPowerOfTwo(value) {
  const exponent = Math.ceil(Math.log2(value));
  return Math.pow(2, exponent);
}

// Re-export classes for advanced users
export { PerlinNoise } from "./PerlinNoise.js";

console.log('🌄 Noise system initialized');