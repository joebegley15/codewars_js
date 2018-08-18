// One line
const sumMix = (arr, sum=0) => arr.map(v => parseInt(v)).reduce((a,b)=>a+b);

// Multi - Line
function sumMix(arr){
  let sum = 0;
  arr.map(function(element){
    sum += parseInt(element);
  })
  return sum;
} 