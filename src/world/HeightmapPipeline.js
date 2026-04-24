import * as THREE from "three";
import { PerlinNoise } from "../noise/PerlinNoise.js";
import { getTerrainTexture, getNoise, regenerateNoise } from "../noise/index.js";

/**
 * HeightmapPipeline owns the procedural heightmap state and all erosion /
 * effect operations that produce terrain textures. The composer (TerrainApp)
 * calls into this for effect operations; the pipeline calls back via
 * `refreshTerrainFromTexture()` when the terrain mesh needs to be rebuilt.
 *
 * Responsibilities it does NOT have:
 *   - Owning the terrain mesh (app.createTerrain handles that)
 *   - Loading the .bin heightmap (app.loadGeneratedHeightmap handles that)
 *   - Applying shaders (app.applyShaderEnvironment handles that)
 */
export class HeightmapPipeline {
  constructor(app) {
    this.app = app;

    // Heightmap state - single source of truth for effect pipeline
    this.baseHeightmap = null; // Clean reference copy - never modified
    this.masterHeightmap = null; // Contains all applied effects
    this.baseHeightmapType = null; // 'procedural' | 'generated' | effect name
    this.heightmapWidth = null;
    this.heightmapHeight = null;

    this.effectParameters = this._defaultEffectParameters();
  }

  _defaultEffectParameters() {
    return {
      thermal: { iterations: 0, talus: 0.01 },
      hydraulic: {
        droplets: 0,
        inertia: 0.05,
        capacity: 4,
        deposition: 0.1,
        erosion: 0.3,
      },
      smooth: { passes: 0 },
      terracing: { steps: 1 },
    };
  }

  reset() {
    this.baseHeightmap = null;
    this.masterHeightmap = null;
    this.baseHeightmapType = null;
    this.heightmapWidth = null;
    this.heightmapHeight = null;
    this.effectParameters = this._defaultEffectParameters();
  }

  initializeMasterHeightmap(type = "procedural") {
    if (this.app.generatedHeightTexture) {
      console.log(
        "🎯 Initializing master heightmap from generated texture (.bin file)"
      );
      this.baseHeightmapType = "generated";
      return;
    }

    const terrainTexture = getTerrainTexture();
    if (
      !terrainTexture ||
      !terrainTexture.texture ||
      !terrainTexture.texture.image
    ) {
      console.warn("⚠️ No terrain texture available for master heightmap");
      return;
    }

    const data = terrainTexture.texture.image.data;
    this.heightmapWidth = terrainTexture.texture.image.width;
    this.heightmapHeight = terrainTexture.texture.image.height;

    this.baseHeightmap = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++) {
      this.baseHeightmap[i] = data[i] / 255.0;
    }
    this.masterHeightmap = this.baseHeightmap.slice();

