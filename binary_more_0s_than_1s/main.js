const moreZerosThanOnes = binary => {
  let zeros = 0,
    ones = 0;
  binary.split("").forEach(num => {
    if (num === "0") {
      zeros++;
    } else {
      ones++;
    }
  });
  return zeros > ones;
};

const binaryConverter = n => {
  console.log(typeof n);
  return n.toString(2);
};

const moreZeros = str => {
  const moreZerosLetters = [];
  const strArr = str.split("");
  const usedChars = {};
  let charCode, binary;
  strArr.forEach(char => {
    charCode = char.charCodeAt(0);
    binary = binaryConverter(charCode);
    if (moreZerosThanOnes(binary) && !usedChars[char]) {
      moreZerosLetters.push(char);
      usedChars[char] = true;
    }
  });
  return moreZerosLetters;
};

moreZeros("abc");
