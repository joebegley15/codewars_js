function diamond(n) {
  const upLines = [],
    downLines = [];

  if (n === 1) return "*\n";

  if (n % 2 > 0) {
    for (let i = 1; i <= n; i += 2) {
      const stars = Array(i)
        .fill()
        .map(() => "*")
        .join("");
      const spaces = Array((n - i) / 2)
        .fill()
        .map(() => " ")
        .join("");
      const line = spaces + stars;
      upLines.push(line);
      if (i !== n) {
        downLines.unshift(line);
      }
    }
    return upLines.join("\n") + "\n" + downLines.join("\n") + "\n";
  }
  return null;
}
