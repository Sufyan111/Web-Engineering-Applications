const sumOfSimilarNum = (arrNum) => {
  let evenSum = 0,
    oddSum = 0,
    negSum = 0;
  arrNum.forEach((item) => {
    if (item < 0) {
      negSum += item;
      //   console.log("neg", item);
    } else {
      if (item % 2 == 0) {
        evenSum += item;
        // console.log("even", item);
      } else {
        oddSum += item;
        // console.log("odd", item);
      }
    }
  });
  console.log("Even-------->", evenSum);
  console.log("Odd--------->", oddSum);
  console.log("Negative---->", negSum);
};

sumOfSimilarNum([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -6, -8]);
