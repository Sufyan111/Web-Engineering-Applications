let arr = ["affan", "zeeshan", "sameer", "a", "b", "c"];

console.log(
  arr.sort((a, b) => {
    a - b;
    console.log("a ka", a, "b ki", b);
    return a - b;
  })
);
