const solve = s => {
  const consonantValues = {
    b: 2,
    c: 3,
    d: 4,
    f: 6,
    g: 7,
    h: 8,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  let maxVal = 0,
    currentVal = 0,
    letterScore,
    len = s.length;
  s.split("").forEach((letter, i) => {
    letterScore = consonantValues[letter];
    if (letterScore) {
      currentVal += letterScore;
      if (len === i + 1 && currentVal > maxVal) {
        maxVal = currentVal;
      }
    } else {
      if (currentVal > maxVal) {
        maxVal = currentVal;
      }
      currentVal = 0;
    }
  });
  return maxVal;
};
