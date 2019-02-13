function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError();
  }
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}