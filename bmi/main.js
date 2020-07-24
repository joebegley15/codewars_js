function bmi(weight, height) {
  const bmiNumber = weight / height ** 2;
  return bmiNumber <= 18.5
    ? "Underweight"
    : bmiNumber <= 25
      ? "Normal"
      : bmiNumber <= 30
        ? "Overweight"
        : "Obese";
}
