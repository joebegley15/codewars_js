function quicksum(packet){
  return packet.toLowerCase().split('').reduce(((total,letter, i) => /[a-z]/g.test(letter) ? total + (letter.charCodeAt(0) - 96) * (i+1) : total),0)
}