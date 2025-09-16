import * as THREE from 'three'
import { Enemy } from './Enemy.js'

export class FlyingOrb extends Enemy {
  constructor(scene, position) {
    super(scene, position)
    
    // Flying orb specific properties - increased health for multiple hits
    this.health = 150
    this.maxHealth = 150
    this.speed = 800
    this.attackDamage = 15
    this.points = 150
    
    // Orb-specific AI settings
    this.hoverDistance = 1500 // Stay this far in front of player
    this.sideOffset = 0 // Current side offset from player path
    this.maxSideOffset = 600 // Maximum side movement
    this.evasionSpeed = 1200 // Speed when evading
    this.isEvading = false
    this.evasionTime = 0
    this.evasionDuration = 1500 // 1.5 seconds evasion
    
    // Movement patterns
    this.movePattern = 'hover' // 'hover', 'circle', 'zigzag', 'aggressive'
    this.patternTime = 0
    this.patternDuration = 5000 // Change pattern every 5 seconds
    
    this.createOrb()
  }

  createOrb() {
    // Create orb group
    this.orbGroup = new THREE.Group()
    
    // Core orb
    const coreGeometry = new THREE.SphereGeometry(20, 16, 12)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0x440000,
      emissiveIntensity: 1.0,
      metalness: 0.3,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9
    })
    
    this.coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    this.orbGroup.add(this.coreMesh)
    
    // Outer energy ring
    const ringGeometry = new THREE.TorusGeometry(30, 2, 8, 16)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4444,
      emissive: 0x660000,
      emissiveIntensity: 1.5,
      metalness: 0.8,
      roughness: 0.1
    })
    
    this.ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    this.orbGroup.add(this.ringMesh)
    
    // Energy spikes
    for (let i = 0; i < 6; i++) {
      const spikeGeometry = new THREE.ConeGeometry(3, 15, 4)
      const spikeMaterial = new THREE.MeshStandardMaterial({
        color: 0xff8888,
        emissive: 0x440000,
        emissiveIntensity: 0.8
      })
      
      const spike = new THREE.Mesh(spikeGeometry, spikeMaterial)
      const angle = (i / 6) * Math.PI * 2
      spike.position.set(
        Math.cos(angle) * 25,
        0,
        Math.sin(angle) * 25
      )
      spike.lookAt(0, 0, 0)
      
      this.orbGroup.add(spike)
    }
    
    // Glow effect
    const glowGeometry = new THREE.SphereGeometry(40, 16, 12)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    })
    
    this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    this.orbGroup.add(this.glowMesh)
    
    // Position and add to scene
    this.orbGroup.position.copy(this.position)
    this.mesh = this.orbGroup
    this.scene.add(this.orbGroup)
    
    console.log('🔴 Flying Orb spawned at', this.position)
  }

  updateAI(deltaTime, playerPosition) {
    // Update pattern timing
    this.patternTime += deltaTime * 1000
    
    // Change movement pattern periodically
    if (this.patternTime > this.patternDuration) {
      this.patternTime = 0
      const patterns = ['hover', 'circle', 'zigzag', 'aggressive']
      this.movePattern = patterns[Math.floor(Math.random() * patterns.length)]
      console.log(`🔴 Orb switching to ${this.movePattern} pattern`)
    }
    
    // Handle evasion
    if (this.isEvading) {
      this.evasionTime += deltaTime * 1000
      if (this.evasionTime > this.evasionDuration) {
        this.isEvading = false
        this.evasionTime = 0
      }
    }
    
    // Calculate target position based on pattern
    switch (this.movePattern) {
      case 'hover':
        this.updateHoverPattern(playerPosition)
        break
      case 'circle':
        this.updateCirclePattern(playerPosition)
        break
      case 'zigzag':
        this.updateZigzagPattern(playerPosition)
        break
      case 'aggressive':
        this.updateAggressivePattern(playerPosition)
        break
    }
  }

  updateHoverPattern(playerPosition) {
    // Stay in front of player with slight side movement
    const baseX = playerPosition.x + Math.sin(this.time * 2) * 200
    const baseY = playerPosition.y + Math.sin(this.time * 1.5) * 100
    const baseZ = playerPosition.z + this.hoverDistance
    
    this.targetPosition.set(baseX, baseY, baseZ)
  }

  updateCirclePattern(playerPosition) {
    // Circle around in front of player
    const circleRadius = 400
    const circleSpeed = this.time * 1.5
    
    const baseX = playerPosition.x + Math.cos(circleSpeed) * circleRadius
    const baseY = playerPosition.y + Math.sin(circleSpeed * 0.5) * 150
    const baseZ = playerPosition.z + this.hoverDistance
    
    this.targetPosition.set(baseX, baseY, baseZ)
  }

  updateZigzagPattern(playerPosition) {
    // Zigzag side to side
    const zigzagSpeed = this.time * 3
    const zigzagX = Math.sin(zigzagSpeed) * this.maxSideOffset
    
    this.targetPosition.set(
      playerPosition.x + zigzagX,
      playerPosition.y + Math.sin(this.time) * 50,
      playerPosition.z + this.hoverDistance
    )
  }

  updateAggressivePattern(playerPosition) {
    // Move closer and more aggressively
    const aggressiveDistance = this.hoverDistance * 0.6
    const aggressiveX = playerPosition.x + Math.sin(this.time * 4) * 300
    
    this.targetPosition.set(
      aggressiveX,
      playerPosition.y,
      playerPosition.z + aggressiveDistance
    )
  }

  updateMovement(deltaTime) {
    if (!this.mesh) return

    // Adjust speed based on state
    let currentSpeed = this.isEvading ? this.evasionSpeed : this.speed
    
    // Move toward target position
    const direction = this.targetPosition.clone().sub(this.mesh.position)
    const distance = direction.length()
    
    if (distance > 10) {
      direction.normalize()
      this.velocity.copy(direction).multiplyScalar(currentSpeed)
      this.mesh.position.add(this.velocity.clone().multiplyScalar(deltaTime))
    }
  }

  updateAnimation(deltaTime) {
    if (!this.mesh) return
    
    // Rotate core orb
    this.coreMesh.rotation.x += deltaTime * 2
    this.coreMesh.rotation.y += deltaTime * 1.5
    
    // Rotate ring
    this.ringMesh.rotation.z += deltaTime * 3
    
    // Pulse glow effect
    const pulseIntensity = (Math.sin(this.time * 4) + 1) * 0.5
    this.glowMesh.material.opacity = 0.1 + pulseIntensity * 0.2
    this.coreMesh.material.emissiveIntensity = 0.8 + pulseIntensity * 0.4
    
    // Bob slightly
    this.bobOffset += deltaTime * 2
    this.mesh.position.y += Math.sin(this.bobOffset) * 0.5
  }

  // Trigger evasive maneuvers when shot at
  startEvasion() {
    if (!this.isEvading) {
      this.isEvading = true
      this.evasionTime = 0
      
      // Quick side movement
      this.sideOffset = (Math.random() - 0.5) * this.maxSideOffset * 2
      
      console.log('🔴 Orb starting evasion maneuver')
    }
  }

  takeDamage(damage) {
    // Start evasion when hit
    this.startEvasion()
    
    // Flash white when hit
    this.flashWhite()
    
    console.log(`🔴 Flying Orb hit for ${damage} damage! Health: ${this.health - damage}/${this.maxHealth}`)
    
    return super.takeDamage(damage)
  }

  flashWhite() {
    // Store original colors if not stored yet
    if (!this.originalColors) {
      this.originalColors = {
        coreEmissive: this.coreMesh.material.emissive.clone(),
        ringEmissive: this.ringMesh.material.emissive.clone()
      }
    }
    
    // Flash white
    this.coreMesh.material.emissive.setHex(0xffffff)
    this.ringMesh.material.emissive.setHex(0xffffff)
    
    // Restore original colors after flash
    setTimeout(() => {
      if (this.coreMesh && this.coreMesh.material && this.originalColors) {
        this.coreMesh.material.emissive.copy(this.originalColors.coreEmissive)
        this.ringMesh.material.emissive.copy(this.originalColors.ringEmissive)
      }
    }, 100)
  }
}