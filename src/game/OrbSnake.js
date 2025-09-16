import * as THREE from 'three'
import { Enemy } from './Enemy.js'

export class OrbSnake extends Enemy {
  constructor(scene, position, length = 20) {
    super(scene, position)
    
    // Snake specific properties
    this.snakeLength = length
    this.orbSegments = []
    this.segmentPositions = []
    this.segmentSize = 35 // Much bigger orbs
    this.segmentSpacing = 80 // Distance between segments
    
    // Snake movement
    this.snakeSpeed = 800
    this.forwardSpeed = 1200 // Constant forward movement speed
    this.headPosition = position.clone()
    this.headTargetPosition = position.clone()
    this.snakeDirection = new THREE.Vector3(0, 0, 1)
    
    // Snake AI
    this.movementPattern = 'wave' // 'wave', 'spiral', 'zigzag'
    this.patternTime = 0
    this.patternSpeed = 1.5
    this.amplitude = 400 // Wave/spiral size
    
    // Health and combat - much more health requiring multiple hits
    this.health = length * 75 // Much more health per segment (75 vs 25)
    this.maxHealth = this.health
    this.points = length * 50 // More points for longer snake
    this.attackDamage = 20
    
    this.createOrbSnake()
  }

  createOrbSnake() {
    // Create main group for the entire snake
    this.snakeGroup = new THREE.Group()
    
    // Initialize segment positions (start bunched up)
    for (let i = 0; i < this.snakeLength; i++) {
      this.segmentPositions.push(this.headPosition.clone())
    }
    
    // Create each orb segment
    for (let i = 0; i < this.snakeLength; i++) {
      const segment = this.createOrbSegment(i)
      this.orbSegments.push(segment)
      this.snakeGroup.add(segment.group)
    }
    
    // Position and add to scene
    this.mesh = this.snakeGroup
    this.scene.add(this.snakeGroup)
    
    console.log(`🐍 Orb Snake spawned with ${this.snakeLength} segments at`, this.position)
  }

