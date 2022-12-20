const movies = {
  titles: [
    "Avengers 1",
    "Avengers 2",
    "Avengers 3",
    "Avengers 4",
    "Avengers 5",
    "Avengers 6",
    "Avengers 7",
    "Avengers 8",
  ],
  category: "Action",
  getMovies() {
    result = this.titles.map(function (item) {
      return item + " " + this.category;
    }, this);
    return result;
  },
};

function greet() {
  return this;
}

console.log(movies.bind.greet());
