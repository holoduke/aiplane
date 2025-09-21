import * as THREE from "three";

export const AdjustableFXAAShader = {
  name: "AdjustableFXAAShader",
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1 / 1024, 1 / 512) },
    uContrastThreshold: { value: 0.0312 },
    uRelativeThreshold: { value: 0.063 },
    uSubpixelBlending: { value: 1.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float uContrastThreshold;
    uniform float uRelativeThreshold;
    uniform float uSubpixelBlending;
    varying vec2 vUv;

    #define EDGE_STEP_COUNT 6
    #define EDGE_GUESS 8.0
    #define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
    const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT](EDGE_STEPS);

    vec4 Sample(sampler2D tex2D, vec2 uv) {
      return texture(tex2D, uv);
    }

    float SampleLuminance(sampler2D tex2D, vec2 uv) {
      return dot(Sample(tex2D, uv).rgb, vec3(0.3, 0.59, 0.11));
    }

    float SampleLuminance(sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset) {
      uv += texSize * vec2(uOffset, vOffset);
      return SampleLuminance(tex2D, uv);
    }

    struct LuminanceData {
      float m, n, e, s, w;
      float ne, nw, se, sw;
      float highest, lowest, contrast;
    };

    LuminanceData SampleLuminanceNeighborhood(sampler2D tex2D, vec2 texSize, vec2 uv) {
      LuminanceData l;
      l.m = SampleLuminance(tex2D, uv);
      l.n = SampleLuminance(tex2D, texSize, uv, 0.0, 1.0);
      l.e = SampleLuminance(tex2D, texSize, uv, 1.0, 0.0);
      l.s = SampleLuminance(tex2D, texSize, uv, 0.0, -1.0);
      l.w = SampleLuminance(tex2D, texSize, uv, -1.0, 0.0);
      l.ne = SampleLuminance(tex2D, texSize, uv, 1.0, 1.0);
      l.nw = SampleLuminance(tex2D, texSize, uv, -1.0, 1.0);
      l.se = SampleLuminance(tex2D, texSize, uv, 1.0, -1.0);
      l.sw = SampleLuminance(tex2D, texSize, uv, -1.0, -1.0);
      l.highest = max(max(max(max(l.n, l.e), l.s), l.w), l.m);
      l.lowest = min(min(min(min(l.n, l.e), l.s), l.w), l.m);
      l.contrast = l.highest - l.lowest;
      return l;
    }

    bool ShouldSkipPixel(LuminanceData l) {
      float threshold = max(uContrastThreshold, uRelativeThreshold * l.highest);
      return l.contrast < threshold;
    }

    float DeterminePixelBlendFactor(LuminanceData l) {
      float f = 2.0 * (l.n + l.e + l.s + l.w);
      f += l.ne + l.nw + l.se + l.sw;
      f *= 1.0 / 12.0;
      f = abs(f - l.m);
      f = l.contrast > 0.0 ? clamp(f / l.contrast, 0.0, 1.0) : 0.0;
      float blendFactor = smoothstep(0.0, 1.0, f);
      blendFactor = blendFactor * blendFactor;
      return blendFactor * uSubpixelBlending;
    }

    struct EdgeData {
      bool isHorizontal;
      float pixelStep;
      float oppositeLuminance;
      float gradient;
    };

    EdgeData DetermineEdge(vec2 texSize, LuminanceData l) {
      EdgeData e;
      float horizontal =
          abs(l.n + l.s - 2.0 * l.m) * 2.0 +
          abs(l.ne + l.se - 2.0 * l.e) +
          abs(l.nw + l.sw - 2.0 * l.w);
      float vertical =
          abs(l.e + l.w - 2.0 * l.m) * 2.0 +
          abs(l.ne + l.nw - 2.0 * l.n) +
          abs(l.se + l.sw - 2.0 * l.s);
      e.isHorizontal = horizontal >= vertical;

      float pLuminance = e.isHorizontal ? l.n : l.e;
      float nLuminance = e.isHorizontal ? l.s : l.w;
      float pGradient = abs(pLuminance - l.m);
      float nGradient = abs(nLuminance - l.m);

      e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

      if (pGradient < nGradient) {
        e.pixelStep = -e.pixelStep;
        e.oppositeLuminance = nLuminance;
        e.gradient = nGradient;
      } else {
        e.oppositeLuminance = pLuminance;
        e.gradient = pGradient;
      }

      return e;
    }

    vec2 DetermineEndpoints(vec2 texSize, vec2 uv, EdgeData edge) {
      float gradientThreshold = EDGE_GUESS * edge.gradient;
      vec2 uvEdge = edge.isHorizontal ? vec2(0.0, edge.pixelStep) : vec2(edge.pixelStep, 0.0);
      vec2 uvPerp = edge.isHorizontal ? vec2(texSize.x, 0.0) : vec2(0.0, texSize.y);

      vec2 uvNeg = uv;
      vec2 uvPos = uv;
      float luminanceNeg = 0.0;
      float luminancePos = 0.0;
      bool doneNeg = false;
      bool donePos = false;

      for (int i = 0; i < EDGE_STEP_COUNT; ++i) {
        float stepLength = edgeSteps[i];
        if (!doneNeg) {
          uvNeg -= uvEdge * stepLength;
          luminanceNeg = SampleLuminance(tDiffuse, uvNeg);
          float deltaNeg = abs(luminanceNeg - edge.oppositeLuminance);
          doneNeg = deltaNeg > gradientThreshold;
        }
        if (!donePos) {
          uvPos += uvEdge * stepLength;
          luminancePos = SampleLuminance(tDiffuse, uvPos);
          float deltaPos = abs(luminancePos - edge.oppositeLuminance);
          donePos = deltaPos > gradientThreshold;
        }
      }

      return vec2(doneNeg ? uvNeg.x : uv.x, donePos ? uvPos.x : uv.x);
    }

    void main() {
      vec2 texSize = resolution;
      LuminanceData l = SampleLuminanceNeighborhood(tDiffuse, texSize, vUv);
      if (ShouldSkipPixel(l)) {
        gl_FragColor = Sample(tDiffuse, vUv);
        return;
      }

      float blendFactor = DeterminePixelBlendFactor(l);
      EdgeData edge = DetermineEdge(texSize, l);
      vec2 uvEdge = edge.isHorizontal ? vec2(0.0, edge.pixelStep) : vec2(edge.pixelStep, 0.0);
      vec2 uvPerp = edge.isHorizontal ? vec2(texSize.x, 0.0) : vec2(0.0, texSize.y);

      vec2 uvNeg = vUv;
      vec2 uvPos = vUv;
      float luminanceNeg = l.m;
      float luminancePos = l.m;
      bool doneNeg = false;
      bool donePos = false;

      for (int i = 0; i < EDGE_STEP_COUNT; ++i) {
        float stepLength = edgeSteps[i];
        if (!doneNeg) {
          uvNeg -= uvEdge * stepLength;
          luminanceNeg = SampleLuminance(tDiffuse, uvNeg);
          doneNeg = abs(luminanceNeg - l.m) >= edge.gradient;
        }
        if (!donePos) {
          uvPos += uvEdge * stepLength;
          luminancePos = SampleLuminance(tDiffuse, uvPos);
          donePos = abs(luminancePos - l.m) >= edge.gradient;
        }
      }

      float distanceNeg = edge.isHorizontal ? uvNeg.y - vUv.y : uvNeg.x - vUv.x;
      float distancePos = edge.isHorizontal ? uvPos.y - vUv.y : uvPos.x - vUv.x;
      float distance = min(abs(distanceNeg), abs(distancePos));
      float edgeBlend = max(0.0, 1.0 - EDGE_GUESS * edge.gradient);
      edgeBlend *= edgeBlend;
      float finalBlend = min(blendFactor, edgeBlend);

      vec2 finalUv = vUv + uvPerp * finalBlend * sign(distanceNeg + distancePos) * 0.5;
      vec4 result = mix(Sample(tDiffuse, vUv), Sample(tDiffuse, finalUv), uSubpixelBlending);
      gl_FragColor = result;
    }
  `,
};
