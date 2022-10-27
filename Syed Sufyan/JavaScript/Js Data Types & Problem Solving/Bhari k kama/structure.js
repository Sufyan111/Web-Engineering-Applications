let dupArr = [1, 1, 5, 6, 9, 7, 1, 6, 5, 8, 9, 7, 3, 2, 7, 9, 3, 1, 5];

let count = {};

dupArr.forEach((i) => {
  if (count[i]) {
    //Same as Object.keys(count).includes(i.toString())
    count[i] += 1;
  } else {
    count[i] = 1;
  }
});

console.log(count);
