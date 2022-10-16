let pets = [
  { name: "Meowsalot", species: "cat", age: 2 },
  { name: "Barksalot", species: "dog", age: 5 },
  { name: "Purrsloud", species: "cat", age: 8 },
  { name: "Travelsalot", species: "cat", age: 99 },
  { name: "bhrrrrr", species: "dog", age: 999 },
];

const findAge = (items) => items.age >= 99;

const onlyCat = (items) => items.species == "cat";

const nameOnly = (items) => items.name;

let age = pets.filter(onlyCat).filter(findAge).map(nameOnly);
console.log(age);

// pets.push({ name: "Travelsalot", species: "traveller", age: 99 });

// const getData = (item) => console.log(typeof item.name);
// let mapResult = pets.map(getData);

// console.log(typeof mapResult);

// const filterFun = (item) => item.species == "cat";

// let filterVar = pets.filter(filterFun);

// console.log(filterVar);

// const mapFun = (item) => item.species == "cat" && item;

// let mapVar = pets.map(mapFun);

// console.log(mapVar);

// let petts = {
//   arr: [{ name: "usama" }],
// };

// console.log(petts.arr[0].name);
