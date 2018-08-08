function inAscOrder(arr) {
  var current, last = arr[0];
  for (var i = 1; i < arr.length; i++) {
    current = arr[i];
    if (current < last) {
      return false;
    }
    last = current;
  }
  return true;
}