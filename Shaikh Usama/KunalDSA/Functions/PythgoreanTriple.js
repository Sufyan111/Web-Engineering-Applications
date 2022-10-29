const PythgoreanTriple = (num1, num2, num3) => {
  let arr = [num1, num2, num3].sort((a, b) => b - a);
  arr[0] ** 2 == arr[1] ** 2 + arr[2] ** 2
    ? console.log("it's a pythagorean Triplet")
    : console.log("Not a pythagorean Triplet");
  //   console.log(arr);
};
PythgoreanTriple(3, 4, 5);
PythgoreanTriple(3, 5, 4);
PythgoreanTriple(5, 3, 4);
