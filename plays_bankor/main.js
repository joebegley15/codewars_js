function areYouPlayingBanjo(name) {
  const plays = name[0] === "R" || name[0] === "r";
  return name + (plays ? " plays banjo" : " does not play banjo");
}
