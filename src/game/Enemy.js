import * as THREE from 'three'

export class Enemy {
  constructor(scene, position) {
    this.scene = scene
    this.position = position.clone()
    this.mesh = null
    this.health = 100
    this.maxHealth = 100
    this.destroyed = false
    this.speed = 1000
    this.attackDamage = 25
    this.points = 100
    
    // AI behavior
    this.targetPosition = new THREE.Vector3()
    this.velocity = new THREE.Vector3()
    this.lastAttackTime = 0
    this.attackCooldown = 2000 // 2 seconds
    
    // Animation properties
    this.time = 0
    this.bobOffset = Math.random() * Math.PI * 2
  }

  update(deltaTime, playerPosition) {
    if (this.destroyed) return
    
    this.time += deltaTime
    this.updateAI(deltaTime, playerPosition)
    this.updateMovement(deltaTime)
    this.updateAnimation(deltaTime)
  }

  updateAI(deltaTime, playerPosition) {
    // Base AI - override in subclasses
    // Default behavior: move toward player
    this.targetPosition.copy(playerPosition)
  }

  updateMovement(deltaTime) {
    if (!this.mesh) return

    // Move toward target position
    const direction = this.targetPosition.clone().sub(this.mesh.position)
    const distance = direction.length()
    
    if (distance > 10) {
      direction.normalize()
      this.velocity.copy(direction).multiplyScalar(this.speed)
      this.mesh.position.add(this.velocity.clone().multiplyScalar(deltaTime))
    }
  }

  updateAnimation(deltaTime) {
    // Base animation - override in subclasses
  }

  takeDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      this.destroy()
      return true // Enemy destroyed
    }
    return false
  }

  checkCollision(playerPosition, radius = 100) {
    if (this.destroyed || !this.mesh) return false
    
    const distance = this.mesh.position.distanceTo(playerPosition)
    return distance < radius
  }

  canAttack() {
    const now = Date.now()
    return now - this.lastAttackTime > this.attackCooldown
  }

  attack() {
    this.lastAttackTime = Date.now()
    return this.attackDamage
  }

  getPosition() {
    return this.mesh ? this.mesh.position : this.position
  }

  isDestroyed() {
    return this.destroyed
  }

  getPoints() {
    return this.points
  }

  destroy() {
    this.destroyed = true
    if (this.mesh) {
      // Disposal logic
      this.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose()
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose())
          } else {
            child.material.dispose()
          }
        }
      })
      
      this.scene.remove(this.mesh)
      this.mesh = null
    }
  }
}