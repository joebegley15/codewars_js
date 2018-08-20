// write the function isAnagram
const sortAlph = text => text.toLowerCase().split('').sort().join('');
const isAnagram = function(test, original) {
  test = sortAlph(test);
  original = sortAlph(original);
  return test == original;
};

const isAnagramOneLine = (test,original) => test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('');
const optimal = (test,original) => sortAlph(test) == sortAlph(original);


console.log(isAnagram('main','maine'));
console.log(isAnagram('node','done'));

console.log(isAnagramOneLine('main','maine'));
console.log(isAnagramOneLine('node','done'));

console.log(optimal('main','maine'));
console.log(optimal('node','done'));