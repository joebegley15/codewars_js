function minSum(arr) {
  var total = 0;
  function quickSort(arr){
    var less = [], more = [], pointer = arr[0];
    if (arr.length == 0) {
      return [];
    } else if (arr.length == 1) {
      return arr;
    }
    for (var i = 1; i < arr.length; i++){
      if (arr[i] < pointer) {
        less.push(arr[i]);
      } else {
        more.push(arr[i]);
      }
    }
    return quickSort(less).concat(pointer, quickSort(more));
  }
  arr = quickSort(arr);
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    total += (arr[i] * arr[arr.length - 1 - i]);
  }
  return total;
}