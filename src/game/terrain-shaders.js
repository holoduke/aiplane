// Terrain Shader System
// Vertex and Fragment shaders for GPU-based terrain rendering

export const TerrainShaders = {
  vertexShader: `
      uniform sampler2D heightTexture;
      uniform float heightScale;
      uniform float tileSize;
      uniform vec2 worldOffset;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying float vHeight;
      varying vec2 vHeightUV;
      varying vec3 vWorldPosition;
      
      void main() {
        vPosition = position;
        
        // Calculate world position
        vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vWorldPosition = worldPos;
        
        // Calculate heightmap UV coordinates with world offset
        vec2 heightUV = (worldPos.xz + worldOffset) / tileSize;
        heightUV = fract(heightUV); // Tile the heightmap seamlessly
        vHeightUV = heightUV;
        
        // Sample height from texture
        float height = texture2D(heightTexture, heightUV).r * heightScale;
        vHeight = height;
        
        // Apply height displacement to vertex
        vec3 newPosition = position;
        newPosition.z = height;
        
        // Calculate normal for accurate lighting
        float texelSize = 1.0 / 512.0; // Heightmap resolution
        float heightL = texture2D(heightTexture, heightUV + vec2(-texelSize, 0.0)).r * heightScale;
        float heightR = texture2D(heightTexture, heightUV + vec2(texelSize, 0.0)).r * heightScale;
        float heightD = texture2D(heightTexture, heightUV + vec2(0.0, -texelSize)).r * heightScale;
        float heightU = texture2D(heightTexture, heightUV + vec2(0.0, texelSize)).r * heightScale;
        
        // Compute surface normal using finite differences
        vec3 normal = normalize(vec3(
          (heightL - heightR) / (2.0 * texelSize * tileSize),
          2.0,
          (heightD - heightU) / (2.0 * texelSize * tileSize)
        ));
        
        vNormal = normalMatrix * normal;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,

  fragmentShader: `
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      uniform float time;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform float sunIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying float vHeight;
      varying vec2 vHeightUV;
      varying vec3 vWorldPosition;
      
      // Enhanced terrain color palette based on height
      vec3 getTerrainColor(float height, vec3 normal, vec2 uv) {
        vec3 color;
        
        // Add some noise for texture variation
        float noise = sin(uv.x * 50.0) * cos(uv.y * 50.0) * 0.1;
        float adjustedHeight = height + noise * 10.0;
        
        if (adjustedHeight < 30.0) {
          // Deep water - dark blue
          color = vec3(0.05, 0.1, 0.3);
        } else if (adjustedHeight < 40.0) {
          // Shallow water - blue
          float t = (adjustedHeight - 30.0) / 10.0;
          color = mix(vec3(0.05, 0.1, 0.3), vec3(0.1, 0.3, 0.8), t);
        } else if (adjustedHeight < 45.0) {
          // Water edge - blue to sandy
          float t = (adjustedHeight - 40.0) / 5.0;
          color = mix(vec3(0.1, 0.3, 0.8), vec3(0.8, 0.7, 0.5), t);
        } else if (adjustedHeight < 80.0) {
          // Beach/Shore - sandy
          float t = (adjustedHeight - 45.0) / 35.0;
          color = mix(vec3(0.8, 0.7, 0.5), vec3(0.7, 0.8, 0.4), t);
        } else if (adjustedHeight < 150.0) {
          // Grass - bright green
          float t = (adjustedHeight - 80.0) / 70.0;
          color = mix(vec3(0.7, 0.8, 0.4), vec3(0.3, 0.7, 0.2), t);
        } else if (adjustedHeight < 250.0) {
          // Forest - darker green
          float t = (adjustedHeight - 150.0) / 100.0;
          color = mix(vec3(0.3, 0.7, 0.2), vec3(0.2, 0.5, 0.1), t);
        } else if (adjustedHeight < 400.0) {
          // Hills - brown/tan
          float t = (adjustedHeight - 250.0) / 150.0;
          color = mix(vec3(0.2, 0.5, 0.1), vec3(0.6, 0.4, 0.2), t);
        } else if (adjustedHeight < 500.0) {
          // Mountain slopes - gray-brown
          float t = (adjustedHeight - 400.0) / 100.0;
          color = mix(vec3(0.6, 0.4, 0.2), vec3(0.4, 0.4, 0.3), t);
        } else if (adjustedHeight < 600.0) {
          // Rocky areas - gray
          float t = (adjustedHeight - 500.0) / 100.0;
          color = mix(vec3(0.4, 0.4, 0.3), vec3(0.5, 0.5, 0.5), t);
        } else {
          // Snow peaks - white
          float t = min((adjustedHeight - 600.0) / 200.0, 1.0);
          color = mix(vec3(0.5, 0.5, 0.5), vec3(0.95, 0.98, 1.0), t);
        }
        
        // Add slope-based variation (steeper = darker)
        float slope = 1.0 - abs(normal.y);
        color = mix(color, color * 0.7, slope * 0.3);
        
        return color;
      }
      
      // Simple Blinn-Phong lighting
      vec3 calculateLighting(vec3 color, vec3 normal, vec3 lightDir, vec3 viewDir) {
        // Ambient
        vec3 ambient = color * 0.3;
        
        // Diffuse
        float NdotL = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = color * NdotL * 0.7;
        
        // Specular (subtle for terrain)
        vec3 halfDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfDir), 0.0);
        float spec = pow(NdotH, 32.0) * 0.1;
        vec3 specular = vec3(spec);
        
        return ambient + diffuse + specular;
      }
      
      void main() {
        vec3 normal = normalize(vNormal);
        
        // Get terrain color based on height and normal
        vec3 terrainColor = getTerrainColor(vHeight, normal, vHeightUV);
        
        // Lighting setup
        vec3 lightDir = normalize(sunDirection);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        
        // Calculate lighting
        vec3 litColor = calculateLighting(terrainColor, normal, lightDir, viewDir);
        
        // Add atmospheric perspective (height-based tinting)
        float heightFactor = clamp(vHeight / 800.0, 0.0, 1.0);
        vec3 atmosphereColor = mix(vec3(1.0, 0.95, 0.8), vec3(0.8, 0.9, 1.0), heightFactor);
        litColor *= atmosphereColor;
        
        // Add subtle rim lighting for depth perception
        float rim = 1.0 - max(dot(viewDir, normal), 0.0);
        litColor += vec3(0.05, 0.1, 0.15) * rim * rim;
        
        // Distance-based fog
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(fogNear, fogFar, depth);
        vec3 finalColor = mix(litColor, fogColor, fogFactor);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,

  // Shader uniforms configuration
  createUniforms: (
    heightTexture = null,
    heightScale = 700.0,
    tileSize = 5120
  ) => ({
    // Heightmap
    heightTexture: { value: heightTexture },
    heightScale: { value: heightScale },
    tileSize: { value: tileSize },
    worldOffset: { value: new THREE.Vector2(0, 0) },

    // Lighting
    sunDirection: { value: new THREE.Vector3(0.5, 1.0, 0.3).normalize() },
    sunColor: { value: new THREE.Color(1.0, 0.95, 0.8) },
    sunIntensity: { value: 1.0 },

    // Fog
    fogColor: { value: new THREE.Color(0.8, 0.9, 1.0) },
    fogNear: { value: 1000.0 },
    fogFar: { value: 8000.0 },

    // Animation
    time: { value: 0.0 },
  }),

  // Create material with these shaders
  createMaterial: (uniforms) => {
    return new THREE.ShaderMaterial({
      vertexShader: TerrainShaders.vertexShader,
      fragmentShader: TerrainShaders.fragmentShader,
      uniforms: uniforms,
      side: THREE.FrontSide,
      transparent: false,
      lights: false, // We handle lighting in the shader
    });
  },
};
