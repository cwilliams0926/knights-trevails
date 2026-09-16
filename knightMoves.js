const isValid = (vertex) => {
  return vertex[0] >= 0 && vertex[0] <= 7 && vertex[1] >= 0 && vertex[1] <= 7
    ? true
    : false;
};

const generateEdgeList = (vertex) => {
  // The chess board is a 8x8 grid, valid indices are [0-7, 0-7]
  // Given a vertex, find all valid moves a knight could do from it
  // Given vertex [i, j],
  // If [i - 1, j - 2] is valid, add to edge list
  // If [i - 2, j - 1] is valid, add to edge list
  // If [i + 1, j - 2] is valid, add to edge list
  // If [i + 2, j - 1] is valid, add to edge list
  // If [i + 1, j + 2] is valid, add to edge list
  // If [i + 2, j + 1] is valid, add to edge list
  // If [i - 1, j + 2] is valid, add to edge list
  // If [i - 2, j + 1] is valid, add to edge list
  // Return the edge list

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

const knightMoves = (firstVertex, secondVertex) => {
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

  // Call generateEdgeList on firstVertex
  // Do BFS on the generated edge list to find secondVertex
  // i.e., search firstVertex's edge list for secondVertex,
  // then search all of the vertices in the edge list's own edge lists
  // for secondVertex
  //
  // Need a way to store the path
};
