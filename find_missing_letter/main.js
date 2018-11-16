function findMissingLetter(arr) {
  let current = arr[0], last;
  for (var i = 1; i < arr.length; i++) {
    last = current;
    current = arr[i];
    if (last.charCodeAt(0) + 1 !== current.charCodeAt(0)) {
      return String.fromCharCode(last.charCodeAt(0) + 1);
    }
  }
}