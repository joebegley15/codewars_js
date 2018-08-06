function toCurrency(price){
  const arr = [];
  price = String(price);
  for (var i = 0; i < price.length; i++) {
    arr.unshift(price[price.length - i - 1]);
    if ((i + 1) % 3 == 0 && i < price.length - 1) {
      arr.unshift(',');
    }
  }
  return arr.join('');
}