function order(words) {
  const wordBook = {};
  words.split(" ").forEach(word => {
    word.split("").forEach(char => {
      if (+char == char) {
        wordBook[char] = word;
      }
    });
  });
  Object.keys(wordBook).sort((a, b) => +a > +b);
  return Object.values(wordBook).join(" ");
}
