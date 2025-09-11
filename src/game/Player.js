import * as THREE from "three";

export class Player {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.mesh = null;
    this.velocity = new THREE.Vector3();
    this.position = new THREE.Vector3(0, 300, -4000);
    this.rotation = new THREE.Euler();

    // Balanced speeds for better control
    this.forwardSpeed = 200; // 900 km/h base speed (250 m/s) - much more manageable
    this.maxSpeed = 200; // Maximum speed
    this.steerSpeed = 600; // Steering responsiveness
    this.maxSteerAngle = Math.PI / 3; // 60 degrees - higher turn angle

    // Enhanced flight dynamics with higher turn rates
    this.acceleration = 800; // How quickly speed changes
    this.currentTurnRate = 0; // Current turning rate
    this.maxTurnRate = 5.5; // Much higher turning rate for agile turns
    this.turnAcceleration = 6.0; // Faster turn acceleration for sharp turns
    this.turnDamping = 0.85; // Less damping for more responsive feel
    this.bankAngle = 0; // Current banking angle
    this.maxBankAngle = Math.PI / 5; // 90 degrees max bank - full banking
    this.pitchAngle = 0; // Current pitch angle
    this.maxPitchAngle = Math.PI / 5; // 36 degrees max pitch - slightly higher

    // Advanced flight characteristics
    this.angularVelocity = new THREE.Vector3(); // For realistic rotation
    this.thrust = 0.8; // Current thrust level
    this.targetThrust = 0.8;
    this.afterburner = false;

    // Smooth camera system
    this.cameraPosition = new THREE.Vector3(0, 1500, -1000);
    this.cameraTarget = new THREE.Vector3();
    this.cameraLookAt = new THREE.Vector3();
    this.cameraShake = new THREE.Vector3();

    // Status
    this.health = 100;
    this.distanceTraveled = 0;
    this.startZ = -4000;
    this.terrainFollowMode = false;
    this.targetAltitudeOffset = 400;

    // Effects
    this.exhaustParticles = [];
    this.trailParticles = [];

