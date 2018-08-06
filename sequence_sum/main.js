const sequenceSum = (start,end,inc) => {
  var sum = 0
  for (var start = start; start <= end; start += inc) {
    sum += start;
  }
  return sum;
}