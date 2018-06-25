function toCamelCase(str) {
  var lastOne, thisOne, caseStr = '';
  for (var i = 0; i < str.length; i++) {
    lastOne = thisOne;
    thisOne = str[i];
    if (i == 0) {
      caseStr += str[i]
    } else if (lastOne == '_' || lastOne == '-') {
      caseStr += str[i].toUpperCase();
    } else if (thisOne != '_' && thisOne != '-') {
      caseStr += str[i].toLowerCase();
    }
  }
  return caseStr;
}
