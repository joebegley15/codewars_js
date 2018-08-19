function pigIt(str){
  str = str.split(' ');
  str = str.map(function(word){
    return word.slice(1,word.length) + word[0] + 'ay'
  });
  return str.join(' ');
}