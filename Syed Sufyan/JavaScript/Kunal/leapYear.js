const leapYear = (year) => {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is NOT leap year`;
  }
};

console.log(leapYear(1700));
console.log(leapYear(1900));
console.log(leapYear(2600));
console.log(leapYear(2400));
console.log(leapYear(1600));
