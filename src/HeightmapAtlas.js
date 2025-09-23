import * as THREE from "three";

/**
 * HeightmapAtlas - Loads and manages a 9x9 grid of heightmaps as a single texture atlas
 * Uses generated .bin files with edge repetition for seamless infinite terrain
 * Layout: 9x9 grid with terrain types arranged for variety and repetition
 */
export class HeightmapAtlas {
  constructor() {
    this.atlasTexture = null;
    this.heightmapSize = 256; // Each heightmap is 256x256 (from .bin files)
    this.gridSize = 9;        // 9x9 grid for variety and edge repetition
    this.totalSize = this.heightmapSize * this.gridSize; // 2304x2304
    this.isLoaded = false;
  }

  /**
   * Create 9x9 atlas from generated .bin heightmap files with edge repetition
   */
  async createFromFiles() {
    try {
      console.log('🗺️ Loading 9x9 heightmap atlas from .bin files...');

      // Available terrain types from generated .bin files
      const terrainTypes = [
        'badlands', 'canyons', 'center', 'highlands', 'hills',
        'mountains', 'plains', 'plateaus', 'valleys'
      ];

      // Create 9x9 layout with edge repetition for seamless infinite terrain
      // Pattern ensures edges match when tiled infinitely
      const atlasLayout = [
        // Row 0
        ['mountains', 'highlands', 'plateaus', 'mountains', 'highlands', 'plateaus', 'mountains', 'highlands', 'plateaus'],
        // Row 1
        ['valleys', 'center', 'hills', 'valleys', 'center', 'hills', 'valleys', 'center', 'hills'],
        // Row 2
        ['badlands', 'plains', 'canyons', 'badlands', 'plains', 'canyons', 'badlands', 'plains', 'canyons'],
        // Row 3 - repeat pattern
        ['mountains', 'highlands', 'plateaus', 'mountains', 'highlands', 'plateaus', 'mountains', 'highlands', 'plateaus'],
        ['valleys', 'center', 'hills', 'valleys', 'center', 'hills', 'valleys', 'center', 'hills'],
        ['badlands', 'plains', 'canyons', 'badlands', 'plains', 'canyons', 'badlands', 'plains', 'canyons'],
        // Row 6 - repeat again for 9x9
        ['mountains', 'highlands', 'plateaus', 'mountains', 'highlands', 'plateaus', 'mountains', 'highlands', 'plateaus'],
        ['valleys', 'center', 'hills', 'valleys', 'center', 'hills', 'valleys', 'center', 'hills'],
        ['badlands', 'plains', 'canyons', 'badlands', 'plains', 'canyons', 'badlands', 'plains', 'canyons']
      ];

      console.log('📂 Loading terrain files...');

      // Load all unique terrain .bin files
      const terrainData = {};
      for (const terrainType of terrainTypes) {
        const data = await this.loadBinaryHeightmap(`tools/heightmap-generator/output/heightmap_${terrainType}.bin`);
        terrainData[terrainType] = data;
        console.log(`✅ Loaded ${terrainType}: ${data.length} bytes`);
      }

      // Create atlas data buffer
      const atlasData = new Uint8Array(this.totalSize * this.totalSize);

      // Fill the 9x9 atlas
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          const terrainType = atlasLayout[row][col];
          const terrainBytes = terrainData[terrainType];

          this.copyBinaryToAtlas(
            terrainBytes,
            atlasData,
            col * this.heightmapSize,
            row * this.heightmapSize
          );
        }
      }

      // Create Three.js texture
      this.atlasTexture = new THREE.DataTexture(
        atlasData,
        this.totalSize,
        this.totalSize,
        THREE.RedFormat,
        THREE.UnsignedByteType
      );

      this.setupTextureParameters();
      this.isLoaded = true;

      console.log(`✅ 9x9 Heightmap atlas created (${this.totalSize}x${this.totalSize}) with edge repetition`);
      return this.atlasTexture;

    } catch (error) {
      console.error('❌ Failed to create heightmap atlas:', error);
      throw error;
    }
  }

  /**
   * Load binary heightmap file (.bin)
   */
  async loadBinaryHeightmap(path) {
    try {
      const url = path.startsWith('/') ? path : `/${path}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      console.log(`✅ Loaded binary heightmap: ${path} (${uint8Array.length} bytes)`);
      return uint8Array;

    } catch (error) {
      console.error(`❌ Failed to load binary heightmap: ${path}`, error);
      throw error;
    }
  }

  /**
   * Copy binary heightmap data into atlas buffer
   */
  copyBinaryToAtlas(binaryData, atlasData, offsetX, offsetY) {
    // Binary data is 256x256 single-channel heightmap
    for (let y = 0; y < this.heightmapSize; y++) {
      for (let x = 0; x < this.heightmapSize; x++) {
        const binaryIndex = y * this.heightmapSize + x;
        const atlasIndex = ((offsetY + y) * this.totalSize) + (offsetX + x);

        atlasData[atlasIndex] = binaryData[binaryIndex];
      }
    }
  }



  /**
   * Setup texture parameters
   */
  setupTextureParameters() {
    if (!this.atlasTexture) return;

    this.atlasTexture.wrapS = THREE.RepeatWrapping;
    this.atlasTexture.wrapT = THREE.RepeatWrapping;
    this.atlasTexture.magFilter = THREE.LinearFilter;
    this.atlasTexture.minFilter = THREE.LinearMipMapLinearFilter;
    this.atlasTexture.generateMipmaps = true;
    this.atlasTexture.needsUpdate = true;
  }

  /**
   * Get the atlas texture
   */
  getTexture() {
    return this.atlasTexture;
  }

  /**
   * Dispose resources
   */
  dispose() {
    if (this.atlasTexture) {
      this.atlasTexture.dispose();
      this.atlasTexture = null;
    }
    this.isLoaded = false;
  }
}