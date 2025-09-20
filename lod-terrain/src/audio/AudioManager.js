export class AudioManager {
  constructor() {
    this.audioSources = new Map();
    this.currentMusic = null;
    this.masterVolume = 1.0;
    this.musicVolume = 0.6;
    this.previousMusicVolume = this.musicVolume;
    this.effectsVolume = 0.8;
    this.isMuted = false;

    console.log("🔊 Audio Manager initialized");
  }

  // Register an audio source
  registerAudio(name, audioPath, options = {}) {
    const audio = new Audio(audioPath);
    audio.loop = options.loop || false;
    audio.volume = options.volume || (options.type === 'music' ? this.musicVolume : this.effectsVolume);
    audio.preload = 'auto';

    this.audioSources.set(name, {
      audio: audio,
      type: options.type || 'effect', // 'music' or 'effect'
      isPlaying: false,
      fadeInterval: null
    });

    console.log(`🔊 Registered audio: ${name} (${options.type || 'effect'})`);
    return audio;
  }

  // Play audio by name
  playAudio(name, options = {}) {
    const audioData = this.audioSources.get(name);
    if (!audioData) {
      console.warn(`🔊 Audio not found: ${name}`);
      return;
    }

    const { audio } = audioData;

    // Stop current music if this is music and we have different music playing
    if (audioData.type === 'music' && this.currentMusic && this.currentMusic !== name) {
      this.stopMusic();
    }

    // Reset to beginning and play
    audio.currentTime = 0;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioData.isPlaying = true;
        if (audioData.type === 'music') {
          this.currentMusic = name;
        }
        console.log(`🔊 Playing: ${name}`);
      }).catch((error) => {
        console.warn(`🔊 Failed to play ${name}:`, error);
      });
    }
  }

  // Stop audio by name
  stopAudio(name) {
    const audioData = this.audioSources.get(name);
    if (!audioData) {
      console.warn(`🔊 Audio not found: ${name}`);
      return;
    }

    const { audio } = audioData;
    audio.pause();
    audio.currentTime = 0;
    audioData.isPlaying = false;

    if (audioData.type === 'music' && this.currentMusic === name) {
      this.currentMusic = null;
    }

    // Clear any fade intervals
    if (audioData.fadeInterval) {
      clearInterval(audioData.fadeInterval);
      audioData.fadeInterval = null;
    }

    console.log(`🔊 Stopped: ${name}`);
  }

  // Fade out audio over specified duration
  fadeOut(name, duration = 1000) {
    const audioData = this.audioSources.get(name);
    if (!audioData || !audioData.isPlaying) {
      return;
    }

    const { audio } = audioData;
    const startVolume = audio.volume;
    const fadeStep = startVolume / (duration / 50); // Update every 50ms

    // Clear any existing fade
    if (audioData.fadeInterval) {
      clearInterval(audioData.fadeInterval);
    }

    audioData.fadeInterval = setInterval(() => {
      audio.volume = Math.max(0, audio.volume - fadeStep);

      if (audio.volume <= 0) {
        clearInterval(audioData.fadeInterval);
        audioData.fadeInterval = null;
        this.stopAudio(name);
        audio.volume = startVolume; // Reset volume for next play
      }
    }, 50);

    console.log(`🔊 Fading out: ${name} over ${duration}ms`);
  }

  // Fade in audio over specified duration
  fadeIn(name, duration = 1000) {
    const audioData = this.audioSources.get(name);
    if (!audioData) {
      console.warn(`🔊 Audio not found: ${name}`);
      return;
    }

    const { audio } = audioData;
    const targetVolume = audioData.type === 'music' ? this.musicVolume : this.effectsVolume;
    audio.volume = 0;

    this.playAudio(name);

    const fadeStep = targetVolume / (duration / 50); // Update every 50ms

    // Clear any existing fade
    if (audioData.fadeInterval) {
      clearInterval(audioData.fadeInterval);
    }

    audioData.fadeInterval = setInterval(() => {
      audio.volume = Math.min(targetVolume, audio.volume + fadeStep);

      if (audio.volume >= targetVolume) {
        clearInterval(audioData.fadeInterval);
        audioData.fadeInterval = null;
      }
    }, 50);

    console.log(`🔊 Fading in: ${name} over ${duration}ms`);
  }

  // Music-specific methods
  playMusic(name, fadeIn = true) {
    if (fadeIn) {
      this.fadeIn(name, 1500);
    } else {
      this.playAudio(name);
    }
  }

  stopMusic(fadeOut = true) {
    if (this.currentMusic) {
      if (fadeOut) {
        this.fadeOut(this.currentMusic, 1000);
      } else {
        this.stopAudio(this.currentMusic);
      }
    }
  }

  // Stop all audio
  stopAll() {
    console.log("🔊 Stopping all audio");

    for (const [name, audioData] of this.audioSources) {
      if (audioData.isPlaying) {
        this.stopAudio(name);
      }
    }

    this.currentMusic = null;
  }

  // Pause all audio
  pauseAll() {
    console.log("🔊 Pausing all audio");

    for (const [name, audioData] of this.audioSources) {
      if (audioData.isPlaying) {
        audioData.audio.pause();
      }
    }
  }

  // Resume all audio
  resumeAll() {
    console.log("🔊 Resuming all audio");

    for (const [name, audioData] of this.audioSources) {
      if (audioData.isPlaying) {
        const playPromise = audioData.audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn(`🔊 Failed to resume ${name}:`, error);
          });
        }
      }
    }
  }

  // Set volume levels
  setMasterVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    this.updateAllVolumes();
  }

  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    this.updateMusicVolumes();
  }

  setEffectsVolume(volume) {
    this.effectsVolume = Math.max(0, Math.min(1, volume));
    this.updateEffectVolumes();
  }

  updateAllVolumes() {
    for (const [name, audioData] of this.audioSources) {
      const baseVolume = audioData.type === 'music' ? this.musicVolume : this.effectsVolume;
      audioData.audio.volume = baseVolume * this.masterVolume;
    }
  }

  updateMusicVolumes() {
    for (const [name, audioData] of this.audioSources) {
      if (audioData.type === 'music') {
        audioData.audio.volume = this.musicVolume * this.masterVolume;
      }
    }
  }

  updateEffectVolumes() {
    for (const [name, audioData] of this.audioSources) {
      if (audioData.type === 'effect') {
        audioData.audio.volume = this.effectsVolume * this.masterVolume;
      }
    }
  }

  // Check if audio is playing
  isPlaying(name) {
    const audioData = this.audioSources.get(name);
    return audioData ? audioData.isPlaying : false;
  }

  // Get current music
  getCurrentMusic() {
    return this.currentMusic;
  }

  // Game state transitions with proper audio management
  transitionToMainMenu() {
    console.log("🔊 Transitioning audio to main menu");
    this.stopAll();
    this.playMusic('menu-music', true);
  }

  transitionToGame() {
    console.log("🔊 Transitioning audio to game");
    this.stopAll();
    this.playMusic('game-music', true);
  }

  transitionToPause() {
    console.log("🔊 Transitioning audio to pause");
    this.pauseAll();
  }

  transitionFromPause() {
    console.log("🔊 Transitioning audio from pause");
    this.resumeAll();
  }

  transitionToFloat() {
    console.log("🔊 Transitioning audio to float mode");
    this.stopAll();
    // Float mode has no music, just ambient/exploration sounds if any
  }

  toggleMusic() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      // Store the current volume only if it's not already 0
      if (this.musicVolume > 0) {
        this.previousMusicVolume = this.musicVolume;
      }
      this.setMusicVolume(0);
    } else {
      this.setMusicVolume(this.previousMusicVolume || 0.6);
    }
    return !this.isMuted;
  }

  // Cleanup
  dispose() {
    this.stopAll();

    for (const [name, audioData] of this.audioSources) {
      if (audioData.fadeInterval) {
        clearInterval(audioData.fadeInterval);
      }
    }

    this.audioSources.clear();
    this.currentMusic = null;

    console.log("🗑️ Audio Manager disposed");
  }
}