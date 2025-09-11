#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

class AdvancedHeightmapGenerator {
  constructor(width = 5000, height = 5000) {
    this.width = width;
    this.height = height;
    this.heightData = new Float32Array(width * height);
    
    // Generation parameters
    this.seed = Math.random() * 1000000;
    this.maxHeight = 700; // Maximum elevation in meters
    this.seaLevel = 0.15; // 15% of max height
    this.mountainThreshold = 0.7; // 70% for mountains
  }

  // Simple noise function (replace with more sophisticated noise if needed)
  noise(x, y, seed = 0) {
    let n = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1; // Range: -1 to 1
  }

  // Octave noise for fractal patterns
  octaveNoise(x, y, octaves = 6, persistence = 0.5, scale = 0.01) {
    let value = 0;
    let amplitude = 1;
    let frequency = scale;
    let maxAmplitude = 0;

    for (let i = 0; i < octaves; i++) {
      value += this.noise(x * frequency, y * frequency, this.seed + i) * amplitude;
      maxAmplitude += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }

    return value / maxAmplitude; // Normalize to -1 to 1
  }

  // Ridge noise for mountain ridges
  ridgeNoise(x, y, octaves = 4, scale = 0.005) {
    let value = 0;
    let amplitude = 1;
    let frequency = scale;

    for (let i = 0; i < octaves; i++) {
      let sample = Math.abs(this.octaveNoise(x, y, 1, 0.5, frequency));
      sample = 1 - sample; // Invert for ridges
      sample = sample * sample; // Square for sharper ridges
      value += sample * amplitude;
      amplitude *= 0.5;
      frequency *= 2;
    }

    return Math.min(value, 1);
  }

  // Voronoi-based features for varied terrain
  voronoiNoise(x, y, cellSize = 200) {
    const cellX = Math.floor(x / cellSize);
    const cellY = Math.floor(y / cellSize);
    
    let minDist = Infinity;
    let secondMinDist = Infinity;
    
    // Check 3x3 grid of cells
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const seedX = cellX + dx;
        const seedY = cellY + dy;
        
        // Generate point in cell
        const pointX = (seedX + this.noise(seedX * 127.1, seedY * 311.7, this.seed)) * cellSize;
        const pointY = (seedY + this.noise(seedX * 269.5, seedY * 183.3, this.seed)) * cellSize;
        
        const dist = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);
        
