function findOdd(array) {
  var elementCounter = {}, returnMe;
  array.map(function(element){
    elementCounter[element] = elementCounter[element] + 1 || 1
  });
  Object.keys(elementCounter).map(function(element,index){
    if (elementCounter[element] % 2 == 1) {
      returnMe = element;
    }
  })
  return parseInt(returnMe);
}