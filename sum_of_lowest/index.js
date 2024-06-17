function sumTwoSmallestNumbers(numbers) {
    const lowest = [];
    numbers.forEach(n => {
        if (lowest[0] === undefined) {
            lowest.push(n);
        } else if (lowest[1] === undefined) {
            if (n < lowest[0]) {
                lowest.unshift(n);
            } else {
                lowest.push(n);
            }
        } else {
            if (n < lowest[0]) {
                lowest[1] = lowest[0];
                lowest[0] = n;
            } else if (n < lowest[1]) {
                lowest[1] = n;
            }
        }
    });
    return lowest[0] + lowest[1];
}

sumTwoSmallestNumbers([3, 87, 45, 12, 7])