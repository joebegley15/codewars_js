const multiplicationTable = size => {
  const arr = [];
  for (let i = 1; i <= size; i++) {
    const subArr = [];
    for (let n = 1; n <= size; n++) {
      subArr.push(i * n);
    }
    arr.push(subArr);
  }
  return arr;
};

for (let i = 0; i < 10; i++) {
  console.log(multiplicationTable(i));
}
