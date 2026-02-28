let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter number by which you want to rotate the array:"));
let fin = n % arr.length;

for (let i = 0; i < fin; i++) {
  let elm = arr[0];
  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j + 1];
  }

  arr[arr.length - 1] = elm;
}

console.log(arr);
