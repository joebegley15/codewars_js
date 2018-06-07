function getCount(str) {
  var vowelsCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (/a|e|i|o|u/gi.test(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

function getCountQuick(str){
	var vowelsCount = (str.match(/a|e|i|o|u/gi) || []).length;
}