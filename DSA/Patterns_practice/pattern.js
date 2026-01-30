let prompt = require("prompt-sync")();

let n = Number(prompt("Enter number:"));

// for (let i = 1; i <= n; i++) {
//     let ascii =65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii)+' ');
//     ascii++;
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//     //inverted
//   for (let j = 1; j <=n-i; j++) {
//     process.stdout.write(" ")
//   }
// //   right angle
//   for (let j=1;j<=i;j++){
//     process.stdout.write("$")
//   }

//   console.log();
// }
// Cross Pattern
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
