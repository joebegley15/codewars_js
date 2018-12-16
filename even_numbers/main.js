function evenNumbers(arr, number) {
  let i = arr.length - 1, evenNums = [];
  while (number > 0 && i >= 0) {
    if (arr[i] % 2 === 0) {
      evenNums.unshift(arr[i]);
      number--;
    }
    i--;
  }
  return evenNums;
}