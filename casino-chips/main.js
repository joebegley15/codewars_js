const solve = arr => {
  let totalMoves = 0;
  arr.sort(function(a, b) {
    return a - b;
  });
  while (arr[1] && arr[2]) {
    if (arr[1]) {
      arr[2] = arr[2] - 1;
      arr[1] = arr[1] - 1;
      totalMoves++;
    }
    arr.sort(function(a, b) {
      return a - b;
    });
  }
  return totalMoves;
};
