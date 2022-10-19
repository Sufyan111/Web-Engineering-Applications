const perfectNum = (num) => {
  let sum = 0;
  for (i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }

  if (num === sum) {
    return "It is a perfect number";
  } else {
    return "It is NOT a perfect number";
  }
};

console.log(perfectNum(6));
console.log(perfectNum(8128));
console.log(perfectNum(496));
console.log(perfectNum(28));
console.log(perfectNum(99));
