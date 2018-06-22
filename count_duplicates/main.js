function duplicateCount(text){
  var hash = {}, count = 0;
  text = text.toLowerCase();
  for (var i = 0; i < text.length; i++){
    hash[text[i]] = hash[text[i]] + 1 || 1;
    if (hash[text[i]] === 2) {
      count++
    }
  }
  return count;
}