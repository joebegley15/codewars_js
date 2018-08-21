function alphabetPosition(text) {
  var arr = [];
  for (var i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      arr.push(text.charCodeAt(i) - 64);
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      arr.push(text.charCodeAt(i) - 96);
    }
  }
  return arr.join(' ');
}

console.log(alphabetPosition('text'));
