export class UserPreferences {
  constructor() {
    this.storageKey = 'vibejet-preferences';
    this.defaults = {
      musicEnabled: true,
      sfxEnabled: true,
      musicVolume: 0.7,
      sfxVolume: 0.8,
      lastPlayedMap: 'crystal',
      controlsLayout: 'default'
    };

    // Load preferences from localStorage
    this.loadPreferences();

    console.log("⚙️ User preferences initialized");
  }

  // Load preferences from localStorage
  loadPreferences() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.preferences = { ...this.defaults, ...parsed };
      } else {
        this.preferences = { ...this.defaults };
      }
    } catch (error) {
      console.warn("⚠️ Failed to load user preferences, using defaults:", error);
      this.preferences = { ...this.defaults };
    }
  }

  // Save preferences to localStorage
  savePreferences() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.preferences));
      console.log("💾 User preferences saved");
    } catch (error) {
      console.error("❌ Failed to save user preferences:", error);
    }
  }

  // Get a preference value
  get(key) {
    return this.preferences[key] !== undefined ? this.preferences[key] : this.defaults[key];
  }

  // Set a preference value
  set(key, value) {
    this.preferences[key] = value;
    this.savePreferences();
  }

  // Toggle a boolean preference
  toggle(key) {
    const currentValue = this.get(key);
    if (typeof currentValue === 'boolean') {
      this.set(key, !currentValue);
      return !currentValue;
    } else {
      console.warn(`⚠️ Cannot toggle non-boolean preference: ${key}`);
      return currentValue;
    }
  }

  // Music preferences
  isMusicEnabled() {
    return this.get('musicEnabled');
  }

  setMusicEnabled(enabled) {
    this.set('musicEnabled', enabled);
  }

  toggleMusic() {
    return this.toggle('musicEnabled');
  }

  getMusicVolume() {
    return this.get('musicVolume');
  }

  setMusicVolume(volume) {
    this.set('musicVolume', Math.max(0, Math.min(1, volume)));
  }

  // SFX preferences
  isSfxEnabled() {
    return this.get('sfxEnabled');
  }

  setSfxEnabled(enabled) {
    this.set('sfxEnabled', enabled);
  }

  toggleSfx() {
    return this.toggle('sfxEnabled');
  }

  getSfxVolume() {
    return this.get('sfxVolume');
  }

  setSfxVolume(volume) {
    this.set('sfxVolume', Math.max(0, Math.min(1, volume)));
  }

  // Map preferences
  getLastPlayedMap() {
    return this.get('lastPlayedMap');
  }

  setLastPlayedMap(mapName) {
    this.set('lastPlayedMap', mapName);
  }

  // Controls preferences
  getControlsLayout() {
    return this.get('controlsLayout');
  }

  setControlsLayout(layout) {
    this.set('controlsLayout', layout);
  }

  // Reset all preferences to defaults
  resetToDefaults() {
    this.preferences = { ...this.defaults };
    this.savePreferences();
    console.log("🔄 User preferences reset to defaults");
  }

  // Export preferences for backup
  export() {
    return JSON.stringify(this.preferences, null, 2);
  }

  // Import preferences from backup
  import(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      this.preferences = { ...this.defaults, ...imported };
      this.savePreferences();
      console.log("📥 User preferences imported successfully");
      return true;
    } catch (error) {
      console.error("❌ Failed to import user preferences:", error);
      return false;
    }
  }

  // Get all preferences
  getAll() {
    return { ...this.preferences };
  }

  // Dispose (cleanup if needed)
  dispose() {
    console.log("🗑️ User preferences disposed");
  }
}

// Create a global instance
export const userPreferences = new UserPreferences();