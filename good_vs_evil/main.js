function goodVsEvil(good, evil){
  const goodHash = {0:1,1:2,2:3,3:3,4:4,5:10},evilHash = {0:1,1:2,2:2,3:2,4:3,5:5,6:10};
  let goodTotal = 0, evilTotal = 0;
  good.split(' ').map(function(x,i){
    goodTotal += goodHash[i] * x;
  })
  evil.split(' ').map(function(x,i){
    evilTotal += evilHash[i] * x;
  })
  return goodTotal > evilTotal ? 'Battle Result: Good triumphs over Evil' : evilTotal > goodTotal ? 'Battle Result: Evil eradicates all trace of Good': 'Battle Result: No victor on this battle field';
}
