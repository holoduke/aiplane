export function createControlPanel({
  app,
  container,
  applyShaderEnvironment,
  createTerrain,
  setTerrainSmoothing,
  setHeightGain,
}) {
  const panel = document.createElement("div");
  panel.style.position = "absolute";
  panel.style.top = "10px";
  panel.style.right = "10px";
  panel.style.padding = "10px";
  panel.style.background = "rgba(0, 0, 0, 0.55)";
  panel.style.color = "#fff";
  panel.style.fontFamily = "monospace";
  panel.style.fontSize = "12px";
  panel.style.lineHeight = "1.5";
  panel.style.borderRadius = "4px";
  panel.style.pointerEvents = "auto";
  panel.style.maxWidth = "220px";

  const createSection = (title, { defaultOpen = false } = {}) => {
    const section = document.createElement("div");
    section.style.marginBottom = "12px";

    const header = document.createElement("button");
    header.type = "button";
    header.style.display = "block";
    header.style.width = "100%";
    header.style.background = "rgba(255, 255, 255, 0.08)";
    header.style.border = "1px solid rgba(255, 255, 255, 0.18)";
    header.style.color = "#fff";
    header.style.fontFamily = "inherit";
    header.style.fontSize = "12px";
    header.style.textAlign = "left";
    header.style.padding = "4px 8px";
    header.style.cursor = "pointer";
    header.style.borderRadius = "4px";
    header.style.marginBottom = "6px";

    let open = defaultOpen;
    const updateHeaderLabel = () => {
      header.textContent = `${open ? "▼" : "►"} ${title}`;
    };
    updateHeaderLabel();

    const body = document.createElement("div");
    body.style.display = open ? "block" : "none";
    body.style.paddingBottom = "4px";
    body.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";

    header.addEventListener("click", () => {
      open = !open;
      body.style.display = open ? "block" : "none";
      updateHeaderLabel();
    });

    section.appendChild(header);
    section.appendChild(body);
    panel.appendChild(section);

    const addLabel = (text) => {
      const label = document.createElement("div");
      label.textContent = text;
      label.style.margin = "4px 0";
      body.appendChild(label);
      return label;
    };

    const addSlider = ({ min, max, value, step = 1, onInput }) => {
      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = String(min);
      slider.max = String(max);
      slider.value = String(value);
      slider.step = String(step);
      slider.style.width = "100%";
      slider.style.marginBottom = "6px";
      slider.addEventListener("input", (event) => {
        const numericValue = Number(event.target.value);
        onInput(numericValue, slider);
      });
      body.appendChild(slider);
      return slider;
    };

    return { addLabel, addSlider, header, body };
  };

  const atmosphere = createSection("Atmosphere", { defaultOpen: true });
  const terrain = createSection("Terrain", { defaultOpen: true });
  const lighting = createSection("Lighting", { defaultOpen: false });
  const shadows = createSection("Shadows", { defaultOpen: false });
  const postFx = createSection("Post FX", { defaultOpen: false });

  const fogLabel = atmosphere.addLabel("Fog near: 10%");
  atmosphere.addSlider({
    min: 1,
    max: 200,
    value: 10,
    onInput: (value) => {
      app.fogNearScale = value / 100;
      fogLabel.textContent = `Fog near: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const fogFarLabel = atmosphere.addLabel(
    `Fog far: ${Math.round(app.fogFarScale * 100)}%`
  );
  atmosphere.addSlider({
    min: 5,
    max: 300,
    value: Math.round(app.fogFarScale * 100),
    onInput: (value) => {
      app.fogFarScale = Math.max(value / 100, 0.05);
      fogFarLabel.textContent = `Fog far: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const fadeStartLabel = atmosphere.addLabel(
    `Fade start: ${Math.round(app.fadeStartScale * 100)}%`
  );
  atmosphere.addSlider({
    min: 0,
    max: 95,
    value: Math.round(app.fadeStartScale * 100),
    onInput: (value) => {
      app.fadeStartScale = Math.min(value / 100, 0.95);
      fadeStartLabel.textContent = `Fade start: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const fadeEndLabel = atmosphere.addLabel(
    `Fade end: ${Math.round(app.fadeEndScale * 100)}%`
  );
  atmosphere.addSlider({
    min: 50,
    max: 100,
    value: Math.round(app.fadeEndScale * 100),
    onInput: (value) => {
      app.fadeEndScale = Math.max(value / 100, app.fadeStartScale + 0.05);
      fadeEndLabel.textContent = `Fade end: ${Math.round(
        app.fadeEndScale * 100
      )}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const skyTintLabel = atmosphere.addLabel(
    `Sky tint: ${Math.round(app.skyTintStrength * 100)}%`
  );
  atmosphere.addSlider({
    min: 0,
    max: 50,
    value: Math.round(app.skyTintStrength * 100),
    onInput: (value) => {
      app.skyTintStrength = value / 100;
      skyTintLabel.textContent = `Sky tint: ${value}%`;
      app.terrain?.updateSkyTint(app.skyTintColor, app.skyTintStrength);
    },
  });

  const morphLabel = terrain.addLabel(
    `Morph width: ${Math.round(app.morphRegion * 100)}%`
  );
  terrain.addSlider({
    min: 5,
    max: 100,
    value: Math.round(app.morphRegion * 100),
    onInput: (value) => {
      app.morphRegion = Math.max(value / 100, 0.05);
      morphLabel.textContent = `Morph width: ${value}%`;
      app.terrain?.updateMorphRegion(app.morphRegion);
    },
  });

  const terrainSmoothLabel = terrain.addLabel(
    `Terrain smooth: ${Math.round(app.heightSmoothStrength * 100)}%`
  );
  terrain.addSlider({
    min: 0,
    max: 100,
    value: Math.round(app.heightSmoothStrength * 100),
    onInput: (value) => {
      const strength = value / 100;
      terrainSmoothLabel.textContent = `Terrain smooth: ${value}%`;
      setTerrainSmoothing?.(strength);
    },
  });

  const formatGain = (value) => value.toFixed(2);
  const heightGainLabel = terrain.addLabel(
    `Height multiplier: ${formatGain(app.heightGain)}×`
  );
  terrain.addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.heightGain * 100),
    onInput: (value) => {
      const gain = value / 100;
      heightGainLabel.textContent = `Height multiplier: ${formatGain(gain)}×`;
      setHeightGain?.(gain);
    },
  });

  const lodLabel = terrain.addLabel(`LOD levels: ${app.terrainLevels}`);
  terrain.addSlider({
    min: 2,
    max: 32,
    value: app.terrainLevels,
    onInput: (value) => {
      app.terrainLevels = Math.max(2, Math.min(32, Math.round(value)));
      lodLabel.textContent = `LOD levels: ${app.terrainLevels}`;
      createTerrain();
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const tileResolutionLabel = terrain.addLabel(
    `Tile resolution: ${app.terrainResolution}`
  );
  terrain.addSlider({
    min: 16,
    max: 4096,
    step: 16,
    value: app.terrainResolution,
    onInput: (value) => {
      app.terrainResolution = Math.max(8, Math.round(value / 16) * 16);
      tileResolutionLabel.textContent = `Tile resolution: ${app.terrainResolution}`;
      createTerrain();
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const noiseResolutionLabel = terrain.addLabel(
    `Noise resolution: ${app.noiseResolution}`
  );
  terrain.addSlider({
    min: 64,
    max: 1024,
    step: 64,
    value: app.noiseResolution,
    onInput: (value, slider) => {
      app.setNoiseResolution(value);
      noiseResolutionLabel.textContent = `Noise resolution: ${app.noiseResolution}`;
      slider.value = String(app.noiseResolution);
      createTerrain();
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const ambientLabel = lighting.addLabel(
    `Ambient strength: ${Math.round(app.ambientStrength * 100)}%`
  );
  lighting.addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.ambientStrength * 100),
    onInput: (value) => {
      app.ambientStrength = value / 100;
      ambientLabel.textContent = `Ambient strength: ${value}%`;
      app.terrain?.updateAmbient(
        app.ambientDirection,
        app.ambientStrength,
        app.ambientColor
      );
    },
  });

  const normalSmoothLabel = lighting.addLabel(
    `Normal smoothing: ${Math.round(app.normalSmoothFactor * 100)}%`
  );
  lighting.addSlider({
    min: 0,
    max: 100,
    value: Math.round(app.normalSmoothFactor * 100),
    onInput: (value) => {
      app.normalSmoothFactor = value / 100;
      normalSmoothLabel.textContent = `Normal smoothing: ${value}%`;
      app.terrain?.updateSmoothFactor(app.normalSmoothFactor);
    },
  });

  const specularLabel = lighting.addLabel(
    `Specular strength: ${Math.round(app.specularStrength * 100)}%`
  );
  lighting.addSlider({
    min: 0,
    max: 300,
    value: Math.round(app.specularStrength * 100),
    onInput: (value) => {
      app.specularStrength = value / 100;
      specularLabel.textContent = `Specular strength: ${value}%`;
      app.terrain?.updateSpecularStrength(app.specularStrength);
    },
  });

  const sunStrengthLabel = lighting.addLabel(
    `Sun strength: ${Math.round(app.sunStrengthBase * 100)}%`
  );
  lighting.addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.sunStrengthBase * 100),
    onInput: (value) => {
      app.sunStrengthBase = value / 100;
      sunStrengthLabel.textContent = `Sun strength: ${value}%`;
      app.updateSun();
    },
  });

  const sunWarmthLabel = lighting.addLabel(
    `Sun warmth: ${Math.round(app.sunWarmth * 100)}%`
  );
  lighting.addSlider({
    min: 0,
    max: 100,
    value: Math.round(app.sunWarmth * 100),
    onInput: (value) => {
      app.sunWarmth = value / 100;
      sunWarmthLabel.textContent = `Sun warmth: ${value}%`;
      app.updateSun();
    },
  });

  const sunTimeLabel = lighting.addLabel(`Time: ${app.sunTime.toFixed(1)}h`);
  lighting.addSlider({
    min: 0,
    max: 24,
    value: app.sunTime,
    step: 0.1,
    onInput: (value) => {
      app.sunTime = value;
      sunTimeLabel.textContent = `Time: ${value.toFixed(1)}h`;
      app.updateSun();
    },
  });

  const shadowToggle = shadows.addLabel(
    `Shadows: ${app.shadowsEnabled ? "On" : "Off"}`
  );
  shadowToggle.style.cursor = "pointer";
  shadowToggle.style.userSelect = "none";
  shadowToggle.addEventListener("click", () => {
    app.setShadowEnabled(!app.shadowsEnabled);
    shadowToggle.textContent = `Shadows: ${app.shadowsEnabled ? "On" : "Off"}`;
  });

  const shadowStrengthLabel = shadows.addLabel(
    `Shadow strength: ${Math.round(app.shadowStrength * 100)}%`
  );
  shadows.addSlider({
    min: 0,
    max: 100,
    value: Math.round(app.shadowStrength * 100),
    onInput: (value) => {
      app.setShadowStrength(value / 100);
      shadowStrengthLabel.textContent = `Shadow strength: ${value}%`;
    },
  });

  const shadowSoftnessLabel = shadows.addLabel(
    `Shadow softness: ${app.shadowSoftness.toFixed(2)}`
  );
  shadows.addSlider({
    min: 10,
    max: 400,
    value: Math.round(app.shadowSoftness * 100),
    onInput: (value) => {
      const softness = Math.min(Math.max(value / 100, 0.1), 4.0);
      app.setShadowSoftness(softness);
      shadowSoftnessLabel.textContent = `Shadow softness: ${softness.toFixed(2)}`;
    },
  });

  const shadowBiasLabel = shadows.addLabel(
    `Shadow bias: ${app.shadowBias.toExponential(2)}`
  );
  shadows.addSlider({
    min: 5,
    max: 300,
    value: Math.round(app.shadowBias * 100000.0),
    onInput: (value) => {
      const bias = Math.min(Math.max(value / 100000.0, 0.00001), 0.01);
      app.setShadowBias(bias);
      shadowBiasLabel.textContent = `Shadow bias: ${bias.toExponential(2)}`;
    },
  });

  const shadowDistanceLabel = shadows.addLabel(
    `Shadow distance: ${Math.round(app.shadowMaxDistance)}`
  );
  shadows.addSlider({
    min: 100,
    max: 7000,
    step: 100,
    value: Math.round(app.shadowMaxDistance),
    onInput: (value) => {
      app.setShadowMaxDistance(value);
      shadowDistanceLabel.textContent = `Shadow distance: ${Math.round(
        app.shadowMaxDistance
      )}`;
    },
  });

  const shadowResolutionLabel = shadows.addLabel(
    `Shadow resolution: ${app.shadowResolution}`
  );
  shadows.addSlider({
    min: 256,
    max: 2048,
    step: 256,
    value: app.shadowResolution,
    onInput: (value, slider) => {
      app.setShadowResolution(value);
      shadowResolutionLabel.textContent = `Shadow resolution: ${app.shadowResolution}`;
      slider.value = String(app.shadowResolution);
    },
  });

  const shadowDebugLabel = shadows.addLabel(
    `Show cascades: ${app.shadowDebugEnabled ? "On" : "Off"}`
  );
  shadowDebugLabel.style.cursor = "pointer";
  shadowDebugLabel.style.userSelect = "none";
  shadowDebugLabel.addEventListener("click", () => {
    const next = !app.shadowDebugEnabled;
    app.setShadowDebugEnabled(next);
    shadowDebugLabel.textContent = `Show cascades: ${next ? "On" : "Off"}`;
  });

  const cascadeLabels = ["Cascade 1", "Cascade 2", "Cascade 3"];
  cascadeLabels.forEach((labelText, index) => {
    const label = shadows.addLabel(
      `${labelText}: ${app.shadowCascadeEnabled[index] ? "On" : "Off"}`
    );
    label.style.cursor = "pointer";
    label.style.userSelect = "none";
    label.addEventListener("click", () => {
      const nextState = !app.shadowCascadeEnabled[index];
      app.setShadowCascadeEnabled(index, nextState);
      label.textContent = `${labelText}: ${nextState ? "On" : "Off"}`;
    });
  });

  const bloomToggle = postFx.addLabel(`Bloom: ${app.bloomEnabled ? "On" : "Off"}`);
  bloomToggle.style.cursor = "pointer";
  bloomToggle.style.userSelect = "none";
  bloomToggle.addEventListener("click", () => {
    app.bloomEnabled = !app.bloomEnabled;
    bloomToggle.textContent = `Bloom: ${app.bloomEnabled ? "On" : "Off"}`;
  });

  let aaToggle;

  const postFxToggle = postFx.addLabel(
    `Post FX: ${app.postProcessingEnabled ? "On" : "Off"}`
  );
  postFxToggle.style.cursor = "pointer";
  postFxToggle.style.userSelect = "none";
  postFxToggle.addEventListener("click", () => {
    app.setPostProcessingEnabled(!app.postProcessingEnabled);
    postFxToggle.textContent = `Post FX: ${app.postProcessingEnabled ? "On" : "Off"}`;
    if (aaToggle) {
      aaToggle.textContent = `Antialias: ${
        app.aaEnabled && app.postProcessingEnabled ? "On" : "Off"
      }`;
    }
  });

  aaToggle = postFx.addLabel(
    `Antialias: ${app.aaEnabled && app.postProcessingEnabled ? "On" : "Off"}`
  );
  aaToggle.style.cursor = "pointer";
  aaToggle.style.userSelect = "none";
  aaToggle.addEventListener("click", () => {
    app.setAntialiasEnabled(!app.aaEnabled);
    aaToggle.textContent = `Antialias: ${
      app.aaEnabled && app.postProcessingEnabled ? "On" : "Off"
    }`;
  });

  const aaSubpixelLabel = postFx.addLabel(
    `AA blend: ${Math.round(app.aaSubpixelBlending * 100)}%`
  );
  postFx.addSlider({
    min: 0,
    max: 150,
    value: Math.round(app.aaSubpixelBlending * 100),
    onInput: (value) => {
      app.setAntialiasSubpixel(value / 100);
      aaSubpixelLabel.textContent = `AA blend: ${value}%`;
    },
  });

  const aaContrastLabel = postFx.addLabel(
    `AA contrast: ${Math.round(app.aaContrastThreshold * 1000) / 1000}`
  );
  postFx.addSlider({
    min: 1,
    max: 200,
    value: Math.round(app.aaContrastThreshold * 1000),
    onInput: (value) => {
      const threshold = value / 1000;
      app.setAntialiasContrast(threshold);
      aaContrastLabel.textContent = `AA contrast: ${Math.round(
        threshold * 1000
      ) / 1000}`;
    },
  });

  const aaRelativeLabel = postFx.addLabel(
    `AA relative: ${Math.round(app.aaRelativeThreshold * 1000) / 1000}`
  );
  postFx.addSlider({
    min: 1,
    max: 300,
    value: Math.round(app.aaRelativeThreshold * 1000),
    onInput: (value) => {
      const threshold = value / 1000;
      app.setAntialiasRelative(threshold);
      aaRelativeLabel.textContent = `AA relative: ${Math.round(
        threshold * 1000
      ) / 1000}`;
    },
  });

  const bloomStrengthLabel = postFx.addLabel(
    `Bloom strength: ${Math.round(app.bloomStrength * 100)}%`
  );
  postFx.addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.bloomStrength * 100),
    onInput: (value) => {
      app.bloomStrength = value / 100;
      bloomStrengthLabel.textContent = `Bloom strength: ${value}%`;
      if (app.bloomStrength <= 0.001) {
        app.bloomEnabled = false;
        bloomToggle.textContent = "Bloom: Off";
      } else if (!app.bloomEnabled) {
        app.bloomEnabled = true;
        bloomToggle.textContent = "Bloom: On";
      }
    },
  });

  const bloomThresholdLabel = postFx.addLabel(
    `Bloom threshold: ${app.bloomThreshold.toFixed(2)}`
  );
  postFx.addSlider({
    min: 0,
    max: 300,
    value: Math.round(app.bloomThreshold * 100),
    onInput: (value) => {
      app.bloomThreshold = value / 100;
      bloomThresholdLabel.textContent = `Bloom threshold: ${app.bloomThreshold.toFixed(
        2
      )}`;
      app.applyBloomSettings();
    },
  });

  const bloomKneeLabel = postFx.addLabel(
    `Bloom knee: ${app.bloomSoftKnee.toFixed(2)}`
  );
  postFx.addSlider({
    min: 0,
    max: 100,
    value: Math.round(app.bloomSoftKnee * 100),
    onInput: (value) => {
      app.bloomSoftKnee = value / 100;
      bloomKneeLabel.textContent = `Bloom knee: ${app.bloomSoftKnee.toFixed(2)}`;
      app.applyBloomSettings();
    },
  });

  const bloomSigmaLabel = postFx.addLabel(
    `Bloom blur sigma: ${app.bloomSigma.toFixed(2)}`
  );
  postFx.addSlider({
    min: 10,
    max: 120,
    value: Math.round(app.bloomSigma * 10),
    step: 5,
    onInput: (value) => {
      app.bloomSigma = value / 10;
      bloomSigmaLabel.textContent = `Bloom blur sigma: ${app.bloomSigma.toFixed(2)}`;
      app.applyBloomSettings();
    },
  });

  const bloomResolutionLabel = postFx.addLabel(
    `Bloom resolution: ${app.bloomResolution}px`
  );
  postFx.addSlider({
    min: 32,
    max: 512,
    value: app.bloomResolution,
    step: 16,
    onInput: (value) => {
      app.setBloomResolution(value);
      bloomResolutionLabel.textContent = `Bloom resolution: ${app.bloomResolution}px`;
    },
  });

  const contrastLabel = postFx.addLabel(
    `Contrast: ${Math.round(app.contrastAdjustment * 100)}%`
  );
  postFx.addSlider({
    min: -50,
    max: 50,
    value: Math.round(app.contrastAdjustment * 100),
    onInput: (value) => {
      app.contrastAdjustment = value / 100;
      contrastLabel.textContent = `Contrast: ${value}%`;
      app.brightnessContrastPass &&
        (app.brightnessContrastPass.material.uniforms.contrast.value =
          app.contrastAdjustment);
    },
  });

  const brightnessLabel = postFx.addLabel(
    `Brightness: ${Math.round(app.brightnessAdjustment * 100)}%`
  );
  postFx.addSlider({
    min: -50,
    max: 50,
    value: Math.round(app.brightnessAdjustment * 100),
    onInput: (value) => {
      app.brightnessAdjustment = value / 100;
      brightnessLabel.textContent = `Brightness: ${value}%`;
      app.brightnessContrastPass &&
        (app.brightnessContrastPass.material.uniforms.brightness.value =
          app.brightnessAdjustment);
    },
  });

  const renderScaleLabel = postFx.addLabel(
    `Render scale: ${Math.round(app.renderPixelRatio * 100)}%`
  );
  postFx.addSlider({
    min: 50,
    max: 200,
    value: Math.round(app.renderPixelRatio * 100),
    onInput: (value) => {
      const ratio = value / 100;
      app.setRenderPixelRatio(ratio);
      renderScaleLabel.textContent = `Render scale: ${Math.round(
        app.renderPixelRatio * 100
      )}%`;
    },
  });

  container.appendChild(panel);

  return { panel };
}
