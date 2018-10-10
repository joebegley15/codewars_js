function isPrime(n) {
  if (n < 2 || (n % 2 == 0 && n > 2)) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimeDistance(arr){
  let primes = [], totalPrimes = 0;
  for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
   if (isPrime(i)){
     primes.push(i);
   } 
  }
  primes.forEach(function(n){
    for (var i = 0; i < arr.length - 1; i++) {
      for (var x = i + 1; x < arr.length; x++) {
        if (n > arr[i] && n < arr[x]) {
          totalPrimes++;
        }
      }
    }
  })
  return totalPrimes;
}