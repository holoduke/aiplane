export function createIntroOverlay({ container, onStart }) {
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.background = "rgba(2, 6, 12, 0.2)";
  overlay.style.zIndex = "1000";
  overlay.style.textAlign = "center";
  overlay.style.transition = "opacity 0.35s ease";

  const title = document.createElement("div");
  title.textContent = "Fighter Jet Recon";
  title.style.fontSize = "42px";
  title.style.fontWeight = "600";
  title.style.letterSpacing = "4px";
  title.style.color = "#e7f2ff";
  title.style.textTransform = "uppercase";
  title.style.marginBottom = "28px";
  overlay.appendChild(title);

  const message = document.createElement("div");
  message.textContent = "Click to begin your sortie";
  message.style.fontSize = "18px";
  message.style.color = "#a8c6ff";
  message.style.marginBottom = "36px";
  overlay.appendChild(message);

  const button = document.createElement("button");
  button.textContent = "Start Mission";
  button.style.fontSize = "16px";
  button.style.padding = "12px 28px";
  button.style.borderRadius = "999px";
  button.style.border = "1px solid rgba(255, 255, 255, 0.45)";
  button.style.color = "#0a1524";
  button.style.background = "linear-gradient(135deg, #f4f9ff, #c7dcff)";
  button.style.cursor = "pointer";
  button.style.fontWeight = "600";
  button.style.textTransform = "uppercase";
  button.style.letterSpacing = "1.2px";
  button.addEventListener("click", () => onStart?.());
  overlay.appendChild(button);

  container.appendChild(overlay);

  function destroy() {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  }

  function fadeOut(duration = 350) {
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = "0";
    window.setTimeout(destroy, duration);
  }

  return { overlay, button, destroy, fadeOut };
}
