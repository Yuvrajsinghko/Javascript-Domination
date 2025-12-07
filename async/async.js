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
// function outerFun() {
//   function innerFun() {
//     console.log("hii");
//   }
//   innerFun();
// }
function getData(dataId, getNextData) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });
