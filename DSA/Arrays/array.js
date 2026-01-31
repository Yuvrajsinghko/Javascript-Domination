// let arr = [];

// arr[0] = 100;
// arr[1] = 5;

// arr[7] = 1558; //empty x 5
// let arr1 = new Array(2);

// arr1[0]=5;
// arr1[1]=5;
// arr1[2]=5;
// arr1[3]=5;
// console.log(arr1);

// Max and second Max element in array

// let prompt = require("prompt-sync")();
// let arr = [45, 12, 70, 70, 70];
// let max1 = Math.max(arr[0], arr[1]); //45
// let max2 = Math.min(arr[0], arr[1]); //12

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] > max2 && max1 != arr[i]) {
//     max2 = arr[i];
//   }
// }

// console.log(`First Maximum:${max1},Second Maximum:${max2}`);

// Reversing The Array

// let arr = [10, 5, 98, 89, 7, 23, 6];

// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
//   //   console.log(temp);
// }
// console.log(temp);

// second method of doing array reversing

// let arr = [10, 20, 30, 40, 50, 80, 90, 56, 2];

// let i = 0,
//   j = arr.length - 1;

// while (i < j || i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);

// zeros and one on one side

// let arr = [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }

// console.log(arr);

//Sorting -ve and +ve numbers in an array

let num = [-1, 2, -8, 6, 8, 9, 7, -4, -3, 5, 1, -3, 7, 4];

let i = 0,
  j = 0;

while (i < num.length) {
  if (num[i] < 0) {
    let temp = num[i];
    num[i] = num[j];
    num[j] = temp;
    j++;
  }
  i++;
}

console.log(num);
