function toBinary(n){
  var str = '';
  increment = 2;
  if (n === 0) {
    return 0;
  }
  while (n > 0) {
    if (n % increment) {
      n = n - (increment / 2);
      str = '1' + str;
    } else {
      str = '0' + str;
    }
    increment *= 2;
  }
  return parseInt(str);
}

console.log(toBinary(4));