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
#include <terrainShadow.glsl>

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

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

float getHeight(vec3 p) {
  // Assume a 1024x1024 world
  vec2 st = p.xy / 1024.0;

  // Sample multiple times to get more detail out of map
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  h += 4.0 * texture2D(uHeightData, 256.0 * st).r;

  // Square the height, leads to more rocky looking terrain
  return h * h / 2000.0;
}

vec3 getNormal() {
  // Differentiate the position vector (this will give us two vectors perpendicular to the surface)
  // Before differentiating, add the displacement based on the height from the height map. By doing this
  // calculation here, rather than in the vertex shader, we get a per-fragment calculated normal, rather
  // than a per-vertex normal. This improves the look of distant low-vertex terrain.
  float height = getHeight( vPosition );
  vec3 p = vec3( vPosition.xy, height );
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);

  // The normal is the cross product of the differentials
  return normalize(cross(dPositiondx, dPositiondy));
}

void main() {
  vec3 color = vec3(0.27, 0.27, 0.17);
  vec3 normal = normalize(mix(normalize(vNormal), getNormal(), uSmoothFactor));

  vec3 sunDir = normalize(uSunDirection);
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float diffuse = max(dot(normal, sunDir), 0.0);
  float diffuseTerm = pow(diffuse, 0.75) * sunStrength;
  color = mix(vec3(0.05, 0.05, 0.08), color, clamp(0.25 + diffuseTerm, 0.0, 1.2));

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * pow(skyFacing, 0.65);
  color = mix(color, uSkyTintColor, skyTintMix);

  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(sunDir + viewDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 30.0) * sunStrength * uSpecularStrength;
  color += 0.08 * specular;

  // Add height fog
  float fogFactor = clamp( 1.0 - vPosition.z / 25.0, 0.0, 1.0 );
  fogFactor = pow( fogFactor, 5.4 );
  color = mix( color, vec3( 1.0, 0.9, 0.8 ), fogFactor );

  // Add distance fog
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  //fogFactor = fogFactor * ( 1.0 - clamp( ( camH - 5.0 ) / 8.0, 0.0, 1.0 ) );
  color = mix( color, uFogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCamera = length(cameraPosition - vPosition);
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
