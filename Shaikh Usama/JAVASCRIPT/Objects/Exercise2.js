// const address = {
//   street: "Anjan Galli",
//   city: "sunsaan nagar",
//   zipcode: "696969",
// };

// function addresss(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }

// console.log(addresss("Anjan Galli", "sunsaan nagar", 696969));

function ConstAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

const ads = new ConstAddress("Anjan Galli", "sunsaan nagar", 696969);

console.log(ads);
