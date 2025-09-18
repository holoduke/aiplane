uniform sampler2D uShadowMap0;
uniform sampler2D uShadowMap1;
uniform sampler2D uShadowMap2;
uniform vec4 uCascadeSplits;
uniform mat4 uShadowMatrices[3];
uniform float uShadowBias;
uniform float uShadowStrength;
uniform float uShadowsEnabled;
uniform vec3 uCascadeEnabled;
uniform mat4 uViewMatrix;
uniform vec2 uShadowTexelSize;
uniform float uShadowSoftness;
uniform float uCascadeTransition;

float getCascadeNear(int cascadeIndex) {
  if (cascadeIndex <= 0) return 0.0;
  if (cascadeIndex == 1) return uCascadeSplits.x;
  if (cascadeIndex == 2) return uCascadeSplits.y;
  return uCascadeSplits.z;
}

float getCascadeFar(int cascadeIndex) {
  if (cascadeIndex == 0) return uCascadeSplits.x;
  if (cascadeIndex == 1) return uCascadeSplits.y;
  if (cascadeIndex == 2) return uCascadeSplits.z;
  return uCascadeSplits.w;
}

float readShadowDepth(int cascadeIndex, vec2 uv) {
  if (cascadeIndex == 0) {
    return texture2D(uShadowMap0, uv).r;
  } else if (cascadeIndex == 1) {
    return texture2D(uShadowMap1, uv).r;
  }
  return texture2D(uShadowMap2, uv).r;
}

float filteredShadow(float currentDepth, int cascadeIndex, vec2 baseUV, float radius) {
  float occlusion = 0.0;
  float samples = 0.0;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      vec2 offset = vec2(float(x), float(y)) * uShadowTexelSize * radius;
      vec2 sampleUV = baseUV + offset;
      if (sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) {
        continue;
      }
      samples += 1.0;
      float shadowDepth = readShadowDepth(cascadeIndex, sampleUV);
      if (currentDepth > shadowDepth) {
        occlusion += 1.0;
      }
    }
  }
  if (samples <= 0.0) return 0.0;
  return occlusion / samples;
}

float sampleShadowCascade(int cascadeIndex, vec3 worldPos) {
  mat4 lightMatrix = uShadowMatrices[cascadeIndex];
  vec4 lightPos = lightMatrix * vec4(worldPos, 1.0);
  vec3 projCoords = lightPos.xyz / lightPos.w;
  projCoords = projCoords * 0.5 + 0.5;

  float currentDepth = projCoords.z - uShadowBias;
  if (projCoords.z > 1.0 || projCoords.z < 0.0) {
    return 1.0;
  }

  float cascadeScale = float(cascadeIndex) / 2.0;
  float baseRadius = mix(0.85, 2.4, cascadeScale);

  float hardPortion = filteredShadow(currentDepth, cascadeIndex, projCoords.xy, baseRadius);

  if (hardPortion <= 0.001 || hardPortion >= 0.999) {
    return mix(1.0, 1.0 - uShadowStrength, hardPortion);
  }

  float softRadius = baseRadius * uShadowSoftness;
  float softPortion = filteredShadow(currentDepth, cascadeIndex, projCoords.xy, softRadius);
  float penumbraBlend = smoothstep(0.0, 1.0, hardPortion);
  float finalPortion = mix(hardPortion, softPortion, penumbraBlend);
  return mix(1.0, 1.0 - uShadowStrength, finalPortion);
}

float computeShadowFactor(vec3 worldPos) {
  if (uShadowsEnabled < 0.5) {
    return 1.0;
  }

  vec4 viewPos = uViewMatrix * vec4(worldPos, 1.0);
  float viewDistance = -viewPos.z;
  if (viewDistance < 0.0 || viewDistance > uCascadeSplits.w) {
    return 1.0;
  }

  int cascadeIndex = 0;
  if (viewDistance > uCascadeSplits.x) cascadeIndex = 1;
  if (viewDistance > uCascadeSplits.y) cascadeIndex = 2;
  if (cascadeIndex > 2) cascadeIndex = 2;

  if (cascadeIndex == 0 && uCascadeEnabled.x < 0.5) return 1.0;
  if (cascadeIndex == 1 && uCascadeEnabled.y < 0.5) return 1.0;
  if (cascadeIndex == 2 && uCascadeEnabled.z < 0.5) return 1.0;

  float shadow = sampleShadowCascade(cascadeIndex, worldPos);

  float transition = clamp(uCascadeTransition, 0.0, 0.5);
  if (transition > 0.0) {
    float cascadeNear = getCascadeNear(cascadeIndex);
    float cascadeFar = getCascadeFar(cascadeIndex);
    float range = max(cascadeFar - cascadeNear, 1e-3);
    float blendSize = range * transition;

    if (blendSize > 0.0) {
      if (cascadeIndex == 1 && uCascadeEnabled.x > 0.5) {
        float t = clamp((viewDistance - cascadeNear) / blendSize, 0.0, 1.0);
        float prevShadow = sampleShadowCascade(0, worldPos);
        shadow = mix(prevShadow, shadow, t);
      } else if (cascadeIndex == 2 && uCascadeEnabled.y > 0.5) {
        float t = clamp((viewDistance - cascadeNear) / blendSize, 0.0, 1.0);
        float prevShadow = sampleShadowCascade(1, worldPos);
        shadow = mix(prevShadow, shadow, t);
      }

      if (cascadeIndex == 0 && uCascadeEnabled.y > 0.5) {
        float t = clamp((viewDistance - (cascadeFar - blendSize)) / blendSize, 0.0, 1.0);
        float nextShadow = sampleShadowCascade(1, worldPos);
        shadow = mix(shadow, nextShadow, t);
      } else if (cascadeIndex == 1 && uCascadeEnabled.z > 0.5) {
        float t = clamp((viewDistance - (cascadeFar - blendSize)) / blendSize, 0.0, 1.0);
        float nextShadow = sampleShadowCascade(2, worldPos);
        shadow = mix(shadow, nextShadow, t);
      }
    }
  }

  return shadow;
}
