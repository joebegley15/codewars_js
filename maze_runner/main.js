const findStart = maze => {
  for (let i = 0; i < maze.length; i++) {
    for (let x = 0; x < maze.length; x++) {
      if (maze[i][x] === 2) {
        return [i, x];
      }
    }
  }
};

const getStatus = (maze, [v, l]) => {
  if (maze[v]) {
    if (maze[v][l] === 0 || maze[v][l] === 2) {
      return "Continue";
    } else if (maze[v][l] === 3) {
      return "Finish";
    }
  }
  return "Dead";
};

const moveN = ([v, l]) => [v - 1, l];
const moveS = ([v, l]) => [v + 1, l];
const moveE = ([v, l]) => [v, l + 1];
const moveW = ([v, l]) => [v, l - 1];

const getMove = (coords, inst) => {
  if (inst === "N") {
    return moveN(coords);
  } else if (inst === "S") {
    return moveS(coords);
  } else if (inst === "E") {
    return moveE(coords);
  } else if (inst === "W") {
    return moveW(coords);
  }
};

const mazeRunner = (maze, directions) => {
  let coords = findStart(maze),
    status;
  for (let i = 0; i < directions.length; i++) {
    inst = directions[i];
    coords = getMove(coords, inst);
    status = getStatus(maze, coords);
    if (status === "Dead") {
      return "Dead";
    } else if (status === "Finish") {
      return "Finish";
    }
  }
  return "Lost";
};
