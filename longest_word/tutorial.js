function longestString(arr) {
	let longest = '';
	arr.map(function(str){
		if (str.length > longest.length) {
			longest = str;
		}
	})
	return longest;
}

const longestStringOneLine = (arr, base = '') => arr.reduce((base,element) => element.length > base.length ? element : base);

console.log(longestStringOneLine(['We','are','strings','duh']));