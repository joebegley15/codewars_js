function isPrime(n) {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function gap(gapVal, lowVal, highVal) {
  const primes = [];
  let lastPrime;
  for (let i = lowVal; i <= highVal; i++) {
    if (isPrime(i)) {
      console.log(i, primes);
      lastPrime = primes[primes.length - 1];
      if (i - lastPrime === gapVal) {
        return [lastPrime, i];
      }
      primes.push(i);
    }
  }
  return null;
}
