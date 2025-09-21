import * as THREE from "three";

export const SKY_KEYFRAMES = [
  { time: 0, horizon: 0x081622, sky: 0x04070f, intensity: 0.05 },
  { time: 5.5, horizon: 0x69304a, sky: 0x0c1830, intensity: 0.25 },
  { time: 6.8, horizon: 0xfea772, sky: 0x6e8fbf, intensity: 0.6 },
  { time: 12.0, horizon: 0xf0f8ff, sky: 0xb8d4f0, intensity: 1.0 },
  { time: 18.5, horizon: 0xf0f8ff, sky: 0xb8d4f0, intensity: 0.9 },
  { time: 19.5, horizon: 0xffb37a, sky: 0x7ca0d0, intensity: 0.65 },
  { time: 20.5, horizon: 0x293162, sky: 0x0b1630, intensity: 0.2 },
  { time: 24.0, horizon: 0x081622, sky: 0x04070f, intensity: 0.05 },
];

export const NEUTRAL_SKY_COLOR = new THREE.Color(0.92, 0.96, 1.0);

export function sampleSkyColors(time, keyframes = SKY_KEYFRAMES) {
  const wrapped = ((time % 24) + 24) % 24;
  let index = 0;

  for (let i = 0; i < keyframes.length - 1; i++) {
    const current = keyframes[i];
    const next = keyframes[i + 1];
    if (wrapped >= current.time && wrapped <= next.time) {
      index = i;
      break;
    }
    if (wrapped >= keyframes[keyframes.length - 1].time) {
      index = keyframes.length - 1;
    }
  }

  const start = keyframes[index];
  const end = keyframes[(index + 1) % keyframes.length];
  let span = end.time - start.time;
  if (span <= 0) span += 24;
  let offset = wrapped - start.time;
  if (offset < 0) offset += 24;
  const alpha = span === 0 ? 0 : THREE.MathUtils.clamp(offset / span, 0, 1);

  const horizonColor = new THREE.Color(start.horizon).lerp(
    new THREE.Color(end.horizon),
    alpha
  );
  const skyColor = new THREE.Color(start.sky).lerp(
    new THREE.Color(end.sky),
    alpha
  );
  const intensity = THREE.MathUtils.lerp(start.intensity, end.intensity, alpha);

  return { horizonColor, skyColor, intensity };
}

export function computeSunDirection(time) {
  const wrapped = ((time % 24) + 24) % 24;
  const azimuth = (wrapped / 24) * Math.PI * 2;
  const elevationFactor = Math.sin(((wrapped - 6) / 12) * Math.PI);
  const clampedElevation = THREE.MathUtils.clamp(elevationFactor, -0.35, 1.0);
  const lerpValue = (clampedElevation + 0.35) / 1.35;
  const elevation = THREE.MathUtils.lerp(
    THREE.MathUtils.degToRad(-20),
    THREE.MathUtils.degToRad(80),
    lerpValue
  );

  const dir = new THREE.Vector3(
    Math.cos(elevation) * Math.sin(azimuth),
    Math.cos(elevation) * Math.cos(azimuth),
    Math.sin(elevation)
  );

  return dir.normalize();
}
