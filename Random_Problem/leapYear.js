function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

const result = isLeapYear(2010);
console.log(result);
