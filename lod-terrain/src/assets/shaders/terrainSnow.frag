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
uniform float uSunWarmth; // This is now optional
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


void main() {
  // Base color
  vec3 terrainNormal = normalize(cross(dFdx(vPosition), dFdy(vPosition)));
  vec3 normal = normalize(mix(normalize(vNormal), terrainNormal, uSmoothFactor));
  vec3 sunDir = normalize(uSunDirection);
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;

  // Combine textures based on height and normal
  float texScale = 0.03;

  float snowStick = dot( vec3( 0, 0, 1.0 ), normal );
  snowStick = pow( snowStick, 3.0 );
  snowStick = step( 0.2, snowStick );
  
  vec3 rock = texture2D( uRock, texScale * vPosition.xy ).rgb;
  vec3 snow = vec3( 0.93, 0.97, 1.0 );
  vec3 color = mix( rock, snow, snowStick );

  // Incident light
  float diffuse = max(dot(normal, sunDir), 0.0);
  float lightMix = 0.03 + 0.97 * pow(diffuse, 0.72) * sunStrength;
  color = mix(vec3(0.02, 0.02, 0.03), color, clamp(lightMix, 0.0, 1.2));
  color = mix(color, vec3(0.81, 0.9, 1.0), 0.2 * clamp(diffuse * sunStrength, 0.0, 1.0));
  
  // --- YELLOW COLOR REMOVED FROM SUN TINT ---
  vec3 sunTint = vec3(0.62, 0.78, 1.02); // Using a cool, neutral tint
  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  color = mix(color, color * sunTint, sunInfluence * 0.55);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * pow(skyFacing, 0.75);
  color = mix(color, uSkyTintColor, skyTintMix);

  // Mix in specular light
  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(sunDir + viewDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 25.0) * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.9, 0.98, 1.0), sunTint, 0.5);
  color = mix(color, specTint, 0.15 * specular * uSpecularStrength);

  // Add height fog
  float fogFactor = clamp( 1.0 - vPosition.z / 155.0, 0.0, 1.0 );
  fogFactor = 0.96 * pow( fogFactor, 5.4 );
  vec3 fogColor = vec3( 0.86, 0.95, 1.0 );
  color = mix( color, fogColor, fogFactor );

  // Add distance fog
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);

  // --- YELLOW COLOR REMOVED FROM FOG ---
  fogColor = uFogColor; // Using the base fog color without the yellow tint
  color = mix( color, fogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCameraFade = viewDistance;
    edgeFade = 1.0 - clamp((distToCameraFade - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}