    this.createAdvancedJet();
  }

  createAdvancedJet() {
    const group = new THREE.Group();

    // Main fuselage - more detailed
    const fuselageGeometry = new THREE.ConeGeometry(12, 120, 8);
    const fuselageMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.4,
      metalness: 0.6,
    });
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial);
    fuselage.castShadow = true;
    fuselage.receiveShadow = true;
    fuselage.rotation.x = Math.PI / 2;
    fuselage.position.z = 10;
    group.add(fuselage);

    // Nose cone
    const noseGeometry = new THREE.ConeGeometry(8, 40, 8);
    const nose = new THREE.Mesh(noseGeometry, fuselageMaterial);
    nose.castShadow = true;
    nose.receiveShadow = true;
    nose.rotation.x = Math.PI / 2;
    nose.position.z = 50;
    group.add(nose);

    // Main wings - swept design
    const wingGeometry = new THREE.BufferGeometry();
    const wingVertices = new Float32Array([
      // Left wing
      -150, 0, -20, -40, 0, 20, -40, 8, 20, -150, 0, -20, -40, 8, 20, -150, 8,
      -20,
      // Right wing
      150, 0, -20, 40, 0, 20, 40, 8, 20, 150, 0, -20, 40, 8, 20, 150, 8, -20,
    ]);
    wingGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(wingVertices, 3)
    );
    wingGeometry.computeVertexNormals();

    const wingMaterial = new THREE.MeshStandardMaterial({
      color: 0x34495e,
      roughness: 0.3,
      metalness: 0.7,
    });
    const wings = new THREE.Mesh(wingGeometry, wingMaterial);
    wings.castShadow = true;
    wings.receiveShadow = true;
    group.add(wings);

    // Vertical stabilizer
    const tailGeometry = new THREE.BoxGeometry(4, 40, 20);
    const tail = new THREE.Mesh(tailGeometry, wingMaterial);
    tail.castShadow = true;
    tail.receiveShadow = true;
    tail.position.set(0, 15, -45);
    group.add(tail);

    // Horizontal stabilizers
    const hStabGeometry = new THREE.BoxGeometry(60, 4, 15);
    const leftHStab = new THREE.Mesh(hStabGeometry, wingMaterial);
    leftHStab.castShadow = true;
    leftHStab.receiveShadow = true;
    leftHStab.position.set(0, 5, -45);
    group.add(leftHStab);

    // Advanced cockpit
    const cockpitGeometry = new THREE.SphereGeometry(15, 16, 16);
    const cockpitMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a252f,
      transparent: true,
      opacity: 0.8,
      shininess: 120,
    });
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    cockpit.position.set(0, 8, 25);
    cockpit.scale.set(1, 0.7, 1.3);
    group.add(cockpit);

    // Twin engines
    const engineGeometry = new THREE.CylinderGeometry(8, 12, 35, 8);
    const engineMaterial = new THREE.MeshPhongMaterial({
      color: 0x1c1c1c,
      shininess: 90,
    });

    const leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    leftEngine.castShadow = true;
    leftEngine.receiveShadow = true;
    leftEngine.rotation.x = Math.PI / 2;
    leftEngine.position.set(-25, 0, -35);
    group.add(leftEngine);

    const rightEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    rightEngine.castShadow = true;
    rightEngine.receiveShadow = true;
    rightEngine.rotation.x = Math.PI / 2;
    rightEngine.position.set(25, 0, -35);
    group.add(rightEngine);

    // Engine exhausts with glow
    this.createEngineExhaust(group, -25, 0, -52);
    this.createEngineExhaust(group, 25, 0, -52);

    // Wing tip lights
    this.createWingTipLights(group);

    // Advanced particle systems
    this.createAdvancedExhaustSystem(group);
    this.createSonicBoomEffect(group);

    this.mesh = group;
    this.mesh.position.copy(this.position);
    this.scene.add(this.mesh);
  }

  createEngineExhaust(parent, x, y, z) {
    // Exhaust nozzle
    const exhaustGeometry = new THREE.CylinderGeometry(6, 8, 12, 8);
    const exhaustMaterial = new THREE.MeshPhongMaterial({
      color: 0x441100,
      emissive: 0x221100,
      shininess: 60,
    });
    const exhaust = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
    exhaust.castShadow = true;
    exhaust.receiveShadow = true;
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(x, y, z);
    parent.add(exhaust);

    // Afterburner glow
    const glowGeometry = new THREE.SphereGeometry(4, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0080ff,
      transparent: true,
      opacity: 0.9,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.set(x, y, z - 8);
    glow.userData.isExhaustGlow = true;
    parent.add(glow);
  }

  createWingTipLights(parent) {
    // Navigation lights
    const lightGeometry = new THREE.SphereGeometry(2, 8, 8);

    // Red light (left wing)
    const redLightMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const redLight = new THREE.Mesh(lightGeometry, redLightMaterial);
    redLight.position.set(-145, 0, -15);
    parent.add(redLight);

    // Green light (right wing)
    const greenLightMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const greenLight = new THREE.Mesh(lightGeometry, greenLightMaterial);
    greenLight.position.set(145, 0, -15);
    parent.add(greenLight);

    // Tail navigation lights - blinking
    const tailLightGeometry = new THREE.SphereGeometry(3, 8, 8);

    // Red tail light (left side)
    const redTailLightMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0x000000,
      transparent: true,
      opacity: 1.0,
    });
    this.redTailLight = new THREE.Mesh(tailLightGeometry, redTailLightMaterial);
    this.redTailLight.position.set(-3, 25, -50);
    parent.add(this.redTailLight);

    // Green tail light (right side)
    const greenTailLightMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      emissive: 0x000000,
      transparent: true,
      opacity: 1.0,
    });
    this.greenTailLight = new THREE.Mesh(
      tailLightGeometry,
      greenTailLightMaterial
    );
    this.greenTailLight.position.set(3, 25, -50);
    parent.add(this.greenTailLight);

    // Initialize blinking state
    this.lightBlinkTimer = 0;
    this.lightBlinkRate = 2.0; // Blinks per second
  }

  createAdvancedExhaustSystem(parent) {
    // High-performance exhaust particles
    const particleCount = 300;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const ages = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
      ages[i] = Math.random();
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocities, 3)
    );
    particles.setAttribute("age", new THREE.BufferAttribute(ages, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0080ff,
      size: 4,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    this.exhaustSystem = new THREE.Points(particles, particleMaterial);
    parent.add(this.exhaustSystem);
  }

  createSonicBoomEffect(parent) {
    // Shock wave rings for supersonic flight
    this.shockWaveRings = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.RingGeometry(20 + i * 10, 25 + i * 10, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x88ccff,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.z = -60 - i * 20;
      ring.visible = false;
      parent.add(ring);
      this.shockWaveRings.push(ring);
    }
  }

  update(deltaTime) {
    // Enhanced physics update
    this.updateFlightDynamics(deltaTime);

    // Only auto-fly if game has started
    if (window.game && window.game.gameStarted) {
      this.autoFlyForward(deltaTime);
      this.updateTerrainFollowing(deltaTime);
      this.clampPosition();
    }

    this.position.copy(this.mesh.position);
    this.updateAdvancedEffects(deltaTime);

    // Camera update
    if (window.game && window.game.gameStarted) {
      this.updateAdvancedCamera(deltaTime);
    }
  }

  updateFlightDynamics(deltaTime) {
    // Smooth thrust changes
    this.thrust = THREE.MathUtils.lerp(
      this.thrust,
      this.targetThrust,
      deltaTime * 2
    );

    // Update speed based on thrust
    const targetSpeed = this.forwardSpeed * this.thrust;
    const currentSpeed = this.velocity.length();
    const speedDiff = targetSpeed - currentSpeed;

    if (Math.abs(speedDiff) > 10) {
      const accel = Math.sign(speedDiff) * this.acceleration * deltaTime;
      this.forwardSpeed = Math.max(
        800,
        Math.min(this.maxSpeed, this.forwardSpeed + accel)
      );
    }

    // Apply angular damping for more realistic rotation
    this.angularVelocity.multiplyScalar(0.95);
    this.mesh.rotation.x += this.angularVelocity.x * deltaTime;
    this.mesh.rotation.y += this.angularVelocity.y * deltaTime;
    this.mesh.rotation.z += this.angularVelocity.z * deltaTime;
  }

  updateTerrainFollowing(deltaTime) {
    if (!this.terrainFollowMode) return;

    const terrainHeight = this.getTerrainHeightAtPosition();
    const targetAltitude = terrainHeight + this.targetAltitudeOffset;
    const currentAltitude = this.mesh.position.y;

    // Look ahead for smoother terrain following
    const lookAheadDistance = 300 + this.forwardSpeed * 0.1;
    const futureTerrainHeight = this.getTerrainHeightAtPosition(
      this.mesh.position.x,
      this.mesh.position.z + lookAheadDistance
    );
    const futureTargetAltitude =
      futureTerrainHeight + this.targetAltitudeOffset;

    const finalTargetAltitude = Math.max(targetAltitude, futureTargetAltitude);
    const altitudeDifference = finalTargetAltitude - currentAltitude;
    const adjustmentRate = 2.0;

    if (Math.abs(altitudeDifference) > 30) {
      this.mesh.position.y += altitudeDifference * adjustmentRate * deltaTime;

      // Dynamic pitch based on speed and altitude change
      const pitchAmount = Math.max(
        -Math.PI / 6,
        Math.min(Math.PI / 6, altitudeDifference * 0.01)
      );
      this.pitchAngle = THREE.MathUtils.lerp(
        this.pitchAngle,
        -pitchAmount,
        deltaTime * 4
      );
      this.mesh.rotation.x = this.pitchAngle;
    } else {
      this.pitchAngle = THREE.MathUtils.lerp(this.pitchAngle, 0, deltaTime * 3);
      this.mesh.rotation.x = this.pitchAngle;
    }
  }

  autoFlyForward(deltaTime) {
    // Move in the direction the plane is facing with enhanced realism
    const forward = new THREE.Vector3(0, 0, 1);
    forward.applyQuaternion(this.mesh.quaternion);

    const movement = forward.multiplyScalar(this.forwardSpeed * deltaTime);
    this.mesh.position.add(movement);

    this.distanceTraveled += this.forwardSpeed * deltaTime;

    // Add slight atmospheric turbulence
    if (Math.random() < 0.1) {
      const turbulence = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 1,
        0
      );
      this.mesh.position.add(turbulence);
    }
  }

  updateAdvancedEffects(deltaTime) {
    this.updateExhaustParticles(deltaTime);
    this.updateEngineGlow();
    this.updateSonicEffects();
    this.updateCameraShake(deltaTime);
    this.updateNavigationLights(deltaTime);
  }

  updateExhaustParticles(deltaTime) {
    if (!this.exhaustSystem) return;

    const positions = this.exhaustSystem.geometry.attributes.position.array;
    const velocities = this.exhaustSystem.geometry.attributes.velocity.array;
    const ages = this.exhaustSystem.geometry.attributes.age.array;

    for (let i = 0; i < positions.length / 3; i++) {
      const i3 = i * 3;

      // Update particle positions
      positions[i3] += velocities[i3] * deltaTime;
      positions[i3 + 1] += velocities[i3 + 1] * deltaTime;
      positions[i3 + 2] += velocities[i3 + 2] * deltaTime;

      ages[i] += deltaTime * 2;

      // Reset particles when they're too old
      if (ages[i] > 1 || Math.random() < 0.05) {
        // Spawn from engine exhausts
        const engineSide = Math.random() < 0.5 ? -25 : 25;
        positions[i3] = engineSide;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = -52;

        // High-speed exhaust velocity
        velocities[i3] = (Math.random() - 0.5) * 100;
        velocities[i3 + 1] = (Math.random() - 0.5) * 50;
        velocities[i3 + 2] = -(this.forwardSpeed * 0.8 + Math.random() * 400);

        ages[i] = 0;
      }
    }

    this.exhaustSystem.geometry.attributes.position.needsUpdate = true;
    this.exhaustSystem.geometry.attributes.age.needsUpdate = true;
  }

  updateEngineGlow() {
    // Dynamic engine glow based on thrust
    this.mesh.children.forEach((child) => {
      if (child.userData.isExhaustGlow) {
        const intensity = this.thrust;
        child.material.opacity = 0.4 + intensity * 0.6;

        // Color shift based on afterburner
        if (this.afterburner) {
          child.material.color.setHex(0xff4400);
        } else {
          child.material.color.setHex(0x0080ff);
        }
      }
    });
  }

  updateSonicEffects() {
    // Show shock waves when going fast enough
    const showShockWaves = this.forwardSpeed > 1500;

    this.shockWaveRings.forEach((ring, index) => {
      ring.visible = showShockWaves;
      if (showShockWaves) {
        ring.rotation.x += 0.1;
        ring.material.opacity =
          0.05 + Math.sin(Date.now() * 0.01 + index) * 0.03;
      }
    });
  }

  updateCameraShake(deltaTime) {
    // Speed-based camera shake
    const shakeIntensity = Math.min(1, this.forwardSpeed / 2000);
    this.cameraShake.set(
      (Math.random() - 0.5) * shakeIntensity * 5,
      (Math.random() - 0.5) * shakeIntensity * 3,
      (Math.random() - 0.5) * shakeIntensity * 2
    );
  }

  updateNavigationLights(deltaTime) {
    // Update blinking tail navigation lights
    if (!this.redTailLight || !this.greenTailLight) return;

    this.lightBlinkTimer += deltaTime;

    // Calculate blink state (on/off cycle)
    const blinkCycle = this.lightBlinkTimer * this.lightBlinkRate;
    const blinkPhase = blinkCycle % 1.0; // 0 to 1

    // Different blink patterns for red and green
    const redBlinkOn = blinkPhase < 0.5; // Red blinks first half of cycle
    const greenBlinkOn = blinkPhase >= 0.5; // Green blinks second half of cycle

    // Update light opacity for blinking effect
    this.redTailLight.material.opacity = redBlinkOn ? 1.0 : 0.1;
    this.greenTailLight.material.opacity = greenBlinkOn ? 1.0 : 0.1;

    // Add slight emissive glow when lights are on
    const redEmissive = redBlinkOn ? 0x330000 : 0x000000;
    const greenEmissive = greenBlinkOn ? 0x003300 : 0x000000;

    this.redTailLight.material.emissive.setHex(redEmissive);
    this.greenTailLight.material.emissive.setHex(greenEmissive);
  }

  updateAdvancedCamera(deltaTime) {
    // Enhanced dynamic camera with speed compensation
    const cameraDistance = 2000 + this.forwardSpeed * 0.2; // Further back at high speeds
    const cameraHeight = 1200; // Fixed height - no more height changes during banking

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

    // Add camera shake
    cameraOffset.add(this.cameraShake);

    const targetCameraPos = this.mesh.position.clone().add(cameraOffset);

    // Smooth camera following with speed compensation
    const followSpeed = 0.04 + this.forwardSpeed / 12000; // Slightly more responsive
    this.cameraPosition.lerp(targetCameraPos, followSpeed);
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

    // Smooth look-at with anticipation
    this.cameraLookAt.lerp(lookAtTarget, 0.08);
    this.camera.lookAt(this.cameraLookAt);
  }

  // Enhanced steering with proper flight dynamics
  steerLeft(deltaTime) {
    this.currentTurnRate = Math.min(
      this.maxTurnRate,
      this.currentTurnRate + this.turnAcceleration * deltaTime
    );

    // Add angular velocity for realistic rotation
    this.angularVelocity.y += this.currentTurnRate * deltaTime * 0.5;

    // Progressive banking
    this.bankAngle = THREE.MathUtils.lerp(
      this.bankAngle,
      -this.maxBankAngle,
      deltaTime * 4
    );
    this.mesh.rotation.z = this.bankAngle;
  }

  steerRight(deltaTime) {
    this.currentTurnRate = Math.min(
      this.maxTurnRate,
      this.currentTurnRate + this.turnAcceleration * deltaTime
    );

    this.angularVelocity.y -= this.currentTurnRate * deltaTime * 0.5;

    this.bankAngle = THREE.MathUtils.lerp(
      this.bankAngle,
      this.maxBankAngle,
      deltaTime * 4
    );
    this.mesh.rotation.z = this.bankAngle;
  }

  climbUp(deltaTime) {
    this.mesh.position.y += this.steerSpeed * deltaTime;
    this.angularVelocity.x -= 1.5 * deltaTime;
    this.pitchAngle = Math.max(
      -this.maxPitchAngle,
      this.pitchAngle - 3 * deltaTime
    );
    this.mesh.rotation.x = this.pitchAngle;
  }

  climbDown(deltaTime) {
    this.mesh.position.y -= this.steerSpeed * deltaTime;
    this.angularVelocity.x += 1.5 * deltaTime;
    this.pitchAngle = Math.min(
      this.maxPitchAngle,
      this.pitchAngle + 3 * deltaTime
    );
    this.mesh.rotation.x = this.pitchAngle;
  }

  stabilize(deltaTime) {
    // Gradual stabilization
    this.currentTurnRate *= this.turnDamping;

    // Return to level flight
    this.bankAngle = THREE.MathUtils.lerp(this.bankAngle, 0, deltaTime * 3);
    this.mesh.rotation.z = this.bankAngle;

    // Pitch stabilization
    this.pitchAngle = THREE.MathUtils.lerp(this.pitchAngle, 0, deltaTime * 2.5);
    this.mesh.rotation.x = this.pitchAngle;
  }

  // Afterburner control
  toggleAfterburner() {
    this.afterburner = !this.afterburner;
    this.targetThrust = this.afterburner ? 1.5 : 0.8;
  }

  clampPosition() {
    const terrainHeight = this.getTerrainHeightAtPosition();
    const minSafeAltitude = terrainHeight + 80;

    if (this.mesh.position.y < minSafeAltitude) {
      this.mesh.position.y = minSafeAltitude;
      this.angularVelocity.y = Math.max(0, this.angularVelocity.y);
    }

    // High altitude limit
    if (this.mesh.position.y > 3000) {
      this.mesh.position.y = 3000;
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
