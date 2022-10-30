const getCircleArea = (radius) => {
  return {
    pi: 3.14,
    radius,
    getArea() {
      return getCircleArea().pi * radius ** 2;
    },
  };
};

// let obj = getCircleArea(5);

// console.log(obj.getArea());

function personDetails(fname, lname, email, phone) {
  return {
    fname,
    lname,
    email,
    phone,
    getFullName() {
      return this.fname + " " + this.lname;
    },

    getContact() {
      return "Phone " + phone + " Email " + email;
    },
  };
}

const person = personDetails("usama", "shaikh", "skusama761", 8468993141);

console.log(person.getFullName());
console.log(person.getContact());
