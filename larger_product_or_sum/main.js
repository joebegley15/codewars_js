const sumOrProduct = (arr, n) => {
  const sorted = arr.sort((a, b) => a - b);
  const least = sorted.slice(0, n);
  const most = sorted.slice(arr.length - n, arr.length);
  const leastProduct = least.reduce((total, el) => total * el, 1);
  const mostSum = most.reduce((total, el) => total + el, 0);
  return leastProduct > mostSum
    ? "product"
    : leastProduct === mostSum
      ? "same"
      : "sum";
};
