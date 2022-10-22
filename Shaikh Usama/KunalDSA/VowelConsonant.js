const VowelConsonant = (chr) => {
  Vowel = ["a", "e", "i", "o", "u"];

  if (Vowel.includes(chr)) {
    return "A Vowel";
  }
  return "A Consonant";
};

console.log(VowelConsonant("a"));
console.log(VowelConsonant("s"));
