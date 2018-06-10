function list(names){
  let arr = [], str = '';
  names.map(function(name){
    arr.push(name.name);
  });
  if (arr.length) {
    str = arr[0];
  }
  for (var i = 1; i < arr.length - 1; i++) {
    str += ', ' + arr[i];
  }
  if (arr.length > 1) {
    str += ' & ' + arr[arr.length - 1];
  }
  return str;
}