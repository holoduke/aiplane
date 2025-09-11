import * as THREE from 'three'

export class DepthMapTerrain {
  constructor(scene) {
    this.scene = scene
    this.size = 10000  // 10km x 10km terrain
    this.resolution = 1000  // 1000x1000 vertices = 1 million vertices!
    this.heightScale = 250
    this.terrain = null
    this.depthMap = null
    
    this.init()
  }

  init() {
    this.generateDepthMap()
    this.createTerrain()
  }

  generateDepthMap() {
    // Create a 2D array for the height map
    this.depthMap = []
    
    console.log('Generating depth map...')
    
    for (let y = 0; y < this.resolution; y++) {
      this.depthMap[y] = []
      for (let x = 0; x < this.resolution; x++) {
        const height = this.generateHeightAt(x, y)
        this.depthMap[y][x] = height
      }
    }
    
    console.log('Depth map generated!')
  }

  generateHeightAt(x, y) {
    // Convert grid coordinates to world coordinates
    const worldX = (x / this.resolution - 0.5) * this.size
    const worldY = (y / this.resolution - 0.5) * this.size
    
    let height = 0
    
    // Base sea level
    height += 50
    
    // Create mountain ranges - realistic scale
    const mountainRange1 = this.createMountainRange(worldX, worldY, -2000, 1000, 800, 0.0002)  // North range
    const mountainRange2 = this.createMountainRange(worldX, worldY, 1500, -800, 1200, 0.00015) // South range  
    const mountainRange3 = this.createMountainRange(worldX, worldY, 0, 0, 600, 0.0003)         // Central hills
    
    height += mountainRange1 + mountainRange2 + mountainRange3
    
    // Valley systems - carve through mountains
    const valley1 = this.createValley(worldX, worldY, -1000, 500, 300, 0.0004)
    const valley2 = this.createValley(worldX, worldY, 800, -600, 200, 0.0005)
    
    height -= valley1 + valley2
    
    // Rolling foothills
    height += Math.sin(worldX * 0.0008) * 80 + Math.cos(worldY * 0.0006) * 60
    height += Math.sin(worldX * 0.0012 + worldY * 0.001) * 40
    
    // Fine terrain details
    height += Math.sin(worldX * 0.003) * 15 + Math.cos(worldY * 0.004) * 12
    height += Math.sin(worldX * 0.008 + worldY * 0.006) * 8
    
    // Ensure realistic range: sea level to mountain peaks
    return Math.max(0, Math.min(1500, height))
  }

  createMountainRange(x, y, centerX, centerY, maxHeight, frequency) {
    // Distance from mountain center
    const dx = x - centerX
    const dy = y - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Mountain profile - peaks in center, slopes on sides
    const mountainProfile = Math.max(0, 1 - (distance / 3000)) // 3km radius
    
    // Add noise to create realistic mountain peaks and ridges
    const mountainNoise = Math.sin(x * frequency) * Math.cos(y * frequency) * 0.7
    const ridgeNoise = Math.abs(Math.sin(x * frequency * 2) + Math.cos(y * frequency * 2)) * 0.3
    
    const mountainHeight = mountainProfile * maxHeight * (1 + mountainNoise + ridgeNoise)
    
    return Math.max(0, mountainHeight)
  }

  createValley(x, y, centerX, centerY, depth, frequency) {
    // Distance from valley center
    const dx = x - centerX
    const dy = y - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Valley profile - deep in center, shallow on sides
    const valleyProfile = Math.max(0, 1 - (distance / 2000)) // 2km radius
    
    // River-like meandering
    const meander = Math.sin(x * frequency) * Math.cos(y * frequency * 1.3)
    
    const valleyDepth = valleyProfile * depth * (1 + meander * 0.5)
    
    return Math.max(0, valleyDepth)
  }

  noise(x, y) {
    // Simple 2D noise function
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
    return (n - Math.floor(n)) * 2 - 1
  }

