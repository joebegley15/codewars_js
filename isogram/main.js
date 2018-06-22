function isIsogram(str){
  var hash = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    } else {
      hash[str[i]] = 1;
    }
  }
  return true;
}