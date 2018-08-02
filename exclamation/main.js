function replace(s){
  s = s.split('');
  for (var i = 0; i < s.length; i++) {
    /a|e|i|o|u/gi.test(s[i]) ? s[i] = '!' : false;
  }
  return s.join('');
}