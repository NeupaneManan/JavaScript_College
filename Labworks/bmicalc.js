const w = prompt("Enter your Weight in kg: ");
const h = prompt("Enter yur height in meters: ");

function bmiCalc(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

const b = bmiCalc(w, h);
console.log("Your generated BMI is", b);
