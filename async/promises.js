// let pro = new Promise((resolve,reject)=>{
//     console.log("hii bomm");
//     reject("some error occured")

// })

function asyncFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hehee timeout");
    }, 2000);
  });
}









function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("heheh");
    reject("Bomm hahaha");
  });
}

let result = getPromise();

result.catch((err) => {
  console.log("promise fulfilled", err);
});
