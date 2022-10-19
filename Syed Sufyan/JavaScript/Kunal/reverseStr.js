const reverseStr = (str) => {
  let arrStr = [];
  let reverseString = "";
  for (i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }

  for (i = arrStr.length - 1; i >= 0; i--) {
    reverseString += arrStr[i];
  }

  console.log(reverseString);
};

reverseStr("sufyan");
