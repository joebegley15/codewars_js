const move_zeros = (arrNum, isRight) => {
  const notZeros = [],
    zeros = [];
  arrNum.forEach(num => {
    if (num) {
      notZeros.push(num);
    } else {
      zeros.push(num);
    }
  });
  if (isRight || isRight === undefined) {
    return notZeros.concat(zeros);
  }
  return zeros.concat(notZeros);
};
