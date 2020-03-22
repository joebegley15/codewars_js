function solve(s) {
  const ASCII_OFFSET = 96;
  const VOWELS = /[aeiou]/gi;

  /**
   * Throw away all the vowels, but use a placeholder that marks substring boundaries
   */
  const substrings = s.split(VOWELS);
  const substringArrays = substrings.map(s => s.split(""));
  let max = 0,
    substringValue;

  for (const sa of substringArrays) {
    substringValue = sa.reduce(
      (accumulator, current) =>
        accumulator + (current.charCodeAt() - ASCII_OFFSET),
      0
    );
    if (substringValue > max) {
      max = substringValue;
    }
  }
  return max;
}
