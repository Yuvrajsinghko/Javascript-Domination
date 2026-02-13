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

//Optmized Approach for GCD of two numbers.
//time complexity log(max(a,b)).

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

//Factors of Number
//time complexity square root n.
let n = 100;

for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i == 0) {
    // process.stdout.write(i + " ");
  }
}
for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
  if (n % i == 0) {
    if (n / i != i) {
      // process.stdout.write(n / i + " ");
    }
  }
}

//Count Number of Prime numbers using Sieve of Eratosthenes.
let s = 100;
let arr = new Array(s + 1).fill(true);
for (let i = 2; i <= Math.floor(Math.sqrt(s)); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= s; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 2; i < arr.length; i++) {
  if (arr[i]) console.log(i);
}

// let newArr = arr.filter((bool) => bool === true);
