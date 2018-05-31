function alphabetized(s) {
  var pointer,val,less='',more='';
  if (s.length < 2) {
    if ((s.charCodeAt(0) >= 65 && s.charCodeAt(0) < 91)  || (s.charCodeAt(0) >= 97 && s.charCodeAt(0) < 123)) {
      return s;
    } else {
      return '';
    }
  }
  if (s.charCodeAt(0) >= 97 && s.charCodeAt(0) < 123) {
    pointer = s.charCodeAt(0) - 96.5;
  } else if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) < 91) {
    pointer = s.charCodeAt(0) - 65;
  } else {
    return alphabetized(s.substr(1));
  }
  for (var i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65) {
      if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) < 123) {
        val = s.charCodeAt(i) - 97;
      } else if (s.charCodeAt(i) < 91) {
        val = s.charCodeAt(i) - 64.5;
      }
      if (val < pointer) {
        less += s[i]
      } else {
        more += s[i]
      }
    }
  }
  return alphabetized(less) + s[0] + alphabetized(more);