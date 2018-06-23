var countBits = function(n) {
	var divisor = 2, val = 0;
	while (n > 0) {
		if (n % divisor) {
			n -= (divisor / 2);
			val++;
		}
		divisor *= 2;
	}
	return val;
};

console.log(countBits(9))