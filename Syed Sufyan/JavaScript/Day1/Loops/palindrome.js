const palindrome = (num) => {
  num = num.toString();
  let temp = "";
  for (i = 1; i <= num.length; i++) {
    let j = num.length - i;
    temp = temp + num.charAt(j);
  }

  if (temp == num) {
    console.log(num, "is palindrome");
  } else {
    console.log(num, "is not a palindrome");
  }
};
palindrome(212);

palindrome("evave");
palindrome(2122);


















