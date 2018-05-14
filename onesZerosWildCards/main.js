function allPossibilities(string) {
	var splitString = string.split(''), returnStringOne = '',returnStringZero = '', execute = true;
	splitString.map(function(char){
		if (execute && char == '?'){
			returnStringZero += '0';
			returnStringOne += '1';
			execute = false;
		} else {
			returnStringOne += char;
			returnStringZero += char;
		}
	})
	if (returnStringZero.includes('?')) {
		return allPossibilities(returnStringZero).concat(allPossibilities(returnStringOne));
	}
	return [returnStringOne, returnStringZero];
}

console.log(allPossibilities('00??'));;