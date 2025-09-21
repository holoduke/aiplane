varying float vDistance;
varying float vElevation;

void main() {
  vDistance = distance( cameraPosition, position );

  // Calculate elevation angle from camera to vertex
  vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 dirToVertex = normalize(worldPos - cameraPosition);
  vElevation = dirToVertex.z; // Z component gives us elevation (-1 to 1)

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
