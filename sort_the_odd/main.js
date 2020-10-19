const sortArray = arr => {
  const indexes = [],
    numbers = [];
  arr.forEach((n, i) => {
    if (n % 2) {
      numbers.push(n);
      indexes.push(i);
    }
  });
  numbers.sort((a, b) => a - b);
  numbers.forEach((n, i) => {
    arr[indexes[i]] = n;
  });
  return arr;
};
