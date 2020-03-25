const notesDictionary = {
  440: "A",
  466.16: "A#",
  493.88: "B",
  523.25: "C",
  554.37: "C#",
  587.33: "D",
  622.25: "D#",
  659.25: "E",
  698.46: "F",
  739.99: "F#",
  783.99: "G",
  830.61: "G#"
};

const highNote = pitch => pitch / 2;
const lowNote = pitch => pitch * 2;

const getNote = pitch => {
  if (pitch > 830.61) {
    return getNote(highNote(pitch));
  }
  if (pitch < 440) {
    return getNote(lowNote(pitch));
  }
  return notesDictionary[pitch];
};
