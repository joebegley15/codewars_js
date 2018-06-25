function anagrams(word, words) {
  var wordHash = {}, compHash = {}, grams = [];
  function deepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
      ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y);
  }
  for (var i = 0; i < word.length; i++) {
    wordHash[word[i]] = wordHash[word[i]] + 1 || 1;
  }
  console.log(wordHash);
  words.map(function(w){
    compHash = {};
    for (var i = 0; i < w.length; i++) {
      compHash[w[i]] = compHash[w[i]] + 1 || 1;
    }
    if (deepEqual(wordHash,compHash)) {
      grams.push(w);
    }
  })
  console.log(word,grams)
  return grams;
}