function countBy(x, n) {
  var z = [], inc = x;
  for (var i = 0; i < n; i++) {
    z.push(inc);
    inc += x;
  }
  return z;
}