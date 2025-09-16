import * as THREE from "three";
import { FlyingOrb } from "./FlyingOrb.js";
import { OrbSnake } from "./OrbSnake.js";
import { PurpleCylinder } from "./PurpleCylinder.js";
import { GroundTurret } from "./GroundTurret.js";

export class EnemyManager {
  constructor(scene, player, terrain) {
    this.scene = scene;
    this.player = player;
    this.terrain = terrain;
    this.enemies = [];

    // Spawn settings
    this.spawnDistance = 30000; // Distance ahead to spawn enemies (much further)
    this.spawnRadius = 1500; // How far left/right from flight path
    this.maxEnemies = 15; // Maximum enemies in world at once (to allow big waves)
    this.spawnTimer = 0;
    this.spawnInterval = 500; // Spawn every 6 seconds initially (much more frequent)
    this.lastSpawnZ = 0;

    // Difficulty scaling
    this.difficultyLevel = 1;
    this.enemiesKilled = 0;
    this.playerScore = 0;

    console.log("⚔️ EnemyManager initialized");
  }

  update(deltaTime) {
    // Update spawn timer
    this.spawnTimer += deltaTime * 1000;

    // Get player position
    const playerPos = this.player.mesh.position.clone();

    // Spawn new enemies if needed
    if (this.shouldSpawnEnemy(playerPos)) {
      this.spawnEnemy(playerPos);
    }

    // Update all enemies
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];

      // Update enemy
      enemy.update(deltaTime, playerPos);

      // Check if enemy is too far behind
      const distanceBehind = playerPos.z - enemy.getPosition().z;
      if (distanceBehind > 3000 || enemy.isDestroyed()) {
        if (enemy.isDestroyed()) {
          this.enemiesKilled++;
          this.playerScore += enemy.getPoints();
          console.log(`💀 Enemy destroyed! Score: +${enemy.getPoints()}`);
        }

        enemy.destroy();
        this.enemies.splice(i, 1);
        continue;
      }

