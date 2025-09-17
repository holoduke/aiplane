
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

float getHeight( vec3 p ) {
  // Assume a 1024x1024 world
  vec2 st = p.xy / 1024.0;

  // Sample multiple times to get more detail out of map
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  //h += 4.0 * texture2D(uHeightData, 256.0 * st).r;

  // Square the height, leads to more rocky looking terrain
  return h * h / 2000.0;
}

void main() {
  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0);

  // Combine textures based on height and normal (use rougher normal from vertex shader)
  float texScale = 0.03;

  // Grass stick determines effect of normal on presence of grass
  float grassStick = dot( vec3( 0, 0, 1.0 ), vNormal );
  grassStick = pow( grassStick, 3.0 );
  grassStick = step( 0.2, grassStick );

  vec3 water = vec3( 0.23, 0.08, 0.345 );
  vec3 terrainNormal = normalize(cross(dFdx(vPosition), dFdy(vPosition)));
  vec3 normal = normalize(mix(normalize(vNormal), terrainNormal, uSmoothFactor));
  vec3 grass = vec3( 0.12, 0.87, 0.14 );
  vec3 rock = vec3( 0.31, 0.11, 0.09 );
  vec3 color = mix( water, grass, smoothstep( 7.0, 14.0, vPosition.z ) );
  color = mix( rock, color, grassStick );

  // Incident light (generate shadows and highlights)
  float incidence = max(dot(sunDir, normal), 0.0);
  float shadowFactor = 0.03 + 0.97 * pow(incidence, 0.01) * sunStrength;
  color = mix(vec3(0.0, 0.0, 0.0), color, clamp(shadowFactor, 0.0, 1.2));
  color = mix(color, vec3(0.81, 0.9, 1.0), 0.2 * clamp(incidence * sunStrength, 0.0, 1.0));
  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * pow(skyFacing, 0.65);
  color = mix(color, uSkyTintColor, skyTintMix);

  // Add height fog
  float fogFactor = smoothstep( 10.0, 8.0, vPosition.z );
  fogFactor = 0.93 * pow( fogFactor, 1.4 );
  //vec3 fogColor = mix( vec3( 0.86, 0.95, 1.0 ), vec3( 0.98, 0.77, 0.33), fogAngle );
  vec3 fogColor = vec3( 0.0, 0.6 + 0.4 * smoothstep( 3.0, 10.0, vPosition.z ), 0.935 );
  color = mix( color, fogColor, fogFactor );

  // Add distance fog
  float distToCamera = length(cameraPosition - vPosition);
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  fogColor = uFogColor;
  color = mix( color, fogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCamera = length(cameraPosition - vPosition);
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
