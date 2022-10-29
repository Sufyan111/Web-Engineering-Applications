const ifGivenNumIsPythagoreanTripletOrNot = (a, b, c) => {
  let arr = [a, b, c].sort((a, b) => a - b);

  if (arr[0] ** 2 + arr[1] ** 2 == arr[2] ** 2) {
    return true;
  }
  return false;
};

console.log(ifGivenNumIsPythagoreanTripletOrNot(3, 5, 4));
