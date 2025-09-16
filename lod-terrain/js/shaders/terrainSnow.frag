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

uniform sampler2D uGrass;
uniform sampler2D uRock;
uniform sampler2D uSnow;

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

void main() {
  // Base color
  vec3 terrainNormal = normalize(cross(dFdx(vPosition), dFdy(vPosition)));
  vec3 normal = normalize(mix(normalize(vNormal), terrainNormal, uSmoothFactor));
  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0);

  // Combine textures based on height and normal (use rougher normal from vertex shader)
  float texScale = 0.03;

  // Snow stick determines effect of normal on presence of snow
  float snowStick = dot( vec3( 0, 0, 1.0 ), normal );
  snowStick = pow( snowStick, 3.0 );
  snowStick = step( 0.2, snowStick );
  float snowAlt = 20.0;

  vec3 grass = texture2D( uGrass, texScale * vPosition.xy ).rgb;
  vec3 rock = texture2D( uRock, texScale * vPosition.xy ).rgb;
  //vec3 snow = texture2D( uSnow, texScale * vPosition.xy ).rgb;
  vec3 snow = vec3( 0.93, 0.97, 1.0 );
  //vec3 color = mix( grass, rock, smoothstep( 7.0, 14.0, vPosition.z ) );
  //vec3 color = mix( rock, snow, smoothstep( snowAlt, snowAlt + 10.0, snowAlt + snowStick * ( vPosition.z - snowAlt ) ) );
  vec3 color = mix( rock, snow, snowStick );
  //color = vec3(vMorphFactor);


  // Incident light (generate shadows and highlights)
  float diffuse = max(dot(normal, sunDir), 0.0);
  float shadowFactor = 0.03 + 0.97 * pow(diffuse, 0.72) * sunStrength;
  color = mix(vec3(0.02, 0.02, 0.03), color, clamp(shadowFactor, 0.0, 1.2));
  color = mix(color, vec3(0.81, 0.9, 1.0), 0.2 * clamp(diffuse * sunStrength, 0.0, 1.0));
  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  // Fade out based on distance
  //color = mix( color, vec3( 0, 0, 0 ), smoothstep( 350.0, 500.0, distance( light, vPosition ) ) );

  // Mix in specular light
  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(sunDir + viewDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 25.0) * sunStrength * uSpecularStrength;
  color = mix(color, vec3(0.9, 0.98, 1.0), 0.15 * specular * uSpecularStrength);

  // Add height fog
  float fogFactor = clamp( 1.0 - vPosition.z / 155.0, 0.0, 1.0 );
  fogFactor = 0.96 * pow( fogFactor, 5.4 );
  float fogAngle = dot( normalize( cameraPosition - vPosition ), sunDir );
  fogAngle = smoothstep( 0.0, 1.0, fogAngle );
  //vec3 fogColor = mix( vec3( 0.86, 0.95, 1.0 ), vec3( 0.98, 0.77, 0.33), fogAngle );
  vec3 fogColor = vec3( 0.86, 0.95, 1.0 );
  color = mix( color, fogColor, fogFactor );

  // Add distance fog
  float distToCamera = length(cameraPosition - vPosition);
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  //fogFactor = fogFactor * ( 1.0 - clamp( ( camH - 5.0 ) / 8.0, 0.0, 1.0 ) );
  fogColor = mix( uFogColor, vec3( 0.98, 0.77, 0.33), fogAngle );
  color = mix( color, fogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCamera = length(cameraPosition - vPosition);
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
