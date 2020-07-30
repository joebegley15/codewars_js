function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    let x = 0;
    while (x < a.length) {
      if (b[i] === a[x]) {
        a.splice(x, 1);
      } else {
        x++;
      }
    }
  }
  return a;
}
