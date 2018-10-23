function findUniq(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  let hash = {};
  for (var i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] + 1 || 1;
    if (hash[arr[i]] > 1 && Object.keys(hash).length > 1) {
      return + Object.keys(hash).reduce((current,x) => hash[x] == 1 ? x : current);
    } 
  }
}