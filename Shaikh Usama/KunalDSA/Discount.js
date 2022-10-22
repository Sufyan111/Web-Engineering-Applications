const Discount = (MRP, discount) => {
  return (100 * (MRP - discount)) / MRP;
};

console.log(Discount(500, 250), `%`);
