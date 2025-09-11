import * as THREE from 'three'

export class TerrainGenerator {
  constructor() {
    this.levelLength = 20000
    this.levelWidth = 3000
    this.segments = 512
    this.heightScale = 200
    this.terrainChunks = []
    this.structures = []
  }

  generate(scene) {
    this.scene = scene
    this.createLongTerrain(scene)
    this.createSkybox(scene)
    this.createScrollingStructures(scene)
  }

  createLongTerrain(scene) {
    const chunkSize = 2000
    const numChunks = Math.ceil(this.levelLength / chunkSize)
    
    for (let i = 0; i < numChunks; i++) {
      const geometry = new THREE.PlaneGeometry(this.levelWidth, chunkSize, 128, 128)
      
      const vertices = geometry.attributes.position.array
      for (let v = 0; v < vertices.length; v += 3) {
        const x = vertices[v]
        const z = vertices[v + 1] + (i * chunkSize - this.levelLength / 2)
        
        vertices[v + 2] = this.getHeight(x, z)
      }
      
      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()

      const material = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.3, 0.4, 0.2 + Math.random() * 0.1),
        wireframe: false,
        transparent: true,
        opacity: 0.9
      })

      const terrain = new THREE.Mesh(geometry, material)
      terrain.rotation.x = -Math.PI / 2
      terrain.position.z = i * chunkSize - this.levelLength / 2
      terrain.receiveShadow = true
      terrain.castShadow = false
      
      this.terrainChunks.push(terrain)
      scene.add(terrain)
    }
  }

  getHeight(x, z) {
    const scale1 = 0.01
    const scale2 = 0.005
    const scale3 = 0.002
    
    let height = 0
    height += Math.sin(x * scale1) * Math.cos(z * scale1) * 50
    height += Math.sin(x * scale2) * Math.cos(z * scale2) * 100
    height += Math.sin(x * scale3) * Math.cos(z * scale3) * 200
    height += (Math.random() - 0.5) * 20
    
    return height
  }

  createSkybox(scene) {
    const skyboxGeometry = new THREE.SphereGeometry(8000, 32, 32)
    
    const skyboxMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x0077ff) },
        bottomColor: { value: new THREE.Color(0x000511) },
        offset: { value: 33 },
        exponent: { value: 0.6 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide
    })

    const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial)
    scene.add(skybox)
  }

  createScrollingStructures(scene) {
    const structureSpacing = 400
    const numStructures = this.levelLength / structureSpacing
    
    for (let i = 0; i < numStructures; i++) {
      const z = (i * structureSpacing) - this.levelLength / 2
      const x = (Math.random() - 0.5) * (this.levelWidth - 200)
      const y = this.getHeight(x, z) + 50

      const structureType = Math.random()
      if (structureType < 0.4) {
        this.createBuilding(scene, x, y, z)
      } else if (structureType < 0.7) {
        this.createTower(scene, x, y, z)
      } else {
        this.createCrystal(scene, x, y, z)
      }
    }
    
    this.createLevelMarkers(scene)
  }

  createLevelMarkers(scene) {
    for (let i = 0; i <= 10; i++) {
      const z = (i * this.levelLength / 10) - this.levelLength / 2
      
      const geometry = new THREE.RingGeometry(50, 80, 16)
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      })
      
      const marker = new THREE.Mesh(geometry, material)
      marker.position.set(0, 300, z)
      marker.rotation.x = Math.PI / 2
      
      scene.add(marker)
      this.structures.push(marker)
    }
  }

  createBuilding(scene, x, y, z) {
    const width = 50 + Math.random() * 100
    const height = 100 + Math.random() * 200
    const depth = 50 + Math.random() * 100

    const geometry = new THREE.BoxGeometry(width, height, depth)
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.6, 0.8, 0.3 + Math.random() * 0.4),
      transparent: true,
      opacity: 0.8
    })

    const building = new THREE.Mesh(geometry, material)
    building.position.set(x, y + height / 2, z)
    building.castShadow = true
    building.receiveShadow = true
    
    scene.add(building)

    const edgeGeometry = new THREE.EdgesGeometry(geometry)
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, opacity: 0.8, transparent: true })
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial)
    edges.position.copy(building.position)
    scene.add(edges)
  }

  createTower(scene, x, y, z) {
    const radius = 20 + Math.random() * 30
    const height = 200 + Math.random() * 300
    const segments = 8

    const geometry = new THREE.CylinderGeometry(radius, radius * 1.5, height, segments)
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.8, 0.9, 0.4 + Math.random() * 0.3),
      transparent: true,
      opacity: 0.7
    })

    const tower = new THREE.Mesh(geometry, material)
    tower.position.set(x, y + height / 2, z)
    tower.castShadow = true
    tower.receiveShadow = true
    
    scene.add(tower)
  }

  createCrystal(scene, x, y, z) {
    const size = 30 + Math.random() * 40
    const geometry = new THREE.OctahedronGeometry(size)
    
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.3, 1.0, 0.5),
      transparent: true,
      opacity: 0.6,
      emissive: new THREE.Color().setHSL(0.3, 0.5, 0.1)
    })

    const crystal = new THREE.Mesh(geometry, material)
    crystal.position.set(x, y + size, z)
    crystal.rotation.x = Math.random() * Math.PI
    crystal.rotation.z = Math.random() * Math.PI
    crystal.castShadow = true
    crystal.receiveShadow = true
    
    scene.add(crystal)

    crystal.userData.rotationSpeed = (Math.random() - 0.5) * 0.02
    crystal.userData.update = function(deltaTime) {
      this.rotation.y += this.userData.rotationSpeed
    }
  }
}