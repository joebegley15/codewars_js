function powersOfTwo(n){
  var returnArr = [];
  for (var i = 0; i <= n; i++) {
    returnArr.push(2 ** i);
  }
  return returnArr;
}