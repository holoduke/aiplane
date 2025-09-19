import * as THREE from "three";
import { Player } from "./Player.js";
import { InputManager } from "./InputManager.js";
import { camera } from "../camera.js";
import { scene } from "../scene.js";
import { renderer } from "../renderer.js";

export class Game {
  constructor(app) {
    this.app = app; // Reference to the main terrain app
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    // Game state
    this.gameStarted = false;
    this.gamePaused = false;
    this.gameOver = false;

    // Game systems
    this.inputManager = null; // Will be created after player
    this.player = null;
    this.enemyManager = null; // Will be added later
    this.hud = null; // Will be added later

    // Game settings
    this.gameMode = "play"; // 'play' or 'float'

    // Store original camera position for float mode
    this.originalCameraPosition = null;
    this.originalCameraTarget = null;

    // Performance tracking
    this.lastUpdateTime = 0;
    this.deltaTime = 0;

    console.log("🎮 Game system initialized");
  }

  async startGame(mode = "play") {
    console.log(`🚀 Starting game in ${mode} mode`);

    this.gameMode = mode;
    this.gameStarted = true;
    this.gameOver = false;
    this.gamePaused = false;

    // Store original camera state for float mode
    if (!this.originalCameraPosition) {
      this.originalCameraPosition = this.camera.position.clone();
      this.originalCameraTarget =
        this.app.controls?.target?.clone() || new THREE.Vector3();
    }

    if (mode === "play") {
      await this.initializePlayMode();
    } else if (mode === "float") {
      this.initializeFloatMode();
    }

    // Enable input
    if (this.inputManager) {
      this.inputManager.enable();
    }

    // Make sure intro mode is disabled
    if (this.app.startExperience) {
      this.app.startExperience();
    }

    // Disable mouse camera controls in game mode
    this.app.useFreeCamera = false;

    // Hide any UI overlays
    this.hideStartScreen();

    console.log(`✅ Game started in ${mode} mode`);
  }

  async initializePlayMode() {
    console.log("🎮 Initializing play mode...");

    // Create player
    this.player = new Player(this.scene, this.camera);

    // Create input manager with player reference
    this.inputManager = new InputManager(this.player);

    // Wait for player to load
    let attempts = 0;
    while (!this.player.mesh && attempts < 50) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      attempts++;
    }

    if (this.player.mesh) {
      console.log("✅ Player loaded successfully");
    } else {
      console.warn("⚠️ Player took too long to load, continuing anyway");
    }

    // Disable terrain controls for play mode
    if (this.app.controls) {
      this.app.controls.enabled = false;
    }

