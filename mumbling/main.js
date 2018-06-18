function accum(s) {
	var returnMe = [],str;
  s = s.toLowerCase();
  for (var i = 0; i < s.length; i++) {
    str = s[i].toUpperCase();
    for (var x = 0; x < i; x++) {
      str += s[i];
    }
    returnMe.push(str);
  }
  return returnMe.join('-');
}