// Write a program to find Armstrong number or not

const armStrong = (num) => {
  let originalNum = num;
  let cubeSum = 0;
  for (let i = 0; i <= originalNum.toString().length; i++) {
    sepNum = (num % 10) ** originalNum.toString().length;
    num = Math.floor(num / 10);
    cubeSum = sepNum + cubeSum;
  }
  if (cubeSum == originalNum) {
    console.log(originalNum, "is an Armstrong number");
  } else {
    console.log(originalNum, "is NOT an Armstrong number");
  }
};

armStrong(371);
armStrong(9474);
armStrong(153);
armStrong(0);
