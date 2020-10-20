function gridIndex(grid, indices) {
  const len = grid.length;
  return indices
    .map(n => {
      const row = Math.floor((n - 1) / len);
      const col = (n - 1) % len;
      return grid[row][col];
    })
    .join("");
}
