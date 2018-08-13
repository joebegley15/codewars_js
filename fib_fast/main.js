function fib(num) {
  var arr = [0,1], i = 1;
  if (num == 0 || num == 1) {
    return num;
  }
  while (i < num) {
    arr.push(arr[i] + arr[i - 1]);
    i++;
  }
  return arr[i];
}