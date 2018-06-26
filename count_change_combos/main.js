function sortNumber(a,b) {
    return b - a;
}

function countChange(value, coins) {
	var arr = [],total;
	coins = coins.sort(sortNumber);
	function combos(value,coins,used) {
		coins.map(function(coin,i){
			total = used.reduce((a,b) => a + b, 0);
			console.log(total + coin,used);
			if (total + coin == value) {
				total + coin == value;
				arr.push(used.concat([coin]))
			} else if (total + coin < value) {
				combos(value,coins.slice(i),used.concat([coin]));
			}
		})
	}
	combos(value,coins,[])
	return arr.length;
}

console.log(countChange(10, [5,1,10]));