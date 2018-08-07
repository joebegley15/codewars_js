function maxNumber(n){
  function quickSort(arr){
    var less = [], more = [], index = arr[0];
    if (arr.length < 2) {
      return arr;
    }
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < index) {
        less.push(arr[i]);
      } else {
        more.push(arr[i]);
      }
    }
    return quickSort(more).concat(index,quickSort(less));
  };
  return + quickSort(n.toString().split('')).join('');
}