export class HUD {
  constructor() {
    this.speedElement = document.getElementById('speed')
    this.altitudeElement = document.getElementById('altitude')
    this.healthElement = document.getElementById('health')
    
    this.setupHUD()
  }

  setupHUD() {
    this.createRadar()
    this.createHealthBar()
    this.createMinimap()
    this.createInstructions()
  }

  createRadar() {
    const radar = document.createElement('div')
    radar.id = 'radar'
    radar.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      width: 150px;
      height: 150px;
      border: 2px solid #00ff00;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      overflow: hidden;
    `
    document.getElementById('hud').appendChild(radar)

    const radarCenter = document.createElement('div')
    radarCenter.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      background: #00ff00;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    `
    radar.appendChild(radarCenter)

    this.radarElement = radar
  }

  createHealthBar() {
    const healthBar = document.createElement('div')
    healthBar.id = 'health-bar'
    healthBar.style.cssText = `
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 200px;
      height: 20px;
      border: 2px solid #00ff00;
      background: rgba(0, 0, 0, 0.5);
    `

    const healthFill = document.createElement('div')
    healthFill.id = 'health-fill'
    healthFill.style.cssText = `
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00);
      transition: width 0.3s ease;
    `

    healthBar.appendChild(healthFill)
    document.getElementById('hud').appendChild(healthBar)
    
    this.healthBarElement = healthFill
  }

  createMinimap() {
    const minimap = document.createElement('div')
    minimap.id = 'minimap'
    minimap.style.cssText = `
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 200px;
      height: 200px;
      border: 2px solid #00ff00;
      background: rgba(0, 0, 0, 0.7);
      overflow: hidden;
    `

    const minimapPlayer = document.createElement('div')
    minimapPlayer.id = 'minimap-player'
    minimapPlayer.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      background: #00ff00;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    `

    minimap.appendChild(minimapPlayer)
    document.getElementById('hud').appendChild(minimap)
    
    this.minimapElement = minimap
    this.minimapPlayerElement = minimapPlayer
  }

  createInstructions() {
    const instructions = document.createElement('div')
    instructions.id = 'instructions'
    instructions.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: #00ff00;
      padding: 20px;
      border: 2px solid #00ff00;
      border-radius: 10px;
      text-align: center;
      font-size: 16px;
      z-index: 2000;
      display: block;
    `

    instructions.innerHTML = `
      <h2 style="margin-top: 0; color: #00ffff;">SCROLLING FIGHTER JET</h2>
      <p><strong>A/D</strong> or <strong>Arrow Keys</strong>: Steer Left/Right</p>
      <p><em>Your jet flies forward automatically!</em></p>
      <br>
      <p style="color: #ffff00;">Enjoy flying over the terrain!</p>
      <button id="start-game" style="
        background: #00ff00;
        color: #000;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 15px;
        pointer-events: auto;
        z-index: 10000;
        position: relative;
      ">START GAME</button>
    `

    document.getElementById('hud').appendChild(instructions)
    
    this.instructionsElement = instructions

    const startButton = document.getElementById('start-game')
    console.log('Start button:', startButton) // Debug log
    
    if (startButton) {
      startButton.addEventListener('click', (event) => {
        console.log('Start button clicked!') // Debug log
        event.preventDefault()
        event.stopPropagation()
        this.startGame()
      })
      
      // Also add mousedown event as backup
      startButton.addEventListener('mousedown', (event) => {
        console.log('Start button mousedown!') // Debug log
        event.preventDefault()
        event.stopPropagation()
        this.startGame()
      })
    } else {
      console.error('Start button not found!')
    }
    
    // Alternative - click anywhere on dialog to start
    instructions.addEventListener('click', (event) => {
      console.log('Instructions clicked!') // Debug log
      if (event.target === instructions || event.target === startButton) {
        this.startGame()
      }
    })
  }

  startGame() {
    console.log('startGame() called') // Debug log
    console.log('window.game:', window.game) // Debug log
    
    if (this.instructionsElement) {
      this.instructionsElement.remove()
      this.instructionsElement = null
    }
    
    // Actually start the game
    if (window.game) {
      console.log('Starting game...') // Debug log
      window.game.startGame()
    } else {
      console.error('window.game not found!')
    }
  }

  update(player) {
    if (!player) return

    const stats = player.getStats()
    
    this.speedElement.textContent = `Speed: ${stats.speed}`
    this.altitudeElement.textContent = `Distance: ${stats.distance}km`
    this.healthElement.textContent = `Health: ${stats.health}`
    
    this.updateHealthBar(stats.health)
    this.updateMinimap(stats.position)
    this.updateRadar(stats.position)
  }

  updateHealthBar(health) {
    const healthPercent = Math.max(0, health)
    this.healthBarElement.style.width = `${healthPercent}%`
    
    if (health < 25) {
      this.healthBarElement.style.background = '#ff0000'
    } else if (health < 50) {
      this.healthBarElement.style.background = 'linear-gradient(90deg, #ff0000, #ffff00)'
    } else {
      this.healthBarElement.style.background = 'linear-gradient(90deg, #ff0000, #ffff00, #00ff00)'
    }
  }

  updateMinimap(playerPosition) {
    const mapScale = 2500
    const mapSize = 200
    
    const mapX = (playerPosition.x / mapScale) * (mapSize / 2) + (mapSize / 2)
    const mapZ = (playerPosition.z / mapScale) * (mapSize / 2) + (mapSize / 2)
    
    this.minimapPlayerElement.style.left = `${Math.max(0, Math.min(mapSize, mapX))}px`
    this.minimapPlayerElement.style.top = `${Math.max(0, Math.min(mapSize, mapZ))}px`
  }


  updateRadar(playerPosition) {
    // Radar now just shows the player position - no enemies to track
    // Could be used for terrain features in the future
  }

  showGameOver() {
    const gameOver = document.createElement('div')
    gameOver.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: #ff0000;
      padding: 40px;
      border: 3px solid #ff0000;
      border-radius: 10px;
      text-align: center;
      font-size: 24px;
      z-index: 3000;
    `

    gameOver.innerHTML = `
      <h1 style="margin-top: 0;">GAME OVER</h1>
      <p>Your fighter has been destroyed!</p>
      <button onclick="location.reload()" style="
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
      ">RESTART</button>
    `

    document.getElementById('hud').appendChild(gameOver)
  }
}