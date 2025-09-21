import * as THREE from "three";
import { PerlinNoise } from "./PerlinNoise.js";

/**
 * HeightmapGenerator - Handles procedural heightmap generation using Perlin noise
 */
export class HeightmapGenerator {
  constructor(options = {}) {
    // Configuration
    this.width = options.width || 256;
    this.height = options.height || this.width;

    // Generation parameters
    this.heightScale = 1.0;
    this.heightGain = 1.0;
    this.octaves = options.octaves || 4;
    this.qualityMultiplier = options.qualityMultiplier || 5;

    // Smoothing parameters
    this.smoothStrength = options.smoothStrength || 0.25;
    this.maxSmoothPasses = 120;

    // Working arrays
    this.size = this.width * this.height;
    this.baseHeight = new Float32Array(this.size);
    this.workingA = new Float32Array(this.size);
    this.workingB = new Float32Array(this.size);
    this.finalData = new Uint8Array(this.size);

    console.log(
      `🏔️ HeightmapGenerator initialized (${this.width}x${this.height})`
    );
  }

  /**
   * Generate a complete heightmap with the specified parameters
   */
  generate(options = {}) {
    const seed = options.seed || Math.random() * 100;
    const heightGain = options.heightGain ?? this.heightGain;
    const smoothStrength = options.smoothStrength ?? this.smoothStrength;

    console.log(`⛰️ Generating heightmap (seed: ${seed.toFixed(2)})`);

    // Generate base height using Perlin noise
    this.generateBaseHeight(seed);

    // Apply smoothing if requested
    if (smoothStrength > 0) {
      this.applySmoothing(smoothStrength);
    }

    // Convert to final texture data
    this.writeTextureData(heightGain);

    return {
      data: this.finalData.slice(), // Return a copy
      width: this.width,
      height: this.height,
      heightScale: this.heightScale,
      heightGain,
    };
  }

  /**
   * Generate base heightmap using multi-octave Perlin noise
   */
  generateBaseHeight(seed = Math.random() * 100) {
    const perlin = new PerlinNoise();

    this.baseHeight.fill(0);
    let maxValue = 0;
    let quality = 1;

    // Generate multiple octaves for detail
    for (let octave = 0; octave < this.octaves; octave++) {
      for (let i = 0; i < this.size; i++) {
        const x = i % this.width;
        const y = Math.floor(i / this.width);

        const value = Math.abs(perlin.noise(x / quality, y / quality, seed));
        this.baseHeight[i] += value * quality;

        if (this.baseHeight[i] > maxValue) {
          maxValue = this.baseHeight[i];
        }
      }
      quality *= this.qualityMultiplier;
    }

    // Calculate height scale for normalization
    this.heightScale = maxValue > 0 ? 255 / maxValue : 1;
  }

  /**
   * Apply smoothing to the heightmap
   */
  applySmoothing(strength) {
    const clampedStrength = THREE.MathUtils.clamp(strength, 0, 1);
    const passes = Math.round(clampedStrength * this.maxSmoothPasses);

    this.workingA.set(this.baseHeight);

    if (passes > 0 && clampedStrength > 0) {
      let src = this.workingA;
      let dst = this.workingB;

      for (let p = 0; p < passes; p++) {
        const t = passes > 1 ? p / Math.max(passes - 1, 1) : 1;
        const blend = THREE.MathUtils.lerp(
          0.15,
          0.85,
          Math.max(clampedStrength, t)
        );

        this.smoothPass(src, dst, blend);

        // Swap buffers
        const temp = src;
        src = dst;
        dst = temp;
      }

      // Ensure result is in workingA
      if (passes % 2 === 1) {
        this.workingA.set(this.workingB);
      }
    }
  }

