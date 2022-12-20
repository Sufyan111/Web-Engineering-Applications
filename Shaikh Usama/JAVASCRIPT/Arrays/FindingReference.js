const course = [
  { id: 1, name: "hello" },
  { id: 2, name: "world" },
];

let data = course.find(function (item) {
  item.name === "world";
});
console.log(data);
