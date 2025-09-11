#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

class HeightmapGenerator {
  constructor() {
    this.chunkSize = 2000  // 2km x 2km chunks
    this.resolution = 256  // 256x256 vertices per chunk
    this.worldSeed = 12345
    
    // Generate a grid of chunks around origin
    this.chunkRadius = 8  // Generate 16x16 chunks = 32km x 32km world (smaller for testing)
  }

  // Improved Perlin-like noise
  noise(x, y, seed = 0) {
    const n = Math.sin((x + seed) * 12.9898 + (y + seed) * 78.233 + this.worldSeed) * 43758.5453
    return (n - Math.floor(n)) * 2 - 1
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }

  lerp(a, b, t) {
    return a + t * (b - a)
  }

  smoothNoise(x, y, octaves = 4, persistence = 0.4, scale = 1, amplitude = 1) {
    let value = 0
    let currentAmplitude = amplitude
    let frequency = scale
    let maxValue = 0
    
    for (let i = 0; i < octaves; i++) {
      const sampleX = x * frequency
      const sampleY = y * frequency
      
      const X = Math.floor(sampleX) & 255
      const Y = Math.floor(sampleY) & 255
      
      const fracX = sampleX - Math.floor(sampleX)
      const fracY = sampleY - Math.floor(sampleY)
      
      const u = this.fade(fracX)
      const v = this.fade(fracY)
      
      const seedOffset = i * 137 + this.worldSeed
      const A = (X + seedOffset) & 255
      const B = (X + 1 + seedOffset) & 255
      const AA = (A + Y) & 255
      const AB = (A + Y + 1) & 255
      const BA = (B + Y) & 255
      const BB = (B + Y + 1) & 255
      
      const g1 = this.simpleHash(AA) / 256.0 - 0.5
      const g2 = this.simpleHash(BA) / 256.0 - 0.5
      const g3 = this.simpleHash(AB) / 256.0 - 0.5
      const g4 = this.simpleHash(BB) / 256.0 - 0.5
      
      const noiseValue = this.lerp(
        this.lerp(g1, g2, u),
        this.lerp(g3, g4, u),
        v
      )
      
      value += noiseValue * currentAmplitude
      maxValue += currentAmplitude
      currentAmplitude *= persistence
      frequency *= 1.8
    }
    
    return value / maxValue
  }

