const primeBetweenTwoNumbers = (a, b) => {
  for (i = a; i <= b; i++) {
    let temp = true;
    for (j = 2; j < Math.sqrt(i); j++) {
      if (i % j == 0) {
        temp = false;
      }
    }
    if (temp) {
      console.log(i);
    }
  }
};

primeBetweenTwoNumbers(1, 100);