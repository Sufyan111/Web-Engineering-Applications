// 1 to 100 units – Rs. 10/unit
// 100 to 200 units – Rs. 15/unit
// 200 to 300 units – Rs. 20/unit
// above 300 units – Rs. 25/unit

const electricityBill = (units) => {
  let total = 0;
  if (units > 300) {
    return 100 * 10 + 100 * 15 + 100 * 20 + (units - 300) * 25;
  } else if (units > 200) {
    return 100 * 10 + 100 * 15 + (units - 200) * 20;
  } else if (units > 100) {
    return 100 * 10 + (units - 100) * 15;
  } else {
    return units * 10;
  }
};

console.log(electricityBill(350));
console.log(electricityBill(250));
console.log(electricityBill(150));
console.log(electricityBill(50));
