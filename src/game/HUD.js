export class HUD {
  constructor() {
    this.speedElement = document.getElementById("speed");
    this.altitudeElement = document.getElementById("altitude");
    this.healthElement = document.getElementById("health");

    // Button state tracking for continuous firing
    this.shootButtonPressed = false
    this.bombButtonPressed = false

    this.setupHUD();
  }

  setupHUD() {
    this.createHealthBar();
    this.createVirtualButtons();
    this.createInstructions();
  }

  createVirtualButtons() {
    // Create container for virtual buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "virtual-buttons";
    buttonContainer.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      z-index: 10000;
      pointer-events: auto;
    `;
    
    // Create shoot button
    const shootButton = document.createElement("div");
    shootButton.id = "virtual-shoot-button";
    shootButton.innerHTML = "SHOOT";
    shootButton.style.cssText = `
      width: 80px;
      height: 80px;
      background: rgba(128, 128, 128, 0.3);
      border: 2px solid rgba(128, 128, 128, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      user-select: none;
      touch-action: manipulation;
      transition: all 0.1s ease;
      pointer-events: auto;
      position: relative;
    `;
    
    // Create bomb button
    const bombButton = document.createElement("div");
    bombButton.id = "virtual-bomb-button";
    bombButton.innerHTML = "BOMB";
    bombButton.style.cssText = `
      width: 80px;
      height: 80px;
      background: rgba(128, 128, 128, 0.3);
      border: 2px solid rgba(128, 128, 128, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      user-select: none;
      touch-action: manipulation;
      transition: all 0.1s ease;
      pointer-events: auto;
      position: relative;
    `;
    
    // Create fullscreen button
    const fullscreenButton = document.createElement("div");
    fullscreenButton.id = "virtual-fullscreen-button";
    fullscreenButton.innerHTML = "⛶";
    fullscreenButton.style.cssText = `
      width: 60px;
      height: 60px;
      background: rgba(128, 128, 128, 0.3);
      border: 2px solid rgba(128, 128, 128, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      user-select: none;
      touch-action: manipulation;
      transition: all 0.1s ease;
      pointer-events: auto;
      position: relative;
    `;

    buttonContainer.appendChild(shootButton);
    buttonContainer.appendChild(bombButton);
    buttonContainer.appendChild(fullscreenButton);
    document.getElementById("hud").appendChild(buttonContainer);
    
    // Store references
    this.fullscreenButton = fullscreenButton;
    
    // Store references
    this.shootButton = shootButton;
    this.bombButton = bombButton;
    
    // Add touch/click handlers
    this.setupButtonHandlers();
  }

  setupButtonHandlers() {
    // Helper function to handle button press
    const handleShootPress = () => {
      this.shootButton.style.transform = 'scale(0.9)';
      this.shootButton.style.background = 'rgba(200, 200, 200, 0.6)';
      this.shootButton.style.borderColor = 'rgba(200, 200, 200, 0.8)';
      this.shootButtonPressed = true; // Set state flag for continuous firing
      console.log('Shoot button pressed!'); // Debug
    };

    const handleShootRelease = () => {
      this.shootButton.style.transform = 'scale(1.0)';
      this.shootButton.style.background = 'rgba(128, 128, 128, 0.3)';
      this.shootButton.style.borderColor = 'rgba(128, 128, 128, 0.5)';
      this.shootButtonPressed = false; // Clear state flag
      console.log('Shoot button released!'); // Debug
    };

    const handleBombPress = () => {
      this.bombButton.style.transform = 'scale(0.9)';
      this.bombButton.style.background = 'rgba(200, 200, 200, 0.6)';
      this.bombButton.style.borderColor = 'rgba(200, 200, 200, 0.8)';
      this.bombButtonPressed = true; // Set state flag for continuous firing
      console.log('Bomb button pressed!'); // Debug
    };

    const handleBombRelease = () => {
      this.bombButton.style.transform = 'scale(1.0)';
      this.bombButton.style.background = 'rgba(128, 128, 128, 0.3)';
      this.bombButton.style.borderColor = 'rgba(128, 128, 128, 0.5)';
      this.bombButtonPressed = false; // Clear state flag
      console.log('Bomb button released!'); // Debug
    };

    const handleFullscreenPress = () => {
      this.fullscreenButton.style.transform = 'scale(0.9)';
      this.fullscreenButton.style.background = 'rgba(200, 200, 200, 0.6)';
      this.fullscreenButton.style.borderColor = 'rgba(200, 200, 200, 0.8)';
      this.toggleFullscreen();
      console.log('Fullscreen button pressed!'); // Debug
    };

    const handleFullscreenRelease = () => {
      this.fullscreenButton.style.transform = 'scale(1.0)';
      this.fullscreenButton.style.background = 'rgba(128, 128, 128, 0.3)';
      this.fullscreenButton.style.borderColor = 'rgba(128, 128, 128, 0.5)';
    };

    // Shoot button - touch events
    this.shootButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleShootPress();
    }, { passive: false });

    this.shootButton.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleShootRelease();
    }, { passive: false });

    this.shootButton.addEventListener('touchcancel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleShootRelease();
    }, { passive: false });

    // Shoot button - mouse events (for desktop testing)
    this.shootButton.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleShootPress();
    });

    this.shootButton.addEventListener('mouseup', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleShootRelease();
    });

    // Bomb button - touch events
    this.bombButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleBombPress();
    }, { passive: false });

    this.bombButton.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleBombRelease();
    }, { passive: false });

    this.bombButton.addEventListener('touchcancel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleBombRelease();
    }, { passive: false });

    // Bomb button - mouse events (for desktop testing)
    this.bombButton.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleBombPress();
    });

    this.bombButton.addEventListener('mouseup', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleBombRelease();
    });

    // Fullscreen button - touch events
    this.fullscreenButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleFullscreenPress();
    }, { passive: false });

    this.fullscreenButton.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleFullscreenRelease();
    }, { passive: false });

    // Fullscreen button - mouse events (for desktop testing)
    this.fullscreenButton.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleFullscreenPress();
    });

    this.fullscreenButton.addEventListener('mouseup', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleFullscreenRelease();
    });

    console.log('Virtual button handlers set up!'); // Debug
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      }
      this.fullscreenButton.innerHTML = "⛶"; // Exit fullscreen icon
      console.log('Entering fullscreen mode');
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      this.fullscreenButton.innerHTML = "⛶"; // Enter fullscreen icon
      console.log('Exiting fullscreen mode');
    }
  }

  createHealthBar() {
    const healthBar = document.createElement("div");
    healthBar.id = "health-bar";
    healthBar.style.cssText = `
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 200px;
      height: 20px;
      border: 2px solid #00ff00;
      background: rgba(0, 0, 0, 0.5);
    `;

    const healthFill = document.createElement("div");
    healthFill.id = "health-fill";
    healthFill.style.cssText = `
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00);
      transition: width 0.3s ease;
    `;

    healthBar.appendChild(healthFill);
    document.getElementById("hud").appendChild(healthBar);

    this.healthBarElement = healthFill;
  }


  createInstructions() {
    const instructions = document.createElement("div");
    instructions.id = "instructions";
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
    `;

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
    `;

    document.getElementById("hud").appendChild(instructions);

    this.instructionsElement = instructions;

    const startButton = document.getElementById("start-game");
    console.log("Start button:", startButton); // Debug log

    if (startButton) {
      startButton.addEventListener("click", (event) => {
        console.log("Start button clicked!"); // Debug log
        event.preventDefault();
        event.stopPropagation();
        this.startGame();
      });

      // Also add mousedown event as backup
      startButton.addEventListener("mousedown", (event) => {
        console.log("Start button mousedown!"); // Debug log
        event.preventDefault();
        event.stopPropagation();
        this.startGame();
      });
    } else {
      console.error("Start button not found!");
    }

    // Alternative - click anywhere on dialog to start
    instructions.addEventListener("click", (event) => {
      console.log("Instructions clicked!"); // Debug log
      if (event.target === instructions || event.target === startButton) {
        this.startGame();
      }
    });
  }

  startGame() {
    console.log("startGame() called"); // Debug log
    console.log("window.game:", window.game); // Debug log

    if (this.instructionsElement) {
      this.instructionsElement.remove();
      this.instructionsElement = null;
    }

    // Actually start the game
    if (window.game) {
      console.log("Starting game..."); // Debug log
      window.game.startGame();
    } else {
      console.error("window.game not found!");
    }
  }

  update(player) {
    if (!player) return;

    const stats = player.getStats();

    this.speedElement.textContent = `Speed: ${stats.speed}`;
    this.altitudeElement.textContent = `Distance: ${stats.distance}km`;
    this.healthElement.textContent = `Health: ${stats.health}`;

    this.updateHealthBar(stats.health);
  }

  updateHealthBar(health) {
    const healthPercent = Math.max(0, health);
    this.healthBarElement.style.width = `${healthPercent}%`;

    if (health < 25) {
      this.healthBarElement.style.background = "#ff0000";
    } else if (health < 50) {
      this.healthBarElement.style.background =
        "linear-gradient(90deg, #ff0000, #ffff00)";
    } else {
      this.healthBarElement.style.background =
        "linear-gradient(90deg, #ff0000, #ffff00, #00ff00)";
    }
  }



  showGameOver() {
    const gameOver = document.createElement("div");
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
    `;

    gameOver.innerHTML = `
      <h1 style="margin-top: 0;">GAME OVER</h1>
      <p>Your fighter has been destroyed!</p>
      <button id="restart-button" style="
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
        pointer-events: auto !important;
        z-index: 99999 !important;
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
      ">RESTART</button>
    `;

    document.getElementById("hud").appendChild(gameOver);
    
    // Multiple restart methods for maximum compatibility
    const restartGame = () => {
      console.log("Restarting game...");
      try {
        window.location.href = window.location.href;
      } catch (e) {
        window.location.reload(true);
      }
    };
    
    // Wait a moment for DOM to settle
    setTimeout(() => {
      const restartButton = document.getElementById("restart-button");
      if (restartButton) {
        // Multiple event types
        restartButton.onclick = restartGame;
        restartButton.addEventListener("click", restartGame, { passive: false });
        restartButton.addEventListener("mouseup", restartGame, { passive: false });
        restartButton.addEventListener("touchend", restartGame, { passive: false });
        
        console.log("Restart button handlers attached");
      } else {
        console.error("Restart button not found!");
      }
      
      // Also make the entire game over dialog clickable
      gameOver.addEventListener("click", (event) => {
        console.log("Game over dialog clicked");
        restartGame();
      }, { passive: false });
      
    }, 100);
  }
}
