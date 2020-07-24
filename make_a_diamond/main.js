function diamond(n) {
  const upLines = [],
    downLines = [];
  // Exception for 1 star length
  if (n === 1) return "*\n";
  // Only do this for even numbers
  if (n % 2 > 0) {
    for (let i = 1; i <= n; i += 2) {
      // Create an array of the star lines
      const stars = "*".repeat(i);
      const spaces = " ".repeat((n - i) / 2);
      const line = spaces + stars;
      upLines.push(line);
      // Create an array of the star lines, reverse of the other, for every star line except the longest
      if (i !== n) {
        downLines.unshift(line);
      }
    }
    return upLines.join("\n") + "\n" + downLines.join("\n") + "\n";
  }
  return null;
}
