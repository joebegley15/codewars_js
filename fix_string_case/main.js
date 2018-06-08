function solve(s){
  var highCount = 0, lowCount = 0, code;
  for (var i = 0; i < s.length; i++) {
    code = s.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      lowCount++;
    } else if (code >= 65 && code <= 90) {
      highCount++;
    }
  }
  if (highCount > lowCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}