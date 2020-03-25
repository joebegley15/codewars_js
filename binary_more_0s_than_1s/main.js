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

const binaryConverter = str => {
  return str.toString(2);
};

const moreZeros = str => {
  const moreZerosLetters = [];
  const strArr = str.split("");
  const usedChars = {};
  let binary;
  strArr.forEach(char => {
    binary = binaryConverter(char.charCodeAt(0));
    if (moreZerosThanOnes(binary) && !usedChars[char]) {
      moreZerosLetters.push(char);
      usedChars[char] = true;
    }
  });
  return moreZerosLetters;
};
