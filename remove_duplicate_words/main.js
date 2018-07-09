const removeDuplicateWords = function(s){
  var retMe = [], hash = {};
  s.split(' ').map(function(x){
    if (!hash[x]) {
      retMe.push(x);
    }
    hash[x] =true;
  })
  return retMe.join(' ');
}