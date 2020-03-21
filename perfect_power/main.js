var isPP = function(n) {
  const sqrt = Math.sqrt(n);
  let breakMeDown, cond, power;
  for (let i = 2; i <= sqrt; i++) {
    breakMeDown = n;
    cond = true;
    power = 2;
    while (cond) {
      if (breakMeDown % i === 0) {
        if (breakMeDown / i === i) {
          return [i, power];
        }
        breakMeDown = breakMeDown / i;
        power++;
      } else {
        cond = false;
      }
    }
  }
  return null;
};
