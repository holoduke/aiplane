import * as THREE from 'three'

export class ImageHeightmapTerrain {
  constructor(scene) {
    this.scene = scene
    this.terrain = null
    this.heightData = null
    this.metadata = null
    
    this.init()
  }

  async init() {
    console.log('Loading heightmap image...')
    try {
      await this.loadHeightmapData()
      this.createTerrain()
    } catch (error) {
      console.error('Failed to load heightmap:', error)
      this.createFallbackTerrain()
    }
  }

  async loadHeightmapData() {
    // Load metadata
    const metaResponse = await fetch('/heightmaps/heightmap-info.json')
    if (!metaResponse.ok) {
      throw new Error('Could not load heightmap metadata')
    }
    this.metadata = await metaResponse.json()
    console.log('Heightmap metadata:', this.metadata)
    
    // For PGM files, we'll need to parse them manually
    // Let's create a simple parser
    const heightmapResponse = await fetch('/heightmaps/heightmap.pgm')
    if (!heightmapResponse.ok) {
      throw new Error('Could not load heightmap file')
    }
    
    const arrayBuffer = await heightmapResponse.arrayBuffer()
    this.heightData = this.parsePGM(arrayBuffer)
    
    console.log(`Heightmap loaded: ${this.metadata.size}x${this.metadata.size} pixels`)
  }

