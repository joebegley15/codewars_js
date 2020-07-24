function check(arr, val) {
  return arr.reduce((acc, cur) => (cur === val ? true : acc), false);
}
