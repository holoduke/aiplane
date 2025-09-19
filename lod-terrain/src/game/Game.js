import * as THREE from "three";
import { Player } from "./Player.js";
import { InputManager } from "./InputManager.js";
import { CollisionDetector } from "./CollisionDetector.js";
import { UIManager } from "../ui/UIManager.js";
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
    this.collisionDetector = new CollisionDetector(scene);
    this.uiManager = new UIManager(this);
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

    // Pause camera rotation
    this.pauseCameraAngle = 0;
    this.pauseCameraDistance = 500;
    this.pauseCameraHeight = 200;

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

    // Use screen manager for proper transition
    this.uiManager.screenManager.showGame();
    this.hideUIForGameMode(mode);

    console.log(`✅ Game started in ${mode} mode`);
  }

  async initializePlayMode() {
    console.log("🎮 Initializing play mode...");

    // Create player
    this.player = new Player(this.scene, this.camera);

    // Create input manager with player reference
    this.inputManager = new InputManager(this.player);
    this.inputManager.game = this; // Set game reference for pause functionality

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
      this.uiManager.screenManager.showPause();
      console.log("⏸️ Game paused");
    } else {
      this.inputManager.enable();
      this.uiManager.screenManager.resumeGame();
      console.log("▶️ Game resumed");
    }
  }

  stopGame() {
    console.log("🛑 Stopping game");

    this.gameStarted = false;
    this.gamePaused = false;
    this.inputManager.disable();

    // Release pointer lock for main menu interaction
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }

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

    // Use screen manager to return to main menu
    this.uiManager.screenManager.showMainMenu();

    // Hide UI elements for main menu (not float mode)
    this.hideUIForMainMenu();
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
    if (!this.gameStarted || this.gameOver) return;

    this.deltaTime = deltaTime;

    // Handle pause camera rotation
    if (this.gamePaused && this.player && this.player.mesh) {
      this.updatePauseCamera(deltaTime);
      return; // Don't update game logic when paused
    }

    // Update input manager (handles player input automatically)
    if (this.inputManager && this.gameMode === "play") {
      this.inputManager.update(deltaTime);
    }

    // Update collision detector
    this.collisionDetector.update();

    // Update player
    if (this.player && this.gameMode === "play") {
      this.player.update(deltaTime);
    }

    // Handle laser collision detection centrally
    if (this.player && this.player.lasers && this.gameMode === "play") {
      this.handleLaserCollisions(deltaTime);
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

  handleLaserCollisions(deltaTime) {
    if (!this.player || !this.player.lasers) return;

    for (let i = this.player.lasers.length - 1; i >= 0; i--) {
      const laser = this.player.lasers[i];

      // Check terrain collision
      const terrainCollision = this.collisionDetector.checkLaserTerrainCollision(
        laser.position,
        laser.velocity,
        deltaTime
      );

      if (terrainCollision) {
        console.log('🎯 Game: Laser hit terrain!', terrainCollision.point);

        // Calculate reflection
        const reflectedVelocity = this.collisionDetector.calculateReflection(
          laser.velocity,
          terrainCollision.normal,
          0.8 // 80% energy retained
        );

        // Update laser properties
        laser.velocity = reflectedVelocity;
        laser.position.copy(terrainCollision.point);
        laser.bounces = (laser.bounces || 0) + 1;

        // Limit bounces to prevent infinite reflections
        if (laser.bounces > 3) {
          console.log('🔫💥 Game: Laser expired after 3 bounces');
          this.scene.remove(laser.mesh);
          this.scene.remove(laser.glow);
          this.player.lasers.splice(i, 1);
          continue;
        }

        // Debug: Turn laser orange when it hits terrain
        laser.mesh.material.color.setHex(0xff6600); // Orange
        laser.mesh.material.emissive.setHex(0xff6600);
        laser.glow.material.color.setHex(0xff6600);
        laser.glow.material.emissive.setHex(0xff6600);

        // Add some visual effects for impact
        laser.mesh.material.emissiveIntensity = Math.min(15.0, laser.mesh.material.emissiveIntensity * 1.2);
        laser.glow.material.emissiveIntensity = Math.min(20.0, laser.glow.material.emissiveIntensity * 1.2);
      }

      // Check enemy collision
      const enemyHits = this.collisionDetector.checkLaserEnemyCollision(laser.position, 150);
      if (enemyHits.length > 0) {
        console.log(`🔫💥 Game: Laser hit ${enemyHits.length} enemies!`);
        // Remove laser on hit
        this.scene.remove(laser.mesh);
        this.scene.remove(laser.glow);
        this.player.lasers.splice(i, 1);
        continue;
      }
    }
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

  // UI visibility management
  hideUIForGameMode(mode) {
    if (mode === "play") {
      // Hide control panel, intro overlay, and controls info in play mode
      if (this.app.controlPanel?.panel) {
        this.app.controlPanel.panel.style.display = "none";
      }
      if (this.app.introOverlay) {
        this.app.introOverlay.style.display = "none";
      }
      const controlsInfo = document.getElementById("controls-info");
      if (controlsInfo) {
        controlsInfo.style.display = "none";
      }
    } else if (mode === "float") {
      // Show UI elements in float mode
      this.showUIForFloatMode();
    }
  }

  showUIForFloatMode() {
    // Show control panel, intro overlay, controls info, position info, and environment toggle in float mode
    if (this.app.controlPanel?.panel) {
      this.app.controlPanel.panel.style.display = "block";
    }
    if (this.app.introOverlay) {
      this.app.introOverlay.style.display = "block";
    }
    const controlsInfo = document.getElementById("controls-info");
    if (controlsInfo) {
      controlsInfo.style.display = "block";
    }
    // Show position info (bottom right HUD)
    const hudEl = document.querySelector('div[style*="bottom: 10px"][style*="right: 10px"]');
    if (hudEl) {
      hudEl.style.display = "block";
    }
    // Show environment toggle (terrain selector)
    if (this.app.environmentToggle?.element) {
      this.app.environmentToggle.element.style.display = "block";
    }
  }

  hideUIForMainMenu() {
    // Hide all UI elements for clean main menu
    if (this.app.controlPanel?.panel) {
      this.app.controlPanel.panel.style.display = "none";
    }
    if (this.app.introOverlay) {
      this.app.introOverlay.style.display = "none";
    }
    const controlsInfo = document.getElementById("controls-info");
    if (controlsInfo) {
      controlsInfo.style.display = "none";
    }
    // Hide position info (bottom right HUD)
    const hudEl = document.querySelector('div[style*="bottom: 10px"][style*="right: 10px"]');
    if (hudEl) {
      hudEl.style.display = "none";
    }
    // Hide environment toggle (terrain selector)
    if (this.app.environmentToggle?.element) {
      this.app.environmentToggle.element.style.display = "none";
    }
  }

  // Pause camera rotation around plane
  updatePauseCamera(deltaTime) {
    if (!this.player || !this.player.mesh) return;

    // Rotate camera around the plane
    this.pauseCameraAngle += deltaTime * 0.5; // Slow rotation

    const playerPosition = this.player.mesh.position;

    // Calculate camera position in a circle around the plane
    const x = playerPosition.x + Math.cos(this.pauseCameraAngle) * this.pauseCameraDistance;
    const y = playerPosition.y + Math.sin(this.pauseCameraAngle) * this.pauseCameraDistance;
    const z = playerPosition.z + this.pauseCameraHeight;

    // Update camera position and look at the plane
    this.camera.position.set(x, y, z);
    this.camera.lookAt(playerPosition);
  }

  // Cleanup
  dispose() {
    this.stopGame();
    if (this.inputManager) {
      this.inputManager.dispose();
    }
    this.uiManager.dispose();

    console.log("🗑️ Game disposed");
  }
}
