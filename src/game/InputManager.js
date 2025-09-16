export class InputManager {
  constructor(player) {
    this.player = player
    this.keys = {}
    this.mouseX = 0
    this.mouseY = 0
    this.isMouseLocked = false
    
    // Touch controls - virtual joystick style
    this.touchActive = false
    this.touchSteerInput = 0 // -1 to 1, where 0 is center
    this.activeTouches = new Map() // Track multiple touches by identifier
    this.steerTouchId = null // ID of the touch being used for steering
    this.steerCenter = { x: 0, y: 0 } // Dynamic center point for steering
    
    this.setupEventListeners()
  }

  setupEventListeners() {
    document.addEventListener('keydown', this.onKeyDown.bind(this))
    document.addEventListener('keyup', this.onKeyUp.bind(this))
    document.addEventListener('mousemove', this.onMouseMove.bind(this))
    document.addEventListener('click', this.onMouseClick.bind(this))
    document.addEventListener('pointerlockchange', this.onPointerLockChange.bind(this))
    
    // Touch event listeners
    document.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false })
    document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false })
    document.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: false })
    document.addEventListener('touchcancel', this.onTouchEnd.bind(this), { passive: false })
    
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

  onTouchStart(event) {
    event.preventDefault()
    
    // Handle multiple touches
    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches[i]
      this.activeTouches.set(touch.identifier, {
        x: touch.clientX,
        y: touch.clientY,
        startX: touch.clientX,
        startY: touch.clientY
      })
    }
    
    this.updateSteeringFromTouches()
  }

  onTouchMove(event) {
    event.preventDefault()
    
    // Update positions for all active touches
    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches[i]
      if (this.activeTouches.has(touch.identifier)) {
        this.activeTouches.get(touch.identifier).x = touch.clientX
        this.activeTouches.get(touch.identifier).y = touch.clientY
      }
    }
    
    this.updateSteeringFromTouches()
  }

  onTouchEnd(event) {
    event.preventDefault()
    
    // Remove ended touches
    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches[i]
      this.activeTouches.delete(touch.identifier)
    }
    
    this.updateSteeringFromTouches()
  }

  updateSteeringFromTouches() {
    const screenHeight = window.innerHeight
    const screenWidth = window.innerWidth
    
    // Reset steering if no active steering touch
    if (this.steerTouchId === null || !this.activeTouches.has(this.steerTouchId)) {
      this.touchActive = false
      this.touchSteerInput = 0
      this.steerTouchId = null
      
      // Look for a new steering touch
      for (const [touchId, touchData] of this.activeTouches) {
        // Only respond to touches in bottom half of screen
        if (touchData.y < screenHeight * 0.5) {
          continue
        }
        
        // Check if touch is on virtual buttons (bottom right area)
        const buttonAreaRight = screenWidth - 140
        const buttonAreaBottom = screenHeight - 200
        
        if (touchData.x > buttonAreaRight && touchData.y > buttonAreaBottom) {
          continue // Skip button area
        }
        
        // This touch becomes the new steering center
        this.steerTouchId = touchId
        this.steerCenter.x = touchData.startX // Use initial touch position as center
        this.steerCenter.y = touchData.startY
        this.touchActive = true
        break
      }
    }
    
    // Calculate steering based on distance from center
    if (this.steerTouchId !== null && this.activeTouches.has(this.steerTouchId)) {
      const touchData = this.activeTouches.get(this.steerTouchId)
      
      // Calculate offset from the dynamic center point
      const deltaX = touchData.x - this.steerCenter.x
      const deltaY = touchData.y - this.steerCenter.y
      
      // Maximum steering distance (in pixels)
      const maxSteerDistance = 120 // 120px max drag distance for full steering
      
      // Calculate steering input based on horizontal offset
      // Reduce maximum steering angle to 60% of full range
      let rawInput = deltaX / maxSteerDistance
      this.touchSteerInput = Math.max(-0.6, Math.min(0.6, rawInput))
      
      // Apply small dead zone around center
      const deadZone = 15 // 15px dead zone
      if (Math.abs(deltaX) < deadZone) {
        this.touchSteerInput = 0
      }
      
      this.touchActive = true
    }
  }

  update(deltaTime = 1/60) {
    // Use passed deltaTime or fallback to 60fps
    
    let hasSteeringInput = false
    
    // Keyboard steering controls
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
      this.player.steerLeft(deltaTime)
      hasSteeringInput = true
    }
    
    if (this.keys['KeyD'] || this.keys['ArrowRight']) {
      this.player.steerRight(deltaTime)
      hasSteeringInput = true
    }
    
    // Touch steering controls (only if no keyboard input) - match desktop behavior
    if (!hasSteeringInput && this.touchActive && this.touchSteerInput !== 0) {
      if (this.touchSteerInput < 0) {
        // Steering left - same as desktop keyboard behavior
        const intensity = Math.abs(this.touchSteerInput)
        const adjustedIntensity = Math.ceil(intensity * 1.0) // Match desktop: single call per frame
        for (let i = 0; i < adjustedIntensity; i++) {
          this.player.steerLeft(deltaTime) // Match desktop: use normal deltaTime
        }
      } else if (this.touchSteerInput > 0) {
        // Steering right - same as desktop keyboard behavior
        const intensity = this.touchSteerInput
        const adjustedIntensity = Math.ceil(intensity * 1.0) // Match desktop: single call per frame
        for (let i = 0; i < adjustedIntensity; i++) {
          this.player.steerRight(deltaTime) // Match desktop: use normal deltaTime
        }
      }
      hasSteeringInput = true
    }
    
    // Laser firing (keyboard or virtual button)
    if (this.keys['Space'] || (window.game && window.game.hud && window.game.hud.shootButtonPressed)) {
      this.player.fireLasers()
    }
    
    // Bomb firing (keyboard or virtual button)
    if (this.keys['KeyB'] || (window.game && window.game.hud && window.game.hud.bombButtonPressed)) {
      this.player.fireBomb()
    }
    
    // Only stabilize if no steering input is being given
    if (!hasSteeringInput) {
      this.player.stabilize(deltaTime)
    }
  }

  getControlsHelp() {
    return [
      'A/D or Arrow Keys: Steer Left/Right',
      'Touch (bottom half): Steer Left/Right',
      'Space: Fire Lasers',
      'B: Fire Bomb',
      'Shift: Afterburner',
      'Fighter jet flies forward automatically!'
    ]
  }
}