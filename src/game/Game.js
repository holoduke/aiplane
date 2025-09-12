import * as THREE from "three";
// import CSM from "three-csm"; // Disabled due to shader compatibility issues
import { ChunkTerrain } from "./ChunkTerrain.js";
import { Player } from "./Player.js";
import { InputManager } from "./InputManager.js";
import { HUD } from "./HUD.js";
import { Skybox } from "./Skybox.js";
import { LensFlare } from "./LensFlare.js";
import { TransparentWater } from "./TransparantWater.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export class Game {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.terrain = null;
    this.player = null;
    this.inputManager = null;
    this.hud = null;
    this.skybox = null;
    this.lensFlare = null;
    this.water = null;
    this.clock = new THREE.Clock();
    this.isRunning = false;
    this.gameStarted = false;
    this.menuCameraAngle = 0;
    this.water = null;

    // FPS Stats monitor
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);

    // Post-processing
    this.composer = null;
    this.bloomPass = null;

    // Static daylight - no day/night cycle
    this.dayTime = 0.5; // Fixed at noon for bright daylight
    this.daySpeed = 0; // No time progression
  }

  init() {
    this.setupRenderer();
    this.setupScene();

    this.setupCamera();
    this.setupPostProcessing();

    // Create terrain with camera reference
    this.terrain = new ChunkTerrain(this.scene, this.camera);

    this.player = new Player(this.scene, this.camera);
    this.hud = new HUD();

    // Create skybox before lighting
    this.skybox = new Skybox(this.scene, this.renderer);
    this.skybox.init();
    this.skybox.setDaytimeSky();

    // Setup lighting after all objects are created
    this.setupLighting();

    // Create lens flare system after lighting
    this.lensFlare = new LensFlare(this.scene, this.camera, this.renderer);
    console.log("✨ Lens flare system initialized");

    // Create reflective water system after lighting
    // this.water = new ReflectiveWater(this.scene, this.renderer, this.camera);
    // // Water will initialize async including loading normal map
    // this.water.init().then(() => {
    //   if (this.water.setClearWater) {
    //     this.water.setClearWater(); // Start with clear water
    //   }
    // });
    this.setupWater();

    // Don't create input manager until game starts

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  setupRenderer() {
    const canvas = document.getElementById("game-canvas");
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      logarithmicDepthBuffer: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000511, 1);

    // Enable shadow mapping
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.shadowMap.autoUpdate = true;

    // Better tone mapping and exposure
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    // Enable physically based rendering
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Performance optimizations
    this.renderer.sortObjects = true;
    this.renderer.powerPreference = "high-performance";

    // Additional performance settings
    this.renderer.info.autoReset = false; // Manually reset for better performance tracking
    this.renderer.capabilities.maxVertexUniforms = Math.min(
      this.renderer.capabilities.maxVertexUniforms,
      1024
    );
  }

  setupScene() {
    this.scene = new THREE.Scene();
    // Use exponential fog for smooth sky blending
    this.scene.fog = new THREE.FogExp2(0x87ceeb, 0.00008);
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      65, // Slightly wider field of view for better visibility
      window.innerWidth / window.innerHeight,
      0.1, // Closer near plane for better precision
      500000 // Even further with logarithmic depth buffer
    );
    this.camera.position.set(0, 200, 200); // Lower and forward position
    this.camera.lookAt(0, 0, 0);
  }

  setupPostProcessing() {
    // Create effect composer for post-processing
    this.composer = new EffectComposer(this.renderer);

    // Add render pass
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    // Add bloom pass for glowing effects
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // strength
      0.4, // radius
      0.85 // threshold
    );

    this.composer.addPass(this.bloomPass);

    console.log("✨ Bloom post-processing initialized");
  }

  setupWater() {
    const waterGeometry = new THREE.PlaneGeometry(20000, 20000);

    const water = new TransparentWater(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "waternormals.jpg",
        (tex) => {
          tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        }
      ),
      side: THREE.DoubleSide,
      distortionScale: 3.7,
      sunColor: 0x131818,
      baseColor: 0x232f2f,
      waterColor: 0x85888d,
      fog: this.scene.fog !== undefined,
    });

    water.rotation.x = -Math.PI / 2;
    water.position.y = 200; // Slightly lowered water level for better terrain visibility
    this.scene.add(water);
  }

  setupLighting() {
    // Ambient lighting for overall scene brightness
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(this.ambientLight);

    // Create multiple directional lights for better terrain lighting
    this.createMultiDirectionalLighting();

    console.log("🌞 Multi-directional lighting setup complete");

    // Update exponential fog to complement skybox
    this.scene.fog.color.setHex(0x87ceeb); // Sky blue fog to match skybox
    this.scene.fog.density = 0.00004; // Adjust density for smooth transition

    // Set renderer clear color to match sky
    this.renderer.setClearColor(0x87ceeb, 1); // Sky blue background
  }

  createMultiDirectionalLighting() {
    // Main sun light with proper shadow setup
    this.sunLight = new THREE.DirectionalLight(0xffaa44, 2.0);
    this.sunLight.position.set(-1000, 1500, -500);
    this.sunLight.castShadow = true;
    this.sunLight.shadowCameraVisible = true;

    // Configure shadow camera
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 12000;
    this.sunLight.shadow.camera.left = -4000;
    this.sunLight.shadow.camera.right = 4000;
    this.sunLight.shadow.camera.top = 4000;
    this.sunLight.shadow.camera.bottom = -4000;
    this.sunLight.shadow.bias = -0.0001;

    this.scene.add(this.sunLight);

    // Add bright emissive sun for bloom effect
    const sunGeometry = new THREE.SphereGeometry(100, 16, 16);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffff88, // Bright yellow
      emissive: 0xffff88, // Very bright emissive
      emissiveIntensity: 2.5, // High intensity for strong bloom
      transparent: true,
      opacity: 0.8,
    });
    this.sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    this.sunMesh.position.copy(this.sunLight.position);
    this.scene.add(this.sunMesh);

    // Add shadow camera helper for debugging
    this.shadowCameraHelper = new THREE.CameraHelper(
      this.sunLight.shadow.camera
    );
    //this.scene.add(this.shadowCameraHelper);

    // Secondary fill light - no shadows to reduce complexity
    this.fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
    this.fillLight.position.set(800, 1200, 1000);
    //this.scene.add(this.fillLight);

    // Rim light for atmospheric effect - no shadows
    this.rimLight = new THREE.DirectionalLight(0xff7733, 0.8);
    this.rimLight.position.set(500, 800, -1500);
    //this.scene.add(this.rimLight);
  }

  start() {
    this.isRunning = true;
    window.game = this;

    // Bind animate once to avoid creating new functions every frame
    this.boundAnimate = this.animate.bind(this);

    // Add shadow debug function
    window.debugShadows = () => {
      console.log("=== SHADOW SYSTEM DEBUG ===");
      console.log("Renderer shadow enabled:", this.renderer.shadowMap.enabled);
      console.log("Renderer shadow type:", this.renderer.shadowMap.type);
      console.log("Sun light casts shadows:", this.sunLight.castShadow);
      console.log("Sun light position:", this.sunLight.position);
      console.log("Shadow camera bounds:");
      console.log("  left:", this.sunLight.shadow.camera.left);
      console.log("  right:", this.sunLight.shadow.camera.right);
      console.log("  top:", this.sunLight.shadow.camera.top);
      console.log("  bottom:", this.sunLight.shadow.camera.bottom);
      console.log("  near:", this.sunLight.shadow.camera.near);
      console.log("  far:", this.sunLight.shadow.camera.far);
      console.log("Shadow map size:", this.sunLight.shadow.mapSize);
      console.log("Shadow bias:", this.sunLight.shadow.bias);
      console.log("Player position:", this.player.position);
      if (this.terrain && this.terrain.chunks) {
        let castingCount = 0;
        let receivingCount = 0;
        for (const [key, chunk] of this.terrain.chunks.entries()) {
          if (chunk.mesh.castShadow) castingCount++;
          if (chunk.mesh.receiveShadow) receivingCount++;
        }
        console.log(
          `Terrain chunks: ${this.terrain.chunks.size} total, ${castingCount} casting, ${receivingCount} receiving`
        );
      }
      console.log("=== END SHADOW DEBUG ===");
    };

    // Add skybox debug functions
    window.setSkyboxDaytime = () => {
      if (this.skybox) {
        this.skybox.setDaytimeSky();
        console.log("🌤️ Skybox set to daytime");
      }
    };

    window.setSkyboxSunset = () => {
      if (this.skybox) {
        this.skybox.setSunsetSky();
        console.log("🌅 Skybox set to sunset");
      }
    };

    window.setSkyboxStormy = () => {
      if (this.skybox) {
        this.skybox.setStormySky();
        console.log("⛈️ Skybox set to stormy");
      }
    };

    // Add lens flare debug functions
    window.toggleLensFlare = () => {
      if (this.lensFlare) {
        this.lensFlare.lensFlareGroup.visible =
          !this.lensFlare.lensFlareGroup.visible;
        console.log(
          `✨ Lens flare ${
            this.lensFlare.lensFlareGroup.visible ? "enabled" : "disabled"
          }`
        );
      }
    };

    // Add water debug functions
    window.setWaterClear = () => {
      if (this.water) {
        this.water.setClearWater();
      }
    };

    window.setWaterDeep = () => {
      if (this.water) {
        this.water.setDeepWater();
      }
    };

    window.setWaterTropical = () => {
      if (this.water) {
        this.water.setTropicalWater();
      }
    };

    window.toggleWater = () => {
      if (this.water && this.water.waterMesh) {
        this.water.waterMesh.visible = !this.water.waterMesh.visible;
        console.log(
          `🌊 Water ${this.water.waterMesh.visible ? "enabled" : "disabled"}`
        );
      }
    };

    this.boundAnimate();
  }

  startGame() {
    this.gameStarted = true;
    this.inputManager = new InputManager(this.player);
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;

    this.stats.begin();

    requestAnimationFrame(this.boundAnimate);

    const deltaTime = this.clock.getDelta();

    this.update(deltaTime);
    this.render();

    this.stats.end();
  }

  update(deltaTime) {
    // Always update player for animations
    this.player.update(deltaTime);

    if (!this.gameStarted) {
      this.updateMenuCamera(deltaTime);
      // Load initial terrain chunk for menu
      if (this.terrain) {
        // console.log(
        //   `🎬 Menu phase: updating terrain with player at (${this.player.position.x.toFixed(
        //     0
        //   )}, ${this.player.position.y.toFixed(
        //     0
        //   )}, ${this.player.position.z.toFixed(0)})`
        // );
        this.terrain.update(this.player.position);
      }

      // Update skybox in menu phase too
      if (this.skybox) {
        this.skybox.update(deltaTime, this.player.position);
      }

      // Update lens flare in menu phase too
      if (this.lensFlare && this.sunLight) {
        this.lensFlare.update(deltaTime, this.sunLight.position, this.terrain);
      }

      // Update water in menu phase too
      if (this.water) {
        //this.water.update(deltaTime, this.camera);
      }

      return;
    }

    if (this.inputManager) {
      this.inputManager.update(deltaTime);
    }

    this.terrain.update(this.player.position);
    this.hud.update(this.player);

    // Update skybox
    if (this.skybox) {
      this.skybox.update(deltaTime, this.player.position);
    }

    // Update lens flare
    if (this.lensFlare && this.sunLight) {
      this.lensFlare.update(deltaTime, this.sunLight.position, this.terrain);
    }

    // Update water
    if (this.water) {
      //this.water.update(deltaTime, this.camera);
    }

    // Static daylight - no updates needed
    this.updateShadowCamera();
  }

  updateMenuCamera(deltaTime) {
    this.menuCameraAngle += deltaTime * 0.2; // Slower rotation for more cinematic feel
    const radius = 800; // Much wider orbit
    const height = 600; // Higher up

    this.camera.position.set(
      Math.sin(this.menuCameraAngle) * radius,
      this.player.position.y + height,
      this.player.position.z + Math.cos(this.menuCameraAngle) * radius
    );

    this.camera.lookAt(this.player.position);
  }

  updateShadowCamera() {
    if (!this.sunLight || !this.player) return;

    // Get player position
    const playerX = this.player.position.x;
    const playerZ = this.player.position.z;

    this.sunLight.position.set(
      3000 + this.player.position.x,
      2000,
      2000 + this.player.position.z
    );

    // Update sun mesh position to match light
    if (this.sunMesh) {
      this.sunMesh.position.copy(this.sunLight.position);
    }

    // Update shadow camera target to follow player (keep same light direction)
    this.sunLight.target.position.set(playerX, 0, playerZ);
    this.sunLight.target.updateMatrixWorld();
    this.sunLight.updateMatrixWorld();

    // Update shadow camera helper if it exists
    if (this.shadowCameraHelper) {
      this.shadowCameraHelper.update();
    }
  }

  render() {
    // Manually reset renderer info for performance tracking
    this.renderer.info.reset();

    // Use post-processing composer for bloom effects
    if (this.composer) {
      this.composer.render();
    } else {
      // Fallback to direct rendering
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Update composer size for post-processing
    if (this.composer) {
      this.composer.setSize(window.innerWidth, window.innerHeight);
    }
  }
}
