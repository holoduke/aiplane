// Built-ins provided by three.js:
//   modelMatrix, viewMatrix, projectionMatrix, position, normal

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec3 vLocalNormal;
varying vec3 vLocalPosition;

void main() {
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;

  // Local (pre-rotation) normal + position so the fragment shader can build
  // a window grid aligned to the building's own faces, independent of yaw.
  vLocalNormal = normalize(normal);
  vLocalPosition = position;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
