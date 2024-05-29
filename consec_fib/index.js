function productFib(prod){
    let i = 0;
    const fib = [0, 1];
    while (true) {
      if (fib[i] * fib[i + 1] === prod) {
        return [fib[i], fib[i + 1], true];
      }
      if (fib[i] * fib[i + 1] > prod) {
        return [fib[i], fib[i + 1], false];
      }
        fib.push(fib[i] + fib[i + 1]);
        i++;
    }
  }