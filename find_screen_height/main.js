function findScreenHeight(width, ratio) {
  const [d, m] = ratio.split(":").map(n => +n);
  return width + "x" + width / d * m;
}