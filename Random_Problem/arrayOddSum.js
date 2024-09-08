/*------------------odd Sum */
function oddSum(arr) {
  let sum = 0;
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
    }
  }
  for (let i = 0; i < odd.length; i++) {
    sum = sum + odd[i];
  }
  let avg = sum / odd.length;
  return avg;
}
let number = [111, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(oddSum(number));
