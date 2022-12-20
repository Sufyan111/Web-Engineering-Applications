const cars = {
  name: "xyz",
  manufacturers: ["Tata", "Suzuki", "Vw", "Ferrari", "Jaguar"],
  getNamesInArray() {
    console.log("getNamesInArray()", this.manufacturers);
  },
  getNamesCallback() {
    this.manufacturers.forEach(function (item) {
      console.log("getNamesCallback()", this.manufacturers);
    }, this);
  },
  getNamesArrow() {
    this.manufacturers.forEach((item) =>
      console.log(" getNamesArrow() ", this.manufacturers)
    );
  },
  getNamesVehicles: function () {
    return this.name;
  },
};

// cars.getNamesInArray(); // getNamesInArray() [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// cars.getNamesCallback(); // getNamesCallback() [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesCallback() [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesCallback() [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesCallback() [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesCallback() [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]

// cars.getNamesArrow(); // getNamesArrow()  [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesArrow()  [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesArrow()  [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesArrow()  [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]
// // getNamesArrow()  [ 'Tata', 'Suzuki', 'Vw', 'Ferrari', 'Jaguar' ]

const vehicles = {
  name: "abc",
};

let outside = cars.getNamesVehicles.bind(vehicles);

console.log(outside());
