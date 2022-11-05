function mixin(target, ...sources) {
  // Rest Operator
  Object.assign(target.prototype, ...sources); // Spread Operator
}

// Define the properties first
const canEat = {
  eat: function () {
    console.log("eat");
  },
};

const canWalk = {
  walk: function () {
    console.log("walk");
  },
};

const canSwim = {
  swim: function () {
    console.log("swim");
  },
};

// Now creating objects by using the combinations of above properties
// using Object literal
const person = Object.assign({}, canEat, canWalk);

// now person has access to eat() & walk()
person.eat(); // eat
person.walk(); // walk

// Using the constructor funtion
function Person() {
  //..
}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person, canEat, canWalk);

const p = new Person();

p.walk(); // walk
p.eat(); // eat

// similarly now we can compose other objects such as
// fish, which can swim & eat
// Duck which can swim, walk as well as eat

function Goldfish() {
  //..
}

// Object.assign(Goldfish.prototype, canSwim, canEat);
mixin(Goldfish, canSwim, canEat);

function Duck() {
  //..
}

// Object.assign(Duck.prototype, canEat, canSwim, canWalk);
mixin(Duck, canEat, canSwim, canWalk);

const goldfish = new Goldfish();
goldfish.swim();
goldfish.eat();

const duck = new Duck();
duck.swim();
duck.eat();
duck.walk();

// Since the code for assigning is being repetative, we can define a func called mixin
// function mixin(target, ...sources) {
//   // Rest Operator
//   Object.assign(target.prototype, ...sources); // Spread Operator
// }
