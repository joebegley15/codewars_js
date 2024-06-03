const robotTransfer = (matrix, k) => {
    let perfectPoints = 0;
    matrix.forEach((subMatrix, i) => {
        subMatrix.forEach((point, y) => {
            let robotLocation = point;
            let moves = 0;
            while (moves < k - 1) {
                robotLocation = matrix[Number(robotLocation.split(",")[0])][Number(robotLocation.split(",")[1])];
                moves++;
            }
            if (robotLocation === `${i},${y}`) {
                perfectPoints++;
            }
        })
    });
    return perfectPoints;
}

console.log(robotTransfer([
    ["0,1","0,0","1,2"], 
    ["1,1","1,0","0,2"], 
    ["2,1","2,0","0,0"]],4))