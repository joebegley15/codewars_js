function queueTime(customers, n) {
  let totalTime = 0;
  while (customers.length) {
    for (var i = n-1; i >= 0; i--) {
      if (customers[i] === 1) {
        customers.splice(i,1);
      } else if (customers[i] > 1) {
        customers[i]--;
      }
    }
    totalTime++;
  }
  return totalTime;
}