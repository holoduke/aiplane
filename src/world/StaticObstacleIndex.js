import * as THREE from "three";

/**
 * 2D spatial hash index for static world obstacles (towers, obelisks, ruins).
 *
 * Why spatial hash?
 * - Obstacles never move — build once at registration, no per-frame rebuild.
 * - Queries cost O(1) cell lookup + small candidate list, independent of total
 *   obstacle count. 1000 obstacles cost the same as 10 if evenly distributed.
 * - Axis-aligned buckets on world (x, y) — ignore Z because typical obstacles
 *   are tall-thin (towers) so a 2D grid is a tight first filter.
 *
 * Bounds: axis-aligned bounding boxes (AABB) in world space. Conservative for
 * cylinders/cones but fast and correct (never misses a hit).
 *
 * Coordinate convention: world is Y-forward, Z-up (see Player/terrain code).
 * Grid cells are in (x, y); z is stored per-obstacle for vertical filtering.
 */

const DEFAULT_CELL_SIZE = 500;

/** @typedef {{minX:number,maxX:number,minY:number,maxY:number,minZ:number,maxZ:number}} AABB */

/** @typedef {{id:string, bounds:AABB, mesh:THREE.Object3D|null, userData?:object}} Obstacle */

export class StaticObstacleIndex {
  constructor({ cellSize = DEFAULT_CELL_SIZE } = {}) {
    this.cellSize = cellSize;
    /** @type {Map<string, Obstacle[]>} */
    this.cells = new Map();
    /** @type {Obstacle[]} */
    this.obstacles = [];
    this._nextId = 0;
  }

  /**
   * Register a Three.js object. AABB is derived from the object's world-space
   * bounding box (after matrix/world transforms are applied).
   * Returns the obstacle record so the caller can remove/update later.
   */
  registerMesh(object3d, userData = {}) {
    object3d.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(object3d);
    if (box.isEmpty()) {
      console.warn("[StaticObstacleIndex] empty bounding box for", object3d);
      return null;
    }
    return this.register(
      {
        minX: box.min.x,
        maxX: box.max.x,
        minY: box.min.y,
        maxY: box.max.y,
        minZ: box.min.z,
        maxZ: box.max.z,
      },
      object3d,
      userData
    );
  }

  /**
   * Register a raw AABB. Use this for obstacles that don't have a Three.js
   * representation yet (or for tighter bounds than setFromObject produces).
   */
  register(bounds, mesh = null, userData = {}) {
    const id = `obs_${this._nextId++}`;
    const obstacle = { id, bounds, mesh, userData };
    this.obstacles.push(obstacle);
    this._insertIntoCells(obstacle);
    return obstacle;
  }

  remove(obstacle) {
    const idx = this.obstacles.indexOf(obstacle);
    if (idx >= 0) this.obstacles.splice(idx, 1);
    const { minX, maxX, minY, maxY } = obstacle.bounds;
    const cells = this._cellRange(minX, maxX, minY, maxY);
    for (const key of cells) {
      const bucket = this.cells.get(key);
      if (!bucket) continue;
      const i = bucket.indexOf(obstacle);
      if (i >= 0) bucket.splice(i, 1);
      if (bucket.length === 0) this.cells.delete(key);
    }
  }

  clear() {
    this.cells.clear();
    this.obstacles.length = 0;
  }

  /**
   * Return all obstacles whose AABB contains the query point.
   * Checks the single cell containing (x, y).
   */
  queryPoint(x, y, z) {
    const bucket = this.cells.get(this._cellKey(x, y));
    if (!bucket) return null;
    for (let i = 0; i < bucket.length; i++) {
      const o = bucket[i];
      const b = o.bounds;
      if (
        x >= b.minX && x <= b.maxX &&
        y >= b.minY && y <= b.maxY &&
        z >= b.minZ && z <= b.maxZ
      ) {
        return o;
      }
    }
    return null;
  }

  /**
   * Sweep test: returns the first obstacle whose AABB is entered along the
   * segment from `start` to `end`. Uses slab (AABB-ray) intersection, restricted
   * to obstacles in cells the segment crosses.
   */
  querySegment(start, end, out = {}) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dz = end.z - start.z;
    const length = Math.hypot(dx, dy, dz);
    if (length < 1e-6) {
      const hit = this.queryPoint(start.x, start.y, start.z);
      if (hit) {
        out.obstacle = hit;
        out.t = 0;
        return out;
      }
      return null;
    }

