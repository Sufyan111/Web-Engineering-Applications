const vowelConsonant = (char) => {
  let temp = "consonant";
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    temp = "vowel";
  }
  return temp;
};

console.log(vowelConsonant("a"));
console.log(vowelConsonant("b"));
console.log(vowelConsonant("c"));
console.log(vowelConsonant("d"));
console.log(vowelConsonant("e"));
console.log(vowelConsonant("f"));
