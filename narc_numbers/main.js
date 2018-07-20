function narcissistic( value ) {
  let total = 0;
  value = value + '';
  for (var i = 0; i < value.length; i++) {
    total += Math.pow(parseInt(value[i]),value.length);
  }
  return total == +value;
}
