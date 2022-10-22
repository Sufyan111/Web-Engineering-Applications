const Palindrome = (num) => {
  return (
    num.toString().split("").join("") ==
    num.toString().split("").reverse().join("")
  );
};

console.log(Palindrome(696));
