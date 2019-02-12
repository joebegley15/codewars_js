function wave(str){
  const solution = [];
  for (var i = 0; i < str.length; i++) {
    solution.push([str.slice(0, i), str.slice(i, i + 1).toUpperCase(), str.slice(i + 1)].join(''))
  }
  return solution;
}