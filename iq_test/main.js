function iqTest(numbers){
	let odd = 0, even = 0, v;
	numbers = numbers.split(' ');
	for (var i = 0; i < numbers.length; i++) {
		numbers[i] % 2 ? odd++ : even++;
	}
	v = odd > even ? 0 : 1;
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 == v) {return i+1}
	}
}

//

console.log(iqTest('1 2 3 5 7'))