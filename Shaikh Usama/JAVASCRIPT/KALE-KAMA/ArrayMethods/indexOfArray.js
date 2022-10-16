const indexAvg = (arr, num) => {
  for (i in arr) {
    if (arr[i] == num) console.log(i);
  }
};
let carNumbers = [6969, 9696, 9966, 6699, 6666, 9999, 9696];
indexAvg(carNumbers, 9696);
