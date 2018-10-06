function onlyDuplicates(str) {
  var obj = {};
  str.split('').forEach((char) => obj[char] = obj[char] + 1 || 1);
  return str.split('').map((char) => obj[char] > 1 ? char : '').join('');
}