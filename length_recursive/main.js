function lenR(x) {
  if (x.length) {
    if (typeof(x) === 'string') {
      x = x.split('');
    }
    x.pop();
    return 1 + lenR(x);
  }
  return 0;
}