import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { Pass, FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { BrightnessContrastShader } from "three/examples/jsm/shaders/BrightnessContrastShader.js";
import fullscreenVert from "../../js/shaders/fullscreenQuad.vert?raw";
import brightPassFrag from "../../js/shaders/brightPass.frag?raw";
import separableBlurFrag from "../../js/shaders/separableBlur.frag?raw";
import additiveCompositeFrag from "../../js/shaders/additiveComposite.frag?raw";
import { AdjustableFXAAShader } from "../../js/shaders/AdjustableFXAA.js";

const BrightPassShader = {
  uniforms: {
    tDiffuse: { value: null },
    uThreshold: { value: 1.0 },
    uSoftKnee: { value: 0.5 },
  },
  vertexShader: fullscreenVert,
  fragmentShader: brightPassFrag,
};

const SeparableBlurShader = {
  uniforms: {
    tDiffuse: { value: null },
    uDirection: { value: new THREE.Vector2(1, 0) },
    uSigma: { value: 3.5 },
  },
  vertexShader: fullscreenVert,
  fragmentShader: separableBlurFrag,
};

const AdditiveCompositeShader = {
  uniforms: {
    tDiffuse: { value: null },
    tBloom: { value: null },
    uBloomStrength: { value: 0.75 },
  },
  vertexShader: fullscreenVert,
  fragmentShader: additiveCompositeFrag,
};

class BrightExtractPass extends Pass {
  constructor(renderTarget, resolutionPixels = 256) {
    super();
    this.material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(BrightPassShader.uniforms),
      vertexShader: BrightPassShader.vertexShader,
      fragmentShader: BrightPassShader.fragmentShader,
    });
    this.uniforms = this.material.uniforms;
    this.renderTarget = renderTarget;
    this.fsQuad = new FullScreenQuad(this.material);
    this.needsSwap = false;
    this.resolutionPixels = Math.max(resolutionPixels, 16);
    this._lastWidth = 0;
    this._lastHeight = 0;
  }

  render(renderer, writeBuffer, readBuffer) {
    const prevTarget = renderer.getRenderTarget();
    this.uniforms.tDiffuse.value = readBuffer.texture;
    renderer.setRenderTarget(this.renderTarget);
    renderer.clear();
    this.fsQuad.render(renderer);
    renderer.setRenderTarget(prevTarget);
  }

  setSize(width, height) {
    this._lastWidth = width;
    this._lastHeight = height;
    const scale = this._computeScale(width, height);
    const scaledWidth = Math.max(Math.floor(width * scale), 1);
    const scaledHeight = Math.max(Math.floor(height * scale), 1);
    this.renderTarget.setSize(scaledWidth, scaledHeight);
  }

  _computeScale(width, height) {
    const longest = Math.max(width, height);
    if (longest <= 0) return 1.0;
    return THREE.MathUtils.clamp(this.resolutionPixels / longest, 0.01, 1.0);
  }

  setResolutionPixels(pixels) {
    this.resolutionPixels = Math.max(pixels, 16);
    if (this._lastWidth > 0 && this._lastHeight > 0) {
      this.setSize(this._lastWidth, this._lastHeight);
    }
  }
}

class BloomBlurPass extends Pass {
  constructor(renderTarget, direction, resolutionPixels = 256) {
    super();
    this.material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(SeparableBlurShader.uniforms),
      vertexShader: SeparableBlurShader.vertexShader,
      fragmentShader: SeparableBlurShader.fragmentShader,
    });
    this.uniforms = this.material.uniforms;
    this.uniforms.uDirection.value.copy(direction);
    this.fsQuad = new FullScreenQuad(this.material);
    this.renderTarget = renderTarget;
    this.inputTarget = null;
    this.needsSwap = false;
    this.resolutionPixels = Math.max(resolutionPixels, 16);
    this._lastWidth = 0;
    this._lastHeight = 0;
    this.isHorizontal = Math.abs(direction.x) >= Math.abs(direction.y);
  }

  setInputTarget(target) {
    this.inputTarget = target;
  }

  setDirection(direction) {
    this.uniforms.uDirection.value.copy(direction);
  }

  setSigma(value) {
    this.uniforms.uSigma.value = value;
  }

  render(renderer, writeBuffer, readBuffer) {
    if (!this.inputTarget || !this.renderTarget) return;
    const prevTarget = renderer.getRenderTarget();
    this.uniforms.tDiffuse.value = this.inputTarget.texture;
    renderer.setRenderTarget(this.renderTarget);
    renderer.clear();
    this.fsQuad.render(renderer);
    renderer.setRenderTarget(prevTarget);
  }

  setSize(width, height) {
    this._lastWidth = width;
    this._lastHeight = height;
    const scale = this._computeScale(width, height);
    const scaledWidth = Math.max(Math.floor(width * scale), 1);
    const scaledHeight = Math.max(Math.floor(height * scale), 1);
    this.renderTarget.setSize(scaledWidth, scaledHeight);
    if (this.isHorizontal) {
      this.setDirection(new THREE.Vector2(1 / scaledWidth, 0));
    } else {
      this.setDirection(new THREE.Vector2(0, 1 / scaledHeight));
    }
  }

  _computeScale(width, height) {
    const longest = Math.max(width, height);
    if (longest <= 0) return 1.0;
    return THREE.MathUtils.clamp(this.resolutionPixels / longest, 0.01, 1.0);
  }

  setResolutionPixels(pixels) {
    this.resolutionPixels = Math.max(pixels, 16);
    if (this._lastWidth > 0 && this._lastHeight > 0) {
      this.setSize(this._lastWidth, this._lastHeight);
    }
  }
}

