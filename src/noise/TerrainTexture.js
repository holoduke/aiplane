import * as THREE from "three";
import { HeightmapGenerator } from "./HeightmapGenerator.js";

/**
 * TerrainTexture - Manages Three.js DataTexture for terrain heightmaps
 */
export class TerrainTexture {
  constructor(options = {}) {
    this.width = options.width || 256;
    this.height = options.height || this.width;

    // Create heightmap generator
    this.generator = new HeightmapGenerator({
      width: this.width,
      height: this.height,
      octaves: options.octaves,
      qualityMultiplier: options.qualityMultiplier,
      smoothStrength: options.smoothStrength
    });

    // Generate initial heightmap
    const heightmapData = this.generator.generate({
      seed: options.seed,
      heightGain: options.heightGain
    });

    // Create Three.js DataTexture
    this.texture = new THREE.DataTexture(
      heightmapData.data,
      this.width,
      this.height,
      THREE.RedFormat,
      THREE.UnsignedByteType
    );

    this.setupTextureParameters();
    this.texture.needsUpdate = true;

    console.log(`🎨 TerrainTexture created (${this.width}x${this.height})`);
  }

  /**
   * Configure texture parameters for terrain use
   */
  setupTextureParameters() {
    this.texture.wrapS = THREE.MirroredRepeatWrapping;
    this.texture.wrapT = THREE.MirroredRepeatWrapping;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.minFilter = THREE.LinearMipMapLinearFilter;
    this.texture.generateMipmaps = true;
  }

  /**
   * Regenerate the heightmap with new parameters
   */
  regenerate(options = {}) {
    console.log('🔄 Regenerating terrain texture...');

    const heightmapData = this.generator.generate(options);

    // Update texture data
    this.texture.image.data = heightmapData.data;
    this.texture.needsUpdate = true;

    return this;
  }

  /**
   * Resize the texture (creates new buffers)
   */
  resize(width, height = width) {
    if (width === this.width && height === this.height) {
      return this; // No change needed
    }

    console.log(`📏 Resizing terrain texture from ${this.width}x${this.height} to ${width}x${height}`);

    this.width = width;
    this.height = height;

    // Resize generator
    this.generator.resize(width, height);

    // Generate new heightmap
    const heightmapData = this.generator.generate();

    // Dispose old texture
    if (this.texture && typeof this.texture.dispose === 'function') {
      this.texture.dispose();
    }

    // Create new texture
    this.texture = new THREE.DataTexture(
      heightmapData.data,
      width,
      height,
      THREE.RedFormat,
      THREE.UnsignedByteType
    );

    this.setupTextureParameters();
    this.texture.needsUpdate = true;

    return this;
  }

  /**
   * Update smoothing strength
   */
  setSmoothing(strength) {
    this.generator.smoothStrength = THREE.MathUtils.clamp(strength, 0, 1);
    return this.regenerate();
  }

  /**
   * Update height gain multiplier
   */
  setHeightGain(gain) {
    this.generator.heightGain = THREE.MathUtils.clamp(gain, 0, 4);
    return this.regenerate();
  }

  /**
   * Sample height at world coordinates (for collision detection)
   */
  sampleHeight(x, y) {
    return this.generator.sampleHeight(x, y);
  }

  /**
   * Get the Three.js texture for use in materials
   */
  getTexture() {
    return this.texture;
  }

  /**
   * Get current configuration
   */
  getConfig() {
    return {
      width: this.width,
      height: this.height,
      ...this.generator.getConfig()
    };
  }

  /**
   * Get texture dimensions
   */
  getDimensions() {
    return {
      width: this.width,
      height: this.height
    };
  }

  /**
   * Clean up resources
   */
  dispose() {
    if (this.texture && typeof this.texture.dispose === 'function') {
      this.texture.dispose();
    }
    console.log('🗑️ TerrainTexture disposed');
  }
}