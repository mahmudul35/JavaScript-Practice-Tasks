let weight = prompt("Enter your weight: ");
let height = prompt("Enter your height: ");

let BMI = weight / (height * height);
if (BMI < 18) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.5) {
  console.log("You are normal");
} else if (BMI >= 25.5 && BMI < 29.5) {
  console.log("You are overweight");
} else {
  console.log("You are obesity");
}
