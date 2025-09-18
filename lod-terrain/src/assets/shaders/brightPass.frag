uniform sampler2D tDiffuse;
uniform float uThreshold;
uniform float uSoftKnee;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));

  float knee = uSoftKnee;
  float threshold = uThreshold - knee;
  float softness = clamp((brightness - threshold) / (knee + 1e-4), 0.0, 1.0);
  float weight = max(brightness - uThreshold, 0.0) + knee * softness;
  weight = max(weight, 0.0);

  gl_FragColor = color * weight;
}
