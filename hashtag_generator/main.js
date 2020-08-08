function generateHashtag(str) {
  const strArr = str.match(/[0-9A-Z]+/gi);
  if (!strArr || strArr.join("").length >= 140) return false;
  const capitalize = word => {
    return word[0].toUpperCase() + word.slice(1);
  };
  return `#${strArr.map(word => capitalize(word)).join("")}`;
}
