import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

export class Player {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.mesh = null;
    this.velocity = new THREE.Vector3();
    this.position = new THREE.Vector3(0, 850, -4000);
    this.rotation = new THREE.Euler();

    // Balanced speeds for better control
    this.baseSpeed = 3000; // Cruise/base speed (unchanging target)
    this.forwardSpeed = this.baseSpeed; // Current speed, starts at base
    this.maxSpeed = 2000; // Maximum speed
    this.steerSpeed = 900; // Steering responsiveness
    this.maxSteerAngle = Math.PI / 3; // 60 degrees - higher turn angle

    // Enhanced flight dynamics with higher turn rates
    this.acceleration = 800; // How quickly speed changes
    this.currentTurnRate = 0; // Current turning rate
    this.maxTurnRate = 9.5; // Much higher turning rate for agile turns
    this.turnAcceleration = 60.0; // Faster turn acceleration for sharp turns
    this.turnDamping = 0.3; // Less damping for more responsive feel
    this.bankAngle = 0; // Current banking angle
    this.maxBankAngle = Math.PI / 8; // 90 degrees max bank - full banking
    this.pitchAngle = 0; // Current pitch angle
    this.maxPitchAngle = Math.PI / 10; // 36 degrees max pitch - slightly higher

    // Turn angle limits
    this.maxTurnAngle = (360 * Math.PI) / 180; // 90 degrees max turn angle
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

    // Bomb system
    this.bombs = [];
    this.bombSpeed = 12000; // Slower than lasers
    this.lastBombTime = 0;
    this.bombCooldown = 500; // 2 second cooldown between bombs
    this.explosions = [];

    // Reusable vectors for performance (avoid allocating new ones each frame)
    this._tempVector1 = new THREE.Vector3();
    this._tempVector2 = new THREE.Vector3();
    this._tempVector3 = new THREE.Vector3();

    // Shared geometries and materials for lasers (reuse instead of creating new ones)
    this._laserCoreGeometry = null;
    this._laserGlowGeometry = null;
    this._laserCoreMaterial = null;
    this._laserGlowMaterial = null;

    // Shared geometries and materials for bombs
    this._bombCoreGeometry = null;
    this._bombGlowGeometry = null;
    this._bombCoreMaterial = null;
    this._bombGlowMaterial = null;

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
          color: 0x2c3e50, // Dark blue-grey like modern fighter jets
          metalness: 0.8,
          roughness: 0.2,
          emissive: 0x0a1425,
          emissiveIntensity: 0.1,
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
      color: 0x2c3e50, // Dark blue-grey like modern fighter jets
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0a1425,
      emissiveIntensity: 0.1,
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
      // Main exhaust glow - bright emissive core (reduced segments for performance)
      const coreGeometry = new THREE.ConeGeometry(8, 40, 6); // Reduced from 8 to 6 segments
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