  createTerrain() {
    console.log('Creating terrain geometry...')
    
    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(
      this.size, 
      this.size, 
      this.resolution - 1, 
      this.resolution - 1
    )
    
    // Apply depth map to vertices
    const vertices = geometry.attributes.position.array
    const colors = new Float32Array(vertices.length)
    
    let vertexIndex = 0
    for (let y = 0; y < this.resolution; y++) {
      for (let x = 0; x < this.resolution; x++) {
        const height = this.depthMap[y][x]
        
        // Set vertex height
        vertices[vertexIndex * 3 + 2] = height
        
        // Set vertex color based on height
        this.setVertexColor(colors, vertexIndex, height)
        
        vertexIndex++
      }
    }
    
    // Update geometry
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
    
    // Create material
    const material = new THREE.MeshLambertMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide,
      flatShading: false
    })
    
    // Create terrain mesh
    this.terrain = new THREE.Mesh(geometry, material)
    this.terrain.rotation.x = -Math.PI / 2
    this.terrain.receiveShadow = true
    this.terrain.castShadow = false
    
    this.scene.add(this.terrain)
    
    console.log('Terrain created with', vertices.length / 3, 'vertices!')
    
    // Add some structures
    this.addStructures()
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3
    
    if (height < 10) {
      // Sea level / water
      colors[i] = 0.1
      colors[i + 1] = 0.4
      colors[i + 2] = 0.8
    } else if (height < 100) {
      // Lowlands - green
      colors[i] = 0.2
      colors[i + 1] = 0.7
      colors[i + 2] = 0.3
    } else if (height < 200) {
      // Hills - darker green
      colors[i] = 0.15
      colors[i + 1] = 0.6
      colors[i + 2] = 0.2
    } else if (height < 400) {
      // Foothills - forest
      colors[i] = 0.1
      colors[i + 1] = 0.4
      colors[i + 2] = 0.1
    } else if (height < 800) {
      // Mountain slopes - brown/green
      colors[i] = 0.4
      colors[i + 1] = 0.5
      colors[i + 2] = 0.2
    } else if (height < 1200) {
      // High mountains - rocky brown
      colors[i] = 0.6
      colors[i + 1] = 0.5
      colors[i + 2] = 0.4
    } else {
      // Snow peaks - white
      colors[i] = 0.9
      colors[i + 1] = 0.9
      colors[i + 2] = 1.0
    }
  }

  addStructures() {
    const numStructures = 30
    
    for (let i = 0; i < numStructures; i++) {
      const x = (Math.random() - 0.5) * this.size * 0.8
      const z = (Math.random() - 0.5) * this.size * 0.8
      const height = this.getHeightAtPosition(x, z)
      
      if (height > 20 && height < 600) {
        this.createStructure(x, height, z)
      }
    }
  }

  createStructure(x, y, z) {
    const structureType = Math.random()
    
    if (structureType < 0.3) {
      this.createBuilding(x, y, z)
    } else if (structureType < 0.6) {
      this.createTower(x, y, z)
    } else {
      this.createCrystal(x, y, z)
    }
  }

  createBuilding(x, y, z) {
    const width = 30 + Math.random() * 50
    const height = 50 + Math.random() * 100
    const depth = 30 + Math.random() * 50
    
    const geometry = new THREE.BoxGeometry(width, height, depth)
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.6, 0.8, 0.4 + Math.random() * 0.3),
      transparent: true,
      opacity: 0.8
    })
    
    const building = new THREE.Mesh(geometry, material)
    building.position.set(x, y + height / 2, z)
    building.castShadow = true
    building.receiveShadow = true
    
    this.scene.add(building)
  }

  createTower(x, y, z) {
    const radius = 10 + Math.random() * 15
    const height = 80 + Math.random() * 120
    
    const geometry = new THREE.CylinderGeometry(radius, radius * 1.2, height, 8)
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.8, 0.9, 0.5),
      transparent: true,
      opacity: 0.7
    })
    
    const tower = new THREE.Mesh(geometry, material)
    tower.position.set(x, y + height / 2, z)
    tower.castShadow = true
    tower.receiveShadow = true
    
    this.scene.add(tower)
  }

  createCrystal(x, y, z) {
    const size = 15 + Math.random() * 25
    const geometry = new THREE.OctahedronGeometry(size)
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.3 + Math.random() * 0.4, 1.0, 0.6),
      transparent: true,
      opacity: 0.7,
      emissive: new THREE.Color().setHSL(0.3, 0.5, 0.1)
    })
    
    const crystal = new THREE.Mesh(geometry, material)
    crystal.position.set(x, y + size, z)
    crystal.rotation.x = Math.random() * Math.PI
    crystal.rotation.z = Math.random() * Math.PI
    crystal.castShadow = true
    crystal.receiveShadow = true
    
    this.scene.add(crystal)
  }

  getHeightAtPosition(worldX, worldZ) {
    // Convert world coordinates to depth map coordinates
    const mapX = Math.floor(((worldX / this.size) + 0.5) * this.resolution)
    const mapZ = Math.floor(((worldZ / this.size) + 0.5) * this.resolution)
    
    // Clamp to valid range
    const clampedX = Math.max(0, Math.min(this.resolution - 1, mapX))
    const clampedZ = Math.max(0, Math.min(this.resolution - 1, mapZ))
    
    return this.depthMap[clampedZ][clampedX] || 0
  }

  update(playerPosition) {
    // Terrain is static, no updates needed for depth map approach
    // Could add LOD or other optimizations here if needed
  }

  cleanup() {
    if (this.terrain) {
      this.scene.remove(this.terrain)
      this.terrain.geometry.dispose()
      this.terrain.material.dispose()
    }
  }
}