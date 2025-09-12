import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

export class Player {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.mesh = null;
    this.velocity = new THREE.Vector3();
    this.position = new THREE.Vector3(0, 650, -4000);
    this.rotation = new THREE.Euler();

    // Balanced speeds for better control
    this.baseSpeed = 3000; // Cruise/base speed (unchanging target)
    this.forwardSpeed = this.baseSpeed; // Current speed, starts at base
    this.maxSpeed = 5000; // Maximum speed
    this.steerSpeed = 600; // Steering responsiveness
    this.maxSteerAngle = Math.PI / 3; // 60 degrees - higher turn angle

    // Enhanced flight dynamics with higher turn rates
    this.acceleration = 800; // How quickly speed changes
    this.currentTurnRate = 0; // Current turning rate
    this.maxTurnRate = 5.5; // Much higher turning rate for agile turns
    this.turnAcceleration = 16.0; // Faster turn acceleration for sharp turns
    this.turnDamping = 0.85; // Less damping for more responsive feel
    this.bankAngle = 0; // Current banking angle
    this.maxBankAngle = Math.PI / 5; // 90 degrees max bank - full banking
    this.pitchAngle = 0; // Current pitch angle
    this.maxPitchAngle = Math.PI / 10; // 36 degrees max pitch - slightly higher

    // Turn angle limits
    this.maxTurnAngle = (560 * Math.PI) / 180; // 90 degrees max turn angle
    this.currentTurnAngle = 0; // Track current turn angle from center

    // Advanced flight characteristics
    this.angularVelocity = new THREE.Vector3(); // For realistic rotation
    this.thrust = 1.0; // Start at full cruise
    this.targetThrust = 1.0;
    this.afterburner = false;

    // Smooth camera system
    this.cameraPosition = new THREE.Vector3(0, 1500, -1900);
    this.cameraLookAt = new THREE.Vector3();

    // Status
    this.health = 100;
    this.distanceTraveled = 0;
    this.startZ = -4000;

    // Effects
    this.exhaustGlows = [];

    // Laser system
    this.lasers = [];
    this.laserSpeed = 8000; // Very fast laser speed
    this.lastLaserTime = 0;
    this.laserCooldown = 150; // 150ms between shots

