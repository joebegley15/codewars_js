function findUniq(arr) {
  const hash = {}
  let returnMe;
  for (var i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] + 1 || 0;
    if (hash[arr[i]]) {
      Object.keys(hash).map(function(key){
        if (!hash[key]) {
          returnMe = key;
        }
      })
      if (returnMe) {
        return parseInt(returnMe);
      }
    }
  }
}
