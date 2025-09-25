import * as THREE from "three";
import { sampleHeight } from "../noise/index.js";

export class CollisionDetector {
  constructor(scene) {
    this.scene = scene;
    this.terrainMesh = null;
    this.raycaster = new THREE.Raycaster();
    this.heightmapTexture = null; // Will store the actual terrain heightmap

    console.log("🎯 Collision detector initialized");
  }

  // Set the heightmap texture to match the terrain
  setHeightmapTexture(texture) {
    this.heightmapTexture = texture;
    console.log("🗺️ Collision detector updated with new heightmap texture", {
      hasTexture: !!texture,
      hasImage: !!(texture && texture.image),
      hasData: !!(texture && texture.image && texture.image.data),
      width: texture && texture.image ? texture.image.width : 'unknown',
      height: texture && texture.image ? texture.image.height : 'unknown'
    });
  }

  // Set detail strength to match terrain
  setDetailStrength(strength) {
    this.detailStrength = strength;
  }

  // Set height multiplier to match terrain
  setHeightMultiplier(multiplier) {
    this.heightMultiplier = multiplier || 1.0;
  }

  // Set height smoothing to match terrain
  setHeightSmoothing(smoothing) {
    this.heightSmoothing = smoothing || 0.0;
  }

  // Sample height from the heightmap texture (same as terrain)
  sampleHeightFromTexture(x, y) {
    if (!this.heightmapTexture || !this.heightmapTexture.image) {
      // Fallback to procedural if no texture available
      return sampleHeight(x, y);
    }

    // Convert world coordinates to texture coordinates (same as shader)
    const st_x = x / 1024.0;
    const st_y = y / 1024.0;

    // Convert to pixel coordinates
    const width = this.heightmapTexture.image.width || 256;
    const height = this.heightmapTexture.image.height || 256;

    // Clamp to texture bounds (wrap the coordinates)
    const px = Math.floor((st_x % 1.0 + 1.0) % 1.0 * width) % width;
    const py = Math.floor((st_y % 1.0 + 1.0) % 1.0 * height) % height;

    // Sample from texture data
    if (this.heightmapTexture.image.data) {
      const index = py * width + px;
      const heightValue = this.heightmapTexture.image.data[index] / 255.0; // Normalize 0-1

      // Apply same height scaling as shader with detail strength
      let h = 1024.0 * heightValue;
      // Add detail octaves if detailStrength > 0 (simplified single-texture approximation)
      if (this.detailStrength && this.detailStrength > 0) {
        h += this.detailStrength * 64.0 * heightValue; // Simplified - can't multi-sample from JS
        h += this.detailStrength * 4.0 * heightValue;
      }

      // Apply height multiplier (same as shader)
      h *= (this.heightMultiplier || 1.0);

      // Apply height smoothing (same as shader)
      if (this.heightSmoothing && this.heightSmoothing > 0.0) {
        h = h * (1.0 - this.heightSmoothing) + (h * 0.5) * this.heightSmoothing; // Linear interpolation
      }

      const finalHeight = h * h / 2000.0; // Same squaring as shader

      // Debug logging for collision detection
      if (Math.random() < 0.01) { // Only log occasionally to avoid spam
        console.log(`[CollisionDetector] x=${x.toFixed(2)}, y=${y.toFixed(2)}, heightValue=${heightValue.toFixed(3)}, finalHeight=${finalHeight.toFixed(2)}`);
      }

      return finalHeight;
    }

    // Fallback to procedural
    return sampleHeight(x, y);
  }

  findTerrainMesh = () => {
    if (!this.scene) return;

    let foundMesh = null;
    this.scene.traverse((child) => {
      if (foundMesh) return; // Already found one
      if (child.isMesh &&
          child.geometry &&
          child.geometry.getAttribute &&
          child.geometry.getAttribute('position') &&
          child.geometry.getAttribute('position').count > 9000) { // Lowered threshold
        foundMesh = child;
      }
    });

    this.terrainMesh = foundMesh;

    if (this.terrainMesh) {
      console.log("🗺️ Terrain mesh found for collision detection", this.terrainMesh);
    } else {
      console.warn("⚠️ No terrain mesh found for collision detection");
    }
  }

