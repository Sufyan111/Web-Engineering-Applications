const PrimeNumber = (num) => {
  for (var i = 2; i <= num; i++) {
    if (num % i == 0) {
      console.log("It's not a prime number");
      break;
    } else {
      console.log("It's a prime number");
      break;
    }
  }
};

PrimeNumber(89);
PrimeNumber(88);
PrimeNumber(87);
PrimeNumber(29);
