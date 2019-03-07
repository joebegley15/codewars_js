function count (string) {  
  const charObj = {};
  string.split('').forEach(char => {
    charObj[char] = charObj[char] + 1 || 1;
  });
  return charObj;
}