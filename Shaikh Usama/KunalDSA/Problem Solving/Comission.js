const Comission = (MRP, Perc) => {
  return MRP * (Perc / 100);
};

console.log(Comission(500, 75));
