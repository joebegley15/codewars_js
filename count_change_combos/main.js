function sortNumber(a,b) {
    return b - a;
}

function listChange(value, coins) {
	var arr = [],total;
	coins = coins.sort(sortNumber);
	function combos(value,coins,used) {
		coins.map(function(coin,i){
			total = used.reduce((a,b) => a + b, 0);
			if (total + coin == value) {
				total + coin == value;
				arr.push(used.concat([coin]))
			} else if (total + coin < value) {
				combos(value,coins.slice(i),used.concat([coin]));
			}
		})
	}
	combos(value,coins,[])
	return arr;
}

function numberOfCombos(value, coins) {
	var v = 0,total;
	function combos(value,coins,used) {
		coins.map(function(coin,i){
			total = used.reduce((a,b) => a + b, 0);
			if (total + coin == value) {
				total + coin == value;
				v++;
			} else if (total + coin < value) {
				combos(value,coins.slice(i),used.concat([coin]));
			}
		})
	}
	combos(value,coins,[])
	return v;
}

console.log(sortNumber);
console.log(listChange(10, [5,1,10]));
console.log(numberOfCombos(10, [5,1,10]));