const isTriangle = (a, b, c) => {
  const [x, y, z] = [a, b, c].sort((a, b) => a - b);
  return x > 0 && x + y > z && x + z > y;
};
