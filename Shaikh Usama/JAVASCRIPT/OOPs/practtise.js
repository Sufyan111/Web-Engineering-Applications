class Parent {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Parent Name is ${this.name}`;
  }
}

class Child extends Parent {
  constructor(childName) {
    super(childName);
    this.childname = childName;
  }
  getChildName() {
    return `child name is : ${this.childname}`;
  }
}
const family = new Parent("BAWA");
// console.log(family.sayMyName());
// console.log(family.getChildName());

const child = new Child("BETA");
console.log(child);
