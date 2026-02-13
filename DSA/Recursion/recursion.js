// greet();

// function greet() {
//   let a = 'yuvraj';
//   console.log("Good morning "+a);
//   enjoy();
// }

// function enjoy() {
//   console.log("Enjoy your life");
//   temp();
// }
// function temp() {
//   console.log("Kuch kar lo be");
// }

//Print natural number from n to 1.
function temp(n) {
  if (n == 0) return;
  console.log(n);
  temp(n - 1);
}

// temp(5);
// console.log("");
//Print natural number from 1 to n.
function tem(n) {
  if (n == 0) return;
  tem(n - 1);
  console.log(n);
}

// tem(5);

// Sum of N natural numbers.

function add(n) {
  if (n === 1) return 1;
  return n + add(n - 1);
}

//Factorial of N natural numbers.
function fact(n) {
  if (n == 1) return n;
  return n * fact(n - 1);
}

// console.log(fact(6));

//Fibonachi Series useing iterative

let n = 10;
let first = 0,
  second = 1;
// process.stdout.write(first + " " + second);

for (let i = 1; i <= n - 2; i++) {
  let third = first + second;
  first = second;
  second=third;
  // process.stdout.write(third+" ");
}

//Fibonacchi Series using recursion

function fibo(n,first,second){
  if (n==0) return ;
  let third = first+second;
  process.stdout.write(third+" ");
  fibo(n-1,second,third);
}
let m = 10;
// fibo(m-2,0,1);



//Sum upto N term

function fib(n){
  if (n==0 || n==1) return n;

  return fib(n-1) +fib(n-2);
}

console.log(fib(7));


