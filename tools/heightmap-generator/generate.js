#!/usr/bin/env node

import { PerlinNoise } from '../../src/noise/PerlinNoise.js';
import sharp from 'sharp';
import cliProgress from 'cli-progress';
import { Command } from 'commander';
import fs from 'fs/promises';
import path from 'path';

const program = new Command();

// Terrain region configurations
const TERRAIN_REGIONS = [
  {
    name: "Mountains",
    baseHeight: 0.8,
    roughness: 0.9,
    erosion: "thermal",
    seed: 1001,
    description: "High altitude peaks with sharp ridges"
  },
  {
    name: "Plains",
    baseHeight: 0.2,
    roughness: 0.3,
    erosion: "none",
    seed: 1002,
    description: "Flat grasslands with gentle rolling hills"
  },
  {
    name: "Canyons",
    baseHeight: 0.1,
    roughness: 0.7,
    erosion: "hydraulic",
    seed: 1003,
    description: "Deep carved valleys with steep walls"
  },
  {
    name: "Hills",
    baseHeight: 0.4,
    roughness: 0.5,
    erosion: "light",
    seed: 1004,
    description: "Moderate elevation with smooth slopes"
  },
  {
    name: "Valleys",
    baseHeight: 0.05,
    roughness: 0.4,
    erosion: "hydraulic",
    seed: 1005,
    description: "Low-lying areas with water drainage"
  },
  {
    name: "Plateaus",
    baseHeight: 0.6,
    roughness: 0.2,
    erosion: "thermal",
    seed: 1006,
    description: "Elevated flat regions with cliff edges"
  },
  {
    name: "Badlands",
    baseHeight: 0.3,
    roughness: 0.8,
    erosion: "thermal",
    seed: 1007,
    description: "Eroded wasteland with complex formations"
  },
  {
    name: "Highlands",
    baseHeight: 0.5,
    roughness: 0.6,
    erosion: "light",
    seed: 1008,
    description: "Elevated terrain with moderate variation"
  },
  {
    name: "Center",
    baseHeight: 0.35,
    roughness: 0.55,
    erosion: "light",
    seed: 1009,
    description: "Central mixed terrain with balanced features"
  }
];

class HeightmapGenerator {
  constructor(options = {}) {
    this.width = options.width || 256;
    this.height = options.height || 256;
    this.outputDir = options.outputDir || './output';
    this.generateImages = options.generateImages !== false;
    this.stitchSize = options.stitchSize || 32; // pixels for edge stitching
    this.debug = options.debug || false;
  }

  async generate() {
    console.log('🌄 Multi-Heightmap Terrain Generator');
    console.log(`Generating ${TERRAIN_REGIONS.length} heightmaps (${this.width}x${this.height})...`);

    // Ensure output directory exists
    await fs.mkdir(this.outputDir, { recursive: true });

    // Create progress bar
    const progressBar = new cliProgress.SingleBar({
      format: 'Progress |{bar}| {percentage}% | {value}/{total} | {region}',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });

    progressBar.start(TERRAIN_REGIONS.length, 0, { region: 'Starting...' });

    const heightmaps = [];
    const metadata = {
      version: "1.0",
      timestamp: new Date().toISOString(),
      gridSize: "3x3",
      heightmapSize: `${this.width}x${this.height}`,
      stitchSize: this.stitchSize,
      regions: []
    };

    // Generate base heightmaps
    for (let i = 0; i < TERRAIN_REGIONS.length; i++) {
      const region = TERRAIN_REGIONS[i];
      progressBar.update(i, { region: region.name });

      const heightmap = await this.generateRegionHeightmap(region);
      heightmaps.push({
        region,
        data: heightmap,
        index: i
      });

      metadata.regions.push({
        index: i,
        name: region.name,
        description: region.description,
        baseHeight: region.baseHeight,
        roughness: region.roughness,
        erosion: region.erosion,
        seed: region.seed
      });
    }

    // Apply edge stitching
    progressBar.update(TERRAIN_REGIONS.length, { region: 'Applying edge stitching...' });
    this.applyEdgeStitching(heightmaps);

    // Save heightmaps and generate images
    for (let i = 0; i < heightmaps.length; i++) {
      const { region, data } = heightmaps[i];

      // Save raw data
      await this.saveHeightmapData(data, region.name);

      // Generate preview image
      if (this.generateImages) {
        await this.generatePreviewImage(data, region.name, region);
      }
    }

    // Generate stitched grid overview image
    if (this.generateImages) {
      progressBar.update(TERRAIN_REGIONS.length, { region: 'Creating grid overview...' });
      await this.generateGridOverview(heightmaps);
    }

    // Save metadata
    await fs.writeFile(
      path.join(this.outputDir, 'metadata.json'),
      JSON.stringify(metadata, null, 2)
    );

    progressBar.stop();
    console.log(`✅ Generated ${TERRAIN_REGIONS.length} heightmaps successfully!`);
    console.log(`📁 Output directory: ${this.outputDir}`);

    if (this.generateImages) {
      console.log('🖼️ Preview images and grid overview generated for debugging');
    }
  }

