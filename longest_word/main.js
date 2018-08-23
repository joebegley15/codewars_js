function longest(words) {
  let longest = '';
  words.map(function(word){
   longest = word.length > longest.length ? word : longest;
  });
  return longest;
}

const longestOneLine = (words, a = '') => words.reduce((a,b) => a.length > b.length ? a : b);

console.log(longestOneLine(['']));