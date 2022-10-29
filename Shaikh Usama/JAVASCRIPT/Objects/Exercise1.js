// create and address object

const address = {
  street: "Anjan Galli",
  city: "sunsaan nagar",
  zipcode: "696969",

  showAddress: function () {
    return `${this.street}   ${this.city}    ${this.zipcode}`;
  },
};

console.log(address.showAddress());
