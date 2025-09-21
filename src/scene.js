import * as THREE from "three";

export const scene = new THREE.Scene();
// Push the fog's far plane out so distant terrain stays visible longer
scene.fog = new THREE.Fog(0x000000, 300, 1000);
