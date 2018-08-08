// write the function isAnagram
var isAnagram = function(test, original) {
  const sortAlph = text => text.toLowerCase().split('').sort().join('');
  test = sortAlph(test);
  original = sortAlph(original);
  return test == original;
};
