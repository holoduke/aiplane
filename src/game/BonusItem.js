import * as THREE from 'three'

export class BonusItem {
  constructor(scene, position) {
    this.scene = scene
    this.position = position.clone()
    this.collected = false
    this.bobOffset = Math.random() * Math.PI * 2 // Random bob phase
    this.rotationSpeed = 0.02
    this.bobSpeed = 0.03
    this.bobAmount = 20 // Units to bob up/down
    this.originalY = position.y
    
    this.createBonusItem()
    this.createGlowEffect()
    this.createParticleSystem()
  }

  createBonusItem() {
    // Create main bonus item group
    this.itemGroup = new THREE.Group()
    
    // Core crystal/gem shape
    const coreGeometry = new THREE.OctahedronGeometry(50, 1)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x008888,
      emissiveIntensity: 1.5,
      metalness: 0.3,
      roughness: 0.1,
      transparent: true,
      opacity: 0.9
    })
    
    this.coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    this.itemGroup.add(this.coreMesh)
    
    // Outer ring
    const ringGeometry = new THREE.TorusGeometry(70, 6, 8, 16)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      emissive: 0x888800,
      emissiveIntensity: 2.0,
      metalness: 0.8,
      roughness: 0.2
    })
    
    this.ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    this.ringMesh.rotation.x = Math.PI / 4
    this.itemGroup.add(this.ringMesh)
    
    // Inner rotating elements
    for (let i = 0; i < 3; i++) {
      const smallGem = new THREE.Mesh(
        new THREE.TetrahedronGeometry(16, 0),
        new THREE.MeshStandardMaterial({
          color: 0xff00ff,
          emissive: 0x880088,
          emissiveIntensity: 1.8,
          metalness: 0.5,
          roughness: 0.3
        })
      )
      
      const angle = (i / 3) * Math.PI * 2
      smallGem.position.set(
        Math.cos(angle) * 60,
        0,
        Math.sin(angle) * 60
      )
      
      this.itemGroup.add(smallGem)
    }
    
    this.itemGroup.position.copy(this.position)
    this.scene.add(this.itemGroup)
  }

  createGlowEffect() {
    // Outer glow shell
    const glowGeometry = new THREE.SphereGeometry(120, 16, 16)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    })
    
    this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    this.itemGroup.add(this.glowMesh)
    
    // Animated glow pulses
    this.pulsePhase = 0
  }

  createParticleSystem() {
    // Sparkle particles around the item
    const particleCount = 20
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      // Random positions around the item
      const radius = 100 + Math.random() * 60
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.cos(phi)
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      
      // Random sparkle colors
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0 // Yellow
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1 // Cyan
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0; colors[i * 3 + 2] = 1 // Magenta
      }
      
      sizes[i] = Math.random() * 5 + 2
    }
    
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    
    const particleMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      size: 3,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    })
    
    this.particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    this.itemGroup.add(this.particleSystem)
    
    this.particleRotation = 0
  }

  update(deltaTime) {
    if (this.collected) return
    
    // Rotate the main item
    this.itemGroup.rotation.y += this.rotationSpeed
    
    // Rotate core and ring at different speeds
    this.coreMesh.rotation.x += this.rotationSpeed * 1.5
    this.coreMesh.rotation.z += this.rotationSpeed * 0.8
    this.ringMesh.rotation.y += this.rotationSpeed * 2
    
    // Bob up and down
    this.bobOffset += this.bobSpeed
    const bobY = Math.sin(this.bobOffset) * this.bobAmount
    this.itemGroup.position.y = this.originalY + bobY
    
    // Animate glow effect
    this.pulsePhase += deltaTime * 3
    const pulseIntensity = (Math.sin(this.pulsePhase) + 1) * 0.5
    this.glowMesh.material.opacity = 0.2 + pulseIntensity * 0.3
    this.glowMesh.scale.setScalar(0.8 + pulseIntensity * 0.6)
    
    // Animate particles
    this.particleRotation += deltaTime
    this.particleSystem.rotation.y = this.particleRotation * 0.5
    this.particleSystem.rotation.x = Math.sin(this.particleRotation) * 0.2
    
    // Update particle opacity
    const positions = this.particleSystem.geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(Date.now() * 0.01 + i) * 0.5
    }
    this.particleSystem.geometry.attributes.position.needsUpdate = true
  }

  checkCollision(playerPosition, collectionRadius = 120) {
    if (this.collected) return false
    
    const distance = this.itemGroup.position.distanceTo(playerPosition)
    
    if (distance < collectionRadius) {
      this.collect()
      return true
    }
    
    return false
  }

  collect() {
    if (this.collected) return
    
    this.collected = true
    
    // Collection effect - expand and fade out
    const duration = 1000 // 1 second
    const startTime = Date.now()
    
    const animateCollection = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Scale up and fade out
      const scale = 1 + progress * 2
      const opacity = 1 - progress
      
      this.itemGroup.scale.setScalar(scale)
      
      // Fade all materials
      this.coreMesh.material.opacity = opacity * 0.9
      this.ringMesh.material.opacity = opacity
      this.glowMesh.material.opacity = opacity * 0.1
      this.particleSystem.material.opacity = opacity * 0.8
      
      if (progress < 1) {
        requestAnimationFrame(animateCollection)
      } else {
        this.destroy()
      }
    }
    
    animateCollection()
    
    // Play collection sound effect (if you have audio system)
    console.log('🌟 Bonus item collected!')
  }

  destroy() {
    if (this.itemGroup) {
      // Dispose geometries and materials
      this.itemGroup.traverse((child) => {
        if (child.geometry) child.geometry.dispose()
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose())
          } else {
            child.material.dispose()
          }
        }
      })
      
      this.scene.remove(this.itemGroup)
      this.itemGroup = null
    }
  }

  getPosition() {
    return this.itemGroup ? this.itemGroup.position : this.position
  }

  isCollected() {
    return this.collected
  }
}