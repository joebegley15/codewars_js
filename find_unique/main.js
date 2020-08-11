function findUniq(arr) {
  const count = {};
  arr.forEach(num => {
    count[num] = count[num] + 1 || 1;
  });
  return +Object.keys(count).find(n => count[n] === 1);
}
