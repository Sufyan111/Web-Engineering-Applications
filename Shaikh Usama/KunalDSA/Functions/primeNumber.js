const PrimeNumber = (num1, num2) => {
  let arr = [];
  for (let i = num1; i <= num2; i++) {
    for (let j = num1; j <= num2; j++) {
      if (i % j == 0) {
        console.log(i);
      }
    }
  }
  //   return arr;
};

console.log(PrimeNumber(2, 10));
