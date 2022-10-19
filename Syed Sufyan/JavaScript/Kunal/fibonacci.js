const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1,
    n3;

  for (i = 0; i < num; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};

fibonacci(16);
