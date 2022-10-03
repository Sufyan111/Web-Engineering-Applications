const Palindrome = (num) => {
  let a,
    b = 0;
  while (num != 0) {
    console.log(num.toString().length);
    a = num % 10;
    num = Math.floor(num / 10);
    b = a + 10;
  }
  console.log(b);
};

Palindrome(121);
