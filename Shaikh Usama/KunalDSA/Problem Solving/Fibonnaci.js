const Fibonacci = (num) => {
  let n1 = 0;
  n2 = 1;
  numSum = 0;
  for (let i = 0; i < num; i++) {
    console.log(n1);
    numSum = n2 + n1;
    n1 = n2;
    n2 = numSum;
  }
};

Fibonacci(4);
