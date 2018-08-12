const number = function(busStops){
  let numOnBus = 0;
  busStops.map(function(onOff){
    numOnBus = numOnBus + onOff[0] - onOff[1];
  })
  return numOnBus;
}