// When we pass in an array

arr1 = [1, 2, 99, 3, 4, 5, 6, 8];

let arr2 = [...arr1]; // [1,2,3,4,5,6,8]
console.log(arr2);

console.log(Math.max(...arr1)); // Math.max(1,2,3,4,5,6,8)
