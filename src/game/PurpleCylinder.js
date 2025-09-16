import * as THREE from 'three'
import { Enemy } from './Enemy.js'

export class PurpleCylinder extends Enemy {
  constructor(scene, position) {
    super(scene, position)
    
    // Purple cylinder specific properties - much more health
    this.health = 300
    this.maxHealth = 300
    this.speed = 3000 // Much faster intercept speed
    this.attackDamage = 30
    this.points = 200
    
    // Movement phases
    this.phase = 'intercept' // 'intercept', 'attack', 'retreat'
    this.phaseTimer = 0
    this.interceptSpeed = 3500 // Much faster flying
    this.attackSpeed = 1500 // Faster attack movement
    this.retreatSpeed = 2500 // Faster retreat
    
    // Attack mechanics
    this.lasers = []
    this.lastShotTime = 0
    this.shotInterval = 800 // Faster shooting - 0.8 seconds between shots
    this.burstCount = 5 // More shots per burst
    this.burstDelay = 150 // Faster burst shots
    this.currentBurst = 0
    this.isBursting = false
    this.burstTimer = 0
    
    // Positioning
    this.interceptComplete = false
    this.attackPosition = new THREE.Vector3()
    this.retreatPosition = new THREE.Vector3()
    
    this.createCylinder()
  }

