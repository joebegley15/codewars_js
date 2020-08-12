const hello = name =>
  `Hello, ${
    name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : "World"
  }!`;
