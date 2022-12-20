let person = { name: "usama" };

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptors(objectBase, "toString");

// console.log(descriptor);

Object.defineProperty(person, "name", {
  //Set getters and Setters with defineProperty method
  writable: false, //Can't rename the key.
  enumerable: false, //Can't Iterate over keys
  configurable: false, //Can't delete the key.
});
