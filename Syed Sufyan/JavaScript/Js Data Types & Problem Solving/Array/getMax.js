const getMax = (array) => {
  return array.reduce((acc, curr) => (acc = acc > curr ? acc : curr));
};

console.log(getMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 56, 1, 1, 1, 0]));
