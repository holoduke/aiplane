import * as THREE from "three";
import { container } from "./container.js";

export const camera = new THREE.PerspectiveCamera(70, 1, 1, 30000);
camera.position.z = 80;
camera.fov = 100;
camera.up = new THREE.Vector3(0, 1, 1);

const updateSize = function () {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", updateSize, false);
updateSize();
