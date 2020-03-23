const isPrime = n => {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const backwardsPrime = (start, stop) => {
  // your code here
};
