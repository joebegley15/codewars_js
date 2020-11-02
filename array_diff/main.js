const arrayDiff = (a, b) => {
  const vals = {};
  b.forEach(n => {
    vals[n] = true;
  });
  return a.filter(n => !vals[n]);
};
