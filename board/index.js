function checkeredBoard(dimension) {
    const board = [];
    for (let i = 0; i < dimension; i++) {
        const row = [];
        for (let y = 0; y < dimension; y++) {
            row.push((i + y + dimension) % 2 === 0 ? "□" : "■");
        }
        board.push(row.join(" "));
    }
    return board.join("\n");
}