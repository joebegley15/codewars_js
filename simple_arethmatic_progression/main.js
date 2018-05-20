function solve(arr){
  var count = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    for (var x = i+1; x < arr.length; x++) {
      var progression = arr[x] - arr[i];
      if (arr.includes(arr[x] + progression)) {
        count++;
      }
    }
  }
  return count;
}