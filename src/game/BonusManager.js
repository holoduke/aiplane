import * as THREE from 'three'
import { BonusItem } from './BonusItem.js'

export class BonusManager {
  constructor(scene, player) {
    this.scene = scene
    this.player = player
    this.bonusItems = []
    this.spawnDistance = 6000 // Distance ahead to spawn items
    this.spawnRadius = 800 // How far left/right from flight path
    this.maxItems = 10 // Maximum items in world at once
    this.spawnTimer = 0
    this.spawnInterval = 3000 // Spawn every 3 seconds
    this.lastSpawnZ = 0
    this.score = 0
    
    console.log('🌟 BonusManager initialized')
  }

  update(deltaTime) {
    // Update spawn timer
    this.spawnTimer += deltaTime * 1000 // Convert to milliseconds
    
    // Get player position and direction
    const playerPos = this.player.mesh.position.clone()
    const playerForward = new THREE.Vector3(0, 0, 1)
    playerForward.applyQuaternion(this.player.mesh.quaternion)
    
    // Spawn new items if needed
    if (this.shouldSpawnItem(playerPos)) {
      this.spawnBonusItem(playerPos, playerForward)
    }
    
    // Update existing items
    for (let i = this.bonusItems.length - 1; i >= 0; i--) {
      const item = this.bonusItems[i]
      
      // Update item animation
      item.update(deltaTime)
      
      // Check for collection
      if (item.checkCollision(playerPos, 80)) {
        this.collectItem(item, i)
        continue
      }
      
      // Remove items that are too far behind
      const distanceBehind = playerPos.z - item.getPosition().z
      if (distanceBehind > 2000) {
        item.destroy()
        this.bonusItems.splice(i, 1)
        console.log('🗑️ Removed bonus item that was left behind')
      }
    }
    
    // Clean up collected items
    this.bonusItems = this.bonusItems.filter(item => !item.isCollected())
  }

  shouldSpawnItem(playerPos) {
    // Don't spawn if we have too many items
    if (this.bonusItems.length >= this.maxItems) {
      return false
    }
    
    // Don't spawn too frequently
    if (this.spawnTimer < this.spawnInterval) {
      return false
    }
    
    // Don't spawn too close to last spawn point
    if (playerPos.z - this.lastSpawnZ < 1000) {
      return false
    }
    
    return true
  }

  spawnBonusItem(playerPos, playerForward) {
    // Reset spawn timer
    this.spawnTimer = 0
    
    // Calculate spawn position ahead of player
    const spawnDistance = this.spawnDistance + Math.random() * 2000 // 6-8km ahead
    const spawnZ = playerPos.z + spawnDistance
    
    // Random position left/right of flight path
    const sideOffset = (Math.random() - 0.5) * this.spawnRadius * 2
    const spawnX = playerPos.x + sideOffset
    
    // Spawn at same height as player
    const spawnY = playerPos.y
    
    const spawnPosition = new THREE.Vector3(spawnX, spawnY, spawnZ)
    
    // Create new bonus item
    const bonusItem = new BonusItem(this.scene, spawnPosition)
    this.bonusItems.push(bonusItem)
    
    this.lastSpawnZ = spawnZ
    
    console.log(`✨ Spawned bonus item at (${spawnX.toFixed(0)}, ${spawnY.toFixed(0)}, ${spawnZ.toFixed(0)})`)
  }

  collectItem(item, index) {
    // Award points
    const points = 100
    this.score += points
    
    // Show collection effect
    this.showCollectionEffect(item.getPosition(), points)
    
    // Remove from array (item will destroy itself)
    this.bonusItems.splice(index, 1)
    
    console.log(`🌟 Collected bonus item! +${points} points. Total: ${this.score}`)
    
    // Update HUD if available
    if (window.game && window.game.hud) {
      this.updateScoreDisplay()
    }
  }

  showCollectionEffect(position, points) {
    // Create temporary score popup
    const scorePopup = document.createElement('div')
    scorePopup.textContent = `+${points}`
    scorePopup.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #00ffff;
      font-size: 32px;
      font-weight: bold;
      text-shadow: 0 0 10px #00ffff;
      pointer-events: none;
      z-index: 9999;
      transition: all 1s ease-out;
    `
    
    document.body.appendChild(scorePopup)
    
    // Animate score popup
    setTimeout(() => {
      scorePopup.style.transform = 'translate(-50%, -150%)'
      scorePopup.style.opacity = '0'
      scorePopup.style.fontSize = '48px'
    }, 100)
    
    // Remove after animation
    setTimeout(() => {
      if (scorePopup.parentNode) {
        scorePopup.parentNode.removeChild(scorePopup)
      }
    }, 1100)
  }

  updateScoreDisplay() {
    // Find or create score element in HUD
    let scoreElement = document.getElementById('bonus-score')
    
    if (!scoreElement) {
      scoreElement = document.createElement('div')
      scoreElement.id = 'bonus-score'
      scoreElement.style.cssText = `
        position: absolute;
        top: 20px;
        left: 20px;
        color: #00ffff;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0 0 5px #00ffff;
        z-index: 1000;
      `
      document.getElementById('hud').appendChild(scoreElement)
    }
    
    scoreElement.textContent = `Bonus: ${this.score}`
  }

  getTerrainHeight(x, z) {
    // Try to get height from terrain system
    if (window.game && window.game.terrain && window.game.terrain.getHeightAtPosition) {
      return window.game.terrain.getHeightAtPosition(x, z)
    }
    
    // Fallback to simple noise-based height
    const noise = Math.sin(x * 0.001) * Math.cos(z * 0.001) * 200
    return 100 + noise
  }

  getScore() {
    return this.score
  }

  getBonusItemCount() {
    return this.bonusItems.length
  }

  // Method to spawn a bonus item at specific location (for testing)
  spawnAtPosition(position) {
    const bonusItem = new BonusItem(this.scene, position)
    this.bonusItems.push(bonusItem)
    console.log(`🎯 Manually spawned bonus item at ${position.x}, ${position.y}, ${position.z}`)
  }

  // Clean up all items
  cleanup() {
    for (const item of this.bonusItems) {
      item.destroy()
    }
    this.bonusItems = []
    
    // Remove score display
    const scoreElement = document.getElementById('bonus-score')
    if (scoreElement) {
      scoreElement.remove()
    }
    
    console.log('🧹 BonusManager cleaned up')
  }
}