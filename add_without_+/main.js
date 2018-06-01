function add(x,y) {
  const firstArr = new Array(x).fill(true);
  const secondArr = new Array(y).fill(true);
  return firstArr.concat(secondArr).length
}

console.log(add(10,10));
console.log(add(-1,-1));
console.log(add(10,-9));