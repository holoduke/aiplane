precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform float uDetailStrength;
uniform vec2 uGridOffset;
uniform float uDebugMode;
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

uniform sampler2D uMars;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  // Simple texture sampling from generated heightmap
  vec2 st = p.xy / 1024.0;

  // Sample with adjustable detail strength
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += uDetailStrength * 64.0 * texture2D(uHeightData, 16.0 * st).r;
  h += uDetailStrength * 4.0 * texture2D(uHeightData, 256.0 * st).r;

  // Square the height for rocky terrain
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

vec3 colorForScale(float scale) {
  if ( scale > 32.0 ) {
    scale /= 32.0;
  }
  if ( scale <= 1.0 ) {
    return vec3(1.0, 0, 0);
  } else if ( scale <= 2.0 ) {
    return vec3(0, 1.0, 0);
  } else if ( scale <= 4.0 ) {
    return vec3(0, 0, 1.0);
  } else if ( scale <= 8.0 ) {
    return vec3(1.0, 1.0, 0);
  } else if ( scale <= 16.0 ) {
    return vec3(1.0, 0, 1.0);
  } else if ( scale <= 32.0 ) {
    return vec3(1.0, 1.0, 1.0);
  }

  // Shouldn't happen
  return vec3(0, 0, 0);
}

void main() {
  vec3 normal = normalize(mix(vNormal, getNormal(), uSmoothFactor));
  float height = vPosition.z;
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float texScale = 0.025;

  // Clean Mars color with height-based shading
  vec3 baseColor = vec3(0.8, 0.6, 0.4); // Solid Mars-like color

  // Smooth transition between flat and rocky areas
  vec3 sunDir = normalize(uSunDirection);
  float diffuse = max(dot(normal, sunDir), 0.0);
  float ambient = 0.25; // Increased ambient for lighter mountain shadows
  float lighting = ambient + diffuse * 0.8 * shadowFactor; // Increased diffuse contrast

  // Calculate transition factor for smooth blending
  float transitionFactor = smoothstep(30.0, 40.0, height); // Smooth transition from 30 to 80

  if (height < 80.0) {
    // Calculate noise intensity based on height - minimum noise at bottom, more textured higher up
    float heightBasedNoise = smoothstep(0.0, 60.0, height); // 0 at bottom, 1 at height 60
    float noiseIntensity = mix(0.15, 1.2, heightBasedNoise); // Minimum 15% noise at bottom, 120% at top

    // Sample mars texture at different scales for flat areas
    vec3 texture1 = texture2D(uMars, vPosition.xy * 0.015).rgb;
    vec3 texture2 = texture2D(uMars, vPosition.xy * 0.03).rgb;
    vec3 textureColor = mix(texture1, texture2, 0.3);

    // Blend texture with smooth color based on height and apply lighting with shadows
    vec3 smoothColor = vec3(0.85, 0.5, 0.35); // Reddish Mars color
    vec3 textureBlend = mix(smoothColor, textureColor, noiseIntensity);

    // Mix between minimal lighting (for very flat areas) and full lighting (for higher areas)
    vec3 simpleFlatColor = textureBlend * (0.5 + 0.5 * shadowFactor); // Darker shadows on flat terrain
    vec3 litFlatColor = textureBlend * (ambient + diffuse * 0.8 * shadowFactor); // Full lighting and shadows

    // Transition factor for lighting influence (0 at very bottom, 1 at transition height)
    float lightingMix = smoothstep(10.0, 16.0, height);
    vec3 flatColor = mix(simpleFlatColor, litFlatColor, lightingMix);
    
    // Lit rocky color for higher areas - same reddish color
    vec3 rockyColor = vec3(0.85, 0.5, 0.35) * lighting;

    // Smooth transition between flat and rocky
    baseColor = mix(flatColor, rockyColor, transitionFactor);
  } else {
    // Full rocky areas with normal lighting - same reddish color
    baseColor = vec3(0.85, 0.5, 0.35) * lighting;
  }

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

  // Debug mode: Show LOD levels and chunk boundaries
  if (uDebugMode > 0.5) {
    // Show LOD colors based on scale
    vec3 debugColor = colorForScale(uScale);

    // Add grid lines to show chunk boundaries
    vec2 gridPos = fract(vPosition.xy / uScale) - 0.5;
    float gridLine = max(
      smoothstep(0.48, 0.5, abs(gridPos.x)),
      smoothstep(0.48, 0.5, abs(gridPos.y))
    );

    // Mix debug color with grid lines
    debugColor = mix(debugColor, vec3(0.0), gridLine * 0.5);

    // Show scale number as brightness modulation
    float scaleIndicator = mod(uScale / 16.0, 1.0);
    debugColor *= (0.7 + 0.3 * scaleIndicator);

    gl_FragColor = vec4(debugColor * edgeFade, edgeFade);
  } else {
    gl_FragColor = vec4(baseColor * edgeFade, edgeFade);
  }
}