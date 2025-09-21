import * as THREE from "three";
import skyImg from "./assets/textures/sky.png";
import rockImg from "./assets/textures/rock.jpg";
import marsImg from "./assets/textures/mars.png";

const loader = new THREE.TextureLoader();

const sky = loader.load(skyImg);
const rock = loader.load(rockImg);
rock.magFilter = THREE.LinearFilter; // This is the key line
rock.generateMipmaps = true; // Tell Three.js to create mipmaps
rock.minFilter = THREE.LinearMipmapLinearFilter;

const mars = loader.load(marsImg);
mars.magFilter = THREE.LinearFilter;
mars.generateMipmaps = true;
mars.minFilter = THREE.LinearMipmapLinearFilter;

// Debug: Log when Mars texture is loaded
mars.onLoad = () => {
  console.log("Mars texture loaded successfully:", marsImg);
};
mars.onError = (err) => {
  console.error("Failed to load Mars texture:", err);
};

// Create fallback textures if files don't exist
const createFallbackTexture = (color) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
};

const grass = createFallbackTexture("#4a7c59");
const snow = createFallbackTexture("#ffffff");

export const texture = {
  sky,
  grass,
  rock,
  snow,
  mars,
};

[sky, grass, rock, snow, mars].forEach((tex) => {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
});

[grass, rock, snow, mars].forEach((tex) => {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
});

sky.wrapS = THREE.ClampToEdgeWrapping;
sky.wrapT = THREE.ClampToEdgeWrapping;
