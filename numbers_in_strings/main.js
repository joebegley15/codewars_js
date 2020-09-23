const solve = s =>
  s.match(/[0-9]+/g).reduce((min, el) => (+el > +min ? +el : +min));
