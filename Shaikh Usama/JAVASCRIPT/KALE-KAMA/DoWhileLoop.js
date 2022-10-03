const DoWhileLoop = (num1, num2) => {
  --num2;
  do {
    console.log(num2--);
  } while (num2 > num1);
};

DoWhileLoop(10, 20);
