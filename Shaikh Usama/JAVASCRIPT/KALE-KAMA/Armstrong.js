// const Armstrong = (num) => {
//   temp = num;
//   let a,
//     b = 0;
//   while (num != 0) {
//     a = num % 10;
//     a = a ** 3;
//     num = Math.floor(num / 10);
//     b += a;
//   }

//   if (temp == b) console.log(b, "is an Armstrong number");
// };

// Armstrong(371);

// // console.log(Math.floor(317 / 10));

const Armstrong = (num) => {
  let a,
    b = 0;
  temp = num;

  for (let i = 1; i <= temp.toString().length; i++) {
    a = num % 10;
    a = a ** temp.toString().length;
    b += a;
    num = Math.floor(num / 10);
  }
  if (temp == b) console.log(b, "is an armstrong number");
};

Armstrong(9474);
