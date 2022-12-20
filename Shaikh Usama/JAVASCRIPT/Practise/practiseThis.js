// const thisThis = {
//   Character: [
//     "Naruto Uzumaki",
//     "Light Yagami",
//     "Levi Ackerman",
//     "Eren Yeager",
//     "tachi Uchiha",
//     "Son Goku",
//     "Kakashi Hatake",
//   ],

//   genre: "Anime",

//   printCharacter() {
//     console.log(this.Character);
//   },
// };

// console.log(thisThis.printCharacter());

const SecondArgument = {
  Character: [
    "Naruto Uzumaki",
    "Light Yagami",
    "Levi Ackerman",
    "Eren Yeager",
    "tachi Uchiha",
    "Son Goku",
    "Kakashi Hatake",
  ],

  genre: "Anime",

  printCharacter() {
    result = this.Character.map(function (item) {
      return item;
    }, this);
    return result;
  },
};

// console.log(SecondArgument.printCharacter());

const bindKeKama = {
  rating: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const final = SecondArgument.Character.bind(bindKeKama);
console.log(final);
