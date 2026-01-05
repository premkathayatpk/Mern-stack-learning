// Wrt a function to return the sum of two numbers
function sum(a,b){
 return a+b
}
console.log("Sum of two Nums:",sum(10,20))

// 2. convert minutes into seconds
function convertIntoSec(min){
let sec=min*60
console.log(`${min} min =  ${sec} sec:`)
}
convertIntoSec(30)

// 3. Create a function that takes the age in years and returns the age in days.
function ageInDays(age){
return age*365
}
console.log("Your age in days = ", ageInDays(24))

//4. Find the area of a triangle.
function areaOfTriangle(b,h){
  let a=(1/2)*(b*h)
 return a
}
 console.log("Area of Triangle:",areaOfTriangle(4,5))

//  5. Return the first element in an array.

function returnFirstEle(first){
 return arr[0]
}
let arr=[1,2,3,4,5]
console.log("First element of arr is ",returnFirstEle(arr))

// 6.Check if a number is even or odd.
let n=5
if(n%2==0){
  console.log(n," is Even num")
}else{
  console.log(n," is Odd num")
}

// 7. Convert hours into seconds.
function hrsIntoSec(hrs){
  return hrs*60*60
}
console.log("Hrs into sec ",hrsIntoSec(3))

// 8.Find the maximum of two numbers without using Math.max().
let n1=30, n2=55
if(n1>n2){
  console.log(n1, " is Max")
}else if(n1==n2){
  console.log(n1," is equal to ",n2)
}else{
  console.log(n2," is Max")
}

// 9.Reverse a string (e.g., "hello" -> "olleh").
let str="hello"
let revStr=""
for(let i=str.length-1;i>=0;i--){
  revStr+=str[i]
}
console.log(revStr)

// 10.Calculate the factorial of a number.
let num=5
let fac=1
for(let i=num;i>=1;i--){
  fac*=i
}
console.log(`Factorial of ${num} is `,fac)