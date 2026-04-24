import * as THREE from "three";
import { createPostProcessing } from "../postprocessing.js";
import { renderer, setRendererPixelRatio, getRendererPixelRatio } from "../renderer.js";
import { camera } from "../camera.js";
import { container } from "../container.js";

/**
 * Manages the post-processing composer: bloom pipeline, FXAA, and
 * brightness/contrast pass. Owns all pass instances and settings;
 * TerrainApp proxies the public set*() methods used by ControlPanel.
 */
export class PostProcessingController {
  constructor(app) {
    this.app = app;

    // Settings
    this.bloomEnabled = true;
    this.bloomStrength = 0.05;
    this.bloomThreshold = 1.0;
    this.bloomSoftKnee = 0.76;
    this.bloomSigma = 4;
    this.bloomResolution = 356;
    this.aaEnabled = true;
    this.aaSubpixelBlending = 1.0;
    this.aaContrastThreshold = 0.0312;
    this.aaRelativeThreshold = 0.063;
    this.enabled = true;
    this.renderPixelRatio = getRendererPixelRatio();

    // Passes (populated by setup())
    this.composer = null;
    this.brightPass = null;
    this.blurPassH = null;
    this.blurPassV = null;
    this.compositePass = null;
    this.fxaaPass = null;
    this.brightnessContrastPass = null;
    this._updateBloomResolutionFn = null;
    this._applyAASettingsFn = null;
    this._handleResize = null;
    this._onWindowResize = null;
  }

  setup() {
    // Safe to call multiple times — tear down any prior resize listener first.
    this.dispose();

    const {
      composer,
      brightPass,
      blurPassH,
      blurPassV,
      compositePass,
      fxaaPass,
      brightnessContrastPass,
      setBloomResolution,
      applyAntialiasSettings,
      handleResize,
    } = createPostProcessing({
      renderer,
      scene: this.app.scene,
      camera,
      bloomStrength: this.bloomStrength,
      bloomThreshold: this.bloomThreshold,
      bloomSoftKnee: this.bloomSoftKnee,
      bloomSigma: this.bloomSigma,
      bloomResolution: this.bloomResolution,
      aaEnabled: this.aaEnabled,
      aaSubpixelBlending: this.aaSubpixelBlending,
      aaContrastThreshold: this.aaContrastThreshold,
      aaRelativeThreshold: this.aaRelativeThreshold,
      brightness: this.app.brightnessAdjustment,
      contrast: this.app.contrastAdjustment,
    });

    this.composer = composer;
    this.brightPass = brightPass;
    this.blurPassH = blurPassH;
    this.blurPassV = blurPassV;
    this.compositePass = compositePass;
    this.fxaaPass = fxaaPass;
    this.brightnessContrastPass = brightnessContrastPass;
    this._updateBloomResolutionFn = setBloomResolution;
    this._applyAASettingsFn = applyAntialiasSettings;
    this._handleResize = handleResize;

    if (this.brightPass) {
      this.brightPass.material.uniforms.uThreshold.value = this.bloomThreshold;
      this.brightPass.material.uniforms.uSoftKnee.value = this.bloomSoftKnee;
    }
    if (this.blurPassH) {
      this.blurPassH.material.uniforms.uSigma.value = this.bloomSigma;
    }
    if (this.blurPassV) {
      this.blurPassV.material.uniforms.uSigma.value = this.bloomSigma;
    }
    if (this.compositePass) {
      this.compositePass.material.uniforms.uBloomStrength.value =
        this.bloomStrength;
    }
    this.setBloomResolution(this.bloomResolution);

    this._onWindowResize = () => {
      if (!this.composer) return;
      this._handleResize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", this._onWindowResize);
    this._onWindowResize();

    this.applyBloomSettings();
    this.applyAntialiasSettings();
  }

  dispose() {
    if (this._onWindowResize) {
      window.removeEventListener("resize", this._onWindowResize);
      this._onWindowResize = null;
    }
  }

  applyBloomSettings() {
    if (this.brightPass) {
      this.brightPass.material.uniforms.uThreshold.value = this.bloomThreshold;
      this.brightPass.material.uniforms.uSoftKnee.value = this.bloomSoftKnee;
    }
    if (this.blurPassH) {
      this.blurPassH.setSigma(this.bloomSigma);
    }
    if (this.blurPassV) {
      this.blurPassV.setSigma(this.bloomSigma);
    }
  }

  applyAntialiasSettings() {
    this._applyAASettingsFn?.({
      enabled: this.aaEnabled && this.enabled,
      subpixel: this.aaSubpixelBlending,
      contrastThreshold: this.aaContrastThreshold,
      relativeThreshold: this.aaRelativeThreshold,
    });
  }

  setBloomResolution(pixels) {
    const clamped = THREE.MathUtils.clamp(pixels, 32, 1024);
    this.bloomResolution = clamped;
    this._updateBloomResolutionFn?.(clamped);
  }

  setRenderPixelRatio(value) {
    const clamped = THREE.MathUtils.clamp(value, 0.5, 3.0);
    this.renderPixelRatio = clamped;
    setRendererPixelRatio(clamped);
    this._onWindowResize?.();
  }

  setEnabled(value) {
    this.enabled = Boolean(value);
    this.applyAntialiasSettings();
  }

  setAntialiasEnabled(value) {
    this.aaEnabled = Boolean(value);
    this.applyAntialiasSettings();
  }

  setAntialiasSubpixel(value) {
    this.aaSubpixelBlending = THREE.MathUtils.clamp(value, 0.0, 1.5);
    this.applyAntialiasSettings();
  }

  setAntialiasContrast(value) {
    this.aaContrastThreshold = THREE.MathUtils.clamp(value, 0.001, 0.2);
    this.applyAntialiasSettings();
  }

  setAntialiasRelative(value) {
    this.aaRelativeThreshold = THREE.MathUtils.clamp(value, 0.001, 0.3);
    this.applyAntialiasSettings();
  }

  // Called every frame from TerrainApp.animate() — wraps the composer
  // pipeline so TerrainApp doesn't need to know about individual passes.
  render() {
    if (this.composer && this.enabled) {
      const shouldBloom = this.bloomEnabled && this.bloomStrength > 0.001;

      if (this.compositePass) {
        this.compositePass.material.uniforms.uBloomStrength.value = shouldBloom
          ? this.bloomStrength
          : 0.0;
      }
      if (this.brightPass) this.brightPass.enabled = shouldBloom;
      if (this.blurPassH) this.blurPassH.enabled = shouldBloom;
      if (this.blurPassV) this.blurPassV.enabled = shouldBloom;
      this.composer.render();
    } else {
      if (this.brightPass) this.brightPass.enabled = false;
      if (this.blurPassH) this.blurPassH.enabled = false;
      if (this.blurPassV) this.blurPassV.enabled = false;
      renderer.render(this.app.scene, camera);
    }
  }
}
