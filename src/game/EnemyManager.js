import * as THREE from 'three'

export class EnemyManager {
  constructor(scene, levelLength = 10000) {
    this.scene = scene
    this.enemies = []
    this.turrets = []
    this.spawnTimer = 0
    this.spawnInterval = 2.5
    this.maxEnemies = 8
    this.levelLength = levelLength
    this.levelWidth = 10000  // 10km x 10km terrain
    this.lastSpawnZ = -4000
    this.staticTurrets = []
    
    this.init()
  }

  init() {
    this.createLevelTurrets()
  }

  createLevelTurrets() {
    // Instead of creating all turrets at once, we'll create them dynamically
    // Store turret positions for streaming creation
    this.turretPositions = []
    const turretSpacing = 1200
    const numTurrets = this.levelLength / turretSpacing
    
    for (let i = 0; i < numTurrets; i++) {
      const z = (i * turretSpacing) - this.levelLength / 2
      const x = (Math.random() - 0.5) * (this.levelWidth - 300)
      
      this.turretPositions.push({ x, z, created: false })
    }
  }

  getTerrainHeight(x, z) {
    const scale1 = 0.01
    const scale2 = 0.005
    const scale3 = 0.002
    
    let height = 0
    height += Math.sin(x * scale1) * Math.cos(z * scale1) * 50
    height += Math.sin(x * scale2) * Math.cos(z * scale2) * 100
    height += Math.sin(x * scale3) * Math.cos(z * scale3) * 200
    
    return height
  }

