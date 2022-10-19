const palindromeNum = (num) => {
  let revNum = parseInt(num.toString().split("").reverse().join(""));

  return revNum === num;
};

console.log(palindromeNum(1221));
console.log(palindromeNum(12211221));
console.log(palindromeNum(1221221));
console.log(palindromeNum(12210));
console.log(palindromeNum(1221324));
console.log(palindromeNum(122156845));
