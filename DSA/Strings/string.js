let prompt = require("prompt-sync")();
let str = "";

let newStr = "";
for (char in str) {
  // console.log(char);
}
//Reversing a string
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
//Check Palindrom

// if (newStr === str) return console.log(true);
// else return console.log(false);
// let j = str.length - 1;
// let i = 0;

// let isPalindrom = true;

// while (i < j) {
//   if (str.charAt(i) != str.charAt(j)) {
//     isPalindrom = false;
//     break;
//   }
//   i++;
//   j--;
// }

// if(isPalindrom) console.log("Palindrom");
// else console.log("Not Palindrom");

//Change Case
//65-90

// let changeCase = "";
// let finalAns = "";
// for (let i = 0; i < changeCase.length; i++) {
//   let ch = changeCase.charCodeAt(i);
//   if (ch >= 65 && ch <= 90) {
//     finalAns += String.fromCharCode(ch + 32);
//   } else if (ch >= 97 && ch <= 122) {
//     finalAns += String.fromCharCode(ch - 32);
//   }
// }

//Count Character Count in a  string using bit map

// let s = prompt("Enter a string:");

// let arr = new Array(129).fill(0);

// for (let i = 0; i < s.length; i++) {
//   let idx = s.charCodeAt(i);
//   arr[idx] += 1;
// }

// for (let i = 0; i < s.length; i++) {
//   let ch = s.charCodeAt(i);
  
//   console.log(s[i] + " appears at " + arr[ch] + " times");
// }

// console.log(arr);
