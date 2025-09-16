import * as THREE from "three";

/**
 * Hierarchical Quadtree Terrain Node
 * Each node can either be a leaf (with mesh) or have 4 children
 */
class TerrainNode {
  constructor(x, z, size, level, parent = null) {
    this.x = x; // World X coordinate
    this.z = z; // World Z coordinate
    this.size = size; // Size of this node
    this.level = level; // LOD level (0 = highest detail)
    this.parent = parent; // Parent node
    this.children = null; // null = leaf, array = subdivided
    this.mesh = null; // Three.js mesh for this node
    this.shouldRender = false; // Whether this node should be rendered
    this.isLoading = false; // Whether mesh is being generated
    this.lastUsed = Date.now(); // For LRU cache management
    this.priority = 0; // Generation priority

    // Bounds for fast intersection tests
    this.bounds = {
      minX: x,
      maxX: x + size,
      minZ: z,
      maxZ: z + size,
    };
  }

  /**
   * Check if this node contains a point
   */
  contains(x, z) {
    return (
      x >= this.bounds.minX &&
      x < this.bounds.maxX &&
      z >= this.bounds.minZ &&
      z < this.bounds.maxZ
    );
  }

  /**
   * Check if this node intersects a bounding box
   */
  intersects(minX, minZ, maxX, maxZ) {
    return !(
      this.bounds.maxX <= minX ||
      this.bounds.minX >= maxX ||
      this.bounds.maxZ <= minZ ||
      this.bounds.minZ >= maxZ
    );
  }

  /**
   * Get distance from center of node to a point
   */
  distanceTo(x, z) {
    const centerX = this.x + this.size * 0.5;
    const centerZ = this.z + this.size * 0.5;
    return Math.sqrt((centerX - x) ** 2 + (centerZ - z) ** 2);
  }

  /**
   * Subdivide this node into 4 children
   */
  subdivide() {
    if (this.children) return; // Already subdivided

    const halfSize = this.size * 0.5;
    this.children = [
      new TerrainNode(this.x, this.z, halfSize, this.level + 1, this), // NW
      new TerrainNode(
        this.x + halfSize,
        this.z,
        halfSize,
        this.level + 1,
        this
      ), // NE
      new TerrainNode(
        this.x,
        this.z + halfSize,
        halfSize,
        this.level + 1,
        this
      ), // SW
      new TerrainNode(
        this.x + halfSize,
        this.z + halfSize,
        halfSize,
        this.level + 1,
        this
      ), // SE
    ];

    // If this node had a mesh, we'll keep it until children are ready (seamless transition)
    // The parent mesh will fade out as children fade in
    if (this.mesh) {
      this.transitionState = "subdividing";
      this.transitionProgress = 0;
    }
    this.shouldRender = false;
  }

  /**
   * Merge children back into this node (if appropriate)
   */
  merge() {
    if (!this.children) return;

    // Clean up children meshes
    for (const child of this.children) {
      if (child.mesh) {
        child.mesh.parent?.remove(child.mesh);
        child.mesh.geometry?.dispose();
        child.mesh = null;
      }
      if (child.children) {
        child.merge();
      }
    }

    this.children = null;
    this.shouldRender = true;

    // Start transition if we have a mesh
    if (this.mesh) {
      this.transitionState = "merging";
      this.transitionProgress = 0;
      this.mesh.visible = true;
    }
  }

  /**
   * Check if this is a leaf node (no children)
   */
  isLeaf() {
    return this.children === null;
  }

  /**
   * Get all leaf nodes in this subtree
   */
  getLeaves(result = []) {
    if (this.isLeaf()) {
      result.push(this);
    } else {
      for (const child of this.children) {
        child.getLeaves(result);
      }
    }
    return result;
  }
}

/**
 * Memory Pool for efficient object reuse
 */
class TerrainPool {
  constructor() {
    this.geometryCache = new Map(); // Cached geometries by resolution
    this.materialCache = new Map(); // Shared materials
    this.meshPool = []; // Reusable mesh objects
    this.maxPoolSize = 1000; // Maximum pool size
  }

