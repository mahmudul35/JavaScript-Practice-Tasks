let str = "there is a country name bangladeshaa";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == "a") {
    count++;
  }
}
console.log(count);
