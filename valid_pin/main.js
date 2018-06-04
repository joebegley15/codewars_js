function validatePIN (pin) {
  return /^\d{4,4}(\d{2,2})?$/g.test(pin)
}