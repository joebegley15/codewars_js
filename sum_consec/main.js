function sumConsecutives(arr) {
  var current = arr[0], last, sum = arr[0], returnArr = [];
  for (var i = 1; i < arr.length; i++) {
    last = current;
    current = arr[i];
    console.log(current,last);
    if (current == last) {
      sum += current;
    } else {
      returnArr.push(sum);
      sum = current;
    }
  }
  returnArr.push(sum);
  return returnArr;
}

console.log(sumConsecutives([0,1,1,2,2,2,3,3,3,2,3]));