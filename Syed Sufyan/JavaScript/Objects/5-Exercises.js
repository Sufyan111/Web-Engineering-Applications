// Exercise 1
const address = {
  street: "a",
  city: "b",
  zipcode: 4,
};

showAdress = (add) => {
  //   return Object.entries(add);

  for (key in add) console.log(key, add[key]);
};

// console.log(showAdress(address));

// Exercise 2

function createAddress() {
  return {
    street: "a",
    city: "b",
    zipcode: 4,
  };
}

function CreateAddress() {
  this.street = "a";
  this.city = "b";
  this.zipcode = 4;
}

const addressFactory = createAddress();
const addressContructor = new CreateAddress();

// console.log(addressFactory); //{ street: 'a', city: 'b', zipcode: 4 }
// console.log(addressContructor); //CreateAddress { street: 'a', city: 'b', zipcode: 4 }

// Object Equality
function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

function areEqual(address1, address2) {
  for (const key in address1) {
    if (address1[key] !== address2[key]) return false;
    return true;
  }
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
