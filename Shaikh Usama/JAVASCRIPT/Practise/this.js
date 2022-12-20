const Character = {
  titles: ["Scarlet Witch", "Valkyrie", "Shuri", "Hawkeye", "Winter Soldier"],
  type: "Action Heroes",

  getHeroes() {
    result = this.titles.map(function (item) {
      return `${item}  - is ${this.type}`;
    }, this);

    return result;
  },
};

// Character.getHeroes();
// console.log(Character.getHeroes());

// function hello() {
//   return this;
// }

// console.log(console.log);

function GetMovies(rating, actor) {
  this.rating = rating;
  this.actor = actor;
}

console.log(new GetMovies());

// const obj = new GetMovies();

// console.log(obj);
