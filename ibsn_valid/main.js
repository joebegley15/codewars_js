const validISBN10 = ibsn => {
  let total = 0;
  for (let i = 0; i < 9; i++) {
    let n = ibsn[i] && +ibsn[i];
    if (n === 0 || n) {
      total += n * (i + 1);
    } else {
      return false;
    }
  }
  const last = ibsn[9] && +ibsn[9];
  if (ibsn[9] === "X" || last === 0 || last) {
    if (ibsn[9] === "X") {
      total += 100;
    } else {
      total += last * 10;
    }
  } else {
    return false;
  }
  return total % 11 === 0;
};
