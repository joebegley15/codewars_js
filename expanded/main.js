function expandedForm(num) {
  num = num.toString().split("");
  const arr = [];
  let power = 1;
  for (let i = num.length; i--; i >= 0) {
    const number = +num[i] * power;
    if (number) {
      arr.unshift(number);
    }
    power *= 10;
  }
  return arr.join(" + ");
}
