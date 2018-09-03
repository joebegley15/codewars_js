function bouncingBall(h,  bounce,  window) {
  let bounces = 0;
  if (bounce >= 1 || bounce < 0) {return -1;}
  while (h > window ) {
    bounces += 2;
    h = h * bounce;
  }
  return bounces - 1;
}