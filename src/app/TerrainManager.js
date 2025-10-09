import * as THREE from "three";
import { Terrain } from "../terrain.js";
import { PerlinNoise } from "../noise/PerlinNoise.js";
import {
  getNoise,
  setNoiseSmoothing,
  setNoiseHeightGain,
  regenerateNoise,
  getTerrainTexture
} from "../noise/index.js";
import { scene } from "../scene.js";

/**
 * Manages terrain creation, modification, and effects
 */
export class TerrainManager {
  constructor(heightmapManager) {
    this.heightmapManager = heightmapManager;
    this.terrain = null;
    this.generatedHeightTexture = null;
    this.config = null; // Will be set by the app

    // Terrain settings
    this.heightGain = 1.0;
    this.heightSmoothStrength = 0.0;
    this.detailStrength = 1.0;
  }

  /**
   * Create terrain using generated heightmap if available, fallback to procedural
   */
  createTerrain(config) {
    // Store config reference for later use
    if (config) {
      this.config = config;
    }
    // Clean up existing terrain
    if (this.terrain) {
      const geometries = [
        this.terrain.geometry,
        ...(this.terrain.children || []).map(child => child.geometry)
      ].filter(Boolean);

      geometries.forEach(geo => geo?.dispose?.());
      scene.remove(this.terrain);
    }

    // Use generated heightmap if available, fallback to procedural noise
    const heightTexture = this.generatedHeightTexture || getNoise();

    if (this.generatedHeightTexture) {
      console.log("🎯 Creating terrain with generated heightmap (.bin file)");
    } else {
      console.log("🔄 Creating terrain with procedural noise (fallback)");
    }

    this.terrain = new Terrain(
      heightTexture,
      10000,
      config.terrainLevels,
      config.terrainResolution,
      {
        enableShadows: config.shadowsEnabled,
        defaultShaderIndex: config.DEFAULT_TERRAIN_INDEX,
      }
    );
    scene.add(this.terrain);

    // Apply current terrain settings
    this.terrain.updateDetailStrength(this.detailStrength);
    this.terrain.updateHeightMultiplier(this.heightGain);
    this.terrain.updateHeightSmoothing(this.heightSmoothStrength);

    console.log(`🌍 Terrain created with resolution ${config.terrainResolution} and ${config.terrainLevels} levels`);

    return this.terrain;
  }

  /**
   * Load heightmap from binary file
   */
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

