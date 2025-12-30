//object

//CRUD - Create, Read(get,fetch), Update, Delete

//Create
// let user={
//   name:"Ram",
//   roll:10,
//   isStudent:true,

// }
// console.log(user)

//Read
// console.log(user.name)
// console.log(user.roll)
// console.log(user.isStudent)
// console.log("----------")
// console.log(user["name"])
// console.log(user["roll"])
// console.log(user["isStudent"])

//Delete
// delete user.name
// console.log(user)

// // update
// let user={
//   name:"Ram",
//   roll:10,
//   isStudent:true,

// }
// //add
// user.phone=9800000000
// //update
// user.name="Hari"
// console.log(user)


 let user={
  name:"Ram",
  roll:10,
  isStudent:true,
  phone:{
    p1:9800000000,
    p2:9811111111,
  },
  marks:[30,50,50,40,90]

}

// sum=0
// user.marks.forEach((item)=>{
//   sum+=item
// })
// console.log(sum)

console.log(user.marks.reduce((acc,item)=>{
  return acc+item
},0))

