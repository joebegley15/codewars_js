function highAndLow(numbers){
  numbers = numbers.split(' ')
  let maximum = numbers.reduce((max,next) => (+next) > max ? +next : max)
  let minimum = numbers.reduce((min,next) => (+next) < min ? +next : min)
  return maximum + ' ' + minimum
}