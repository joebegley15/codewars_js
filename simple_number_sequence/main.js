const missing = s => {
  let i = 1;
  const splitter = (s, n) => {
    const arr = [];
    while (s.length) {
      arr.push(+s.substring(0, i));
      s = s.substring(i);
    }
    console.log(arr);
    return arr;
  };
  const hasMissingNumber = split => {
    let missing;
    for (let i = 0; i < split.length - 1; i++) {
      if (split[i] + 2 === split[i + 1]) {
        missing = split[i] + 1;
      } else if (split[i] + 1 !== split[i + 1]) {
        return false;
      }
    }
    return missing;
  };
  while (i < s.length / 3) {
    const missingNumber = hasMissingNumber(splitter(s, i));
    if (missingNumber) {
      return missingNumber;
    }
    i++;
  }
  return -1;
};

console.log(missing("9899101102"));
