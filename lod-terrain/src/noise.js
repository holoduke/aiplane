import * as THREE from "three";
import { ImprovedNoise } from "./ImprovedNoise.js";

// Create noise and save it to texture
const width = 1024;
const size = width * width;
const data = new Uint8Array(size);

// Zero out height data
for (let i = 0; i < size; i++) {
  data[i] = 0;
}

const perlin = new ImprovedNoise();
let quality = 1;
const z = Math.random() * 100;

// Do several passes to get more detail
for (let iteration = 0; iteration < 4; iteration++) {
  for (let i = 0; i < size; i++) {
    const x = i % width;
    const y = Math.floor(i / width);
    data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality);
  }
  quality *= 5;
}

function hydraulicErosion(map, width, height, droplets = 5000) {
  const out = map.slice();
  for (let n = 0; n < droplets; n++) {
    let x = Math.random() * (width - 2) + 1;
    let y = Math.random() * (height - 2) + 1;
    let sediment = 0;
    let speed = 1;
    let dx = 0,
      dy = 0;

    for (let lifetime = 0; lifetime < 30; lifetime++) {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      const i = yi * width + xi;
      const h = out[i];

      // Gradient
      const gradX = (out[i + 1] - out[i - 1]) * 0.5;
      const gradY = (out[i + width] - out[i - width]) * 0.5;

      dx = dx * 0.9 - gradX * 0.1;
      dy = dy * 0.9 - gradY * 0.1;

      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      dx /= len;
      dy /= len;

      x += dx;
      y += dy;

      if (x < 1 || y < 1 || x >= width - 1 || y >= height - 1) break;

      const j = Math.floor(y) * width + Math.floor(x);
      const newH = out[j];
      const deltaH = newH - h;

      const capacity = Math.max(-deltaH * speed * 4, 0.01);

      if (sediment > capacity) {
        const deposit = (sediment - capacity) * 0.1;
        out[i] += deposit;
        sediment -= deposit;
      } else {
        const erode = Math.min((capacity - sediment) * 0.3, out[i]);
        out[i] -= erode;
        sediment += erode;
      }

      speed = Math.sqrt(speed * speed + deltaH * 0.1);
    }
  }
  return out;
}

function smoothHeightmap(map, width, height, passes = 1) {
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

function smooth2(heightData, width, height) {
  let x; //row
  let z; //column
  let k = 0.01; //smoothing value

  /* Rows, left to right */
  for (x = 1; x < heightData.length; x++) {
    for (z = 0; z < heightData[0].length; z++) {
      heightData[x][z] = heightData[x - 1][z] * (1 - k) + heightData[x][z] * k;
    }
  }
  return heightData;
}

//const smooth = smoothHeightmap(data, width, width, 1);
const smooth = smooth2(data, width, width);
export const noise = new THREE.DataTexture(
  smooth,
  width,
  width,
  THREE.RedFormat,
  THREE.UnsignedByteType
);
noise.wrapS = THREE.MirroredRepeatWrapping;
noise.wrapT = THREE.MirroredRepeatWrapping;
noise.magFilter = THREE.LinearFilter;
noise.minFilter = THREE.LinearMipMapLinearFilter;
noise.generateMipmaps = true;
noise.needsUpdate = true;
