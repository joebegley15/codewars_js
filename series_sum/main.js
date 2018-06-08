function SeriesSum(n)
{
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += (1/(1 + (i * 3)));
  }
  console.log(sum)
  return ((Math.round(sum * 100) / 100).toFixed(2)).toString();
}