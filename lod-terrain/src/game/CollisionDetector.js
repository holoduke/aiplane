import * as THREE from "three";
import { sampleHeight } from "../noise.js";

export class CollisionDetector {
  constructor(scene) {
    this.scene = scene;
    this.terrainMesh = null;
    this.raycaster = new THREE.Raycaster();

    // Find and cache the terrain mesh for performance
    this.findTerrainMesh();

    console.log("🎯 Collision detector initialized");
  }

  findTerrainMesh() {
    if (!this.scene || !this.scene.children) return;

    // Look for the terrain mesh (large geometry with many vertices)
    this.terrainMesh = this.scene.children.find(child =>
      child.isMesh &&
      child.geometry &&
      child.geometry.getAttribute &&
      child.geometry.getAttribute('position') &&
      child.geometry.getAttribute('position').count > 10000 // Likely terrain mesh
    );

    if (this.terrainMesh) {
      console.log("🗺️ Terrain mesh found for collision detection", this.terrainMesh);
    } else {
      console.warn("⚠️ No terrain mesh found for collision detection");
    }
  }

  /**
   * Check if a laser will collide with terrain on its next move
   * Uses heightmap sampling instead of mesh raycasting for shader-displaced terrain
   * @param {THREE.Vector3} currentPosition - Current laser position
   * @param {THREE.Vector3} velocity - Laser velocity vector
   * @param {number} deltaTime - Time step
   * @returns {Object|null} - Collision data or null if no collision
   */
  checkLaserTerrainCollision(currentPosition, velocity, deltaTime) {
    // Calculate the movement step
    const velocityStep = velocity.clone().multiplyScalar(deltaTime);
    const nextPosition = currentPosition.clone().add(velocityStep);

    // Sample terrain height at next position using heightmap
    try {
      const terrainHeight = sampleHeight(nextPosition.x, nextPosition.y);

      // Check if laser will be below terrain surface
      if (nextPosition.z <= terrainHeight) {
        // Calculate hit point by interpolating between current and next position
        const hitPoint = this.interpolateTerrainHit(currentPosition, nextPosition, terrainHeight);

        // Calculate approximate surface normal using nearby height samples
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
      console.warn("Error sampling terrain height:", error);
    }

    return null;
  }

  /**
   * Calculate terrain surface normal at a point using finite differences
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @returns {THREE.Vector3} - Surface normal
   */
  calculateTerrainNormal(x, y) {
    const delta = 5; // Sample distance for normal calculation

    try {
      // Sample heights around the point
      const hL = sampleHeight(x - delta, y); // Left
      const hR = sampleHeight(x + delta, y); // Right
      const hD = sampleHeight(x, y - delta); // Down
      const hU = sampleHeight(x, y + delta); // Up

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

  /**
   * Find the exact collision point between current and next position
   * @param {THREE.Vector3} currentPos - Current position
   * @param {THREE.Vector3} nextPos - Next position
   * @param {number} terrainHeight - Terrain height at next position
   * @returns {THREE.Vector3} - Hit point
   */
  interpolateTerrainHit(currentPos, nextPos, terrainHeight) {
    // If current position is already below terrain, return current position
    if (currentPos.z <= terrainHeight) {
      return currentPos.clone();
    }

    // Binary search for precise hit point
    let low = 0.0;
    let high = 1.0;
    let hitPoint = currentPos.clone();

    for (let i = 0; i < 10; i++) { // 10 iterations for precision
      const t = (low + high) / 2;
      const testPoint = currentPos.clone().lerp(nextPos, t);

      try {
        const testHeight = sampleHeight(testPoint.x, testPoint.y);

        if (testPoint.z <= testHeight) {
          high = t;
          hitPoint.copy(testPoint);
        } else {
          low = t;
        }
      } catch (error) {
        break; // Exit if sampling fails
      }
    }

    // Ensure hit point is exactly on terrain surface
    try {
      const finalHeight = sampleHeight(hitPoint.x, hitPoint.y);
      hitPoint.z = finalHeight;
    } catch (error) {
      // Keep the interpolated Z if sampling fails
    }

    return hitPoint;
  }

  /**
   * Calculate reflected velocity after collision
   * @param {THREE.Vector3} velocity - Incoming velocity
   * @param {THREE.Vector3} normal - Surface normal at collision point
   * @param {number} energyLoss - Energy loss factor (0-1, where 1 = no loss)
   * @returns {THREE.Vector3} - Reflected velocity
   */
  calculateReflection(velocity, normal, energyLoss = 0.8) {
    // Reflect velocity: v' = v - 2(v·n)n
    const dotProduct = velocity.dot(normal);
    const reflectedVelocity = velocity.clone().sub(
      normal.clone().multiplyScalar(2 * dotProduct)
    );

    // Apply energy loss
    reflectedVelocity.multiplyScalar(energyLoss);

    return reflectedVelocity;
  }

  /**
   * Check collision between a point and terrain
   * @param {THREE.Vector3} position - Position to check
   * @param {number} radius - Collision radius
   * @returns {Object|null} - Collision data or null
   */
  checkPointTerrainCollision(position, radius = 0) {
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

  /**
   * Get terrain height at a specific X,Y position
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @returns {number|null} - Terrain height or null if not found
   */
  getTerrainHeight(x, y) {
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

  /**
   * Check collision between two spheres
   * @param {THREE.Vector3} pos1 - First sphere position
   * @param {number} radius1 - First sphere radius
   * @param {THREE.Vector3} pos2 - Second sphere position
   * @param {number} radius2 - Second sphere radius
   * @returns {boolean} - True if collision detected
   */
  checkSphereCollision(pos1, radius1, pos2, radius2) {
    const distance = pos1.distanceTo(pos2);
    return distance <= (radius1 + radius2);
  }

  /**
   * Check if a laser hits any enemies in the scene
   * @param {THREE.Vector3} position - Laser position
   * @param {number} radius - Hit detection radius
   * @returns {Array} - Array of hit objects
   */
  checkLaserEnemyCollision(position, radius = 150) {
    // This would integrate with enemy manager
    if (window.game && window.game.enemyManager) {
      return window.game.enemyManager.damageEnemiesInArea(position, radius, 25);
    }
    return [];
  }

  /**
   * Update collision detector (call this each frame if needed)
   */
  update() {
    // Re-find terrain mesh if it was lost
    if (!this.terrainMesh) {
      this.findTerrainMesh();
    }
  }

  /**
   * Dispose of resources
   */
  dispose() {
    this.terrainMesh = null;
    this.scene = null;
    console.log("🗑️ Collision detector disposed");
  }
}