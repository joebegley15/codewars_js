const isTriangle = (a, b, c) => {
  const arr = [a, b, c].sort((a, b) => a - b);
  if (arr[0] > 0 && arr[0] + arr[1] > arr[2]) {
    return true;
  }
  return false;
};
