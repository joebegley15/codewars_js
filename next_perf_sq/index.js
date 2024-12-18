const findNextSquare = n => {
    if (Math.floor(Math.sqrt(n)) !== Math.sqrt(n)) {
        return -1;
    }
    let num = n + 1;
    while (Math.floor(Math.sqrt(num)) !== Math.sqrt(num)) {
        num++;
    }
    return num;
}

console.log(findNextSquare(121))