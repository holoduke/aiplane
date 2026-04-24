precision highp float;

uniform vec3 uWallColor;
uniform vec3 uGlassColor;
uniform vec3 uLitWindowColor;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform vec3 uSunColor;
uniform float uAmbientStrength;
uniform vec3 uAmbientColor;
uniform vec3 uSkyTintColor;
uniform vec2 uWindowCell;
uniform float uSeed;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec3 vLocalNormal;
varying vec3 vLocalPosition;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec3 worldNormal = normalize(vWorldNormal);
  vec3 localN = normalize(vLocalNormal);
  vec3 absLocalN = abs(localN);

  // Window grid in LOCAL space so yaw rotation doesn't tilt the pattern.
  float isSideFace = 1.0 - step(0.5, absLocalN.z);
  vec2 gridPos = (absLocalN.x > absLocalN.y)
    ? vec2(vLocalPosition.y, vLocalPosition.z)
    : vec2(vLocalPosition.x, vLocalPosition.z);

  vec2 cellCoords = gridPos / uWindowCell;
  vec2 cellIndex = floor(cellCoords);
  vec2 cellLocal = fract(cellCoords);

  vec2 borderPad = vec2(0.14, 0.16);
  vec2 inside = step(borderPad, cellLocal) * step(cellLocal, 1.0 - borderPad);
  float windowMask = inside.x * inside.y * isSideFace;

  // Fewer lit windows (~18%) so the night-office glow doesn't overwhelm
  // day-lit surfaces.
  float litSeed = hash21(cellIndex + vec2(uSeed));
  float isLit = step(0.82, litSeed);

  // --- Diffuse shading (sun + ambient) ---
  // minLight floor is generous so shadowed faces never crush to black.
  vec3 sunDir = normalize(uSunDirection);
  float sunDot = max(dot(worldNormal, sunDir), 0.0);
  float minLight = 0.30;
  float sunTerm = mix(minLight, 1.0, sunDot) * uSunIntensity;
  vec3 diffuseLight = uSunColor * sunTerm + uAmbientColor * uAmbientStrength * 1.4;

  vec3 surfaceColor = mix(uWallColor, uGlassColor, windowMask);
  vec3 surfaceShaded = surfaceColor * diffuseLight;

  // --- Mirrored sky/sun reflection ---
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 reflectDir = reflect(-viewDir, worldNormal);

  // Fake sky sample: upper hemisphere is bright sky tint, lower hemisphere
  // settles on ambient. skyBias maps reflectDir.z ∈ [-0.8, 0.5] → [0, 1] so
  // even near-horizontal reflections pick up some sky color.
  float skyBias = smoothstep(-0.8, 0.5, reflectDir.z);
  vec3 mirroredSky = mix(uAmbientColor * 1.1, uSkyTintColor * 1.6, skyBias);

  // Sun disc in reflection — tight lobe that tracks the mirrored sun vector.
  float sunAlign = max(dot(reflectDir, sunDir), 0.0);
  vec3 sunHighlight = uSunColor * pow(sunAlign, 32.0) * 3.0 * uSunIntensity;
  mirroredSky += sunHighlight;

  // Fresnel mix factor: moderate exponent so reflection is visible at
  // non-grazing angles too. Glass reflects strongly, walls have subtle sheen.
  float fresnel = pow(1.0 - max(dot(viewDir, worldNormal), 0.0), 1.4);
  float reflectAmount = mix(0.20, 0.85, windowMask) * (0.35 + fresnel * 0.65);

  // Lit-window emission — warm night-office glow. Lower strength now that
  // the day-lit surfaces aren't pitch black.
  vec3 emission = uLitWindowColor * windowMask * isLit * 0.8;

  // Blend surface shading with mirrored sky, then add emission on top.
  vec3 finalColor = mix(surfaceShaded, mirroredSky, reflectAmount) + emission;

  gl_FragColor = vec4(finalColor, 1.0);
}
