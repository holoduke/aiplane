import * as THREE from "three";
import { renderer } from "../renderer.js";
import { camera } from "../camera.js";
import { scene } from "../scene.js";

/**
 * Manages all rendering-related functionality including shadows, post-processing, and bloom
 */
export class RenderingManager {
  constructor() {
    this.shadowCascades = [];
    this.shadowMaps = [];
    this.shadowCameras = [];
    this.shadowBounds = [];
    this.lightDirection = new THREE.Vector3(0.3, 0.5, -0.8).normalize();
    this.postProcessing = null;
    this.debugLight = null;
  }

  /**
   * Setup shadow mapping with cascades
   */
  setupShadows(config) {
    this.clearShadows();

    const { shadowCascades, shadowResolution, shadowBias } = config;
    const enabledCascades = shadowCascades.filter(c => c.enabled);

    console.log(`🔦 Setting up ${enabledCascades.length} shadow cascades`);

    enabledCascades.forEach((cascade, index) => {
      const shadowMap = new THREE.WebGLRenderTarget(shadowResolution, shadowResolution);
      shadowMap.texture.format = THREE.RedFormat;
      shadowMap.texture.type = THREE.FloatType;
      shadowMap.texture.magFilter = THREE.LinearFilter;
      shadowMap.texture.minFilter = THREE.LinearFilter;
      shadowMap.texture.compareFunction = THREE.LessEqualCompare;
      shadowMap.texture.compareMode = THREE.CompareToTexture;

      const shadowCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10000);
      shadowCamera.position.set(0, 0, 100);

      this.shadowMaps.push(shadowMap);
      this.shadowCameras.push(shadowCamera);
      this.shadowBounds.push({
        min: new THREE.Vector3(-cascade.size / 2, -cascade.size / 2, -1000),
        max: new THREE.Vector3(cascade.size / 2, cascade.size / 2, 1000),
        size: cascade.size
      });
    });

