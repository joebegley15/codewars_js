var capitals = function (word) {
    const arr = [];
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) {
            arr.push(i)
        }
    }
    return arr;
};