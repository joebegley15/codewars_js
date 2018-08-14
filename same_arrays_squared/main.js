function sortNumber(a,b) {
    return a - b;
}

function comp(array1, array2){
	console.log(array1,array2)
	if (!array1 || !array2) {
		return false;
	}
  array1 = array1.sort(sortNumber);
  array2 = array2.sort(sortNumber);
  for (var i = 0; i < array1.length; i++) {
  	if (array1[i] * array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}