const switchOddEven = (num) => {
  switch (num % 2) {
    case 0:
      console.log(num, "is Even");
      break;
    case 1:
      console.log(num, " is Odd");
      break;

    default:
      console.log("Not a whole number");
  }
};

switchOddEven(2.7);
switchOddEven(77);
switchOddEven(3);