    const candidates = this._candidatesForSegment(start, end);
    if (candidates.size === 0) return null;

    let bestT = Infinity;
    let bestObstacle = null;

    for (const obstacle of candidates) {
      const t = this._segmentHitsAabb(
        start.x, start.y, start.z,
        dx, dy, dz,
        obstacle.bounds
      );
      if (t != null && t < bestT) {
        bestT = t;
        bestObstacle = obstacle;
      }
    }

    if (!bestObstacle) return null;
    out.obstacle = bestObstacle;
    out.t = bestT; // normalized parametric [0..1] along the segment
    return out;
  }

  // ---- internals ----

  _cellKey(x, y) {
    const cx = Math.floor(x / this.cellSize);
    const cy = Math.floor(y / this.cellSize);
    return `${cx},${cy}`;
  }

  _cellRange(minX, maxX, minY, maxY) {
    const keys = [];
    const cx0 = Math.floor(minX / this.cellSize);
    const cx1 = Math.floor(maxX / this.cellSize);
    const cy0 = Math.floor(minY / this.cellSize);
    const cy1 = Math.floor(maxY / this.cellSize);
    for (let cy = cy0; cy <= cy1; cy++) {
      for (let cx = cx0; cx <= cx1; cx++) {
        keys.push(`${cx},${cy}`);
      }
    }
    return keys;
  }

  _insertIntoCells(obstacle) {
    const { minX, maxX, minY, maxY } = obstacle.bounds;
    const cells = this._cellRange(minX, maxX, minY, maxY);
    for (const key of cells) {
      let bucket = this.cells.get(key);
      if (!bucket) {
        bucket = [];
        this.cells.set(key, bucket);
      }
      bucket.push(obstacle);
    }
  }

  /**
   * Gather the unique set of candidate obstacles whose cells the segment
   * (start → end) AABB overlaps. Cheap bulk-filter before the exact slab test.
   */
  _candidatesForSegment(start, end) {
    const minX = Math.min(start.x, end.x);
    const maxX = Math.max(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const maxY = Math.max(start.y, end.y);
    const keys = this._cellRange(minX, maxX, minY, maxY);
    const seen = new Set();
    for (const key of keys) {
      const bucket = this.cells.get(key);
      if (!bucket) continue;
      for (let i = 0; i < bucket.length; i++) seen.add(bucket[i]);
    }
    return seen;
  }

  /**
   * Slab test: returns the earliest intersection parametric t in [0, 1],
   * or null if the segment misses the AABB.
   * Reference: "An Efficient and Robust Ray–Box Intersection Algorithm" (Williams et al).
   */
  _segmentHitsAabb(sx, sy, sz, dx, dy, dz, b) {
    let tmin = 0;
    let tmax = 1;

    // X slab
    if (dx !== 0) {
      const tx1 = (b.minX - sx) / dx;
      const tx2 = (b.maxX - sx) / dx;
      tmin = Math.max(tmin, Math.min(tx1, tx2));
      tmax = Math.min(tmax, Math.max(tx1, tx2));
    } else if (sx < b.minX || sx > b.maxX) {
      return null;
    }

    if (tmin > tmax) return null;

    // Y slab
    if (dy !== 0) {
      const ty1 = (b.minY - sy) / dy;
      const ty2 = (b.maxY - sy) / dy;
      tmin = Math.max(tmin, Math.min(ty1, ty2));
      tmax = Math.min(tmax, Math.max(ty1, ty2));
    } else if (sy < b.minY || sy > b.maxY) {
      return null;
    }

    if (tmin > tmax) return null;

    // Z slab
    if (dz !== 0) {
      const tz1 = (b.minZ - sz) / dz;
      const tz2 = (b.maxZ - sz) / dz;
      tmin = Math.max(tmin, Math.min(tz1, tz2));
      tmax = Math.min(tmax, Math.max(tz1, tz2));
    } else if (sz < b.minZ || sz > b.maxZ) {
      return null;
    }

    if (tmin > tmax) return null;
    if (tmin < 0 && tmax < 0) return null;
    return Math.max(tmin, 0);
  }

  stats() {
    return {
      obstacles: this.obstacles.length,
      cells: this.cells.size,
      cellSize: this.cellSize,
      avgPerCell: this.cells.size
        ? Array.from(this.cells.values()).reduce((n, b) => n + b.length, 0) /
          this.cells.size
        : 0,
    };
  }
}
