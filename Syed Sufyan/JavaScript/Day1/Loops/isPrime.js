// 9. Write a program to find the prime or not.

const isPrime = (num) => {
  let temp = true;
  for (i = 2; i <= Math.sqrt(num); i++) {
    num % i == 0 && (temp = false);
  }
  temp == true
    ? console.log(num, "is a prime number")
    : console.log(num, "is not a prime number");
};

isPrime(5);
isPrime(15);
isPrime(151);
isPrime(237);
