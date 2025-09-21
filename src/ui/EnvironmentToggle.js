const BUTTON_TEXT_DEFAULT = "Environment";

function formatLabel(name) {
  if (!name) return BUTTON_TEXT_DEFAULT;
  return `Environment: ${name}`;
}

export function createEnvironmentToggle({ app, container }) {
  const wrapper = document.createElement("div");
  wrapper.style.position = "absolute";
  wrapper.style.top = "auto";
  wrapper.style.left = "10px";
  wrapper.style.bottom = "10px";
  wrapper.style.pointerEvents = "auto";
  wrapper.style.zIndex = "20";

  const button = document.createElement("button");
  button.textContent = formatLabel(app.environmentName);
  button.style.padding = "8px 18px";
  button.style.borderRadius = "999px";
  button.style.border = "1px solid rgba(255, 255, 255, 0.45)";
  button.style.background = "linear-gradient(135deg, rgba(240, 246, 255, 0.95), rgba(173, 199, 255, 0.85))";
  button.style.color = "#0a1524";
  button.style.fontFamily = "monospace";
  button.style.fontSize = "12px";
  button.style.fontWeight = "600";
  button.style.textTransform = "uppercase";
  button.style.letterSpacing = "1.2px";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 2px 8px rgba(0, 10, 20, 0.35)";

  const update = (name) => {
    button.textContent = formatLabel(name);
  };

  button.addEventListener("click", () => {
    if (!app.terrain) return;
    const index = app.terrain.cycleShader();
    const config = app.applyShaderEnvironment(index);
    update(config?.name ?? app.environmentName);
  });

  wrapper.appendChild(button);
  container.appendChild(wrapper);

  return {
    wrapper,
    button,
    update,
  };
}
