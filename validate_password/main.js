function validPass(password){
  let letters = 0, numbers = 0, others = false;
  password.split("").forEach(char => {
    if (/[A-Z]/i.test(char)) {
      letters++;
    } else if (/[0-9]/i.test(char)) {
      numbers++;
    } else {
      others = true;
    }
  });
  return letters && numbers && !others && password.length > 3 && password.length < 20 ? "VALID" : "INVALID";
}