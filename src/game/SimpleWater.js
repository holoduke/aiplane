import * as THREE from "three";

export class SimpleWater {
  constructor(scene, renderer, camera) {
    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    
    this.waterMesh = null;
    this.seaLevel = 40;
    this.waterSize = 50000;
    
    this.init();
  }

  init() {
    this.createSimpleWater();
    console.log("🌊 Simple water system initialized");
  }

  createSimpleWater() {
    // Simple plane geometry
    const geometry = new THREE.PlaneGeometry(this.waterSize, this.waterSize);
    
    // Simple water material with basic transparency
    const material = new THREE.MeshLambertMaterial({
      color: 0x1e3a8a,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });

    // Create water mesh
    this.waterMesh = new THREE.Mesh(geometry, material);
    this.waterMesh.rotation.x = -Math.PI / 2; // Rotate to horizontal
    this.waterMesh.position.y = this.seaLevel;
    this.waterMesh.receiveShadow = true;
    
    // Add to scene
    this.scene.add(this.waterMesh);
  }

  update(deltaTime, camera) {
    // Keep water centered on camera
    if (camera && this.waterMesh) {
      this.waterMesh.position.x = camera.position.x;
      this.waterMesh.position.z = camera.position.z;
    }
  }

  // Simple water color controls
  setWaterColor(color) {
    if (this.waterMesh && this.waterMesh.material) {
      this.waterMesh.material.color.setHex(color);
    }
  }

  setTransparency(opacity) {
    if (this.waterMesh && this.waterMesh.material) {
      this.waterMesh.material.opacity = opacity;
    }
  }

  // Simple presets
  setClearWater() {
    this.setWaterColor(0x1e3a8a);
    this.setTransparency(0.8);
    console.log("🌊 Water set to clear");
  }

  setDeepWater() {
    this.setWaterColor(0x0f172a);
    this.setTransparency(0.7);
    console.log("🌊 Water set to deep");
  }

  setTropicalWater() {
    this.setWaterColor(0x06b6d4);
    this.setTransparency(0.9);
    console.log("🌊 Water set to tropical");
  }

  cleanup() {
    if (this.waterMesh) {
      this.scene.remove(this.waterMesh);
      this.waterMesh.geometry.dispose();
      this.waterMesh.material.dispose();
    }
  }
}