  checkLaserTerrainCollision = (currentPosition, velocity, deltaTime) => {
    const direction = velocity.clone().normalize();
    const totalDistance = velocity.length() * deltaTime;
    const stepSize = 5;
    const backwardSteps = 3;

    const testPoint = new THREE.Vector3();

    console.log(`[Collision] Checking laser at ${currentPosition.x.toFixed(2)}, ${currentPosition.y.toFixed(2)}, ${currentPosition.z.toFixed(2)}`);

    // Start from a few steps back to check for ghost collisions
    let traveledDistance = -backwardSteps * stepSize;

    while (traveledDistance < totalDistance) {
        testPoint.copy(currentPosition).addScaledVector(direction, traveledDistance);

        try {
            const terrainHeight = this.sampleHeightFromTexture(testPoint.x, testPoint.y);
            console.log(`[Collision] Step: dist=${traveledDistance.toFixed(2)}, testPoint=(${testPoint.x.toFixed(2)}, ${testPoint.y.toFixed(2)}, ${testPoint.z.toFixed(2)}), terrainHeight=${terrainHeight.toFixed(2)}`);

            if (testPoint.z <= terrainHeight) {
                console.log(`[Collision] HIT!`);
                // Collision detected
                const hitPoint = testPoint.clone();
                hitPoint.z = Math.min(testPoint.z, terrainHeight - 2); // Place effect slightly below surface

                const normal = this.calculateTerrainNormal(hitPoint.x, hitPoint.y);

                return {
                    hit: true,
                    point: hitPoint,
                    normal: normal,
                    distance: currentPosition.distanceTo(hitPoint),
                    terrainHeight: terrainHeight
                };
            }
        } catch (error) {
            console.error("[Collision] Error sampling height:", error);
        }

        traveledDistance += stepSize;
    }

    // Also check the final destination point
    testPoint.copy(currentPosition).addScaledVector(direction, totalDistance);
    try {
        const terrainHeight = this.sampleHeightFromTexture(testPoint.x, testPoint.y);
        console.log(`[Collision] Final Step: dist=${totalDistance.toFixed(2)}, testPoint=(${testPoint.x.toFixed(2)}, ${testPoint.y.toFixed(2)}, ${testPoint.z.toFixed(2)}), terrainHeight=${terrainHeight.toFixed(2)}`);
        if (testPoint.z <= terrainHeight) {
            console.log(`[Collision] HIT!`);
            const hitPoint = testPoint.clone();
            hitPoint.z = Math.min(testPoint.z, terrainHeight - 2); // Place effect slightly below surface
            const normal = this.calculateTerrainNormal(hitPoint.x, hitPoint.y);
            return {
                hit: true,
                point: hitPoint,
                normal: normal,
                distance: currentPosition.distanceTo(hitPoint),
                terrainHeight: terrainHeight
            };
        }
    } catch (error) {
        console.error("[Collision] Error sampling height at final step:", error);
        return null;
    }

    return null; // No collision
  }

  calculateTerrainNormal = (x, y) => {
    const delta = 5; // Sample distance for normal calculation

    try {
      // Sample heights around the point
      const hL = this.sampleHeightFromTexture(x - delta, y); // Left
      const hR = this.sampleHeightFromTexture(x + delta, y); // Right
      const hD = this.sampleHeightFromTexture(x, y - delta); // Down
      const hU = this.sampleHeightFromTexture(x, y + delta); // Up

      // Calculate gradients
      const dx = (hR - hL) / (2 * delta);
      const dy = (hU - hD) / (2 * delta);

      // Normal vector is (-dx, -dy, 1) normalized
      const normal = new THREE.Vector3(-dx, -dy, 1);
      normal.normalize();

      return normal;
    } catch (error) {
      // Fallback to upward normal if sampling fails
      return new THREE.Vector3(0, 0, 1);
    }
  }

  calculateReflection = (velocity, normal, energyLoss = 0.8) => {
    // Reflect velocity: v' = v - 2(v·n)n
    const dotProduct = velocity.dot(normal);
    const reflectedVelocity = velocity.clone().sub(
      normal.clone().multiplyScalar(2 * dotProduct)
    );

    // Apply energy loss
    reflectedVelocity.multiplyScalar(energyLoss);

    return reflectedVelocity;
  }

  checkPointTerrainCollision = (position, radius = 0) => {
    if (!this.terrainMesh) return null;

    // Raycast downward from position
    this.raycaster.set(position, new THREE.Vector3(0, 0, -1));
    const intersects = this.raycaster.intersectObject(this.terrainMesh);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const terrainHeight = hit.point.z;

      // Check if position is below terrain (plus radius)
      if (position.z <= terrainHeight + radius) {
        return {
          hit: true,
          point: hit.point,
          terrainHeight: terrainHeight,
          penetration: (terrainHeight + radius) - position.z
        };
      }
    }

    return null;
  }

  getTerrainHeight = (x, y) => {
    if (!this.terrainMesh) return null;

    // Raycast downward from high above the position
    const rayStart = new THREE.Vector3(x, y, 10000);
    this.raycaster.set(rayStart, new THREE.Vector3(0, 0, -1));

    const intersects = this.raycaster.intersectObject(this.terrainMesh);

    if (intersects.length > 0) {
      return intersects[0].point.z;
    }

    return null;
  }

  checkSphereCollision = (pos1, radius1, pos2, radius2) => {
    const distance = pos1.distanceTo(pos2);
    return distance <= (radius1 + radius2);
  }

  checkLaserEnemyCollision = (position, radius = 150) => {
    // This would integrate with enemy manager
    if (window.game && window.game.enemyManager) {
      return window.game.enemyManager.damageEnemiesInArea(position, radius, 25);
    }
    return [];
  }

  update = () => {
    // Re-find terrain mesh if it was lost
    if (!this.terrainMesh) {
      this.findTerrainMesh();
    }
  }

  dispose = () => {
    this.terrainMesh = null;
    this.scene = null;
    console.log("🗑️ Collision detector disposed");
  }
}