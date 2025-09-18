import * as THREE from "three";
import { texture as terrainTextures } from "./texture.js";
import { scene } from "./scene.js";
import terrainVert from "../js/shaders/terrain.vert?raw";
import terrainFrag from "../js/shaders/terrain.frag?raw";
import terrainSnowFrag from "../js/shaders/terrainSnow.frag?raw";
import terrainToonFrag from "../js/shaders/terrainToon.frag?raw";
import terrainRealisticFrag from "../js/shaders/terrainRealistic.frag?raw";
import terrainLavaFrag from "../js/shaders/terrainLava.frag?raw";
import terrainCrystalFrag from "../js/shaders/terrainCrystal.frag?raw";
import terrainDepthFrag from "../js/shaders/terrainDepth.frag?raw";
import colorScaleGlsl from "../js/shaders/colorScale.glsl?raw";
import edgemorphGlsl from "../js/shaders/edgemorph.glsl?raw";
import terrainShadowGlsl from "../js/shaders/terrainShadow.glsl?raw";

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
  ["terrainShadow.glsl", terrainShadowGlsl],
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
  { name: "Volcanic", source: processShader(terrainLavaFrag) },
  { name: "Terrain", source: processShader(terrainFrag) },
  { name: "Snowy", source: processShader(terrainSnowFrag) },
  { name: "Toon", source: processShader(terrainToonFrag) },
  { name: "Realistic", source: processShader(terrainRealisticFrag) },
  { name: "Crystal", source: processShader(terrainCrystalFrag) },
];