    // Set up game-specific camera behavior
    this.setupPlayCamera();
  }

  initializeFloatMode() {
    console.log("🌊 Initializing float mode...");

    // Re-enable terrain controls for float mode
    if (this.app.controls) {
      this.app.controls.enabled = true;
      this.app.controls.target.copy(this.originalCameraTarget);
    }

    // Re-enable mouse camera controls in float mode
    this.app.useFreeCamera = true;

    // Reset camera to original position
    this.camera.position.copy(this.originalCameraPosition);

    // No player in float mode
    this.player = null;
  }

  setupPlayCamera() {
    // Camera will be managed by the player in play mode
    if (this.player) {
      // Initial camera position relative to player (Y is forward, Z is up)
      this.camera.position.set(0, -1900, 1500);
      this.camera.lookAt(this.player.position);
    }
  }

  pauseGame() {
    if (!this.gameStarted || this.gameOver) return;

    this.gamePaused = !this.gamePaused;

    if (this.gamePaused) {
      this.inputManager.disable();
      console.log("⏸️ Game paused");
      // Show pause UI here
    } else {
      this.inputManager.enable();
      console.log("▶️ Game resumed");
      // Hide pause UI here
    }
  }

  stopGame() {
    console.log("🛑 Stopping game");

    this.gameStarted = false;
    this.gamePaused = false;
    this.inputManager.disable();

    // Clean up player
    if (this.player && this.player.mesh) {
      this.scene.remove(this.player.mesh);
      this.player = null;
    }

    // Restore original camera controls
    if (this.app.controls) {
      this.app.controls.enabled = true;
      if (this.originalCameraPosition) {
        this.camera.position.copy(this.originalCameraPosition);
        this.app.controls.target.copy(this.originalCameraTarget);
      }
    }

    // Show start screen
    this.showStartScreen();
  }

  restartGame() {
    console.log("🔄 Restarting game");

    const currentMode = this.gameMode;
    this.stopGame();

    // Small delay then restart
    setTimeout(() => {
      this.startGame(currentMode);
    }, 100);
  }

  update(deltaTime) {
    if (!this.gameStarted || this.gamePaused || this.gameOver) return;

    this.deltaTime = deltaTime;

    // Update input manager (handles player input automatically)
    if (this.inputManager && this.gameMode === "play") {
      this.inputManager.update(deltaTime);
    }

    // Update player
    if (this.player && this.gameMode === "play") {
      this.player.update(deltaTime);
    }

    // Update other game systems
    if (this.enemyManager) {
      this.enemyManager.update(deltaTime);
    }

    if (this.hud) {
      this.hud.update(deltaTime);
    }
  }

  handleInput(deltaTime) {
    const movement = this.inputManager.getMovementInput();
    const actions = this.inputManager.getActionInput();

    // Player movement (only in play mode)
    if (this.player && this.gameMode === "play") {
      if (movement.left && !movement.right) {
        this.player.steerLeft(deltaTime);
      } else if (movement.right && !movement.left) {
        this.player.steerRight(deltaTime);
      } else {
        this.player.stabilize(deltaTime);
      }

      // Player actions
      if (actions.fireLasers) {
        this.player.fireLasers();
      }

      if (actions.fireBombs) {
        this.player.fireBomb();
      }

      if (actions.afterburner) {
        if (!this.player.afterburner) {
          this.player.toggleAfterburner();
        }
      } else {
        if (this.player.afterburner) {
          this.player.toggleAfterburner();
        }
      }
    }

    // Game controls
    if (actions.pause) {
      this.pauseGame();
    }

    if (actions.restart) {
      this.restartGame();
    }
  }

  // UI Management
  showStartScreen() {
    let startScreen = document.getElementById("start-screen");
    if (!startScreen) {
      this.createStartScreen();
      startScreen = document.getElementById("start-screen");
    }

    if (startScreen) {
      startScreen.style.display = "flex";
    }
  }

  hideStartScreen() {
    const startScreen = document.getElementById("start-screen");
    if (startScreen) {
      startScreen.style.display = "none";
    }
  }

  createStartScreen() {
    // Check if start screen already exists
    if (document.getElementById("start-screen")) return;

    const startScreen = document.createElement("div");
    startScreen.id = "start-screen";
    startScreen.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Arial', sans-serif;
      color: white;
    `;

    // Title
    const title = document.createElement("h1");
    title.textContent = "Fighter Jet Terrain";
    title.style.cssText = `
      font-size: 3rem;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      background: linear-gradient(45deg, #00aaff, #ff6600);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `;

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.style.cssText = `
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;
    `;

    // Play button
    const playButton = document.createElement("button");
    playButton.textContent = "PLAY";
    playButton.style.cssText = `
      padding: 1rem 3rem;
      font-size: 1.5rem;
      font-weight: bold;
      background: linear-gradient(45deg, #00aa00, #00ff00);
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      transition: all 0.3s ease;
      min-width: 200px;
    `;

    playButton.addEventListener("mouseenter", () => {
      playButton.style.transform = "scale(1.1)";
      playButton.style.boxShadow = "0 6px 12px rgba(0, 255, 0, 0.4)";
    });

    playButton.addEventListener("mouseleave", () => {
      playButton.style.transform = "scale(1)";
      playButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    });

    playButton.addEventListener("click", () => {
      this.startGame("play");
    });

    // Float button
    const floatButton = document.createElement("button");
    floatButton.textContent = "FLOAT";
    floatButton.style.cssText = `
      padding: 1rem 3rem;
      font-size: 1.5rem;
      font-weight: bold;
      background: linear-gradient(45deg, #0066cc, #00aaff);
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      transition: all 0.3s ease;
      min-width: 200px;
    `;

    floatButton.addEventListener("mouseenter", () => {
      floatButton.style.transform = "scale(1.1)";
      floatButton.style.boxShadow = "0 6px 12px rgba(0, 170, 255, 0.4)";
    });

    floatButton.addEventListener("mouseleave", () => {
      floatButton.style.transform = "scale(1)";
      floatButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    });

    floatButton.addEventListener("click", () => {
      this.startGame("float");
    });

    // Instructions
    const instructions = document.createElement("div");
    instructions.style.cssText = `
      margin-top: 2rem;
      text-align: center;
      font-size: 1rem;
      opacity: 0.8;
      max-width: 600px;
    `;

    instructions.innerHTML = `
      <p><strong>PLAY:</strong> Fly a fighter jet through the terrain</p>
      <p><strong>FLOAT:</strong> Free camera exploration of the terrain</p>
      <br>
      <p style="font-size: 0.9rem; opacity: 0.6;">
        Controls: WASD or Arrow Keys to move, Space to fire, Shift for bombs
      </p>
    `;

    // Assemble the screen
    buttonContainer.appendChild(playButton);
    buttonContainer.appendChild(floatButton);

    startScreen.appendChild(title);
    startScreen.appendChild(buttonContainer);
    startScreen.appendChild(instructions);

    document.body.appendChild(startScreen);

    console.log("📺 Start screen created");
  }

  // Game state getters
  isGameActive() {
    return this.gameStarted && !this.gamePaused && !this.gameOver;
  }

  isPlayMode() {
    return this.gameMode === "play";
  }

  isFloatMode() {
    return this.gameMode === "float";
  }

  // Cleanup
  dispose() {
    this.stopGame();
    this.inputManager.dispose();

    // Remove start screen
    const startScreen = document.getElementById("start-screen");
    if (startScreen) {
      startScreen.remove();
    }

    console.log("🗑️ Game disposed");
  }
}
