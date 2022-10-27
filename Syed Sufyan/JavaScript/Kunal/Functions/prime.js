const prime = (num1, num2) => {
  for (i = num1 < num2 ? num1 : num2; i <= (num1 > num2 ? num1 : num2); i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

const isPrime = (num) => {
  for (j = 2; j <= Math.sqrt(num); j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return true;
};

prime(2, 10);
