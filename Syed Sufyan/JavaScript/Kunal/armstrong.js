const armstrong = (num) => {
  arr = num.toString().split("");
  sum = 0;

  arr.forEach((element) => {
    sum = sum + element ** arr.length;
  });

  if (sum == num) {
    console.log(`${num} is an armstrong number`);
  } else {
    console.log(`${num} is an NOT armstrong number`);
  }
};

armstrong(371);
armstrong(8208);
armstrong(153);
kuch.js;

armstrong(0);
