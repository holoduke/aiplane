import * as THREE from 'three'

export class ChunkedLODTerrain {
  constructor(scene) {
    this.scene = scene
    this.chunks = new Map() // Active chunks: key = "x,z", value = chunk object
    this.heightData = null
    this.metadata = null
    
    // Hierarchical chunk system - different sizes for different distances
    this.chunkTiers = [
      // Tier 0: Close detail chunks
      { 
        minDistance: 0, 
        maxDistance: 5000, 
        chunkSize: 625, 
        loadRadius: 6,
        lodLevels: [
          { distance: 0,    resolution: 64,  name: 'Ultra' },
          { distance: 625,  resolution: 32,  name: 'High' },
          { distance: 1250, resolution: 16,  name: 'Medium' },
          { distance: 2500, resolution: 8,   name: 'Low' }
        ]
      },
      // Tier 1: Medium distance chunks (2x size)
      { 
        minDistance: 5000, 
        maxDistance: 12000, 
        chunkSize: 1250, 
        loadRadius: 4,
        lodLevels: [
          { distance: 0,    resolution: 32,  name: 'High' },
          { distance: 2500, resolution: 16,  name: 'Medium' },
          { distance: 5000, resolution: 8,   name: 'Low' }
        ]
      },
      // Tier 2: Far distance chunks (4x size)
      { 
        minDistance: 12000, 
        maxDistance: 25000, 
        chunkSize: 2500, 
        loadRadius: 3,
        lodLevels: [
          { distance: 0,    resolution: 16,  name: 'Medium' },
          { distance: 5000, resolution: 8,   name: 'Low' },
          { distance: 10000, resolution: 4,  name: 'VeryLow' }
        ]
      },
      // Tier 3: Ultra-distance chunks (8x size) - For long-range visibility
      { 
        minDistance: 25000, 
        maxDistance: 60000, 
        chunkSize: 5000, 
        loadRadius: 2,
        lodLevels: [
          { distance: 0,     resolution: 8,   name: 'Low' },
          { distance: 15000, resolution: 4,   name: 'VeryLow' },
          { distance: 30000, resolution: 2,   name: 'UltraLow' }
        ]
      },
      // Tier 4: Extreme-distance chunks (16x size) - For horizon visibility
      { 
        minDistance: 60000, 
        maxDistance: 120000, 
        chunkSize: 10000, 
        loadRadius: 1,
        lodLevels: [
          { distance: 0,     resolution: 4,   name: 'VeryLow' },
          { distance: 30000, resolution: 2,   name: 'UltraLow' }
        ]
      }
    ]
    
    this.playerPosition = new THREE.Vector3()
    this.lastPlayerChunk = { x: null, z: null }
    
    this.init()
  }

  async init() {
    console.log('Initializing Chunked LOD Terrain System...')
    try {
      await this.loadHeightmapData()
      console.log('Heightmap data loaded, terrain system ready!')
    } catch (error) {
      console.error('Failed to load heightmap:', error)
    }
  }

  async loadHeightmapData() {
    // Reuse the same heightmap system from ImageHeightmapTerrain
    const metaResponse = await fetch('/heightmaps/heightmap-info.json')
    if (!metaResponse.ok) {
      throw new Error('Could not load heightmap metadata')
    }
    this.metadata = await metaResponse.json()
    console.log('Heightmap metadata:', this.metadata)
    
    const heightmapResponse = await fetch('/heightmaps/heightmap.pgm')
    if (!heightmapResponse.ok) {
      throw new Error('Could not load heightmap file')
    }
    
    const arrayBuffer = await heightmapResponse.arrayBuffer()
    this.heightData = this.parsePGM(arrayBuffer)
    
    console.log(`Heightmap loaded: ${this.metadata.size}x${this.metadata.size} pixels`)
    
    // Calculate and log chunk distribution
    const chunksAcrossHeightmap = Math.floor(this.metadata.worldSize / this.chunkSize)
    console.log(`Heightmap will be divided into ${chunksAcrossHeightmap}x${chunksAcrossHeightmap} sections`)
    console.log(`Each chunk covers ${this.chunkSize}m x ${this.chunkSize}m`)
  }

