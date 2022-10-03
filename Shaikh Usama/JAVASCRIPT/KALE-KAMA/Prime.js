const PrimeNumber = (num) => {
  num % 1 == 0 || num % num == 0
    ? console.log("It's a prime number")
    : console.log("It's not a prime number");
};

PrimeNumber(192);
