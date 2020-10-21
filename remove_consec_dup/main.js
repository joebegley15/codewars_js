const removeConsecutiveDuplicates = s =>
  s
    .split(" ")
    .filter((el, i, arr) => el !== arr[i - 1])
    .join(" ");
