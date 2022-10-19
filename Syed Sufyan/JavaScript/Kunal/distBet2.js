const distanceBetweenTwoPoints = (p1, p2) => {
  let x1 = p1[0];
  let y1 = p1[1];
  let x2 = p2[0];
  let y2 = p2[1];

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

console.log(distanceBetweenTwoPoints([0, 10], [0, 15]));
