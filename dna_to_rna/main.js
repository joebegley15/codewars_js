function DNAtoRNA(dna) {
  return dna
    .split("")
    .map(char => (char === "T" ? "U" : char))
    .join("");
}
