function biggestNum(arr) {
  let max = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let height = [66, 87, 56, 45, 88, 67, 777];
let output = biggestNum(height);
console.log("Biggest number is", output);
