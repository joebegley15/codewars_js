const oddOrEven = array => array.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even';

console.log(oddOrEven([1,2,3,4]));
console.log(oddOrEven([1,2,3,4,5]));