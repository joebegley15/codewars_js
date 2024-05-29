const opposites = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
};

const dirReduc = arr => {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < 2) {
            break;
        }
        if (arr[i] === opposites[arr[i - 1]]) {
            arr.splice(i - 1, 2);
            i = i - 2;
        }
    }
    return arr;
}

const directions = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"];

// ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]

// ["SOUTH","EAST","WEST","NORTH","NORTH"]

// ["SOUTH","NORTH","NORTH"]

// ["NORTH"]


console.log(dirReduc(directions));