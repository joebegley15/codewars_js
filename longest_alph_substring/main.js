const longest = str => {
  let prevVal = str.charCodeAt(0),
    currentVal,
    longestStr = str[0],
    currentStr = str[0];
  for (let i = 1; i < str.length; i++) {
    currentVal = str.charCodeAt(i);
    if (prevVal <= currentVal) {
      currentStr += str[i];
    } else {
      if (currentStr.length > longestStr.length) {
        longestStr = currentStr;
      }
      currentStr = str[i];
    }
    prevVal = currentVal;
  }
  return currentStr.length > longestStr.length ? currentStr : longestStr;
};
