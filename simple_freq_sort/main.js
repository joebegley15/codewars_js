const solve = arr => {
  const count = {},
    returnArr = [];
  arr.forEach(n => {
    n = n.toString();
    count[n] = count[n] + 1 || 1;
  });
  Object.keys(count)
    .sort((a, b) => count[b] - count[a])
    .forEach(n => {
      for (let i = 0; i < count[n]; i++) {
        returnArr.push(+n);
      }
    });
  return returnArr;
};
