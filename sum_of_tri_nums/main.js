function sumTriangularNumbers(n) {
  var init = 0, sum = 0;
  for (var i = 1; i <= n; i++) {
    init += i;
    sum += init;
  };
  return sum;
}