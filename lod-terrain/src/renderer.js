import * as THREE from "three";
import { container } from "./container.js";

container.innerHTML = "";
export const renderer = new THREE.WebGLRenderer({ clearColor: 0x000000 });
renderer.sortObjects = false;
renderer.autoClear = false;
container.appendChild(renderer.domElement);

let targetPixelRatio = 2;

const applyRendererSize = () => {
  renderer.setPixelRatio(targetPixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
};

window.addEventListener("resize", applyRendererSize, false);
applyRendererSize();

export function setRendererPixelRatio(value) {
  targetPixelRatio = THREE.MathUtils.clamp(value, 0.5, 3.0);
  applyRendererSize();
}

export function getRendererPixelRatio() {
  return targetPixelRatio;
}
