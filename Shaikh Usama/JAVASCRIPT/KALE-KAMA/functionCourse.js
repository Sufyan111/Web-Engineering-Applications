const createMultipier = (multiplier) => (X) => X * multiplier;

let doubleIt = createMultipier(2);

console.log(doubleIt(8));
