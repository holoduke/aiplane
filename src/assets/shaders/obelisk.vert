// Don't redeclare built-in Three.js uniforms and attributes
// They are already available: modelMatrix, viewMatrix, projectionMatrix, normalMatrix, position, normal

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  // Transform normal to world space (not view space)
  vWorldNormal = normalize(mat3(modelMatrix) * normal);

  // Transform position to world space
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}