  /**
   * Get cached geometry for a given resolution
   */
  getGeometry(resolution) {
    const key = `geo_${resolution}`;
    if (!this.geometryCache.has(key)) {
      const size = 1; // Normalized size, we'll scale with mesh
      const geometry = new THREE.PlaneGeometry(
        size,
        size,
        resolution - 1,
        resolution - 1
      );
      geometry.rotateX(-Math.PI / 2); // Rotate to lie flat
      this.geometryCache.set(key, geometry);
    }
    return this.geometryCache.get(key);
  }

  /**
   * Get cached material
   */
  getMaterial() {
    const key = "terrain_material";
    if (!this.materialCache.has(key)) {
      const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        side: THREE.FrontSide,
        roughness: 0.8,
        metalness: 0.1,
      });
      this.materialCache.set(key, material);
    }
    return this.materialCache.get(key);
  }

  /**
   * Acquire a mesh from pool or create new one
   */
  acquireMesh() {
    if (this.meshPool.length > 0) {
      return this.meshPool.pop();
    }
    return new THREE.Mesh();
  }

  /**
   * Return mesh to pool
   */
  releaseMesh(mesh) {
    if (this.meshPool.length < this.maxPoolSize) {
      // Clean up mesh
      mesh.geometry = null;
      mesh.material = null;
      mesh.parent?.remove(mesh);
      mesh.position.set(0, 0, 0);
      mesh.scale.set(1, 1, 1);
      mesh.visible = true;

      this.meshPool.push(mesh);
    }
  }

  /**
   * Cleanup all cached resources
   */
  dispose() {
    for (const geometry of this.geometryCache.values()) {
      geometry.dispose();
    }
    for (const material of this.materialCache.values()) {
      material.dispose();
    }
    this.geometryCache.clear();
    this.materialCache.clear();
    this.meshPool.length = 0;
  }
}

/**
 * Flight prediction system for preemptive loading
 */
class FlightPredictor {
  constructor() {
    this.history = [];
    this.maxHistorySize = 10;
  }

  /**
   * Update with current player state
   */
  update(position, velocity, forwardSpeed) {
    this.history.push({
      position: position.clone(),
      velocity: velocity.clone(),
      forwardSpeed,
      time: Date.now(),
    });

    if (this.history.length > this.maxHistorySize) {
      this.history.shift();
    }
  }

  /**
   * Predict future positions
   */
  predictPath(seconds = 3) {
    if (this.history.length < 2) return [];

    const latest = this.history[this.history.length - 1];
    const velocity = latest.velocity;
    const predictions = [];

    // Simple linear prediction - could be enhanced with acceleration
    for (let t = 0.2; t <= seconds; t += 0.2) {
      const futurePos = latest.position
        .clone()
        .add(velocity.clone().multiplyScalar(t));
      predictions.push({
        position: futurePos,
        time: t,
        confidence: Math.max(0, 1 - t / seconds), // Confidence decreases over time
      });
    }

    return predictions;
  }

  /**
   * Detect if player is turning
   */
  isTurning() {
    if (this.history.length < 3) return false;

    const recent = this.history.slice(-3);
    let totalAngleChange = 0;

    for (let i = 1; i < recent.length; i++) {
      const v1 = recent[i - 1].velocity.clone().normalize();
      const v2 = recent[i].velocity.clone().normalize();
      const angle = Math.acos(Math.max(-1, Math.min(1, v1.dot(v2))));
      totalAngleChange += angle;
    }

    return totalAngleChange > 0.1; // Threshold for turning detection
  }
}

/**
 * Hierarchical Quadtree Terrain System
 */
