const person = {
  firstName: "Usama",
  lastName: "Shaikh",

  get fullName() {
    return `${this.firstName}  ${this.lastName}`;
  },

  set fullName(value) {
    const person = value.split(" ");
    this.firstName = person[0];
    this.lastName = person[1];
  },
};

person.fullName = "Sufyan Syed";
console.log(person);
