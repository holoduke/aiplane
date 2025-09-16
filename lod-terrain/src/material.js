import * as THREE from "three";
import { texture } from "./texture.js";
import atmosphereVert from "../js/shaders/atmosphere.vert?raw";
import atmosphereFrag from "../js/shaders/atmosphere.frag?raw";

export const material = {
  atmosphere: new THREE.ShaderMaterial({
    uniforms: {
      uHorizonColor: { type: "c", value: new THREE.Color(0xfff1d8) },
      uSkyColor: { type: "c", value: new THREE.Color(0xf9f9ff) },
    },
    vertexShader: atmosphereVert,
    fragmentShader: atmosphereFrag,
    side: THREE.BackSide,
    //transparent: true,
    ///depthWrite: false,
  }),
  sky: new THREE.MeshBasicMaterial({
    map: texture.sky,
    side: THREE.BackSide,
  }),
};
