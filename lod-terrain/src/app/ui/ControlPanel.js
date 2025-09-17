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
  panel.style.padding = "8px 10px";
  panel.style.background = "rgba(0, 0, 0, 0.45)";
  panel.style.color = "#fff";
  panel.style.fontFamily = "monospace";
  panel.style.fontSize = "12px";
  panel.style.lineHeight = "1.5";
  panel.style.borderRadius = "4px";
  panel.style.pointerEvents = "auto";

  const addLabel = (text) => {
    const label = document.createElement("div");
    label.textContent = text;
    panel.appendChild(label);
    return label;
  };

  const addSlider = ({ min, max, value, step = 1, onInput }) => {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = String(min);
    slider.max = String(max);
    slider.value = String(value);
    slider.step = String(step);
    slider.style.width = "160px";
    slider.addEventListener("input", (event) => {
      const numericValue = Number(event.target.value);
      onInput(numericValue);
    });
    panel.appendChild(slider);
    return slider;
  };

  const fogLabel = addLabel("Fog near: 10%");
  addSlider({
    min: 1,
    max: 200,
    value: 10,
    onInput: (value) => {
      app.fogNearScale = value / 100;
      fogLabel.textContent = `Fog near: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const fogFarLabel = addLabel(
    `Fog far: ${Math.round(app.fogFarScale * 100)}%`
  );
  addSlider({
    min: 5,
    max: 300,
    value: Math.round(app.fogFarScale * 100),
    onInput: (value) => {
      app.fogFarScale = Math.max(value / 100, 0.05);
      fogFarLabel.textContent = `Fog far: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const fadeStartLabel = addLabel(
    `Fade start: ${Math.round(app.fadeStartScale * 100)}%`
  );
  addSlider({
    min: 0,
    max: 95,
    value: Math.round(app.fadeStartScale * 100),
    onInput: (value) => {
      app.fadeStartScale = Math.min(value / 100, 0.95);
      fadeStartLabel.textContent = `Fade start: ${value}%`;
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  const fadeEndLabel = addLabel(
    `Fade end: ${Math.round(app.fadeEndScale * 100)}%`
  );
  addSlider({
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

  const morphLabel = addLabel(
    `Morph width: ${Math.round(app.morphRegion * 100)}%`
  );
  addSlider({
    min: 5,
    max: 100,
    value: Math.round(app.morphRegion * 100),
    onInput: (value) => {
      app.morphRegion = Math.max(value / 100, 0.05);
      morphLabel.textContent = `Morph width: ${value}%`;
      if (app.terrain) {
        app.terrain.updateMorphRegion(app.morphRegion);
      }
    },
  });

  const bloomToggle = addLabel(`Bloom: ${app.bloomEnabled ? "On" : "Off"}`);
  bloomToggle.style.cursor = "pointer";
  bloomToggle.addEventListener("click", () => {
    app.bloomEnabled = !app.bloomEnabled;
    bloomToggle.textContent = `Bloom: ${app.bloomEnabled ? "On" : "Off"}`;
  });

  const bloomLabel = addLabel(
    `Bloom strength: ${Math.round(app.bloomStrength * 100)}%`
  );
  addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.bloomStrength * 100),
    onInput: (value) => {
      app.bloomStrength = value / 100;
      bloomLabel.textContent = `Bloom strength: ${value}%`;
      if (app.bloomStrength <= 0.001) {
        app.bloomEnabled = false;
        bloomToggle.textContent = "Bloom: Off";
      } else if (!app.bloomEnabled) {
        app.bloomEnabled = true;
        bloomToggle.textContent = "Bloom: On";
      }
    },
  });

  const ambientLabel = addLabel(
    `Ambient strength: ${Math.round(app.ambientStrength * 100)}%`
  );
  addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.ambientStrength * 100),
    onInput: (value) => {
      app.ambientStrength = value / 100;
      ambientLabel.textContent = `Ambient strength: ${value}%`;
      if (app.terrain && app.ambientDirection) {
        app.terrain.updateAmbient(
          app.ambientDirection,
          app.ambientStrength,
          app.ambientColor
        );
      }
    },
  });

  const contrastLabel = addLabel(
    `Contrast: ${Math.round(app.contrastAdjustment * 100)}%`
  );
  addSlider({
    min: -50,
    max: 50,
    value: Math.round(app.contrastAdjustment * 100),
    onInput: (value) => {
      app.contrastAdjustment = value / 100;
      contrastLabel.textContent = `Contrast: ${value}%`;
      if (app.brightnessContrastPass) {
        app.brightnessContrastPass.material.uniforms.contrast.value =
          app.contrastAdjustment;
      }
    },
  });

  const brightnessLabel = addLabel(
    `Brightness: ${Math.round(app.brightnessAdjustment * 100)}%`
  );
  addSlider({
    min: -50,
    max: 50,
    value: Math.round(app.brightnessAdjustment * 100),
    onInput: (value) => {
      app.brightnessAdjustment = value / 100;
      brightnessLabel.textContent = `Brightness: ${value}%`;
      if (app.brightnessContrastPass) {
        app.brightnessContrastPass.material.uniforms.brightness.value =
          app.brightnessAdjustment;
      }
    },
  });

  const terrainSmoothLabel = addLabel(
    `Terrain smooth: ${Math.round(app.heightSmoothStrength * 100)}%`
  );
  addSlider({
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

  const heightGainLabel = addLabel(
    `Height multiplier: ${formatGain(app.heightGain)}×`
  );
  addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.heightGain * 100),
    onInput: (value) => {
      const gain = value / 100;
      heightGainLabel.textContent = `Height multiplier: ${formatGain(gain)}×`;
      setHeightGain?.(gain);
    },
  });

  const skyTintLabel = addLabel(
    `Sky tint: ${Math.round(app.skyTintStrength * 100)}%`
  );
  addSlider({
    min: 0,
    max: 50,
    value: Math.round(app.skyTintStrength * 100),
    onInput: (value) => {
      app.skyTintStrength = value / 100;
      skyTintLabel.textContent = `Sky tint: ${value}%`;
      if (app.terrain) {
        app.terrain.updateSkyTint(app.skyTintColor, app.skyTintStrength);
      }
    },
  });

  const smoothLabel = addLabel(
    `Normal smoothing: ${Math.round(app.normalSmoothFactor * 100)}%`
  );
  addSlider({
    min: 0,
    max: 100,
    value: Math.round(app.normalSmoothFactor * 100),
    onInput: (value) => {
      app.normalSmoothFactor = value / 100;
      smoothLabel.textContent = `Normal smoothing: ${value}%`;
      if (app.terrain) {
        app.terrain.updateSmoothFactor(app.normalSmoothFactor);
      }
    },
  });

  const specularLabel = addLabel(
    `Specular strength: ${Math.round(app.specularStrength * 100)}%`
  );
  addSlider({
    min: 0,
    max: 300,
    value: Math.round(app.specularStrength * 100),
    onInput: (value) => {
      app.specularStrength = value / 100;
      specularLabel.textContent = `Specular strength: ${value}%`;
      if (app.terrain) {
        app.terrain.updateSpecularStrength(app.specularStrength);
      }
    },
  });

  const sunStrengthLabel = addLabel(
    `Sun strength: ${Math.round(app.sunStrengthBase * 100)}%`
  );
  addSlider({
    min: 0,
    max: 200,
    value: Math.round(app.sunStrengthBase * 100),
    onInput: (value) => {
      app.sunStrengthBase = value / 100;
      sunStrengthLabel.textContent = `Sun strength: ${value}%`;
      app.updateSun();
    },
  });

  const sunTimeLabel = addLabel(`Time: ${app.sunTime.toFixed(1)}h`);
  addSlider({
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

  const lodLabel = addLabel(`LOD levels: ${app.terrainLevels}`);
  addSlider({
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

  const resolutionLabel = addLabel(
    `Tile resolution: ${app.terrainResolution}`
  );
  addSlider({
    min: 16,
    max: 4096,
    step: 16,
    value: app.terrainResolution,
    onInput: (value) => {
      app.terrainResolution = Math.max(8, Math.round(value / 16) * 16);
      resolutionLabel.textContent = `Tile resolution: ${app.terrainResolution}`;
      createTerrain();
      applyShaderEnvironment(app.terrain.activeShaderIndex);
    },
  });

  container.appendChild(panel);

  return { panel };
}
