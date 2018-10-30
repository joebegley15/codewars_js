const orderWord = s =>{
  if (!s) return 'Invalid String!';
  s = [...s]
  const sort = arr => {
    if (arr.length < 2) return arr;
    let less = [], more = [], point = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < point) {
        less.push(arr[i]);
      } else {
        more.push(arr[i]);
      }
    }
    return sort(less).concat(point, sort(more))
  }
  return sort(s).join('');
}