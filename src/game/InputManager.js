export class InputManager {
  constructor(player) {
    this.player = player
    this.keys = {}
    this.mouseX = 0
    this.mouseY = 0
    this.isMouseLocked = false
    
    this.setupEventListeners()
  }

  setupEventListeners() {
    document.addEventListener('keydown', this.onKeyDown.bind(this))
    document.addEventListener('keyup', this.onKeyUp.bind(this))
    document.addEventListener('mousemove', this.onMouseMove.bind(this))
    document.addEventListener('click', this.onMouseClick.bind(this))
    document.addEventListener('pointerlockchange', this.onPointerLockChange.bind(this))
    
    document.getElementById('game-canvas').addEventListener('click', () => {
      document.getElementById('game-canvas').requestPointerLock()
    })
  }

  onKeyDown(event) {
    this.keys[event.code] = true
    
    switch(event.code) {
      case 'Escape':
        if (this.isMouseLocked) {
          document.exitPointerLock()
        }
        break
      case 'ShiftLeft':
      case 'ShiftRight':
        // Toggle afterburner
        if (!this.keys['ShiftLeft'] && !this.keys['ShiftRight']) {
          this.player.toggleAfterburner()
        }
        break
    }
  }

  onKeyUp(event) {
    this.keys[event.code] = false
  }

  onMouseMove(event) {
    if (this.isMouseLocked) {
      this.mouseX += event.movementX * 0.002
      this.mouseY += event.movementY * 0.002
      this.mouseY = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.mouseY))
    }
  }

  onMouseClick(event) {
    if (this.isMouseLocked) {
      this.shoot()
    }
  }

  onPointerLockChange() {
    this.isMouseLocked = document.pointerLockElement === document.getElementById('game-canvas')
  }

  update() {
    const deltaTime = 1/60
    
    // Enhanced steering controls
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
      this.player.steerLeft(deltaTime)
    }
    
    if (this.keys['KeyD'] || this.keys['ArrowRight']) {
      this.player.steerRight(deltaTime)
    }
    
    // Laser firing
    if (this.keys['Space']) {
      this.player.fireLasers()
    }
    
    // Only stabilize if no steering input is being given
    if (!this.keys['KeyA'] && !this.keys['ArrowLeft'] && 
        !this.keys['KeyD'] && !this.keys['ArrowRight']) {
      this.player.stabilize(deltaTime)
    }
  }

  getControlsHelp() {
    return [
      'A/D or Arrow Keys: Steer Left/Right',
      'Space: Fire Lasers',
      'Shift: Afterburner',
      'Fighter jet flies forward automatically!'
    ]
  }
}