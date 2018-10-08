function digital_root(n) {
  n = n.toString()
  while (n.length > 1) {
    n = n.split('').reduce((sum=0,current)=>parseInt(sum)+parseInt(current)).toString();
  }
  return parseInt(n);
}