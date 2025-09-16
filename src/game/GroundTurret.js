import * as THREE from "three";
import { Enemy } from "./Enemy.js";

// Static object pools shared across all turrets
class LaserPool {
  constructor() {
    this.availableLasers = [];
    this.geometryCache = null;
    this.materialCache = null;
  }

  initialize() {
    // Create shared geometry and materials once
    const laserLength = 200;

    this.coreGeometry = new THREE.CylinderGeometry(8, 8, laserLength, 12);
    this.glowGeometry = new THREE.CylinderGeometry(12, 12, laserLength, 15);

    this.coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 1.0,
      emissive: 0xff0000,
      emissiveIntensity: 1.2,
      metalness: 0,
      roughness: 1,
    });

    this.glowMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.4,
      emissive: 0xff0000,
      emissiveIntensity: 15.3,
      blending: THREE.AdditiveBlending,
      metalness: 0,
      roughness: 1,
    });

    // Pre-create some laser objects
    for (let i = 0; i < 20; i++) {
      this.createLaserObject();
    }
  }

  createLaserObject() {
    const core = new THREE.Mesh(this.coreGeometry, this.coreMaterial);
    const glow = new THREE.Mesh(this.glowGeometry, this.glowMaterial);

    // Hide initially
    core.visible = false;
    glow.visible = false;

    const laserObj = {
      mesh: core,
      glow: glow,
      position: new THREE.Vector3(),
      direction: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      life: 0,
      creationTime: 0,
      damage: 0,
      active: false,
    };

    this.availableLasers.push(laserObj);
    return laserObj;
  }

  getLaser() {
    if (this.availableLasers.length > 0) {
      return this.availableLasers.pop();
    }
    // Create new if pool is empty
    return this.createLaserObject();
  }

  returnLaser(laser) {
    laser.active = false;
    laser.mesh.visible = false;
    laser.glow.visible = false;
    this.availableLasers.push(laser);
  }
}

// Global laser pool
const laserPool = new LaserPool();

// Muzzle flash pool
class MuzzleFlashPool {
  constructor() {
    this.availableFlashes = [];
    this.geometry = null;
    this.material = null;
  }

  initialize() {
    this.geometry = new THREE.SphereGeometry(8, 6, 6);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Pre-create flash objects
    for (let i = 0; i < 10; i++) {
      const flash = new THREE.Mesh(this.geometry, this.material);
      flash.visible = false;
      this.availableFlashes.push(flash);
    }
  }

  getFlash() {
    if (this.availableFlashes.length > 0) {
      return this.availableFlashes.pop();
    }
    // Create new if pool is empty
    const flash = new THREE.Mesh(this.geometry, this.material);
    flash.visible = false;
    return flash;
  }

  returnFlash(flash) {
    flash.visible = false;
    this.availableFlashes.push(flash);
  }
}

const flashPool = new MuzzleFlashPool();

export class GroundTurret extends Enemy {
  constructor(scene, position, terrain) {
    super(scene, position);

    // Initialize pools on first turret creation
    if (!laserPool.geometryCache) {
      laserPool.initialize();
      flashPool.initialize();
    }

    // Ground turret specific properties
    this.health = 200;
    this.maxHealth = 200;
    this.speed = 0;
    this.attackDamage = 20;
    this.points = 300;
    this.range = 40000;

    // Targeting and rotation
    this.cannonRotationY = 0;
    this.cannonRotationX = 0;
    this.rotationSpeed = 3.0;
    this.targetPosition = new THREE.Vector3();
    this.isTargeting = false;

    // Shooting mechanics - optimized
    this.activeLasers = []; // Only track active lasers
    this.lastShotTime = 0;
    this.laserCooldown = 150;
    this.laserSpeed = 8000;
    this.laserLife = 4000;

    // Store terrain and player references
    this.terrain = terrain;
    this.player = null;

    // Get terrain height for proper placement
    this.groundHeight = this.getTerrainHeight(position.x, position.z);
    this.position.y = this.groundHeight;

    // Reused objects for calculations
    this._tempVector1 = new THREE.Vector3();
    this._tempVector2 = new THREE.Vector3();
    this._tempQuaternion = new THREE.Quaternion();

    this.createTurret();
  }

