import * as THREE from "three";
import { texture as terrainTextures } from "./texture.js";
import { scene } from "./scene.js";
import terrainVert from "../js/shaders/terrain.vert?raw";
import terrainFrag from "../js/shaders/terrain.frag?raw";
import terrainSnowFrag from "../js/shaders/terrainSnow.frag?raw";
import terrainToonFrag from "../js/shaders/terrainToon.frag?raw";
import terrainRealisticFrag from "../js/shaders/terrainRealistic.frag?raw";
import colorScaleGlsl from "../js/shaders/colorScale.glsl?raw";
import edgemorphGlsl from "../js/shaders/edgemorph.glsl?raw";

// --- Constants ---
const Edge = Object.freeze({
  NONE: 0,
  TOP: 1,
  LEFT: 2,
  BOTTOM: 4,
  RIGHT: 8,
});

const SHADER_INCLUDES = new Map([
  ["colorScale.glsl", colorScaleGlsl],
  ["edgemorph.glsl", edgemorphGlsl],
]);

// --- Shader Pre-Processor ---
function processShader(shaderSource) {
  const includePattern = /#include\s+[<"]?([^>"]+)[">]?/g;
  return shaderSource.replace(
    includePattern,
    (match, includeName) => SHADER_INCLUDES.get(includeName.trim()) || ""
  );
}

// Pre-process shaders on load for efficiency
const PROCESSED_VERT_SHADER = processShader(terrainVert);
const SHADER_PROGRAMS = [
  { name: "Terrain", source: processShader(terrainFrag) },
  { name: "Snowy", source: processShader(terrainSnowFrag) },
  { name: "Toon", source: processShader(terrainToonFrag) },
  { name: "Realistic", source: processShader(terrainRealisticFrag) },
];

// --- Main Terrain Class ---
export class Terrain extends THREE.Object3D {
  constructor(heightData, worldWidth = 1024, levels = 12, resolution = 128) {
    super();

    this.worldWidth = worldWidth;
    this.levels = levels;
    this.resolution = resolution;
    this.heightData = heightData;
    this.offset = new THREE.Vector3(0, 0, 0);
    this.activeShaderIndex = 3; // Start with "Realistic"
    this.fade = { start: 0, end: 0 };
    this.morphRegion = 0.3;
    this.sunDirection = new THREE.Vector3(0, 1, 0);
    this.sunIntensity = 1.0;
    this.ambientDirection = new THREE.Vector3(1, 0, 0);
    this.ambientIntensity = 0.2;
    this.ambientColor = new THREE.Color(0.45, 0.42, 0.35);
    this.smoothFactor = 0.5;
    this.specularStrength = 1.0;
    this.skyTintColor = new THREE.Color(0.62, 0.72, 0.88);
    this.skyTintStrength = 0.15;

    this.tileGeometry = new THREE.PlaneGeometry(
      1,
      1,
      this.resolution,
      this.resolution
    );
    this.tileGeometry.translate(0.5, 0.5, 0);

    this.createTileGrid();
  }

  createTileGrid() {
    const initialScale = this.worldWidth / Math.pow(2, this.levels);

    // Create the central 2x2 grid
    for (const i of [-1, 0]) {
      for (const j of [-1, 0]) {
        this.createTile(
          i * initialScale,
          j * initialScale,
          initialScale,
          Edge.NONE
        );
      }
    }

    // Create the outer rings
    for (let level = 0; level < this.levels - 1; level++) {
      const scale = initialScale * Math.pow(2, level);
      for (let i = -2; i < 2; i++) {
        for (let j = -2; j < 2; j++) {
          if (i > -2 && i < 1 && j > -2 && j < 1) continue; // Skip inner area

          let edgeMorph = Edge.NONE;
          if (i === -2) edgeMorph |= Edge.LEFT;
          if (i === 1) edgeMorph |= Edge.RIGHT;
          if (j === -2) edgeMorph |= Edge.BOTTOM;
          if (j === 1) edgeMorph |= Edge.TOP;

          this.createTile(i * scale, j * scale, scale, edgeMorph);
        }
      }
    }
  }

