// Input a number and print all the factors of that number (use loops).

const printAllFactors = (num) => {
  for (i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i);
  }
};

printAllFactors(37);
