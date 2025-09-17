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
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  vec2 st = p.xy / 1024.0;
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  h += 4.0 * texture2D(uHeightData, 256.0 * st).r;
  return h * h / 2000.0;
}

vec3 getNormal() {
  float height = getHeight(vPosition);
  vec3 p = vec3(vPosition.xy, height);
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);
  return normalize(cross(dPositiondx, dPositiondy));
}

float hash(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);

  float n000 = hash(i);
  float n100 = hash(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash(i + vec3(1.0, 1.0, 1.0));

  vec3 u = f * f * (3.0 - 2.0 * f);

  float nx00 = mix(n000, n100, u.x);
  float nx10 = mix(n010, n110, u.x);
  float nx01 = mix(n001, n101, u.x);
  float nx11 = mix(n011, n111, u.x);

  float nxy0 = mix(nx00, nx10, u.y);
  float nxy1 = mix(nx01, nx11, u.y);

  return mix(nxy0, nxy1, u.z);
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.3;
  vec3 shift = vec3(37.1, 17.3, 29.7);

  for (int i = 0; i < 4; ++i) {
    value += amplitude * noise(p);
    p = p * 2.2 + shift;
    amplitude *= 0.25;
  }

  return value;
}

vec3 prismPalette(vec3 worldPos) {
  vec3 scaled = worldPos * 0.08;
  float bandA = fbm(scaled * 1.4);
  float bandB = fbm(scaled * 3.6 + vec3(2.3, 4.1, -1.7));
  float bandC = fbm(scaled * 6.4 + vec3(-5.2, 3.7, 2.9));

  vec3 c1 = vec3(0.45, 0.88, 1.45);
  vec3 c2 = vec3(0.86, 0.55, 1.28);
  vec3 c3 = vec3(0.28, 1.05, 0.82);
  vec3 c4 = vec3(1.35, 0.82, 0.48);

  vec3 base = mix(c1, c2, smoothstep(0.15, 0.85, bandA));
  vec3 accent = mix(c3, c4, smoothstep(0.2, 0.8, bandB));
  vec3 blend = mix(base, accent, bandC);

  float sparkle = fbm(worldPos * 0.22 + vec3(8.2, -1.7, 3.4));
  blend += vec3(1.35, 1.6, 1.9) * sparkle * 0.35;

  return blend;
}

void main() {
  vec3 baseNormal = normalize(vNormal);
  vec3 refinedNormal = normalize(mix(baseNormal, getNormal(), uSmoothFactor));
  vec3 sunDir = normalize(uSunDirection);
  vec3 viewDir = normalize(cameraPosition - vPosition);

  vec3 prism = prismPalette(vPosition);
  float facing = clamp(dot(refinedNormal, viewDir), 0.0, 1.0);
  float fresnel = pow(1.0 - facing, 2.5);
  vec3 color = mix(prism * 0.4, prism, fresnel);

  float sunStrength = clamp(uSunIntensity, 0.0, 6.0);
  float diffuse = max(dot(refinedNormal, sunDir), 0.0);
  color += prism * pow(diffuse, 1.5) * sunStrength * 0.6;

  vec3 halfVec = normalize(sunDir + viewDir);
  float specular = pow(max(dot(refinedNormal, halfVec), 0.0), 96.0);
  color += vec3(1.2, 1.1, 1.4) * specular * uSpecularStrength * sunStrength * 2.4;

  float ambientTerm = max(dot(refinedNormal, normalize(uAmbientDirection)), 0.0);
  color += uAmbientColor * ambientTerm * (uAmbientIntensity * 1.2);

  float skyFacing = clamp(refinedNormal.z, 0.0, 1.0);
  float tintMix = uSkyTintStrength * pow(skyFacing, 0.8);
  color = mix(color, uSkyTintColor * 1.35, tintMix);

  float distToCamera = length(cameraPosition - vPosition);
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  float fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  vec3 fogged = mix(color, uFogColor, fogFactor * 0.9);

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }

  gl_FragColor = vec4(fogged * edgeFade, edgeFade);
}
