const numbers = [1, 2, 3, 4];

const move = (arr, index, offset) => {
  let temp = 0;
  temp = arr[offset];
  arr[offset] = arr[index];
  arr[index] = temp;

  return arr;
};

console.log(move(numbers, 0, 2));
console.log(move(numbers, 1, 3));
// console.log(move(numbers, 0, 2));
