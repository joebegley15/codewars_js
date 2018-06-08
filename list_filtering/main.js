function filter_list(l) {
  for (var i = l.length - 1; i >= 0; i--) {
    console.log(typeof(l[i]));
    if (typeof(l[i]) != 'number') {
      l.splice(i,1)
    }
  }
  return l;
}