const ReverseString = (line) => {
  line = line.split("");
  let temp = "";
  for (let i = line.length - 1; i >= 0; i--) {
    temp += line[i];
  }

  console.log(temp);
};

ReverseString("usama");