  /**
   * Single smoothing pass using convolution
   */
  smoothPass(src, dst, blend) {
    // Copy edges (no smoothing)
    for (let x = 0; x < this.width; x++) {
      dst[x] = src[x]; // Top edge
      dst[(this.height - 1) * this.width + x] =
        src[(this.height - 1) * this.width + x]; // Bottom edge
    }

    // Process interior pixels
    for (let y = 1; y < this.height - 1; y++) {
      const row = y * this.width;
      dst[row] = src[row]; // Left edge
      dst[row + this.width - 1] = src[row + this.width - 1]; // Right edge

      for (let x = 1; x < this.width - 1; x++) {
        const i = row + x;
        const center = src[i];

        // Cross neighbors
        const cross =
          src[i - 1] + src[i + 1] + src[i - this.width] + src[i + this.width];

        // Diagonal neighbors
        const diagonals =
          src[i - this.width - 1] +
          src[i - this.width + 1] +
          src[i + this.width - 1] +
          src[i + this.width + 1];

        // Weighted average (center: 4, cross: 2, diagonal: 1)
        const neighborAvg = (center * 4 + cross * 2 + diagonals) / 16;

        dst[i] = THREE.MathUtils.lerp(center, neighborAvg, blend);
      }
    }
  }

  /**
   * Convert float heightmap to 8-bit texture data
   */
  writeTextureData(heightGain = 1.0) {
    for (let i = 0; i < this.size; i++) {
      const value = Math.max(
        0,
        Math.min(
          255,
          Math.round(this.workingA[i] * this.heightScale * heightGain)
        )
      );
      this.finalData[i] = value;
    }
  }

  /**
   * Sample height at a specific world coordinate (matches shader sampling)
   */
  sampleHeight(x, y, worldSize = 1024) {
    const st = { x: x / worldSize, y: y / worldSize };

    // Helper function for mirrored repeat wrapping
    const mirroredRepeat = (coord) => {
      const floorCoord = Math.floor(coord);
      let t = coord - floorCoord;
      if (floorCoord % 2 !== 0) {
        t = 1.0 - t;
      }
      return t;
    };

    // Sample the base texture
    const u = mirroredRepeat(st.x) * this.width;
    const v = mirroredRepeat(st.y) * this.height;
    const index = Math.min(
      this.size - 1,
      Math.max(0, Math.floor(v) * this.width + Math.floor(u))
    );
    let h = (this.finalData[index] / 255.0) * 1024.0;

    // Add detail layers (16x scale)
    const u16 = mirroredRepeat(st.x * 16.0) * this.width;
    const v16 = mirroredRepeat(st.y * 16.0) * this.height;
    const index16 = Math.min(
      this.size - 1,
      Math.max(0, Math.floor(v16) * this.width + Math.floor(u16))
    );
    h += (this.finalData[index16] / 255.0) * 64.0;

    // Add detail layer (256x scale)
    const u256 = mirroredRepeat(st.x * 256.0) * this.width;
    const v256 = mirroredRepeat(st.y * 256.0) * this.height;
    const index256 = Math.min(
      this.size - 1,
      Math.max(0, Math.floor(v256) * this.width + Math.floor(u256))
    );
    h += (this.finalData[index256] / 255.0) * 4.0;

    // Apply the same transformation as in shaders
    return (h * h) / 2000.0;
  }

  /**
   * Resize the generator (recreates internal buffers)
   */
  resize(width, height = width) {
    this.width = width;
    this.height = height;
    this.size = width * height;

    this.baseHeight = new Float32Array(this.size);
    this.workingA = new Float32Array(this.size);
    this.workingB = new Float32Array(this.size);
    this.finalData = new Uint8Array(this.size);

    console.log(`📏 HeightmapGenerator resized to ${width}x${height}`);
  }

  /**
   * Get current configuration
   */
  getConfig() {
    return {
      width: this.width,
      height: this.height,
      octaves: this.octaves,
      qualityMultiplier: this.qualityMultiplier,
      smoothStrength: this.smoothStrength,
      heightGain: this.heightGain,
    };
  }
}
