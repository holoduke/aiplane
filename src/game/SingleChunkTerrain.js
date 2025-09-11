import * as THREE from 'three'

export class SingleChunkTerrain {
  constructor(scene) {
    this.scene = scene
    this.chunkSize = 4000  // 4km x 4km single chunk
    this.resolution = 200  // 200x200 vertices
    this.terrain = null
    
    this.init()
  }

  init() {
    console.log('Creating single terrain chunk...')
    this.createTerrain()
  }

  // Simple but effective noise function
  noise(x, z) {
    const n = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453
    return (n - Math.floor(n)) * 2 - 1
  }

  // Much smoother noise with better scale
  octaveNoise(x, z, octaves = 4) {
    let value = 0
    let amplitude = 1
    let frequency = 0.0002  // Much smaller frequency for larger features
    let maxValue = 0
    
    for (let i = 0; i < octaves; i++) {
      value += this.noise(x * frequency, z * frequency) * amplitude
      maxValue += amplitude
      amplitude *= 0.4  // Less contribution from higher octaves
      frequency *= 1.5  // Gentler frequency multiplication
    }
    
    return value / maxValue
  }

  generateHeightAt(x, z) {
    let height = 0
    
    // Base height
    height += 50
    
    // Create a simple mountain in the center - very smooth
    const centerX = 0
    const centerZ = 0
    const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (z - centerZ) ** 2)
    const mountainHeight = Math.max(0, 600 - distanceFromCenter * 0.3)
    height += mountainHeight
    
    // Create a second smaller mountain
    const mountain2Distance = Math.sqrt((x - 1000) ** 2 + (z - 800) ** 2)
    const mountain2Height = Math.max(0, 300 - mountain2Distance * 0.4)
    height += mountain2Height
    
    // Remove the rectangular valley - it looks weird
    // if (Math.abs(x + 800) < 200 && Math.abs(z) < 1000) {
    //   height -= 100
    // }
    
    // NO NOISE AT ALL - completely smooth
    
    return Math.max(20, Math.min(700, height))
  }

  createTerrain() {
    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(
      this.chunkSize,
      this.chunkSize,
      this.resolution - 1,
      this.resolution - 1
    )
    
    const vertices = geometry.attributes.position.array
    const colors = new Float32Array(vertices.length)
    
    let minHeight = Infinity
    let maxHeight = -Infinity
    
    // Generate heights
    let vertexIndex = 0
    for (let z = 0; z < this.resolution; z++) {
      for (let x = 0; x < this.resolution; x++) {
        const worldX = (x / (this.resolution - 1) - 0.5) * this.chunkSize
        const worldZ = (z / (this.resolution - 1) - 0.5) * this.chunkSize
        
        const height = this.generateHeightAt(worldX, worldZ)
        
        minHeight = Math.min(minHeight, height)
        maxHeight = Math.max(maxHeight, height)
        
        // Set vertex height
        vertices[vertexIndex * 3 + 2] = height
        
        // Set vertex color
        this.setVertexColor(colors, vertexIndex, height)
        
        vertexIndex++
      }
    }
    
    console.log(`Terrain generated: ${minHeight.toFixed(1)}m to ${maxHeight.toFixed(1)}m`)
    
    // Apply geometry changes
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
    
    // Create material
    const material = new THREE.MeshLambertMaterial({
      vertexColors: true,
      transparent: false,
      side: THREE.FrontSide
    })
    
    // Create mesh
    this.terrain = new THREE.Mesh(geometry, material)
    this.terrain.rotation.x = -Math.PI / 2
    this.terrain.receiveShadow = true
    this.terrain.castShadow = false
    
    this.scene.add(this.terrain)
    
    console.log('Single terrain chunk created successfully!')
  }

  setVertexColor(colors, vertexIndex, height) {
    const i = vertexIndex * 3
    
    if (height < 50) {
      // Water - blue
      colors[i] = 0.1
      colors[i + 1] = 0.5
      colors[i + 2] = 0.9
    } else if (height < 150) {
      // Lowlands - bright green
      colors[i] = 0.2
      colors[i + 1] = 0.8
      colors[i + 2] = 0.3
    } else if (height < 300) {
      // Hills - medium green
      colors[i] = 0.3
      colors[i + 1] = 0.6
      colors[i + 2] = 0.2
    } else if (height < 500) {
      // Foothills - dark green
      colors[i] = 0.2
      colors[i + 1] = 0.4
      colors[i + 2] = 0.1
    } else if (height < 700) {
      // Mountain slopes - brown
      colors[i] = 0.5
      colors[i + 1] = 0.4
      colors[i + 2] = 0.2
    } else if (height < 900) {
      // Rocky peaks - gray
      colors[i] = 0.5
      colors[i + 1] = 0.5
      colors[i + 2] = 0.4
    } else {
      // Snow peaks - white
      colors[i] = 0.9
      colors[i + 1] = 0.9
      colors[i + 2] = 1.0
    }
  }

  getHeightAtPosition(worldX, worldZ) {
    // Check if position is within our chunk bounds
    if (Math.abs(worldX) > this.chunkSize / 2 || Math.abs(worldZ) > this.chunkSize / 2) {
      return 100 // Default height outside chunk
    }
    
    // Generate height on-demand for collision detection
    return this.generateHeightAt(worldX, worldZ)
  }

  update(playerPosition) {
    // Static terrain - no updates needed
  }

  cleanup() {
    if (this.terrain) {
      this.scene.remove(this.terrain)
      this.terrain.geometry.dispose()
      this.terrain.material.dispose()
    }
  }
}