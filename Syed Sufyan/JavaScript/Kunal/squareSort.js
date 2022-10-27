const sqrSort = (arr) => {
  for (i in arr) {
    arr[i] = arr[i] ** 2;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return arr;
};

console.log(sqrSort([-3, 1, 2, 7]));
console.log(sqrSort([-7, -2, 3, 4, 9]));
console.log(sqrSort([]));
