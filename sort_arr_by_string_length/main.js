function sortByLength (arr) {
  if (arr.length <= 1) {
    return arr;
  };
  const pointer = arr[0], pointerLength = arr[0].length, lilArr = [], bigArr = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length < pointerLength) {
      lilArr.push(arr[i]);
    } else {
      bigArr.push(arr[i]);
    }
  }
  return sortByLength(lilArr).concat(pointer, sortByLength(bigArr));
};