  createOrbSegment(index) {
    const segment = {
      group: new THREE.Group(),
      core: null,
      ring: null,
      glow: null,
      spikes: [],
      destroyed: false
    }
    
    // Core orb - much bigger
    const coreGeometry = new THREE.SphereGeometry(this.segmentSize, 20, 16)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0x660000,
      emissiveIntensity: 1.2,
      metalness: 0.3,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9
    })
    
    segment.core = new THREE.Mesh(coreGeometry, coreMaterial)
    segment.group.add(segment.core)
    
    // Energy ring around orb
    const ringGeometry = new THREE.TorusGeometry(this.segmentSize + 10, 4, 8, 16)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4444,
      emissive: 0x880000,
      emissiveIntensity: 2.0,
      metalness: 0.8,
      roughness: 0.1
    })
    
    segment.ring = new THREE.Mesh(ringGeometry, ringMaterial)
    segment.group.add(segment.ring)
    
    // Energy spikes around orb
    for (let i = 0; i < 8; i++) {
      const spikeGeometry = new THREE.ConeGeometry(4, 20, 4)
      const spikeMaterial = new THREE.MeshStandardMaterial({
        color: 0xff6666,
        emissive: 0x440000,
        emissiveIntensity: 1.0
      })
      
      const spike = new THREE.Mesh(spikeGeometry, spikeMaterial)
      const angle = (i / 8) * Math.PI * 2
      spike.position.set(
        Math.cos(angle) * (this.segmentSize + 5),
        0,
        Math.sin(angle) * (this.segmentSize + 5)
      )
      spike.lookAt(0, 0, 0)
      
      segment.spikes.push(spike)
      segment.group.add(spike)
    }
    
    // Outer glow
    const glowGeometry = new THREE.SphereGeometry(this.segmentSize + 20, 16, 12)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    })
    
    segment.glow = new THREE.Mesh(glowGeometry, glowMaterial)
    segment.group.add(segment.glow)
    
    // Head segment is slightly different (bigger and brighter)
    if (index === 0) {
      segment.core.scale.setScalar(1.3)
      segment.glow.scale.setScalar(1.2)
      segment.core.material.emissiveIntensity = 1.8
    }
    
    return segment
  }

  updateAI(deltaTime, playerPosition) {
    // Update pattern timing
    this.patternTime += deltaTime * this.patternSpeed
    
    // Calculate head target position based on movement pattern
    this.updateMovementPattern(playerPosition)
    
    // Update snake direction
    const direction = this.headTargetPosition.clone().sub(this.headPosition)
    if (direction.length() > 0.1) {
      this.snakeDirection.copy(direction.normalize())
    }
  }

  updateMovementPattern(playerPosition) {
    // Always move forward at constant speed
    this.headPosition.z += this.forwardSpeed * (1/60) // Move forward continuously
    
    const baseX = playerPosition.x
    const baseY = playerPosition.y
    const baseZ = this.headPosition.z // Use current forward position
    
    switch (this.movementPattern) {
      case 'wave':
        // Horizontal wave motion - reduced altitude change
        const waveX = Math.sin(this.patternTime) * this.amplitude
        const waveY = Math.cos(this.patternTime * 0.7) * (this.amplitude * 0.1) // Much less altitude variation
        this.headTargetPosition.set(baseX + waveX, baseY + waveY, baseZ)
        break
        
      case 'spiral':
        // Spiral motion around flight path - reduced altitude change
        const spiralRadius = this.amplitude * 0.6
        const spiralX = Math.cos(this.patternTime) * spiralRadius
        const spiralY = Math.sin(this.patternTime) * spiralRadius * 0.2 // Much less altitude variation
        this.headTargetPosition.set(baseX + spiralX, baseY + spiralY, baseZ)
        break
        
      case 'zigzag':
        // Sharp zigzag pattern - reduced altitude change
        const zigzagX = (Math.floor(this.patternTime * 2) % 2 === 0 ? 1 : -1) * this.amplitude * 0.8
        const zigzagY = Math.sin(this.patternTime * 3) * (this.amplitude * 0.05) // Much less altitude variation
        this.headTargetPosition.set(baseX + zigzagX, baseY + zigzagY, baseZ)
        break
    }
    
    // Randomly change pattern every 8-12 seconds
    if (Math.random() < 0.001) { // Very small chance each frame
      const patterns = ['wave', 'spiral', 'zigzag']
      this.movementPattern = patterns[Math.floor(Math.random() * patterns.length)]
      console.log(`🐍 Snake switching to ${this.movementPattern} pattern`)
    }
  }

  updateMovement(deltaTime) {
    if (!this.mesh) return
    
    // Move head toward target
    const direction = this.headTargetPosition.clone().sub(this.headPosition)
    const distance = direction.length()
    
    if (distance > 10) {
      direction.normalize()
      const moveDistance = this.snakeSpeed * deltaTime
      this.headPosition.add(direction.multiplyScalar(moveDistance))
    }
    
    // Update segment positions (snake following behavior)
    this.updateSegmentPositions()
  }

  updateSegmentPositions() {
    // Update head position
    this.segmentPositions[0].copy(this.headPosition)
    
    // Each segment follows the one in front of it
    for (let i = 1; i < this.snakeLength; i++) {
      const currentPos = this.segmentPositions[i]
      const targetPos = this.segmentPositions[i - 1]
      
      // Calculate direction to follow
      const direction = targetPos.clone().sub(currentPos)
      const distance = direction.length()
      
      // Maintain proper spacing
      if (distance > this.segmentSpacing) {
        direction.normalize()
        const moveAmount = distance - this.segmentSpacing
        currentPos.add(direction.multiplyScalar(moveAmount))
      }
    }
    
    // Position the actual orb segments
    for (let i = 0; i < this.orbSegments.length; i++) {
      if (!this.orbSegments[i].destroyed) {
        this.orbSegments[i].group.position.copy(this.segmentPositions[i])
      }
    }
  }

  updateAnimation(deltaTime) {
    if (!this.mesh) return
    
    for (let i = 0; i < this.orbSegments.length; i++) {
      const segment = this.orbSegments[i]
      if (segment.destroyed) continue
      
      // Rotate core orb
      segment.core.rotation.x += deltaTime * (2 + i * 0.2)
      segment.core.rotation.y += deltaTime * (1.5 + i * 0.1)
      
      // Rotate ring at different speed
      segment.ring.rotation.z += deltaTime * (3 + i * 0.3)
      
      // Animate spikes
      for (let j = 0; j < segment.spikes.length; j++) {
        const spike = segment.spikes[j]
        spike.rotation.x += deltaTime * 2
        
        // Pulsing effect
        const pulse = Math.sin(this.time * 4 + i * 0.5 + j * 0.8) * 0.1 + 1
        spike.scale.setScalar(pulse)
      }
      
      // Pulse glow effect
      const pulseIntensity = (Math.sin(this.time * 3 + i * 0.3) + 1) * 0.5
      segment.glow.material.opacity = 0.2 + pulseIntensity * 0.2
      segment.core.material.emissiveIntensity = (i === 0 ? 1.8 : 1.2) + pulseIntensity * 0.3
    }
  }

  takeDamage(damage) {
    // Flash all segments white when hit
    this.flashWhite()
    
    // Reduce overall health instead of destroying segments immediately
    this.health -= damage
    console.log(`🐍 Snake hit for ${damage} damage! Health: ${this.health}/${this.maxHealth}`)
    
    // Only destroy segments when health gets very low
    const segmentsToDestroy = Math.floor((this.maxHealth - this.health) / 100)
    
    // Destroy segments from tail if needed
    while (this.snakeLength > segmentsToDestroy + 5 && this.snakeLength > 1) {
      for (let i = this.orbSegments.length - 1; i >= 0; i--) {
        if (!this.orbSegments[i].destroyed) {
          this.orbSegments[i].destroyed = true
          this.orbSegments[i].group.visible = false
          
          // Also remove from the snake group to ensure it's truly gone
          if (this.orbSegments[i].group.parent) {
            this.orbSegments[i].group.parent.remove(this.orbSegments[i].group)
          }
          
          this.createDestructionEffect(this.segmentPositions[i])
          this.snakeLength--
          break
        }
      }
    }
    
    if (this.health <= 0) {
      // Force destroy ALL remaining segments immediately
      this.orbSegments.forEach(segment => {
        if (!segment.destroyed) {
          segment.destroyed = true
          segment.group.visible = false
        }
      })
      this.destroy()
      return true
    }
    
    return false
  }

  flashWhite() {
    // Flash all segments white when hit
    for (const segment of this.orbSegments) {
      if (!segment.destroyed) {
        // Store original colors
        if (!segment.originalColors) {
          segment.originalColors = {
            coreEmissive: segment.core.material.emissive.clone(),
            ringEmissive: segment.ring.material.emissive.clone()
          }
        }
        
        // Flash white
        segment.core.material.emissive.setHex(0xffffff)
        segment.ring.material.emissive.setHex(0xffffff)
        
        // Restore original colors after flash
        setTimeout(() => {
          if (segment.core && segment.core.material && segment.originalColors) {
            segment.core.material.emissive.copy(segment.originalColors.coreEmissive)
            segment.ring.material.emissive.copy(segment.originalColors.ringEmissive)
          }
        }, 100)
      }
    }
  }

  createDestructionEffect(position) {
    // Create explosion particles at segment position
    const particleCount = 15
    const particles = new THREE.Group()
    
    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(2, 4, 4)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xff4400,
        transparent: true,
        opacity: 0.8
      })
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      particle.position.copy(position)
      particle.position.add(new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      ))
      
      particles.add(particle)
    }
    
    this.scene.add(particles)
    
    // Animate and remove particles
    let animationTime = 0
    const animateParticles = () => {
      animationTime += 16 // ~60fps
      
      particles.children.forEach(particle => {
        particle.material.opacity -= 0.02
        particle.scale.multiplyScalar(0.98)
      })
      
      if (animationTime < 1000) {
        requestAnimationFrame(animateParticles)
      } else {
        this.scene.remove(particles)
      }
    }
    
    animateParticles()
  }

  checkCollision(playerPosition, radius = 120) {
    if (this.destroyed || !this.mesh) return false
    
    // Check collision with any segment
    for (let i = 0; i < this.segmentPositions.length; i++) {
      if (this.orbSegments[i].destroyed) continue
      
      const distance = this.segmentPositions[i].distanceTo(playerPosition)
      if (distance < radius) {
        return true
      }
    }
    
    return false
  }

  getPosition() {
    return this.segmentPositions[0] || this.position
  }

  destroy() {
    this.destroyed = true
    
    if (this.mesh) {
      // Create final destruction effect for any remaining segments
      this.orbSegments.forEach((segment, index) => {
        if (!segment.destroyed) {
          this.createDestructionEffect(this.segmentPositions[index])
        }
      })
      
      // Force destroy ALL segments immediately
      this.orbSegments.forEach(segment => {
        // Mark as destroyed
        segment.destroyed = true
        
        // Remove from scene first
        if (segment.group.parent) {
          segment.group.parent.remove(segment.group)
        }
        
        // Clean up materials and geometries
        segment.group.traverse((child) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      })
      
      // Clear the segments array
      this.orbSegments = []
      this.segmentPositions = []
      this.snakeLength = 0
      
      // Remove the entire snake group from scene
      this.scene.remove(this.mesh)
      this.mesh = null
    }
    
    console.log('🐍💥 Orb Snake completely destroyed!')
  }
}