      // Outer glow halo (reduced segments for performance)
      const haloGeometry = new THREE.ConeGeometry(12, 60, 6); // Reduced from 8 to 6 segments
      const haloMaterial = new THREE.MeshStandardMaterial({
        color: 0x0066cc,
        transparent: true,
        opacity: 0.4,
        emissive: 0x0066cc,
        emissiveIntensity: 3.5,
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
    this.updateBombs(deltaTime);
    this.updateExplosions(deltaTime);

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

    // Move in the direction the plane is facing - reuse temp vector
    this._tempVector1.set(0, 0, 1);
    this._tempVector1.applyQuaternion(this.mesh.quaternion);

    // Set velocity to reflect actual direction and speed
    this.velocity.copy(this._tempVector1).multiplyScalar(this.forwardSpeed);

    // Calculate movement using temp vector
    this._tempVector2
      .copy(this._tempVector1)
      .multiplyScalar(this.forwardSpeed * deltaTime);

    // Add simple side movement based on banking angle
    const sideMovement = this.bankAngle * -200 * deltaTime; // Adjust 200 for sensitivity
    this._tempVector2.x += sideMovement;

    this.mesh.position.add(this._tempVector2);

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

    // Get plane's backward direction - reuse temp vector
    this._tempVector1.set(0, 0, -1);
    this._tempVector1.applyQuaternion(this.mesh.quaternion);

    // Dynamic camera positioning - reuse temp vector
    this._tempVector2.copy(this._tempVector1).multiplyScalar(cameraDistance);
    this._tempVector2.y += cameraHeight;

    // Banking influence on camera - tilt slightly into the turn instead of moving up
    if (Math.abs(this.bankAngle) > 0.1) {
      this._tempVector3.set(1, 0, 0);
      this._tempVector3.applyQuaternion(this.mesh.quaternion);
      // Reduce the banking offset and keep it horizontal
      this._tempVector3.multiplyScalar(Math.sin(this.bankAngle) * 150);
      this._tempVector2.add(this._tempVector3);
      // Don't add vertical offset during banking
    }

    // Calculate target camera position - reuse temp vector
    this._tempVector1.copy(this.mesh.position).add(this._tempVector2);

    // Smooth camera following (time-based alpha)
    const followRate = 5;
    const followAlpha = 1 - Math.exp(-followRate * deltaTime);
    this.cameraPosition.lerp(this._tempVector1, followAlpha);
    this.camera.position.copy(this.cameraPosition);

    // Look ahead distance based on speed and turning - reuse temp vector
    this._tempVector2.set(0, 0, 1);
    this._tempVector2.applyQuaternion(this.mesh.quaternion);

    const lookAheadDistance =
      600 + this.forwardSpeed * 0.3 + Math.abs(this.currentTurnRate) * 20;
    this._tempVector1
      .copy(this.mesh.position)
      .add(this._tempVector2.multiplyScalar(lookAheadDistance));

    // Add subtle camera banking - tilt the camera slightly into turns
    if (Math.abs(this.bankAngle) > 0.1) {
      const bankTilt = this.bankAngle * 9.15; // Subtle camera tilt (15% of plane's bank)
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
    this.cameraLookAt.lerp(this._tempVector1, lookAtAlpha);
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

  // Bomb firing system
  fireBomb() {
    if (!this.mesh) return;

    const currentTime = Date.now();
    if (currentTime - this.lastBombTime < this.bombCooldown) return;

    this.lastBombTime = currentTime;

    // Get plane's forward direction - reuse temp vector
    this._tempVector1.set(0, 0, 1);
    this._tempVector1.applyQuaternion(this.mesh.quaternion);

    // Bomb spawn position (center front of plane)
    const bombPosition = new THREE.Vector3(0, 0, 40); // Front center

    // Transform local position to world position - reuse temp vector
    this._tempVector2.copy(bombPosition);
    this._tempVector2.applyMatrix4(this.mesh.matrixWorld);

    this.createBomb(this._tempVector2, this._tempVector1);
  }

  createBomb(position, direction) {
    const bombLength = 400; // Larger than lasers

    // Create shared geometries and materials only once
    if (!this._bombCoreGeometry) {
      this._bombCoreGeometry = new THREE.CylinderGeometry(6, 6, bombLength, 8); // Thicker than lasers
      this._bombGlowGeometry = new THREE.CylinderGeometry(
        12,
        12,
        bombLength,
        8
      ); // Much thicker glow

      this._bombCoreMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000, // Bright red
        transparent: true,
        opacity: 1.0,
        emissive: 0xff0000,
        emissiveIntensity: 4.5, // Very bright for bloom
        metalness: 0,
        roughness: 1,
      });

      this._bombGlowMaterial = new THREE.MeshStandardMaterial({
        color: 0xff4400, // Orange-red glow
        transparent: true,
        opacity: 0.4,
        emissive: 0xff4400,
        emissiveIntensity: 3.0,
        blending: THREE.AdditiveBlending,
        metalness: 0,
        roughness: 1,
      });
    }

    // Reuse geometries and materials
    const core = new THREE.Mesh(this._bombCoreGeometry, this._bombCoreMaterial);
    const glow = new THREE.Mesh(this._bombGlowGeometry, this._bombGlowMaterial);

    // Position and orient both cylinders
    core.position.copy(position);
    glow.position.copy(position);

    // Orient cylinders along the direction vector - reuse temp vector
    this._tempVector3.set(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(this._tempVector3, direction.normalize());

    core.quaternion.copy(quaternion);
    glow.quaternion.copy(quaternion);

    // Bomb projectile data
    const bombData = {
      mesh: core,
      glow: glow,
      position: position.clone(),
      direction: direction.clone().normalize(),
      velocity: direction.clone().normalize().multiplyScalar(this.bombSpeed),
      creationTime: Date.now(),
      exploded: false,
    };

    this.bombs.push(bombData);
    this.scene.add(core);
    this.scene.add(glow);
  }

  // Laser firing system
  fireLasers() {
    if (!this.mesh) return;

    const currentTime = Date.now();
    if (currentTime - this.lastLaserTime < this.laserCooldown) return;

    this.lastLaserTime = currentTime;

    // Get plane's forward direction - reuse temp vector
    this._tempVector1.set(0, 0, 1);
    this._tempVector1.applyQuaternion(this.mesh.quaternion);

    // Laser spawn positions (from wings)
    const laserPositions = [
      new THREE.Vector3(-40, -5, 20), // Left wing
      new THREE.Vector3(40, -5, 20), // Right wing
    ];

    laserPositions.forEach((localPos) => {
      // Transform local position to world position - reuse temp vector
      this._tempVector2.copy(localPos);
      this._tempVector2.applyMatrix4(this.mesh.matrixWorld);

      this.createLaser(this._tempVector2, this._tempVector1);
    });
  }

  createLaser(position, direction) {
    const laserLength = 300; // Much longer lasers

    // Create shared geometries and materials only once
    if (!this._laserCoreGeometry) {
      this._laserCoreGeometry = new THREE.CylinderGeometry(
        3,
        3,
        laserLength,
        8
      ); // Reduced segments from 80 to 8
      this._laserGlowGeometry = new THREE.CylinderGeometry(
        5,
        5,
        laserLength,
        8
      );

      this._laserCoreMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff00, // Bright green
        transparent: true,
        opacity: 1.0,
        emissive: 0x00ff00,
        emissiveIntensity: 0.8,
        metalness: 0,
        roughness: 1,
      });

      this._laserGlowMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.3,
        emissive: 0x00ff00,
        emissiveIntensity: 4.2,
        blending: THREE.AdditiveBlending,
        metalness: 0,
        roughness: 1,
      });
    }

    // Reuse geometries and materials
    const core = new THREE.Mesh(
      this._laserCoreGeometry,
      this._laserCoreMaterial
    );
    const glow = new THREE.Mesh(
      this._laserGlowGeometry,
      this._laserGlowMaterial
    );

    // Position and orient both cylinders
    core.position.copy(position);
    glow.position.copy(position);

    // Orient cylinders along the direction vector - reuse temp vector
    this._tempVector3.set(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(this._tempVector3, direction.normalize());

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
        // Don't dispose shared geometries and materials - they're reused
        this.lasers.splice(i, 1);
        continue;
      }

      // Move laser forward
      laser.position.add(laser.velocity.clone().multiplyScalar(deltaTime));

      // Update laser and glow positions
      laser.mesh.position.copy(laser.position);
      laser.glow.position.copy(laser.position);

      // Check collision with enemies
      if (window.game && window.game.enemyManager) {
        console.log(`🔫 Checking laser collision at:`, laser.position);
        const hits = window.game.enemyManager.damageEnemiesInArea(
          laser.position,
          150,
          25
        ); // Much larger radius
        if (hits.length > 0) {
          console.log(`🔫💥 Laser hit ${hits.length} enemies!`);
          // Remove laser on hit
          this.scene.remove(laser.mesh);
          this.scene.remove(laser.glow);
          this.lasers.splice(i, 1);
          continue;
        }
      } else {
        console.log(`🔫❌ No enemy manager found for collision check`);
      }

      // Add slight pulsing effect to make it more visible
      const pulse = 1 + Math.sin(currentTime * 0.01) * 0.2;
      laser.mesh.material.emissiveIntensity = 0.8 * pulse;
      laser.glow.material.opacity = 0.3 * pulse;
    }
  }

  updateBombs(deltaTime) {
    const currentTime = Date.now();

    // Update bomb positions and check for explosions
    for (let i = this.bombs.length - 1; i >= 0; i--) {
      const bomb = this.bombs[i];

      // Check if bomb should explode (after 0.5 seconds) or hit enemy
      if (
        !bomb.exploded &&
        (currentTime - bomb.creationTime > 500 ||
          this.checkBombEnemyCollision(bomb))
      ) {
        this.createExplosion(bomb.position.clone());

        // Damage enemies in explosion area
        if (window.game && window.game.enemyManager) {
          console.log(`💣 Bomb exploding at:`, bomb.position);
          const bombHits = window.game.enemyManager.damageEnemiesInArea(
            bomb.position,
            300,
            9999
          ); // Instant kill damage
          console.log(`💣💥 Bomb hit ${bombHits.length} enemies!`);
        }

        // Remove bomb visuals
        this.scene.remove(bomb.mesh);
        this.scene.remove(bomb.glow);
        this.bombs.splice(i, 1);
        continue;
      }

      if (!bomb.exploded) {
        // Move bomb forward
        bomb.position.add(bomb.velocity.clone().multiplyScalar(deltaTime));

        // Update bomb and glow positions
        bomb.mesh.position.copy(bomb.position);
        bomb.glow.position.copy(bomb.position);

        // Add pulsing effect to make it more dramatic
        const pulse = 1 + Math.sin(currentTime * 0.02) * 0.3;
        bomb.mesh.material.emissiveIntensity = 1.5 * pulse;
        bomb.glow.material.opacity = 0.4 * pulse;
      }
    }
  }

  createExplosion(position) {
    const explosionData = {
      position: position.clone(),
      creationTime: Date.now(),
      duration: 800, // 2 second explosion duration
      effects: [],
    };

    // Main explosion sphere (bright core)
    const coreGeometry = new THREE.SphereGeometry(50, 16, 16);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa00, // Bright orange
      transparent: true,
      opacity: 1.0,
      emissive: 0xffaa00,
      emissiveIntensity: 3.0, // Very bright for massive bloom
      metalness: 0,
      roughness: 1,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.copy(position);
    this.scene.add(core);
    explosionData.effects.push({ type: "core", mesh: core });

    // Outer explosion glow
    const glowGeometry = new THREE.SphereGeometry(100, 12, 12);
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4400, // Red-orange
      transparent: true,
      opacity: 0.6,
      emissive: 0xff4400,
      emissiveIntensity: 2.0,
      blending: THREE.AdditiveBlending,
      metalness: 0,
      roughness: 1,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(position);
    this.scene.add(glow);
    explosionData.effects.push({ type: "glow", mesh: glow });

    // Shockwave rings
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.RingGeometry(10 + i * 20, 15 + i * 25, 16);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0xffff88, // Bright yellow
        transparent: true,
        opacity: 0.8,
        emissive: 0xffff88,
        emissiveIntensity: 1.5,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        metalness: 0,
        roughness: 1,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.position.y += (i - 1) * 10; // Slightly offset rings
      this.scene.add(ring);
      explosionData.effects.push({
        type: "shockwave",
        mesh: ring,
        startTime: Date.now() + i * 20,
      });
    }

    this.explosions.push(explosionData);
  }

  updateExplosions(deltaTime) {
    const currentTime = Date.now();

    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const explosion = this.explosions[i];
      const age = currentTime - explosion.creationTime;
      const progress = age / explosion.duration;

      if (progress > 1.0) {
        // Remove expired explosion
        explosion.effects.forEach((effect) => {
          this.scene.remove(effect.mesh);
          effect.mesh.geometry.dispose();
          effect.mesh.material.dispose();
        });
        this.explosions.splice(i, 1);
        continue;
      }

      // Update explosion effects
      explosion.effects.forEach((effect) => {
        const mesh = effect.mesh;

        switch (effect.type) {
          case "core":
            // Expand and fade core
            const coreScale = 1 + progress * 3;
            mesh.scale.setScalar(coreScale);
            mesh.material.opacity = Math.max(0, 1 - progress * 1.5);
            mesh.material.emissiveIntensity = Math.max(0, 3.0 * (1 - progress));
            break;

          case "glow":
            // Expand glow more slowly
            const glowScale = 1 + progress * 2;
            mesh.scale.setScalar(glowScale);
            mesh.material.opacity = Math.max(0, 0.6 * (1 - progress * 0.8));
            mesh.material.emissiveIntensity = Math.max(
              0,
              2.0 * (1 - progress * 0.5)
            );
            break;

          case "shockwave":
            // Expanding shockwave rings with delay
            const ringAge =
              currentTime - (effect.startTime || explosion.creationTime);
            if (ringAge > 0) {
              const ringProgress = Math.min(ringAge / 1000, 1); // 1 second ring expansion
              const ringScale = 1 + ringProgress * 8;
              mesh.scale.setScalar(ringScale);
              mesh.material.opacity = Math.max(0, 0.8 * (1 - ringProgress));
              mesh.material.emissiveIntensity = Math.max(
                0,
                1.5 * (1 - ringProgress * 0.7)
              );
              mesh.rotation.z += deltaTime * 2; // Rotate for effect
            }
            break;
        }
      });
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

  checkBombEnemyCollision(bomb) {
    if (!window.game || !window.game.enemyManager) return false;

    // Check if bomb is close to any enemy
    for (const enemy of window.game.enemyManager.enemies) {
      if (!enemy.isDestroyed()) {
        const distance = bomb.position.distanceTo(enemy.getPosition());
        if (distance < 100) {
          // 100 unit trigger distance
          return true;
        }
      }
    }
    return false;
  }

  takeDamage(damage) {
    this.health = Math.max(0, this.health - damage);
    console.log(`💥 Player took ${damage} damage! Health: ${this.health}`);

    // Check if player is dead
    if (this.health <= 0) {
      console.log("💀 Player destroyed!");

      // Create massive explosion effect
      this.createPlayerDeathExplosion();

      // Delay game over to show explosion
      setTimeout(() => {
        if (window.game && window.game.hud) {
          window.game.hud.showGameOver();
        }
      }, 2000); // 2 second delay
    }

    return this.health <= 0;
  }

  createPlayerDeathExplosion() {
    if (!this.mesh) return;

    const explosionPos = this.mesh.position.clone();
    console.log("💥🔥 Creating player death explosion at:", explosionPos);

    // Main explosion sphere
    const mainExplosionGeometry = new THREE.SphereGeometry(100, 16, 16);
    const mainExplosionMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });

    const mainExplosion = new THREE.Mesh(
      mainExplosionGeometry,
      mainExplosionMaterial
    );
    mainExplosion.position.copy(explosionPos);
    this.scene.add(mainExplosion);

    // Secondary explosion rings
    const explosionRings = [];
    for (let i = 0; i < 5; i++) {
      const ringGeometry = new THREE.TorusGeometry(50 + i * 30, 10, 8, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff4400 : 0xffff00,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(explosionPos);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.rotation.z = Math.random() * Math.PI;

      explosionRings.push(ring);
      this.scene.add(ring);
    }

    // Debris particles
    const debrisParticles = [];
    for (let i = 0; i < 30; i++) {
      const debrisGeometry = new THREE.BoxGeometry(
        Math.random() * 20 + 5,
        Math.random() * 20 + 5,
        Math.random() * 20 + 5
      );
      const debrisMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x444444 : 0x888888,
        transparent: true,
        opacity: 1.0,
      });

      const debris = new THREE.Mesh(debrisGeometry, debrisMaterial);
      debris.position.copy(explosionPos);
      debris.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
      debris.angularVelocity = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );

      debrisParticles.push(debris);
      this.scene.add(debris);
    }

    // Sparkle effects
    const sparkles = [];
    for (let i = 0; i < 50; i++) {
      const sparkleGeometry = new THREE.SphereGeometry(
        Math.random() * 5 + 2,
        4,
        4
      );
      const sparkleMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0xffff00 : 0xff8800,
        transparent: true,
        opacity: 1.0,
        blending: THREE.AdditiveBlending,
      });

      const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial);
      sparkle.position.copy(explosionPos);
      sparkle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 1500,
        (Math.random() - 0.5) * 1500,
        (Math.random() - 0.5) * 1500
      );

      sparkles.push(sparkle);
      this.scene.add(sparkle);
    }

    // Hide the player mesh
    if (this.mesh) {
      this.mesh.visible = false;
    }

    // Animate explosion
    let explosionTime = 0;
    const animateExplosion = () => {
      explosionTime += 16; // ~60fps
      const progress = explosionTime / 3000; // 3 second explosion

      if (progress > 1) {
        // Clean up explosion effects
        this.scene.remove(mainExplosion);
        explosionRings.forEach((ring) => this.scene.remove(ring));
        debrisParticles.forEach((debris) => this.scene.remove(debris));
        sparkles.forEach((sparkle) => this.scene.remove(sparkle));
        return;
      }

      // Animate main explosion
      mainExplosion.scale.setScalar(1 + progress * 4);
      mainExplosion.material.opacity = 1 - progress;

      // Animate rings
      explosionRings.forEach((ring, index) => {
        ring.scale.setScalar(1 + progress * (2 + index * 0.5));
        ring.material.opacity = 0.8 - progress;
        ring.rotation.x += 0.05;
        ring.rotation.y += 0.03;
        ring.rotation.z += 0.02;
      });

      // Animate debris
      debrisParticles.forEach((debris) => {
        debris.position.add(debris.velocity.clone().multiplyScalar(0.016));
        debris.rotation.x += debris.angularVelocity.x * 0.016;
        debris.rotation.y += debris.angularVelocity.y * 0.016;
        debris.rotation.z += debris.angularVelocity.z * 0.016;
        debris.material.opacity = 1 - progress;

        // Apply gravity to debris
        debris.velocity.y -= 500 * 0.016;
      });

      // Animate sparkles
      sparkles.forEach((sparkle) => {
        sparkle.position.add(sparkle.velocity.clone().multiplyScalar(0.016));
        sparkle.material.opacity = 1 - progress;
        sparkle.scale.setScalar(1 - progress * 0.5);
      });

      requestAnimationFrame(animateExplosion);
    };

    animateExplosion();
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
