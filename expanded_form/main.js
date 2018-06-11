function expandedForm(num) {
  let i = 1, expArr = [], val;
  while (i < num/10) {
    i *= 10;
  };
  while (i >= 1) {
    val = Math.floor(num/i)*i;
    if (val) {
      expArr.push(val);
      num = num - (val);
    }
    i = i/10;
  };
  return expArr.join(' + ')
}