export class NewChunkTerrain {
  constructor(scene, camera = null) {
    this.scene = scene;
    this.camera = camera;

    // Root node - will expand dynamically for infinite terrain
    this.rootSize = 8192; // Initial 8km x 8km root node
    this.root = new TerrainNode(
      -this.rootSize / 2,
      -this.rootSize / 2,
      this.rootSize,
      0
    );
    
    // Track root expansions for infinite terrain
    this.rootExpansions = 0;

    // Configuration
    this.maxLevel = 6; // Maximum subdivision levels
    this.minNodeSize = 128; // Smaller minimum node size for more detail
    this.maxDistance = 8000; // Reasonable render distance
    this.lodDistances = [400, 800, 1600, 3200, 6400]; // More aggressive LOD distances
    this.resolutions = [64, 48, 32, 24, 16, 12]; // Geometry resolution for each level

    // Systems
    this.pool = new TerrainPool();
    this.predictor = new FlightPredictor();

    // Frustum for camera culling
    this.frustum = new THREE.Frustum();
    this.cameraMatrix = new THREE.Matrix4();

    // Generation queue with priority
    this.generateQueue = [];
    this.maxGenerationsPerFrame = 3;

    // Heightmap data
    this.heightData = [];
    this.heightmapTileSize = 5120;
    this.terrainReady = false;

    // Performance tracking
    this.stats = {
      nodesRendered: 0,
      nodesGenerated: 0,
      frameTime: 0,
    };

    this.init();
  }

  async init() {
    console.log("🌄 Initializing New Hierarchical Terrain System...");

    // Load heightmap data with timeout
    try {
      await Promise.race([
        this.loadHeightmaps(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Heightmap load timeout")), 5000)
        ),
      ]);
    } catch (error) {
      console.warn("⚠️ Heightmap loading failed or timed out:", error.message);
      console.log("🔄 Continuing with flat terrain...");
    }

    this.terrainReady = true;
    console.log("🌄 New Hierarchical Terrain System initialized successfully");
    console.log("Root node bounds:", this.root.bounds);
    console.log("Max distance:", this.maxDistance);
  }

