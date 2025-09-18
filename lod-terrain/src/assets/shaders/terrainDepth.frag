precision highp float;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vMorphFactor;

void main() {
  // Depth-only pass, color output is disabled.
  gl_FragColor = vec4(1.0);
}
