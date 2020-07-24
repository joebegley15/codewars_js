function deleteNth(arr, max) {
  const totals = {};
  let i = 0;
  while (i < arr.length) {
    totals[arr[i]] = totals[arr[i]] + 1 || 1;
    if (totals[arr[i]] > max) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
}
