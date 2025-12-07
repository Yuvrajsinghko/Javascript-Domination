// let pro = new Promise((resolve,reject)=>{
//     console.log("hii bomm");
//     reject("some error occured")

// })

function asyncFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hehee timeout");
      resolve("success");
    }, 4000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hehee timeout second");
      resolve("success");
    }, 4000);
  });
}

//Promise Chain
console.log("Fetching data....1");

let p1 = asyncFun();
p1.then((res) => {
  console.log(res);
  console.log("Fetching data....2");
  let p2 = asyncFun2();
  p2.then((res) => {
    console.log(res);
  });
});

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      
    }, 5000);
  });
}

function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("heheh");
    reject("Bomm hahaha");
  });
}

// let result = getPromise();

// result.catch((err) => {
//   console.log("promise fulfilled", err);
// });
