function peak(arr) {
  let right = arr.reduce((a, b) => a + b);
  let left = 0;
  let past = 0;
  let peak;
  arr.forEach((n, i) => {
    left += past;
    right -= n;
    if (left === right) {
      peak = i;
    }
    past = n;
  });
  return peak ? peak : -1;
}
