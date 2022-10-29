const getCircleArea = (radius) => {
  return {
    pi: 3.14,
    radius,
    getArea() {
      return this.pi * radius * radius;
    },
  };
};

console.log(getCircleArea(7).getArea());
