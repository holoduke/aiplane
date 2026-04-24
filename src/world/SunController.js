import * as THREE from "three";

/**
 * Owns the state for sun direction, intensity, color grading, and ambient
 * lighting. EnvironmentManager.updateSun() writes to these fields — they
 * previously lived on TerrainApp directly, which made it the world's only
 * source of truth for lighting. Moving them here narrows that surface.
 *
 * Public API is read/write on plain properties (not methods) so the existing
 * call sites in EnvironmentManager and ControlPanel continue to work.
 * TerrainApp exposes matching get/set proxies so `app.sunTime = 12.0` still
 * lands on this controller.
 */
export class SunController {
  constructor() {
    // Time-of-day + base intensity (user-tunable)
    this.sunTime = 16.7;
    this.sunStrengthBase = 1.2;
    this.sunWarmth = 0.75;

    // Computed each frame by EnvironmentManager.updateSun
    this.sunDirection = new THREE.Vector3(0, 1, 0);
    this.currentSunIntensity = 1.0;
    this.sunLightColor = new THREE.Color(1.0, 0.85, 0.65);

    // Ambient lighting
    this.ambientStrength = 0.6;
    this.ambientColor = new THREE.Color(0.45, 0.42, 0.35);
    this.ambientDirection = new THREE.Vector3(1, 0, 0);

    // Sky tint (blue shift on back-lit horizons, etc.)
    this.skyTintStrength = 0.15;
    this.skyTintColor = new THREE.Color(0.62, 0.72, 0.88);

    // Sun mesh placement (derived each frame)
    this.sunWorldPosition = new THREE.Vector3();
    this.sunDistance = 15000;
  }
}
