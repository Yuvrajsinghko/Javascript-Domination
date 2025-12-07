// console.log("hii");
// console.log("how are you");
// console.log("Hi bexi");

// let a = () => {
//   console.log("time out");
// };

// setTimeout(a, 2000);

// console.log("hoolp");
// let calculator =
//   (1,
//   2,
//   (a, b) => {
//     console.log(a + b);
//   });

// calculator();
function outerFun() {
  function innerFun() {
    console.log("hii");
  }
  innerFun();
}
function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  },2000);
}