// --- Main Terrain Class ---
export class Terrain extends THREE.Object3D {
  constructor(heightData, worldWidth = 1024, levels = 12, resolution = 128, { enableShadows = false } = {}) {
    super();

    this.worldWidth = worldWidth;
    this.levels = levels;
    this.resolution = resolution;
    this.heightData = heightData;
    this.offset = new THREE.Vector3(0, 0, 0);
    this.activeShaderIndex = 0; // Start with first shader
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
    this.shadowsEnabled = enableShadows;
    this._cascadeEnabledVec = new THREE.Vector3(1, 1, 1);

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
    const shadowMatrixCount = 3;
    const uniforms = {
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
      uViewMatrix: { value: new THREE.Matrix4() },
      uShadowMatrices: {
        value: Array.from({ length: shadowMatrixCount }, () => new THREE.Matrix4()),
      },
      uCascadeSplits: { value: new THREE.Vector4(0, 0, 0, 0) },
      uShadowBias: { value: 0.0015 },
      uShadowStrength: { value: 0.65 },
      uShadowsEnabled: { value: this.shadowsEnabled ? 1.0 : 0.0 },
      uCascadeEnabled: { value: new THREE.Vector3(1.0, 1.0, 1.0) },
      uShadowTexelSize: { value: new THREE.Vector2(1 / 1024, 1 / 1024) },
      uShadowSoftness: { value: 1.0 },
      uShadowMap0: { value: null },
      uShadowMap1: { value: null },
      uShadowMap2: { value: null },
    };

    const terrainMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: PROCESSED_VERT_SHADER,
      fragmentShader: SHADER_PROGRAMS[this.activeShaderIndex].source,
      transparent: true,
    });

    const depthMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: PROCESSED_VERT_SHADER,
      fragmentShader: terrainDepthFrag,
      transparent: false,
      depthWrite: true,
    });
    depthMaterial.colorWrite = false;

    const plane = new THREE.Mesh(this.tileGeometry, terrainMaterial);
    plane.frustumCulled = false;
    plane.matrixAutoUpdate = false;
    plane.updateMatrix();
    plane.castShadow = this.shadowsEnabled;
    plane.receiveShadow = this.shadowsEnabled;
    plane.userData.mainMaterial = terrainMaterial;
    plane.userData.depthMaterial = depthMaterial;
    this.add(plane);
  }

  setShader(index = 0) {
    const shaderCount = SHADER_PROGRAMS.length;
    const normalizedIndex = ((index % shaderCount) + shaderCount) % shaderCount;
    this.activeShaderIndex = normalizedIndex;
    const shader = SHADER_PROGRAMS[this.activeShaderIndex];

    this.children.forEach((tile) => {
      const mainMaterial = tile.userData?.mainMaterial;
      if (mainMaterial instanceof THREE.ShaderMaterial) {
        mainMaterial.fragmentShader = shader.source;
        mainMaterial.needsUpdate = true;
      }
    });

    return this.activeShaderIndex;
  }

  updateFog(fog) {
    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
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
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms) return;
      uniforms.uFadeStart.value = this.fade.start;
      uniforms.uFadeEnd.value = this.fade.end;
    });
  }

  setShadowsEnabled(enabled) {
    this.shadowsEnabled = Boolean(enabled);
    this.children.forEach((tile) => {
      tile.castShadow = this.shadowsEnabled;
      tile.receiveShadow = this.shadowsEnabled;
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (uniforms && uniforms.uShadowsEnabled) {
        uniforms.uShadowsEnabled.value = this.shadowsEnabled ? 1.0 : 0.0;
      }
    });
  }

  updateMorphRegion(value) {
    this.morphRegion = Math.max(value, 0.001);
    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms) return;
      uniforms.uMorphRegion.value = this.morphRegion;
    });
  }

  updateSun(direction, intensity) {
    this.sunDirection.copy(direction).normalize();
    this.sunIntensity = intensity;

    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms) return;
      if (uniforms.uSunDirection) {
        uniforms.uSunDirection.value.copy(this.sunDirection);
      }
      if (uniforms.uSunIntensity) {
        uniforms.uSunIntensity.value = this.sunIntensity;
      }
    });
  }

  useDepthMaterial(useDepth) {
    this.children.forEach((tile) => {
      if (!tile.userData?.mainMaterial || !tile.userData?.depthMaterial) return;
      tile.material = useDepth ? tile.userData.depthMaterial : tile.userData.mainMaterial;
    });
  }

  updateShadowUniforms(
    matrices,
    splitsVec,
    shadowMaps,
    bias,
    strength,
    enabled,
    cascadeEnabled,
    shadowResolution,
    softness
  ) {
    if (cascadeEnabled) {
      this._cascadeEnabledVec.set(
        cascadeEnabled[0] ? 1.0 : 0.0,
        cascadeEnabled[1] ? 1.0 : 0.0,
        cascadeEnabled[2] ? 1.0 : 0.0
      );
    }
    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms) return;
      if (uniforms.uShadowsEnabled) {
        uniforms.uShadowsEnabled.value = enabled ? 1.0 : 0.0;
      }
      if (uniforms.uShadowBias) {
        uniforms.uShadowBias.value = bias;
      }
      if (uniforms.uShadowStrength) {
        uniforms.uShadowStrength.value = strength;
      }
      if (uniforms.uCascadeSplits && splitsVec) {
        uniforms.uCascadeSplits.value.copy(splitsVec);
      }
      if (uniforms.uShadowMatrices && matrices) {
        const mats = uniforms.uShadowMatrices.value;
        for (let i = 0; i < mats.length; i++) {
          if (matrices[i]) {
            mats[i].copy(matrices[i]);
          } else {
            mats[i].identity();
          }
        }
      }
      if (shadowMaps) {
        if (uniforms.uShadowMap0) uniforms.uShadowMap0.value = shadowMaps[0] || null;
        if (uniforms.uShadowMap1) uniforms.uShadowMap1.value = shadowMaps[1] || null;
        if (uniforms.uShadowMap2) uniforms.uShadowMap2.value = shadowMaps[2] || null;
      }
      if (shadowResolution && uniforms.uShadowTexelSize) {
        const texel = 1.0 / shadowResolution;
        uniforms.uShadowTexelSize.value.set(texel, texel);
      }
      if (uniforms.uShadowSoftness && softness !== undefined) {
        uniforms.uShadowSoftness.value = softness;
      }
      if (cascadeEnabled && uniforms.uCascadeEnabled) {
        uniforms.uCascadeEnabled.value.set(
          cascadeEnabled[0] ? 1.0 : 0.0,
          cascadeEnabled[1] ? 1.0 : 0.0,
          cascadeEnabled[2] ? 1.0 : 0.0
        );
      } else if (uniforms.uCascadeEnabled) {
        uniforms.uCascadeEnabled.value.copy(this._cascadeEnabledVec);
      }
    });
  }

  updateCascadeEnabled(enabledArray) {
    const vec = this._cascadeEnabledVec || new THREE.Vector3(1, 1, 1);
    vec.set(
      enabledArray[0] ? 1.0 : 0.0,
      enabledArray[1] ? 1.0 : 0.0,
      enabledArray[2] ? 1.0 : 0.0
    );
    this._cascadeEnabledVec = vec;
    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms || !uniforms.uCascadeEnabled) return;
      uniforms.uCascadeEnabled.value.copy(vec);
    });
  }

  updateViewMatrix(viewMatrix) {
    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms || !uniforms.uViewMatrix) return;
      uniforms.uViewMatrix.value.copy(viewMatrix);
    });
  }

  updateAmbient(direction, intensity, color) {
    this.ambientDirection.copy(direction).normalize();
    this.ambientIntensity = intensity;
    if (color) {
      this.ambientColor.copy(color);
    }

    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
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
      const uniforms = tile.userData?.mainMaterial?.uniforms;
      if (!uniforms) return;
      if (uniforms.uSmoothFactor) {
        uniforms.uSmoothFactor.value = this.smoothFactor;
      }
    });
  }

  updateSpecularStrength(value) {
    this.specularStrength = Math.max(value, 0.0);
    this.children.forEach((tile) => {
      const uniforms = tile.userData?.mainMaterial?.uniforms;
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
      const uniforms = tile.userData?.mainMaterial?.uniforms;
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
    const nextIndex = (this.activeShaderIndex + 1) % SHADER_PROGRAMS.length;
    return this.setShader(nextIndex);
  }
}
