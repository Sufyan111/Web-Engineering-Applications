//                                                  PARAMETERS              Formula

// Area Of Circle Java Program                           r                    pi*(r**3)
// Area Of Triangle                                     b,h                     b*h/2
// Area Of Rectangle Program                            l,b                     l*b
// Area Of Isosceles Triangle                           b,h                     b*h/2
// Area Of Parallelogram                                b,h                     b*h
// Area Of Rhombus                                      b,h                     b*h
// Area Of Equilateral Triangle                         a                       a**2(root3/4)
// Perimeter Of Circle                                  r                       2*pi*r
// Perimeter Of Equilateral Triangle                    a                       3*a
// Perimeter Of Parallelogram                           b,h                     2(b+h)
// Perimeter Of Rectangle                               b,h                     2(b+h)
// Perimeter Of Square                                  a                       4*a
// Perimeter Of Rhombus                                 a                       4*a
// Volume Of Cone Java Program                          r,h                     pi*r**2*h/3
// Volume Of Prism                                      a,b,h                   a*b*h/2
// Volume Of Cylinder                                   r,h                     pi r**2 h
// Volume Of Sphere                                     r                       4 pi r**3 /3
// Volume Of Pyramid                                    lwh                     lwh/3
// Curved Surface Area Of Cylinder                      rh                      2pi rh
// Total Surface Area Of Cube                           a                       6 a**2

const areaPeriVol = (shape, type, a, b, c) => {
  t1 = performance.now();
  // AAAAARRRRRRRRRREEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAA
  if (type.toLowerCase() == "area") {
    switch (shape.toLowerCase()) {
      case "circle":
        return Math.PI * a ** 2;

      case "triangle":
        return (a * b) / 2;

      case "rectangle":
        return a * b;

      case "isosceles triangle":
        return (a * b) / 2;

      case "parallelogram":
        return a * b;
      case "rhombus":
        return a * b;
      case "equilateral triangle":
        return (a ** 2 * Math.sqrt(3)) / 4;
    }
  }

  //   PPPPPPPPEEEEEERRRRRRIIIIIIIMMMMEEEEEEEEETTTTTTTTEEEEEEEERRRRRRR

  if (type.toLowerCase() == "perimeter") {
    switch (shape.toLowerCase()) {
      case "circle":
        return 2 * a * Math.PI;

      case "equilateral triangle":
        return a * 3;

      case "parallelogram":
        return 2 * (a + b);

      case "reactangle":
        return 2 * (a + b);

      case "square":
        return 4 * a;

      case "rhombus":
        return 4 * a;
    }
  }

  // VVVVVVOOOOOOOLLLLLLLLLUUUUUUUUUUMMMMMMMMMMEEEEEE

  if (type.toLowerCase() == "volume") {
    switch (shape.toLowerCase()) {
      case "cone":
        return (a ** 2 * b * Math.PI) / 3;
      case "prism":
        return (a * b * c) / 2;
      case "cylinder":
        return a ** 2 * h * Math.PI;
      case "sphere":
        return (4 * Math.PI * a ** 3) / 3;
      case "pyramid":
        return (a * b * c) / 3;
    }
  }

  //          curved surface area

  if (
    type.toLowerCase() == "curved surface area" &&
    shape.toLowerCase() == "cylinder"
  )
    return 2 * a * b * Math.PI;

  //        total surface area

  if (
    type.toLowerCase() == "total surface area" &&
    shape.toLowerCase() == "cube"
  )
    return 6 * a ** 2;

  let error = "Please check the input paramaters";

  t2 = performance.now();
  console.log(t2 - t1);
  return error;
};
console.log(areaPeriVol("cube", "total surface area", 5, 8));
