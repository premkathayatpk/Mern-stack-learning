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

// const jdata=JSON.stringify(user)
// console.log(jdata)
// console.log(JSON.parse(jdata))

// user.json()  and JSON.parse(jdata)

// client---API----Backend----DB
//http://localhost:5173/products
//http- protocol
//localhost:5173 - domain name
//products,user, - end point

// http methods
// Get(read),featch,delete,put/ (update)

//data featch from api using promise---------------

// let res=fetch('https://dummyjson.com/products', {
//  method: "GET"
// })

// res.then((data)=>{
//   return data.json()
// }).then((data)=>{
//  console.log(data.products)

// })
// .catch((err)=>{
//   console.log(err)
// })

//data featch from api using async await-----------

const getProduct = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    res = await res.json();
    console.log(res.products);
  } catch (err) {
    console.log(err);
  }
};
getProduct();
