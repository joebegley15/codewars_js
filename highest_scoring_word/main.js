const high = str => {
  const letterScore = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  return str.split(" ").reduce(
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