    this.loadJetModel();
  }

  async loadJetModel() {
    try {
      // First load the materials (.mtl file)
      const mtlLoader = new MTLLoader();
      mtlLoader.setPath("/spaceship/");

      // Load materials first
      const materials = await new Promise((resolve, reject) => {
        mtlLoader.load(
          "justigue_league_flying_vehicle.mtl",
          resolve,
          undefined,
          reject
        );
      });

      materials.preload();

      // Then load the OBJ file with materials
      const objLoader = new OBJLoader();
      objLoader.setPath("/spaceship/");
      objLoader.setMaterials(materials);

      const object = await new Promise((resolve, reject) => {
        objLoader.load(
          "justigue league flying vehicle.obj",
          resolve,
          undefined,
          reject
        );
      });

      this.mesh = object;

      // Scale the spaceship appropriately
      this.mesh.scale.setScalar(0.5); // OBJ models often need smaller scale
      this.mesh.position.copy(this.position);

      // Enable shadows for all meshes in the model
      this.mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Enhance materials if needed
          if (child.material) {
            // Ensure materials work well with lighting
            if (child.material.map) {
              child.material.map.flipY = false; // Fix texture orientation if needed
            }
            child.material.needsUpdate = true;
          }
        }
      });

      // Initialize exhaust effects
      this.createAdvancedExhaustSystem();

      this.scene.add(this.mesh);
      console.log("🚀 Justice League spaceship (OBJ) loaded successfully");
    } catch (error) {
      console.warn(
        "Failed to load OBJ spaceship model, trying without materials:",
        error
      );

      // Fallback: try loading OBJ without materials
      try {
        const objLoader = new OBJLoader();
        objLoader.setPath("/spaceship/");

        const object = await new Promise((resolve, reject) => {
          objLoader.load(
            "justigue league flying vehicle.obj",
            resolve,
            undefined,
            reject
          );
        });

        this.mesh = object;
        this.mesh.scale.setScalar(0.5);
        this.mesh.position.copy(this.position);

        // Apply basic material since MTL failed
        const basicMaterial = new THREE.MeshStandardMaterial({
          color: 0x4a90e2,
          metalness: 0.7,
          roughness: 0.3,
        });

        this.mesh.traverse((child) => {
          if (child.isMesh) {
            child.material = basicMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Exhaust effects handled in main success path

        this.scene.add(this.mesh);
        console.log("🚀 Spaceship (OBJ only) loaded successfully");
      } catch (objError) {
        console.warn(
          "Failed to load OBJ model entirely, using fallback:",
          objError
        );
        this.createAdvancedJet(); // Final fallback to procedural model
      }
    }
  }


  createAdvancedJet() {
    console.warn("Fallback to procedural model - OBJ loading failed");
    // This is now just a basic fallback when OBJ loading completely fails
    const group = new THREE.Group();

    const basicMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a90e2,
      metalness: 0.7,
      roughness: 0.3,
    });

    // Simple fallback geometry
    const fuselageGeometry = new THREE.CylinderGeometry(8, 16, 100, 12);
    const fuselage = new THREE.Mesh(fuselageGeometry, basicMaterial);
    fuselage.castShadow = true;
    fuselage.receiveShadow = true;
    fuselage.rotation.x = Math.PI / 2;
    group.add(fuselage);

    this.createAdvancedExhaustSystem();

    this.mesh = group;
    this.mesh.position.copy(this.position);
    this.scene.add(this.mesh);
  }

  createAdvancedExhaustSystem() {
    // Simple exhaust glow effect using bright emissive geometry
    const exhaustPositions = [
      new THREE.Vector3(-25, 120, -232), // Left engine exhaust
      new THREE.Vector3(25, 120, -232), // Right engine exhaust
    ];

    this.exhaustGlows = [];

    exhaustPositions.forEach((pos, index) => {
      // Main exhaust glow - bright emissive core
      const coreGeometry = new THREE.ConeGeometry(8, 40, 8);
      const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        transparent: true,
        opacity: 0.9,
        emissive: 0x00aaff,
        emissiveIntensity: 2.0, // Very bright for bloom effect
        metalness: 0,
        roughness: 1,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.position.copy(pos);
      core.rotation.x = -Math.PI / 2; // Point backwards (rotate 90 degrees)

      // Outer glow halo
      const haloGeometry = new THREE.ConeGeometry(12, 60, 8);
      const haloMaterial = new THREE.MeshStandardMaterial({
        color: 0x0066cc,
        transparent: true,
        opacity: 0.4,
        emissive: 0x0066cc,
        emissiveIntensity: 1.5,
        blending: THREE.AdditiveBlending,
        metalness: 0,
        roughness: 1,
      });
      const halo = new THREE.Mesh(haloGeometry, haloMaterial);
      halo.position.copy(pos);
      halo.rotation.x = -Math.PI / 2; // Point backwards (rotate 90 degrees)

      this.exhaustGlows.push({ core, halo });

      if (this.mesh) {
        this.mesh.add(core);
        this.mesh.add(halo);
      }
    });
  }


  update(deltaTime) {
    // Enhanced physics update
    this.updateFlightDynamics(deltaTime);

    // Only auto-fly if game has started
    if (window.game && window.game.gameStarted) {
      this.autoFlyForward(deltaTime);
    }

    // Keep position property in sync with mesh position
    if (this.mesh) {
      this.position.copy(this.mesh.position);
    }
    this.updateAdvancedEffects(deltaTime);
    this.updateLasers(deltaTime);

    // Camera update
    if (window.game && window.game.gameStarted) {
      this.updateAdvancedCamera(deltaTime);
    }
  }

  updateFlightDynamics(deltaTime) {
    // Don't update if mesh isn't loaded yet
    if (!this.mesh) return;

    // Assume 60 FPS target for per-frame equivalents
    const frameEquivalentDt = deltaTime * 60;

    // Smooth thrust changes
    this.thrust = THREE.MathUtils.lerp(
      this.thrust,
      this.targetThrust,
      deltaTime * 2
    );

    // Update speed toward target
    const targetSpeed = this.baseSpeed * this.thrust;
    const speedDiff = targetSpeed - this.forwardSpeed;

    // Always adjust (remove >10 threshold for smoother changes)
    const accel = Math.sign(speedDiff) * this.acceleration * deltaTime;
    this.forwardSpeed = Math.max(
      80,
      Math.min(this.maxSpeed, this.forwardSpeed + accel)
    );

    // Time-based angular damping
    const angularDamping = Math.pow(0.95, frameEquivalentDt);
    this.angularVelocity.multiplyScalar(angularDamping);

    // Apply rotations incrementally
    this.mesh.rotation.x += this.angularVelocity.x * deltaTime;
    this.mesh.rotation.y += this.angularVelocity.y * deltaTime;
    this.mesh.rotation.z += this.angularVelocity.z * deltaTime;
  }


  autoFlyForward(deltaTime) {
    if (!this.mesh) return;

    // Move in the direction the plane is facing
    const forward = new THREE.Vector3(0, 0, 1);
    forward.applyQuaternion(this.mesh.quaternion);

    // Set velocity to reflect actual direction and speed
    this.velocity.copy(forward).multiplyScalar(this.forwardSpeed);

    const movement = forward.multiplyScalar(this.forwardSpeed * deltaTime);
    this.mesh.position.add(movement);

    this.distanceTraveled += this.forwardSpeed * deltaTime;
  }

  updateAdvancedEffects(deltaTime) {
    this.updateExhaustGlow(deltaTime);
    this.updateEngineGlow();
  }

  updateExhaustGlow(deltaTime) {
    if (!this.exhaustGlows) return;

    const time = Date.now() * 0.001;
    const thrustIntensity = this.thrust;
    const speedFactor = Math.min(this.forwardSpeed / this.maxSpeed, 1.0);

    this.exhaustGlows.forEach((exhaust, index) => {
      // Pulsing effect based on thrust and speed
      const basePulse = 0.8 + Math.sin(time * 8 + index) * 0.2;
      const thrustPulse = thrustIntensity * basePulse;

      // Core glow intensity
      const coreIntensity = 1.5 + thrustPulse * 1.0;
      exhaust.core.material.emissiveIntensity = coreIntensity;
      exhaust.core.material.opacity = 0.7 + thrustPulse * 0.3;

      // Halo glow intensity
      const haloIntensity = 1.0 + thrustPulse * 0.8;
      exhaust.halo.material.emissiveIntensity = haloIntensity;
      exhaust.halo.material.opacity = 0.3 + thrustPulse * 0.2;

      // Scale effect based on thrust - more powerful exhaust when boosting
      const scaleMultiplier = 1.0 + speedFactor * 0.3;
      exhaust.core.scale.setScalar(scaleMultiplier);
      exhaust.halo.scale.setScalar(scaleMultiplier);

      // Color shifting for afterburner effect
      if (this.afterburner) {
        if (exhaust.core.material.color)
          exhaust.core.material.color.setHex(0xff4400); // Orange-red
        if (exhaust.core.material.emissive)
          exhaust.core.material.emissive.setHex(0xff4400);
        if (exhaust.halo.material.color)
          exhaust.halo.material.color.setHex(0xff6600);
        if (exhaust.halo.material.emissive)
          exhaust.halo.material.emissive.setHex(0xff6600);
      } else {
        if (exhaust.core.material.color)
          exhaust.core.material.color.setHex(0x00aaff); // Blue
        if (exhaust.core.material.emissive)
          exhaust.core.material.emissive.setHex(0x00aaff);
        if (exhaust.halo.material.color)
          exhaust.halo.material.color.setHex(0x0066cc);
        if (exhaust.halo.material.emissive)
          exhaust.halo.material.emissive.setHex(0x0066cc);
      }
    });
  }

  updateEngineGlow() {
    // Dynamic engine glow based on thrust - only for spaceship effects
    if (!this.mesh) return;

    this.mesh.traverse((child) => {
      if (child.userData && child.userData.isExhaustGlow) {
        const intensity = this.thrust;
        if (child.material) {
          child.material.opacity = 0.4 + intensity * 0.6;

          // Color shift based on afterburner
          if (this.afterburner) {
            child.material.color.setHex(0xff4400);
          } else {
            child.material.color.setHex(0x0080ff);
          }
        }
      }
    });
  }



  updateAdvancedCamera(deltaTime) {
    // Don't update camera if mesh isn't loaded yet
    if (!this.mesh) return;

    // Enhanced dynamic camera with speed compensation
    const cameraDistance = 50 + this.forwardSpeed * 0.01; // Further back at high speeds
    const cameraHeight = 400; // Fixed height - no more height changes during banking

    // Get plane's backward direction
    const backward = new THREE.Vector3(0, 0, -1);
    backward.applyQuaternion(this.mesh.quaternion);

    // Dynamic camera positioning
    const cameraOffset = backward.multiplyScalar(cameraDistance);
    cameraOffset.y += cameraHeight;

    // Banking influence on camera - tilt slightly into the turn instead of moving up
    if (Math.abs(this.bankAngle) > 0.1) {
      const right = new THREE.Vector3(1, 0, 0);
      right.applyQuaternion(this.mesh.quaternion);
      // Reduce the banking offset and keep it horizontal
      cameraOffset.add(right.multiplyScalar(Math.sin(this.bankAngle) * 150));
      // Don't add vertical offset during banking
    }


    const targetCameraPos = this.mesh.position.clone().add(cameraOffset);

    // Smooth camera following (time-based alpha)
    const followRate = 5;
    const followAlpha = 1 - Math.exp(-followRate * deltaTime);
    this.cameraPosition.lerp(targetCameraPos, followAlpha);
    this.camera.position.copy(this.cameraPosition);

    // Look ahead distance based on speed and turning
    const forward = new THREE.Vector3(0, 0, 1);
    forward.applyQuaternion(this.mesh.quaternion);

    const lookAheadDistance =
      600 + this.forwardSpeed * 0.3 + Math.abs(this.currentTurnRate) * 400;
    const lookAtTarget = this.mesh.position
      .clone()
      .add(forward.multiplyScalar(lookAheadDistance));

    // Add subtle camera banking - tilt the camera slightly into turns
    if (Math.abs(this.bankAngle) > 0.1) {
      const bankTilt = this.bankAngle * 0.15; // Subtle camera tilt (15% of plane's bank)
      this.camera.rotation.z = THREE.MathUtils.lerp(
        this.camera.rotation.z,
        bankTilt,
        deltaTime * 3
      );
    } else {
      this.camera.rotation.z = THREE.MathUtils.lerp(
        this.camera.rotation.z,
        0,
        deltaTime * 4
      );
    }

    // Smooth look-at (time-based alpha)
    const lookAtRate = 3;
    const lookAtAlpha = 1 - Math.exp(-lookAtRate * deltaTime);
    this.cameraLookAt.lerp(lookAtTarget, lookAtAlpha);
    this.camera.lookAt(this.cameraLookAt);
  }

  // Enhanced steering with proper flight dynamics
  steerLeft(deltaTime) {
    // Check if we can turn left (haven't reached max left turn angle)
    if (this.currentTurnAngle > -this.maxTurnAngle) {
      this.currentTurnRate = Math.min(
        this.maxTurnRate,
        this.currentTurnRate + this.turnAcceleration * deltaTime
      );

      // Add angular velocity for realistic rotation
      this.angularVelocity.y += this.currentTurnRate * deltaTime * 0.5;

      // Update current turn angle (tracks actual plane heading)
      const turnAmount = this.currentTurnRate * deltaTime;
      this.currentTurnAngle = Math.max(
        this.currentTurnAngle - turnAmount,
        -this.maxTurnAngle
      );

      // Progressive banking
      this.bankAngle = THREE.MathUtils.lerp(
        this.bankAngle,
        -this.maxBankAngle,
        deltaTime * 4
      );
      this.mesh.rotation.z = this.bankAngle;
    } else {
      // At turn limit - level out the plane while button is held
      this.bankAngle = THREE.MathUtils.lerp(this.bankAngle, 0, deltaTime * 4);
      this.mesh.rotation.z = this.bankAngle;

      // Also reduce turn rate
      this.currentTurnRate *= Math.pow(this.turnDamping, deltaTime * 60);
    }
  }

  steerRight(deltaTime) {
    // Check if we can turn right (haven't reached max right turn angle)
    if (this.currentTurnAngle < this.maxTurnAngle) {
      this.currentTurnRate = Math.min(
        this.maxTurnRate,
        this.currentTurnRate + this.turnAcceleration * deltaTime
      );

      this.angularVelocity.y -= this.currentTurnRate * deltaTime * 0.5;

      // Update current turn angle (tracks actual plane heading)
      const turnAmount = this.currentTurnRate * deltaTime;
      this.currentTurnAngle = Math.min(
        this.currentTurnAngle + turnAmount,
        this.maxTurnAngle
      );

      this.bankAngle = THREE.MathUtils.lerp(
        this.bankAngle,
        this.maxBankAngle,
        deltaTime * 4
      );
      this.mesh.rotation.z = this.bankAngle;
    } else {
      // At turn limit - level out the plane while button is held
      this.bankAngle = THREE.MathUtils.lerp(this.bankAngle, 0, deltaTime * 4);
      this.mesh.rotation.z = this.bankAngle;

      // Also reduce turn rate
      this.currentTurnRate *= Math.pow(this.turnDamping, deltaTime * 60);
    }
  }

  stabilize(deltaTime) {
    // Gradual stabilization
    const frameEquivalentDt = deltaTime * 60;
    const turnDampingFactor = Math.pow(this.turnDamping, frameEquivalentDt);
    this.currentTurnRate *= turnDampingFactor;

    // DON'T reset turn angle - it tracks actual plane heading
    // The plane maintains its current direction when controls are released

    // Return to level flight (banking only)
    this.bankAngle = THREE.MathUtils.lerp(this.bankAngle, 0, deltaTime * 3);
    this.mesh.rotation.z = this.bankAngle;

    // Pitch stabilization
    this.pitchAngle = THREE.MathUtils.lerp(this.pitchAngle, 0, deltaTime * 2.5);
    this.mesh.rotation.x = this.pitchAngle;
  }

  // Afterburner control
  toggleAfterburner() {
    this.afterburner = !this.afterburner;
    this.targetThrust = this.afterburner ? 1.5 : 1.0;
  }

  // Laser firing system
  fireLasers() {
    if (!this.mesh) return;

    const currentTime = Date.now();
    if (currentTime - this.lastLaserTime < this.laserCooldown) return;

    this.lastLaserTime = currentTime;

    // Get plane's forward direction
    const forward = new THREE.Vector3(0, 0, 1);
    forward.applyQuaternion(this.mesh.quaternion);

    // Laser spawn positions (from wings)
    const laserPositions = [
      new THREE.Vector3(-40, -5, 20), // Left wing
      new THREE.Vector3(40, -5, 20), // Right wing
    ];

    laserPositions.forEach((localPos) => {
      // Transform local position to world position
      const worldPos = localPos.clone();
      worldPos.applyMatrix4(this.mesh.matrixWorld);

      this.createLaser(worldPos, forward.clone());
    });
  }

  createLaser(position, direction) {
    const laserLength = 300; // Much longer lasers

    // Core laser beam using cylinder geometry
    const coreGeometry = new THREE.CylinderGeometry(3, 3, laserLength, 80);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00, // Bright green
      transparent: true,
      opacity: 1.0,
      emissive: 0x00ff00,
      emissiveIntensity: 0.8,
      metalness: 0,
      roughness: 1,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);

    // Outer glow using larger cylinder
    const glowGeometry = new THREE.CylinderGeometry(5, 5, laserLength, 80);
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.3,
      emissive: 0x00ff00,
      emissiveIntensity: 0.2,
      blending: THREE.AdditiveBlending,
      metalness: 0,
      roughness: 1,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);

    // Position and orient both cylinders
    core.position.copy(position);
    glow.position.copy(position);

    // Orient cylinders along the direction vector
    const up = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(up, direction.normalize());

    core.quaternion.copy(quaternion);
    glow.quaternion.copy(quaternion);

    // Laser projectile data
    const laserData = {
      mesh: core,
      glow: glow,
      position: position.clone(),
      direction: direction.clone().normalize(),
      velocity: direction.clone().normalize().multiplyScalar(this.laserSpeed),
      life: 3000, // 3 seconds lifetime
      creationTime: Date.now(),
    };

    this.lasers.push(laserData);
    this.scene.add(core);
    this.scene.add(glow);
  }

  updateLasers(deltaTime) {
    const currentTime = Date.now();

    // Update laser positions and remove expired lasers
    for (let i = this.lasers.length - 1; i >= 0; i--) {
      const laser = this.lasers[i];

      // Check if laser has expired
      if (currentTime - laser.creationTime > laser.life) {
        this.scene.remove(laser.mesh);
        this.scene.remove(laser.glow);
        laser.mesh.geometry.dispose();
        laser.mesh.material.dispose();
        laser.glow.geometry.dispose();
        laser.glow.material.dispose();
        this.lasers.splice(i, 1);
        continue;
      }

      // Move laser forward
      laser.position.add(laser.velocity.clone().multiplyScalar(deltaTime));

      // Update laser and glow positions
      laser.mesh.position.copy(laser.position);
      laser.glow.position.copy(laser.position);

      // Add slight pulsing effect to make it more visible
      const pulse = 1 + Math.sin(currentTime * 0.01) * 0.2;
      laser.mesh.material.emissiveIntensity = 0.8 * pulse;
      laser.glow.material.opacity = 0.3 * pulse;
    }
  }


  getTerrainHeightAtPosition(x = null, z = null) {
    if (
      window.game &&
      window.game.terrain &&
      window.game.terrain.getHeightAtPosition
    ) {
      const queryX = x !== null ? x : this.mesh.position.x;
      const queryZ = z !== null ? z : this.mesh.position.z;
      return window.game.terrain.getHeightAtPosition(queryX, queryZ);
    }
    return 0;
  }

  getStats() {
    const progressDistance = Math.round(
      (this.mesh.position.z - this.startZ) / 1000
    );
    return {
      speed: Math.round(this.forwardSpeed * 3.6), // Convert m/s to km/h
      altitude: Math.round(this.mesh.position.y),
      health: this.health,
      position: this.mesh.position,
      distance: Math.max(0, progressDistance),
    };
  }
}
