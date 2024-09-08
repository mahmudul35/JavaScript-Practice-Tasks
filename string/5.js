let str = "i am marsel khan";
let arrStr = str.split(" ");

for (let i = 0; i < arrStr.length; i++) {
  let word = arrStr[i];
  arrStr[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
let output = arrStr.join(" ");
console.log(output);
