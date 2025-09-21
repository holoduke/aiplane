import * as THREE from "three";

export class EnvironmentEffectsManager {
  constructor(scene) {
    this.scene = scene;
    this.flashEffects = [];

    // Shared geometries and materials for better performance
    this._flashGeometry = null;
    this._flashMaterial = null;

    console.log("✨ Environment Effects Manager initialized");
  }

  createTerrainCollisionFlash(position, normal = null) {
    const flashData = {
      position: position.clone(),
      normal: normal || new THREE.Vector3(0, 0, 1),
      creationTime: Date.now(),
      duration: 300, // 300ms flash duration
      effects: [],
    };

    // Create bright flash sphere - smaller and brighter
    const flashRadius = 3;
    if (!this._flashGeometry) {
      this._flashGeometry = new THREE.SphereGeometry(flashRadius, 4, 4);
      this._flashMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0,
        emissive: 0xffffff,
        emissiveIntensity: 15.0, // Much brighter flash
        metalness: 0,
        roughness: 1,
        blending: THREE.AdditiveBlending,
      });
    }

    const flash = new THREE.Mesh(
      this._flashGeometry,
      this._flashMaterial.clone()
    );
    flash.position.copy(position);
    // Slightly offset above terrain to ensure visibility
    flash.position.addScaledVector(flashData.normal, 2);
    flash.castShadow = false;
    flash.receiveShadow = false;
    flash.layers.set(1); // Put on layer 1 to exclude from shadows
    this.scene.add(flash);
    flashData.effects.push({ type: "flash", mesh: flash });

    // Add spark particles
    this.createSparkParticles(position, flashData.normal, flashData);

    this.flashEffects.push(flashData);

    console.log("⚡ Created terrain collision flash at:", position);
  }

  createSparkParticles(position, normal, flashData) {
    const sparkCount = 6; // Fewer sparks

    for (let i = 0; i < sparkCount; i++) {
      const sparkGeometry = new THREE.SphereGeometry(0.8, 4, 4); // Smaller sparks
      const sparkMaterial = new THREE.MeshStandardMaterial({
        color: 0xffff00, // Bright yellow sparks
        transparent: true,
        opacity: 1.0,
        emissive: 0xffff00,
        emissiveIntensity: 10.0, // Brighter sparks
        metalness: 0,
        roughness: 1,
        blending: THREE.AdditiveBlending,
      });

      const spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
      spark.position.copy(position);
      spark.castShadow = false;
      spark.receiveShadow = false;
      spark.layers.set(1); // Put on layer 1 to exclude from shadows

      // Random spark direction, biased towards the normal
      const randomDir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

      // Blend random direction with normal for realistic spark behavior
      const sparkDirection = normal
        .clone()
        .multiplyScalar(0.7)
        .add(randomDir.multiplyScalar(0.3))
        .normalize();

      spark.velocity = sparkDirection.multiplyScalar(80 + Math.random() * 60); // Slower sparks

      this.scene.add(spark);
      flashData.effects.push({
        type: "spark",
        mesh: spark,
        velocity: spark.velocity.clone(),
        life: 150 + Math.random() * 100, // Shorter lifetime 150-250ms
      });
    }
  }

  update(deltaTime) {
    const currentTime = Date.now();

    for (let i = this.flashEffects.length - 1; i >= 0; i--) {
      const flash = this.flashEffects[i];
      const age = currentTime - flash.creationTime;
      const progress = age / flash.duration;

      if (progress > 1.0) {
        // Remove expired flash
        flash.effects.forEach((effect) => {
          this.scene.remove(effect.mesh);
          if (
            effect.mesh.geometry &&
            effect.mesh.geometry !== this._flashGeometry
          ) {
            effect.mesh.geometry.dispose();
          }
          if (
            effect.mesh.material &&
            effect.mesh.material !== this._flashMaterial
          ) {
            effect.mesh.material.dispose();
          }
        });
        this.flashEffects.splice(i, 1);
        continue;
      }

      // Update flash effects
      flash.effects.forEach((effect) => {
        const mesh = effect.mesh;

        switch (effect.type) {
          case "flash":
            // Quick bright flash that fades
            const flashIntensity = Math.max(0, 1 - progress * 3); // Fast fade
            mesh.material.opacity = flashIntensity;
            mesh.material.emissiveIntensity = 15.0 * flashIntensity;
            mesh.scale.setScalar(1 + progress * 0.3); // Smaller expansion
            break;

          case "spark":
            // Moving sparks with gravity
            if (age <= effect.life) {
              const sparkProgress = age / effect.life;
              mesh.position.add(
                effect.velocity.clone().multiplyScalar(deltaTime)
              );

              // Apply gravity to sparks
              effect.velocity.z -= 150 * deltaTime;

              // Fade out sparks
              mesh.material.opacity = Math.max(0, 1 - sparkProgress);
              mesh.material.emissiveIntensity = Math.max(
                0,
                10.0 * (1 - sparkProgress)
              );
              mesh.scale.setScalar(1 - sparkProgress * 0.3); // Less scale change
            }
            break;
        }
      });
    }
  }

  dispose() {
    // Clean up all active effects
    this.flashEffects.forEach((flash) => {
      flash.effects.forEach((effect) => {
        this.scene.remove(effect.mesh);
        if (
          effect.mesh.geometry &&
          effect.mesh.geometry !== this._flashGeometry
        ) {
          effect.mesh.geometry.dispose();
        }
        if (
          effect.mesh.material &&
          effect.mesh.material !== this._flashMaterial
        ) {
          effect.mesh.material.dispose();
        }
      });
    });

    // Dispose shared resources
    if (this._flashGeometry) {
      this._flashGeometry.dispose();
      this._flashGeometry = null;
    }
    if (this._flashMaterial) {
      this._flashMaterial.dispose();
      this._flashMaterial = null;
    }

    this.flashEffects = [];
    this.scene = null;

    console.log("🗑️ Environment Effects Manager disposed");
  }
}
