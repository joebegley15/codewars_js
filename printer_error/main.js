function printerError(str) {
  const strArr = str.split('');
  let sum = 0;
  strArr.forEach(function(element){
    if (element.charCodeAt(0) < 96 || element.charCodeAt(0) >= 110) {
      sum++;
    }
  });
  return sum + '/' + str.length;
}