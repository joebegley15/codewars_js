const warnTheSheep = arr => {
  const where = arr.length - arr.indexOf("wolf") - 1;
  return where
    ? `Oi! Sheep number ${where}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep";
};