    this.baseHeightmapType = type;
    console.log(
      `📋 Initialized base & master heightmap (${this.heightmapWidth}x${this.heightmapHeight}) from ${type} source`
    );
  }

  rebuildMasterHeightmap() {
    if (!this.baseHeightmap) {
      console.warn("⚠️ No base heightmap available for rebuilding");
      return false;
    }

    const width = this.heightmapWidth;
    const height = this.heightmapHeight;
    let workingHeightmap = this.baseHeightmap.slice();
    const params = this.effectParameters;

    if (params.thermal.iterations > 0) {
      console.log(
        `🔥 Applying thermal erosion (${params.thermal.iterations} iterations)`
      );
      workingHeightmap = PerlinNoise.thermalErosion(
        workingHeightmap,
        width,
        height,
        params.thermal.iterations,
        params.thermal.talus
      );
    }

    if (params.hydraulic.droplets > 0) {
      console.log(
        `💧 Applying hydraulic erosion (${params.hydraulic.droplets} droplets)`
      );
      workingHeightmap = PerlinNoise.hydraulicErosion(
        workingHeightmap,
        width,
        height,
        params.hydraulic.droplets,
        params.hydraulic.inertia,
        params.hydraulic.capacity,
        params.hydraulic.deposition,
        params.hydraulic.erosion
      );
    }

    if (params.smooth.passes > 0) {
      console.log(`✨ Applying smoothing (${params.smooth.passes} passes)`);
      workingHeightmap = PerlinNoise.smoothHeightmap(
        workingHeightmap,
        width,
        height,
        params.smooth.passes
      );
    }

    if (params.terracing.steps > 1) {
      console.log(`🪜 Applying terracing (${params.terracing.steps} steps)`);
      workingHeightmap = PerlinNoise.applyTerracing(
        workingHeightmap,
        width,
        height,
        params.terracing.steps
      );
    }

    this.masterHeightmap = workingHeightmap;
    console.log("✅ Rebuilt master heightmap from base + all effects");
    return true;
  }

  applyHeightmapEffect(effectType, parameters = {}) {
    if (!this.baseHeightmap) {
      console.warn("⚠️ No base heightmap available for effect application");
      return false;
    }

    if (["ridged", "cellular", "billow", "warped"].includes(effectType)) {
      const width = this.heightmapWidth;
      const height = this.heightmapHeight;
      let newHeightmap;

      switch (effectType) {
        case "ridged":
          console.log(
            `🏔️ Generating ridged terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateRidgedTerrain(
            width,
            height,
            parameters.scale || 0.01,
            parameters.octaves || 6
          );
          break;
        case "cellular":
          console.log(
            `🕳️ Generating cellular terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateCellularTerrain(
            width,
            height,
            parameters.scale || 0.02,
            parameters.invert || false
          );
          break;
        case "billow":
          console.log(
            `☁️ Generating billow terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateBillowTerrain(
            width,
            height,
            parameters.scale || 0.01,
            parameters.octaves || 4
          );
          break;
        case "warped":
          console.log(
            `🌊 Generating domain-warped terrain (replacing base heightmap)...`
          );
          newHeightmap = PerlinNoise.generateWarpedTerrain(
            width,
            height,
            parameters.scale || 0.01,
            parameters.warpStrength || 30.0
          );
          break;
      }

      this.baseHeightmap = newHeightmap;
      this.effectParameters = this._defaultEffectParameters();
      this.baseHeightmapType = effectType;
    } else {
      switch (effectType) {
        case "thermal":
          this.effectParameters.thermal.iterations =
            parameters.iterations || 0;
          this.effectParameters.thermal.talus = parameters.talus || 0.01;
          break;
        case "hydraulic":
          this.effectParameters.hydraulic.droplets = parameters.droplets || 0;
          this.effectParameters.hydraulic.inertia = parameters.inertia || 0.05;
          this.effectParameters.hydraulic.capacity = parameters.capacity || 4;
          this.effectParameters.hydraulic.deposition =
            parameters.deposition || 0.1;
          this.effectParameters.hydraulic.erosion = parameters.erosion || 0.3;
          break;
        case "smooth":
          this.effectParameters.smooth.passes = parameters.passes || 0;
          break;
        case "terracing":
          this.effectParameters.terracing.steps = parameters.steps || 1;
          break;
        default:
          console.warn(`⚠️ Unknown heightmap effect: ${effectType}`);
          return false;
      }
    }

    return this.rebuildMasterHeightmap();
  }

  // Build final display heightmap from master (with current settings) and
  // push it back into the terrain texture. Caller is responsible for
  // rebuilding the terrain mesh afterwards.
  updateTerrainFromMaster() {
    if (!this.masterHeightmap) {
      console.warn("⚠️ No master heightmap available");
      return false;
    }

    const displayHeightmap = PerlinNoise.applyTerrainSettings(
      this.masterHeightmap,
      this.app.heightGain,
      this.app.heightSmoothStrength
    );

    this.updateTerrainTextureFromHeightmap(
      displayHeightmap,
      this.heightmapWidth,
      this.heightmapHeight
    );
    return true;
  }

  updateTerrainTextureFromHeightmap(heightmap, width, height) {
    const terrainTexture = getTerrainTexture();
    if (!terrainTexture || !terrainTexture.texture) {
      console.warn("⚠️ No terrain texture available for update");
      return;
    }

    if (
      terrainTexture.texture.image.width !== width ||
      terrainTexture.texture.image.height !== height
    ) {
      terrainTexture.resize(width, height);
    }

    const textureData = terrainTexture.texture.image.data;
    for (let i = 0; i < heightmap.length; i++) {
      textureData[i] = Math.round(
        THREE.MathUtils.clamp(heightmap[i], 0, 1) * 255
      );
    }

    terrainTexture.texture.needsUpdate = true;

    console.log("🖼️ Updated terrain texture from heightmap data");
  }
}
