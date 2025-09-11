# Fighter Jet Game

A modern 3D top-down fighter jet game built with Three.js, featuring futuristic visuals, raytracing effects, and intense aerial combat.

## Features

- **3D Fighter Jet**: Detailed jet model with particle effects and engine glow
- **Procedural Terrain**: Generated 3D landscape with futuristic structures
- **Enemy AI**: Smart enemy planes and ground turrets that track and attack the player
- **Advanced Graphics**: Raytracing support, particle systems, and dynamic lighting
- **Immersive HUD**: Speed, altitude, health indicators, radar, and minimap
- **Responsive Controls**: Keyboard and mouse controls with mouse lock support
- **Real-time Combat**: Shooting mechanics with bullet trails and explosions

## Controls

- **WASD** or **Arrow Keys**: Move the fighter jet
- **Mouse**: Look around (click canvas to lock cursor)
- **Q/E**: Pitch up/down
- **Space** or **Left Click**: Shoot
- **Escape**: Release cursor lock

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fighter-jet-game
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The game will be available at `http://localhost:5173/`

### Build for Production

Build the optimized version:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project:
```bash
npm run build
```

2. Deploy the contents of the `dist/` folder to your preferred hosting service.

### Self-hosting

1. Build the project and serve the `dist/` folder with any static web server
2. Ensure your server supports serving the files with proper MIME types

## Game Mechanics

- **Health System**: Start with 100 health, lose health when hit by enemy fire
- **Enemy Types**: 
  - Red fighter planes that patrol and attack
  - Ground turrets that track and shoot at the player
- **Combat**: Use projectile weapons to destroy enemies
- **Survival**: Avoid enemy fire and survive as long as possible

## Technical Features

- **Three.js**: Advanced 3D graphics and WebGL rendering
- **Raytracing**: Enhanced lighting and reflections (when supported)
- **Particle Systems**: Engine trails, explosions, and visual effects
- **Dynamic Shadows**: Real-time shadow mapping
- **Procedural Generation**: Terrain and structure placement
- **Performance Optimization**: Object pooling for bullets and efficient rendering

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 90+
- Safari 14+
- Edge 90+

Requires WebGL 2.0 support for optimal experience.

## License

This project is open source and available under the MIT License.# aiplane
