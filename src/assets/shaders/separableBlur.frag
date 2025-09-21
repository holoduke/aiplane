uniform sampler2D tDiffuse;
uniform vec2 uDirection;
uniform float uSigma;

varying vec2 vUv;

float gaussian(float x, float sigma) {
  return exp(-(x * x) / (2.0 * sigma * sigma));
}

void main() {
  // 9-tap separable gaussian blur
  float sigma = max(uSigma, 0.0001);
  vec2 texel = uDirection;

  vec4 result = vec4(0.0);
  float total = 0.0;

  for (int i = -4; i <= 4; i++) {
    float offset = float(i);
    float weight = gaussian(offset, sigma);
    vec2 sampleUv = vUv + texel * offset;
    result += texture2D(tDiffuse, sampleUv) * weight;
    total += weight;
  }

  gl_FragColor = result / total;
}
