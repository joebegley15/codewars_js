const binaryArrayToNumber = arr => {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num += arr[i] * Math.pow(2, (arr.length - i - 1));
  }
  return num;
};