function countIslands (mapStr) {
	var i = 0;
	function destroyer(matrix,row,column){
		if (matrix[row][column] == 0) {
			return 0;
		}
		matrix[row][column] = 0;
		if (matrix[row - 1]) {
			if (matrix[row - 1][column]) {
				destroyer(matrix,row - 1, column);
			}
		}
		if (matrix[row + 1]) {
			if (matrix[row + 1][column]) {
				destroyer(matrix,row + 1, column);
			}
		}
		if (matrix[row][column - 1]) {
			destroyer(matrix,row,column - 1);
		}
		if (matrix[row][column + 1]) {
			destroyer(matrix,row,column + 1);
		}
		return true;
 	}
	function islandCount(matrix) {
		var islandCount = 0;
		for (var row = 0; row < matrix.length; row++) {
			for (var column = 0; column < matrix[row].length; column++) {
				var size = destroyer(matrix,row,column);
				if (size) {
					islandCount++;
				}
			}
		}
		return islandCount;
	}
	var matrix = mapStr.split('\n');
	for (var i = 0; i < matrix.length; i++) {
		matrix[i] = matrix[i].split('');
		for (var x = 0; x < matrix[i].length; x++) {
			if (matrix[i][x] == '0') {
				matrix[i][x] = 1;
			} else {
				matrix[i][x] = 0;
			}
		}
	}
	return islandCount(matrix);
}

console.log(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....'))