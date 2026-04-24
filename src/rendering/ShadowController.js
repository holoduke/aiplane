import * as THREE from "three";
import { renderer } from "../renderer.js";
import { camera } from "../camera.js";

const WORLD_UP = new THREE.Vector3(0, 0, 1);

/**
 * Cascaded shadow map manager. Owns render targets, cascade cameras,
 * and the shadow-uniform pipeline that feeds into the terrain shader.
 *
 * Expects `app` to provide: scene, terrain, sunDirection, sky, sky2,
 * sunMesh, viewMatrix. All shadow-related state lives here.
 */
export class ShadowController {
  constructor(app) {
    this.app = app;

    // Settings
    this.enabled = true;
    this.cascadeCount = 3;
    this.resolution = 4096; // Matches setResolution clamp ceiling (below)
    this.lambda = 0.6;
    this.maxDistance = 3600;
    this.bias = 0.0015;
    this.strength = 1.0;
    this.softness = 1.0;
    this.cascadeOverlap = 0.1;
    this.cascadeEnabled = [true, true, true];
    this.debugEnabled = false;

    // Runtime state
    this.cascades = [];
    this.matrices = [];
    this.splitsVec = new THREE.Vector4(0, 0, 0, 0);
    this.debugHelpers = [];

    // Pre-allocated scratch vectors for updateCascadeCamera (called per cascade
    // per frame). All mutations must use .copy()/.set() — never reassigned.
    this.tempCorners = Array.from({ length: 8 }, () => new THREE.Vector3());
    this._tmpFocus = new THREE.Vector3();
    this._tmpOffset = new THREE.Vector3();
    this._tmpCamDir = new THREE.Vector3();
    this._tmpCamPos = new THREE.Vector3();
    this._tmpUp = new THREE.Vector3();
    this._tmpRight = new THREE.Vector3();
    this._tmpNearCenter = new THREE.Vector3();
    this._tmpFarCenter = new THREE.Vector3();
    this._tmpNearUp = new THREE.Vector3();
    this._tmpNearRight = new THREE.Vector3();
    this._tmpFarUp = new THREE.Vector3();
    this._tmpFarRight = new THREE.Vector3();
    this._tmpLightDir = new THREE.Vector3();
    this._tmpLightForward = new THREE.Vector3();
    this._tmpLightRight = new THREE.Vector3();
    this._tmpLightUp = new THREE.Vector3();
    this._tmpCenterWorld = new THREE.Vector3();
    this._tmpEyeWorld = new THREE.Vector3();
    this._tmpReachPoint = new THREE.Vector3();
    this._worldUpX = new THREE.Vector3(1, 0, 0);
    this._worldUpZ = new THREE.Vector3(0, 0, 1);
  }

  setup() {
    this.cascades.forEach((cascade) => {
      cascade.renderTarget?.dispose?.();
      if (cascade.helper) {
        cascade.helper.parent?.remove(cascade.helper);
        cascade.helper.geometry?.dispose?.();
        cascade.helper.material?.dispose?.();
      }
    });
    this.cascades = [];
    this.matrices = [];
    this.debugHelpers = [];

    if (!this.enabled) {
      this.app.terrain?.setShadowsEnabled(false);
      this.applyUniformsToTerrain();
      return;
    }

    for (let i = 0; i < this.cascadeCount; i++) {
      const renderTarget = new THREE.WebGLRenderTarget(
        this.resolution,
        this.resolution
      );
      renderTarget.texture.minFilter = THREE.LinearFilter;
      renderTarget.texture.magFilter = THREE.LinearFilter;
      renderTarget.texture.generateMipmaps = false;
      renderTarget.depthTexture = new THREE.DepthTexture(
        this.resolution,
        this.resolution
      );
      renderTarget.depthTexture.type = THREE.UnsignedInt248Type;

      const lightCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2048);
      const helper = new THREE.CameraHelper(lightCamera);
      helper.visible = this.debugEnabled;
      this.app.scene.add(helper);
      this.cascades.push({ camera: lightCamera, renderTarget, helper });
      this.debugHelpers.push(helper);
      this.matrices.push(new THREE.Matrix4());
    }

