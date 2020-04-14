const getMinMax = arr => {
  return arr.reduce(([min, max], n) => {
    if (min === null || n < min) {
      min = n;
    }
    if (max === null || n > max) {
      max = n;
    }
    return [min, max]
  }, [null, null]);
};