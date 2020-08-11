const high = str => {
  // Create an array of letters with corresonding values
  const letterScore = {};
  const alph = "abcdefghijklmnopqrstuvwxyz";
  alph.split("").forEach((char, i) => (letterScore[char] = i + 1));
  // split the string into words
  return str.split(" ").reduce(
    // Compare the curent score of those words vs the total
    (maxWordObj, currentWord) => {
      const { val, word } = maxWordObj;
      const score = currentWord
        .split("")
        .reduce((acc, cur) => acc + letterScore[cur], 0);
      if (score > val) {
        return { val: score, word: currentWord };
      }
      return maxWordObj;
    },
    { val: 0, word: "" }
  ).word;
};

console.log(high("man i need a taxi up to ubud"));
