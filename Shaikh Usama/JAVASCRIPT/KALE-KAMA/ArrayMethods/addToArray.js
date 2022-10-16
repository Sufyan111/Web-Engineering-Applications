const addToArray = () => {
  let cars = [
    "Lamborghini",
    "Porche",
    "Buggati",
    "Maserati",
    "Range Rover",
    "Rolls Royce",
  ];

  let sum = 0;
  let carNumbers = [6969, 9696, 9966, 6699, 6666, 9999];

  //   let carNumber = carNumbers.reduce((a, b) => a + b);
  for (i in carNumbers) {
    sum += carNumbers[i];
  }

  console.log(sum);
};

addToArray();
