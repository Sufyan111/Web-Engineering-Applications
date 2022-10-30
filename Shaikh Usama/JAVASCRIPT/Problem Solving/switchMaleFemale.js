const switchMaleFemale = (name) => {
  switch (name.toUpperCase()) {
    case "MALE":
    case "M":
      console.log(name, "is Purush");
      break;

    case "FEMALE":
    case "F":
      console.log(name, "is a Mahila");
      break;

    default:
      console.log("LGBTQ sala");
  }
};

switchMaleFemale("M");
switchMaleFemale("F");
switchMaleFemale("male");
switchMaleFemale("female");
switchMaleFemale("asdf");
