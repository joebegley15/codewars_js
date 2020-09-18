const multiplicationTable = size => {
  const arr = [];
  const horizontal = (n, size) => {
    const subArr = [];
    for (let i = 1; i <= size; i++) {
      subArr.push(i * n);
    }
    return subArr;
  };
  for (let i = 1; i <= size; i++) {
    arr.push(horizontal(i, size));
  }
  return arr;
};

for (let i = 0; i < 10; i++) {
  console.log(multiplicationTable(i));
}
