function rgb(r, g, b){
  function convertSingle(v){
    v = v > 255 ? 255 : v < 0 ? 0 : v;
    v = v.toString(16).toUpperCase();
    return v.length == 1 ? '0' + v : v;
  }
  return convertSingle(r) + convertSingle(g) + convertSingle(b);
}