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

// let num = [-1, 2, -8, 6, 8, 9, 7, -4, -3, 5, 1, -3, 7, 4];

// let i = 0,
//   j = 0;

// while (i < num.length) {
//   if (num[i] < 0) {
//     let temp = num[i];
//     num[i] = num[j];
//     num[j] = temp;
//     j++;
//   }
//   i++;
// }

// Left Rotation by one place
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let cpy = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = cpy;

//Right Rotation By one place
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let cpy = arr[arr.length - 1];

// for (let i = arr.length -1; i >0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = cpy;

// left rotation of  array elements by K times

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let prompt = require("prompt-sync")();

// let k = Number(prompt("Enter number to rotate by:"));
// k = Math.floor(k % arr.length);

// for (let t = 1; t <= k; t++) {
//   let cpy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = cpy;
// }

// Right rotation of array elements by K times

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter number to rotate by:"));
// k = k % arr.length;

// for (let t = 1; t <= k; t++) {
//   let cpy = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = cpy;
// }

//Efficient  approach to solve rotation ky k times problem

// let arr = [1, 2, 3, 4, 5];
// let temp = [];
// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter number to rotate by:"));
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// for (let i = arr.length-1; i > 0; i--) {
//   temp[i] = arr[(i+k) % arr.length];
// }

//two pointer reverse most efficient
// let arr = [1, 2, 3, 4, 5, 6];

// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter number to rotate by:"));
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);
// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// let arr1 = [2, 5, 6];

// let arr2 = [1, 3, 4, 8];

// let merge = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k] = arr1[i];
//     i++;
//     k++;
//   } else {
//     merge[k] = arr2[j];
//     k++;
//     j++;
//   }
// }
// while (j < arr2.length) {
//   merge[k] = arr2[j];
//   k++;
//   j++;
// }
// while (i < arr1.length) {
//   merge[k] = arr1[i];
//   i++;
//   k++;
// }

// Best Time To Buy/Sell stocks

// let prices = [7, 1, 5, 3, 6, 4];

// let maxProfit = 0;
// let min = prices[0];

// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < min) {
//     min = prices[i];
//   } else {
//     let temp = prices[i] - min;
//     if (temp > maxProfit) {
//       maxProfit = temp;
//     }
//   }
// }

//Sort nums

// let nums = [0, 1, 2, 0,1,2,0,0,1];

// let i = 0;
// let j = 0;
// let k = nums.length - 1;

// while (i <= k) {
//   if (nums[i] === 0) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
//     i++;
//     j++;
//   } else if (nums[i] === 2) {
//     let temp = nums[i];
//     nums[i] = nums[k];
//     nums[k] = temp;
//     k--;
//   } else {
//     i++;
//   }
// }

//Maximum Sub Array

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let max = -Infinity;
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
//   max = Math.max(max, sum);
//   if (sum < 0) sum = 0;
// }

//Majority Element

// let nums = [2, 2, 1, 1, 1, 2, 2];

// let ans = nums[0];
// let count = 1;

// for (let i = 1; i < nums.length; i++) {
//   if (count === 0) {
//     ans = nums[i];
//     count = 1;
//   } else if (nums[i] === ans) count++;
//   else count--;
// }

//Trapping Rain water


 let left = new Array(height.length);
    let right = new Array(height.length);

    let maxLeft = height[0], maxRight = height[height.length - 1]
    left[0] = maxLeft, right[right.length - 1] = maxRight;

    for (let i = 1; i < height.length; i++) {
        maxLeft = Math.max(height[i], maxLeft)
        left[i] = maxLeft;
    }
    for (let i  = height.length - 2; i >= 0; i--) {
        maxRight = Math.max(height[i], maxRight)
        right[i] = maxRight;
    }

