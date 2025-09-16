uniform vec3 uHorizonColor;
uniform vec3 uSkyColor;

varying float vDistance;
varying float vElevation;

void main() {
  // Use elevation angle for gradient (horizon = 0, zenith = 1, nadir = -1)
  float blend = smoothstep( -0.1, 0.6, vElevation );
  vec3 color = mix( uHorizonColor, uSkyColor, blend );
  gl_FragColor = vec4( color, 0.8 ); // Semi-transparent
}
