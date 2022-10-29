const factorial = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
  //   let fact = 1;
  //   for (i = num; i > 0; i--) {
  //     fact = fact * i;
  //   }
  //   return fact;
};

console.log(factorial(5));
