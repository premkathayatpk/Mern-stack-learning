//  Array

// let arr=[1,2,3,4,5,50,4,3,2,3,52]

// console.log(arr)
// console.log(arr.length)
// console.log(arr[3])
// console.log(arr[arr.length-1])  //last index

// let arr=[1,2,3,4,5,50,40,3,20,3,52]

// for(let i=0; i<arr.length;i++){
//   console.log(arr[i])
// }

// let sum=0
//  let arr=[1,2,3,4,5]
// for(let i=0; i<arr.length;i++){
//   sum+=arr[i]
// }
// console.log(sum)

// let arr=[1,2,3,4,5,50,4,3,2,3,52]
// for(let i=0; i<arr.length;i++){
//   if(arr[i]%2==0){
//   console.log(arr[i])
//   }
// }

// let arr=[1,2,3,4,5,50,4,3,2,3,52]
// for(let  i=arr.length-1;i>=0;i--){

//   console.log(arr[i])
//   }

// let sum=0
// let arr=[1,2,3,4,5]
// for(let i=0; i<arr.length;i++){
//   if(arr[i]%2==0){
//   sum+=arr[i]
//   }
// }
// console.log(sum)

// Array methods

// let arr=[1,2,3,4,5]

// arr.push(200)
// arr.push(100,200)
// arr.pop()
// console.log(arr.pop())
// arr.unshift(100)
// arr.unshift(100,300)
// arr.shift()
// console.log(arr.shift())

// console.log(arr)

//slice
// let  arr=[1,2,3,4,5]
// console.log(arr.slice(1,4))
// console.log(arr.slice(2,5))
// console.log(arr.slice(1))

//splice

// let  arr=[1,2,3,4,5]
// console.log(arr.splice(1,2))
// console.log(arr.splice(1,2,"hello"))
// console.log(arr)

//concat
// let arr1=[1,2,3,4]
// let arr2=[10,20,30]
// console.log(arr1.concat(arr2))

//map, filter, reduce, foreach, find , includes
// forEach
// -access and print
// let arr=[1,2,3,4,5]
// arr.forEach((item,index)=>{
//   console.log(item+":"+index)
// })

//map
// -new array returns
//-modefied existing array and returns new Array
//  let arr=[1,2,3,4,5]
//  const newArr=arr.map((item)=>{
//   // return item*2
//   return item+2
//  })
//  console.log(newArr)

//filter
// let arr = [1, 2, 3, 4, 5, 10, 20, 40];
// const filterArr = arr.filter((item) => {
  // return item%2==0
  // return item%2!=0
  // return item>5
  // return item < 5;
// });
// console.log(filterArr);


//reduce
// let arr = [1, 2, 3, 4, 5];
// let totalVal=arr.reduce((acc,item)=>{
//   return acc+item
// },0)
// console.log(totalVal)



// let arr = [1, 2, 3, 4, 5, 10, 20, 40];
//find
// const i=arr.find((item)=>{
//   return item==5
// })
// console.log(i)

//includes
// console.log(arr.includes(2))
// console.log(arr.includes(100))


//array destructring
// let arr=[1,2,3]
// const [a,b,c]=arr
// console.log(a,b,c)


//object destructring
// const user={
//   name: 'Ram',
//   age: 22
// }
// const {name,age}=user
// console.log(name,age)


//rest and spread operator
//spread(...)
let arr=[1,2,3,4]
let arr2=[...arr,100,200]
console.log(arr2)

const user={
  name: 'Ram',
  age: 22
}
let user2={...user, phn:9800000000}
console.log(user2)


//rest(...)
const add=(...x)=>{
  console.log(x.reduce((acc,item)=>{
    return acc+item
  },0))

}
add(100,200,300,400,500)