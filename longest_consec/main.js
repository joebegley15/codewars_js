const longestRepetition = s => {
  const longest = ["", 0];
  let last = s[0],
    current,
    currentLength = 1;
  if (s.length === 0) {
    return longest;
  }
  for (let i = 1; i < s.length; i++) {
    current = s[i];
    if (last === current) {
      currentLength++;
    } else {
      if (currentLength > longest[1]) {
        longest[0] = last;
        longest[1] = currentLength;
      }
      currentLength = 1;
    }
    last = current;
  }
  return currentLength > longest[1] ? [current, currentLength] : longest;
};
