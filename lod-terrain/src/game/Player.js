import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { sampleHeight } from "../noise.js";

export class Player {
  constructor(scene, camera, collisionDetector = null) {
    this.scene = scene;
    this.camera = camera;
    this.collisionDetector = collisionDetector;
    this.mesh = null;
    this.velocity = new THREE.Vector3();
    // Find a good spawn position with low terrain
    const spawnPosition = this.findLowTerrainSpawn();
    this.position = new THREE.Vector3(
      spawnPosition.x,
      spawnPosition.y,
      spawnPosition.z
    );

    // Balanced speeds for better control
    this.baseSpeed = 300; // Cruise/base speed (unchanging target)
    this.forwardSpeed = this.baseSpeed; // Current speed, starts at base
    this.maxSpeed = 200; // Maximum speed
    this.steerSpeed = 900; // Steering responsiveness
    this.maxSteerAngle = Math.PI / 3; // 60 degrees - higher turn angle

    // Enhanced flight dynamics with higher turn rates
    this.acceleration = 800; // How quickly speed changes
    this.currentTurnRate = 0; // Current turning rate
    this.maxTurnRate = 39.5; // Much higher turning rate for agile turns
    this.turnAcceleration = 460.0; // Faster turn acceleration for sharp turns
    this.turnDamping = 0.3; // Less damping for more responsive feel
    this.bankAngle = 0; // Current banking angle
    this.maxBankAngle = Math.PI / 4; // 45 degrees max bank - more dramatic banking
    this.pitchAngle = 0; // Current pitch angle
    this.maxPitchAngle = Math.PI / 10; // 36 degrees max pitch - slightly higher

    // Turn angle limits
    this.maxTurnAngle = (360 * Math.PI) / 180; // 90 degrees max turn angle
    this.currentTurnAngle = 0; // Track current turn angle from center
    this.worldZRotation = 0; // Track world Z-axis rotation

    // Advanced flight characteristics
    this.angularVelocity = new THREE.Vector3(); // For realistic rotation
    this.thrust = 1.0; // Start at full cruise
    this.targetThrust = 1.0;
    this.afterburner = false;

    // Steering input state
    this.steeringInput = 0; // -1 for left, 0 for none, 1 for right
    this.targetYawRate = 0; // Target yaw rotation rate

    // Smooth camera system (Y is forward, Z is up)
    this.cameraPosition = new THREE.Vector3(0, -1900, 1500);
    this.cameraLookAt = new THREE.Vector3();
    this.cameraRotation = new THREE.Quaternion(); // Smooth camera rotation

    // Auto-descent configuration
    this.autoDescentEnabled = true; // Enable/disable auto-descent
    this.startAltitude = 800; // High starting altitude
    this.targetAltitude = 200; // Lower target altitude
    this.descentDuration = 10.0; // 10 seconds to descend
    this.descentStartTime = null; // When descent begins
    this.hasDescended = false; // Track if descent is complete
    this.initialPosition = null; // Store initial position for descent calculation

    // Status
    this.health = 100;
    this.distanceTraveled = 0;
    this.startY = 0; // Y is forward direction

    // Effects
    this.exhaustGlows = [];

    // Laser system
    this.lasers = [];
    this.laserSpeed = 2000; // Very fast laser speed
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

  findLowTerrainSpawn() {
    console.log("🗺️ Scanning terrain for low spawn point...");

    let lowestHeight = Infinity;
    let bestPosition = { x: 0, y: 0, z: 200 }; // Default fallback

    // Scan a grid of positions to find the lowest terrain
    const scanRange = 2000; // Scan 4000x4000 area
    const scanStep = 100; // Check every 100 units
    const minFlightHeight = this.autoDescentEnabled ? this.startAltitude : 50; // Use start altitude if auto-descent enabled

    for (let x = -scanRange; x <= scanRange; x += scanStep) {
      for (let y = -scanRange; y <= scanRange; y += scanStep) {
        try {
          const terrainHeight = sampleHeight(x, y);

          if (terrainHeight < lowestHeight) {
            lowestHeight = terrainHeight;
            bestPosition = {
              x: x,
              y: y,
              z: terrainHeight + minFlightHeight,
            };
          }
        } catch (error) {
          // Skip problematic positions
          continue;
        }
      }
    }

    console.log(
      `✅ Found spawn point at: (${bestPosition.x}, ${bestPosition.y}, ${bestPosition.z}), terrain height: ${lowestHeight}, altitude: ${minFlightHeight}`
    );

    // Store initial position for auto-descent
    if (this.autoDescentEnabled) {
      this.initialPosition = { ...bestPosition };
      console.log(`🛫 Auto-descent enabled: Starting at ${this.startAltitude}m, will descend to ${this.targetAltitude}m over ${this.descentDuration}s`);
    }

    return bestPosition;
  }

  async loadJetModel() {
    try {
      THREE.Object3D.DEFAULT_UP.set(0, 0, 1); // Z is up

      // First load the materials (.mtl file)
      const mtlLoader = new MTLLoader();
      mtlLoader.setPath("/assets/spaceship/");

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
      objLoader.setPath("/assets/spaceship/");
      objLoader.setMaterials(materials);

      const object = await new Promise((resolve, reject) => {
        objLoader.load(
          "justigue_league_flying_vehicle.obj",
          resolve,
          undefined,
          reject
        );
      });

      // Create a group to control the rotation pivot point
      const planeGroup = new THREE.Group();

      // Scale the spaceship appropriately
      object.scale.setScalar(0.05); // OBJ models often need smaller scale

      // Orient the plane correctly for our coordinate system (Z is up, Y is forward)
      // Plane should point away from camera (forward) and be right-side up
      object.rotation.set(Math.PI / 2, Math.PI, 0);

      // Offset the plane within the group to move the rotation pivot
      object.position.set(0, 0, -5); // Move plane down relative to group origin

      // Add the plane to the group
      planeGroup.add(object);

      // Position the group in the world
      planeGroup.position.copy(this.position);

      // Use the group as our main mesh for rotation
      this.mesh = planeGroup;

      // Enable shadows for all meshes in the model
      this.mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
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
    }
  }

  createAdvancedExhaustSystem() {
    // Simple exhaust glow effect using bright emissive geometry
    // Positions relative to the plane object inside the group
    const exhaustPositions = [
      new THREE.Vector3(-20, 120, -250), // Left engine exhaust (behind plane, wider spacing)
      new THREE.Vector3(20, 120, -250), // Right engine exhaust (behind plane, wider spacing)
    ];

    this.exhaustGlows = [];

    exhaustPositions.forEach((pos, index) => {
      // Main exhaust glow - bright emissive core (reduced segments for performance)
      const coreGeometry = new THREE.ConeGeometry(10, 50, 6); // Twice as big exhaust
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
      //core.rotation.z = Math.PI; // Point backwards in new coordinate system
      core.rotation.y = -Math.PI / 2; // Point backwards in new coordinate system
      core.rotation.z = Math.PI / 2;

      // Outer glow halo (reduced segments for performance)
      const haloGeometry = new THREE.ConeGeometry(20, 100, 6); // Twice as big halo
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
      // halo.rotation.z = Math.PI / 2; // Point backwards in new coordinate system
      halo.rotation.y = -Math.PI / 2; // Point backwards in new coordinate system
      halo.rotation.z = Math.PI / 2;

      this.exhaustGlows.push({ core, halo });

      // Add exhaust to the plane object inside the group, not the group itself
      if (this.mesh && this.mesh.children[0]) {
        this.mesh.children[0].add(core);
        this.mesh.children[0].add(halo);
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

    // Steering dynamics
    if (this.steeringInput !== 0) {
      // Add banking into turns for more realistic flight
      const maxBankRate = 3.0; // How fast to bank into turns
      const targetBank = this.steeringInput * this.maxBankAngle;

      // Smoothly transition to target bank angle
      this.bankAngle = THREE.MathUtils.lerp(
        this.bankAngle,
        targetBank,
        maxBankRate * deltaTime
      );
      this.mesh.rotation.y = this.bankAngle;

      // Add Z-axis turning based on banking angle (world Z-axis)
      const maxTurnRate = 1.5; // Maximum turn rate in radians per second
      const targetTurnRate = this.steeringInput * maxTurnRate;
      this.currentTurnRate = THREE.MathUtils.lerp(
        this.currentTurnRate,
        targetTurnRate,
        3.0 * deltaTime
      );
      // Update world Z rotation
      this.worldZRotation += -this.currentTurnRate * deltaTime;

      // Apply rotations in order: world Z first, then banking
      this.mesh.rotation.set(0, this.bankAngle, 0);

      const myAxis = new THREE.Vector3(0, 0, 1);
      this.mesh.rotateOnWorldAxis(myAxis, this.worldZRotation);
    } else {
      console.log("auto stabilizing", this.mesh.rotation.y);
      // No steering input - stabilize
      this.targetYawRate = 0;

      // Auto-level banking when not steering
      const rollStabilizeRate = 4.0;
      this.bankAngle = THREE.MathUtils.lerp(
        this.bankAngle,
        0,
        rollStabilizeRate * deltaTime
      );
      // Auto-stabilize Z-axis turning (just stop turning, don't return to original heading)
      const turnStabilizeRate = 3.0;
      this.currentTurnRate = THREE.MathUtils.lerp(
        this.currentTurnRate,
        0,
        turnStabilizeRate * deltaTime
      );

      // Apply rotations in order: banking first, then world Z rotation
      this.mesh.rotation.set(0, this.bankAngle, 0);

      const myAxis = new THREE.Vector3(0, 0, 1);
      this.mesh.rotateOnWorldAxis(myAxis, this.worldZRotation);
    }

    // Calculate the forward direction vector based on current rotations
    this.forwardDirection = new THREE.Vector3(0, 1, 0); // Start with world Y (forward)
    this.forwardDirection.applyQuaternion(this.mesh.quaternion); // Apply current rotations
  }

  autoFlyForward(deltaTime) {
    if (!this.mesh || !this.forwardDirection) return;

    // Move in the direction the plane is facing
    const movement = this.forwardDirection
      .clone()
      .multiplyScalar(this.forwardSpeed * deltaTime);
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
    const cameraDistance = -20; // Very close to the plane
    const cameraHeight = 10; // Lower height to be more behind than above

    // Smooth camera rotation following with lag
    const rotationFollowRate = 2.0; // Slower = more lag
    const rotationAlpha = 1 - Math.exp(-rotationFollowRate * deltaTime);
    this.cameraRotation.slerp(this.mesh.quaternion, rotationAlpha);

    // Get plane's backward direction using smoothed rotation
    this._tempVector1.set(0, -1, 0); // Backward direction (opposite of forward Y)
    this._tempVector1.applyQuaternion(this.cameraRotation); // Apply smoothed rotation

    // Dynamic camera positioning - account for plane's internal offset
    this._tempVector2.copy(this._tempVector1).multiplyScalar(cameraDistance);
    this._tempVector2.z += cameraHeight; // Z is up in this coordinate system

    // Add offset to account for plane model position within group
    const planeOffset = new THREE.Vector3(0, 0, 5); // Compensate for object.position.set(0, 0, -5)
    planeOffset.applyQuaternion(this.cameraRotation);
    this._tempVector2.add(planeOffset);

    // Calculate target camera position - reuse temp vector
    this._tempVector1.copy(this.mesh.position).add(this._tempVector2);

    // Smooth camera following (time-based alpha)
    const followRate = 3;
    const followAlpha = 1 - Math.exp(-followRate * deltaTime);
    this.cameraPosition.lerp(this._tempVector1, followAlpha);
    this.camera.position.copy(this.cameraPosition);

    // Look ahead in the direction using smoothed rotation - reuse temp vector
    this._tempVector2.set(0, 1, 0); // Start with Y forward
    this._tempVector2.applyQuaternion(this.cameraRotation); // Apply smoothed rotation

    const lookAheadDistance =
      600 + this.forwardSpeed * 0.3 + Math.abs(this.currentTurnRate) * 20;
    this._tempVector1
      .copy(this.mesh.position)
      .add(this._tempVector2.multiplyScalar(lookAheadDistance));

    // Add subtle camera banking - tilt the camera slightly into turns
    if (Math.abs(this.bankAngle) > 0.1) {
      const bankTilt = this.bankAngle * 9.15; // Subtle camera tilt (15% of plane's bank)
      this.camera.rotation.y = THREE.MathUtils.lerp(
        this.camera.rotation.y,
        bankTilt,
        deltaTime * 3
      );
    } else {
      this.camera.rotation.y = THREE.MathUtils.lerp(
        this.camera.rotation.y,
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

  steerRight(deltaTime) {
    if (!this.mesh) return;
    this.steeringInput = 1;
    console.log("turning right");
  }

  steerLeft(deltaTime) {
    if (!this.mesh) return;
    this.steeringInput = -1;
    console.log("turning left");
  }

  stabilize(deltaTime) {
    this.steeringInput = 0;
    console.log("stabilize");
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
    this._tempVector1.set(0, 1, 0); // Y is forward in this coordinate system
    this._tempVector1.applyQuaternion(this.mesh.quaternion);

    // Bomb spawn position (center front of plane)
    const bombPosition = new THREE.Vector3(0, 40, 0); // Front center (Y is forward)

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
    this._tempVector1.set(0, 1, 0); // Y is forward in this coordinate system
    this._tempVector1.applyQuaternion(this.mesh.quaternion);

    // Laser spawn positions (from wings)
    const laserPositions = [
      new THREE.Vector3(-8, 40, -5), // Left wing (Y is forward, Z is up)
      new THREE.Vector3(8, 40, -5), // Right wing (Y is forward, Z is up)
    ];

    laserPositions.forEach((localPos) => {
      // Transform local position to world position - reuse temp vector
      this._tempVector2.copy(localPos);
      this._tempVector2.applyMatrix4(this.mesh.matrixWorld);

      this.createLaser(this._tempVector2, this._tempVector1);
    });
  }

  createLaser(position, direction) {
    const laserLength = 100; // Much longer lasers

    // Create shared geometries and materials only once
    if (!this._laserCoreGeometry) {
      this._laserCoreGeometry = new THREE.CylinderGeometry(
        0.5,
        0.5,
        laserLength,
        3
      ); // Reduced segments from 80 to 8
      this._laserGlowGeometry = new THREE.CylinderGeometry(
        3,
        3,
        laserLength,
        4
      );

      this._laserCoreMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff00, // Bright green
        transparent: true,
        opacity: 1.0,
        emissive: 0x00ff00,
        emissiveIntensity: 8.0, // Much higher for intense laser bloom
        metalness: 0,
        roughness: 1,
      });

      this._laserGlowMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.4,
        emissive: 0x00ff00,
        emissiveIntensity: 12.0, // Super bright for dramatic bloom effect
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

      // Check terrain collision using CollisionDetector
      let collision = null;
      if (this.collisionDetector) {
        collision = this.collisionDetector.checkLaserTerrainCollision(
          laser.position,
          laser.velocity,
        deltaTime
        );
      }

      if (collision) {
        console.log("🎯 Laser hit terrain!", collision.point);

        // Calculate reflection using CollisionDetector
        const reflectedVelocity = this.collisionDetector.calculateReflection(
          laser.velocity,
          collision.normal,
          0.8 // 80% energy retained
        );

        // Update laser properties
        laser.velocity = reflectedVelocity;
        laser.position.copy(collision.point);
        laser.bounces = (laser.bounces || 0) + 1;

        // Limit bounces to prevent infinite reflections
        if (laser.bounces > 3) {
          console.log("🔫💥 Laser expired after 3 bounces");
          this.scene.remove(laser.mesh);
          this.scene.remove(laser.glow);
          this.lasers.splice(i, 1);
          continue;
        }

        // Debug: Turn laser orange when it hits terrain
        laser.mesh.material.color.setHex(0xff6600); // Orange
        laser.mesh.material.emissive.setHex(0xff6600);
        laser.glow.material.color.setHex(0xff6600);
        laser.glow.material.emissive.setHex(0xff6600);

        // Add some visual effects for impact
        laser.mesh.material.emissiveIntensity = Math.min(
          15.0,
          laser.mesh.material.emissiveIntensity * 1.2
        );
        laser.glow.material.emissiveIntensity = Math.min(
          20.0,
          laser.glow.material.emissiveIntensity * 1.2
        );
      } else {
        // No collision, move normally
        const velocityStep = laser.velocity.clone().multiplyScalar(deltaTime);
        laser.position.add(velocityStep);
      }

      // Update laser and glow positions
      laser.mesh.position.copy(laser.position);
      laser.glow.position.copy(laser.position);

      // Check collision with enemies using CollisionDetector
      if (this.collisionDetector) {
        const enemyHits = this.collisionDetector.checkLaserEnemyCollision(
          laser.position,
          150
        );
        if (enemyHits.length > 0) {
          console.log(`🔫💥 Laser hit ${enemyHits.length} enemies!`);
          // Remove laser on hit
          this.scene.remove(laser.mesh);
          this.scene.remove(laser.glow);
          this.lasers.splice(i, 1);
          continue;
        }
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
      (this.mesh.position.y - this.startY) / 1000
    );
    return {
      speed: Math.round(this.forwardSpeed * 3.6), // Convert m/s to km/h
      altitude: Math.round(this.mesh.position.z), // Z is up in this coordinate system
      health: this.health,
      position: this.mesh.position,
      distance: Math.max(0, progressDistance),
    };
  }

  dispose() {
    // Dispose collision detector
    if (this.collisionDetector) {
      this.collisionDetector.dispose();
      this.collisionDetector = null;
    }

    // Clean up other resources
    if (this.mesh && this.scene) {
      this.scene.remove(this.mesh);
    }

    console.log("🗑️ Player disposed");
  }
}
