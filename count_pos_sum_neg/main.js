function countPositivesSumNegatives(input) {
  if (!input || !input.length){return []};
  var pos = 0, neg = 0;
  input.map(function(x){x>0?pos++:neg+=x})
  return [pos,neg];
}