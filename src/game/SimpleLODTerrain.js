import * as THREE from 'three'

export class SimpleLODTerrain {
  constructor(scene) {
    this.scene = scene
    this.chunks = new Map() // Active chunks: key = "x,z", value = chunk object
    this.heightData = null
    this.metadata = null
    
    // Simple single-tier system with distance-based LOD
    this.chunkSize = 1000 // 1km chunks - good balance of detail and performance
    this.loadRadius = 50 // Load 50 chunks in each direction = 100km view distance
    this.lodDistances = [
      { maxDistance: 1000,  resolution: 64,  name: 'Ultra' },   // 0-1km: Maximum detail from heightmap
      { maxDistance: 3000,  resolution: 32,  name: 'High' },    // 1-3km: High detail  
      { maxDistance: 8000,  resolution: 16,  name: 'Medium' },  // 3-8km: Medium detail
      { maxDistance: 20000, resolution: 8,   name: 'Low' },     // 8-20km: Low detail
      { maxDistance: 100000, resolution: 4,  name: 'VeryLow' }  // 20-100km: Very low detail
    ]
    
    this.playerPosition = new THREE.Vector3()
    this.lastPlayerChunk = { x: null, z: null }
    
    this.init()
  }

  async init() {
    console.log('🚀 Initializing Simple LOD Terrain System...')
    try {
      await this.loadHeightmapData()
      console.log('✅ Simple LOD terrain system ready!')
    } catch (error) {
      console.error('❌ Failed to load heightmap:', error)
      // Continue without heightmap - will use procedural generation
    }
  }

  async loadHeightmapData() {
    // Load the same heightmap data as before
    const metaResponse = await fetch('/heightmaps/heightmap-info.json')
    if (!metaResponse.ok) {
      throw new Error('Could not load heightmap metadata')
    }
    this.metadata = await metaResponse.json()
    console.log('📊 Heightmap metadata:', this.metadata)
    
    const heightmapResponse = await fetch('/heightmaps/heightmap.pgm')
    if (!heightmapResponse.ok) {
      throw new Error('Could not load heightmap file')  
    }
    
    const arrayBuffer = await heightmapResponse.arrayBuffer()
    this.heightData = this.parsePGM(arrayBuffer)
    
    console.log(`🗺️ Heightmap loaded: ${this.metadata.size}x${this.metadata.size} pixels covering ${this.metadata.worldSize}m x ${this.metadata.worldSize}m`)
  }

  parsePGM(arrayBuffer) {
    const data = new Uint8Array(arrayBuffer)
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
    
    const pixelData = data.slice(headerEnd)
    console.log(`📄 PGM parsed: header ends at ${headerEnd}, ${pixelData.length} pixels`)
    
    return pixelData
  }

  getHeightAtPosition(worldX, worldZ) {
    // Always use heightmap if available, tiled across the entire world
    if (this.heightData && this.metadata) {
      // Use a balanced effective world size for good terrain scale
      const effectiveWorldSize = 4000 // 4km instead of 8km - 2x more detailed but still proper mountain scale
      
      // Convert world coordinates to UV and tile them using modulo
      let u = (worldX / effectiveWorldSize) + 0.5
      let v = (worldZ / effectiveWorldSize) + 0.5
      
      // Tile the UV coordinates to repeat the heightmap infinitely
      u = u - Math.floor(u)  // Keep only fractional part (0.0 to 1.0)
      v = v - Math.floor(v)  // This creates seamless tiling
      
      // Log first few tiled heightmap samples to verify
      if (!this.tiledLogCount) this.tiledLogCount = 0
      if (this.tiledLogCount < 5) {
        console.log(`🔁 Tiled heightmap (${effectiveWorldSize}m coverage) at world(${worldX.toFixed(0)}, ${worldZ.toFixed(0)}) -> UV(${u.toFixed(3)}, ${v.toFixed(3)})`)
        this.tiledLogCount++
      }
      
      return this.getHeightAtUV(u, v)
    }
    
    // Fallback to procedural generation only if no heightmap is available
    return this.generateProceduralHeight(worldX, worldZ)
  }

  getHeightAtUV(u, v) {
    if (!this.heightData || !this.metadata) {
      return 100 // fallback
    }
    
    // UV coordinates should already be normalized (0.0 to 1.0) from tiling
    // No clamping needed since we're tiling the heightmap
    
    // Convert UV to exact pixel coordinates - NO INTERPOLATION, direct pixel sampling
    const pixelX = Math.floor(u * (this.metadata.size - 1))
    const pixelY = Math.floor(v * (this.metadata.size - 1))
    
    // Direct pixel sampling - no bilinear interpolation, pure heightmap data
    const pixelIndex = pixelY * this.metadata.size + pixelX
    const pixelValue = this.heightData[pixelIndex] || 0
    
    // Convert directly from pixel value to height - no smoothing
    return (pixelValue / 255) * (this.metadata.maxHeight || 700)
  }

