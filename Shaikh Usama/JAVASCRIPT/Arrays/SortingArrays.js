const numbers = [4, 6, 2, 8, 1];
// console.log(numbers.sort());

const course = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
  { id: 3, name: "React" },
  { id: 4, name: "Mongo" },
];

course.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(course);
