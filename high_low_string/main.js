const highAndLow = numbers => {
  const numbersArr = numbers.split(" ");
  let high = numbersArr[0],
    low = numbersArr[0],
    int;
  numbersArr.forEach(n => {
    int = +n;
    if (int < low) {
      low = int;
    }
    if (int > high) {
      high = int;
    }
  });
  return `${high} ${low}`;
};
