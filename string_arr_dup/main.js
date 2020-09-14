const dup = arr => {
  return arr.map(string => {
    let last = "",
      current;
    return string
      .split("")
      .map(s => {
        current = s;
        if (current === last) {
          last = current;
          return "";
        }
        last = current;
        return current;
      })
      .join("");
  });
};
