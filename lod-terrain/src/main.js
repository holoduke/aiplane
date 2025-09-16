import * as THREE from 'three';
import { Detector } from './Detector.js';
import { app } from './app.js';
import { container } from './container.js';

// Make THREE available globally for compatibility
window.THREE = THREE;

// Start the app
if (!Detector.webgl) {
  Detector.addGetWebGLMessage();
  container.innerHTML = "";
}

// Initialize our app and start the animation loop
app.init();
app.animate();