function yearDays(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return year + ' has ' + 365 + ' days';
  }
  return year + ' has ' + (year % 4 ? 365 : 366) + ' days';
}