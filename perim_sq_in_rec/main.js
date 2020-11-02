const perimeter = n => {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  console.log(arr);
  return arr.reduce((total, el) => total + el, 0) * 4;
};
