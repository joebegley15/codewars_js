const sumOrProduct = (arr, n) => {
  const sorted = arr.sort((a, b) => a - b);
  const least = sorted.slice(0, n).reduce((total, el) => total * el, 1);
  const most = sorted.slice(-n).reduce((total, el) => total + el, 0);
  return least > most ? "product" : least === most ? "same" : "sum";
};
