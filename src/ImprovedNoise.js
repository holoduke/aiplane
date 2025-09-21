// Improved Perlin Noise (ES6 class, with extra helpers)
// Based on Ken Perlin’s reference implementation
// http://mrl.nyu.edu/~perlin/noise/

export class ImprovedNoise {
  constructor(seed = null) {
    // Default permutation
    this.perm = new Uint8Array(512);
    const p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ];

    // Optional deterministic shuffle with seed
    let permSource = p;
    if (seed !== null) {
      permSource = [...p];
      let random = this._mulberry32(seed);
      for (let i = permSource.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [permSource[i], permSource[j]] = [permSource[j], permSource[i]];
      }
    }

    for (let i = 0; i < 512; i++) {
      this.perm[i] = permSource[i & 255];
    }
  }

  // --- Core functions ---
  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t, a, b) {
    return a + t * (b - a);
  }

  grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  // --- 3D noise ---
  noise(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.perm[X] + Y;
    const AA = this.perm[A] + Z;
    const AB = this.perm[A + 1] + Z;
    const B = this.perm[X + 1] + Y;
    const BA = this.perm[B] + Z;
    const BB = this.perm[B + 1] + Z;

    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.perm[AA], x, y, z),
          this.grad(this.perm[BA], x - 1, y, z)
        ),
        this.lerp(
          u,
          this.grad(this.perm[AB], x, y - 1, z),
          this.grad(this.perm[BB], x - 1, y - 1, z)
        )
      ),
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.perm[AA + 1], x, y, z - 1),
          this.grad(this.perm[BA + 1], x - 1, y, z - 1)
        ),
        this.lerp(
          u,
          this.grad(this.perm[AB + 1], x, y - 1, z - 1),
          this.grad(this.perm[BB + 1], x - 1, y - 1, z - 1)
        )
      )
    );
  }

  // --- 2D/1D helpers ---
  noise2D(x, y) {
    return this.noise(x, y, 0);
  }

  noise1D(x) {
    return this.noise(x, 0, 0);
  }

  // --- Extensions ---
  fbm(x, y, z, octaves = 4, persistence = 0.5, lacunarity = 2.0) {
    let total = 0;
    let frequency = 1;
    let amplitude = 1;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      total +=
        this.noise(x * frequency, y * frequency, z * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }

    return total / maxValue; // Normalize to [-1, 1]
  }

  turbulence(x, y, z, octaves = 4) {
    let value = 0;
    let freq = 1;
    let amp = 1;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      value += Math.abs(this.noise(x * freq, y * freq, z * freq)) * amp;
      maxValue += amp;
      amp *= 0.5;
      freq *= 2;
    }

    return value / maxValue;
  }

  // Simple seeded RNG (deterministic permutation shuffle)
  _mulberry32(seed) {
    return function () {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Generate a 2D noise map
  generate2D(width, height, scale = 0.05) {
    const data = new Float32Array(width * height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const value = this.noise2D(x * scale, y * scale);
        data[y * width + x] = value;
      }
    }
    return data;
  }

  // Apply thermal erosion to a heightmap
  static thermalErosion(
    heightmap,
    width,
    height,
    iterations = 30,
    talus = 0.01
  ) {
    const hm = heightmap.slice(); // copy
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let iter = 0; iter < iterations; iter++) {
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = y * width + x;
          let dMax = 0;
          let jMax = -1;

          // find steepest neighbor
          for (const [dx, dy] of dirs) {
            const j = (y + dy) * width + (x + dx);
            const d = hm[i] - hm[j];
            if (d > dMax) {
              dMax = d;
              jMax = j;
            }
          }

          // collapse if slope > talus
          if (dMax > talus && jMax >= 0) {
            const amount = dMax * 0.5;
            hm[i] -= amount;
            hm[jMax] += amount;
          }
        }
      }
    }
    return hm;
  }

  // Very simplified hydraulic erosion (raindrop-based)
  static hydraulicErosion(
    heightmap,
    width,
    height,
    droplets = 10000,
    inertia = 0.05,
    capacity = 4,
    deposition = 0.1,
    erosion = 0.3
  ) {
    const hm = heightmap.slice();
    const rand = Math.random;

    for (let n = 0; n < droplets; n++) {
      let x = rand() * (width - 1);
      let y = rand() * (height - 1);
      let dx = 0,
        dy = 0;
      let sediment = 0;
      let speed = 1;

      for (let lifetime = 0; lifetime < 30; lifetime++) {
        const xi = Math.floor(x);
        const yi = Math.floor(y);
        if (xi < 1 || yi < 1 || xi >= width - 1 || yi >= height - 1) break;

        const i = yi * width + xi;
        const h = hm[i];

        // Compute gradient (central differences)
        const gradX = (hm[i + 1] - hm[i - 1]) * 0.5;
        const gradY = (hm[i + width] - hm[i - width]) * 0.5;

        // Update direction with inertia
        dx = dx * inertia - gradX * (1 - inertia);
        dy = dy * inertia - gradY * (1 - inertia);

        // Normalize step
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        dx /= len;
        dy /= len;

        x += dx;
        y += dy;

        const newI = Math.floor(y) * width + Math.floor(x);
        const newH = hm[newI];

        // Erosion / deposition
        const deltaH = newH - h;
        const capacityNow = Math.max(-deltaH * speed * capacity, 0.01);

        if (sediment > capacityNow) {
          // deposit
          const deposit = (sediment - capacityNow) * deposition;
          hm[i] += deposit;
          sediment -= deposit;
        } else {
          // erode
          const erodeAmt = Math.min((capacityNow - sediment) * erosion, hm[i]);
          hm[i] -= erodeAmt;
          sediment += erodeAmt;
        }

        // water speed & sediment capacity
        speed = Math.sqrt(speed * speed + deltaH * 0.1);
      }
    }
    return hm;
  }

  static smoothHeightmap(map, width, height, passes = 1) {
    const out = map.slice();
    const temp = map.slice();

    for (let p = 0; p < passes; p++) {
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = y * width + x;
          let sum = 0;
          sum += out[i];
          sum += out[i - 1];
          sum += out[i + 1];
          sum += out[i - width];
          sum += out[i + width];
          temp[i] = sum / 5; // simple 5-point average
        }
      }
      out.set(temp);
    }
    return out;
  }
}