  /**
   * Create THREE.js texture from binary heightmap file
   */
  async createTextureFromBin(path) {
    const url = path.startsWith("/") ? path : `/${path}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    if (uint8Array.length !== 65536) { // 256x256
      throw new Error(`Invalid heightmap size: ${uint8Array.length} bytes (expected 65536)`);
    }

    const texture = new THREE.DataTexture(
      uint8Array,
      256, 256,
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

  /**
   * Generate procedural terrain and replace current terrain
   */
  generateProceduralTerrain(config, noiseResolution) {
    // Clear generated heightmap to force procedural generation
    this.generatedHeightTexture = null;

    // Clear stored heightmaps for fresh effects
    this.heightmapManager.clearHeightmaps();

    // Resize terrain texture to current noise resolution
    const terrainTexture = getTerrainTexture();
    terrainTexture.resize(noiseResolution, noiseResolution);

    // Regenerate noise with current settings including height gain
    regenerateNoise({
      heightGain: this.heightGain,
      smoothing: this.heightSmoothStrength,
    });

    // Recreate terrain with procedural noise
    const newTerrain = this.createTerrain(config);

    // Initialize master heightmap from the newly created procedural terrain
    this.heightmapManager.initializeMasterHeightmap('procedural');

    console.log(`🌋 Generated new procedural terrain (${noiseResolution}x${noiseResolution})`);
    return newTerrain;
  }

  /**
   * Load default heightmap from .bin file
   */
  async loadDefaultHeightmap(config) {
    try {
      // Reload the generated heightmap
      await this.loadGeneratedHeightmap();

      // Recreate terrain with the default heightmap
      const newTerrain = this.createTerrain(config);

      console.log("🗺️ Loaded default heightmap (.bin file)");
      return newTerrain;
    } catch (error) {
      console.error("❌ Failed to load default heightmap:", error);
      throw error;
    }
  }

  /**
   * Apply terrain processing effects
   */
  applyTerrainEffect(effectType, parameters = {}) {
    // Only works with procedural terrain
    if (this.generatedHeightTexture) {
      console.log('⚠️ Terrain effects only work with procedural terrain. Generate terrain first.');
      return false;
    }

    // Initialize base & master heightmap if not already done
    if (!this.heightmapManager.isInitialized()) {
      this.heightmapManager.initializeMasterHeightmap('procedural');
    }

    // Apply the effect using reference-based rebuilding
    const success = this.heightmapManager.applyHeightmapEffect(effectType, parameters);
    if (!success) {
      return false;
    }

    // Update terrain display from master heightmap
    this.updateTerrainFromMaster();

    console.log(`✅ Applied ${effectType} effect to terrain`);
    return true;
  }

  /**
   * Update terrain from master heightmap with current settings
   */
  updateTerrainFromMaster() {
    if (!this.heightmapManager.masterHeightmap) {
      console.warn('⚠️ No master heightmap available');
      return;
    }

    // Apply current settings (height multiplier, smoothing) to master data for display
    const displayHeightmap = PerlinNoise.applyTerrainSettings(
      this.heightmapManager.masterHeightmap,
      this.heightGain,
      this.heightSmoothStrength
    );

    const { width, height } = this.heightmapManager.getDimensions();

    // Update terrain texture
    this.heightmapManager.updateTerrainTextureFromHeightmap(displayHeightmap, width, height);

    // Recreate terrain using stored config
    if (this.config) {
      this.createTerrain(this.config);
    }

    console.log('🔄 Updated terrain from master heightmap with current settings');
  }

  /**
   * Set terrain height multiplier
   */
  setHeightGain(multiplier) {
    const clamped = Math.max(0, Math.min(5, multiplier));
    if (this.heightGain === clamped) return;

    this.heightGain = clamped;
    setNoiseHeightGain(clamped);

    // Apply to terrain if it exists
    this.terrain?.updateHeightMultiplier(clamped);

    console.log(`⛰️ Height gain set to ${clamped}x`);
  }

  /**
   * Set terrain smoothing strength
   */
  setTerrainSmoothing(strength) {
    const clamped = Math.max(0, Math.min(1, strength));
    if (this.heightSmoothStrength === clamped) return;

    this.heightSmoothStrength = clamped;
    setNoiseSmoothing(clamped);

    // Apply to terrain if it exists
    this.terrain?.updateHeightSmoothing(clamped);

    console.log(`🏔️ Terrain smoothing set to ${Math.round(clamped * 100)}%`);
  }

  /**
   * Set terrain detail strength
   */
  setDetailStrength(strength) {
    const clamped = Math.max(0, Math.min(2, strength));
    if (this.detailStrength === clamped) return;

    this.detailStrength = clamped;

    // Apply to terrain if it exists
    this.terrain?.updateDetailStrength(clamped);

    console.log(`🔍 Detail strength set to ${clamped.toFixed(2)}x`);
  }

  /**
   * Get current terrain instance
   */
  getTerrain() {
    return this.terrain;
  }

  /**
   * Get current height texture (generated or procedural)
   */
  getHeightTexture() {
    return this.generatedHeightTexture || getNoise();
  }

  /**
   * Check if using generated heightmap
   */
  isUsingGeneratedHeightmap() {
    return !!this.generatedHeightTexture;
  }

  /**
   * Get terrain settings
   */
  getSettings() {
    return {
      heightGain: this.heightGain,
      heightSmoothStrength: this.heightSmoothStrength,
      detailStrength: this.detailStrength
    };
  }

  /**
   * Clean up resources
   */
  dispose() {
    if (this.terrain) {
      const geometries = [
        this.terrain.geometry,
        ...(this.terrain.children || []).map(child => child.geometry)
      ].filter(Boolean);

      geometries.forEach(geo => geo?.dispose?.());
      scene.remove(this.terrain);
      this.terrain = null;
    }

    if (this.generatedHeightTexture) {
      this.generatedHeightTexture.dispose();
      this.generatedHeightTexture = null;
    }
  }
}