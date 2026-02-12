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

temp(5);
console.log("");
//Print natural number from 1 to n.
function tem(n) {
  if (n == 0) return;
  tem(n - 1);
  console.log(n);
}

tem(5);
