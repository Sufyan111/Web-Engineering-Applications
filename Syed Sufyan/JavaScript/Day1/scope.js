// Define the local and Global variables with the same name and print both variables and
// understand the scope of the variables

let num = 50;

const numFunc = () => {
  let num = 60;
  if (true) {
    let num = 70;
    console.log("in if after declarartion", num);
  }

  console.log("in function outside if", num);
};
numFunc();

console.log("outside function ------->", num);
