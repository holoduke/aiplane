import * as THREE from "three";
import { camera } from "../camera.js";
import { container } from "../container.js";

/**
 * Manages all input handling including keyboard, mouse, and camera controls
 */
export class InputManager {
  constructor() {
    this.keys = {};
    this.cameraRotation = { x: 0, y: 0 };
    this.pointerLocked = false;
    this.mouseDragging = false;
    this.lookTarget = null;
    this.useFreeCamera = true;
    this.lookSpeed = 0.004;

    // Temporary vectors for calculations
    this._tmpDirection = new THREE.Vector3();
    this._tmpRight = new THREE.Vector3();
    this._tmpLookTarget = new THREE.Vector3();
    this._tmpFocus = new THREE.Vector3();
    this._tmpOffset = new THREE.Vector3();
    this._mouseState = { lastX: 0, lastY: 0 };

    this.setupInputHandlers();
  }

  /**
   * Setup all input event handlers
   */
  setupInputHandlers() {
    this.setupKeyboardHandlers();
    this.setupMouseHandlers();
    this.setupPointerLockHandlers();
  }

  /**
   * Setup keyboard event handlers
   */
  setupKeyboardHandlers() {
    const onKeyDown = (event) => {
      this.keys[event.key.toLowerCase()] = true;

      // Handle special keys
      switch (event.key.toLowerCase()) {
        case 'escape':
          this.exitPointerLock();
          break;
        case 'f11':
          event.preventDefault();
          this.toggleFullscreen();
          break;
      }
    };

    const onKeyUp = (event) => {
      this.keys[event.key.toLowerCase()] = false;
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
  }

  /**
   * Setup mouse event handlers
   */
  setupMouseHandlers() {
    const pointerLockElement = document.body;

    const requestPointerLock = () => {
      if (document.pointerLockElement) return true;

      if (pointerLockElement.requestPointerLock) {
        pointerLockElement.requestPointerLock();
        return true;
      }
      return false;
    };

    const onMouseMove = (event) => {
      if (!this.useFreeCamera) return;

      if (this.pointerLocked) {
        const sensitivity = this.lookSpeed;
        this.cameraRotation.x -= event.movementY * sensitivity;
        this.cameraRotation.y -= event.movementX * sensitivity;

        // Clamp vertical rotation
        this.cameraRotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, this.cameraRotation.x));
      } else if (this.mouseDragging) {
        const sensitivity = this.lookSpeed;
        this.cameraRotation.x -= (event.clientY - this._mouseState.lastY) * sensitivity;
        this.cameraRotation.y -= (event.clientX - this._mouseState.lastX) * sensitivity;

        // Clamp vertical rotation
        this.cameraRotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, this.cameraRotation.x));

        this._mouseState.lastX = event.clientX;
        this._mouseState.lastY = event.clientY;
      }
    };

    const onMouseDown = (event) => {
      if (!this.useFreeCamera || event.button !== 0) return;

      // Check if click target is a UI element
      const target = event.target;
      if (target && this.isUIElement(target)) {
        return;
      }

      pointerLockElement.focus();
      const locked = requestPointerLock();
      if (!locked) {
        this.mouseDragging = true;
        this._mouseState.lastX = event.clientX;
        this._mouseState.lastY = event.clientY;
      }
    };

    const onMouseUp = (event) => {
      if (event.button === 0) {
        this.mouseDragging = false;
      }
    };

    const onWheel = (event) => {
      if (!this.useFreeCamera) return;

      // Implement zoom or other wheel functionality here
      event.preventDefault();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('wheel', onWheel, { passive: false });
  }

  /**
   * Setup pointer lock event handlers
   */
  setupPointerLockHandlers() {
    const onPointerLockChange = () => {
      this.pointerLocked = !!document.pointerLockElement;
      if (this.pointerLocked) {
        this.mouseDragging = false;
      }
    };

    const onPointerLockError = () => {
      console.warn('Pointer lock failed');
      this.pointerLocked = false;
    };

    document.addEventListener('pointerlockchange', onPointerLockChange);
    document.addEventListener('pointerlockerror', onPointerLockError);
  }

  /**
   * Check if target element is a UI element that shouldn't trigger pointer lock
   */
  isUIElement(target) {
    return target && (
      target.closest('.control-panel') ||
      target.closest('.slider') ||
      target.closest('[style*=\"cursor: pointer\"]') ||
      target.matches('input') ||
      target.matches('button') ||
      target.matches('[role=\"slider\"]') ||
      (target.tagName === 'DIV' && target.style.cursor === 'pointer')
    );
  }

  /**
   * Update camera based on current input state
   */
  updateCamera(deltaTime, config) {
    if (!this.useFreeCamera) return;

    const { moveSpeed } = config;

    // Handle movement
    this._tmpDirection.set(0, 0, 0);

    if (this.keys['w'] || this.keys['arrowup']) this._tmpDirection.z -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) this._tmpDirection.z += 1;
    if (this.keys['a'] || this.keys['arrowleft']) this._tmpDirection.x -= 1;
    if (this.keys['d'] || this.keys['arrowright']) this._tmpDirection.x += 1;
    if (this.keys[' ']) this._tmpDirection.y += 1;
    if (this.keys['shift']) this._tmpDirection.y -= 1;

    if (this._tmpDirection.length() > 0) {
      this._tmpDirection.normalize();

      // Apply camera rotation to movement direction
      const moveVector = new THREE.Vector3();
      moveVector.x = this._tmpDirection.x * Math.cos(this.cameraRotation.y) - this._tmpDirection.z * Math.sin(this.cameraRotation.y);
      moveVector.z = this._tmpDirection.x * Math.sin(this.cameraRotation.y) + this._tmpDirection.z * Math.cos(this.cameraRotation.y);
      moveVector.y = this._tmpDirection.y;

      moveVector.multiplyScalar(moveSpeed * deltaTime * 60);
      camera.position.add(moveVector);
    }

    // Apply rotation to camera
    camera.rotation.x = this.cameraRotation.x;
    camera.rotation.y = this.cameraRotation.y;
    camera.rotation.z = 0;
    camera.rotation.order = 'YXZ';
  }

  /**
   * Exit pointer lock
   */
  exitPointerLock() {
    if (document.exitPointerLock) {
      document.exitPointerLock();
    }
    this.pointerLocked = false;
    this.mouseDragging = false;
  }

  /**
   * Toggle fullscreen mode
   */
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  /**
   * Set camera mode
   */
  setUseFreeCamera(useFree) {
    this.useFreeCamera = useFree;
    if (!useFree) {
      this.exitPointerLock();
    }
  }

  /**
   * Set look speed
   */
  setLookSpeed(speed) {
    this.lookSpeed = speed;
  }

  /**
   * Set look target for camera
   */
  setLookTarget(target) {
    this.lookTarget = target;
  }

  /**
   * Get current input state
   */
  getInputState() {
    return {
      keys: { ...this.keys },
      cameraRotation: { ...this.cameraRotation },
      pointerLocked: this.pointerLocked,
      mouseDragging: this.mouseDragging
    };
  }

  /**
   * Clean up event listeners
   */
  dispose() {
    this.exitPointerLock();
    // Note: In a real implementation, you'd want to store references
    // to the event handlers to properly remove them
  }
}