  setPlayer(player) {
    this.player = player;
  }

  createTurret() {
    // Create turret group
    this.turretGroup = new THREE.Group();

    // Base platform
    const baseGeometry = new THREE.CylinderGeometry(40, 50, 20, 12);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.3,
    });

    this.baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
    this.baseMesh.position.y = 10;
    this.turretGroup.add(this.baseMesh);

    // Rotating base (turret ring)
    const ringGeometry = new THREE.CylinderGeometry(35, 35, 15, 12);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      metalness: 0.7,
      roughness: 0.2,
    });

    this.ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    this.ringMesh.position.y = 27.5;
    this.turretGroup.add(this.ringMesh);

    // Cannon group (rotates with turret)
    this.cannonGroup = new THREE.Group();
    this.cannonGroup.position.y = 35;

    // Cannon base/housing
    const housingGeometry = new THREE.BoxGeometry(30, 20, 25);
    const housingMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.8,
      roughness: 0.2,
    });

    this.housingMesh = new THREE.Mesh(housingGeometry, housingMaterial);
    this.cannonGroup.add(this.housingMesh);

    // Cannon barrel (rotates for elevation)
    this.barrelGroup = new THREE.Group();

    const barrelGeometry = new THREE.CylinderGeometry(4, 4, 60, 12);
    const barrelMaterial = new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.9,
      roughness: 0.1,
    });

    this.barrelMesh = new THREE.Mesh(barrelGeometry, barrelMaterial);
    this.barrelMesh.rotation.z = Math.PI / 2;
    this.barrelMesh.position.x = 30;
    this.barrelGroup.add(this.barrelMesh);

    // Cannon elevation pivot
    this.barrelGroup.position.set(0, 5, 0);
    this.cannonGroup.add(this.barrelGroup);

    // Add energy core (targeting laser)
    const coreGeometry = new THREE.SphereGeometry(8, 12, 12);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.8,
    });

    this.coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    this.coreMesh.position.set(0, -5, 0);
    this.cannonGroup.add(this.coreMesh);

    // Radar/targeting dish
    const dishGeometry = new THREE.ConeGeometry(15, 8, 8);
    const dishMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      metalness: 0.6,
      roughness: 0.4,
    });

    this.dishMesh = new THREE.Mesh(dishGeometry, dishMaterial);
    this.dishMesh.position.set(0, 15, -10);
    this.cannonGroup.add(this.dishMesh);

    // Warning lights
    for (let i = 0; i < 4; i++) {
      const lightGeometry = new THREE.SphereGeometry(3, 6, 6);
      const lightMaterial = new THREE.MeshStandardMaterial({
        color: 0xff4400,
        emissive: 0xff2200,
        emissiveIntensity: 2.0,
      });

      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      const angle = (i / 4) * Math.PI * 2;
      light.position.set(Math.cos(angle) * 25, -8, Math.sin(angle) * 25);

      this.ringMesh.add(light);
    }

    this.turretGroup.add(this.cannonGroup);

    // Position turret on ground
    this.turretGroup.position.copy(this.position);
    this.mesh = this.turretGroup;
    this.scene.add(this.turretGroup);

    console.log("Ground Turret deployed at", this.position);
  }

  update(deltaTime, playerPosition) {
    super.update(deltaTime, playerPosition);
    this.updateAI(deltaTime, playerPosition);
    this.updateLasers(deltaTime, playerPosition);
    this.updateAnimation(deltaTime);
  }

  updateAI(deltaTime, playerPosition) {
    // Reuse temp vector for distance calculation
    const distanceToPlayer = this.mesh.position.distanceTo(playerPosition);
    this.isTargeting = distanceToPlayer <= this.range;

    if (this.isTargeting) {
      this.targetPosition.copy(playerPosition);

      // Add prediction for moving target
      if (this.player && this.player.velocity) {
        const timeToTarget = distanceToPlayer / this.laserSpeed;
        this._tempVector1
          .copy(this.player.velocity)
          .multiplyScalar(timeToTarget);
        this.targetPosition.add(this._tempVector1);
      }

      this.updateTargeting(deltaTime);
      this.updateShooting(deltaTime);
    }
  }

  updateTargeting(deltaTime) {
    // Use temp vectors for calculations
    const turretPos = this.cannonGroup.getWorldPosition(this._tempVector1);
    const direction = this._tempVector2
      .copy(this.targetPosition)
      .sub(turretPos);
    const distance = direction.length();

    if (distance > 0) {
      direction.normalize();

      const targetY = Math.atan2(direction.x, direction.z);
      const horizontalDistance = Math.sqrt(
        direction.x * direction.x + direction.z * direction.z
      );
      const targetX = -Math.atan2(direction.y, horizontalDistance);

      const rotationDelta = this.rotationSpeed * deltaTime;

      // Rotate cannon horizontally
      const yDiff = targetY - this.cannonRotationY;
      let yAdjustment = yDiff;

      if (Math.abs(yDiff) > Math.PI) {
        yAdjustment = yDiff > 0 ? yDiff - Math.PI * 2 : yDiff + Math.PI * 2;
      }

      if (Math.abs(yAdjustment) < rotationDelta) {
        this.cannonRotationY = targetY;
      } else {
        this.cannonRotationY += Math.sign(yAdjustment) * rotationDelta;
      }

      // Rotate cannon vertically (elevation limits)
      const maxElevation = Math.PI / 6;
      const minElevation = -Math.PI / 12;
      const clampedTargetX = Math.max(
        minElevation,
        Math.min(maxElevation, targetX)
      );

      const xDiff = clampedTargetX - this.cannonRotationX;
      if (Math.abs(xDiff) < rotationDelta) {
        this.cannonRotationX = clampedTargetX;
      } else {
        this.cannonRotationX += Math.sign(xDiff) * rotationDelta;
      }

      // Apply rotations
      this.cannonGroup.rotation.y = this.cannonRotationY;
      this.barrelGroup.rotation.z = this.cannonRotationX;
    }
  }

  updateShooting(deltaTime) {
    const tolerance = 0.15;
    const turretPos = this.cannonGroup.getWorldPosition(this._tempVector1);
    const direction = this._tempVector2
      .copy(this.targetPosition)
      .sub(turretPos)
      .normalize();

    const targetY = Math.atan2(direction.x, direction.z);
    const horizontalDistance = Math.sqrt(
      direction.x * direction.x + direction.z * direction.z
    );
    const targetX = -Math.atan2(direction.y, horizontalDistance);

    const yDiff = Math.abs(targetY - this.cannonRotationY);
    const xDiff = Math.abs(targetX - this.cannonRotationX);

    const isAimed = yDiff < tolerance && xDiff < tolerance;

    const now = Date.now();
    if (isAimed && now - this.lastShotTime > this.laserCooldown) {
      this.fireLaser();
      this.lastShotTime = now;
    }
  }

  fireLaser() {
    if (!this.mesh) return;

    // Get muzzle world position using temp vectors
    const muzzleWorldPos = this.barrelMesh.getWorldPosition(this._tempVector1);

    // Adjust muzzle position to barrel tip
    const muzzleDirection = this._tempVector2.set(1, 0, 0);
    muzzleDirection.applyQuaternion(
      this.barrelMesh.getWorldQuaternion(this._tempQuaternion)
    );
    muzzleWorldPos.add(muzzleDirection.multiplyScalar(30));

    // Calculate shooting direction towards target
    const direction = this.targetPosition
      .clone()
      .sub(muzzleWorldPos)
      .normalize();

    // Get laser from pool instead of creating new
    this.createOptimizedLaser(muzzleWorldPos, direction);
    this.createOptimizedMuzzleFlash(muzzleWorldPos);
  }

  createOptimizedLaser(startPosition, direction) {
    // Get laser from pool
    const laser = laserPool.getLaser();

    // Configure laser
    laser.position.copy(startPosition);
    laser.direction.copy(direction);
    laser.velocity.copy(direction).multiplyScalar(this.laserSpeed);
    laser.life = this.laserLife;
    laser.creationTime = Date.now();
    laser.damage = this.attackDamage;
    laser.active = true;

    // Position meshes
    laser.mesh.position.copy(startPosition);
    laser.glow.position.copy(startPosition);

    // Orient laser
    const up = this._tempVector1.set(0, 1, 0);
    this._tempQuaternion.setFromUnitVectors(up, direction);
    laser.mesh.quaternion.copy(this._tempQuaternion);
    laser.glow.quaternion.copy(this._tempQuaternion);

    // Make visible and add to scene
    laser.mesh.visible = true;
    laser.glow.visible = true;

    if (!laser.mesh.parent) {
      this.scene.add(laser.mesh);
      this.scene.add(laser.glow);
    }

    this.activeLasers.push(laser);
  }

  createOptimizedMuzzleFlash(position) {
    const flash = flashPool.getFlash();
    flash.position.copy(position);
    flash.visible = true;

    if (!flash.parent) {
      this.scene.add(flash);
    }

    // Return to pool after delay
    setTimeout(() => {
      if (flash.parent) {
        this.scene.remove(flash);
      }
      flashPool.returnFlash(flash);
    }, 100);
  }

  updateLasers(deltaTime, playerPosition) {
    // Only iterate through active lasers
    for (let i = this.activeLasers.length - 1; i >= 0; i--) {
      const laser = this.activeLasers[i];
      const now = Date.now();

      // Move laser using temp vector
      const movement = this._tempVector1
        .copy(laser.velocity)
        .multiplyScalar(deltaTime);
      laser.position.add(movement);

      // Update mesh positions
      laser.mesh.position.copy(laser.position);
      laser.glow.position.copy(laser.position);

      // Check collision
      const distanceToPlayer = laser.position.distanceTo(playerPosition);
      if (distanceToPlayer < 80) {
        // Hit player
        if (this.player && this.player.takeDamage) {
          this.player.takeDamage(laser.damage);
        } else if (
          window.game &&
          window.game.player &&
          window.game.player.takeDamage
        ) {
          window.game.player.takeDamage(laser.damage);
        }

        // Return laser to pool
        this.returnLaserToPool(laser, i);
        continue;
      }

      // Remove old lasers
      if (now - laser.creationTime > laser.life) {
        this.returnLaserToPool(laser, i);
      }
    }
  }

  returnLaserToPool(laser, index) {
    // Remove from active list
    this.activeLasers.splice(index, 1);

    // Don't remove from scene, just hide
    laser.mesh.visible = false;
    laser.glow.visible = false;

    // Return to pool
    laserPool.returnLaser(laser);
  }

  updateAnimation(deltaTime) {
    if (!this.mesh) return;

    this.dishMesh.rotation.y += deltaTime * 4;

    if (this.isTargeting) {
      const pulse = Math.sin(this.time * 6) * 0.5 + 1;
      this.coreMesh.material.emissiveIntensity = 1.5 + pulse * 0.5;
      this.coreMesh.scale.setScalar(0.8 + pulse * 0.2);
    } else {
      this.coreMesh.material.emissiveIntensity = 0.5;
      this.coreMesh.scale.setScalar(1.0);
    }
  }

  getTerrainHeight(x, z) {
    if (this.terrain && this.terrain.getHeightAtPosition) {
      return this.terrain.getHeightAtPosition(x, z, true);
    }
    return 0;
  }

  takeDamage(damage) {
    this.flashWhite();
    return super.takeDamage(damage);
  }

  flashWhite() {
    if (!this.originalColors) {
      this.originalColors = {
        housingEmissive:
          this.housingMesh.material.emissive?.clone() ||
          new THREE.Color(0x000000),
        barrelEmissive:
          this.barrelMesh.material.emissive?.clone() ||
          new THREE.Color(0x000000),
      };
    }

    this.housingMesh.material.emissive = new THREE.Color(0xffffff);
    this.barrelMesh.material.emissive = new THREE.Color(0xffffff);

    setTimeout(() => {
      if (
        this.housingMesh &&
        this.housingMesh.material &&
        this.originalColors
      ) {
        this.housingMesh.material.emissive =
          this.originalColors.housingEmissive;
        this.barrelMesh.material.emissive = this.originalColors.barrelEmissive;
      }
    }, 100);
  }

  destroy() {
    // Return all active lasers to pool
    for (let i = this.activeLasers.length - 1; i >= 0; i--) {
      this.returnLaserToPool(this.activeLasers[i], i);
    }
    this.activeLasers = [];

    super.destroy();
  }
}
