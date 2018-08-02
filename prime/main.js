function isPrime(n) {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
      console.log(n,i);
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