  parsePGM(arrayBuffer) {
    const data = new Uint8Array(arrayBuffer)
    let offset = 0
    
    // Find the end of the header (after the last newline before pixel data)
    // Header format: P5\n1024 1024\n255\n
    let headerEnd = 0
    let newlineCount = 0
    
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 10) { // newline character
        newlineCount++
        if (newlineCount === 3) { // After "P5\n", "1024 1024\n", "255\n"
          headerEnd = i + 1
          break
        }
      }
    }
    
    // Extract pixel data (grayscale values)
    const pixelData = data.slice(headerEnd)
    console.log(`PGM parsed: header ends at ${headerEnd}, ${pixelData.length} pixels`)
    
    return pixelData
  }

  getHeightFromPixel(pixelValue) {
    // Convert grayscale value (0-255) to world height
    return (pixelValue / 255) * this.metadata.maxHeight
  }

  getHeightAtUV(u, v) {
    if (!this.heightData || !this.metadata) {
      return 100 // fallback
    }
    
    // Clamp UV coordinates
    u = Math.max(0, Math.min(1, u))
    v = Math.max(0, Math.min(1, v))
    
    // Convert UV to exact pixel coordinates (with decimals)
    const exactX = u * (this.metadata.size - 1)
    const exactY = v * (this.metadata.size - 1)
    
    // Get the four surrounding pixels for bilinear interpolation
    const x1 = Math.floor(exactX)
    const y1 = Math.floor(exactY)
    const x2 = Math.min(this.metadata.size - 1, x1 + 1)
    const y2 = Math.min(this.metadata.size - 1, y1 + 1)
    
    // Get the fractional parts
    const fx = exactX - x1
    const fy = exactY - y1
    
    // Sample the four corners
    const h11 = this.heightData[y1 * this.metadata.size + x1] || 0
    const h21 = this.heightData[y1 * this.metadata.size + x2] || 0
    const h12 = this.heightData[y2 * this.metadata.size + x1] || 0
    const h22 = this.heightData[y2 * this.metadata.size + x2] || 0
    
    // Bilinear interpolation
    const h1 = h11 * (1 - fx) + h21 * fx
    const h2 = h12 * (1 - fx) + h22 * fx
    const interpolatedPixelValue = h1 * (1 - fy) + h2 * fy
    
    return this.getHeightFromPixel(interpolatedPixelValue)
  }

  createTerrain() {
    if (!this.heightData || !this.metadata) {
      this.createFallbackTerrain()
      return
    }
    
    console.log('Creating terrain from heightmap...')
    
    const resolution = 512 // Balanced resolution for good performance and smoothness
    const worldSize = this.metadata.worldSize
    
    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(
      worldSize,
      worldSize,
      resolution - 1,
      resolution - 1
    )
    
    const vertices = geometry.attributes.position.array
    const colors = new Float32Array(vertices.length)
    
    let minHeight = Infinity
    let maxHeight = -Infinity
    
    // Apply heightmap data to vertices
    let vertexIndex = 0
    for (let z = 0; z < resolution; z++) {
      for (let x = 0; x < resolution; x++) {
        // Convert to UV coordinates
        const u = x / (resolution - 1)
        const v = z / (resolution - 1)
        
        // Get height from heightmap
        const height = this.getHeightAtUV(u, v)
        
        minHeight = Math.min(minHeight, height)
        maxHeight = Math.max(maxHeight, height)
        
        // Set vertex height
        vertices[vertexIndex * 3 + 2] = height
        
        // Set vertex color
        this.setVertexColor(colors, vertexIndex, height)
        
        vertexIndex++
      }
    }
    
    console.log(`Terrain heights: ${minHeight.toFixed(1)}m to ${maxHeight.toFixed(1)}m`)
    
    // Apply geometry changes
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.attributes.position.needsUpdate = true
    
    // Compute smooth normals for better lighting
    geometry.computeVertexNormals()
    
    // Additional smoothing pass to reduce sharp edges
    this.smoothGeometryNormals(geometry)
    
    // Create advanced terrain material with custom shader
    const material = this.createAdvancedTerrainMaterial()
    
    // Create mesh
    this.terrain = new THREE.Mesh(geometry, material)
    this.terrain.rotation.x = -Math.PI / 2
    this.terrain.receiveShadow = true
    this.terrain.castShadow = true // Enable terrain shadow casting
    
    this.scene.add(this.terrain)
    console.log('Heightmap terrain created successfully!')
  }

  createFallbackTerrain() {
    console.log('Creating fallback terrain...')
    
    // Simple fallback terrain - balanced resolution for performance
    const geometry = new THREE.PlaneGeometry(8000, 8000, 128, 128)
    const vertices = geometry.attributes.position.array
    const colors = new Float32Array(vertices.length)
    
    for (let i = 0; i < vertices.length; i += 3) {
      const height = 100 + Math.random() * 200
      vertices[i + 2] = height
      this.setVertexColor(colors, i / 3, height)
    }
    
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.attributes.position.needsUpdate = true
    
    // Compute smooth normals for better lighting
    geometry.computeVertexNormals()
    this.smoothGeometryNormals(geometry)
    
    // Use the same advanced material as the main terrain
    const material = this.createAdvancedTerrainMaterial()
    
    this.terrain = new THREE.Mesh(geometry, material)
    this.terrain.rotation.x = -Math.PI / 2
    this.terrain.receiveShadow = true
    this.terrain.castShadow = true // Enable fallback terrain shadow casting
    
    this.scene.add(this.terrain)
  }

  smoothGeometryNormals(geometry) {
    // Additional smoothing for normals to reduce sharp triangular edges
    const normals = geometry.attributes.normal.array
    const positions = geometry.attributes.position.array
    const tempNormals = new Float32Array(normals.length)
    
    // Copy current normals
    for (let i = 0; i < normals.length; i++) {
      tempNormals[i] = normals[i]
    }
    
    // Average normals with neighbors for smoother appearance
    const resolution = Math.sqrt(positions.length / 3)
    for (let i = 0; i < normals.length; i += 3) {
      const vertexIndex = i / 3
      const x = vertexIndex % resolution
      const z = Math.floor(vertexIndex / resolution)
      
      let avgNormal = new THREE.Vector3(normals[i], normals[i + 1], normals[i + 2])
      let count = 1
      
      // Sample neighboring vertices
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dx === 0 && dz === 0) continue
          
          const nx = x + dx
          const nz = z + dz
          
          if (nx >= 0 && nx < resolution && nz >= 0 && nz < resolution) {
            const neighborIndex = (nz * resolution + nx) * 3
            avgNormal.add(new THREE.Vector3(
              tempNormals[neighborIndex],
              tempNormals[neighborIndex + 1],
              tempNormals[neighborIndex + 2]
            ))
            count++
          }
        }
      }
      
      avgNormal.divideScalar(count).normalize()
      normals[i] = avgNormal.x
      normals[i + 1] = avgNormal.y
      normals[i + 2] = avgNormal.z
    }
    
    geometry.attributes.normal.needsUpdate = true
  }

  createAdvancedTerrainMaterial() {
    // Use MeshLambertMaterial with sunset colors - supports shadows properly
    return new THREE.MeshLambertMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide
    })
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3
    
    if (height < 30) {
      // Water - blue
      colors[i] = 0.1; colors[i + 1] = 0.5; colors[i + 2] = 0.9
    } else if (height < 100) {
      // Lowlands - bright green
      colors[i] = 0.2; colors[i + 1] = 0.8; colors[i + 2] = 0.3
    } else if (height < 200) {
      // Hills - medium green
      colors[i] = 0.3; colors[i + 1] = 0.6; colors[i + 2] = 0.2
    } else if (height < 350) {
      // Foothills - dark green
      colors[i] = 0.2; colors[i + 1] = 0.4; colors[i + 2] = 0.1
    } else if (height < 500) {
      // Mountain slopes - brown
      colors[i] = 0.5; colors[i + 1] = 0.4; colors[i + 2] = 0.2
    } else if (height < 600) {
      // Rocky peaks - gray
      colors[i] = 0.5; colors[i + 1] = 0.5; colors[i + 2] = 0.4
    } else {
      // Snow peaks - white
      colors[i] = 0.9; colors[i + 1] = 0.9; colors[i + 2] = 1.0
    }
  }

  getHeightAtPosition(worldX, worldZ) {
    if (!this.metadata) {
      return 100 // fallback
    }
    
    // Convert world coordinates to UV
    const u = (worldX / this.metadata.worldSize) + 0.5
    const v = (worldZ / this.metadata.worldSize) + 0.5
    
    return this.getHeightAtUV(u, v)
  }

  update(playerPosition, cameraPosition) {
    // Static terrain with basic material - no updates needed
  }

  cleanup() {
    if (this.terrain) {
      this.scene.remove(this.terrain)
      this.terrain.geometry.dispose()
      this.terrain.material.dispose()
    }
  }
}