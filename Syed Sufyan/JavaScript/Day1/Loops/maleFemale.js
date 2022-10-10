const maleFemale = (gen) => {
  let temp = gen.toUpperCase();
  switch (temp) {
    case "M" :
    case "MALE":
      console.log("It's a Boyyy!!!");
      break;

    case "FEMALE" :
    case "F":
      console.log("It's a Girrll!!!");
      break;

    default:
      console.log("Not recognised");
  }
};

maleFemale("m");
maleFemale("male");
maleFemale("f");
maleFemale("Female");