  async loadHeightmaps() {
    console.log("🗻 Attempting to load heightmap...");
    try {
      const response = await fetch("/heightmaps/heightmap33.jpg");
      if (!response.ok) {
        console.warn(
          "⚠️ No heightmap found (status:",
          response.status,
          "), using flat terrain"
        );
        return;
      }
      console.log("✅ Heightmap response OK, processing...");

      const blob = await response.blob();
      const img = new Image();

      return new Promise((resolve) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          this.heightData[0] = {
            data: new Uint8Array(imageData.data.length / 4),
            metadata: { size: canvas.width, maxHeight: 600 },
          };

          // Extract red channel for height data
          for (let i = 0; i < imageData.data.length; i += 4) {
            this.heightData[0].data[i / 4] = imageData.data[i];
          }

          console.log("🗻 Heightmap loaded:", canvas.width, "x", canvas.height);
          resolve();
        };

        img.src = URL.createObjectURL(blob);
      });
    } catch (error) {
      console.warn("⚠️ Failed to load heightmap:", error);
      console.log("🔄 Proceeding with flat terrain...");
    }
  }

  /**
   * Main update function called every frame
   */
  update(playerPosition) {
    if (!this.terrainReady) {
      console.log("⏳ Terrain not ready yet...");
      return;
    }

    const startTime = performance.now();

    const playerWorld = this.toVector3(playerPosition);
    // Debug player position occasionally
    if (!this._debugCounter) this._debugCounter = 0;
    this._debugCounter++;
    if (this._debugCounter % 60 === 0) {
      // Every 60 frames
      console.log(
        "🎮 Player position:",
        playerWorld.x.toFixed(0),
        playerWorld.z.toFixed(0)
      );
      
      // Debug root boundaries
      const margin = this.rootSize * 0.1; // 10% margin
      console.log(
        "🌍 Root bounds:",
        this.root.x.toFixed(0),
        "to", 
        (this.root.x + this.root.size).toFixed(0),
        "x",
        this.root.z.toFixed(0),
        "to",
        (this.root.z + this.root.size).toFixed(0)
      );
    }
    
    // Check if we need to expand the root node for infinite terrain
    this.checkRootExpansion(playerWorld);

    // Update flight predictor
    if (window.game?.player) {
      const player = window.game.player;
      const velocity = new THREE.Vector3();
      if (this.lastPlayerPos) {
        velocity.subVectors(playerWorld, this.lastPlayerPos);
      }
      this.predictor.update(playerWorld, velocity, player.forwardSpeed);
      this.lastPlayerPos = playerWorld.clone();
    }

    // Update camera frustum for culling
    if (this.camera) {
      this.cameraMatrix.multiplyMatrices(
        this.camera.projectionMatrix,
        this.camera.matrixWorldInverse
      );
      this.frustum.setFromProjectionMatrix(this.cameraMatrix);
    }

    // Traverse tree and determine what should be rendered
    if (this._debugCounter % 60 === 0) {
      console.log("🌳 Updating node visibility...");
    }
    this.updateNodeVisibility(this.root, playerWorld);

    // Process generation queue
    this.processGenerationQueue();

    // Update transitions for seamless LOD changes
    this.updateTransitions();

    // Update stats
    this.stats.frameTime = performance.now() - startTime;
  }

  /**
   * Check if we need to expand the root node for infinite terrain
   */
  checkRootExpansion(playerPos) {
    const margin = this.rootSize * 0.15; // 15% margin before expansion
    const rootBounds = {
      minX: this.root.x - margin,
      maxX: this.root.x + this.root.size + margin,
      minZ: this.root.z - margin,
      maxZ: this.root.z + this.root.size + margin
    };
    
    // Check if player is approaching the boundaries
    if (playerPos.x < rootBounds.minX || playerPos.x > rootBounds.maxX ||
        playerPos.z < rootBounds.minZ || playerPos.z > rootBounds.maxZ) {
      
      console.log("🚀 EXPANDING ROOT NODE FOR INFINITE TERRAIN!");
      console.log("Player at:", playerPos.x.toFixed(0), playerPos.z.toFixed(0));
      console.log("Root bounds:", rootBounds.minX.toFixed(0), rootBounds.maxX.toFixed(0), 
                  rootBounds.minZ.toFixed(0), rootBounds.maxZ.toFixed(0));
      
      this.expandRoot(playerPos);
    }
  }
  
  /**
   * Expand the root node to encompass the player's new position
   */
  expandRoot(playerPos) {
    // Calculate new root size that will contain the player with room to spare
    const expandFactor = 2; // Double the size
    const newSize = this.rootSize * expandFactor;
    
    // Calculate new root position to center around player's area
    const newX = Math.floor((playerPos.x - newSize * 0.5) / 1024) * 1024; // Align to grid
    const newZ = Math.floor((playerPos.z - newSize * 0.5) / 1024) * 1024;
    
    console.log("📈 Expanding from", this.rootSize, "to", newSize);
    console.log("📍 New root position:", newX, newZ);
    
    // Create new root node
    const oldRoot = this.root;
    this.root = new TerrainNode(newX, newZ, newSize, 0);
    this.rootSize = newSize;
    this.rootExpansions++;
    
    // Try to preserve existing terrain by transplanting it as a child
    // This is complex, so for now we'll just clear and regenerate
    this.clearAllTerrain();
    
    console.log("✨ Root expanded! Expansions:", this.rootExpansions);
  }
  
  /**
   * Clear all existing terrain (called during root expansion)
   */
  clearAllTerrain() {
    this.stats.renderedNodes = 0;
    this.stats.loadedChunks = 0;
    this.generationQueue.clear();
    
    // Return all meshes to pool
    this.returnNodeMeshesToPool(this.root);
  }
  
  /**
   * Recursively return all meshes in a node tree to the pool
   */
  returnNodeMeshesToPool(node) {
    if (node.mesh) {
      this.pool.returnMesh(node.mesh);
      node.mesh = null;
    }
    
    if (node.children) {
      for (const child of node.children) {
        this.returnNodeMeshesToPool(child);
      }
      node.children = null;
    }
    
    node.shouldRender = false;
  }

  /**
   * Recursively update node visibility and subdivision
   */
  updateNodeVisibility(node, playerPos) {
    const distance = node.distanceTo(playerPos.x, playerPos.z);

    // Debug root node
    if (node === this.root) {
      console.log(
        "🌳 Root node - distance:",
        distance.toFixed(0),
        "bounds:",
        node.bounds,
        "shouldRender:",
        node.shouldRender
      );
    }

    // Too far away - don't render or subdivide
    if (distance > this.maxDistance) {
      node.shouldRender = false;
      if (!node.isLeaf()) {
        // Consider merging distant nodes
        this.considerMerging(node);
      }
      if (node === this.root) {
        console.log("❌ Root node too far away!");
      }
      return;
    }

    // Frustum culling - skip nodes outside camera view
    if (this.camera && this.frustum) {
      const box = new THREE.Box3(
        new THREE.Vector3(node.bounds.minX, -100, node.bounds.minZ),
        new THREE.Vector3(node.bounds.maxX, 600, node.bounds.maxZ)
      );
      if (!this.frustum.intersectsBox(box)) {
        node.shouldRender = false;
        // Don't subdivide invisible nodes
        return;
      }
    }

    // Determine appropriate level for this distance
    let targetLevel = this.maxLevel;
    for (let i = 0; i < this.lodDistances.length; i++) {
      if (distance <= this.lodDistances[i]) {
        targetLevel = i;
        break;
      }
    }

    // Should this node subdivide?
    const shouldSubdivide =
      node.level < targetLevel &&
      node.size > this.minNodeSize &&
      node.level < this.maxLevel;

    if (shouldSubdivide && node.isLeaf()) {
      // Subdivide this node
      node.subdivide();

      // Queue children for generation
      for (const child of node.children) {
        this.queueGeneration(child, distance);
      }
    } else if (!shouldSubdivide && !node.isLeaf()) {
      // Consider merging
      this.considerMerging(node);
    }

    if (node.isLeaf()) {
      // This is a leaf node - it should render
      node.shouldRender = true;
      node.lastUsed = Date.now();

      // Debug leaf nodes
      if (distance < 2000) {
        console.log(
          "🍃 Leaf node level",
          node.level,
          "distance:",
          distance.toFixed(0),
          "has mesh:",
          !!node.mesh,
          "loading:",
          node.isLoading
        );
      }

      // Queue for generation if needed
      if (!node.mesh && !node.isLoading) {
        console.log(
          "🎯 Queuing generation for node level",
          node.level,
          "at distance",
          distance.toFixed(0)
        );
        this.queueGeneration(node, distance);
      }
    } else {
      // Not a leaf - recurse to children
      node.shouldRender = false;
      for (const child of node.children) {
        this.updateNodeVisibility(child, playerPos);
      }
    }
  }

  /**
   * Consider merging a node's children back into the parent
   */
  considerMerging(node) {
    if (node.isLeaf()) return;

    // Check if all children are far enough to merge
    let canMerge = true;
    for (const child of node.children) {
      if (child.shouldRender || child.isLoading || !child.isLeaf()) {
        canMerge = false;
        break;
      }
    }

    if (canMerge) {
      // Merge children back into parent
      node.merge();
      // Queue parent for generation if needed
      if (!node.mesh && !node.isLoading) {
        this.queueGeneration(
          node,
          node.distanceTo(this.lastPlayerPos.x, this.lastPlayerPos.z)
        );
      }
    }
  }

  /**
   * Add node to generation queue with priority
   */
  queueGeneration(node, distance) {
    if (node.isLoading) return;

    // Calculate priority (lower distance = higher priority)
    node.priority = distance;

    // Add to queue if not already there
    const existing = this.generateQueue.find((item) => item === node);
    if (!existing) {
      this.generateQueue.push(node);
      this.generateQueue.sort((a, b) => a.priority - b.priority);
    }
  }

  /**
   * Process the generation queue
   */
  processGenerationQueue() {
    let generated = 0;

    while (
      generated < this.maxGenerationsPerFrame &&
      this.generateQueue.length > 0
    ) {
      const node = this.generateQueue.shift();

      if (node.shouldRender && !node.mesh && !node.isLoading) {
        this.generateNodeMesh(node);
        generated++;
      }
    }
  }

  /**
   * Generate mesh for a terrain node
   */
  generateNodeMesh(node) {
    console.log(
      "🔨 Generating mesh for node level",
      node.level,
      "at",
      node.x,
      node.z,
      "size",
      node.size
    );
    node.isLoading = true;

    const resolution =
      this.resolutions[Math.min(node.level, this.resolutions.length - 1)];
    const geometry = this.pool.getGeometry(resolution).clone();
    console.log("📐 Using resolution", resolution, "for level", node.level);

    // Modify geometry for this specific node
    this.applyHeightToGeometry(geometry, node, resolution);

    // Create mesh
    const material = this.pool.getMaterial();
    const mesh = this.pool.acquireMesh();
    mesh.geometry = geometry;
    mesh.material = material;

    // Position and scale mesh
    mesh.position.set(node.x + node.size * 0.5, 0, node.z + node.size * 0.5);
    mesh.scale.set(node.size, 1, node.size);
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    // Add to scene
    this.scene.add(mesh);

    node.mesh = mesh;
    node.isLoading = false;

    this.stats.nodesGenerated++;
  }

  /**
   * Apply heightmap data to geometry
   */
  applyHeightToGeometry(geometry, node, resolution) {
    const position = geometry.attributes.position;
    const colors = new Float32Array(position.count * 3);

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const z = position.getZ(i);

      // Convert local coordinates to world coordinates
      const worldX = node.x + (x + 0.5) * node.size;
      const worldZ = node.z + (z + 0.5) * node.size;

      // Get height from heightmap
      const height = this.getHeightAtPosition(worldX, worldZ);
      position.setY(i, height);

      // Set vertex color based on height
      const colorIndex = i * 3;
      this.setVertexColor(colors, colorIndex, height);
    }

    // Apply colors and recompute normals
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
  }

  /**
   * Get height at world position from heightmap
   */
  getHeightAtPosition(worldX, worldZ, useInterpolation = true) {
    if (!this.heightData[0] || !this.heightData[0].metadata) {
      return 0;
    }

    // Infinite tiling with actual heightmap data
    let u = (worldX / this.heightmapTileSize) % 1;
    let v = (worldZ / this.heightmapTileSize) % 1;
    if (u < 0) u += 1;
    if (v < 0) v += 1;

    const size = this.heightData[0].metadata.size;

    if (useInterpolation) {
      // Bilinear interpolation
      const fx = u * (size - 1);
      const fy = v * (size - 1);

      const x0 = Math.floor(fx);
      const y0 = Math.floor(fy);
      const x1 = Math.min(x0 + 1, size - 1);
      const y1 = Math.min(y0 + 1, size - 1);

      const dx = fx - x0;
      const dy = fy - y0;

      const h00 = this.heightData[0].data[y0 * size + x0] ?? 0;
      const h10 = this.heightData[0].data[y0 * size + x1] ?? 0;
      const h01 = this.heightData[0].data[y1 * size + x0] ?? 0;
      const h11 = this.heightData[0].data[y1 * size + x1] ?? 0;

      const h0 = h00 * (1 - dx) + h10 * dx;
      const h1 = h01 * (1 - dx) + h11 * dx;
      const value = h0 * (1 - dy) + h1 * dy;

      return (value / 255) * this.heightData[0].metadata.maxHeight;
    } else {
      // Nearest neighbor
      const px = Math.floor(u * (size - 1));
      const py = Math.floor(v * (size - 1));
      const idx = py * size + px;
      const value = this.heightData[0].data[idx] ?? 0;
      return (value / 255) * this.heightData[0].metadata.maxHeight;
    }
  }

  /**
   * Set vertex color based on height
   */
  setVertexColor(colors, index, height) {
    if (height < 40) {
      colors[index] = 0.2;
      colors[index + 1] = 0.6;
      colors[index + 2] = 1.0; // Water
    } else if (height < 80) {
      colors[index] = 0.3;
      colors[index + 1] = 0.9;
      colors[index + 2] = 0.4; // Grass
    } else if (height < 150) {
      colors[index] = 0.4;
      colors[index + 1] = 0.8;
      colors[index + 2] = 0.3; // Forest
    } else if (height < 250) {
      colors[index] = 0.3;
      colors[index + 1] = 0.7;
      colors[index + 2] = 0.2; // Hills
    } else if (height < 400) {
      colors[index] = 0.7;
      colors[index + 1] = 0.5;
      colors[index + 2] = 0.3; // Mountain
    } else if (height < 550) {
      colors[index] = 0.6;
      colors[index + 1] = 0.6;
      colors[index + 2] = 0.6; // Rock
    } else {
      colors[index] = 0.95;
      colors[index + 1] = 0.98;
      colors[index + 2] = 1.0; // Snow
    }
  }

  /**
   * Convert position to Vector3
   */
  toVector3(pos) {
    if (pos && pos.isVector3) return pos;
    const x = pos?.x ?? 0;
    const y = pos?.y ?? 0;
    const z = pos?.z ?? 0;
    return new THREE.Vector3(x, y, z);
  }

  /**
   * Update seamless transitions between LOD levels
   */
  updateTransitions() {
    this.updateNodeTransitions(this.root);
  }

  updateNodeTransitions(node) {
    if (node.transitionState) {
      const transitionSpeed = 3.0; // Transitions per second
      const deltaTime = 1 / 60; // Assume 60fps

      switch (node.transitionState) {
        case "subdividing":
          node.transitionProgress += deltaTime * transitionSpeed;
          if (node.transitionProgress >= 1) {
            // Transition complete - hide parent, show children
            if (node.mesh) {
              node.mesh.visible = false;
            }
            node.transitionState = null;
            node.transitionProgress = 0;
          } else {
            // Fade out parent as children appear
            if (node.mesh) {
              node.mesh.material.opacity = 1 - node.transitionProgress;
              node.mesh.material.transparent = true;
            }
          }
          break;

        case "merging":
          node.transitionProgress += deltaTime * transitionSpeed;
          if (node.transitionProgress >= 1) {
            // Transition complete
            node.transitionState = null;
            node.transitionProgress = 0;
            if (node.mesh) {
              node.mesh.material.opacity = 1;
              node.mesh.material.transparent = false;
            }
          } else {
            // Fade in parent as children disappear
            if (node.mesh) {
              node.mesh.material.opacity = node.transitionProgress;
              node.mesh.material.transparent = true;
            }
          }
          break;
      }
    }

    // Recurse to children
    if (!node.isLeaf()) {
      for (const child of node.children) {
        this.updateNodeTransitions(child);
      }
    }
  }

  /**
   * Get rendering statistics
   */
  getStats() {
    this.stats.nodesRendered = 0;
    this.countRenderingNodes(this.root);
    return { ...this.stats };
  }

  countRenderingNodes(node) {
    if (node.shouldRender && node.mesh) {
      this.stats.nodesRendered++;
    }
    if (!node.isLeaf()) {
      for (const child of node.children) {
        this.countRenderingNodes(child);
      }
    }
  }

  /**
   * Cleanup all resources
   */
  dispose() {
    this.disposeNode(this.root);
    this.pool.dispose();
    this.generateQueue.length = 0;
  }

  disposeNode(node) {
    if (node.mesh) {
      this.scene.remove(node.mesh);
      this.pool.releaseMesh(node.mesh);
      node.mesh = null;
    }

    if (!node.isLeaf()) {
      for (const child of node.children) {
        this.disposeNode(child);
      }
    }
  }
}