  createTurret(x, y, z) {
    const turretGroup = new THREE.Group()

    const baseGeometry = new THREE.CylinderGeometry(25, 30, 15, 8)
    const baseMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x444444,
      metalness: 0.8,
      roughness: 0.3
    })
    const base = new THREE.Mesh(baseGeometry, baseMaterial)
    base.castShadow = true
    base.receiveShadow = true
    turretGroup.add(base)

    const turretGeometry = new THREE.CylinderGeometry(8, 12, 20, 6)
    const turretMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x666666,
      metalness: 0.7,
      roughness: 0.4
    })
    const turret = new THREE.Mesh(turretGeometry, turretMaterial)
    turret.position.y = 17
    turret.castShadow = true
    turretGroup.add(turret)

    const barrelGeometry = new THREE.CylinderGeometry(3, 3, 40, 8)
    const barrelMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x333333,
      metalness: 0.9,
      roughness: 0.2
    })
    const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial)
    barrel.rotation.x = Math.PI / 2
    barrel.position.set(0, 25, 20)
    barrel.castShadow = true
    turretGroup.add(barrel)

    const glowGeometry = new THREE.SphereGeometry(2, 8, 8)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.8
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.set(0, 25, 40)
    turretGroup.add(glow)

    turretGroup.position.set(x, y, z)
    
    turretGroup.userData = {
      type: 'turret',
      health: 50,
      shootTimer: Math.random() * 3,
      shootInterval: 2 + Math.random() * 2,
      range: 800,
      turretMesh: turret,
      barrelMesh: barrel,
      glowMesh: glow
    }

    this.turrets.push(turretGroup)
    this.scene.add(turretGroup)
    
    return turretGroup
  }

  createEnemyPlane(playerZ) {
    const planeGroup = new THREE.Group()

    const fuselageGeometry = new THREE.CylinderGeometry(6, 4, 60, 8)
    const fuselageMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x660000,
      metalness: 0.7,
      roughness: 0.3
    })
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial)
    fuselage.rotation.x = Math.PI / 2
    fuselage.castShadow = true
    planeGroup.add(fuselage)

    const wingGeometry = new THREE.BoxGeometry(80, 3, 20)
    const wingMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x550000,
      metalness: 0.6,
      roughness: 0.4
    })
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial)
    leftWing.position.set(-40, 0, -5)
    leftWing.castShadow = true
    planeGroup.add(leftWing)

    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial)
    rightWing.position.set(40, 0, -5)
    rightWing.castShadow = true
    planeGroup.add(rightWing)

    const engineGeometry = new THREE.CylinderGeometry(4, 6, 20, 8)
    const engineMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x990000,
      emissive: 0x220000
    })
    const engine = new THREE.Mesh(engineGeometry, engineMaterial)
    engine.rotation.x = Math.PI / 2
    engine.position.set(0, 0, -40)
    engine.castShadow = true
    planeGroup.add(engine)

    const spawnSide = Math.random() < 0.5 ? -1 : 1
    const x = spawnSide * (this.levelWidth / 2 + 200)
    const z = playerZ + 800 + Math.random() * 400
    const y = 250 + Math.random() * 150

    planeGroup.position.set(x, y, z)

    planeGroup.userData = {
      type: 'plane',
      health: 30,
      speed: 300 + Math.random() * 100,
      shootTimer: Math.random() * 2,
      shootInterval: 1.5 + Math.random(),
      range: 800,
      movePattern: Math.random() < 0.5 ? 'straight' : 'weave',
      targetX: -x * 0.5,
      originalX: x
    }

    this.enemies.push(planeGroup)
    this.scene.add(planeGroup)
  }

  update(deltaTime, playerPosition) {
    // Spawn enemies ahead of player
    this.spawnTimer += deltaTime
    if (this.spawnTimer >= this.spawnInterval && this.enemies.length < this.maxEnemies) {
      if (playerPosition.z > this.lastSpawnZ + 800) {
        this.createEnemyPlane(playerPosition.z)
        this.lastSpawnZ = playerPosition.z
        this.spawnTimer = 0
      }
    }

    // Create turrets near player position
    this.manageTurrets(playerPosition)

    this.updateEnemyPlanes(deltaTime, playerPosition)
    this.updateTurrets(deltaTime, playerPosition)
    this.cleanupDistantEnemies(playerPosition)
  }

  manageTurrets(playerPosition) {
    const renderDistance = 2000
    
    this.turretPositions.forEach((turretPos, index) => {
      const distanceToPlayer = Math.abs(turretPos.z - playerPosition.z)
      
      if (!turretPos.created && distanceToPlayer < renderDistance) {
        // Create turret
        const y = this.getTerrainHeight(turretPos.x, turretPos.z) + 20
        const turret = this.createTurret(turretPos.x, y, turretPos.z)
        turretPos.created = true
        turretPos.turret = turret
      } else if (turretPos.created && distanceToPlayer > renderDistance * 2) {
        // Remove distant turret
        if (turretPos.turret) {
          this.removeTurret(turretPos.turret)
          turretPos.created = false
          turretPos.turret = null
        }
      }
    })
  }

  updateEnemyPlanes(deltaTime, playerPosition) {
    this.enemies.forEach(enemy => {
      if (enemy.userData.type !== 'plane') return

      if (enemy.userData.movePattern === 'straight') {
        const direction = new THREE.Vector3().subVectors(enemy.userData.targetX, enemy.position.x, 0).normalize()
        enemy.position.add(direction.multiplyScalar(enemy.userData.speed * deltaTime))
      } else {
        enemy.position.x += Math.sin(Date.now() * 0.001 + enemy.position.z * 0.01) * 100 * deltaTime
      }
      
      const distanceToPlayer = enemy.position.distanceTo(playerPosition)
      if (distanceToPlayer < enemy.userData.range) {
        enemy.userData.shootTimer -= deltaTime
        if (enemy.userData.shootTimer <= 0) {
          this.enemyShoot(enemy, playerPosition)
          enemy.userData.shootTimer = enemy.userData.shootInterval
        }
      }
    })
  }

  cleanupDistantEnemies(playerPosition) {
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i]
      if (enemy.position.z < playerPosition.z - 1000) {
        this.removeEnemy(enemy)
      }
    }
  }

  updateTurrets(deltaTime, playerPosition) {
    this.turrets.forEach(turret => {
      const distanceToPlayer = turret.position.distanceTo(playerPosition)
      
      if (distanceToPlayer < turret.userData.range) {
        const direction = new THREE.Vector3().subVectors(playerPosition, turret.position)
        direction.y = 0
        direction.normalize()
        
        const angle = Math.atan2(direction.x, direction.z)
        turret.userData.turretMesh.rotation.y = angle
        
        const pitchAngle = Math.atan2(
          playerPosition.y - turret.position.y,
          Math.sqrt(direction.x * direction.x + direction.z * direction.z)
        )
        turret.userData.barrelMesh.rotation.x = Math.PI / 2 - pitchAngle
        
        turret.userData.shootTimer -= deltaTime
        if (turret.userData.shootTimer <= 0) {
          this.turretShoot(turret, playerPosition)
          turret.userData.shootTimer = turret.userData.shootInterval
        }
        
        turret.userData.glowMesh.material.opacity = 0.8 + Math.sin(Date.now() * 0.01) * 0.2
      } else {
        turret.userData.glowMesh.material.opacity = 0.3
      }
    })
  }

  enemyShoot(enemy, targetPosition) {
    const direction = new THREE.Vector3().subVectors(targetPosition, enemy.position).normalize()
    
    if (window.game && window.game.bulletManager) {
      window.game.bulletManager.createEnemyBullet(
        enemy.position.clone(),
        direction,
        500
      )
    }
  }

  turretShoot(turret, targetPosition) {
    const barrelEnd = new THREE.Vector3(0, 25, 40)
    barrelEnd.applyQuaternion(turret.quaternion)
    barrelEnd.add(turret.position)
    
    const direction = new THREE.Vector3().subVectors(targetPosition, barrelEnd).normalize()
    
    if (window.game && window.game.bulletManager) {
      window.game.bulletManager.createEnemyBullet(
        barrelEnd,
        direction,
        600
      )
    }

    turret.userData.glowMesh.material.opacity = 1.0
    setTimeout(() => {
      if (turret.userData.glowMesh) {
        turret.userData.glowMesh.material.opacity = 0.3
      }
    }, 200)
  }

  removeEnemy(enemy) {
    const index = this.enemies.indexOf(enemy)
    if (index > -1) {
      this.enemies.splice(index, 1)
      this.scene.remove(enemy)
    }
  }

  removeTurret(turret) {
    const index = this.turrets.indexOf(turret)
    if (index > -1) {
      this.turrets.splice(index, 1)
      this.scene.remove(turret)
    }
  }

  getEnemies() {
    return [...this.enemies, ...this.turrets]
  }

  getAllTargets() {
    return this.getEnemies()
  }
}