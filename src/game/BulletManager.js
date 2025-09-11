import * as THREE from 'three'

export class BulletManager {
  constructor(scene) {
    this.scene = scene
    this.playerBullets = []
    this.enemyBullets = []
    this.bulletPool = []
    this.maxBullets = 200
    
    this.init()
  }

  init() {
    this.createBulletPool()
  }

  createBulletPool() {
    for (let i = 0; i < this.maxBullets; i++) {
      const bullet = this.createBulletMesh()
      bullet.visible = false
      this.bulletPool.push(bullet)
      this.scene.add(bullet)
    }
  }

  createBulletMesh() {
    const geometry = new THREE.SphereGeometry(1.5, 6, 6)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      emissive: 0x004444,
      transparent: true,
      opacity: 0.9
    })
    const bullet = new THREE.Mesh(geometry, material)
    bullet.castShadow = false
    bullet.receiveShadow = false
    
    const glowGeometry = new THREE.SphereGeometry(3, 8, 8)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    bullet.add(glow)
    
    return bullet
  }

  getBulletFromPool() {
    for (let bullet of this.bulletPool) {
      if (!bullet.visible) {
        bullet.visible = true
        return bullet
      }
    }
    return null
  }

  returnBulletToPool(bullet) {
    bullet.visible = false
    bullet.userData = {}
    
    const index = this.playerBullets.indexOf(bullet)
    if (index > -1) {
      this.playerBullets.splice(index, 1)
    }
    
    const enemyIndex = this.enemyBullets.indexOf(bullet)
    if (enemyIndex > -1) {
      this.enemyBullets.splice(enemyIndex, 1)
    }
  }

  createPlayerBullet(position, direction, speed) {
    const bullet = this.getBulletFromPool()
    if (!bullet) return null

    bullet.position.copy(position)
    bullet.userData = {
      direction: direction.clone(),
      speed: speed,
      life: 5.0,
      maxLife: 5.0,
      isPlayerBullet: true
    }

    bullet.material.color.setHex(0x00ffff)
    bullet.material.emissive.setHex(0x004444)
    bullet.children[0].material.color.setHex(0x00ffff)

    this.playerBullets.push(bullet)
    this.createBulletTrail(bullet)
    
    return bullet
  }

  createEnemyBullet(position, direction, speed) {
    const bullet = this.getBulletFromPool()
    if (!bullet) return null

    bullet.position.copy(position)
    bullet.userData = {
      direction: direction.clone(),
      speed: speed,
      life: 5.0,
      maxLife: 5.0,
      isPlayerBullet: false
    }

    // Safely set bullet colors
    if (bullet.material) {
      bullet.material.color.setHex(0xff4400)
      bullet.material.emissive.setHex(0x441100)
    }
    
    if (bullet.children[0] && bullet.children[0].material) {
      bullet.children[0].material.color.setHex(0xff4400)
    }

    this.enemyBullets.push(bullet)
    this.createBulletTrail(bullet)
    
    return bullet
  }

  createBulletTrail(bullet) {
    const trailLength = 10
    const positions = new Float32Array(trailLength * 3)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.LineBasicMaterial({
      color: bullet.userData.isPlayerBullet ? 0x00ffff : 0xff4400,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const trail = new THREE.Line(geometry, material)
    bullet.add(trail)
    
    bullet.userData.trail = trail
    bullet.userData.trailPositions = []
  }

  update(deltaTime) {
    this.updateBullets(this.playerBullets, deltaTime)
    this.updateBullets(this.enemyBullets, deltaTime)
    this.checkCollisions()
  }

  updateBullets(bullets, deltaTime) {
    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i]
      const userData = bullet.userData

      userData.life -= deltaTime
      if (userData.life <= 0) {
        this.returnBulletToPool(bullet)
        continue
      }

      const movement = userData.direction.clone().multiplyScalar(userData.speed * deltaTime)
      bullet.position.add(movement)

      this.updateBulletTrail(bullet)
      
      const fadeRatio = userData.life / userData.maxLife
      bullet.material.opacity = 0.9 * fadeRatio
      bullet.children[0].material.opacity = 0.3 * fadeRatio

      if (bullet.position.y < 0 || bullet.position.y > 2000) {
        this.returnBulletToPool(bullet)
        continue
      }

      const distanceFromCenter = Math.sqrt(
        bullet.position.x * bullet.position.x + 
        bullet.position.z * bullet.position.z
      )
      if (distanceFromCenter > 3000) {
        this.returnBulletToPool(bullet)
        continue
      }
    }
  }

  updateBulletTrail(bullet) {
    if (!bullet.userData.trail) return

    bullet.userData.trailPositions.unshift(bullet.position.clone())
    
    if (bullet.userData.trailPositions.length > 10) {
      bullet.userData.trailPositions.pop()
    }

    const positions = bullet.userData.trail.geometry.attributes.position.array
    for (let i = 0; i < bullet.userData.trailPositions.length && i < 10; i++) {
      const pos = bullet.userData.trailPositions[i]
      positions[i * 3] = pos.x - bullet.position.x
      positions[i * 3 + 1] = pos.y - bullet.position.y
      positions[i * 3 + 2] = pos.z - bullet.position.z
    }

    bullet.userData.trail.geometry.attributes.position.needsUpdate = true
  }

  checkCollisions() {
    this.checkPlayerBulletCollisions()
    this.checkEnemyBulletCollisions()
  }

  checkPlayerBulletCollisions() {
    if (!window.game || !window.game.enemyManager) return

    const enemies = window.game.enemyManager.getAllTargets()
    
    for (let i = this.playerBullets.length - 1; i >= 0; i--) {
      const bullet = this.playerBullets[i]
      
      for (let enemy of enemies) {
        const distance = bullet.position.distanceTo(enemy.position)
        if (distance < 30) {
          this.createExplosion(bullet.position, true)
          this.returnBulletToPool(bullet)
          
          enemy.userData.health -= 10
          if (enemy.userData.health <= 0) {
            this.createExplosion(enemy.position, false)
            if (enemy.userData.type === 'plane') {
              window.game.enemyManager.removeEnemy(enemy)
            } else if (enemy.userData.type === 'turret') {
              window.game.enemyManager.removeTurret(enemy)
            }
          }
          break
        }
      }
    }
  }

  checkEnemyBulletCollisions() {
    if (!window.game || !window.game.player) return

    for (let i = this.enemyBullets.length - 1; i >= 0; i--) {
      const bullet = this.enemyBullets[i]
      const distance = bullet.position.distanceTo(window.game.player.position)
      
      if (distance < 25) {
        this.createExplosion(bullet.position, true)
        this.returnBulletToPool(bullet)
        
        const isDead = window.game.player.takeDamage(5)
        if (isDead) {
          console.log('Game Over!')
        }
        break
      }
    }
  }

  createExplosion(position, isSmall = true) {
    const particleCount = isSmall ? 20 : 50
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      positions[i3] = position.x + (Math.random() - 0.5) * 20
      positions[i3 + 1] = position.y + (Math.random() - 0.5) * 20
      positions[i3 + 2] = position.z + (Math.random() - 0.5) * 20

      velocities[i3] = (Math.random() - 0.5) * 200
      velocities[i3 + 1] = (Math.random() - 0.5) * 200
      velocities[i3 + 2] = (Math.random() - 0.5) * 200

      colors[i3] = 1.0
      colors[i3 + 1] = Math.random() * 0.5
      colors[i3 + 2] = 0.0
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: isSmall ? 3 : 6,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    })

    const explosion = new THREE.Points(geometry, material)
    this.scene.add(explosion)

    let life = 1.0
    const update = () => {
      life -= 0.016
      if (life <= 0) {
        this.scene.remove(explosion)
        return
      }

      const positions = explosion.geometry.attributes.position.array
      const velocities = explosion.geometry.attributes.velocity.array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i] * 0.016
        positions[i + 1] += velocities[i + 1] * 0.016
        positions[i + 2] += velocities[i + 2] * 0.016

        velocities[i + 1] -= 100 * 0.016
      }

      explosion.geometry.attributes.position.needsUpdate = true
      explosion.material.opacity = life
      
      requestAnimationFrame(update)
    }
    update()
  }

  removeBullet(bullet) {
    this.returnBulletToPool(bullet)
  }

  getPlayerBullets() {
    return this.playerBullets
  }

  getEnemyBullets() {
    return this.enemyBullets
  }
}