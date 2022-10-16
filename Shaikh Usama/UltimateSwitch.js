const UltimateSwitch = (Info, Shape, width, height, breadth) => {
  t1 = performance.now();
  Area = 0;
  switch (Info.toLowerCase()) {
    case "area":
      switch (Shape.toLowerCase()) {
        // Area Of Circle
        case "circle":
        case "crl":
          Area = 3.14 * width ** 2;
          break;

        // Area Of Triangle
        case "triangle":
        case "trl":
          Area = (width * height) / 2;
          break;

        // Area Of Rectangle
        case "rectangle":
        case "rtgl":
          Area = width * height;
          break;

        // Area Of Isosceles Triangle
        case "isosceles triangle":
        case "ist":
          Area = (width * height) / 2;
          break;

        // Area Of Parallelogram
        case "parallelogram":
        case "plgm":
          Area = width * height;
          break;

        // Area Of Rhombus
        case "rhombus":
        case "rbs":
          Area = (width * height) / 2;
          break;

        // Area Of Equilateral Triangle
        case "equilateral triangle":
        case "eltgl":
          Area = 0.433 * width ** 2;
          break;
      }
      break;
    // PPPPPEEEEERRRRIIIIIIIMMMMEEETTTTTEEERRRRRRRRRRRRRRR
    case "perimeter":
      switch (Shape.toLowerCase()) {
        // Perimeter Of Circle
        case "circle":
          Area = 2 * 3.14 * width;
          break;

        // Perimeter Of Equilateral Triangle
        case "triangle":
          Area = width + height + breadth;
          break;

        // Perimeter Of Parallelogram
        case "parallelogram":
          Area = 2 * (width + height);
          break;

        // Perimeter Of Rectangle
        case "rectangle":
          Area = 2 * (width + height);
          break;

        // Perimeter Of Square
        case "square":
          Area = 4 * width;
          break;

        // Perimeter Of Rhombus
        case "rhombus":
          Area = 4 * width;
          break;
      }
      break;

    //   VVVVOOOOOOLLLLLUUUUUUUUUUMMMMEEEEEEEEEEE
    case "volume":
      switch (Shape.toLowerCase()) {
        //Volume Of Cone
        case "cone":
          Area = 3.14 * width ** 2 * (height / 3);
          break;

        // Volume Of Prism
        case "prism":
          Area = (width * height * breadth) / 2;
          break;

        // Volume Of Cylinder
        case "cylinder":
          Area = 3.14 * width ** 2 * height;
          break;

        // Volume Of Sphere
        case "sphere":
          Area = (4 / 3) * 3.14 * width ** 3;
          break;

        // Volume Of Pyramid
        case "pyramid":
          Area = (width * height * length) / 3;
      }
      break;

    case "surface area":
      switch (Shape.toLowerCase()) {
        case "cylinder":
          Area = 2 * 3.14 * width * height;
          break;

        case "cube":
          Area = 6 * a ** 2;
          break;
      }
      break;
  }
  t2 = performance.now();
  console.log(t2 - t1);
  return Area;
};

console.log(UltimateSwitch("volume", "cone", 5, 10));
