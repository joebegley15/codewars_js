const repeats = arr => {
  const exists = {};
  arr.forEach(n => {
    exists[n] = exists[n] + 1 || 1;
  });
  return Object.keys(exists).reduce(
    (tot, el) => tot + (exists[el] == 1 ? +el : 0),
    0
  );
};
