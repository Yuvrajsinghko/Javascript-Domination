// let prompt = require("prompt-sync")();

// let num = prompt("Enter number:");

let arr = [45, 12, 70, 60];
arr = [45, 12, 70, 70, 70];

let max1 = Math.max(arr[0], arr[1]);
let max2 = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max1) {
    max2 = max1;
    max1 = arr[i];
  } else if (arr[i] > max2 && max1 != arr[i]) {
    max2 = arr[i];
  }
}
console.log(max1, max2);
