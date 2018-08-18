function longest(words) {
  let longest = 0;
  words.map(function(word){
   longest = word.length > longest ? word.length : longest;
  });
  return longest;
}