precision highp float;

uniform vec3 uBaseColor;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform vec3 uSunColor;
uniform float uAmbientStrength;
uniform vec3 uAmbientColor;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 normal = normalize(vWorldNormal);

  // Sun lighting
  vec3 sunDir = normalize(uSunDirection);
  float sunDot = max(dot(normal, sunDir), 0.0);

  // Prevent completely black shadows - always keep some light
  float minLight = 0.2;
  float sunContribution = mix(minLight, 1.0, sunDot) * uSunIntensity;

  // Ambient lighting (fills in the shadows)
  float ambientContribution = uAmbientStrength;

  // Combine sun and ambient lighting
  vec3 lighting = uSunColor * sunContribution + uAmbientColor * ambientContribution;

  // Apply lighting to base color
  vec3 finalColor = uBaseColor * lighting;

  gl_FragColor = vec4(finalColor, 1.0);
}