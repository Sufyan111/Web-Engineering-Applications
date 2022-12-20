var total = 0;

const BILL = (number) => {
  if (number > 1 && number < 100) {
    console.log(number);
    return (total = number * 10);
  } else if (number > 100 && number < 200) {
    console.log(number);
    return (total = (number - 100) * 15 + 100 * 10);
  } else if (number > 200 && number < 300) {
    console.log(number);
    return (total = (number - 200) * 20 + 100 * 15 + 100 * 10);
  } else if (number > 300) {
    console.log(number);
    return (total = (number - 300) * 25 + 100 * 20 + 100 * 15 + 100 * 10);
  }
};
console.log(BILL(350));
console.log(BILL(250));
console.log(BILL(50));
