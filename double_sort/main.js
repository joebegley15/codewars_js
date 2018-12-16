function dbSort(a){
  let nums = [], words = [];
  a.forEach(x => {
    if (typeof x === 'string') {
      words.push(x);
    } else {
      nums.push(x);
    }
  });
  return nums.sort((a,b) => a - b).concat(words.sort());
}