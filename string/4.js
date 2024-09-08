let inputString = "This is a sample string with X and x.";
let outputString = "";

for (let i = 0; i < inputString.length; i++) {
  let currentChar = inputString[i];

  if (currentChar.toLowerCase() === "x") {
    outputString += currentChar === "x" ? "y" : "Y";
  } else {
    outputString += currentChar;
  }
}

console.log(outputString);
