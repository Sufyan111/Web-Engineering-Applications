// 11. Program to check whether a number is EVEN or ODD using switch

const evenOdd = (num) => {
  switch (num % 2) {
    case 0:
      console.log(num, "is EVEN");
      break;
    case 1:
      console.log(num, "is ODD");
      break
    default:
      console.log("Not a whole number");
  }
};

evenOdd(2);
evenOdd(21);
evenOdd(212.2654);
