function squareDigits(num){
  var returnMe = '';
  num = num + '';
  for (var i = 0; i < num.length; i++){
    returnMe += (+ num[i]) * (+ num[i]);
  }
  return +returnMe;
}