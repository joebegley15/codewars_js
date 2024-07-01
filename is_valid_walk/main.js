const isValidWalk = walk => {
    if (walk.length !== 10) {
        return false;
    }
    const coordinates = [0, 0];
    const processDirection = d => {
        if (d === 'n') {
            coordinates[0]++;
        }
        if (d === 's') {
            coordinates[0]--;
        }
        if (d === 'w') {
            coordinates[1]++;
        }
        if (d === 'e') {
            coordinates[1]--;
        }
    }
    walk.forEach(direction => {
        processDirection(direction);
        console.log(coordinates)
    });
    return coordinates[0] === 0 && coordinates[1] === 0;
}

isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);