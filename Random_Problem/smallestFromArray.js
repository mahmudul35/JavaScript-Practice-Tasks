let nuumbers = [4, 7, 9, 6, 1, 2];

function smallest(arr) {
  let min = arr[0];
  for (let number of arr) {
    if (min > number) {
      min = number;
    }
  }
  return min;
}

let result = smallest(nuumbers);
console.log(result);