      // Check collision with player
      if (enemy.checkCollision(playerPos, 80)) {
        // OrbSnake causes instant death
        if (enemy.constructor.name === "OrbSnake") {
          console.log("🐍💀 Player hit orb snake - INSTANT DEATH!");
          this.player.takeDamage(9999); // Instant death
        } else if (enemy.canAttack()) {
          const damage = enemy.attack();
          this.player.takeDamage(damage);
          console.log(`💥 Player hit for ${damage} damage!`);
        }
      }
    }

    // Update difficulty
    this.updateDifficulty();
  }

  shouldSpawnEnemy(playerPos) {
    // Don't spawn if we have too many enemies
    if (this.enemies.length >= this.maxEnemies) {
      return false;
    }

    // Don't spawn too frequently
    if (this.spawnTimer < this.spawnInterval) {
      return false;
    }

    // Don't spawn too close to last spawn point
    if (playerPos.z - this.lastSpawnZ < 2000) {
      return false;
    }

    return true;
  }

  spawnEnemy(playerPos) {
    // Reset spawn timer
    this.spawnTimer = 0;

    // Calculate spawn position ahead of player
    const spawnDistance = this.spawnDistance + Math.random() * 2000; // 8-10km ahead
    const spawnZ = playerPos.z + spawnDistance;

    // Decide if this should be a wave spawn (30% chance)
    const isWaveSpawn = Math.random() < 0.3;
    const enemiesToSpawn = isWaveSpawn ? 5 + Math.floor(Math.random() * 6) : 1; // 5-10 enemies or just 1

    console.log(
      `👹 Spawning ${enemiesToSpawn} enemies${isWaveSpawn ? " (WAVE!)" : ""}`
    );

    for (let i = 0; i < enemiesToSpawn; i++) {
      // Random position left/right of flight path
      const sideOffset = (Math.random() - 0.5) * this.spawnRadius * 2;
      const spawnX = playerPos.x + sideOffset;

      // Spawn at similar height to player with some variation
      const spawnY = playerPos.y + (Math.random() - 0.5) * 200;

      // For wave spawns, spread them out a bit more
      const waveSpread = isWaveSpawn ? (i - enemiesToSpawn / 2) * 400 : 0;
      const spawnPosition = new THREE.Vector3(
        spawnX + waveSpread,
        spawnY,
        spawnZ + (Math.random() - 0.5) * 1000
      );

      // Create enemy based on chance
      let enemy;

      const randEnemy = Math.random();
      if (randEnemy < 0.4) {
        // 40% chance for orb snake (deadly enemy)
        const snakeLength = 15 + Math.floor(Math.random() * 10); // 15-24 segments (much longer)
        enemy = new OrbSnake(this.scene, spawnPosition, snakeLength);
        // } else if (randEnemy < 0.65) {
        //   // 25% chance for purple cylinder
        //   enemy = new PurpleCylinder(this.scene, spawnPosition);
      } else if (randEnemy < 0.85) {
        // 45% chance for ground turret
        // Spawn turrets closer to the side path for ground placement
        const groundPos = spawnPosition.clone();
        groundPos.y = 0; // Ground level
        enemy = new GroundTurret(this.scene, groundPos, this.terrain);
      } else {
        // 15% chance for single flying orb
        enemy = new FlyingOrb(this.scene, spawnPosition);
      }

      this.enemies.push(enemy);

      console.log(
        `👹 Enemy ${
          i + 1
        }/${enemiesToSpawn} spawned at (${spawnPosition.x.toFixed(
          0
        )}, ${spawnPosition.y.toFixed(0)}, ${spawnPosition.z.toFixed(0)})`
      );
    }

    this.lastSpawnZ = spawnZ;
  }

  updateDifficulty() {
    // Increase difficulty based on enemies killed
    const newDifficultyLevel = Math.floor(this.enemiesKilled / 5) + 1;

    if (newDifficultyLevel > this.difficultyLevel) {
      this.difficultyLevel = newDifficultyLevel;

      // Adjust spawn settings
      this.maxEnemies = Math.min(20, 15 + Math.floor(this.difficultyLevel)); // More enemies at higher difficulty
      this.spawnInterval = Math.max(2000, 6000 - this.difficultyLevel * 400); // Faster spawning as difficulty increases

      console.log(`📈 Difficulty increased to level ${this.difficultyLevel}`);
    }
  }

  // Method to damage enemies (called from weapon systems)
  damageEnemiesInArea(position, radius, damage) {
    const hits = [];

    console.log(
      `🎯 Checking weapon hit at position:`,
      position,
      `radius: ${radius}, damage: ${damage}`
    );
    console.log(`🎯 Number of enemies to check: ${this.enemies.length}`);

    for (const enemy of this.enemies) {
      if (enemy.isDestroyed()) continue;

      const enemyPos = enemy.getPosition();
      const distance = enemyPos.distanceTo(position);

      console.log(`🎯 Enemy at:`, enemyPos, `distance: ${distance.toFixed(2)}`);

      if (distance <= radius) {
        console.log(`💥 HIT! Enemy hit by weapon!`);
        const destroyed = enemy.takeDamage(damage);
        hits.push({
          enemy: enemy,
          destroyed: destroyed,
          points: destroyed ? enemy.getPoints() : 0,
        });

        // Create visual hit effect
        this.createHitEffect(enemyPos);
      }
    }

    console.log(`🎯 Total hits: ${hits.length}`);
    return hits;
  }

  createHitEffect(position) {
    // Create bright explosion effect at hit location
    const hitEffect = new THREE.Group();

    // Main flash
    const flashGeometry = new THREE.SphereGeometry(15, 8, 8);
    const flashMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });

    const flash = new THREE.Mesh(flashGeometry, flashMaterial);
    hitEffect.add(flash);

    // Spark particles
    for (let i = 0; i < 8; i++) {
      const sparkGeometry = new THREE.SphereGeometry(2, 4, 4);
      const sparkMaterial = new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.8,
      });

      const spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
      spark.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );

      hitEffect.add(spark);
    }

    hitEffect.position.copy(position);
    this.scene.add(hitEffect);

    // Animate and remove effect
    let animationTime = 0;
    const animateEffect = () => {
      animationTime += 16; // ~60fps

      const progress = animationTime / 300; // 300ms effect
      flash.material.opacity = 1 - progress;
      flash.scale.setScalar(1 + progress * 2);

      hitEffect.children.forEach((child, index) => {
        if (index > 0) {
          // Skip the main flash
          child.material.opacity = 1 - progress;
          child.position.multiplyScalar(1.05); // Expand outward
        }
      });

      if (progress < 1) {
        requestAnimationFrame(animateEffect);
      } else {
        this.scene.remove(hitEffect);
      }
    };

    animateEffect();
  }

  getEnemyCount() {
    return this.enemies.length;
  }

  getDifficultyLevel() {
    return this.difficultyLevel;
  }

  getKillCount() {
    return this.enemiesKilled;
  }

  getScore() {
    return this.playerScore;
  }

  // Clean up all enemies
  cleanup() {
    for (const enemy of this.enemies) {
      enemy.destroy();
    }
    this.enemies = [];
    console.log("🧹 EnemyManager cleaned up");
  }
}
