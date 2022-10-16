const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let n3;
  for (i = 1; i <= num; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};

fibonacci(6);

// const fibboReduce = (num) => {
//   let arrnum = [];
//   for (i = 1; i <= num; i++) {
//     //[1,2,3,4,5,6]
//     arrnum.push(1);
//   }
//   let arr = [];
//   arr = arrnum.reduce((acc, curr) => {
//     console.log(acc);
//     acc = acc + curr;
//     // acc = curr;
//     return acc;
//   }, 0);
// };

// fibboReduce(6);
