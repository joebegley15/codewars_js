function tickets(peopleInLine) {
  let change = {
      25: 0,
      50: 0
    },
    amt;
  for (let i = 0; i < peopleInLine.length; i++) {
    amt = peopleInLine[i];
    // If the person has 25, throw it in the register
    if (amt === 25) {
      change[25] += 1;
    } else if (amt === 50) {
      // If the person has 50, and you have 25. Take the 50 and give 25
      if (change[25]) {
        change[25]--;
        change[50]++;
        // If you dont have change, forget about it
      } else {
        return "NO";
      }
    } else if (amt === 100) {
      // If the person has 100, and you have a 50 and 25, give them that
      if (change[25] && change[50]) {
        change[25]--;
        change[50]--;
        // If the person has 100, and you have three 25s, give them that
      } else if (change[25] > 2) {
        change[25] -= 3;
        // If you don't have change, forget about it
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}
