const video = {
  title: "hello",
  play() {
    console.log(this);
  },
};

// video.play();

function Video(hero) {
  this.hero = hero;
  console.log(this);
}

// const asdf = new Video();
// console.log(asdf);
