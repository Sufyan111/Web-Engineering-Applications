const averageOfArray = () => {
  let carNumbers = ["a", "b", "s", "d", "k"];

  const avgNum = carNumbers.reduce((total, amount, index, array) => {
    // total = total + amount;
    // console.log("total-->", total, "amount-->", amount, "index-->", index);
    // console.log(total);
    return (total += amount);

    // if (index === array.length - 1) {
    //   return total / array.length;
    // }
  });
  console.log(avgNum);

  //   console.log(carNumbers.length);
};

averageOfArray();
