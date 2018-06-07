function minCoins(value) {
	console.log(value);
	var coins = {
		0: {value: 200, name: '£2', used:false},
		1: {value: 100, name: '£1', used:false},
		2: {value: 50, name: '50p', used:false},
		3: {value: 20, name: '20p', used:false},
		4: {value: 10, name: '10p', used:false},
		5: {value: 5, name: '5p', used:false},
		6: {value: 2, name: '2p', used:false},
		7: {value: 1, name: '1p', used:false}
	}

	function convertValueToP(value) {
		if (typeof(value) == 'number') {
			return value;
		}
		if (/^(£\d+)$/.test(value)){
			value = value.slice(1);
			return parseInt(value * 100);
		}
		if (/^(£\d+\.\d+)$/.test(value)){
			value = value.slice(1);
			return parseFloat(value * 100);
		}
		if (/^(\d+)$/.test(value)) {
			return parseInt(value);
		}
		if (/^(\d+\.\d+)$/.test(value)) {
			return parseFloat(value) * 100;
		}
		if (/^(\d+p)$/.test(value)) {
			return parseInt(value.substring(0, value.length - 1));
		}
		if (/^(\d+\.\d+p)$/.test(value)) {
			return parseFloat(value.substring(0, value.length - 1)) * 100;
		}
		if (/^(£\d+\.\d+p|£\d+p)$/.test(value)){
			value = value.slice(0, -1)
			return parseFloat(value * 100);
		}
	}

	value = convertValueToP(value);
	console.log(value);
	if (typeof(value) != 'number' || value === 0) {
		return 'Invalid input - enter a positive amount of money';
	}
	value = Math.round(value);
	console.log(value);
	var returnArr = [], returnStr = '';

	for (var coinIterator = 0; coinIterator < 8; coinIterator++) {
		var currentCoin = coins[coinIterator]['value'];
		var used = Math.floor(value / currentCoin);
		value = value % currentCoin;
		if (used > 1) {
			returnArr.push(used + ' ' + coins[coinIterator]['name'] + ' coins');
		} else if (used == 1) {
			returnArr.push(used + ' ' + coins[coinIterator]['name'] + ' coin');
		}
	}

	if (!returnArr.length) {
		return returnArr.join('');
	}

	for (var i = 0; i < returnArr.length; i++) {
		if (i == 0) {
			returnStr = returnArr[i]
		} else if (i == returnArr.length - 1) {
			returnStr += ' and ' + returnArr[i]
		} else {
			returnStr += ', ' + returnArr[i];
		}
	}

	return returnStr;
}
