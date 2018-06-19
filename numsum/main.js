function sumDigPow(a, b) {
  var returnArr = [], strArr, val = 0;
  for (var a = a; a <= b; a++) {
    strArr = ('' + a).split('');
    val = 0;
    for (var i = 0; i < strArr.length; i++) {
      val += parseInt(strArr[i]) ** (i + 1);
    }
    if (val == a) {
      returnArr.push(a);
    }
  }
  return returnArr;
}