    this.updateShadowSettings(config);
  }

  /**
   * Update shadow settings without recreating shadow maps
   */
  updateShadowSettings(config) {
    const { shadowStrength, shadowSoftness, shadowBias, shadowMaxDistance } = config;

    // Update shadow uniforms on terrain if it exists
    if (this.terrain) {
      this.applyShadowUniformsToTerrain(config);
    }
  }

  /**
   * Apply shadow uniforms to terrain material
   */
  applyShadowUniformsToTerrain(terrain, config) {
    if (!terrain || !terrain.material) return;

    const material = terrain.material;
    const { shadowStrength, shadowSoftness, shadowBias, shadowMaxDistance } = config;

    if (material.uniforms) {
      if (material.uniforms.uShadowMaps) {
        material.uniforms.uShadowMaps.value = this.shadowMaps.map(sm => sm.texture);
      }
      if (material.uniforms.uShadowMatrices) {
        material.uniforms.uShadowMatrices.value = this.shadowCameras.map(cam =>
          new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse)
        );
      }
      if (material.uniforms.uShadowStrength) {
        material.uniforms.uShadowStrength.value = shadowStrength;
      }
      if (material.uniforms.uShadowSoftness) {
        material.uniforms.uShadowSoftness.value = shadowSoftness;
      }
      if (material.uniforms.uShadowBias) {
        material.uniforms.uShadowBias.value = shadowBias;
      }
      if (material.uniforms.uShadowDistance) {
        material.uniforms.uShadowDistance.value = shadowMaxDistance;
      }
      if (material.uniforms.uLightDirection) {
        material.uniforms.uLightDirection.value.copy(this.lightDirection);
      }
      if (material.uniforms.uShadowCascadeSizes) {
        material.uniforms.uShadowCascadeSizes.value = this.shadowBounds.map(b => b.size);
      }
    }
  }

  /**
   * Calculate shadow cascade bounds based on camera
   */
  calculateShadowCascades() {
    const cascadeDistances = this.shadowBounds.map(b => b.size / 2);
    const playerPosition = camera.position;

    this.shadowCameras.forEach((shadowCamera, index) => {
      const bounds = this.shadowBounds[index];
      const size = bounds.size;

      // Position shadow camera above player
      shadowCamera.position.copy(playerPosition);
      shadowCamera.position.addScaledVector(this.lightDirection, -size);
      shadowCamera.lookAt(playerPosition);

      // Update orthographic camera bounds
      shadowCamera.left = -size / 2;
      shadowCamera.right = size / 2;
      shadowCamera.top = size / 2;
      shadowCamera.bottom = -size / 2;
      shadowCamera.near = 0.1;
      shadowCamera.far = size * 2;
      shadowCamera.updateProjectionMatrix();
    });
  }

  /**
   * Render shadow maps for all cascades
   */
  renderShadowMaps() {
    if (!this.shadowMaps.length) return;

    this.calculateShadowCascades();

    const originalRenderTarget = renderer.getRenderTarget();
    const originalShadowType = renderer.shadowMap.type;
    const originalShadowEnabled = renderer.shadowMap.enabled;

    renderer.shadowMap.enabled = false;

    this.shadowMaps.forEach((shadowMap, index) => {
      const shadowCamera = this.shadowCameras[index];

      renderer.setRenderTarget(shadowMap);
      renderer.clear();

      // Render scene from shadow camera perspective
      renderer.render(scene, shadowCamera);
    });

    renderer.shadowMap.enabled = originalShadowEnabled;
    renderer.shadowMap.type = originalShadowType;
    renderer.setRenderTarget(originalRenderTarget);
  }

  /**
   * Setup post-processing effects
   */
  setupPostProcessing(config) {
    // This would integrate with the existing post-processing system
    console.log('🎨 Setting up post-processing');
  }

  /**
   * Apply bloom settings
   */
  applyBloomSettings(config) {
    if (this.postProcessing && this.postProcessing.bloomEffect) {
      const { bloomStrength, bloomThreshold, bloomSoftKnee, bloomSigma } = config;

      this.postProcessing.bloomEffect.strength = bloomStrength;
      this.postProcessing.bloomEffect.threshold = bloomThreshold;
      this.postProcessing.bloomEffect.smoothWidth = bloomSoftKnee;
      this.postProcessing.bloomEffect.sigma = bloomSigma;
    }
  }

  /**
   * Apply anti-aliasing settings
   */
  applyAntialiasSettings(config) {
    if (this.postProcessing && this.postProcessing.fxaaEffect) {
      const { aaSubpixelBlending, aaContrastThreshold, aaRelativeThreshold } = config;

      this.postProcessing.fxaaEffect.subpixelBlending = aaSubpixelBlending;
      this.postProcessing.fxaaEffect.contrastThreshold = aaContrastThreshold;
      this.postProcessing.fxaaEffect.relativeThreshold = aaRelativeThreshold;
    }
  }

  /**
   * Setup debug lighting visualization
   */
  setupDebugLight() {
    if (this.debugLight) {
      scene.remove(this.debugLight);
    }

    const geometry = new THREE.SphereGeometry(2, 8, 6);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.debugLight = new THREE.Mesh(geometry, material);

    // Position debug light along light direction
    this.debugLight.position.copy(this.lightDirection).multiplyScalar(-100);
    scene.add(this.debugLight);
  }

  /**
   * Update debug light position
   */
  updateDebugLight() {
    if (this.debugLight) {
      this.debugLight.position.copy(this.lightDirection).multiplyScalar(-100);
    }
  }

  /**
   * Clean up shadow resources
   */
  clearShadows() {
    this.shadowMaps.forEach(shadowMap => shadowMap.dispose());
    this.shadowMaps.length = 0;
    this.shadowCameras.length = 0;
    this.shadowBounds.length = 0;
  }

  /**
   * Clean up all resources
   */
  dispose() {
    this.clearShadows();
    if (this.debugLight) {
      scene.remove(this.debugLight);
      this.debugLight.geometry.dispose();
      this.debugLight.material.dispose();
      this.debugLight = null;
    }
  }

  /**
   * Set terrain reference for shadow uniforms
   */
  setTerrain(terrain) {
    this.terrain = terrain;
  }

  /**
   * Update light direction
   */
  setLightDirection(direction) {
    this.lightDirection.copy(direction).normalize();
    this.updateDebugLight();
  }
}