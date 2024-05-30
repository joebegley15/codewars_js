const format = (a, b) => {
	if (a + 1 === b) {
		return a + ',' + b;
	}
	if (a === b) {
		return a
	}
	return a + "-" + b
};

function solution(list){
	const ranges = [];
	let currentRangeStart = list[0];
	if (list.length === 1) {
		return [list[0] + "-" + list[0]];
	}
	for (let i = 1; i < list.length; i++) {
		if (list[i] !== list[i - 1] + 1) {
				ranges.push(format(currentRangeStart, list[i - 1]));
				currentRangeStart = list[i];
		}
		if (i === list.length - 1) {
			ranges.push(format(currentRangeStart, list[i]))
		}
	}
	return ranges.join(",");
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))