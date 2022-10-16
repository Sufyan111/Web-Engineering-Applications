arr = [556, 334, 559, 3360, 4475, 2150, 348, 369, 963];

const average = (arr) => {
  //   let avgSum = arr.reduce((total, curr, index, array) => {
  //     total += curr;
  //     if (index === array.length - 1) {
  //       return total / array.length;
  //     } else {
  //       return total;
  //     }
  //   });
  var sum = 0;

  arr.forEach((element) => {
    sum += element;
  });

  let avgSum = sum / arr.length;
  console.log(avgSum);
};

average(arr);
