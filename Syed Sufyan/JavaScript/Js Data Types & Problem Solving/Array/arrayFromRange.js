const arrayFromRange = (start, end) => {
  let arr = [];
  for (i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(arrayFromRange(1, 5));
console.log(arrayFromRange(-10, 4));
console.log(arrayFromRange(0, 6));
