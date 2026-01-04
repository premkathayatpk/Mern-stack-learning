// 1. Question: Write a function that adds the number `7` at the end of the array `let arr = [1, 2, 3, 4];` using the `push` method. What is the new array? 

function addSeven(arr){
  arr.push(7)
  return arr
}
let arr=[1,2,3,4]
let newArr=addSeven(arr)
console.log(newArr)


// 2. Question: Given an array `let arr = ['apple', 'banana'];`, use the `pop` method to remove the last element. What is the modified array? 

let arr1 = ['apple', 'banana'];
arr1.pop()
console.log(arr1)


// 3. Question: Use the `shift` method to remove the first element from the array `let arr = [10, 20, 30, 40];`. What does the array look like afterward?

let arr2 = [10, 20, 30, 40];
arr2.shift()
console.log(arr2)


// 4. Question: Write a function that adds the element `'start'` at the beginning of the array `let arr = ['middle', 'end'];` using the `unshift` method. What is the new array? 

function startArr(arr3){
arr3.unshift("start")
return arr3
}
let arr3 = ['middle', 'end'];
let newArr3=startArr(arr3)
console.log(arr3)


// 5. Question: Convert the array `let arr = ['one', 'two', 'three'];` to a string using the `toString` method. What is the resulting string? 

let arr4 = ['one', 'two', 'three'];
let str=arr4.toString()
console.log(str)


// 6. Question: Given an array `let arr = ['cat', 'dog'];`, use the `concat` method to combine it with another array `['fish', 'bird'];`. What is the resulting array? 

let arrA = ['cat', 'dog'];
let arrB=['fish', 'bird'];
let arr6=arrA.concat(arrB)
console.log(arr6)


// 7. Question: Use the `slice` method to extract the first two elements from the array `let arr = ['red', 'green', 'blue'];`. What does the new array look like? 

let arr7 = ['red', 'green', 'blue'];
let sliceArr=arr7.slice(0,2)
console.log(sliceArr)


// 8. Question: Write a function that removes the last element from the array `let arr = ['x', 'y', 'z'];` and then adds `'a'` at the beginning using the `unshift` method. What is the final array? 

function remArr(arr){
  arr.pop()
  return arr
}
let arr8 = ['x', 'y', 'z'];
let newArr8=remArr(arr8)
console.log(newArr8)
newArr8.unshift('a')
console.log(newArr8)


// 9. Question: Use the `toString` method to convert the array `let arr = [100, 200, 300];` to a string, and then find out the length of the resulting string. What is the length?

let arr9 = [100, 200, 300];
let strArr9=arr9.toString()
console.log(strArr9.length)

// 10. Question: Write a function that uses the `push` method to add both `'orange'` and `'grape'` to the end of the array `let arr = ['apple', 'banana'];`. What is the new array? 

function pushArr(arr10){
  arr10.push("orange", "grape")
  return arr10

}
let arr10 = ['apple', 'banana'];
console.log(pushArr(arr10))

// 11. Question: Use the `shift` method to remove the first element from the array `let arr = ['sun', 'moon', 'stars'];`. What is the modified array? 


let arr11 = ['sun', 'moon', 'stars'];
arr11.shift()
console.log(arr11)


// 12. Question: Write a function that adds the number `42` at the beginning of the array `let arr = [7, 14, 21];` using the `unshift` method. What is the resulting array? 

function unshiftArr(arr){
  arr.unshift(42)
  return arr
}
let arr12 = [7, 14, 21];
console.log(unshiftArr(arr12))


// 13. Question: Given an array `let arr = [5, 10, 15, 20];`, use the `pop` method to remove the last element and store it in a variable. What is the value of the variable? 

let arr13 = [5, 10, 15, 20];
arr13.pop()
console.log(arr13)

// 14. Question: Convert the array `let arr = ['hello', 'world'];` to a string using the `toString` method, and then split the string back into an array using the `split(',')` method. What is the resulting array? 

let arr14 = ['hello', 'world'];
let strArr14=arr14.toString()
console.log(strArr14)


// 15. Question: Use the `concat` method to combine the arrays `let arr1 = ['x', 'y'];` and `let arr2 = [1, 2];`. What is the resulting array? 
let arr15A = ['x', 'y'];
let arr15B = [1, 2];
let arr15=arr15A.concat(arr15B) 
console.log(arr15)

// 16. Question: Write a function that adds the number `99` at the end of the array `let arr = [1, 2, 3, 4];using the `push` method, and then removes the first element using the `shift` method. What is the final ` array

function addNum(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++)
 { sum+=arr[i]}
  return sum;

}

let arr16 = [1, 2, 3, 4];
console.log(addNum(arr16))


// 17. Question: Use the `slice` method to extract the last two elements from the array `let arr = ['a', 'b', 'c', 'd'];`. What is the resulting array? 

let arr17 = ['a', 'b', 'c', 'd'];
let sArr=arr17.slice(arr17.length-2,arr17.length)
console.log(sArr)

// 18. Question: Write a function that adds both `'lion'` and `'tiger'` at the beginning of the array `let arr = ['elephant', 'giraffe'];` using the `unshift` method. What is the new length of the array? 

function unshiftArr(arr){
  arr.unshift('lion','tiger')
  return arr
}
let arr18 = ['elephant', 'giraffe'];
console.log(unshiftArr(arr18))

// 19. Question: Convert the array `let arr = [20, 30, 40];` to a string using the `toString` method, and then convert the string back to an array using the `split(',')` method. What is the final array? 

let arr19 = [20, 30, 40];
let strArr19=arr19.toString()
console.log(strArr19)
let backArr=strArr19.split(',')
console.log(backArr)


// 20. Question: Use the `push` method to add `'grape'` to the array `let arr = ['apple', 'banana', 'orange'];`, and then use the `pop` method to remove the last element. What is the resulting array? 

let arr20 = ['apple', 'banana', 'orange'];
arr20.push('grape')
console.log(arr20)

