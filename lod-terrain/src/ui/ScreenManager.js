export class ScreenManager {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.currentScreen = 'main-menu'; // 'main-menu', 'game', 'paused'

    console.log("📺 Screen Manager initialized");
  }

  // Transition to main menu
  showMainMenu() {
    console.log("📺 Transitioning to main menu");

    // Hide all other screens
    this.hideAllScreens();

    // Show start screen
    this.uiManager.showStartScreen();

    this.currentScreen = 'main-menu';
  }

  // Transition to game
  showGame() {
    console.log("📺 Transitioning to game");

    // Hide all other screens
    this.hideAllScreens();

    this.currentScreen = 'game';
  }

  // Transition to pause screen
  showPause() {
    console.log("📺 Transitioning to pause");

    // Don't hide other screens, just overlay pause
    this.uiManager.showPauseScreen();

    this.currentScreen = 'paused';
  }

  // Resume from pause (go back to game)
  resumeGame() {
    console.log("📺 Resuming game from pause");

    // Hide pause screen
    this.uiManager.hidePauseScreen();

    this.currentScreen = 'game';
  }

  // Hide all screens
  hideAllScreens() {
    console.log("📺 Hiding all screens");

    // Hide start screen
    this.uiManager.hideStartScreen();

    // Hide pause screen
    this.uiManager.hidePauseScreen();
  }

  // Get current screen state
  getCurrentScreen() {
    return this.currentScreen;
  }

  // Check if we're in a specific screen
  isInMainMenu() {
    return this.currentScreen === 'main-menu';
  }

  isInGame() {
    return this.currentScreen === 'game';
  }

  isPaused() {
    return this.currentScreen === 'paused';
  }

  // Cleanup
  dispose() {
    this.hideAllScreens();
    console.log("🗑️ Screen Manager disposed");
  }
}