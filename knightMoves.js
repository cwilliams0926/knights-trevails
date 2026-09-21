import Queue from './Queue.js';

const isValid = (vertex) => {
  return vertex[0] >= 0 && vertex[0] <= 7 && vertex[1] >= 0 && vertex[1] <= 7
    ? true
    : false;
};

const arraysEqual = (a, b) =>
  a.length === b.length && a.every((val, index) => val === b[index]);

const generateEdgeList = (vertex) => {
  const edgeList = [];
  if (isValid([vertex[0] - 1, vertex[1] - 2]))
    edgeList.push([vertex[0] - 1, vertex[1] - 2]);
  if (isValid([vertex[0] - 2, vertex[1] - 1]))
    edgeList.push([vertex[0] - 2, vertex[1] - 1]);
  if (isValid([vertex[0] + 1, vertex[1] - 2]))
    edgeList.push([vertex[0] + 1, vertex[1] - 2]);
  if (isValid([vertex[0] + 2, vertex[1] - 1]))
    edgeList.push([vertex[0] + 2, vertex[1] - 1]);
  if (isValid([vertex[0] + 1, vertex[1] + 2]))
    edgeList.push([vertex[0] + 1, vertex[1] + 2]);
  if (isValid([vertex[0] + 2, vertex[1] + 1]))
    edgeList.push([vertex[0] + 2, vertex[1] + 1]);
  if (isValid([vertex[0] - 1, vertex[1] + 2]))
    edgeList.push([vertex[0] - 1, vertex[1] + 2]);
  if (isValid([vertex[0] - 2, vertex[1] + 1]))
    edgeList.push([vertex[0] - 2, vertex[1] + 1]);
  return edgeList;
};

export const knightMoves = (firstVertex, secondVertex) => {
  // Check both vertices are valid
  if (!Array.isArray(firstVertex) || !Array.isArray(secondVertex)) {
    throw new Error('Must pass in two vertices');
  }
  if (firstVertex.length !== 2 || firstVertex.length !== 2) {
    throw new Error('Vertices must be valid e.g. [0, 0] or [1, 2]');
  }
  if (
    !Number.isInteger(firstVertex[0]) ||
    !Number.isInteger(firstVertex[1]) ||
    !Number.isInteger(secondVertex[0]) ||
    !Number.isInteger(secondVertex[1])
  ) {
    throw new Error(
      'Vertices must be integers between 0 and 7, e.g. [0, 0] or [1, 2]'
    );
  }
  if (!isValid(firstVertex) || !isValid(secondVertex)) {
    throw new Error(
      'Vertices must be integers between 0 and 7, e.g. [0, 0] or [1, 2]'
    );
  }

  const discoveredVertices = new Queue();
  const visitedVertices = new Set([firstVertex.toString()]);
  const pathMap = new Map();
  pathMap.set(firstVertex.toString(), null);
  discoveredVertices.enqueue(firstVertex);

  while (!discoveredVertices.isEmpty()) {
    const currentVertex = discoveredVertices.dequeue();
    if (arraysEqual(currentVertex, secondVertex)) {
      const path = [];
      let current = currentVertex;
      let predecessor = pathMap.get(current.toString());
      while (predecessor !== null) {
        path.push(current);
        current = predecessor;
        predecessor = pathMap.get(current.toString());
        if (predecessor === null) path.push(current); // Handles first vertex case
      }
      const reversedPath = path.toReversed();
      console.log(
        `You made it in ${reversedPath.length - 1} moves! Here's your path:`
      );
      reversedPath.forEach((vertex) => console.log(vertex));
      return;
    }

    const neighbors = generateEdgeList(currentVertex);
    for (const neighbor of neighbors) {
      if (!visitedVertices.has(neighbor.toString())) {
        visitedVertices.add(neighbor.toString());
        pathMap.set(neighbor.toString(), currentVertex);
        discoveredVertices.enqueue(neighbor);
      }
    }
  }
};
