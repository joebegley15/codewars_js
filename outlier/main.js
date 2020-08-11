function findOutlier(integers) {
  const count = { even: 0, odd: 0 };
  let evenN, oddN;
  integers.forEach(integer => {
    if (integer % 2) {
      count.even++;
      evenN = integer;
    } else {
      count.odd++;
      oddN = integer;
    }
  });
  if (count.even > 1) {
    return oddN;
  }
  return evenN;
}
