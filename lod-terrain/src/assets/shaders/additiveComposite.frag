uniform sampler2D tDiffuse;
uniform sampler2D tBloom;
uniform float uBloomStrength;

varying vec2 vUv;

void main() {
  vec4 baseColor = texture2D(tDiffuse, vUv);
  vec3 bloomColor = texture2D(tBloom, vUv).rgb * uBloomStrength;
  gl_FragColor = vec4(baseColor.rgb + bloomColor, baseColor.a);
}
