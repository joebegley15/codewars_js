const conflicts = {
    vertical: {},
    diagnolDown: {},
    diagnolUp: {}
};

const findConflicts = (board) => {
    for (let i = 0; i < board.length; i++) {
        let queens = 0;
        for (let y = 0; y < board.length; y++) {
            if (board[y][i]) {
                queens++;
            }
        }
        conflicts["vertical"][i] = queens;
    }
    for (let i = 0; i < board.length; i++) {
        let queens = 0;
        let otherQueens = 0;
        for (let y = 0; y < board.length - i; y++) {
            if (board[i + y][y]) {
                queens++;
            }
            if (board[y][i + y]) {
                otherQueens++;
            }
        }
        conflicts["diagnolDown"][`${i},0`] = queens;
        conflicts["diagnolDown"][`0,${i}`] = otherQueens;
    }
    for (let i = 0; i < board.length; i++) {
        let queens = 0;
        let otherQueens = 0;
        for (let y = 0; y <= board.length - 1 - i; y++) {
            if (board[board.length - 1 - y - i][y]) {
                queens++;
            }
            if (board[board.length - 1 - y][y + i]) {
                otherQueens++;
            }
        }
        conflicts["diagnolUp"][`${board.length - 1 - i},0`] = queens;
        conflicts["diagnolUp"][`${board.length - 1},${board.length - 1 - i}`] = otherQueens;
    }
}

const generateBoard = n => new Array(n).fill(0).map(x => Array(n).fill(0));

const fillBoardRandomly = board => {
    for (let i = 0; i < board.length; i++) {
        board[i][Math.floor(Math.random() * board.length)] = 1;
    }
    return board;
}

const nQueen = n => {
    const board = fillBoardRandomly(generateBoard(n));
    findConflicts(board);
    return;
}


nQueen(10)