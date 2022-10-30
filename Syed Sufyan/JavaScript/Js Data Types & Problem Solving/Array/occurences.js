const occurences = (array, number) => {
  //   let count = 0;
  //   array.forEach((element) => {
  //     if (element === number) count++;
  //   });
  //   return count;
  return array.reduce((acc, curr) => {
    let count = curr === number ? 1 : 0;
    return (acc += count);
  }, 0);
};

console.log(
  occurences([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 56, 1, 1, 1, 0], 1)
);