  generateProceduralHeight(worldX, worldZ) {
    // Simple but effective procedural terrain
    let height = 50 // Base sea level
    
    // Large mountain ranges
    const mountain1 = Math.max(0, 600 - Math.sqrt((worldX - 8000) ** 2 + (worldZ - 6000) ** 2) * 0.04)
    const mountain2 = Math.max(0, 500 - Math.sqrt((worldX + 15000) ** 2 + (worldZ - 12000) ** 2) * 0.03)
    const mountain3 = Math.max(0, 450 - Math.sqrt((worldX - 20000) ** 2 + (worldZ + 8000) ** 2) * 0.035)
    height += mountain1 + mountain2 + mountain3
    
    // Rolling hills with sine waves
    height += Math.sin(worldX * 0.0002) * Math.cos(worldZ * 0.0003) * 120
    height += Math.sin(worldX * 0.0006 + worldZ * 0.0004) * 80
    height += Math.sin((worldX + worldZ) * 0.0001) * 150
    
    // River valleys
    const valley1 = Math.abs(worldZ - (Math.sin(worldX * 0.0004) * 3000 + worldX * 0.08))
    if (valley1 < 1500) {
      height -= (1500 - valley1) * 0.06
    }
    
    // Add noise for detail
    height += Math.sin(worldX * 0.008) * Math.cos(worldZ * 0.01) * 25
    height += Math.sin(worldX * 0.02 + 50) * Math.sin(worldZ * 0.015 + 100) * 15
    
    // Distance-based fade to prevent infinite mountains
    const distanceFromOrigin = Math.sqrt(worldX ** 2 + worldZ ** 2)
    if (distanceFromOrigin > 40000) {
      const fadeAmount = Math.min(1, (distanceFromOrigin - 40000) / 30000)
      height = height * (1 - fadeAmount * 0.7) // Gradually reduce height
    }
    
    return Math.max(0, Math.min(800, height))
  }

  update(playerPosition) {
    this.playerPosition.copy(playerPosition)
    
    const chunkX = Math.floor(playerPosition.x / this.chunkSize)
    const chunkZ = Math.floor(playerPosition.z / this.chunkSize)
    
    // Only update chunks when player moves to a new chunk
    if (chunkX !== this.lastPlayerChunk.x || chunkZ !== this.lastPlayerChunk.z) {
      console.log(`🎯 Player moved to chunk (${chunkX}, ${chunkZ})`)
      
      this.loadChunksAroundPlayer(chunkX, chunkZ)
      this.unloadDistantChunks(chunkX, chunkZ)
      
      this.lastPlayerChunk = { x: chunkX, z: chunkZ }
      console.log(`📍 Active chunks: ${this.chunks.size}`)
    }
  }

  loadChunksAroundPlayer(centerX, centerZ) {
    let loadedCount = 0
    let skippedCount = 0
    
    for (let x = centerX - this.loadRadius; x <= centerX + this.loadRadius; x++) {
      for (let z = centerZ - this.loadRadius; z <= centerZ + this.loadRadius; z++) {
        const chunkKey = `${x},${z}`
        
        if (!this.chunks.has(chunkKey)) {
          const distance = this.getChunkDistance(x, z, centerX, centerZ)
          
          // Only load chunks within the maximum LOD distance
          if (distance <= this.lodDistances[this.lodDistances.length - 1].maxDistance) {
            this.loadChunk(x, z, distance)
            loadedCount++
          } else {
            skippedCount++
          }
        }
      }
    }
    
    if (loadedCount > 0) {
      console.log(`✅ Loaded ${loadedCount} new chunks, skipped ${skippedCount} distant chunks`)
    }
  }

  getChunkDistance(chunkX, chunkZ, centerX, centerZ) {
    const chunkCenterX = chunkX * this.chunkSize + this.chunkSize / 2
    const chunkCenterZ = chunkZ * this.chunkSize + this.chunkSize / 2
    const centerChunkCenterX = centerX * this.chunkSize + this.chunkSize / 2  
    const centerChunkCenterZ = centerZ * this.chunkSize + this.chunkSize / 2
    
    return Math.sqrt(
      Math.pow(chunkCenterX - centerChunkCenterX, 2) + 
      Math.pow(chunkCenterZ - centerChunkCenterZ, 2)
    )
  }

