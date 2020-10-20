const squareDigits = n =>
  +n
    .toString()
    .split("")
    .map(el => +el * +el)
    .join("");