    this.splitsVec.set(0, 0, 0, this.maxDistance);
    this.app.terrain?.setShadowsEnabled(true);
    this.applyUniformsToTerrain();
  }

  applyUniformsToTerrain() {
    if (!this.app.terrain) return;
    const textures = [null, null, null];
    for (
      let i = 0;
      i < Math.min(this.cascades.length, textures.length);
      i++
    ) {
      textures[i] = this.cascades[i].renderTarget.depthTexture;
    }
    this.app.terrain.updateShadowUniforms(
      this.matrices,
      this.splitsVec,
      textures,
      this.bias,
      this.strength,
      this.enabled && this.cascades.length > 0,
      this.cascadeEnabled,
      this.resolution,
      this.softness
    );
    this.app.terrain.updateCascadeEnabled(this.cascadeEnabled);
    if (this.app.viewMatrix) {
      this.app.terrain.updateViewMatrix(this.app.viewMatrix);
    }
  }

  calculateCascades() {
    if (!this.cascades.length || !this.enabled) return;

    const shadowCamera = camera;
    const near = shadowCamera.near;
    const far = Math.min(this.maxDistance, shadowCamera.far);
    const lambda = this.lambda;
    const cascadeCount = this.cascades.length;

    const splits = [];
    for (let i = 0; i < cascadeCount; i++) {
      const p = (i + 1) / cascadeCount;
      const log = near * Math.pow(far / near, p);
      const uniform = near + (far - near) * p;
      const splitDist = THREE.MathUtils.lerp(uniform, log, lambda);
      splits.push(splitDist);
    }

    const adjustedSplits = [];

    let previousSplit = near;
    let previousRawSplit = near;
    for (let i = 0; i < cascadeCount; i++) {
      const currentSplit = splits[i];
      if (currentSplit == null) continue;

      const segmentLength = Math.max(currentSplit - previousRawSplit, 0);
      const overlapAmount = segmentLength * this.cascadeOverlap;

      const cascadeNear = previousSplit;
      const cascadeFar = Math.min(far, currentSplit + overlapAmount);

      if (cascadeFar > cascadeNear + 1e-3) {
        this.updateCascadeCamera(i, cascadeNear, cascadeFar, shadowCamera);
      }

      const adjustedSplit = Math.max(
        cascadeNear + 1e-3,
        currentSplit - overlapAmount
      );
      adjustedSplits[i] = adjustedSplit;

      previousSplit = adjustedSplit;
      previousRawSplit = currentSplit;
    }

    this.splitsVec.set(
      adjustedSplits[0] ?? far,
      adjustedSplits[1] ?? far,
      adjustedSplits[2] ?? far,
      far
    );

    this.applyUniformsToTerrain();
  }

  updateCascadeCamera(index, nearDist, farDist, perspectiveCamera) {
    const cascade = this.cascades[index];
    if (!cascade) return;

    const camDir = this._tmpCamDir;
    perspectiveCamera.getWorldDirection(camDir);
    camDir.normalize();

    const up = this._tmpUp.copy(perspectiveCamera.up).normalize();
    const right = this._tmpRight.crossVectors(camDir, up).normalize();
    up.crossVectors(right, camDir).normalize();

    const camPos = this._tmpCamPos.copy(perspectiveCamera.position);

    const tanHalfFov = Math.tan(
      THREE.MathUtils.degToRad(perspectiveCamera.fov * 0.5)
    );
    const aspect = perspectiveCamera.aspect;

    const nearCenter = this._tmpNearCenter
      .copy(camPos)
      .addScaledVector(camDir, nearDist);
    const farCenter = this._tmpFarCenter
      .copy(camPos)
      .addScaledVector(camDir, farDist);

    const nearHeight = tanHalfFov * nearDist;
    const nearWidth = nearHeight * aspect;
    const farHeight = tanHalfFov * farDist;
    const farWidth = farHeight * aspect;

    const corners = this.tempCorners;

    const nearUp = this._tmpNearUp.copy(up).multiplyScalar(nearHeight);
    const nearRight = this._tmpNearRight.copy(right).multiplyScalar(nearWidth);
    const farUp = this._tmpFarUp.copy(up).multiplyScalar(farHeight);
    const farRight = this._tmpFarRight.copy(right).multiplyScalar(farWidth);

    corners[0].copy(nearCenter).sub(nearRight).sub(nearUp);
    corners[1].copy(nearCenter).add(nearRight).sub(nearUp);
    corners[2].copy(nearCenter).sub(nearRight).add(nearUp);
    corners[3].copy(nearCenter).add(nearRight).add(nearUp);
    corners[4].copy(farCenter).sub(farRight).sub(farUp);
    corners[5].copy(farCenter).add(farRight).sub(farUp);
    corners[6].copy(farCenter).sub(farRight).add(farUp);
    corners[7].copy(farCenter).add(farRight).add(farUp);

    const lightDir = this._tmpLightDir.copy(this.app.sunDirection).normalize();
    const lightForward = this._tmpLightForward.copy(lightDir).negate();
    const worldUp =
      Math.abs(lightForward.z) > 0.99 ? this._worldUpX : this._worldUpZ;
    const lightRight = this._tmpLightRight
      .crossVectors(worldUp, lightForward)
      .normalize();
    const lightUp = this._tmpLightUp
      .crossVectors(lightForward, lightRight)
      .normalize();

    const minBounds = { x: Infinity, y: Infinity, z: Infinity };
    const maxBounds = { x: -Infinity, y: -Infinity, z: -Infinity };

    const focusWorld = this._tmpFocus.copy(perspectiveCamera.position);
    const focusX = focusWorld.dot(lightRight);
    const focusY = focusWorld.dot(lightUp);
    const focusZ = focusWorld.dot(lightForward);

    const extendBounds = (point) => {
      const x = point.dot(lightRight);
      const y = point.dot(lightUp);
      const z = point.dot(lightForward);

      if (x < minBounds.x) minBounds.x = x;
      if (y < minBounds.y) minBounds.y = y;
      if (z < minBounds.z) minBounds.z = z;
      if (x > maxBounds.x) maxBounds.x = x;
      if (y > maxBounds.y) maxBounds.y = y;
      if (z > maxBounds.z) maxBounds.z = z;
    };

    for (let i = 0; i < 8; i++) {
      extendBounds(corners[i]);
    }

    extendBounds(focusWorld);
    if (this.app.terrain?.offset) {
      extendBounds(this._tmpOffset.copy(this.app.terrain.offset));
    }

    const cascadeCount = this.cascades.length || 1;
    const cascadeT = cascadeCount > 1 ? index / (cascadeCount - 1) : 0;

    const groundReach = THREE.MathUtils.lerp(400, this.maxDistance, cascadeT);
    extendBounds(
      this._tmpReachPoint.copy(focusWorld).addScaledVector(WORLD_UP, -groundReach)
    );

    const skyReach = THREE.MathUtils.lerp(600, 1200, cascadeT);
    extendBounds(
      this._tmpReachPoint.copy(focusWorld).addScaledVector(WORLD_UP, skyReach)
    );
    const marginXY = THREE.MathUtils.lerp(18, 60, cascadeT);
    const marginZ = THREE.MathUtils.lerp(100, 300, cascadeT);

    const boundsCenterX = (minBounds.x + maxBounds.x) * 0.5;
    const boundsCenterY = (minBounds.y + maxBounds.y) * 0.5;

    let centerX = THREE.MathUtils.lerp(focusX, boundsCenterX, cascadeT);
    let centerY = THREE.MathUtils.lerp(focusY, boundsCenterY, cascadeT);

    let halfExtentX = Math.max(
      Math.abs(centerX - minBounds.x),
      Math.abs(centerX - maxBounds.x)
    );
    let halfExtentY = Math.max(
      Math.abs(centerY - minBounds.y),
      Math.abs(centerY - maxBounds.y)
    );

    let halfWidth = Math.max(halfExtentX, halfExtentY) + marginXY;
    halfWidth = Math.max(halfWidth, 1e-3);

    const minZ = minBounds.z - marginZ;
    const maxZ = maxBounds.z + marginZ;
    const depth = Math.max(1.0, maxZ - minZ);
    const centerZ = (minZ + maxZ) * 0.5;
    const cameraOffset = depth * 0.5;

    const texelSize = (halfWidth * 2) / this.resolution;
    if (texelSize > 0) {
      centerX =
        Math.round((centerX - focusX) / texelSize) * texelSize + focusX;
      centerY =
        Math.round((centerY - focusY) / texelSize) * texelSize + focusY;
    }

    halfExtentX = Math.max(
      Math.abs(centerX - minBounds.x),
      Math.abs(centerX - maxBounds.x)
    );
    halfExtentY = Math.max(
      Math.abs(centerY - minBounds.y),
      Math.abs(centerY - maxBounds.y)
    );
    halfWidth = Math.max(
      halfWidth,
      halfExtentX + marginXY,
      halfExtentY + marginXY
    );
    const halfHeight = halfWidth;

    const centerWorld = this._tmpCenterWorld
      .copy(focusWorld)
      .addScaledVector(lightRight, centerX - focusX)
      .addScaledVector(lightUp, centerY - focusY)
      .addScaledVector(lightForward, centerZ - focusZ);

    const lightCamera = cascade.camera;
    const eyeWorld = this._tmpEyeWorld
      .copy(centerWorld)
      .addScaledVector(lightForward, -cameraOffset);
    lightCamera.position.copy(eyeWorld);
    lightCamera.up.copy(lightUp);
    lightCamera.lookAt(centerWorld);
    lightCamera.updateMatrixWorld(true);
    lightCamera.matrixWorldInverse.copy(lightCamera.matrixWorld).invert();

    lightCamera.left = -halfWidth;
    lightCamera.right = halfWidth;
    lightCamera.bottom = -halfHeight;
    lightCamera.top = halfHeight;
    lightCamera.near = 0.1;
    lightCamera.far = depth;
    lightCamera.updateProjectionMatrix();
    lightCamera.updateMatrixWorld(true);
    lightCamera.matrixWorldInverse.copy(lightCamera.matrixWorld).invert();

    this.matrices[index]
      .copy(lightCamera.projectionMatrix)
      .multiply(lightCamera.matrixWorldInverse);

    if (cascade.helper) {
      cascade.helper.update();
      cascade.helper.visible =
        this.debugEnabled && this.cascadeEnabled[index];
    }
  }

  render() {
    if (!this.enabled || !this.cascades.length || !this.app.terrain) {
      return;
    }

    this.calculateCascades();

    const previousRenderTarget = renderer.getRenderTarget();
    const previousAutoClear = renderer.autoClear;

    const skyVisible = this.app.sky?.visible;
    const atmosphereVisible = this.app.sky2?.visible;
    const sunMeshVisible = this.app.sunMesh?.visible;
    if (this.app.sky) this.app.sky.visible = false;
    if (this.app.sky2) this.app.sky2.visible = false;
    if (this.app.sunMesh) this.app.sunMesh.visible = false;

    this.app.terrain.useDepthMaterial(true);

    renderer.autoClear = true;
    for (let i = 0; i < this.cascades.length; i++) {
      const cascade = this.cascades[i];
      if (!this.cascadeEnabled[i]) continue;
      renderer.setRenderTarget(cascade.renderTarget);
      renderer.clear(true, true, true);
      renderer.render(this.app.scene, cascade.camera);
    }

    this.app.terrain.useDepthMaterial(false);

    // Use truthy checks consistent with the save path above. app.sky is
    // initialised to `null`, so `!== undefined` would wrongly try to restore.
    if (this.app.sky) this.app.sky.visible = skyVisible;
    if (this.app.sky2) this.app.sky2.visible = atmosphereVisible;
    if (this.app.sunMesh) this.app.sunMesh.visible = sunMeshVisible;

    renderer.setRenderTarget(previousRenderTarget);
    renderer.autoClear = previousAutoClear;
  }

  // Setter methods (wired from control panel via TerrainApp delegators)
  setEnabled(value) {
    const enabled = Boolean(value);
    if (this.enabled === enabled) return;
    this.enabled = enabled;
    if (enabled) {
      this.setup();
      this.render();
    } else {
      this.cascades.forEach((cascade) => {
        cascade.renderTarget?.dispose?.();
      });
      this.cascades = [];
      this.matrices = [];
      this.splitsVec.set(0, 0, 0, 0);
      this.app.terrain?.setShadowsEnabled(false);
      this.applyUniformsToTerrain();
    }
    this.app.terrain?.updateCascadeEnabled(this.cascadeEnabled);
  }

  setStrength(value) {
    this.strength = THREE.MathUtils.clamp(value, 0.0, 1.0);
    this.applyUniformsToTerrain();
    this.render();
  }

  setBias(value) {
    this.bias = THREE.MathUtils.clamp(value, 0.00001, 0.01);
    this.applyUniformsToTerrain();
  }

  setMaxDistance(value) {
    this.maxDistance = Math.max(50, value);
    this.calculateCascades();
    this.render();
  }

  setResolution(value) {
    const clamped = Math.max(128, Math.min(4096, value));
    const pow2 = Math.pow(2, Math.round(Math.log2(clamped)));
    if (pow2 === this.resolution) return;
    this.resolution = pow2;
    this.setup();
    this.render();
  }

  setSoftness(value) {
    this.softness = THREE.MathUtils.clamp(value, 0.1, 4.0);
    this.applyUniformsToTerrain();
  }

  setCascadeEnabled(index, value) {
    if (index < 0 || index >= this.cascadeEnabled.length) return;
    this.cascadeEnabled[index] = Boolean(value);
    this.app.terrain?.updateCascadeEnabled(this.cascadeEnabled);
    this.applyUniformsToTerrain();
    if (this.enabled) {
      this.render();
    }
    if (this.debugHelpers[index]) {
      this.debugHelpers[index].visible =
        this.debugEnabled && this.cascadeEnabled[index];
    }
  }

  setDebugEnabled(value) {
    this.debugEnabled = Boolean(value);
    this.debugHelpers.forEach((helper, idx) => {
      if (helper) {
        helper.visible = this.debugEnabled && this.cascadeEnabled[idx];
      }
    });
  }
}
