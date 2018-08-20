// One line
const sumMixOne = (arr,sum=0)=> arr.reduce((sum,current)=>sum+parseInt(current))
// Multi - Line
function sumMix(arr){
  let sum = 0;
  arr.map(function(element){
    sum += parseInt(element);
  })
  return sum;
} 

console.log(sumMixOne([1,'2',3]));