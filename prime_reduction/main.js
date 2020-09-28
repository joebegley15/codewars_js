const isPrime = n => {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const willEndAtOne = n => {
  while (n > 1 && n < 50000) {
    let temp = 0;
    n.toString()
      .split("")
      .forEach(n => {
        temp += (+n) ** 2;
      });
    n = temp;
  }
  if (n === 1) {
    return true;
  }
};

const solve = (a, b) => {
  const primes = [];
  for (let i = a; i < b; i++) {
    if (isPrime(i) && willEndAtOne(i)) {
      primes.push(i);
    }
  }
  return primes;
};
