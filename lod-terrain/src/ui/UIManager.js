import { ScreenManager } from "./ScreenManager.js";

export class UIManager {
  constructor(game) {
    this.game = game;
    this.pauseScreen = null;
    this.screenManager = new ScreenManager(this);

    console.log("🎨 UI Manager initialized");
  }

  // Start Screen Management
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
      background: radial-gradient(ellipse at center, rgba(0, 17, 34, 0.4) 0%, rgba(0, 0, 0, 0.6) 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Courier New', monospace;
      color: white;
      overflow: hidden;
    `;

    // Animated star field background
    const starField = document.createElement("div");
    starField.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      z-index: -1;
    `;

    // Create fewer, static stars for better performance
    for (let i = 0; i < 30; i++) {
      const star = document.createElement("div");
      star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: #fff;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${0.2 + Math.random() * 0.4};
      `;
      starField.appendChild(star);
    }

    // CRT scanlines effect
    const scanlines = document.createElement("div");
    scanlines.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 255, 0, 0.01) 2px,
        rgba(0, 255, 0, 0.01) 4px
      );
      pointer-events: none;
      z-index: 10;
    `;

    // Retro grid background
    const grid = document.createElement("div");
    grid.style.cssText = `
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 50%;
      background-image:
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      transform: perspective(500px) rotateX(60deg);
      pointer-events: none;
      opacity: 0.15;
    `;

    // Static title without typewriter effect
    const title = document.createElement("h1");
    title.textContent = "VIBEJET";
    title.style.cssText = `
      font-family: monospace;
      font-size: 6rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 8px;
      color: #00ff00;
      text-shadow: 0 0 10px #00ff00;
      position: relative;
      z-index: 5;
      text-align: center;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    `;

    // Subtitle with typewriter effect
    const subtitle = document.createElement("div");
    subtitle.textContent = ">> VIBE CODE FIGHTER JET GAME <<";
    subtitle.style.cssText = `
      font-size: 1.2rem;
      color: #00ff00;
      margin-bottom: 3rem;
      text-align: center;
      text-shadow: 0 0 10px #00ff00;
      animation: typewriter 2s steps(32, end) 1s both;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #00ff00;
      animation: typewriter 2s steps(32, end) 1s both, blink 0.5s ease-in-out 3s, removeCursor 0.1s ease-in-out 3.5s both;
    `;

    // Insert prompts animation
    const insertCoin = document.createElement("div");
    insertCoin.textContent = "INSERT PROMPTS TO MAKE IT BETTER";
    insertCoin.style.cssText = `
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1rem;
      color: #ffff00;
      animation: pulse 1.5s infinite;
      text-shadow: 0 0 5px #ffff00;
    `;

    // Button container with arcade styling
    const buttonContainer = document.createElement("div");
    buttonContainer.style.cssText = `
      display: flex;
      gap: 3rem;
      flex-direction: column;
      align-items: center;
      z-index: 5;
    `;

    // Create arcade-style buttons
    const createArcadeButton = (
      text,
      primaryColor,
      secondaryColor,
      clickHandler
    ) => {
      const button = document.createElement("button");
      button.innerHTML = `
        <span style="display: block; position: relative; z-index: 2;">${text}</span>
      `;
      button.style.cssText = `
        padding: 1.5rem 4rem;
        font-size: 1.8rem;
        font-weight: 900;
        font-family: 'Courier New', monospace;
        background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
        color: #000;
        border: 3px solid ${primaryColor};
        border-radius: 12px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        min-width: 280px;
        text-shadow: none;
        box-shadow:
          0 0 20px ${primaryColor},
          inset 0 0 20px rgba(255, 255, 255, 0.2);
      `;

      // Animated background effect
      const bgEffect = document.createElement("div");
      bgEffect.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.5s ease;
        z-index: 1;
      `;
      button.appendChild(bgEffect);

      button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05) translateY(-5px)";
        button.style.boxShadow = `
          0 10px 30px ${primaryColor},
          inset 0 0 30px rgba(255, 255, 255, 0.3)
        `;
        bgEffect.style.left = "100%";
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1) translateY(0)";
        button.style.boxShadow = `
          0 0 20px ${primaryColor},
          inset 0 0 20px rgba(255, 255, 255, 0.2)
        `;
        bgEffect.style.left = "-100%";
      });

      button.addEventListener("click", clickHandler);
      return button;
    };

    const playButton = createArcadeButton(
      ">>> ENGAGE <<<",
      "#ff0066",
      "#ff6600",
      () => this.game.startGame("play")
    );

    const floatButton = createArcadeButton(
      ">>> EXPLORE <<<",
      "#00ffff",
      "#0066ff",
      () => this.game.startGame("float")
    );

    // Controls display
    const controls = document.createElement("div");
    controls.style.cssText = `
      margin-top: 2rem;
      padding: 1rem 2rem;
      background: rgba(0, 0, 0, 0.7);
      border: 2px solid #00ff00;
      border-radius: 10px;
      text-align: center;
      font-size: 0.9rem;
      color: #00ff00;
      text-shadow: 0 0 5px #00ff00;
      max-width: 500px;
    `;

    controls.innerHTML = `
      <div style="color: #ffff00; font-weight: bold; margin-bottom: 0.5rem;">FLIGHT CONTROLS</div>
      <div>A/D or ← → : BANK & TURN</div>
      <div>SPACE : FIRE LASERS</div>
      <div>B : DROP BOMBS</div>
      <div>SHIFT : AFTERBURNER</div>
    `;

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes titleTypewriter {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes titleBlink {
        0%, 50% { border-color: #00ff00; }
        51%, 100% { border-color: transparent; }
      }

      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blink {
        0%, 50% { border-color: #00ff00; }
        51%, 100% { border-color: transparent; }
      }

      @keyframes removeCursor {
        0% { border-right: 2px solid #00ff00; }
        100% { border-right: none; }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);

    // Assemble the screen
    startScreen.appendChild(starField);
    startScreen.appendChild(grid);
    startScreen.appendChild(scanlines);
    startScreen.appendChild(title);
    startScreen.appendChild(subtitle);
    buttonContainer.appendChild(playButton);
    buttonContainer.appendChild(floatButton);
    startScreen.appendChild(buttonContainer);
    startScreen.appendChild(controls);
    startScreen.appendChild(insertCoin);

    document.body.appendChild(startScreen);

    console.log("🚀 Epic arcade start screen created");
  }

  // Pause Screen Management
  showPauseScreen() {
    if (this.pauseScreen) return; // Already showing

    this.pauseScreen = document.createElement("div");
    this.pauseScreen.id = "pause-screen";
    this.pauseScreen.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      font-family: monospace;
      color: #00ff00;
      text-align: center;
      backdrop-filter: blur(1px);
    `;

    // Syndicate-style pause title
    const pauseTitle = document.createElement("div");
    pauseTitle.textContent = "GAME PAUSED";
    pauseTitle.style.cssText = `
      font-size: 4rem;
      font-weight: bold;
      color: #00ff00;
      text-shadow: 0 0 20px #00ff00;
      margin-bottom: 2rem;
      letter-spacing: 8px;
      animation: pausePulse 2s ease-in-out infinite;
    `;

    // Instruction text
    const instruction = document.createElement("div");
    instruction.textContent = "PRESS SPACE OR ENTER TO CONTINUE";
    instruction.style.cssText = `
      font-size: 1.2rem;
      color: #ffff00;
      text-shadow: 0 0 10px #ffff00;
      animation: pauseBlink 1.5s ease-in-out infinite;
      margin-bottom: 1rem;
    `;

    // Exit to main menu button
    const exitButton = document.createElement("button");
    exitButton.textContent = "EXIT TO MAIN MENU";
    exitButton.style.cssText = `
      padding: 0.8rem 2rem;
      font-size: 1rem;
      font-weight: bold;
      font-family: monospace;
      background: linear-gradient(135deg, #ff4444, #cc0000);
      color: #fff;
      border: 2px solid #ff4444;
      border-radius: 8px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 1rem;
      transition: all 0.3s ease;
      text-shadow: none;
      box-shadow: 0 0 15px rgba(255, 68, 68, 0.5);
    `;

    exitButton.addEventListener("mouseenter", () => {
      exitButton.style.transform = "scale(1.05)";
      exitButton.style.boxShadow = "0 0 25px rgba(255, 68, 68, 0.8)";
    });

    exitButton.addEventListener("mouseleave", () => {
      exitButton.style.transform = "scale(1)";
      exitButton.style.boxShadow = "0 0 15px rgba(255, 68, 68, 0.5)";
    });

    exitButton.addEventListener("click", () => {
      this.screenManager.showMainMenu(); // Use screen manager
      this.game.stopGame(); // Exit to main menu
    });

    // System status (syndicate style) - dynamic typing
    const systemStatus = document.createElement("div");
    systemStatus.style.cssText = `
      font-size: 0.9rem;
      color: #00ffff;
      text-shadow: 0 0 5px #00ffff;
      line-height: 1.5;
      margin-top: 2rem;
      opacity: 0.8;
      height: 100px;
    `;

    // Dynamic system messages
    this.systemMessages = [
      "FLIGHT SYSTEMS: STANDBY",
      "NAVIGATION: LOCKED",
      "WEAPONS: SAFE",
      "RADAR SYSTEMS: ACTIVE",
      "WEAPON SYSTEMS: RELOADED",
      "ENGINE DIAGNOSTICS: OPTIMAL",
      "TARGETING COMPUTER: CALIBRATED",
      "DEFENSIVE SYSTEMS: ONLINE",
      "FUEL RESERVES: SUFFICIENT",
      "COMMUNICATION ARRAY: OPERATIONAL",
      "STEALTH MODE: AVAILABLE",
      "MISSILE GUIDANCE: UPDATED",
      "AWAITING PILOT INPUT..."
    ];

    this.currentMessageIndex = 0;
    this.messageElement = document.createElement("div");
    this.messageElement.style.cssText = `
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #00ffff;
    `;
    systemStatus.appendChild(this.messageElement);

    // Start the typing animation
    this.startSystemMessageCycle();

    // Add CSS animations for pause screen
    const pauseStyle = document.createElement("style");
    pauseStyle.textContent = `
      @keyframes pausePulse {
        0%, 100% {
          transform: scale(1);
          text-shadow: 0 0 20px #00ff00;
        }
        50% {
          transform: scale(1.05);
          text-shadow: 0 0 30px #00ff00, 0 0 40px #00ff00;
        }
      }

      @keyframes pauseBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(pauseStyle);

    // Assemble pause screen
    this.pauseScreen.appendChild(pauseTitle);
    this.pauseScreen.appendChild(instruction);
    this.pauseScreen.appendChild(exitButton);
    this.pauseScreen.appendChild(systemStatus);

    document.body.appendChild(this.pauseScreen);

    // Add event listeners for unpause
    this.setupPauseListeners();

    console.log("⏸️ Syndicate-style pause screen shown");
  }

  hidePauseScreen() {
    if (this.pauseScreen) {
      // Stop any ongoing message cycling
      this.stopSystemMessageCycle();
      this.pauseScreen.remove();
      this.pauseScreen = null;
      this.removePauseListeners();
      console.log("▶️ Pause screen hidden");
    }
  }

  setupPauseListeners() {
    this.onPauseKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
        this.game.pauseGame(); // Unpause the game
        event.preventDefault();
      }
    };

    this.onPauseClick = () => {
      this.game.pauseGame(); // Unpause the game
    };

    document.addEventListener('keydown', this.onPauseKeyDown);
    document.addEventListener('click', this.onPauseClick);
  }

  removePauseListeners() {
    if (this.onPauseKeyDown) {
      document.removeEventListener('keydown', this.onPauseKeyDown);
      this.onPauseKeyDown = null;
    }
    if (this.onPauseClick) {
      document.removeEventListener('click', this.onPauseClick);
      this.onPauseClick = null;
    }
  }

  // Dynamic system message cycling
  startSystemMessageCycle() {
    this.typeCurrentMessage();
  }

  stopSystemMessageCycle() {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
      this.messageTimeout = null;
    }
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = null;
    }
  }

  typeCurrentMessage() {
    if (!this.messageElement || !this.systemMessages) return;

    const message = this.systemMessages[this.currentMessageIndex];
    let charIndex = 0;

    // Clear previous message
    this.messageElement.textContent = "";

    const typeChar = () => {
      if (charIndex < message.length) {
        this.messageElement.textContent = message.substring(0, charIndex + 1);
        charIndex++;
        this.typingTimeout = setTimeout(typeChar, 50); // 50ms per character
      } else {
        // Message complete, wait then move to next
        this.messageTimeout = setTimeout(() => {
          this.currentMessageIndex = (this.currentMessageIndex + 1) % this.systemMessages.length;
          this.typeCurrentMessage();
        }, 1500); // Wait 1.5s before next message
      }
    };

    typeChar();
  }

  // Cleanup
  dispose() {
    // Use screen manager for proper cleanup
    this.screenManager.dispose();

    console.log("🗑️ UI Manager disposed");
  }
}