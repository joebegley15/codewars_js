Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function findUniq(arr) {
  console.log(arr);
  const hash = {}
  let returnMe;
  for (var i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] + 1 || 0;
    console.log('-',arr[i],hash[arr[i]]);
    if (hash[arr[i]] == 0 && Object.size(hash) == 2) {
      return arr[i]
    }
  }
}

console.log(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]));