  async generateRegionHeightmap(region) {
    const perlin = new PerlinNoise(region.seed);
    const data = new Float32Array(this.width * this.height);

    // Generate base height using multiple octaves
    let maxValue = 0;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const i = y * this.width + x;

        // Multi-octave noise generation (matching original system)
        let quality = 1;
        let height = 0;

        for (let octave = 0; octave < 4; octave++) {
          const value = Math.abs(perlin.noise(
            x / quality,
            y / quality,
            region.seed / 100
          ));
          height += value * quality * region.roughness;
          quality *= 5;
        }

        // Apply base height offset
        height = height * region.baseHeight + region.baseHeight * 0.5;

        data[i] = height;
        if (height > maxValue) maxValue = height;
      }
    }

    // Normalize to 0-1 range
    if (maxValue > 0) {
      for (let i = 0; i < data.length; i++) {
        data[i] /= maxValue;
      }
    }

    // Apply erosion based on region type
    let processedData = this.applyErosion(data, region.erosion);

    // Apply smoothing if specified
    if (region.roughness < 0.5) {
      const smoothPasses = Math.floor((0.5 - region.roughness) * 10);
      processedData = PerlinNoise.smoothHeightmap(
        processedData,
        this.width,
        this.height,
        smoothPasses
      );
    }

    return processedData;
  }

  applyErosion(heightmap, erosionType) {
    switch (erosionType) {
      case 'thermal':
        return PerlinNoise.thermalErosion(
          heightmap,
          this.width,
          this.height,
          30,    // iterations
          0.02   // talus angle
        );

      case 'hydraulic':
        return PerlinNoise.hydraulicErosion(
          heightmap,
          this.width,
          this.height,
          5000,  // droplets
          0.1,   // inertia
          4,     // capacity
          0.3,   // deposition
          0.3    // erosion rate
        );

      case 'light':
        return PerlinNoise.thermalErosion(
          heightmap,
          this.width,
          this.height,
          10,    // fewer iterations
          0.01   // lower talus
        );

      default:
        return heightmap;
    }
  }

  applyEdgeStitching(heightmaps) {
    // Grid layout:
    // [0] [1] [2]
    // [3] [8] [4]
    // [5] [6] [7]

    const gridLayout = [
      { index: 0, x: 0, y: 0 }, // NW
      { index: 1, x: 1, y: 0 }, // N
      { index: 2, x: 2, y: 0 }, // NE
      { index: 3, x: 0, y: 1 }, // W
      { index: 8, x: 1, y: 1 }, // CENTER
      { index: 4, x: 2, y: 1 }, // E
      { index: 5, x: 0, y: 2 }, // SW
      { index: 6, x: 1, y: 2 }, // S
      { index: 7, x: 2, y: 2 }  // SE
    ];

    // Apply edge constraints between adjacent regions
    for (let i = 0; i < gridLayout.length; i++) {
      const current = gridLayout[i];
      const currentData = heightmaps[current.index].data;

      // Check each neighbor
      for (let j = 0; j < gridLayout.length; j++) {
        if (i === j) continue;

        const neighbor = gridLayout[j];
        const neighborData = heightmaps[neighbor.index].data;

        // Calculate if they are adjacent
        const dx = Math.abs(current.x - neighbor.x);
        const dy = Math.abs(current.y - neighbor.y);

        if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
          this.stitchEdge(currentData, neighborData, current, neighbor);
        }
      }
    }
  }

  stitchEdge(data1, data2, pos1, pos2) {
    const stitchSize = this.stitchSize;

    // Determine which edge to stitch
    if (pos1.x < pos2.x) {
      // data1 is left of data2, stitch right edge of data1 with left edge of data2
      this.stitchVerticalEdge(data1, data2, true, false, stitchSize);
    } else if (pos1.x > pos2.x) {
      // data1 is right of data2, stitch left edge of data1 with right edge of data2
      this.stitchVerticalEdge(data1, data2, false, true, stitchSize);
    } else if (pos1.y < pos2.y) {
      // data1 is above data2, stitch bottom edge of data1 with top edge of data2
      this.stitchHorizontalEdge(data1, data2, true, false, stitchSize);
    } else if (pos1.y > pos2.y) {
      // data1 is below data2, stitch top edge of data1 with bottom edge of data2
      this.stitchHorizontalEdge(data1, data2, false, true, stitchSize);
    }
  }

  stitchVerticalEdge(data1, data2, data1Right, data2Left, stitchSize) {
    for (let y = 0; y < this.height; y++) {
      // Get edge values
      const edge1X = data1Right ? this.width - 1 : 0;
      const edge2X = data2Left ? 0 : this.width - 1;

      const val1 = data1[y * this.width + edge1X];
      const val2 = data2[y * this.width + edge2X];
      const avgHeight = (val1 + val2) * 0.5;

      // Apply blending in stitch zone
      for (let offset = 0; offset < stitchSize; offset++) {
        const t = offset / (stitchSize - 1);

        if (data1Right) {
          const x1 = this.width - 1 - offset;
          if (x1 >= 0) {
            const current = data1[y * this.width + x1];
            data1[y * this.width + x1] = current * t + avgHeight * (1 - t);
          }
        } else {
          const x1 = offset;
          if (x1 < this.width) {
            const current = data1[y * this.width + x1];
            data1[y * this.width + x1] = current * t + avgHeight * (1 - t);
          }
        }

        if (data2Left) {
          const x2 = offset;
          if (x2 < this.width) {
            const current = data2[y * this.width + x2];
            data2[y * this.width + x2] = current * t + avgHeight * (1 - t);
          }
        } else {
          const x2 = this.width - 1 - offset;
          if (x2 >= 0) {
            const current = data2[y * this.width + x2];
            data2[y * this.width + x2] = current * t + avgHeight * (1 - t);
          }
        }
      }
    }
  }

  stitchHorizontalEdge(data1, data2, data1Bottom, data2Top, stitchSize) {
    for (let x = 0; x < this.width; x++) {
      // Get edge values
      const edge1Y = data1Bottom ? this.height - 1 : 0;
      const edge2Y = data2Top ? 0 : this.height - 1;

      const val1 = data1[edge1Y * this.width + x];
      const val2 = data2[edge2Y * this.width + x];
      const avgHeight = (val1 + val2) * 0.5;

      // Apply blending in stitch zone
      for (let offset = 0; offset < stitchSize; offset++) {
        const t = offset / (stitchSize - 1);

        if (data1Bottom) {
          const y1 = this.height - 1 - offset;
          if (y1 >= 0) {
            const current = data1[y1 * this.width + x];
            data1[y1 * this.width + x] = current * t + avgHeight * (1 - t);
          }
        } else {
          const y1 = offset;
          if (y1 < this.height) {
            const current = data1[y1 * this.width + x];
            data1[y1 * this.width + x] = current * t + avgHeight * (1 - t);
          }
        }

        if (data2Top) {
          const y2 = offset;
          if (y2 < this.height) {
            const current = data2[y2 * this.width + x];
            data2[y2 * this.width + x] = current * t + avgHeight * (1 - t);
          }
        } else {
          const y2 = this.height - 1 - offset;
          if (y2 >= 0) {
            const current = data2[y2 * this.width + x];
            data2[y2 * this.width + x] = current * t + avgHeight * (1 - t);
          }
        }
      }
    }
  }

  async saveHeightmapData(data, regionName) {
    // Convert to Uint8Array (0-255 range) for compatibility with Three.js
    const uint8Data = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      uint8Data[i] = Math.round(Math.max(0, Math.min(255, data[i] * 255)));
    }

    const filename = path.join(this.outputDir, `heightmap_${regionName.toLowerCase()}.bin`);
    await fs.writeFile(filename, uint8Data);

    if (this.debug) {
      console.log(`💾 Saved heightmap: ${filename}`);
    }
  }

  async generatePreviewImage(data, regionName, region) {
    // Create grayscale image data
    const imageData = new Uint8Array(this.width * this.height * 3); // RGB

    for (let i = 0; i < data.length; i++) {
      const value = Math.round(data[i] * 255);
      const baseIdx = i * 3;

      // Apply color coding based on terrain type
      const color = this.getTerrainColor(data[i], region);
      imageData[baseIdx] = color.r;
      imageData[baseIdx + 1] = color.g;
      imageData[baseIdx + 2] = color.b;
    }

    // Generate preview image
    const filename = path.join(this.outputDir, `preview_${regionName.toLowerCase()}.png`);
    await sharp(imageData, {
      raw: {
        width: this.width,
        height: this.height,
        channels: 3
      }
    })
    .png()
    .toFile(filename);

    if (this.debug) {
      console.log(`🖼️ Generated preview: ${filename}`);
    }
  }

  getTerrainColor(height, region) {
    // Color coding based on terrain type and height
    const h = Math.max(0, Math.min(1, height));

    switch (region.name.toLowerCase()) {
      case 'mountains':
        return {
          r: Math.round(120 + h * 100),
          g: Math.round(120 + h * 100),
          b: Math.round(140 + h * 115)
        };
      case 'plains':
        return {
          r: Math.round(100 + h * 50),
          g: Math.round(150 + h * 105),
          b: Math.round(80 + h * 40)
        };
      case 'canyons':
        return {
          r: Math.round(180 + h * 75),
          g: Math.round(120 + h * 80),
          b: Math.round(80 + h * 50)
        };
      default:
        // Default grayscale
        const gray = Math.round(h * 255);
        return { r: gray, g: gray, b: gray };
    }
  }

  async generateGridOverview(heightmaps) {
    // Grid layout: 3x3 with 9 regions (including center)
    // [0] [1] [2]
    // [3] [8] [4]
    // [5] [6] [7]

    const gridLayout = [
      { index: 0, x: 0, y: 0, name: 'Mountains' },    // NW
      { index: 1, x: 1, y: 0, name: 'Plains' },       // N
      { index: 2, x: 2, y: 0, name: 'Canyons' },      // NE
      { index: 3, x: 0, y: 1, name: 'Hills' },        // W
      { index: 8, x: 1, y: 1, name: 'Center' },       // CENTER
      { index: 4, x: 2, y: 1, name: 'Valleys' },      // E
      { index: 5, x: 0, y: 2, name: 'Plateaus' },     // SW
      { index: 6, x: 1, y: 2, name: 'Badlands' },     // S
      { index: 7, x: 2, y: 2, name: 'Highlands' }     // SE
    ];

    const gridWidth = 3;
    const gridHeight = 3;
    const totalWidth = gridWidth * this.width;
    const totalHeight = gridHeight * this.height;

    // Create combined image data
    const imageData = new Uint8Array(totalWidth * totalHeight * 3);

    // Fill with black (center will remain black)
    imageData.fill(0);

    for (const cell of gridLayout) {
      const heightmap = heightmaps.find(h => h.region.name === cell.name);
      if (!heightmap) continue;

      const startX = cell.x * this.width;
      const startY = cell.y * this.height;

      // Copy heightmap data to grid position
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const sourceIdx = y * this.width + x;
          const targetX = startX + x;
          const targetY = startY + y;
          const targetIdx = (targetY * totalWidth + targetX) * 3;

          const height = heightmap.data[sourceIdx];
          // Convert to grayscale (0-255) for consistent heightmap visualization
          const gray = Math.round(Math.max(0, Math.min(255, height * 255)));

          imageData[targetIdx] = gray;
          imageData[targetIdx + 1] = gray;
          imageData[targetIdx + 2] = gray;
        }
      }
    }

    // Add labels and borders for better visualization
    await this.addGridLabelsAndBorders(imageData, totalWidth, totalHeight, gridLayout);

    // Save the grid overview image
    const filename = path.join(this.outputDir, 'grid_overview.png');
    await sharp(imageData, {
      raw: {
        width: totalWidth,
        height: totalHeight,
        channels: 3
      }
    })
    .png()
    .toFile(filename);

    // Also save as raw grayscale heightmap data for use in game
    await this.saveGridHeightmapData(imageData, totalWidth, totalHeight);

    if (this.debug) {
      console.log(`🗺️ Generated grid overview: ${filename}`);
    }
  }

  async addGridLabelsAndBorders(imageData, totalWidth, totalHeight, gridLayout) {
    // Add simple borders between grid cells
    const borderColor = { r: 255, g: 255, b: 255 }; // White borders

    // Vertical borders
    for (let x = this.width; x < totalWidth; x += this.width) {
      for (let y = 0; y < totalHeight; y++) {
        const idx = (y * totalWidth + x) * 3;
        if (idx < imageData.length - 2) {
          imageData[idx] = borderColor.r;
          imageData[idx + 1] = borderColor.g;
          imageData[idx + 2] = borderColor.b;
        }
      }
    }

    // Horizontal borders
    for (let y = this.height; y < totalHeight; y += this.height) {
      for (let x = 0; x < totalWidth; x++) {
        const idx = (y * totalWidth + x) * 3;
        if (idx < imageData.length - 2) {
          imageData[idx] = borderColor.r;
          imageData[idx + 1] = borderColor.g;
          imageData[idx + 2] = borderColor.b;
        }
      }
    }

    // Add a thicker border around the entire grid
    const thickBorderSize = 2;
    for (let i = 0; i < thickBorderSize; i++) {
      // Top and bottom borders
      for (let x = 0; x < totalWidth; x++) {
        // Top
        const topIdx = (i * totalWidth + x) * 3;
        if (topIdx < imageData.length - 2) {
          imageData[topIdx] = borderColor.r;
          imageData[topIdx + 1] = borderColor.g;
          imageData[topIdx + 2] = borderColor.b;
        }

        // Bottom
        const bottomIdx = ((totalHeight - 1 - i) * totalWidth + x) * 3;
        if (bottomIdx < imageData.length - 2) {
          imageData[bottomIdx] = borderColor.r;
          imageData[bottomIdx + 1] = borderColor.g;
          imageData[bottomIdx + 2] = borderColor.b;
        }
      }

      // Left and right borders
      for (let y = 0; y < totalHeight; y++) {
        // Left
        const leftIdx = (y * totalWidth + i) * 3;
        if (leftIdx < imageData.length - 2) {
          imageData[leftIdx] = borderColor.r;
          imageData[leftIdx + 1] = borderColor.g;
          imageData[leftIdx + 2] = borderColor.b;
        }

        // Right
        const rightIdx = (y * totalWidth + (totalWidth - 1 - i)) * 3;
        if (rightIdx < imageData.length - 2) {
          imageData[rightIdx] = borderColor.r;
          imageData[rightIdx + 1] = borderColor.g;
          imageData[rightIdx + 2] = borderColor.b;
        }
      }
    }
  }

  async saveGridHeightmapData(imageData, totalWidth, totalHeight) {
    // Extract single channel grayscale data from RGB
    const heightmapData = new Uint8Array(totalWidth * totalHeight);

    for (let i = 0; i < heightmapData.length; i++) {
      // Extract R channel (since we made all RGB values the same)
      heightmapData[i] = imageData[i * 3];
    }

    const filename = path.join(this.outputDir, 'heightmap_grid_combined.bin');
    await fs.writeFile(filename, heightmapData);

    if (this.debug) {
      console.log(`💾 Saved combined grid heightmap: ${filename} (${totalWidth}x${totalHeight})`);
    }
  }
}

// CLI setup
program
  .name('heightmap-generator')
  .description('Generate multi-heightmap terrain for fighter jet game')
  .version('1.0.0');

program
  .option('-w, --width <number>', 'heightmap width', '256')
  .option('-h, --height <number>', 'heightmap height', '256')
  .option('-o, --output <dir>', 'output directory', './output')
  .option('--no-images', 'skip generating preview images')
  .option('--stitch-size <number>', 'edge stitching size in pixels', '32')
  .option('--debug', 'enable debug output')
  .action(async (options) => {
    try {
      const generator = new HeightmapGenerator({
        width: parseInt(options.width),
        height: parseInt(options.height),
        outputDir: options.output,
        generateImages: options.images,
        stitchSize: parseInt(options.stitchSize),
        debug: options.debug
      });

      await generator.generate();
    } catch (error) {
      console.error('❌ Error generating heightmaps:', error.message);
      if (options.debug) {
        console.error(error.stack);
      }
      process.exit(1);
    }
  });

program.parse();