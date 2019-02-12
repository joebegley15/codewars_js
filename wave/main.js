function wave(str){
  const solution = [];
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/i.test(str.slice(i, i + 1))) {
      solution.push([str.slice(0, i), str.slice(i, i + 1).toUpperCase(), str.slice(i + 1)].join(''));
    }
  }
  return solution;
}