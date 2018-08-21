function sumMixedArr(arr) {
	let sum = 0;
	arr.map(function(element){
		sum += parseInt(element);
	})
	return sum;
}

const sumMixedOneLine = (arr,sum=0) => arr.reduce((sum,element) => sum + parseInt(element));

console.log(sumMixedArr([1,'2',3]));
console.log(sumMixedOneLine([1,'2',3]));