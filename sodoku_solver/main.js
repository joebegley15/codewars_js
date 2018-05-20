function sudoku(puzzle) {
	// Set up the object
	var hash = {},miss = 1, vertBox, horBox, total, value,lastMiss;
	for (var i = 0; i < puzzle.length; i++) {
		hash[i] = {};
		for (var x = 0; x < puzzle.length; x++) {
			hash[i][x] = {
				solved:false,
				impossible:{
					1:false,
					2:false,
					3:false,
					4:false,
					5:false,
					6:false,
					7:false,
					8:false,
					9:false
				}			
			}
		}
	}
	while (miss > 0) { 
		miss = 0;
		// Check Values on Board
		for (var i = 0; i < puzzle.length; i++) {
			for (var x = 0; x < puzzle.length; x++) {
				// If value isnt zero, mark as solved.
				if (puzzle[i][x]) {
					hash[i][x]['solved'] = true;
				// Otherwise, check which values won't work
				} else {
					// Check all vertical and horizontal values
					for (across = 0; across < puzzle.length; across++) {
						if (puzzle[i][across]) {
							hash[i][x]['impossible'][puzzle[i][across]] = true;
						}
						if (puzzle[across][x]) {
							hash[i][x]['impossible'][puzzle[across][x]] = true;
						}
					}
					// Check all values in the box
					vertBox = Math.floor(i / 3) * 3;
					horBox = Math.floor(x / 3) * 3;
					for (var horizontal = 0; horizontal < 3; horizontal++) {
						for (var vertical = 0; vertical < 3; vertical++) {
							if (puzzle[vertBox + vertical][horBox + horizontal]) {
								hash[i][x]['impossible'][puzzle[vertBox + vertical][horBox + horizontal]] = true;
							}
						}
					}
					total = 0
					Object.keys(hash[i][x]['impossible']).forEach(function(key,index) {
					    if (hash[i][x]['impossible'][key]) {
					    	total++;
					    } else {
					    	value = key;
					    }
					});
					if (total == 8) {
						puzzle[i][x] = parseInt(value);
					} else {
						miss++;
					}
				}
			}
		}
		if (lastMiss == miss) {
			return 'Unsolvabe';
		} else {
			lastMiss = miss;
		}
		console.log(miss);
	}
	return puzzle;
}


var puzzle = [[0, 0, 6, 1, 0, 0, 0, 0, 8], 
          [0, 8, 0, 0, 9, 0, 0, 3, 0], 
          [2, 0, 0, 0, 0, 5, 4, 0, 0], 
          [4, 0, 0, 0, 0, 1, 8, 0, 0], 
          [0, 3, 0, 0, 7, 0, 0, 4, 0], 
          [0, 0, 7, 9, 0, 0, 0, 0, 3], 
          [0, 0, 8, 4, 0, 0, 0, 0, 6], 
          [0, 2, 0, 0, 5, 0, 0, 8, 0], 
          [1, 0, 0, 0, 0, 2, 5, 0, 0]];


console.log(sudoku(puzzle));