export function createPostProcessing({
  renderer,
  scene,
  camera,
  bloomStrength,
  bloomThreshold = 1.0,
  bloomSoftKnee = 0.5,
  bloomSigma = 4.5,
  bloomResolution = 64,
  aaEnabled = true,
  aaSubpixelBlending = 1.0,
  aaContrastThreshold = 0.0312,
  aaRelativeThreshold = 0.063,
  brightness,
  contrast,
}) {
  const size = new THREE.Vector2();
  renderer.getSize(size);

  const renderPass = new RenderPass(scene, camera);
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.addPass(renderPass);

  const bloomTargetOptions = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
    depthBuffer: false,
    stencilBuffer: false,
  };

  const bloomTargetA = new THREE.WebGLRenderTarget(1, 1, bloomTargetOptions);
  bloomTargetA.texture.name = "Bloom.TargetA";
  bloomTargetA.texture.generateMipmaps = false;
  const bloomTargetB = bloomTargetA.clone();
  bloomTargetB.texture.name = "Bloom.TargetB";

  const initialResolution = Math.max(bloomResolution, 16);

  const brightPass = new BrightExtractPass(bloomTargetA, initialResolution);
  brightPass.uniforms.uThreshold.value = bloomThreshold;
  brightPass.uniforms.uSoftKnee.value = bloomSoftKnee;
  composer.addPass(brightPass);

  const blurPassH = new BloomBlurPass(
    bloomTargetB,
    new THREE.Vector2(1 / size.x, 0),
    initialResolution
  );
  blurPassH.setInputTarget(bloomTargetA);
  blurPassH.setSigma(bloomSigma);
  composer.addPass(blurPassH);

  const blurPassV = new BloomBlurPass(
    bloomTargetA,
    new THREE.Vector2(0, 1 / size.y),
    initialResolution
  );
  blurPassV.setInputTarget(bloomTargetB);
  blurPassV.setSigma(bloomSigma);
  composer.addPass(blurPassV);

  const compositePass = new ShaderPass(AdditiveCompositeShader);
  compositePass.material.uniforms.tBloom.value = bloomTargetA.texture;
  compositePass.material.uniforms.uBloomStrength.value = bloomStrength;
  composer.addPass(compositePass);

  const fxaaPass = new ShaderPass(AdjustableFXAAShader);
  fxaaPass.material.uniforms.uSubpixelBlending.value = aaSubpixelBlending;
  fxaaPass.material.uniforms.uContrastThreshold.value = aaContrastThreshold;
  fxaaPass.material.uniforms.uRelativeThreshold.value = aaRelativeThreshold;
  fxaaPass.enabled = aaEnabled;
  composer.addPass(fxaaPass);

  const brightnessContrastPass = new ShaderPass(BrightnessContrastShader);
  brightnessContrastPass.material.uniforms.brightness.value = brightness;
  brightnessContrastPass.material.uniforms.contrast.value = contrast;
  brightnessContrastPass.renderToScreen = true;
  composer.addPass(brightnessContrastPass);

  let currentWidth = size.x;
  let currentHeight = size.y;

  const handleResize = (width, height) => {
    currentWidth = width;
    currentHeight = height;
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(width, height);

    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms.resolution.value.set(
      1 / (width * pixelRatio),
      1 / (height * pixelRatio)
    );
  };

  handleResize(size.x, size.y);

  const setBloomResolution = (pixels) => {
    const clamped = Math.max(pixels, 16);
    brightPass.setResolutionPixels(clamped);
    blurPassH.setResolutionPixels(clamped);
    blurPassV.setResolutionPixels(clamped);
    composer.setSize(currentWidth, currentHeight);
  };

  const applyAntialiasSettings = ({
    enabled,
    subpixel,
    contrastThreshold,
    relativeThreshold,
  }) => {
    if (enabled != null) {
      fxaaPass.enabled = enabled;
    }
    if (subpixel != null) {
      fxaaPass.material.uniforms.uSubpixelBlending.value = subpixel;
    }
    if (contrastThreshold != null) {
      fxaaPass.material.uniforms.uContrastThreshold.value = contrastThreshold;
    }
    if (relativeThreshold != null) {
      fxaaPass.material.uniforms.uRelativeThreshold.value = relativeThreshold;
    }
  };

  return {
    composer,
    renderPass,
    brightPass,
    blurPassH,
    blurPassV,
    compositePass,
    fxaaPass,
    brightnessContrastPass,
    bloomTargetA,
    bloomTargetB,
    handleResize,
    setBloomResolution,
    applyAntialiasSettings,
  };
}
