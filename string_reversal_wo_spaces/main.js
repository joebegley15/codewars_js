function solve(str) {
  const strArr = str.split("");
  const spacePos = [];
  const reversed = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      spacePos.push(i);
    } else {
      reversed.unshift(strArr[i]);
    }
  }
  for (let i = 0; i < spacePos.length; i++) {
    reversed.splice(spacePos[i], 0, " ");
  }
  return reversed.join("");
}
