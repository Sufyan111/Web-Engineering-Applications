const LargestAmong3 = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(num1, "is Greatest");
    } else console.log(num3, "is Greatest");
  } else if (num2 > num3) {
    console.log(num2, "is Greatest");
  }
};

LargestAmong3(3, 4, 5);
