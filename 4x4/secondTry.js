function solvePuzzle(clues) {
  const possibilities = [
    [[1, 2, 3], [1, 2, 3], 4, [1, 2, 3]],
    [4, [1, 2, 3], [1, 2, 3], [1, 2, 3]],
    [[1, 2, 3], [1, 2, 3, 4], [1, 2, 3], [1, 2, 3]],
    [[1, 2, 3], [1, 2, 3], [1, 2, 3], 4]
  ];

  const removeFromPossibilities = (i, x, n) => {
    const posArr = possibilities[i][x];
    if (typeof posArr === "object") {
      const index = posArr.indexOf(n);
      if (index > -1) {
        posArr.splice(index, 1);
      }
    }
  };

  const tops = i => {
    // Rows always in looking order
    const row = [
      possibilities[0][i],
      possibilities[1][i],
      possibilities[2][i],
      possibilities[3][i]
    ];
    // One building
    if (clues[i] === 1) {
      possibilities[0][i] = 4;
    } else if (clues[i] > 0) {
      removeFromPossibilities(0, i, 4);
    }
    // Two buildings with a 4 back
    if (clues[i] === 2 && row.indexOf(4) > 1) {
      possibilities[0][i] = 3;
    }
    // Three buildings
    if (clues[i] === 3) {
      // ending in 3 & 4
      if (row[3] === 4 && row[2] === 3) {
        possibilities[0][i] = 2;
        possibilities[1][i] = 1;
      }
      // With a 4 that's 3 buildings out
      if (row[2] === 4) {
        // and a 2 up front
        if (row[0] === 2) {
          possibilities[3][i] = 4;
          possibilities[1][i] = 1;
        }
        // and a 3 at the end
        if (row[3] === 3) {
          possibilities[0][i] = 2;
          possibilities[1][i] = 1;
        }
      }
    }
  };

  const rights = i => {
    const row = [
      possibilities[i][3],
      possibilities[i][2],
      possibilities[i][1],
      possibilities[i][0]
    ];
    // One building
    if (clues[4 + i] === 1) {
      possibilities[i][3] = 4;
    } else if (clues[i] > 0) {
      removeFromPossibilities(i, 3, 4);
    }
    // Two Builings ending in four
    if (clues[12 + i] === 2 && row.indexOf(4) > 2) {
      possibilities[i][3] = 3;
    }
    // Three buildings ending in 3 & 4
    if (clues[4 + i] === 3) {
      // Ending in 3 & 4
      if (row[0] === 4 && row[1] === 3) {
        possibilities[i][2] = 1;
        possibilities[i][3] = 2;
      }
      // With a 4 that's 3 buildings out
      if (row[1] === 4) {
        // and a 2 up front
        if (row[3] === 2) {
          grid[i][0] = 3;
          grid[i][2] = 1;
        }
        // and a 3 at the end
        if (row[0] === 3) {
          grid[i][3] = 1;
          grid[i][2] = 2;
        }
      }
    }
  };

  const bottoms = i => {
    const row = [
      possibilities[3][3 - i],
      possibilities[2][3 - i],
      possibilities[1][3 - i],
      possibilities[0][3 - i]
    ];
    // One Building
    if (clues[8 + i] === 1) {
      possibilities[3][3 - i] = 4;
    } else if (clues[i] > 0) {
      removeFromPossibilities(3, 3 - i, 4);
    }
    // Two Builings ending in four
    if (clues[12 + i] === 2 && row.indexOf(4) > 2) {
      possibilities[3][3 - i] = 3;
    }
    // Three Buildings
    if (clues[8 + i] === 3) {
      // ending in 3 & 4
      if (row[3] === 4 && row[2] === 3) {
        possibilities[3][3 - i] = 2;
        possibilities[2][3 - i] = 1;
      }
      // With a 4 that's 3 buildings out
      if (row[2] === 4) {
        // and a 2 up front
        if (row[0] === 2) {
          possibilities[2][3 - i] = 3;
          possibilities[0][3 - i] = 1;
        }
        // and a 3 at the end
        if (row[3] === 3) {
          possibilities[3][3 - i] = 2;
          possibilities[2][3 - i] = 1;
        }
      }
    }
  };

  const lefts = i => {
    const row = [
      possibilities[i][0],
      possibilities[i][1],
      possibilities[i][2],
      possibilities[i][3]
    ];
    // One Building
    if (clues[12 + i] === 1) {
      possibilities[3 - i][0] = 4;
    } else if (clues[i] > 0) {
      removeFromPossibilities(3 - i, 0, 4);
    }
    // Two Builings ending in four
    if (clues[12 + i] === 2 && row.indexOf(4) > 2) {
      possibilities[3 - i][0] = 3;
    }
    // Three buildings
    if (clues[12 + i] === 3) {
      // ending in 3 & 4
      if (row[3] === 4 && row[2] === 3) {
        possibilities[3 - i][0] = 2;
        possibilities[3 - i][1] = 1;
      }
      // With a 4 that's 3 buildings out, and a 2 up front
      if (row[2] === 4) {
        if (row[0] === 2) {
          possibilities[3 - i][3] = 3;
          possibilities[3 - i][0] = 1;
        }
      }
    }
  };

  const hors = () => {
    for (let i = 0; i < 4; i++) {
      const used = [];
      for (let x = 0; x < 4; x++) {
        if (typeof possibilities[i][x] === "number") {
          used.push(possibilities[i][x]);
        }
      }
      for (let x = 0; x < 4; x++) {
        used.forEach(n => {
          removeFromPossibilities(i, x, n);
        });
        if (
          typeof possibilities[i][x] === "object" &&
          possibilities[i][x].length === 1
        ) {
          possibilities[i][x].length = possibilities[i][x][0];
        }
      }
    }
  };

  const verts = () => {
    for (let x = 0; x < 4; x++) {
      const used = [];
      for (let i = 0; i < 4; i++) {
        if (typeof possibilities[i][x] === "number") {
          used.push(possibilities[i][x]);
        }
      }
      for (let i = 0; i < 4; i++) {
        used.forEach(n => {
          removeFromPossibilities(i, x, n);
        });
      }
    }
  };

  let n = 0;
  // while (n < 10) {
  for (let i = 0; i < 4; i++) {
    tops(i);
    rights(i);
    bottoms(i);
    lefts(i);
    console.log(possibilities);
  }
  hors();
  verts();
  n++;
  // }
  return possibilities[0][3].toString();
}

var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];

console.log(solvePuzzle(clues));
