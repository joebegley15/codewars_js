function solve(arr) {
  var days = 0;
  var sort = true;

  while (arr[1]) {
    // only sort if we need to
    if (sort) {
      arr.sort((a, b) => b - a);
      sort = false;
    }

    if (!arr[1]) {
      return days;
    }

    /*
      Largest stack has at least two, smalest stack has at least one
      equal number from each stack
      days used is smallest stack *2
    */
    if (arr[0] > 1 && arr[1] > 0 && arr[2] > 0) {
      arr[0] -= 2;
      arr[1]--;
      arr[2]--;
      days = days + 2;

      // since arr[0] is reduced by 2, we check it vs. arr[1] to see if we need to resort
      if (arr[0] < arr[1]) {
        sort = true;
      }
    }
    // if we cannot do 2,1,1 optimization then do 1,1,0 which leads to 1 day
    else {
      days++;

      arr[0]--;
      arr[1]--;

      // if arr[1] is now smaller than arr[2] then we need to resort
      if (arr[1] < arr[2]) {
        sort = true;
      }
    }
  }
  return days;
}