  createCylinder() {
    // Create cylinder group
    this.cylinderGroup = new THREE.Group()
    
    // Main cylinder body
    const bodyGeometry = new THREE.CylinderGeometry(25, 25, 120, 12)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x8800ff,
      emissive: 0x220044,
      emissiveIntensity: 1.0,
      metalness: 0.7,
      roughness: 0.3,
      transparent: true,
      opacity: 0.9
    })
    
    this.bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial)
    this.cylinderGroup.add(this.bodyMesh)
    
    // Top and bottom caps with weapon ports
    const capGeometry = new THREE.CylinderGeometry(30, 25, 15, 12)
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0xaa00ff,
      emissive: 0x440088,
      emissiveIntensity: 1.5,
      metalness: 0.9,
      roughness: 0.1
    })
    
    this.topCap = new THREE.Mesh(capGeometry, capMaterial)
    this.topCap.position.y = 67.5
    this.cylinderGroup.add(this.topCap)
    
    this.bottomCap = new THREE.Mesh(capGeometry, capMaterial)
    this.bottomCap.position.y = -67.5
    this.cylinderGroup.add(this.bottomCap)
    
    // Laser weapon ports (4 around the cylinder)
    this.weaponPorts = []
    for (let i = 0; i < 4; i++) {
      const portGeometry = new THREE.SphereGeometry(6, 8, 8)
      const portMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0088,
        emissive: 0xff0088,
        emissiveIntensity: 2.0,
        metalness: 0.5,
        roughness: 0.2
      })
      
      const port = new THREE.Mesh(portGeometry, portMaterial)
      const angle = (i / 4) * Math.PI * 2
      port.position.set(
        Math.cos(angle) * 30,
        0,
        Math.sin(angle) * 30
      )
      
      this.weaponPorts.push(port)
      this.cylinderGroup.add(port)
    }
    
    // Energy rings around cylinder
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(35 + i * 5, 2, 8, 16)
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0xdd00ff,
        emissive: 0x660088,
        emissiveIntensity: 1.2 + i * 0.2,
        metalness: 0.8,
        roughness: 0.1
      })
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.position.y = (i - 1) * 30
      ring.rotation.x = Math.PI / 2
      this.cylinderGroup.add(ring)
    }
    
    // Outer glow
    const glowGeometry = new THREE.CylinderGeometry(50, 50, 140, 12)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x8800ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    })
    
    this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    this.cylinderGroup.add(this.glowMesh)
    
    // Position and add to scene
    this.cylinderGroup.position.copy(this.position)
    this.mesh = this.cylinderGroup
    this.scene.add(this.cylinderGroup)
    
    console.log('🟣 Purple Cylinder spawned at', this.position)
  }

  updateAI(deltaTime, playerPosition) {
    this.phaseTimer += deltaTime
    
    switch (this.phase) {
      case 'intercept':
        this.updateInterceptPhase(deltaTime, playerPosition)
        break
      case 'attack':
        this.updateAttackPhase(deltaTime, playerPosition)
        break
      case 'retreat':
        this.updateRetreatPhase(deltaTime, playerPosition)
        break
    }
    
    // Handle laser burst timing
    if (this.isBursting) {
      this.burstTimer += deltaTime * 1000
      if (this.burstTimer >= this.burstDelay) {
        this.fireLaser(playerPosition)
        this.currentBurst++
        this.burstTimer = 0
        
        if (this.currentBurst >= this.burstCount) {
          this.isBursting = false
          this.currentBurst = 0
          this.lastShotTime = Date.now()
        }
      }
    }
  }

  updateInterceptPhase(deltaTime, playerPosition) {
    // Fly fast to get in front of player
    const frontPosition = playerPosition.clone()
    frontPosition.z += 1500 // Position in front
    frontPosition.x += (Math.random() - 0.5) * 600 // Some randomness
    frontPosition.y += (Math.random() - 0.5) * 300
    
    this.targetPosition.copy(frontPosition)
    this.speed = this.interceptSpeed
    
    // Switch to attack phase when close enough to front position
    const distanceToTarget = this.mesh.position.distanceTo(frontPosition)
    if (distanceToTarget < 200 || this.phaseTimer > 8) {
      this.phase = 'attack'
      this.phaseTimer = 0
      this.attackPosition.copy(this.targetPosition)
      console.log('🟣 Purple Cylinder entering attack phase')
    }
  }

  updateAttackPhase(deltaTime, playerPosition) {
    // Slower movement, focus on attacking
    this.speed = this.attackSpeed
    
    // Maintain position relative to player with slight movement
    this.attackPosition.x = playerPosition.x + Math.sin(this.phaseTimer * 0.5) * 400
    this.attackPosition.y = playerPosition.y + Math.cos(this.phaseTimer * 0.3) * 200
    this.attackPosition.z = playerPosition.z + 1200
    
    this.targetPosition.copy(this.attackPosition)
    
    // Try to shoot at player
    const now = Date.now()
    if (!this.isBursting && now - this.lastShotTime > this.shotInterval) {
      this.startLaserBurst(playerPosition)
    }
    
    // Switch to retreat after 12 seconds of attacking
    if (this.phaseTimer > 12) {
      this.phase = 'retreat'
      this.phaseTimer = 0
      console.log('🟣 Purple Cylinder entering retreat phase')
    }
  }

  updateRetreatPhase(deltaTime, playerPosition) {
    // Fly away from player at high speed
    this.speed = this.retreatSpeed
    
    const retreatDirection = this.mesh.position.clone().sub(playerPosition).normalize()
    this.retreatPosition.copy(this.mesh.position).add(retreatDirection.multiplyScalar(2000))
    
    this.targetPosition.copy(this.retreatPosition)
    
    // Self-destruct after retreating for a while
    if (this.phaseTimer > 8) {
      this.destroy()
    }
  }

  startLaserBurst(playerPosition) {
    this.isBursting = true
    this.currentBurst = 0
    this.burstTimer = 0
    
    // Flash weapon ports to indicate incoming attack
    this.weaponPorts.forEach(port => {
      port.material.emissiveIntensity = 4.0
      setTimeout(() => {
        if (port.material) {
          port.material.emissiveIntensity = 2.0
        }
      }, 100)
    })
    
    console.log('🟣⚡ Purple Cylinder starting laser burst!')
  }

  fireLaser(playerPosition) {
    if (!this.mesh) return
    
    // Calculate shooting direction with some prediction
    const shooterPos = this.mesh.position.clone()
    const targetPos = playerPosition.clone()
    
    // Lead the target slightly
    if (this.player && this.player.velocity) {
      targetPos.add(this.player.velocity.clone().multiplyScalar(0.5))
    }
    
    const direction = targetPos.sub(shooterPos).normalize()
    
    // Create laser projectile
    const laser = this.createLaser(shooterPos, direction)
    this.lasers.push(laser)
    this.scene.add(laser.group)
    
    console.log('🟣🔫 Purple Cylinder fired laser!')
  }

  createLaser(startPosition, direction) {
    const laserGroup = new THREE.Group()
    
    // Laser core
    const coreGeometry = new THREE.CylinderGeometry(3, 3, 80, 6)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0088,
      emissive: 0xff0088,
      emissiveIntensity: 2.0,
      transparent: true,
      opacity: 0.9
    })
    
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    core.rotation.z = Math.PI / 2 // Point forward
    laserGroup.add(core)
    
    // Laser glow
    const glowGeometry = new THREE.CylinderGeometry(6, 6, 80, 6)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0088,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    })
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.rotation.z = Math.PI / 2
    laserGroup.add(glow)
    
    laserGroup.position.copy(startPosition)
    laserGroup.lookAt(startPosition.clone().add(direction))
    
    return {
      group: laserGroup,
      direction: direction.clone(),
      speed: 3000,
      life: 3000, // 3 seconds
      damage: this.attackDamage,
      startTime: Date.now()
    }
  }

  updateLasers(deltaTime, playerPosition) {
    for (let i = this.lasers.length - 1; i >= 0; i--) {
      const laser = this.lasers[i]
      const now = Date.now()
      
      // Move laser
      const movement = laser.direction.clone().multiplyScalar(laser.speed * deltaTime)
      laser.group.position.add(movement)
      
      // Check if laser hit player
      const distanceToPlayer = laser.group.position.distanceTo(playerPosition)
      if (distanceToPlayer < 100) {
        // Hit player
        console.log('🟣💥 Purple Cylinder laser hit player!')
        if (this.player && this.player.takeDamage) {
          this.player.takeDamage(laser.damage)
        }
        
        // Remove laser
        this.scene.remove(laser.group)
        this.lasers.splice(i, 1)
        continue
      }
      
      // Remove old lasers
      if (now - laser.startTime > laser.life) {
        this.scene.remove(laser.group)
        this.lasers.splice(i, 1)
      }
    }
  }

  updateMovement(deltaTime) {
    super.updateMovement(deltaTime)
    
    // Update lasers
    if (this.player) {
      this.updateLasers(deltaTime, this.player.mesh.position)
    }
  }

  updateAnimation(deltaTime) {
    if (!this.mesh) return
    
    // Rotate the cylinder
    this.bodyMesh.rotation.y += deltaTime * 2
    
    // Rotate caps at different speeds
    this.topCap.rotation.y -= deltaTime * 1.5
    this.bottomCap.rotation.y += deltaTime * 1.5
    
    // Animate weapon ports
    this.weaponPorts.forEach((port, index) => {
      port.rotation.y += deltaTime * (3 + index * 0.5)
      
      // Pulsing effect
      const pulse = Math.sin(this.time * 4 + index) * 0.1 + 1
      port.scale.setScalar(pulse)
    })
    
    // Animate glow
    const pulseIntensity = (Math.sin(this.time * 3) + 1) * 0.5
    this.glowMesh.material.opacity = 0.15 + pulseIntensity * 0.15
    this.bodyMesh.material.emissiveIntensity = 1.0 + pulseIntensity * 0.5
  }

  takeDamage(damage) {
    // Flash white when hit
    this.flashWhite()
    
    console.log(`🟣 Purple Cylinder hit for ${damage} damage! Health: ${this.health - damage}/${this.maxHealth}`)
    
    return super.takeDamage(damage)
  }

  flashWhite() {
    // Store original colors if not stored yet
    if (!this.originalColors) {
      this.originalColors = {
        bodyEmissive: this.bodyMesh.material.emissive.clone()
      }
    }
    
    // Flash white
    this.bodyMesh.material.emissive.setHex(0xffffff)
    
    // Flash weapon ports too
    this.weaponPorts.forEach(port => {
      port.material.emissive.setHex(0xffffff)
    })
    
    // Restore original colors after flash
    setTimeout(() => {
      if (this.bodyMesh && this.bodyMesh.material && this.originalColors) {
        this.bodyMesh.material.emissive.copy(this.originalColors.bodyEmissive)
        
        // Restore weapon port colors
        this.weaponPorts.forEach(port => {
          port.material.emissive.setHex(0xff0088)
        })
      }
    }, 100)
  }

  destroy() {
    // Clean up lasers
    this.lasers.forEach(laser => {
      this.scene.remove(laser.group)
    })
    this.lasers = []
    
    super.destroy()
  }
}