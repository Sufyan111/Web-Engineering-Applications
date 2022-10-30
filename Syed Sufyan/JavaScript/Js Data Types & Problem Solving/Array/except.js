const except = (array, excluded) => {
  array = array.filter((item) => !excluded.includes(item));
  return array;
};

console.log(except([1, 2, 3, 4, 5, 1, 1], [1, 1]));
