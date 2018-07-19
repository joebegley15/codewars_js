function positiveSum(arr) {
  let sum = 0;
  arr.map(function(n){
    sum = n > 0 ? sum + n : sum;
  })
  return sum;
}