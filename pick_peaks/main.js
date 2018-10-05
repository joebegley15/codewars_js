function pickPeaks(arr){
  const locations = {}
  let prev, current, next, platFinder;
  locations.pos = [];
  locations.peaks = [];
  arr.forEach(function(element,i){
    prev = current;
    current = next;
    next = element;
    if (current > prev && current > next) {
      locations['pos'].push(i-1);
      locations['peaks'].push(current);
    } else if (current > prev && current == next) {
      platFinder = i;
      while (arr[platFinder] == current) {
        platFinder++;
      }
      if (arr[platFinder] < current) {
        locations['pos'].push(i-1);
        locations['peaks'].push(current);        
      }
    }
  })
  return locations;
}