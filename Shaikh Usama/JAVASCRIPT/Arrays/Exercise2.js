const numbers = [1, 2, 3, 4, 5];

const includess = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return true;
    }
  }
  return false;
};

console.log(includess(numbers, 3));
