function descendingOrder(n){
  var numHash = {}, str = '';
  n = n.toString();
  for (var i = 0; i < n.length; i++) {
    numHash[n[i]] = numHash[n[i]] + 1 || 1;
  }
  for (i = 9; i >= 0; i--) {
    for (var x = 0; x < numHash[i]; x++) {
      str += i;
    }
  }
  return +str;
}