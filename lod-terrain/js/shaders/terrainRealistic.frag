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
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;
#include <terrainShadow.glsl>

uniform sampler2D uGrass;
uniform sampler2D uRock;
uniform sampler2D uSnow;

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

void main() {
  vec3 normal = normalize(mix(vNormal, getNormal(), uSmoothFactor));
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  vec3 up = vec3(0.0, 0.0, 1.0);
  float slope = clamp(dot(normal, up), 0.0, 1.0);

  float height = vPosition.z;
  float texScale = 0.03;

  vec3 grass = texture2D(uGrass, texScale * vPosition.xy).rgb;
  vec3 rock = texture2D(uRock, texScale * vPosition.xy).rgb;
  vec3 snow = texture2D(uSnow, texScale * vPosition.xy).rgb;
  vec3 waterDeep = vec3(0.62, 0.66, 0.68);
  vec3 waterShallow = vec3(0.78, 0.81, 0.84);

  float waterLevel = 5.0;
  float grassUpper = 32.0;
  float rockLower = 28.0;
  float rockUpper = 75.0;
  float snowLower = 70.0;

  float waterWeight = 1.0 - smoothstep(waterLevel - 4.0, waterLevel + 2.0, height);
  float shallowFactor = smoothstep(waterLevel - 6.0, waterLevel + 1.0, height);
  vec3 water = mix(waterDeep, waterShallow, shallowFactor);

  float grassWeight = smoothstep(waterLevel - 6.0, grassUpper + 12.0, height);
  grassWeight *= 1.0 - smoothstep(rockLower - 6.0, rockLower + 10.0, height);
  grassWeight *= pow(slope, 1.5);

  float rockWeight = smoothstep(rockLower - 12.0, rockLower + 18.0, height);
  rockWeight *= 1.0 - smoothstep(rockUpper - 8.0, rockUpper + 12.0, height);
  float slopeRock = pow(1.0 - slope, 2.2);
  rockWeight = max(rockWeight, slopeRock);

  float snowStick = pow(slope, 3.0);
  float snowWeight = smoothstep(snowLower - 15.0, snowLower + 15.0, height) * snowStick;

  float total = waterWeight + grassWeight + rockWeight + snowWeight;
  if (total < 0.0001) {
    grassWeight = 1.0;
    total = 1.0;
  }

  vec3 color =
      (waterWeight * water + grassWeight * grass + rockWeight * rock + snowWeight * snow) /
      total;

  float waterContribution = waterWeight / total;

  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float incidence = max(dot(sunDir, normal), 0.0);
  incidence = pow(incidence, 0.8);
  color = mix(vec3(0.08, 0.06, 0.07), color, clamp(0.25 + 0.8 * incidence * sunStrength, 0.0, 1.2));
  float clampedWarmth = clamp(uSunWarmth, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.62, 0.75, 0.98), vec3(1.05, 0.72, 0.48), clampedWarmth);
  vec3 warmTint = mix(vec3(0.52, 0.62, 0.88), vec3(0.72, 0.4, 0.28), clampedWarmth);
  vec3 coolTint = mix(vec3(0.62, 0.78, 0.92), vec3(0.48, 0.68, 0.82), 1.0 - clampedWarmth);
  float reverseFacing = max(dot(normal, -sunDir), 0.0);
  color = mix(color, warmTint, clamp(rockWeight * reverseFacing * 0.45 * sunStrength, 0.0, 0.6));
  color = mix(color, coolTint, clamp(rockWeight * incidence * 0.25 * sunStrength, 0.0, 0.4));
  float sunInfluence = clamp(incidence * sunStrength, 0.0, 1.0);
  color = mix(color, color * sunTint, sunInfluence * 0.45);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float dryWeight = clamp(1.0 - waterContribution, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * dryWeight * pow(skyFacing, 0.65);
  color = mix(color, uSkyTintColor, skyTintMix);

  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(viewDir + sunDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 20.0) * 1.6 * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.92, 0.98, 1.0), sunTint, 0.6);
  color = mix(color, specTint, 0.3 * specular * uSpecularStrength);

  if (waterContribution > 0.001) {
    float facing = clamp(1.0 - max(dot(normal, viewDir), 0.0), 0.0, 1.0);
    float fresnel = pow(facing, 3.0);
    vec3 reflectionColor = mix(water, vec3(0.7, 0.82, 0.95), fresnel);
    color = mix(
      color,
      reflectionColor,
      waterContribution * (0.35 + 0.45 * fresnel * sunStrength)
    );
  }

  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  float fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  vec3 fogTint = mix(uFogColor, vec3(0.78, 0.88, 1.0), 0.45);
  color = mix(color, fogTint, fogFactor);

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
