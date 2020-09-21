function isPrime(n) {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solve(n) {
  let lastPrime, nextPrime;
  let i = n;
  while (!lastPrime) {
    if (isPrime(i)) {
      lastPrime = i;
    }
    i--;
  }
  if (lastPrime === n) {
    return lastPrime;
  }
  i = n;
  while (!nextPrime) {
    if (isPrime(i)) {
      nextPrime = i;
    }
    i++;
  }
  return nextPrime - n < n - lastPrime ? nextPrime : lastPrime;
}
