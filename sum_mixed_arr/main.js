function sumMix(arr){
  let sum = 0;
  arr.map(function(element){
    sum += parseInt(element);
  })
  return sum;
}