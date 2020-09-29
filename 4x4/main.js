function solvePuzzle(clues) {
  const grid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [2, null, null, null]
  ];

  const tops = i => {
    // One building
    if (clues[i] === 1) {
      grid[0][i] = 4;
    }
    // Two buildings ending in a 4
    if (clues[i] === 2 && grid[3][i] === 4) {
      grid[0][i] = 3;
    }
    // Three buildings
    if (clues[i] === 3) {
      // ending in 3 & 4
      if (grid[3][i] === 4 && grid[2][i] === 3) {
        grid[0][i] = 2;
        grid[1][i] = 1;
      }
      // With a 4 that's 3 buildings out
      if (grid[2][i] === 4) {
        // and a 2 up front
        if (grid[0][i] === 2) {
          grid[3][i] = 4;
          grid[1][i] = 1;
        }
        // and a 3 at the end
        if (grid[4][i] === 3) {
          grid[0][i] = 2;
          grid[1][i] = 1;
        }
      }
    }
  };

  const rights = i => {
    // One building
    if (clues[4 + i] === 1) {
      grid[i][3] = 4;
    }
    // Two Builings ending in four
    if (clues[4 + i] === 2 && grid[i][0] === 4) {
      grid[i][3] = 3;
    }
    // Three buildings ending in 3 & 4
    if (clues[4 + i] === 3) {
      // Ending in 3 & 4
      if (grid[i][0] === 4 && grid[i][1] === 3) {
        grid[i][2] = 1;
        grid[i][3] = 2;
      }
      // With a 4 that's 3 buildings out
      if (grid[i][1] === 4) {
        // and a 2 up front
        if (grid[i][3] === 2) {
          grid[i][0] = 3;
          grid[i][2] = 1;
        }
        // and a 3 at the end
        if (grid[i][0] === 3) {
          grid[i][3] = 1;
          grid[i][2] = 2;
        }
      }
    }
  };

  const bottoms = i => {
    // One Building
    if (clues[8 + i] === 1) {
      grid[3][3 - i] = 4;
    }
    // Two Builings ending in four
    if (clues[8 + i] === 2 && grid[0][3 - i] === 4) {
      grid[3][3 - i] = 3;
    }
    // Three Buildings
    if (clues[8 + i] === 3) {
      // ending in 3 & 4
      if (grid[0][3 - i] === 4 && grid[1][3 - i] === 3) {
        grid[3][3 - i] = 2;
        grid[2][3 - i] = 1;
      }
      // With a 4 that's 3 buildings out
      if (grid[1][3 - i] === 4) {
        // and a 2 up front
        if (grid[3][3 - i] === 2) {
          grid[2][3 - i] = 3;
          grid[0][3 - i] = 1;
        }
        // and a 3 at the end
        if (grid[0][3 - i] === 3) {
          grid[3][3 - i] = 2;
          grid[2][3 - i] = 1;
        }
      }
    }
  };

  const lefts = i => {
    // One Building
    if (clues[12 + i] === 1) {
      grid[3 - i][0] = 4;
    }
    // Two Builings ending in four
    if (clues[12 + i] === 2 && grid[3 - i][0] === 4) {
      grid[3 - i][0] = 3;
    }
    // Three buildings
    if (clues[12 + i] === 3) {
      // ending in 3 & 4
      if (grid[3 - i][3] === 4 && grid[3 - i][2] === 3) {
        grid[3 - i][0] = 2;
        grid[3 - i][1] = 1;
      }
      // With a 4 that's 3 buildings out, and a 2 up front
      if (grid[3 - i][2] === 4) {
        if (grid[3 - i][3 - i] === 2) {
          grid[3 - i][3] = 3;
          grid[3 - i][0] = 1;
        }
      }
    }
  };

  const hors = () => {
    for (let i = 0; i < 4; i++) {
      const possibilities = { 1: false, 2: false, 3: false, 4: false };
      let trueCounter = 0;
      let emptyCoords = [];
      for (let x = 0; x < 4; x++) {
        if (grid[i][x] === null) {
          emptyCoords = [i, x];
        } else {
          possibilities[grid[i][x]] = true;
          trueCounter++;
        }
      }
      if (trueCounter === 3) {
        const value = Number(
          Object.keys(possibilities).find(n => (!possibilities[n] ? n : false))
        );
        const [i, x] = emptyCoords;
        grid[i][x] = value;
      }
    }
  };

  const verts = () => {
    for (let x = 0; x < 4; x++) {
      const possibilities = { 1: false, 2: false, 3: false, 4: false };
      let trueCounter = 0;
      let emptyCoords = [];
      for (let i = 0; i < 4; i++) {
        if (grid[i][x] === null) {
          emptyCoords = [i, x];
        } else {
          possibilities[grid[i][x]] = true;
          trueCounter++;
        }
      }
      if (trueCounter === 3) {
        const value = Number(
          Object.keys(possibilities).find(n => (!possibilities[n] ? n : false))
        );
        const [i, x] = emptyCoords;
        grid[i][x] = value;
      }
    }
  };

  let n = 0;
  while (n < 10) {
    for (let i = 0; i < 4; i++) {
      tops(i);
      rights(i);
      bottoms(i);
      lefts(i);
    }
    hors();
    verts();
    console.log(grid);
    n++;
  }
  return grid;
}

var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];

console.log(solvePuzzle(clues));
