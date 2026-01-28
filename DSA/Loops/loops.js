// for (let index = 1; index < 1001; index++) {
//   console.log("Hii Ragnar");
// }

// for (;;){
//     console.log("hehe");

// }

// let num = Number(prompt("Enter number you want factors of:"));
let factors = [];
let num = 0;

// for (let i = 1; i <= Math.floor(num / 2); i++) {
//   if (num % i === 0) {
//     factors.push(i);
//   }
// }

// factors.map((factor, idx) => {
//   console.log(`${idx + 1} Factor:${factor}`);
// });

let a = 145;
let rev = 0;
let cpy = a;
while (a > 0) {
  let rem = a % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  rev = rev + fact;
  a = Math.floor(a / 10);
}
if (cpy === rev) {
  // console.log(true);
} else {
  // console.log(false);
}


// do-while loop
let i=0
do {
console.log("heheh");
i++
} while (i<=10);
{
console.log("gg");
}

let ranNum=Math.floor(Math.random()*10)+1;

console.log(ranNum);




