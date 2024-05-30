const constructBoard = n => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
        for (let y = 0; y < n; y++) {
            arr[i].push(0);
        }
    }
    return arr;
}

/*
0 - possible space
1 - impossible space
2 - queen
*/

let solution = [];
let count = 0;

const populatePossibilities = (board, startRow, position) => {
    const boardCopy = board.map(x => x.map(x => x))
    let i = startRow;
    // populate down
    while (i < board.length) {
        boardCopy[i][position] = 1;
        i++;
    }
    // populate horizontal forward
    i = 0;
    while (i + startRow < board.length && i + position < board.length) {
        boardCopy[startRow + i][position + i] = 1;
        i++;
    }
    // populate horizontal back
    i = 0;
    while (i + startRow < board.length && position - i >= 0) {
        boardCopy[startRow + i][position - i] = 1;
        i++;
    }
    boardCopy[startRow][position] = 2;
    return boardCopy;
}

const recursivePlacerFunction = (board, startRow) => {
    count++;
    const possiblePositions = [];
    if (startRow === board.length - 1 && board[startRow].indexOf(0) !== -1) {
        const index = board[startRow].indexOf(0);
        board[startRow][index] = 2;
        solution = board;
        return true;
    }
    if (startRow === board.length || board[startRow].indexOf(0) === -1) {
        return false;
    }
    for (let i = 0; i < board[startRow].length; i++) {
        if (board[startRow][i] === 0) {
            possiblePositions.push(i);
        }
    }
    possiblePositions.forEach(position => {
        if (board[startRow][position] !== 1) {
            const possibleBoard = populatePossibilities(board, startRow, position);
            recursivePlacerFunction(possibleBoard, startRow + 1)
        }
    });
}

const nQueen = n => {
    const board = constructBoard(n);
    recursivePlacerFunction(board, 0);
    console.log(count);
    return solution;
}

console.log(nQueen(3));