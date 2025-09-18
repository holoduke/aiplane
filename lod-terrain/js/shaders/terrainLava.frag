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
  float texScale = 0.03;

  vec3 rockColor = texture2D(uRock, texScale * vPosition.xy).rgb;
  rockColor = mix(rockColor, vec3(0.3, 0.25, 0.22), 0.35);

  float lavaLevel = 8.5;
  float depthMask = smoothstep(lavaLevel + 2.0, lavaLevel - 14.0, height);
  float slope = 1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
  float slopeMask = pow(slope, 1.05);

  float lavaNoise = hash21(vPosition.xy * 0.12);
  lavaNoise += 0.5 * hash21(vPosition.yx * 0.22 + 17.0);
  lavaNoise += sin(vPosition.x * 0.08) * 0.25 + cos(vPosition.y * 0.12) * 0.25;
  lavaNoise = clamp(0.5 + 0.5 * lavaNoise, 0.0, 1.0);
  lavaNoise = clamp(lavaNoise, 0.0, 1.0);

  float lavaMask = clamp(mix(depthMask, depthMask * slopeMask, 0.25) + 0.22 * slopeMask, 0.0, 1.0);

  float ridgeHeightMask = smoothstep(lavaLevel + 2.0, lavaLevel + 1.5, height) * smoothstep(lavaLevel + 8.0, lavaLevel + 2.0, height);
  float ridgeNoise = pow(clamp(hash21(vPosition.xy * 0.34 + 12.37), 0.0, 1.0), 2.5);
  float ridgeContribution = ridgeHeightMask * slopeMask * ridgeNoise;
  lavaMask = clamp(lavaMask + 0.25 * ridgeContribution, 0.0, 1.0);

  lavaMask = smoothstep(0.1, 0.9, lavaMask);

  vec3 lavaHot = vec3(4.0, 1.25, 0.25);
  vec3 lavaCool = vec3(1.2, 0.14, 0.03);
  vec3 lavaColor = mix(lavaHot, lavaCool, pow(lavaNoise, 2.5));

  vec3 baseColor = mix(rockColor, lavaColor, lavaMask);

  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float diffuse = max(dot(normal, sunDir), 0.0);
  baseColor = mix(vec3(0.05, 0.04, 0.05), baseColor, 0.35 + 0.65 * pow(diffuse, 0.8) * sunStrength);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  baseColor += uAmbientColor * ambientTerm;

  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(viewDir + sunDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 14.0) * sunStrength * uSpecularStrength;
  baseColor += vec3(0.45, 0.42, 0.38) * specular * 0.6;

  vec3 lavaGlow = lavaColor * lavaMask * 6.0;
  baseColor += lavaGlow;

  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  float fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  vec3 fogTint = mix(uFogColor, vec3(0.7, 0.25, 0.15), 0.25);
  baseColor = mix(baseColor, fogTint, fogFactor);

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }

  gl_FragColor = vec4(baseColor * edgeFade, edgeFade);
}