  createTile(x, y, scale, edgeMorph) {
    const terrainMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uEdgeMorph: { value: edgeMorph },
        uGlobalOffset: { value: this.offset },
        uHeightData: { value: this.heightData },
        uGrass: { value: terrainTextures.grass },
        uRock: { value: terrainTextures.rock },
        uSnow: { value: terrainTextures.snow },
        uTileOffset: { value: new THREE.Vector2(x, y) },
        uScale: { value: scale },
        uTileResolution: { value: this.resolution },
        uFogColor: {
          value: scene.fog
            ? scene.fog.color.clone()
            : new THREE.Color(0x000000),
        },
        uFogNear: { value: scene.fog ? scene.fog.near : 0 },
        uFogFar: { value: scene.fog ? scene.fog.far : 1 },
        uMorphRegion: { value: this.morphRegion },
        uSunDirection: { value: this.sunDirection.clone() },
        uSunIntensity: { value: this.sunIntensity },
        uAmbientDirection: { value: this.ambientDirection.clone() },
        uAmbientIntensity: { value: this.ambientIntensity },
        uAmbientColor: { value: this.ambientColor.clone() },
        uSmoothFactor: { value: this.smoothFactor },
        uSpecularStrength: { value: this.specularStrength },
        uFadeStart: { value: this.fade.start },
        uFadeEnd: { value: this.fade.end },
        uSkyTintColor: { value: this.skyTintColor.clone() },
        uSkyTintStrength: { value: this.skyTintStrength },
      },
      vertexShader: PROCESSED_VERT_SHADER,
      fragmentShader: SHADER_PROGRAMS[this.activeShaderIndex].source,
      transparent: true,
    });

    const plane = new THREE.Mesh(this.tileGeometry, terrainMaterial);
    // GPU shader repositions vertices, so disable frustum culling to avoid
    // Three.js dropping tiles whose bounding boxes no longer match their
    // visual location once we offset around the camera.
    plane.frustumCulled = false;
    plane.matrixAutoUpdate = false;
    plane.updateMatrix();
    this.add(plane);
  }

  updateFog(fog) {
    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      if (fog) {
        uniforms.uFogColor.value.copy(fog.color);
        uniforms.uFogNear.value = fog.near;
        uniforms.uFogFar.value = fog.far;
      } else {
        uniforms.uFogNear.value = 1e9;
        uniforms.uFogFar.value = 1e9;
      }
    });
  }

  updateFade(start, end) {
    if (!(end > start)) {
      this.fade.start = 0;
      this.fade.end = 0;
    } else {
      this.fade.start = start;
      this.fade.end = end;
    }

    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      uniforms.uFadeStart.value = this.fade.start;
      uniforms.uFadeEnd.value = this.fade.end;
    });
  }

  updateMorphRegion(value) {
    this.morphRegion = Math.max(value, 0.001);
    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      uniforms.uMorphRegion.value = this.morphRegion;
    });
  }

  updateSun(direction, intensity) {
    this.sunDirection.copy(direction).normalize();
    this.sunIntensity = intensity;

    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      if (uniforms.uSunDirection) {
        uniforms.uSunDirection.value.copy(this.sunDirection);
      }
      if (uniforms.uSunIntensity) {
        uniforms.uSunIntensity.value = this.sunIntensity;
      }
    });
  }

  updateAmbient(direction, intensity, color) {
    this.ambientDirection.copy(direction).normalize();
    this.ambientIntensity = intensity;
    if (color) {
      this.ambientColor.copy(color);
    }

    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      if (uniforms.uAmbientDirection) {
        uniforms.uAmbientDirection.value.copy(this.ambientDirection);
      }
      if (uniforms.uAmbientIntensity) {
        uniforms.uAmbientIntensity.value = this.ambientIntensity;
      }
      if (uniforms.uAmbientColor) {
        uniforms.uAmbientColor.value.copy(this.ambientColor);
      }
    });
  }

  updateSmoothFactor(value) {
    this.smoothFactor = THREE.MathUtils.clamp(value, 0.0, 1.0);
    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      if (uniforms.uSmoothFactor) {
        uniforms.uSmoothFactor.value = this.smoothFactor;
      }
    });
  }

  updateSpecularStrength(value) {
    this.specularStrength = Math.max(value, 0.0);
    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      if (uniforms.uSpecularStrength) {
        uniforms.uSpecularStrength.value = this.specularStrength;
      }
    });
  }

  updateSkyTint(color, strength) {
    if (color) {
      this.skyTintColor.copy(color);
    }
    if (typeof strength === "number") {
      this.skyTintStrength = Math.max(strength, 0.0);
    }

    this.children.forEach((tile) => {
      const uniforms = tile.material.uniforms;
      if (!uniforms) return;
      if (uniforms.uSkyTintColor) {
        uniforms.uSkyTintColor.value.copy(this.skyTintColor);
      }
      if (uniforms.uSkyTintStrength) {
        uniforms.uSkyTintStrength.value = this.skyTintStrength;
      }
    });
  }

  cycleShader() {
    this.activeShaderIndex =
      (this.activeShaderIndex + 1) % SHADER_PROGRAMS.length;
    const newShader = SHADER_PROGRAMS[this.activeShaderIndex];

    this.children.forEach((tile) => {
      if (tile.material instanceof THREE.ShaderMaterial) {
        tile.material.fragmentShader = newShader.source;
        tile.material.needsUpdate = true;
      }
    });

    return this.activeShaderIndex;
  }
}
