function DNAStrand(dna){
  return dna.split('').map(char => {
    if (char === 'A') {
      return 'T';
    } else if (char === 'T') {
      return 'A';
    } else if (char === 'G') {
      return 'C';
    } else if (char === 'C') {
      return 'G';
    }
  }).join('');
}