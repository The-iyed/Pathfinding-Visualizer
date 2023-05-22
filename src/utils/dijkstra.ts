export type Point = {
  x: number;
  y: number;
};

export type Edge = {
  point: Point;
  weight: number;
};

export type Graph = {
  [key: string]: Edge[];
};

export function dijkstra(matrix: number[][], start: Point, end: Point, prohibited: Point[]): Point[] {
  const graph: Graph = {};
  const visited: Set<string> = new Set();
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: Point | null } = {};

  const getKey = (point: Point) => `${point.x}-${point.y}`;
  const getNeighbors = (point: Point): Edge[] => {
    const { x, y } = point;
    const neighbors: Point[] = [
      { x: x - 1, y }, // Left
      { x: x + 1, y }, // Right
      { x, y: y - 1 }, // Up
      { x, y: y + 1 }, // Down
    ];

    return neighbors
      .filter((neighbor) => neighbor.x >= 0 && neighbor.x < matrix.length && neighbor.y >= 0 && neighbor.y < matrix[0].length)
      .map((neighbor) => ({
        point: neighbor,
        weight: matrix[neighbor.x][neighbor.y],
      }));
  };

  const enqueue = (point: Point, weight: number) => {
    distances[getKey(point)] = weight;
    previous[getKey(point)] = null;
  };

  enqueue(start, 0);

  while (true) {
    let minDistance = Infinity;
    let minPoint: Point | null = null;

    for (const key in distances) {
      const currentPoint = key.split('-').map(Number) as [number, number];
      const distance = distances[key];
      if (!visited.has(key) && distance < minDistance) {
        minDistance = distance;
        minPoint = { x: currentPoint[0], y: currentPoint[1] };
      }
    }

    if (!minPoint) {
      // No path found
      return [];
    }

    visited.add(getKey(minPoint));

    if (minPoint.x === end.x && minPoint.y === end.y) {
      const path: Point[] = [];
      let current: Point | null = minPoint;
      while (current) {
        path.push(current);
        current = previous[getKey(current)];
      }
      return path.reverse();
    }

    const neighbors = getNeighbors(minPoint);
    for (const neighbor of neighbors) {
      if (prohibited.some((prohibitedPoint) => prohibitedPoint.x === neighbor.point.x && prohibitedPoint.y === neighbor.point.y)) {
        continue;
      }

      const neighborKey = getKey(neighbor.point);
      if (!visited.has(neighborKey)) {
        const newDistance = distances[getKey(minPoint)] + neighbor.weight;
        if (!distances[neighborKey] || newDistance < distances[neighborKey]) {
          distances[neighborKey] = newDistance;
          previous[neighborKey] = minPoint;
        }
      }
    }
  }
}