        if (dist < minDist) {
          secondMinDist = minDist;
          minDist = dist;
        } else if (dist < secondMinDist) {
          secondMinDist = dist;
        }
      }
    }
    
    // Return edge-based value (for plateaus and valleys)
    return Math.min((secondMinDist - minDist) / cellSize, 1);
  }

  // Generate base terrain using multiple techniques
  generateTerrain() {
    console.log('🏔️ Generating advanced 5000x5000 heightmap...');
    console.log(`📍 Using seed: ${this.seed.toFixed(0)}`);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const index = y * this.width + x;
        
        // Normalize coordinates
        const nx = x / this.width;
        const ny = y / this.height;
        
        // 1. Base continent shape (large-scale elevation)
        const continentScale = 0.3;
        const continent = this.octaveNoise(x, y, 3, 0.6, continentScale / this.width);
        
        // 2. Mountain ranges (ridge noise)
        const mountains = this.ridgeNoise(x, y, 6, 2.0 / this.width);
        
        // 3. Rolling hills (medium-scale noise)
        const hills = this.octaveNoise(x, y, 5, 0.5, 3.0 / this.width);
        
        // 4. Fine detail (small-scale noise)
        const detail = this.octaveNoise(x, y, 8, 0.3, 10.0 / this.width);
        
        // 5. Voronoi features for variety
        const voronoi = this.voronoiNoise(x, y, 300);
        
        // 6. Erosion simulation (simplified)
        const distanceFromCenter = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
        const erosion = Math.max(0, 1 - distanceFromCenter * 2.5); // More erosion toward edges
        
        // Combine all layers
        let height = 0;
        
        // Base elevation from continent shape
        height += (continent * 0.5 + 0.5) * 0.4; // 0-0.4 range
        
        // Add mountains where continent is high
        const mountainMask = Math.max(0, (continent + 0.3)) * 2;
        height += mountains * mountainMask * 0.4; // 0-0.4 range
        
        // Add rolling hills
        height += (hills * 0.5 + 0.5) * 0.15; // 0-0.15 range
        
        // Add fine detail
        height += (detail * 0.5 + 0.5) * 0.05; // 0-0.05 range
        
        // Add voronoi variation
        height += voronoi * 0.1; // 0-0.1 range
        
        // Apply erosion
        height *= erosion;
        
        // Ensure we're in 0-1 range
        height = Math.max(0, Math.min(1, height));
        
        this.heightData[index] = height;
      }
      
      // Progress indicator
      if (y % 500 === 0) {
        const progress = (y / this.height * 100).toFixed(1);
        console.log(`⏳ Progress: ${progress}%`);
      }
    }
    
    console.log('✅ Terrain generation complete!');
    this.analyzeHeightmap();
  }

  // Analyze the generated heightmap
  analyzeHeightmap() {
    let min = 1, max = 0, sum = 0;
    let seaCount = 0, landCount = 0, mountainCount = 0;
    
    for (let i = 0; i < this.heightData.length; i++) {
      const height = this.heightData[i];
      min = Math.min(min, height);
      max = Math.max(max, height);
      sum += height;
      
      if (height < this.seaLevel) seaCount++;
      else if (height > this.mountainThreshold) mountainCount++;
      else landCount++;
    }
    
    const avg = sum / this.heightData.length;
    const total = this.heightData.length;
    
    console.log('\n📊 HEIGHTMAP ANALYSIS:');
    console.log(`   Size: ${this.width}x${this.height} pixels`);
    console.log(`   Height range: ${min.toFixed(3)} - ${max.toFixed(3)}`);
    console.log(`   Average height: ${avg.toFixed(3)}`);
    console.log(`   Sea level (${this.seaLevel}): ${(seaCount/total*100).toFixed(1)}%`);
    console.log(`   Land: ${(landCount/total*100).toFixed(1)}%`);
    console.log(`   Mountains (${this.mountainThreshold}+): ${(mountainCount/total*100).toFixed(1)}%`);
    console.log(`   Elevation scale: 0-${this.maxHeight}m`);
  }

  // Save as PGM format (grayscale)
  savePGM(filename) {
    console.log(`💾 Saving heightmap as ${filename}...`);
    
    // Convert to 16-bit values (0-65535)
    const imageData = new Uint16Array(this.heightData.length);
    for (let i = 0; i < this.heightData.length; i++) {
      imageData[i] = Math.floor(this.heightData[i] * 65535);
    }
    
    // Create PGM header
    const header = `P5\n${this.width} ${this.height}\n65535\n`;
    const headerBuffer = Buffer.from(header, 'ascii');
    
    // Create image buffer (big-endian 16-bit)
    const dataBuffer = Buffer.alloc(imageData.length * 2);
    for (let i = 0; i < imageData.length; i++) {
      dataBuffer.writeUInt16BE(imageData[i], i * 2);
    }
    
    // Combine header and data
    const finalBuffer = Buffer.concat([headerBuffer, dataBuffer]);
    
    fs.writeFileSync(filename, finalBuffer);
    console.log(`✅ Saved ${filename} (${(finalBuffer.length / 1024 / 1024).toFixed(1)} MB)`);
  }

  // Save metadata file
  saveMetadata(filename) {
    const metadata = {
      width: this.width,
      height: this.height,
      maxHeight: this.maxHeight,
      worldSize: 10000, // 10km world
      heightScale: this.maxHeight,
      seaLevel: this.seaLevel * this.maxHeight,
      seed: this.seed,
      generated: new Date().toISOString(),
      techniques: [
        'Octave noise for base terrain',
        'Ridge noise for mountain ranges', 
        'Voronoi patterns for variety',
        'Erosion simulation',
        'Multi-layer composition'
      ]
    };
    
    fs.writeFileSync(filename, JSON.stringify(metadata, null, 2));
    console.log(`✅ Saved metadata: ${filename}`);
  }

  // Generate complete heightmap package
  generate(outputDir = './heightmaps') {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    console.log('🚀 Starting advanced heightmap generation...\n');
    
    this.generateTerrain();
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const baseName = `heightmap-5k-${timestamp}`;
    
    this.savePGM(path.join(outputDir, `${baseName}.pgm`));
    this.saveMetadata(path.join(outputDir, `${baseName}-info.json`));
    
    console.log('\n🎉 Generation complete!');
    console.log(`📁 Output directory: ${outputDir}`);
    console.log(`🏔️ Use the .pgm file in your terrain system`);
    console.log(`📋 Check ${baseName}-info.json for details`);
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const width = args[0] ? parseInt(args[0]) : 5000;
  const height = args[1] ? parseInt(args[1]) : 5000;
  const outputDir = args[2] || './heightmaps';
  
  console.log('🏔️ Advanced Heightmap Generator');
  console.log(`📏 Size: ${width}x${height} pixels\n`);
  
  const generator = new AdvancedHeightmapGenerator(width, height);
  generator.generate(outputDir);
}

export { AdvancedHeightmapGenerator };