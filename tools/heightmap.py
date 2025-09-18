import numpy as np
from PIL import Image
from numba import njit, prange
import argparse
import random
import math

# --- VOLCANO PARAMETERS ---
VOLCANO_RADIUS = 0.4          # Controls the volcano's base width (0.0 to 1.0)
VOLCANO_HEIGHT = 0.7          # Controls the peak height (0.0 to 1.0)
CALDERA_RADIUS = 0.12         # Controls the crater's width (0.0 to 1.0)
CALDERA_DEPTH = 0.3           # Controls how deep the crater is
RADIAL_NOISE_SCALE = 20.0     # Controls the number of radial ridges/gullies
RADIAL_NOISE_STRENGTH = 0.08  # The intensity of the radial details

# --- Island and Erosion Parameters ---
ISLAND_FALLOFF_STRENGTH = 2.5
ISLAND_FALLOFF_START = 0.2
EROSION_ITERATIONS = 50
TALUS_ANGLE = 0.015

# --- Pure Python/Numba Perlin Noise Implementation (from previous version) ---
@njit
def fade(t):
    return t * t * t * (t * (t * 6 - 15) + 10)
@njit
def lerp(t, a, b):
    return a + t * (b - a)
@njit
def grad(hash_val, x, y):
    h = hash_val & 15
    u = x if h < 8 else y
    v = y if h < 4 else (x if h in (12, 14) else 0)
    return (u if (h & 1) == 0 else -u) + (v if (h & 2) == 0 else -v)
@njit
def perlin_noise(x, y, perm_table):
    xi, yi = int(x) & 255, int(y) & 255
    xf, yf = x - int(x), y - int(y)
    u, v = fade(xf), fade(yf)
    p = perm_table
    aa, ab = p[p[xi] + yi], p[p[xi] + yi + 1]
    ba, bb = p[p[xi + 1] + yi], p[p[xi + 1] + yi + 1]
    g1 = grad(aa, xf, yf)
    g2 = grad(ba, xf - 1, yf)
    g3 = grad(ab, xf, yf - 1)
    g4 = grad(bb, xf - 1, yf - 1)
    return lerp(v, lerp(u, g1, g2), lerp(u, g3, g4))

# --- NEW Numba function for generating radial noise details ---
@njit(parallel=True)
def generate_radial_noise(width, height, scale, strength, perm_table):
    details = np.zeros((height, width), dtype=np.float32)
    center_x, center_y = width / 2, height / 2

    for y in prange(height):
        for x in range(width):
            dx, dy = x - center_x, y - center_y
            distance_from_center = math.sqrt(dx*dx + dy*dy)
            angle = math.atan2(dy, dx)
            
            # Use distance and angle as inputs to the noise function
            noise_val = perlin_noise(
                distance_from_center / (scale * 2.0), # Noise along the slope
                angle * scale, # Noise around the circumference (creates ridges)
                perm_table
            )
            details[y, x] = noise_val * strength
    return details

# --- Erosion function (from previous version) ---
@njit(parallel=True)
def apply_thermal_erosion(world, iterations, talus):
    # ... (erosion function code is unchanged) ...
    height, width = world.shape
    for _ in prange(iterations):
        for y in range(1, height - 1):
            for x in range(1, width - 1):
                center_h = world[y][x]
                neighbors = [(y, x-1), (y, x+1), (y-1, x), (y+1, x)]
                for ny, nx in neighbors:
                    diff = center_h - world[ny][nx]
                    if diff > talus:
                        move_amount = diff / 4.0
                        world[y][x] -= move_amount
                        world[ny][nx] += move_amount
    return world

def main():
    parser = argparse.ArgumentParser(description="Generate a volcano heightmap.")
    # ... (argparse setup is unchanged) ...
    parser.add_argument('--out', type=str, default='volcano.png', help='Output filename.')
    parser.add_argument('--width', type=int, default=2048, help='Width of the heightmap.')
    parser.add_argument('--height', type=int, default=2048, help='Height of the heightmap.')
    parser.add_argument('--seed', type=int, help='Seed for random generation.')
    args = parser.parse_args()

    seed = args.seed if args.seed is not None else random.randint(0, 10000)
    
    print(f"Generating {args.width}x{args.height} volcano with seed: {seed}...")

    # --- Step 1: Create the basic geometric shapes ---
    print("Step 1/5: Building cone and caldera...")
    x_coords = np.linspace(-1, 1, args.width)
    y_coords = np.linspace(-1, 1, args.height)
    xx, yy = np.meshgrid(x_coords, y_coords)
    distance_from_center = np.sqrt(xx**2 + yy**2)

    # Create the main cone using an inverted parabola shape
    main_cone = VOLCANO_HEIGHT * (1.0 - np.power(distance_from_center / VOLCANO_RADIUS, 2.0))
    main_cone = np.maximum(0, main_cone)

    # Create the caldera (crater) shape
    caldera = CALDERA_DEPTH * (1.0 - np.power(distance_from_center / CALDERA_RADIUS, 2.0))
    caldera = np.maximum(0, caldera)

    # Subtract the caldera from the cone to form the basic volcano shape
    base_volcano_shape = np.maximum(0, main_cone - caldera)
    
    # --- Step 2: Generate realistic noise details ---
    print("Step 2/5: Adding radial noise details...")
    p = np.arange(256, dtype=np.int32)
    rng = np.random.RandomState(seed)
    rng.shuffle(p)
    perm_table = np.stack((p, p)).flatten()
    details = generate_radial_noise(args.width, args.height, RADIAL_NOISE_SCALE, RADIAL_NOISE_STRENGTH, perm_table)
    
    # --- Step 3: Combine shape and details ---
    print("Step 3/5: Combining shape and details...")
    # Add details, making them stronger where the volcano is higher
    combined_terrain = base_volcano_shape + base_volcano_shape * details
    
    # --- Step 4: Apply erosion ---
    print("Step 4/5: Simulating thermal erosion...")
    eroded_terrain = apply_thermal_erosion(combined_terrain.copy(), EROSION_ITERATIONS, TALUS_ANGLE)

    # --- Step 5: Apply island falloff ---
    print("Step 5/5: Creating island shape...")
    # ... (island falloff logic is unchanged) ...
    falloff_map = 1.0 - np.power(np.maximum(0, (distance_from_center - ISLAND_FALLOFF_START) / (1.0 - ISLAND_FALLOFF_START)), ISLAND_FALLOFF_STRENGTH)
    final_terrain = eroded_terrain * falloff_map

    # Normalize and save the final image
    # ... (saving logic is unchanged) ...
    final_terrain_normalized = 255 * (final_terrain - final_terrain.min()) / (final_terrain.max() - final_terrain.min())
    image_data = final_terrain_normalized.astype(np.uint8)
    img = Image.fromarray(image_data, mode='L')
    img.save(args.out)

    print(f"\n✅ Successfully generated '{args.out}'")
    exit(0)

if __name__ == "__main__":
    main()