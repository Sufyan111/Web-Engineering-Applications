const includes = (array, searchElement) => {
  return array.some((item) => item == searchElement);
};

console.log(includes([1, 2, 3, 4], 4));
console.log(includes([1, 2, 3, 4], 6));
