const DistanceBetween2 = (x2, x1, y2, y1) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

console.log(DistanceBetween2(4, 3, 5, 6));
