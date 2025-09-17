import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { BrightnessContrastShader } from "three/examples/jsm/shaders/BrightnessContrastShader.js";

export function createPostProcessing({
  renderer,
  scene,
  camera,
  bloomStrength,
  brightness,
  contrast,
}) {
  const size = new THREE.Vector2();
  renderer.getSize(size);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(size.x, size.y),
    0.6,
    0.35,
    0.05
  );
  bloomPass.threshold = 0.9;
  bloomPass.strength = bloomStrength;
  bloomPass.radius = 0.2;

  const brightnessContrastPass = new ShaderPass(BrightnessContrastShader);
  brightnessContrastPass.material.uniforms.brightness.value = brightness;
  brightnessContrastPass.material.uniforms.contrast.value = contrast;

  bloomPass.renderToScreen = false;
  brightnessContrastPass.renderToScreen = true;

  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(brightnessContrastPass);

  const handleResize = (width, height) => {
    composer.setSize(width, height);
    bloomPass.setSize(width, height);
  };

  return {
    composer,
    renderPass,
    bloomPass,
    brightnessContrastPass,
    handleResize,
  };
}

