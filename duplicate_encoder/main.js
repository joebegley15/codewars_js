function duplicateEncode(str){
  let charCount = {}, codedString = '';
  str = str.toUpperCase();
  str.split('').map(function(char){
    charCount[char] = charCount[char] + 1 || 1;
  });
  str.split('').map(function(char){
    if (charCount[char] > 1) {
      codedString += ')'
    } else {
      codedString += '('
    }
  });
  return codedString;
}
