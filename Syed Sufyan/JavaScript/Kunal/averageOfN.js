const averageOfN = (num) => {
  let sum = 0;

  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum / num;
};

console.log(averageOfN(10));
console.log(averageOfN(15));
console.log(averageOfN(20));
console.log(averageOfN(25));
