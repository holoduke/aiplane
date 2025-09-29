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

    const image = this.heightmapTexture.image;
    const data = image.data;
    const width = image.width || 256;
    const height = image.height || 256;

    if (!data || width <= 0 || height <= 0) {
      return sampleHeight(x, y);
    }

    const worldSize = 1024.0; // Matches shader assumption
    const detailStrength = this.detailStrength ?? 1.0;
    const heightMultiplier = this.heightMultiplier ?? 1.0;
    const heightSmoothing = this.heightSmoothing ?? 0.0;

    const wrapS = this.heightmapTexture.wrapS;
    const wrapT = this.heightmapTexture.wrapT;

    const applyWrap = (coord, wrapMode, dimension) => {
      if (wrapMode === THREE.RepeatWrapping) {
        let wrapped = coord % 1.0;
        if (wrapped < 0) wrapped += 1.0;
        return wrapped;
      }

      if (wrapMode === THREE.MirroredRepeatWrapping) {
        const floorVal = Math.floor(coord);
        let wrapped = coord - floorVal;
        const isOdd = floorVal % 2 !== 0;
        if (isOdd) {
          wrapped = 1.0 - wrapped;
        }
        if (wrapped < 0) wrapped += 1.0;
        return wrapped;
      }

      // Default to clamp-to-edge behaviour
      const min = 0;
      const max = dimension > 0 ? (dimension - 1) / dimension : 1.0;
      return THREE.MathUtils.clamp(coord, min, max);
    };

    const sampleTexture = (u, v) => {
      const wrappedU = applyWrap(u, wrapS, width);
      const wrappedV = applyWrap(v, wrapT, height);

      const px = Math.min(width - 1, Math.max(0, Math.floor(wrappedU * width)));
      const py = Math.min(height - 1, Math.max(0, Math.floor(wrappedV * height)));
      const index = py * width + px;
      return data[index] / 255.0;
    };

    // Convert world coordinates to texture coordinates (same as shader)
    const stX = x / worldSize;
    const stY = y / worldSize;

    let h = 1024.0 * sampleTexture(stX, stY);

    if (detailStrength > 0) {
      h += detailStrength * 64.0 * sampleTexture(stX * 16.0, stY * 16.0);
      h += detailStrength * 4.0 * sampleTexture(stX * 256.0, stY * 256.0);
    }

    h *= heightMultiplier;

    if (heightSmoothing > 0) {
      h = THREE.MathUtils.lerp(h, h * 0.5, THREE.MathUtils.clamp(heightSmoothing, 0, 1));
    }

    const finalHeight = (h * h) / 2000.0;

    if (Math.random() < 0.01) {
      console.log(
        `[CollisionDetector] x=${x.toFixed(2)}, y=${y.toFixed(2)}, finalHeight=${finalHeight.toFixed(2)}`
      );
    }

    return finalHeight;
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
