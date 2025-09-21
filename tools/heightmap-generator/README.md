# Multi-Heightmap Terrain Generator

A Node.js tool for generating seamlessly connected heightmaps for the fighter jet terrain system.

## Features

- **8 Distinct Terrain Types**: Mountains, Plains, Canyons, Hills, Valleys, Plateaus, Badlands, Highlands
- **Seamless Edge Stitching**: Automatically connects adjacent heightmaps without visible seams
- **Erosion Simulation**: Thermal and hydraulic erosion for realistic terrain features
- **Debug Visualization**: Generates color-coded preview images for each terrain type
- **Configurable Parameters**: Adjustable heightmap size, erosion settings, and stitch zones

## Installation

```bash
cd tools/heightmap-generator
npm install
```

## Usage

### Basic Generation
```bash
npm run generate
```

### Custom Parameters
```bash
node generate.js --width 512 --height 512 --output ./custom-output --debug
```

### Command Line Options

- `--width <number>`: Heightmap width (default: 256)
- `--height <number>`: Heightmap height (default: 256)
- `--output <dir>`: Output directory (default: ./output)
- `--no-images`: Skip generating preview images
- `--stitch-size <number>`: Edge stitching size in pixels (default: 32)
- `--debug`: Enable debug output

## Output Files

The generator creates:

### Heightmap Data
- `heightmap_mountains.bin` - Raw height data for mountains region
- `heightmap_plains.bin` - Raw height data for plains region
- `heightmap_canyons.bin` - Raw height data for canyons region
- ... (8 total heightmap files)

### Preview Images (Debug)
- `preview_mountains.png` - Color-coded visualization
- `preview_plains.png` - Color-coded visualization
- ... (8 total preview images)

### Metadata
- `metadata.json` - Complete generation settings and region information

## Terrain Types

| Region | Base Height | Roughness | Erosion | Description |
|--------|-------------|-----------|---------|-------------|
| Mountains | 0.8 | 0.9 | Thermal | High peaks with sharp ridges |
| Plains | 0.2 | 0.3 | None | Flat grasslands with gentle hills |
| Canyons | 0.1 | 0.7 | Hydraulic | Deep carved valleys |
| Hills | 0.4 | 0.5 | Light | Moderate elevation slopes |
| Valleys | 0.05 | 0.4 | Hydraulic | Low drainage areas |
| Plateaus | 0.6 | 0.2 | Thermal | Elevated flat regions |
| Badlands | 0.3 | 0.8 | Thermal | Eroded complex formations |
| Highlands | 0.5 | 0.6 | Light | Elevated moderate terrain |

## Edge Stitching Algorithm

The generator automatically creates seamless transitions between adjacent heightmaps:

1. **Grid Layout**: Arranges 8 heightmaps in a 3x3 grid (excluding center)
2. **Edge Detection**: Identifies adjacent regions
3. **Height Averaging**: Calculates average height at boundaries
4. **Gradient Blending**: Applies smooth transition over stitch zone
5. **Continuity Enforcement**: Ensures no visible seams between regions

## Integration with Game

The generated `.bin` files can be loaded directly into the Three.js terrain system:

```javascript
// Load heightmap data
const heightmapData = await fetch('heightmap_mountains.bin')
  .then(response => response.arrayBuffer())
  .then(buffer => new Uint8Array(buffer));

// Create texture
const heightTexture = new THREE.DataTexture(
  heightmapData, 256, 256, THREE.RedFormat, THREE.UnsignedByteType
);
```

## Examples

### Generate High-Resolution Heightmaps
```bash
node generate.js --width 512 --height 512 --output ./hires
```

### Debug Mode with Preview Images
```bash
node generate.js --debug --output ./debug-output
```

### Large Stitch Zones for Smoother Transitions
```bash
node generate.js --stitch-size 64 --output ./smooth-transitions
```

## Technical Details

- **Noise Algorithm**: Improved Perlin Noise with deterministic seeding
- **Erosion Models**: Thermal (slope-based) and Hydraulic (water-based)
- **File Format**: Raw binary data compatible with Three.js DataTexture
- **Color Coding**: Terrain-specific color schemes for easy visual debugging

## Troubleshooting

### Common Issues

**Out of Memory**: Reduce heightmap size or disable preview image generation
```bash
node generate.js --width 128 --height 128 --no-images
```

**Visible Seams**: Increase stitch size for smoother transitions
```bash
node generate.js --stitch-size 64
```

**Generation Too Slow**: Run without debug mode and preview images
```bash
node generate.js --no-images
```