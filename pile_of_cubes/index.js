const findNb = m => {
    let totalVolume = 0;
    let cubeLength = 0;
    while (totalVolume < m) {
        cubeLength++;
        totalVolume += cubeLength ** 3;
    }
    return totalVolume === m ? cubeLength : -1;
}

console.log(findNb(72505225))