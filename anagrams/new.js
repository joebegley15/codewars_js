const anagrams = (testWord, words) => {
  const sort = str => {
    return str
      .split("")
      .sort()
      .join();
  };
  return words.filter(word => sort(word) === sort(testWord));
};
