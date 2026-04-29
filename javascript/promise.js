// promise
// synchronous
// asynchronous
// console.log(100)
// console.log(200)
// console.log(400)
// console.log(500)
// let data=fetch('https://dummyjson.com/products')    // time   // read time // res data
// console.log(data)
// console.log(100)
// console.log(500)
// const p = new Promise((resolve, reject) => {
//   let isRead = true;
//   if (isRead) {
//     resolve("found data");
//   } else {
//     reject("data not found");
//   }
// });
// p.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// JSON=JavaScript Object Notation

// const jData={
//     "name":"pramod",
//     "age":20
// }

// const user={
//     name:"ram",
//     age:20
// }

// console.log(user)

// SetTimeout promise

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
});
myPromise.then((data) => {
  console.log(data);
});

// Check even odd num using promise

const evenOddPromise = new Promise((resolve, reject) => {
  let num = 5;
  if (num % 2 == 0) {
    resolve("Even");
  } else {
    reject("odd");
  }
});
evenOddPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
