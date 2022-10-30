const move = (array, index, offset) => {
  if (!array[index + offset]) {
    return "Invalid offset";
  }
  let output = [...array];
  let element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);

  return output;
};

console.log(move([1, 2, 3, 4], 2, -2));
