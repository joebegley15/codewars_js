const snail = arr => {
  const returnArr = [];
  while (arr.length) {
    // top elements
    for (let i = 0; i < arr[0].length; i++) {
      returnArr.push(arr[0][i]);
    }
    arr.splice(0, 1);
    console.log(arr);
    // backside elements
    for (let i = 0; i < arr.length; i++) {
      returnArr.push(arr[i][arr.length]);
      arr[i].splice(arr[i].length - 1, 1);
    }
    console.log(arr);
    // bottom elements
    for (let i = 0; i < arr.length; i++) {
      returnArr.push(arr[arr.length - 1][arr.length - 1 - i]);
    }
    arr.splice(arr.length - 1, 1);
    console.log(arr);
    // frontside elements
    for (let i = 0; i < arr.length; i++) {
      returnArr.push(arr[arr.length - 1 - i][0]);
      arr[arr.length - 1 - i].splice(0, 1);
    }
  }
  return returnArr;
};
