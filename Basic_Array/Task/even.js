const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenArr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenArr.push(numbers[i]);
  }
}
console.log(evenArr);
