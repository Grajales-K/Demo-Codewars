// write a function bmi that calculates body mass 
// index (bmi = weight/heigth^2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / (height * height); // or we can square with ** 2.
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  }
  return "Obese";
}



console.log("----------- bmi -----------");

let weightHeight = [
  [50, 1.8], // "Underweight"
  [80, 1.8], // "Normal"
  [90, 1.75], // "Overweight"
  [110, 1.8], // "Obese"
];


for (const [weight, height] of weightHeight) {
  const result = bmi(weight, height);
  console.log(`weight: ${weight},  height: ${height}   \nresult: "${result}"\n`);
}

