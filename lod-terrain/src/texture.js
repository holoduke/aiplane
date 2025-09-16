import * as THREE from "three";

const texturePath = "js/textures/";
const loader = new THREE.TextureLoader();

const sky = loader.load(texturePath + "sky.png");
const rock = loader.load(texturePath + "rock.jpg");
rock.magFilter = THREE.LinearFilter; // This is the key line
rock.generateMipmaps = true; // Tell Three.js to create mipmaps
rock.minFilter = THREE.LinearMipmapLinearFilter;

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
};

[sky, grass, rock, snow].forEach((tex) => {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
});

[grass, rock, snow].forEach((tex) => {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
});

sky.wrapS = THREE.ClampToEdgeWrapping;
sky.wrapT = THREE.ClampToEdgeWrapping;
