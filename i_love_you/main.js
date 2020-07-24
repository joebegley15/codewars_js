function howMuchILoveYou(nbPetals) {
  const messages = {
    0: "I love you",
    1: "a little",
    2: "a lot",
    3: "passionately",
    4: "madly",
    5: "not at all",
    "-1": "not at all"
  };
  return messages[(nbPetals % 6) - 1];
}
