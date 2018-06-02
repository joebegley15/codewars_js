String.prototype.toAlternatingCase = function () {
  var returnMe = '',code;
  for (var i = 0; i < this.length; i++) {
    code = this.charCodeAt(i);
    if (code > 64 && code < 91) {
      returnMe += String.fromCharCode(code + 32);
    } else if (code > 96 && code < 123) {
      returnMe += String.fromCharCode(code - 32);
    } else {
      returnMe += this[i];
    }
  }
  return returnMe;
}