  simpleHash(n) {
    n = ((n << 13) ^ n)
    return (n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff
  }

  createMountainRange(x, y, centerX, centerY, maxHeight, frequency) {
    const dx = x - centerX
    const dy = y - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    const mountainProfile = Math.max(0, 1 - (distance / 2500) ** 0.8)
    const ridgeNoise = this.smoothNoise(x, y, 3, 0.7, frequency, 1.0)
    const peakVariation = this.smoothNoise(x, y, 2, 0.6, frequency * 2, 0.8)
    
    return mountainProfile * maxHeight * (0.4 + ridgeNoise * 0.4 + peakVariation * 0.2)
  }

  createValley(x, y, centerX, centerY, depth, frequency) {
    const dx = x - centerX
    const dy = y - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    const valleyProfile = Math.max(0, 1 - (distance / 2500) ** 1.5)
    const riverMeander = this.smoothNoise(x, y, 2, 0.5, frequency, 0.4)
    
    return valleyProfile * depth * (0.7 + Math.abs(riverMeander) * 0.3)
  }

  generateHeightAt(worldX, worldY) {
    let height = 0
    
    // Base sea level
    height += 50
    
    // Large-scale continental features
    height += this.smoothNoise(worldX, worldY, 2, 0.5, 0.00005, 200)
    
    // Mountain ranges
    const mountainRange1 = this.createMountainRange(worldX, worldY, 0, 0, 1400, 0.0001)
    const mountainRange2 = this.createMountainRange(worldX, worldY, 8000, 5000, 1200, 0.00012)
    const mountainRange3 = this.createMountainRange(worldX, worldY, -6000, 8000, 1100, 0.00015)
    const mountainRange4 = this.createMountainRange(worldX, worldY, 15000, -3000, 1000, 0.0001)
    const mountainRange5 = this.createMountainRange(worldX, worldY, -12000, -8000, 1300, 0.00009)
    
    height += Math.max(
      mountainRange1, 
      mountainRange2 * 0.9, 
      mountainRange3 * 0.8,
      mountainRange4 * 0.7,
      mountainRange5 * 0.85
    )
    
    // Valley systems
    const valley1 = this.createValley(worldX, worldY, 2000, -2000, 300, 0.0002)
    const valley2 = this.createValley(worldX, worldY, -4000, 3000, 250, 0.00018)
    const valley3 = this.createValley(worldX, worldY, 6000, 1000, 200, 0.00025)
    
    height -= Math.max(valley1 * 0.8, valley2 * 0.6, valley3 * 0.5)
    
    // Rolling hills
    height += this.smoothNoise(worldX, worldY, 3, 0.4, 0.0008, 120)
    
    // Medium features
    height += this.smoothNoise(worldX, worldY, 4, 0.3, 0.002, 50)
    
    // Fine details
    height += this.smoothNoise(worldX, worldY, 2, 0.25, 0.006, 15)
    
    return Math.max(-20, Math.min(1500, height))
  }

  generateChunkData(chunkX, chunkY) {
    const worldX = chunkX * this.chunkSize
    const worldY = chunkY * this.chunkSize
    
    const heights = []
    let minHeight = Infinity
    let maxHeight = -Infinity
    
    for (let y = 0; y < this.resolution; y++) {
      for (let x = 0; x < this.resolution; x++) {
        const sampleX = worldX + (x / (this.resolution - 1) - 0.5) * this.chunkSize
        const sampleY = worldY + (y / (this.resolution - 1) - 0.5) * this.chunkSize
        
        const height = this.generateHeightAt(sampleX, sampleY)
        heights.push(height)
        
        minHeight = Math.min(minHeight, height)
        maxHeight = Math.max(maxHeight, height)
      }
    }
    
    return {
      chunkX,
      chunkY,
      worldX,
      worldY,
      resolution: this.resolution,
      chunkSize: this.chunkSize,
      heights,
      minHeight,
      maxHeight
    }
  }

  async generateAllChunks() {
    const outputDir = path.join(__dirname, '../public/heightmaps')
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    console.log(`Generating ${(this.chunkRadius * 2) ** 2} heightmap chunks...`)
    console.log(`Output directory: ${outputDir}`)
    
    let generated = 0
    const total = (this.chunkRadius * 2) ** 2
    
    for (let chunkY = -this.chunkRadius; chunkY < this.chunkRadius; chunkY++) {
      for (let chunkX = -this.chunkRadius; chunkX < this.chunkRadius; chunkX++) {
        const chunkData = this.generateChunkData(chunkX, chunkY)
        
        const filename = `chunk_${chunkX}_${chunkY}.json`
        const filepath = path.join(outputDir, filename)
        
        fs.writeFileSync(filepath, JSON.stringify(chunkData, null, 2))
        
        generated++
        if (generated % 100 === 0) {
          console.log(`Generated ${generated}/${total} chunks (${(generated/total*100).toFixed(1)}%)`)
        }
      }
    }
    
    // Generate index file
    const index = {
      chunkRadius: this.chunkRadius,
      chunkSize: this.chunkSize,
      resolution: this.resolution,
      worldSeed: this.worldSeed,
      totalChunks: total,
      worldSize: this.chunkRadius * 2 * this.chunkSize
    }
    
    fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify(index, null, 2))
    
    console.log(`✅ Generated ${total} heightmap chunks successfully!`)
    console.log(`World size: ${index.worldSize/1000}km x ${index.worldSize/1000}km`)
  }
}

// Run the generator
const generator = new HeightmapGenerator()
generator.generateAllChunks().catch(console.error)