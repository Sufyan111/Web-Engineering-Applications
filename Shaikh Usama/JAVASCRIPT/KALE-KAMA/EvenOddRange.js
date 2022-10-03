const EvenOddRange = (num1, num2) => {
  num1++;
  while (num1 < num2) {
    if (num1 % 2 == 0) {
      console.log(num1, "is EVEN");
    }
    num1++;
  }
};

EvenOddRange(10, 20);
