// 1. Find Even Numbers: - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`. 

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Even num:")
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    console.log(arr[i])
  }
}

// 2. Find Odd Numbers: - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`.
let arr2=[10, 15, 20, 25, 30];
console.log("Odd num:")
for(let i=0;i<arr2.length;i++){
  if(arr2[i]%2!=0){
    console.log(arr2[i])
  }
}

// 3. Sum of Array Elements: - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`. 

let arr3=[5, 10, 15];
let sum=0;
for(let i=0;i<arr3.length;i++){
 sum+=arr3[i]
    
  }
console.log('Sum= ',sum)

// 4. Find Maximum Value: - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`.

let arr4=[3, 5, 7, 2, 8]
let maxNum=Math.max(...arr4)
console.log('Max num = ',maxNum)

// 5. Find Minimum Value: - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`.
let arr5=[12, 4, 6, 9, 1]
let minNum=Math.min(...arr5)
console.log('Max num = ',minNum)


// 6. Count Array Elements: - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`. 
let arr6 =[8,3,7,5]
console.log("No. of Elements in an array is: ", arr6.length)