  parsePGM(arrayBuffer) {
    // Same PGM parser as ImageHeightmapTerrain
    const data = new Uint8Array(arrayBuffer)
    let headerEnd = 0
    let newlineCount = 0
    
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 10) { // newline character
        newlineCount++
        if (newlineCount === 3) { // After "P5\\n", "1024 1024\\n", "255\\n"
          headerEnd = i + 1
          break
        }
      }
    }
    
    const pixelData = data.slice(headerEnd)
    console.log(`PGM parsed: header ends at ${headerEnd}, ${pixelData.length} pixels`)
    
    return pixelData
  }

  getHeightFromPixel(pixelValue) {
    return (pixelValue / 255) * this.metadata.maxHeight
  }

  generateProceduralHeight(worldX, worldZ) {
    // Procedural terrain generation for areas outside heightmap coverage
    // Similar to the heightmap generator but with infinite extent
    
    let height = 50 // Base sea level
    
    // Large-scale features - mountains and valleys
    const mountain1Distance = Math.sqrt((worldX - 8000) ** 2 + (worldZ - 6000) ** 2)
    height += Math.max(0, 500 - mountain1Distance * 0.03)
    
    const mountain2Distance = Math.sqrt((worldX + 12000) ** 2 + (worldZ - 3000) ** 2)
    height += Math.max(0, 400 - mountain2Distance * 0.04)
    
    const mountain3Distance = Math.sqrt((worldX - 15000) ** 2 + (worldZ + 10000) ** 2)
    height += Math.max(0, 600 - mountain3Distance * 0.025)
    
    // Rolling hills using sine waves
    height += Math.sin(worldX * 0.0003) * Math.cos(worldZ * 0.0004) * 80
    height += Math.sin(worldX * 0.0008 + worldZ * 0.0006) * 60
    height += Math.sin((worldX + worldZ) * 0.0002) * 100
    
    // Valleys - create river-like depressions
    const valley1Distance = Math.abs(worldZ - (Math.sin(worldX * 0.0005) * 2000 + worldX * 0.05))
    if (valley1Distance < 1000) {
      height -= (1000 - valley1Distance) * 0.08
    }
    
    const valley2Distance = Math.abs(worldX - (Math.cos(worldZ * 0.0004) * 1500))
    if (valley2Distance < 800) {
      height -= (800 - valley2Distance) * 0.1
    }
    
    // Add some noise for variation
    const noise1 = Math.sin(worldX * 0.01) * Math.cos(worldZ * 0.01) * 15
    const noise2 = Math.sin(worldX * 0.03 + 100) * Math.sin(worldZ * 0.025 + 200) * 8
    height += noise1 + noise2
    
    // Distance-based height variation - create continental shelf effect
    const distanceFromCenter = Math.sqrt(worldX ** 2 + worldZ ** 2)
    if (distanceFromCenter > 30000) {
      // Gradually reduce to sea level at extreme distances
      const fadeAmount = Math.min(1, (distanceFromCenter - 30000) / 20000)
      height = height * (1 - fadeAmount) + 0 * fadeAmount
    }
    
    // Ensure reasonable height range
    return Math.max(0, Math.min(700, height))
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

  getHeightAtPosition(worldX, worldZ) {
    if (!this.heightData || !this.metadata) {
      return this.generateProceduralHeight(worldX, worldZ)
    }
    
    // Map world coordinates to heightmap UV coordinates (match ImageHeightmapTerrain exactly)
    // World coordinates range from -worldSize/2 to +worldSize/2
    // UV coordinates range from 0 to 1
    const u = (worldX / this.metadata.worldSize) + 0.5
    const v = (worldZ / this.metadata.worldSize) + 0.5
    
    // Check if coordinates are within heightmap bounds
    if (u >= 0 && u <= 1 && v >= 0 && v <= 1) {
      // Use heightmap data
      // Log first few heightmap samples to debug
      if (!this.heightmapLogCount) this.heightmapLogCount = 0
      if (this.heightmapLogCount < 3) {
        console.log(`🗺️ Using heightmap at world(${worldX.toFixed(0)}, ${worldZ.toFixed(0)}) -> UV(${u.toFixed(3)}, ${v.toFixed(3)})`)
        this.heightmapLogCount++
      }
      return this.getHeightAtUV(u, v)
    } else {
      // Generate procedural terrain for areas outside heightmap coverage
      // Log first few procedural terrain samples to debug
      if (!this.proceduralLogCount) this.proceduralLogCount = 0
      if (this.proceduralLogCount < 3) {
        console.log(`🌍 Generating procedural terrain at world(${worldX.toFixed(0)}, ${worldZ.toFixed(0)}) -> UV(${u.toFixed(3)}, ${v.toFixed(3)}) - outside ${this.metadata.worldSize}m heightmap bounds`)
        this.proceduralLogCount++
      }
      return this.generateProceduralHeight(worldX, worldZ)
    }
  }

  worldToChunkCoords(worldX, worldZ, chunkSize) {
    return {
      x: Math.floor(worldX / chunkSize),
      z: Math.floor(worldZ / chunkSize)
    }
  }

  chunkToWorldCoords(chunkX, chunkZ, chunkSize) {
    return {
      x: chunkX * chunkSize,
      z: chunkZ * chunkSize
    }
  }

  getChunkKey(chunkX, chunkZ, tierIndex) {
    return `${tierIndex}:${chunkX},${chunkZ}`
  }

  calculateLOD(chunkX, chunkZ, playerWorldX, playerWorldZ, tier) {
    // Calculate distance from player to chunk center
    const chunkWorldPos = this.chunkToWorldCoords(chunkX, chunkZ, tier.chunkSize)
    const chunkCenterX = chunkWorldPos.x + tier.chunkSize / 2
    const chunkCenterZ = chunkWorldPos.z + tier.chunkSize / 2
    
    const distance = Math.sqrt(
      Math.pow(playerWorldX - chunkCenterX, 2) + 
      Math.pow(playerWorldZ - chunkCenterZ, 2)
    )
    
    // Find appropriate LOD level for this tier
    for (let i = tier.lodLevels.length - 1; i >= 0; i--) {
      if (distance >= tier.lodLevels[i].distance) {
        return i
      }
    }
    return 0 // Highest detail for very close chunks
  }

  createChunkGeometry(chunkX, chunkZ, lodLevel, tier) {
    const lod = tier.lodLevels[lodLevel]
    const resolution = lod.resolution
    const chunkSize = tier.chunkSize
    
    // Create plane geometry for this chunk
    const geometry = new THREE.PlaneGeometry(
      chunkSize,
      chunkSize,
      resolution - 1,
      resolution - 1
    )
    
    const vertices = geometry.attributes.position.array
    const colors = new Float32Array(vertices.length)
    
    const chunkWorldPos = this.chunkToWorldCoords(chunkX, chunkZ, chunkSize)
    
    // Generate heights for this chunk by sampling the heightmap
    let vertexIndex = 0
    for (let z = 0; z < resolution; z++) {
      for (let x = 0; x < resolution; x++) {
        // Calculate world position for this vertex within the chunk
        const localX = (x / (resolution - 1)) * chunkSize
        const localZ = (z / (resolution - 1)) * chunkSize
        
        const worldX = chunkWorldPos.x + localX
        const worldZ = chunkWorldPos.z + localZ
        
        const height = this.getHeightAtPosition(worldX, worldZ)
        
        // Set vertex height
        vertices[vertexIndex * 3 + 2] = height
        
        // Set vertex color based on height
        this.setVertexColor(colors, vertexIndex, height)
        
        vertexIndex++
      }
    }
    
    // Apply geometry changes
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
    
    return geometry
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3
    
    // Same color scheme as ImageHeightmapTerrain
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

  createChunkMesh(chunkX, chunkZ, lodLevel, tier) {
    const geometry = this.createChunkGeometry(chunkX, chunkZ, lodLevel, tier)
    
    // Use same material as before for sunset compatibility
    const material = new THREE.MeshLambertMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    
    // Position chunk in world space at its center
    const worldPos = this.chunkToWorldCoords(chunkX, chunkZ, tier.chunkSize)
    mesh.position.set(
      worldPos.x + tier.chunkSize / 2, 
      0, 
      worldPos.z + tier.chunkSize / 2
    )
    mesh.rotation.x = -Math.PI / 2
    
    // Enable shadows
    mesh.receiveShadow = true
    mesh.castShadow = true
    
    return mesh
  }


  unloadChunk(chunkKey) {
    const chunk = this.chunks.get(chunkKey)
    if (chunk) {
      // Remove from scene and dispose resources
      this.scene.remove(chunk.mesh)
      chunk.mesh.geometry.dispose()
      chunk.mesh.material.dispose()
      
      // Remove from chunk map
      this.chunks.delete(chunkKey)
      
      console.log(`Unloaded chunk ${chunkKey}`)
    }
  }

  update(playerPosition) {
    if (!this.heightData) return
    
    const playerWorldX = playerPosition.x
    const playerWorldZ = playerPosition.z
    
    // Use the first (smallest) tier for player position tracking
    const baseTier = this.chunkTiers[0]
    const playerChunk = this.worldToChunkCoords(playerWorldX, playerWorldZ, baseTier.chunkSize)
    
    // Debug player chunk tracking
    const isFirstRun = this.lastPlayerChunk.x === null
    const chunkChanged = playerChunk.x !== this.lastPlayerChunk.x || playerChunk.z !== this.lastPlayerChunk.z
    
    // Force reload once to test hierarchical system
    if (isFirstRun || chunkChanged) {
      console.log(`🚁 HIERARCHICAL TRIGGER: Player at chunk (${playerChunk.x},${playerChunk.z}) world (${playerWorldX.toFixed(0)}, ${playerWorldZ.toFixed(0)})`)
      console.log(`   - First run: ${isFirstRun}`)
      console.log(`   - Chunk changed: ${chunkChanged}`)
      console.log(`   - Last chunk: (${this.lastPlayerChunk.x}, ${this.lastPlayerChunk.z})`)
      
      // Clear existing chunks first to ensure proper hierarchical loading
      console.log(`🔄 Clearing ${this.chunks.size} existing chunks for hierarchical reload`)
      this.cleanup()
      
      // Load chunks for all appropriate tiers
      console.log(`🔧 Starting hierarchical loading for all tiers...`)
      this.loadChunksForAllTiers(playerWorldX, playerWorldZ)
      
      this.lastPlayerChunk = { x: playerChunk.x, z: playerChunk.z }
      console.log(`✅ Hierarchical loading complete: ${this.chunks.size} chunks loaded`)
      
      // Only do this once for debugging
      if (isFirstRun) {
        console.log(`🔒 Hierarchical system initialized, future updates only on chunk movement`)
        console.log(`📊 Ultra-Distance Terrain System Active:`)
        this.chunkTiers.forEach((tier, i) => {
          const tierName = i >= 3 ? '🚀 ULTRA-DISTANCE' : i >= 2 ? '🌄 FAR' : i >= 1 ? '🗻 MEDIUM' : '🏔️ CLOSE'
          const chunkSizeStr = tier.chunkSize >= 5000 ? `${tier.chunkSize/1000}km` : `${tier.chunkSize}m`
          const rangeStr = `${tier.minDistance/1000}km-${tier.maxDistance/1000}km`
          console.log(`   ${tierName} Tier ${i}: ${chunkSizeStr} chunks, ${rangeStr} range, ${tier.loadRadius} radius`)
        })
        console.log(`🌍 Total viewing distance: ${this.chunkTiers[this.chunkTiers.length-1].maxDistance/1000}km`)
      }
    }
    
    // Calculate total active chunks for performance monitoring
    const activeChunks = this.chunks.size
    const totalLoadRadius = this.chunkTiers.reduce((sum, tier) => sum + tier.loadRadius, 0)
    console.log(`Active chunks: ${activeChunks} (Target: ~${totalLoadRadius * 4})`)
  }

  loadChunksForAllTiers(playerWorldX, playerWorldZ) {
    // Load chunks for each tier based on distance
    for (let tierIndex = 0; tierIndex < this.chunkTiers.length; tierIndex++) {
      const tier = this.chunkTiers[tierIndex]
      
      const playerChunk = this.worldToChunkCoords(playerWorldX, playerWorldZ, tier.chunkSize)
      
      // Load chunks in a radius around the player for this tier
      for (let x = playerChunk.x - tier.loadRadius; x <= playerChunk.x + tier.loadRadius; x++) {
        for (let z = playerChunk.z - tier.loadRadius; z <= playerChunk.z + tier.loadRadius; z++) {
          this.loadChunkForTier(x, z, playerWorldX, playerWorldZ, tier, tierIndex)
        }
      }
    }
  }

  loadChunkForTier(chunkX, chunkZ, playerWorldX, playerWorldZ, tier, tierIndex) {
    const chunkKey = this.getChunkKey(chunkX, chunkZ, tierIndex)
    
    // Skip if chunk already loaded
    if (this.chunks.has(chunkKey)) {
      return
    }
    
    // Calculate distance to see if this chunk should be loaded at this tier
    const chunkWorldPos = this.chunkToWorldCoords(chunkX, chunkZ, tier.chunkSize)
    const chunkCenterX = chunkWorldPos.x + tier.chunkSize / 2
    const chunkCenterZ = chunkWorldPos.z + tier.chunkSize / 2
    const distance = Math.sqrt(
      Math.pow(playerWorldX - chunkCenterX, 2) + 
      Math.pow(playerWorldZ - chunkCenterZ, 2)
    )
    
    // Only load if within tier's distance range
    if (distance >= tier.minDistance && distance <= tier.maxDistance) {
      const lodLevel = this.calculateLOD(chunkX, chunkZ, playerWorldX, playerWorldZ, tier)
      const mesh = this.createChunkMesh(chunkX, chunkZ, lodLevel, tier)
      
      const chunk = {
        x: chunkX,
        z: chunkZ,
        mesh: mesh,
        lodLevel: lodLevel,
        tierIndex: tierIndex,
        lastDistance: distance
      }
      
      this.scene.add(mesh)
      this.chunks.set(chunkKey, chunk)
      
      // Log first few chunks to debug, with special highlighting for ultra-distance tiers
      if (this.chunks.size < 100) {
        const tierName = tierIndex >= 3 ? '🚀 ULTRA-DISTANCE' : tierIndex >= 2 ? '🌄 FAR' : tierIndex >= 1 ? '🗻 MEDIUM' : '🏔️ CLOSE'
        const chunkSizeStr = tier.chunkSize >= 5000 ? `${tier.chunkSize/1000}km` : `${tier.chunkSize}m`
        console.log(`✅ Loaded ${tierName} tier ${tierIndex} chunk (${chunkX},${chunkZ}) distance:${distance.toFixed(0)} size:${chunkSizeStr} LOD ${lodLevel} (${tier.lodLevels[lodLevel].name}) res:${tier.lodLevels[lodLevel].resolution}`)
      }
    } else {
      // Log skipped chunks for first few attempts to debug
      if (this.chunks.size < 20) {
        console.log(`❌ Skipped tier ${tierIndex} chunk (${chunkX},${chunkZ}) distance:${distance.toFixed(0)} (range:${tier.minDistance}-${tier.maxDistance})`)
      }
    }
  }

  unloadDistantChunks(playerWorldX, playerWorldZ) {
    const chunksToUnload = []
    
    for (const [chunkKey, chunk] of this.chunks.entries()) {
      const tier = this.chunkTiers[chunk.tierIndex]
      const chunkWorldPos = this.chunkToWorldCoords(chunk.x, chunk.z, tier.chunkSize)
      const chunkCenterX = chunkWorldPos.x + tier.chunkSize / 2
      const chunkCenterZ = chunkWorldPos.z + tier.chunkSize / 2
      const distance = Math.sqrt(
        Math.pow(playerWorldX - chunkCenterX, 2) + 
        Math.pow(playerWorldZ - chunkCenterZ, 2)
      )
      
      // Unload if outside tier's range or too far for unload radius
      const unloadDistance = tier.maxDistance + tier.chunkSize // Add some buffer
      if (distance > unloadDistance) {
        chunksToUnload.push(chunkKey)
      }
    }
    
    chunksToUnload.forEach(chunkKey => this.unloadChunk(chunkKey))
  }

  cleanup() {
    // Unload all chunks
    for (const chunkKey of this.chunks.keys()) {
      this.unloadChunk(chunkKey)
    }
    this.chunks.clear()
  }
}