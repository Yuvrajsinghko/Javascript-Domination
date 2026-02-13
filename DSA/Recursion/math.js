//Find GCD

//Brute Force Method
// let a = 20,
//   b = 32,
//   fact = [];

// for (let i = 20; i >= 1; i--) {
//   if (a % i == 0 && b % i == 0) {
//     fact.push(i)
//   }
// }
// console.log(Math.max(...fact));

//Eucliden Method

//Iterative Method

let a = 20,
  b = 32;

while (a != b) {
  if (a > b) a = a - b;
  else b = b - a;
}



//Recursive Way
function Gcd(a, b) {
  if (a == b) return a;
  if (a > b) a = a - b;
  else b = b - a;
  return Gcd(a, b);
}
console.log(Gcd(1000, 1));
