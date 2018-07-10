function nbYear(p0, percent, aug, p) {
    var yearsPassed = 0;
    while (p0 < p) {
      p0 = p0 * (1 + percent / 100) + aug;
      yearsPassed++;
    }
    return yearsPassed;
}