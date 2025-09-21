# Vibe coded jet fighter game

A high-performance 3D fighter jet game featuring dynamic terrain generation, advanced lighting systems, and immersive gameplay mechanics built with Three.js.

<div align="center">

<img src="src/assets/screenshots/Screenshot 2025-09-21 at 22.17.38.png" width="32%" alt="Jet Fighter Game Screenshot 1">
<img src="src/assets/screenshots/Screenshot 2025-09-21 at 22.17.51.png" width="32%" alt="Jet Fighter Game Screenshot 2">
<img src="src/assets/screenshots/Screenshot 2025-09-21 at 22.18.00.png" width="32%" alt="Jet Fighter Game Screenshot 3">

</div>

## Features ✨

### 🌍 Advanced Terrain System
- **Level-of-Detail (LOD) Rendering**: Optimized terrain that adapts based on camera distance
- **Procedural Generation**: Dynamic terrain generation using noise functions
- **Multiple Environments**: Switch between different terrain styles (Mars, Realistic, Crystal)
- **Shader-Based Displacement**: GPU-accelerated terrain height generation

### ✈️ Fighter Jet Gameplay
- **Realistic Flight Controls**: Intuitive keyboard controls with physics-based movement
- **Combat System**: Laser weapons with terrain collision detection
- **Multiple Game Modes**:
  - **Play Mode**: Full fighter jet experience with combat
  - **Float Mode**: Free camera exploration of the terrain

### 🌞 Dynamic Lighting & Shadows
- **Cascaded Shadow Mapping**: Multi-level shadow system for realistic lighting
- **Dynamic Sun System**: Time-of-day simulation with moving sun
- **Lens Flare Effects**: Realistic sun lens flares with terrain occlusion
- **Advanced Materials**: PBR-style shading with multiple lighting models

### 🎮 User Interface
- **Interactive Control Panel**: Real-time adjustment of lighting, shadows, and terrain
- **Screen Management**: Seamless transitions between menu, game, and pause states
- **Environment Toggle**: Quick switching between terrain environments
- **HUD Display**: Real-time position and system information

### 🔊 Audio System
- **Dynamic Music**: Context-aware audio that changes based on game state
- **Menu Music**: Atmospheric background music for exploration
- **Game Music**: High-energy combat music during gameplay

### 🎨 Visual Effects
- **Post-Processing Pipeline**: Bloom, anti-aliasing, and color grading
- **Particle Effects**: Combat effects and environmental particles
- **Atmospheric Rendering**: Realistic sky and atmosphere simulation
- **Performance Optimization**: Efficient rendering with mobile device support

## Technology Stack 🛠️

- **Engine**: Three.js (WebGL)
- **Build Tool**: Vite
- **Shaders**: GLSL (Vertex & Fragment shaders)
- **Audio**: Web Audio API
- **Input**: Keyboard and mouse controls with pointer lock API

## Getting Started 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/felixpalmer/lod-terrain.git
   cd lod-terrain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Controls 🎮

### Menu Navigation
- **Enter**: Start experience
- **Mouse**: Navigate menu options

### Game Controls (Play Mode)
- **A/D**: Steer left/right
- **Space**: Fire lasers
- **Shift**: Fire bombs
- **Tab**: Afterburner
- **Esc**: Pause game
- **R**: Restart game

### Free Camera (Float Mode)
- **WASD**: Move camera
- **Q/E**: Move up/down
- **Mouse**: Look around (pointer lock)
- **C**: Toggle camera mode
- **Esc**: Return to main menu

### General Controls
- **T**: Switch terrain environment
- **F**: Toggle fog
- **P**: Cycle performance stats

## Project Structure 📁

```
src/
├── game/                   # Game logic and systems
│   ├── Game.js            # Main game controller
│   ├── Player.js          # Fighter jet player
│   ├── InputManager.js    # Input handling
│   ├── CollisionDetector.js # Physics and collisions
│   └── EnvironmentEffectsManager.js # Particle effects
├── ui/                    # User interface components
│   ├── UIManager.js       # UI controller
│   ├── ScreenManager.js   # Screen transitions
│   ├── ControlPanel.js    # Settings panel
│   └── IntroOverlay.js    # Start screen
├── audio/                 # Audio system
│   └── AudioManager.js    # Music and sound effects
├── assets/                # Static assets
│   ├── shaders/          # GLSL shader files
│   ├── models/           # 3D models
│   └── audio/            # Audio files
├── environment/           # Environment management
│   └── EnvironmentManager.js # Terrain environments
├── utils/                 # Utility functions
│   └── UserPreferences.js # Settings persistence
├── app.js                # Main application
├── terrain.js            # Terrain generation
├── LensFlare.js          # Lens flare effects
├── material.js           # Material definitions
└── main.js               # Entry point
```

## Key Systems 🔧

### Terrain Generation
The terrain system uses procedural noise generation combined with GPU-based displacement mapping for efficient, high-quality landscapes.

### Shadow Mapping
Implements cascaded shadow maps (CSM) for realistic shadow rendering across large distances, essential for aerial gameplay.

### Collision Detection
Uses height sampling for accurate collision detection between projectiles and the shader-displaced terrain.

### Performance Optimization
- LOD system reduces polygon count for distant terrain
- Frustum culling eliminates off-screen objects
- Efficient shader-based calculations
- Mobile device optimization

## Configuration ⚙️

The game includes extensive configuration options accessible through the control panel:

- **Lighting**: Sun time, intensity, ambient lighting
- **Shadows**: Quality, distance, cascade settings
- **Terrain**: Smoothing, height gain, noise resolution
- **Visual**: Bloom, anti-aliasing, post-processing effects
- **Performance**: Render quality, pixel ratio

## Development 🧑‍💻

### Adding New Terrain Environments
1. Create new shader files in `src/assets/shaders/`
2. Add environment configuration in `src/environment/`
3. Update the environment manager to include new options

### Customizing Game Mechanics
- Modify `src/game/Player.js` for flight physics
- Update `src/game/InputManager.js` for control schemes
- Extend `src/game/CollisionDetector.js` for new collision types

### Shader Development
The project uses custom GLSL shaders for:
- Terrain displacement and texturing
- Shadow mapping
- Post-processing effects
- Atmospheric rendering

## Performance Tips 💡

- **Shadow Quality**: Lower shadow resolution for better performance
- **Terrain Detail**: Reduce terrain levels on slower devices
- **Post-Processing**: Disable bloom and anti-aliasing if needed
- **Render Scale**: Lower pixel ratio for mobile devices

## Browser Compatibility 🌐

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires WebGL 2.0 support.

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Built with [Three.js](https://threejs.org/) - 3D graphics library
- Terrain system based on [LOD Terrain](https://github.com/felixpalmer/lod-terrain) by Felix Palmer
- Music generated with [Suno AI](https://suno.ai/) for atmospheric and combat tracks
- Shader techniques from the WebGL and graphics programming community

### Development Credits 🤖

This entire project was **vibe coded** using AI assistance from:
- **Claude** (Anthropic) - Primary development assistant
- **Codex** (OpenAI) - Code generation and debugging
- **Gemini** (Google) - Algorithm optimization and problem solving
- **Grok** (xAI) - Creative solutions and feature ideation

*The fusion of human creativity and AI collaboration made this ambitious 3D game possible.*


---

Built with ❤️ using Three.js and modern web technologies