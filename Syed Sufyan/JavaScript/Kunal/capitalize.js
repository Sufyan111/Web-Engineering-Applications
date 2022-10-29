const capitalize = (str) => {
  let arrStr = str.split(" ");
  let capStr = "";
  arrStr.forEach((element) => {
    element = element[0].toUpperCase() + element.substring(1);
    capStr = capStr + element + " ";
  });
  return capStr;
};

console.log(capitalize("hello world, this is capitalize program."));
