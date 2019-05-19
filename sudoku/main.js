const validSolution = board => {
	for (var i = 0; i < 9; i++) {
		const horPassed = {}, vertPassed = {}, box = {};
		for (var x = 0; x < 9; x++) {
			if (horPassed[board[i][x]]) {
				return false;
			} else {
				horPassed[board[i][x]] = true;
			}
			if (vertPassed[board[x][i]]) {
				return false;
			} else {
				vertPassed[board[x][i]] = true;
			}
		}
		let horStart = (i % 3) * 3, vertStart = Math.floor(i / 3) * 3;
		for (var n = 0; n < 3; n++) {
			for (var m = 0; m < 3; m++) {
				if (box[board[n][m]]) {
					return false;
				} else {
					box[board[n][m]] = true;
				}
			}
		}
	}
	return true;
}

console.log(validSolution(
	[[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9]]
));

console.log(validSolution(
	[
		[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	    [6, 7, 2, 1, 9, 5, 3, 4, 8],
	    [1, 9, 8, 3, 4, 2, 5, 6, 7],
	    [8, 5, 9, 7, 6, 1, 4, 2, 3],
	    [4, 2, 6, 8, 5, 3, 7, 9, 1],
	    [7, 1, 3, 9, 2, 4, 8, 5, 6],
	    [9, 6, 1, 5, 3, 7, 2, 8, 4],
	    [2, 8, 7, 4, 1, 9, 6, 3, 5],
	    [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
))