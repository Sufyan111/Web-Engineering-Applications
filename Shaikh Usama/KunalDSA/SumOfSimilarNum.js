const sumOfSimilarNum = (...num) => {
  sumNeg = 0;
  sumEven = 0;
  sumOdd = 0;

  num.forEach((item) =>
    item < 0
      ? (sumNeg += item)
      : item % 2 == 0
      ? (sumEven += item)
      : item % 2 != 0
      ? (sumOdd += item)
      : null
  );

  console.log("neg-->", sumNeg, "Even-->", sumEven, "sumOdd-->", sumOdd);
};

console.log(sumOfSimilarNum(1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -6, -8));
