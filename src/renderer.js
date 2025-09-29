import * as THREE from "three";
import { container } from "./container.js";

container.innerHTML = "";

// Renderer configuration
let currentRendererType = 'webgl'; // 'webgl' or 'webgpu'
let targetPixelRatio = 1;

// Check WebGPU support (both browser and Three.js)
async function checkWebGPUSupport() {
  // First check if browser supports WebGPU
  if (!navigator.gpu) {
    console.log('🚫 WebGPU not supported - navigator.gpu not available');
    return false;
  }

  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      console.log('🚫 WebGPU not supported - no adapter available');
      return false;
    }

    // Check if Three.js WebGPU is available
    const hasWebGPUInThree = await checkThreeJSWebGPUSupport();
    if (!hasWebGPUInThree) {
      console.log('🚫 WebGPU not supported - Three.js WebGPU renderer not available');
      return false;
    }

    console.log('✅ WebGPU is supported!');
    return true;
  } catch (error) {
    console.log('🚫 WebGPU not supported - error:', error);
    return false;
  }
}

// Check if Three.js has WebGPU support
async function checkThreeJSWebGPUSupport() {
  try {
    // Try to import the WebGPU module
    await import(/* @vite-ignore */ 'three/src/Three.WebGPU.js');
    return true;
  } catch (e1) {
    try {
      await import(/* @vite-ignore */ 'three/src/renderers/webgpu/WebGPURenderer.js');
      return true;
    } catch (e2) {
      return false;
    }
  }
}

// Create renderer based on type
async function createRenderer(type = 'webgl') {
  let newRenderer;

  if (type === 'webgpu') {
    const webgpuSupported = await checkWebGPUSupport();
    if (webgpuSupported) {
      try {
        console.log('🚀 Creating WebGPU renderer...');

        // Import WebGPU renderer using dynamic import to avoid Vite build issues
        let WebGPURenderer;
        try {
          // Use dynamic import with template literals to avoid Vite analysis
          const webgpuPath = 'three/src/Three.WebGPU.js';
          const threeWebGPU = await import(/* @vite-ignore */ webgpuPath);
          WebGPURenderer = threeWebGPU.WebGPURenderer;
          console.log('📦 Loaded WebGPU from Three.WebGPU bundle');
        } catch (e1) {
          try {
            // Alternative: construct path dynamically
            const basePath = 'three/src/renderers/webgpu/';
            const fileName = 'WebGPURenderer.js';
            const webgpuModule = await import(/* @vite-ignore */ basePath + fileName);
            WebGPURenderer = webgpuModule.default;
            console.log('📦 Loaded WebGPU from direct source');
          } catch (e2) {
            throw new Error('WebGPU renderer not available in this Three.js version. Please use Three.js r150+ for WebGPU support.');
          }
        }

        newRenderer = new WebGPURenderer({ antialias: true });
        await newRenderer.init();
        currentRendererType = 'webgpu';
        console.log('✅ WebGPU renderer created successfully!');
      } catch (error) {
        console.warn('⚠️ WebGPU renderer failed to initialize, falling back to WebGL:', error);
        newRenderer = new THREE.WebGLRenderer({ clearColor: 0x000000 });
        currentRendererType = 'webgl';
      }
    } else {
      console.log('📱 WebGPU not supported, using WebGL');
      newRenderer = new THREE.WebGLRenderer({ clearColor: 0x000000 });
      currentRendererType = 'webgl';
    }
  } else {
    console.log('🔧 Creating WebGL renderer...');
    newRenderer = new THREE.WebGLRenderer({ clearColor: 0x000000 });
    currentRendererType = 'webgl';
  }

  // Configure renderer
  newRenderer.sortObjects = false;
  newRenderer.autoClear = false;

  return newRenderer;
}

// Initialize default renderer (WebGL by default due to import complexity)
// To enable WebGPU: Set this to true after resolving Three.js import paths
const preferWebGPU = false; // Set to true to attempt WebGPU (requires proper import paths)
export const renderer = await createRenderer(preferWebGPU ? 'webgpu' : 'webgl');
container.appendChild(renderer.domElement);

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

export function getCurrentRendererType() {
  return currentRendererType;
}

export function isWebGPU() {
  return currentRendererType === 'webgpu';
}

export async function switchRenderer(type) {
  if (type === currentRendererType) {
    console.log(`Already using ${type} renderer`);
    return renderer;
  }

  console.log(`🔄 Switching from ${currentRendererType} to ${type}...`);

  // Store current renderer reference
  const oldRenderer = renderer;

  try {
    // Create new renderer
    const newRenderer = await createRenderer(type);

    // Remove old renderer
    if (oldRenderer.domElement && oldRenderer.domElement.parentNode) {
      oldRenderer.domElement.parentNode.removeChild(oldRenderer.domElement);
    }

    // Dispose old renderer
    oldRenderer.dispose();

    // Add new renderer
    container.appendChild(newRenderer.domElement);

    // Apply current settings
    applyRendererSize();

    console.log(`✅ Switched to ${currentRendererType} renderer`);

    // Update the exported renderer reference
    Object.setPrototypeOf(renderer, Object.getPrototypeOf(newRenderer));
    Object.assign(renderer, newRenderer);

    return renderer;
  } catch (error) {
    // If switching fails, keep the old renderer
    console.error(`❌ Failed to switch to ${type} renderer:`, error);
    throw error;
  }
}

// Export info about current setup
console.log(`🎨 Renderer initialized: ${currentRendererType.toUpperCase()}`);
if (currentRendererType === 'webgpu') {
  console.log('🚀 You are using the modern WebGPU renderer!');
} else {
  console.log('🔧 You are using the stable WebGL renderer');
}