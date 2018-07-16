function reverseWords(str) {
  let arr = [], current;
  str.split(' ').map(function(x){
    arr.push(x.split('').reverse().join(''));
  })
  console.log(str,arr);
  return arr.join(' ');
}