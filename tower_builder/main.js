function towerBuilder(nFloors) {
  let arr = [], stars = nFloors ? (nFloors - 1) * 2 + 1 : 0, empties = 0;
  while (nFloors) {
    let str = "";
    nFloors--;
    for (var i = 0; i < empties; i++) {
      str += ' ';
    }
    for (var i = 0; i < stars; i++) {
      str += '*';
    }
    for (var i = 0; i < empties; i++) {
      str += ' ';
    }
    empties++;
    stars -= 2;
    arr.unshift(str);
  }
  return arr;
}