let numbers = [4, 6, 7, 8, 9];

let rev_array = [];
for (const number of numbers) {
  rev_array.unshift(number);
}
console.log(rev_array);
