const doors = n => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(0);
    }
    console.log(arr);
    for (let i = 1; i <= n; i++) {
        for (let x = i - 1; x < n; x += i) {
            arr[x] = arr[x] ? 0 : 1;
        }
        console.log(arr);
    }
    return arr.reduce((acc, el) => acc += el, 0);
}

console.log(doors(100));