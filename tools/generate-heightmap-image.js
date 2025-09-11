#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

class HeightmapImageGenerator {
  constructor() {
    this.size = 5120  // 5120x5120 pixels - balanced resolution for larger terrain
    this.worldSize = 10000  // 10km x 10km world - 25% larger for more variety
  }

  // Create a smooth heightmap
  generateHeightAt(x, y) {
    // Convert from pixel coordinates to world coordinates
    const worldX = (x / this.size - 0.5) * this.worldSize
    const worldY = (y / this.size - 0.5) * this.worldSize
    
    let height = 0
    
    // Base height
    height += 50  // 50m above sea level
    
    // Central mountain
    const centerDistance = Math.sqrt(worldX ** 2 + worldY ** 2)
    const mountainHeight = Math.max(0, 600 - centerDistance * 0.4)
    height += mountainHeight
    
    // Secondary mountain
    const mountain2Distance = Math.sqrt((worldX - 2000) ** 2 + (worldY - 1500) ** 2)
    const mountain2Height = Math.max(0, 400 - mountain2Distance * 0.5)
    height += mountain2Height
    
    // Third mountain
    const mountain3Distance = Math.sqrt((worldX + 1800) ** 2 + (worldY + 2000) ** 2)
    const mountain3Height = Math.max(0, 500 - mountain3Distance * 0.4)
    height += mountain3Height
    
    // Fourth mountain for larger world
    const mountain4Distance = Math.sqrt((worldX - 3500) ** 2 + (worldY + 4000) ** 2)
    const mountain4Height = Math.max(0, 450 - mountain4Distance * 0.35)
    height += mountain4Height
    
    // Fifth mountain
    const mountain5Distance = Math.sqrt((worldX + 4200) ** 2 + (worldY - 3200) ** 2)
    const mountain5Height = Math.max(0, 550 - mountain5Distance * 0.38)
    height += mountain5Height
    
    // More rolling hills for larger terrain
    const hill1Distance = Math.sqrt((worldX - 1000) ** 2 + (worldY + 1000) ** 2)
    const hill1Height = Math.max(0, 150 - hill1Distance * 0.08)
    height += hill1Height
    
    const hill2Distance = Math.sqrt((worldX + 2500) ** 2 + (worldY - 800) ** 2)
    const hill2Height = Math.max(0, 120 - hill2Distance * 0.1)
    height += hill2Height
    
    // Additional hills for variety
    const hill3Distance = Math.sqrt((worldX + 3800) ** 2 + (worldY + 2800) ** 2)
    const hill3Height = Math.max(0, 180 - hill3Distance * 0.07)
    height += hill3Height
    
    const hill4Distance = Math.sqrt((worldX - 3200) ** 2 + (worldY - 1800) ** 2)
    const hill4Height = Math.max(0, 140 - hill4Distance * 0.09)
    height += hill4Height
    
    // Create multiple valleys by carving through terrain
    const valley1Distance = Math.sqrt((worldX + 500) ** 2 + (worldY - 2000) ** 2)
    if (valley1Distance < 800) {
      height -= (800 - valley1Distance) * 0.15
    }
    
    const valley2Distance = Math.sqrt((worldX - 2200) ** 2 + (worldY + 1200) ** 2)
    if (valley2Distance < 600) {
      height -= (600 - valley2Distance) * 0.12
    }
    
    // River valley - long winding valley
    const riverValleyDistance = Math.abs(worldY - (Math.sin(worldX * 0.0008) * 800 + worldX * 0.1))
    if (riverValleyDistance < 300) {
      height -= (300 - riverValleyDistance) * 0.25
    }
    
    // Canyon valley
    const canyonDistance = Math.sqrt((worldX - 1500) ** 2 + (worldY + 2500) ** 2)
    if (canyonDistance < 1000) {
      const canyonDepth = (1000 - canyonDistance) * 0.08
      height -= canyonDepth
    }
    
    // Circular lake valley
    const lakeDistance = Math.sqrt((worldX + 2000) ** 2 + (worldY - 500) ** 2)
    if (lakeDistance < 400) {
      height -= (400 - lakeDistance) * 0.3  // Deep valley for lake
    }
    
    // Mountain pass valley
    const passDistance = Math.abs(worldX - 500) + Math.abs(worldY + 1500)
    if (passDistance < 600) {
      height -= (600 - passDistance) * 0.1
    }
    
    // Additional valleys for larger terrain
    const valley3Distance = Math.sqrt((worldX - 3800) ** 2 + (worldY - 2800) ** 2)
    if (valley3Distance < 700) {
      height -= (700 - valley3Distance) * 0.12
    }
    
    const valley4Distance = Math.sqrt((worldX + 3200) ** 2 + (worldY + 3500) ** 2)
    if (valley4Distance < 900) {
      height -= (900 - valley4Distance) * 0.08
    }
    
    // Ensure reasonable range
    return Math.max(0, Math.min(700, height))
  }

  generateHeightmapBuffer() {
    // Create a grayscale image buffer (PNG format)
    const pixels = []
    
    console.log(`Generating ${this.size}x${this.size} heightmap...`)
    
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const height = this.generateHeightAt(x, y)
        
        // Convert height to grayscale value (0-255)
        // 0 = black (0m), 255 = white (700m)
        const grayValue = Math.floor((height / 700) * 255)
        
        // RGBA format (grayscale, so R=G=B=grayValue, A=255)
        pixels.push(grayValue)  // Red
        pixels.push(grayValue)  // Green
        pixels.push(grayValue)  // Blue
        pixels.push(255)        // Alpha
      }
      
      if (y % 200 === 0) {
        console.log(`Progress: ${((y / this.size) * 100).toFixed(1)}%`)
      }
    }
    
    return Buffer.from(pixels)
  }

  // Simple PNG encoder (basic implementation)
  createSimplePNG(imageData) {
    // For now, we'll create a PGM file (simpler format)
    // which can be converted to PNG later or used directly
    const header = `P5\n${this.size} ${this.size}\n255\n`
    const headerBuffer = Buffer.from(header, 'ascii')
    
    // Extract just the grayscale values (every 4th byte starting from 0)
    const grayData = []
    for (let i = 0; i < imageData.length; i += 4) {
      grayData.push(imageData[i])
    }
    
    const grayBuffer = Buffer.from(grayData)
    return Buffer.concat([headerBuffer, grayBuffer])
  }

  async generateHeightmapFile() {
    const outputDir = path.join(__dirname, '../public/heightmaps')
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    console.log('Generating heightmap image...')
    const imageData = this.generateHeightmapBuffer()
    
    console.log('Creating PGM file...')
    const pgmData = this.createSimplePNG(imageData)
    
    const outputPath = path.join(outputDir, 'heightmap.pgm')
    fs.writeFileSync(outputPath, pgmData)
    
    // Also create a metadata file
    const metadata = {
      size: this.size,
      worldSize: this.worldSize,
      maxHeight: 700,
      format: 'pgm',
      description: 'Grayscale heightmap: black=0m, white=700m'
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'heightmap-info.json'), 
      JSON.stringify(metadata, null, 2)
    )
    
    console.log(`✅ Heightmap generated: ${outputPath}`)
    console.log(`✅ Metadata saved: ${path.join(outputDir, 'heightmap-info.json')}`)
    console.log(`Size: ${this.size}x${this.size} pixels`)
    console.log(`World: ${this.worldSize/1000}km x ${this.worldSize/1000}km`)
    console.log(`Heights: 0m to 700m`)
  }
}

// Run the generator
const generator = new HeightmapImageGenerator()
generator.generateHeightmapFile().catch(console.error)