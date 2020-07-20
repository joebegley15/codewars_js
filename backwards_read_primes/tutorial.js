const isPrime = n => {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const backwardsPrime = (low, high) => {
  const backwardsPrimes = [];
  for (let i = 0; i <= high; i++) {
    if (isPrime(i) && isPrime(reverse(i))) {
      backwardsPrimes.push(i);
    }
  }
  return backwardsPrimes;
};
