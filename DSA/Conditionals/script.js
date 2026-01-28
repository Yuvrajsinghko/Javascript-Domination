let ans = Number(prompt("Enter number:"));

if (isNaN(ans)) {
  console.log("Wrong answers");
} else if (ans >= 18) {
  console.log("Yes you can vote");
}else{
    console.log("You can't vote!!");

}

// Discount Problem

let dic = 0;
if (ans > 0 && ans <= 5000) {
  dis = 0;
} else if (ans > 5000 && ans <= 7000) {
  dis = 5;
} else if (ans > 7000 && ans <= 9000) {
  dis = 10;
} else if (ans > 9000) {
  dis = 20;
}
console.log(ans - Math.floor((dis * ans) / 100));
// End ......

// Electricity Bill Problem

let billUnit = Number(prompt("Enter electricityunits:"));
let pricePerUnit = 0;
let finalBill = 0;

if (billUnit > 400) {
  pricePerUnit = 13;
  finalBill += Math.floor((billUnit - 400) * pricePerUnit);
  billUnit = 400;
}
if (billUnit > 200 && billUnit <= 400) {
  pricePerUnit = 8;
  finalBill += Math.floor((billUnit - 200) * pricePerUnit);
  billUnit = 200;
}
if (billUnit > 100 && billUnit <= 200) {
  pricePerUnit = 6;
  finalBill += Math.floor((billUnit - 100) * pricePerUnit);
  billUnit = 100;
}

pricePerUnit = 4;
finalBill += Math.floor(billUnit * pricePerUnit);

console.log(finalBill);

// Ternary Operator


