function findDuplicate(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.includes(array[i]) == false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

let number = [1, 4, 5, 6, 5, 7, 1];
let output = findDuplicate(number);
console.log(output);
