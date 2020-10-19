const solve = (a, b) => new RegExp("^" + a.replace("*", ".*") + "$").test(b);
