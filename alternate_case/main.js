const alternateCase = s =>
  s
    .split("")
    .map(
      char =>
        char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
