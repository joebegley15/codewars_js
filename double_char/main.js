function doubleChar(str) {
  str = str.split('')
  str = str.map(function(char){
    return char + char
  })
  return str.join('');
}
