let totalMoves = 0;

const constructBoard = n => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
        for (let y = 0; y < n; y++) {
            arr[i].push(0);
        }
        arr[i][Math.floor(Math.random() * n)] = 1;
    }
    return arr;
}

const conflictCounter = board => {
    let verticalConflicts = 0;
    let mainDiagnolConflicts = 0;
    let antiDiagnoalConflicts = 0;
    // vertical
    for (let i = 0; i < board.length; i++) {
        let count = 0;
        for (let y = 0; y < board.length; y++) {
            if (board[y][i] === 1) {
                count++;
            }
        }
        if (count > 1) {
            verticalConflicts++;
        }
    }
    // mainDiagnolConflicts
    for (let i = 0; i < board.length; i++) {
        let countUp = 0;
        let countDown = 0;
        for (let y = 0; y < board.length - i; y++) {
            if (board[y][y + i] === 1) {
                countUp++
            }
            if (i > 0 && board[y + i][y] === 1) {
                countDown++;
            }
        }
        if (countUp > 1) {
            mainDiagnolConflicts++;
        }
        if (countDown > 1) {
            mainDiagnolConflicts++;
        }
    }
    // vertDiagnolConflicts
    for (let i = 0; i < board.length; i++) {
        let countUp = 0;
        let countDown = 0;
        for (let y = 0; y < board.length - i; y++) {
            if (board[board.length - 1 - y][y + i] === 1) {
                countUp++;
            }
            if (board[board.length - i - y - 1][y] === 1) {
                countDown++;
            }
        }
        if (countUp > 1) {
            antiDiagnoalConflicts++;
        }
        if (countDown > 1) {
            antiDiagnoalConflicts++;
        }
    }
    const conflictCounter = verticalConflicts + mainDiagnolConflicts + antiDiagnoalConflicts;
    return conflictCounter;
}

const recursiveSolution = (board, n) => {
    let conflicts = conflictCounter(board);
    if (conflicts === 0) {
        return board;
    }
    for (let i = 0; i < board.length; i++) {
        const freshRow = new Array(n).fill(0);
        freshRow[Math.floor(Math.random() * n)] = 1;
        const oldRow = board[i];
        board[i] = freshRow;
        const newTotalConflicts = conflictCounter(board);
        if (newTotalConflicts > conflicts) {
            board[i] = oldRow;
        } else {
            conflicts = newTotalConflicts;
        }
    }
    totalMoves++;
    if (totalMoves < 5000) {
        return recursiveSolution(board, n);
    }
    return "No solution"
}

const nQueens = n => {
    const board = constructBoard(n);
    return recursiveSolution(board, n);
}
console.log(nQueens(30));