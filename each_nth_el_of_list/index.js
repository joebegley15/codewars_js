function each(n, xs) {
    let i;
    const returnArr = [];
    // If n is negative, start iterating from the back of the list
    if (n < 0) {
        i = xs.length + n;
    }
    // If n is positive, start from the front
    if (n > 0) {
        i = n - 1;
    }
    // Stop iterating when we get past the front or back
    while (i >= 0 && i < xs.length) {
        // Add the element to the array we're spitting back
        returnArr.push(xs[i]);
        // Iterate. Keep in mind if the number is negative, this operation will decrease i and move us towards the front
        i += n;
    }
    return returnArr;
  }