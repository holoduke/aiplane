precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
#include <terrainShadow.glsl>

uniform sampler2D uRock;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  vec2 st = p.xy / 1024.0;
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  return h * h / 2000.0;
}

vec3 getNormal() {
  float height = getHeight(vPosition);
  vec3 p = vec3(vPosition.xy, height);
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);
  return normalize(cross(dPositiondx, dPositiondy));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

void main() {
  vec3 normal = normalize(mix(vNormal, getNormal(), uSmoothFactor));
  float height = vPosition.z;
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float texScale = 0.025;

  // Base rock texture with Martian tint
  vec3 rockColor = texture2D(uRock, texScale * vPosition.xy).rgb;
  rockColor = mix(rockColor, vec3(0.45, 0.25, 0.15), 0.6); // Rusty brown base

  // Martian surface variations
  float slope = 1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);

  // Generate noise for surface variation
  float noise1 = hash21(vPosition.xy * 0.08);
  float noise2 = hash21(vPosition.yx * 0.15 + 23.7);
  float noise3 = hash21(vPosition.xy * 0.32 + 45.2);
  float combinedNoise = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;

  // Different Martian soil colors
  vec3 marsRed = vec3(0.7, 0.25, 0.15);      // Iron oxide red
  vec3 marsOrange = vec3(0.8, 0.4, 0.2);     // Rusty orange
  vec3 marsBrown = vec3(0.5, 0.3, 0.2);      // Dark soil
  vec3 marsYellow = vec3(0.6, 0.5, 0.25);    // Dusty areas

  // Height-based color variation (like sediment layers)
  float heightFactor = clamp(height / 100.0, 0.0, 1.0);
  vec3 lowColor = mix(marsRed, marsBrown, combinedNoise);
  vec3 midColor = mix(marsOrange, marsRed, combinedNoise * 0.7);
  vec3 highColor = mix(marsYellow, marsOrange, combinedNoise * 0.5);

  vec3 heightColor = mix(lowColor, midColor, smoothstep(0.3, 0.7, heightFactor));
  heightColor = mix(heightColor, highColor, smoothstep(0.6, 1.0, heightFactor));

  // Slope-based variation (exposed rock on steep slopes)
  float slopeMask = pow(slope, 0.8);
  vec3 rockMarsColor = mix(rockColor, vec3(0.6, 0.35, 0.25), 0.4);
  vec3 surfaceColor = mix(heightColor, rockMarsColor, slopeMask * 0.6);

  // Add dust/sand in flat areas
  float flatMask = 1.0 - slope;
  vec3 dustColor = mix(marsRed, marsYellow, combinedNoise);
  surfaceColor = mix(surfaceColor, dustColor, flatMask * 0.3 * combinedNoise);

  vec3 baseColor = surfaceColor;

  // Sun lighting with Mars atmosphere tint
  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float diffuse = max(dot(normal, sunDir), 0.0);

  // Martian atmosphere scatters more red light
  baseColor = mix(vec3(0.08, 0.04, 0.03), baseColor, 0.25 + 0.75 * pow(diffuse, 0.9) * sunStrength);

  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.8, 0.6, 0.5), vec3(1.1, 0.8, 0.4), clamp(uSunWarmth, 0.0, 1.0));
  baseColor = mix(baseColor, baseColor * sunTint, sunInfluence * 0.4);

  // Ambient lighting
  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  vec3 marsAmbient = mix(uAmbientColor, vec3(0.6, 0.4, 0.3), 0.5); // Reddish ambient
  baseColor += marsAmbient * ambientTerm * 0.8;

  // Specular highlights (dusty surface, low specularity)
  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(viewDir + sunDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 8.0) * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.5, 0.4, 0.3), sunTint, 0.4);
  baseColor += specTint * specular * 0.2; // Low specularity for dusty Mars surface

  // Martian atmosphere fog (butterscotch/orange tint)
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);

  // Start with normalized distance
  float normalizedDistance = (distToCamera - uFogNear) / fogRange;
  normalizedDistance = clamp(normalizedDistance, 0.0, 1.0);

  // Apply smoothstep for gradual transition
  float fogFactor = smoothstep(0.0, 1.0, normalizedDistance);

  // Add slight exponential curve for more natural atmospheric effect
  fogFactor = 1.0 - exp(-2.0 * fogFactor);

  vec3 marsFogColor = mix(uFogColor, vec3(0.8, 0.5, 0.3), 0.6); // Orange-tinted fog
  baseColor = mix(baseColor, marsFogColor, fogFactor);

  // Edge fade with smoother transition
  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float fadeRange = (distToCamera - uFadeStart) / (uFadeEnd - uFadeStart);
    fadeRange = clamp(fadeRange, 0.0, 1.0);
    // Use smoothstep for gradual edge fade
    edgeFade = 1.0 - smoothstep(0.0, 1.0, fadeRange);
  }

  gl_FragColor = vec4(baseColor * edgeFade, edgeFade);
}