function greet() {
  console.log("Hello ragnar");
}

// setTimeout(() => {
//   greet();
// }, 2000);

// console.log("hii");
// console.log("hehe");

//calback function
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}

// calculator(4, 5, sum);

function hello() {
  console.log("Ha haha");
}

//Call back Hell

// function getData(dataid, getNextData) {
//   setTimeout(() => {
//     console.log("data:" + dataid);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5);
//       });
//     });
//   });
// });

//Promises

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   // resolve("Success")
// });

// function getData(dataid, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data:" + dataid);
//       //   resolve("success")
//       reject("Error has occured");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let result = getData(5);
// result.then((res) => {
//   console.log(res);
// });
// result.catch((err) => {
//   console.log(err);
// });

//Async  and Await

function asynfun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve();

      //   resolve("success");
    }, 3000);
  });
}
function asynfun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      //   resolve("success");
    }, 4000);
  });
}
// console.log("Getting data 1.......");
// asynfun2().then((res) => {
//   console.log(res);
//   console.log("Getting data 2.......");
//   asynfun2().then((res) => {
//     console.log(res);
//   });
// });

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}
getWeatherData();