  loadChunk(chunkX, chunkZ, distance) {
    // Determine LOD level based on distance
    let lodLevel = this.lodDistances.length - 1 // Default to lowest detail
    for (let i = 0; i < this.lodDistances.length; i++) {
      if (distance <= this.lodDistances[i].maxDistance) {
        lodLevel = i
        break
      }
    }
    
    const lod = this.lodDistances[lodLevel]
    const geometry = this.createChunkGeometry(chunkX, chunkZ, lod.resolution)
    const material = this.createChunkMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    
    // Position the mesh in world coordinates
    mesh.position.set(
      chunkX * this.chunkSize + this.chunkSize / 2,
      0,
      chunkZ * this.chunkSize + this.chunkSize / 2
    )
    mesh.rotation.x = -Math.PI / 2
    mesh.receiveShadow = true
    mesh.castShadow = true
    
    const chunk = {
      x: chunkX,
      z: chunkZ,
      mesh: mesh,
      distance: distance,
      lodLevel: lodLevel,
      resolution: lod.resolution
    }
    
    this.scene.add(mesh)
    this.chunks.set(`${chunkX},${chunkZ}`, chunk)
    
    // Log first few chunks for debugging
    if (this.chunks.size <= 10) {
      console.log(`🏔️ Loaded chunk (${chunkX},${chunkZ}) distance:${distance.toFixed(0)}m LOD:${lod.name} res:${lod.resolution}`)
    }
  }

  createChunkGeometry(chunkX, chunkZ, resolution) {
    const geometry = new THREE.PlaneGeometry(
      this.chunkSize,
      this.chunkSize, 
      resolution - 1,
      resolution - 1
    )
    
    const vertices = geometry.attributes.position.array
    const colors = new Float32Array(vertices.length)
    
    // Generate heights for each vertex
    let vertexIndex = 0
    for (let z = 0; z < resolution; z++) {
      for (let x = 0; x < resolution; x++) {
        // Calculate world position for this vertex
        const localX = (x / (resolution - 1)) * this.chunkSize
        const localZ = (z / (resolution - 1)) * this.chunkSize
        const worldX = chunkX * this.chunkSize + localX
        const worldZ = chunkZ * this.chunkSize + localZ
        
        const height = this.getHeightAtPosition(worldX, worldZ)
        
        // Set vertex height (Y is up in world space, but Z is up in plane geometry)
        vertices[vertexIndex * 3 + 2] = height
        
        // Set vertex color based on height
        this.setVertexColor(colors, vertexIndex, height)
        
        vertexIndex++
      }
    }
    
    // Apply geometry changes - NO SMOOTHING, pure heightmap geometry
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.attributes.position.needsUpdate = true
    // NO computeVertexNormals() - keep raw heightmap geometry without smoothing
    
    return geometry
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3
    
    // Bright daylight color mapping - more vibrant colors
    if (height < 20) {
      // Water - bright blue
      colors[i] = 0.2; colors[i + 1] = 0.6; colors[i + 2] = 1.0
    } else if (height < 80) {
      // Lowlands - vibrant green  
      colors[i] = 0.3; colors[i + 1] = 0.9; colors[i + 2] = 0.4
    } else if (height < 150) {
      // Hills - bright medium green
      colors[i] = 0.4; colors[i + 1] = 0.8; colors[i + 2] = 0.3
    } else if (height < 250) {
      // Foothills - forest green
      colors[i] = 0.3; colors[i + 1] = 0.7; colors[i + 2] = 0.2
    } else if (height < 400) {
      // Mountain slopes - warm brown
      colors[i] = 0.7; colors[i + 1] = 0.5; colors[i + 2] = 0.3
    } else if (height < 550) {
      // Rocky peaks - light gray
      colors[i] = 0.6; colors[i + 1] = 0.6; colors[i + 2] = 0.6
    } else {
      // Snow peaks - bright white
      colors[i] = 0.95; colors[i + 1] = 0.98; colors[i + 2] = 1.0
    }
  }

  createChunkMaterial() {
    return new THREE.MeshLambertMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide
    })
  }

  unloadDistantChunks(centerX, centerZ) {
    const chunksToUnload = []
    
    for (const [chunkKey, chunk] of this.chunks.entries()) {
      const distance = this.getChunkDistance(chunk.x, chunk.z, centerX, centerZ)
      const maxDistance = this.lodDistances[this.lodDistances.length - 1].maxDistance + this.chunkSize
      
      if (distance > maxDistance) {
        chunksToUnload.push(chunkKey)
      }
    }
    
    // Unload distant chunks
    for (const chunkKey of chunksToUnload) {
      const chunk = this.chunks.get(chunkKey)
      if (chunk) {
        this.scene.remove(chunk.mesh)
        chunk.mesh.geometry.dispose()
        chunk.mesh.material.dispose()
        this.chunks.delete(chunkKey)
      }
    }
    
    if (chunksToUnload.length > 0) {
      console.log(`🗑️ Unloaded ${chunksToUnload.length} distant chunks`)
    }
  }

  cleanup() {
    for (const [chunkKey, chunk] of this.chunks.entries()) {
      this.scene.remove(chunk.mesh)
      chunk.mesh.geometry.dispose()
      chunk.mesh.material.dispose()
    }
    this.chunks.clear()
  }
}