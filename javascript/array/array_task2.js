// 1. Find Even Numbers: - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Even num:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

// 2. Find Odd Numbers: - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`.
let arr2 = [10, 15, 20, 25, 30];
console.log("Odd num:");
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 != 0) {
    console.log(arr2[i]);
  }
}

// 3. Sum of Array Elements: - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`.

let arr3 = [5, 10, 15];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
console.log("Sum= ", sum);

// 4. Find Maximum Value: - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`.

let arr4 = [3, 5, 7, 2, 8];
let maxNum = Math.max(...arr4);
console.log("Max num = ", maxNum);

// 5. Find Minimum Value: - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`.
let arr5 = [12, 4, 6, 9, 1];
let minNum = Math.min(...arr5);
console.log("Max num = ", minNum);

// 6. Count Array Elements: - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`.
let arr6 = [8, 3, 7, 5];
console.log("No. of Elements in an array is: ", arr6.length);

// 7. Multiply Array Elements: - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result.
let arr7 = [2, 3, 4];
console.log(
  arr7.reduce((mul, item) => {
    return (mul *= item);
  }, 1)
);

// 8. Check for a Specific Number: - Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found" or "Not Found".
let arr8 = [5, 6, 7, 8];
console.log(
  arr8.includes(7)
    ? "The number 7 is found in the array"
    : "The number 7 is not found in the array"
);

// 9. Remove Duplicates: - Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the new array.
let arr9 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr9)];
console.log(uniqueArr);

//using reduce
console.log(
  arr9.reduce((unique, item) => {
    if (!unique.includes(item)) unique.push(item);
    return unique;
  }, [])
);

// 10. Create an Array with Squares: - Write a code to create a new array containing the squares of the elements from the array `[1, 2, 3]`.
let arr10 = [1, 2, 3];
console.log(
  arr10.map((item) => {
    return item ** 2;
  })
);

// 11. Filter Numbers Greater than 10: - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`.
let arr11 = [5, 12, 7, 14, 3];
console.log(
  arr11.filter((item) => {
    return item > 10;
  })
);

// 12. Combine Two Arrays: - Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
console.log([...arrA, ...arrB]);

// 13. Find Array Length: - Write a code to print the length of the array `[9, 7, 5, 3, 1]`.
let arr13 = [9, 7, 5, 3, 1];
console.log("length of arr:", arr13.length);

// 14. Find Average Value: - Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`.
let arr14 = [10, 20, 30];

let sumArr = arr14.reduce((sum, item) => {
  return (sum += item);
});
console.log("Average value of arr id", sumArr / arr14.length);

// 15. Reverse an Array: - Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array.
let arr15 = [1, 2, 3, 4, 5];
let revArr = [];

for (let i = arr15.length - 1; i >= 0; i--) {
  revArr.push(arr15[i]);
}
console.log(revArr);
// 16. Find Common Elements: - Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3, 4]`.
let arr16A=[1,2,3]
let arr16B=[2,3,4]
console.log(arr16A.filter((item)=>{
  return arr16B.includes(item)
}))

// 17. Split Array into Two: - Write a code to split the array `[1, 2, 3, 4, 5]` into two arrays: one with the first half and one with the second half.
let arr17 = [1, 2, 3, 4, 5];
console.log(
  "First half :",
  arr17.splice(0, 2),
  "\n",
  "second Half :",
  arr17.splice(1, arr17.length)
);

// 18. Find Index of an Element: - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`.
let arr18 = [10, 20, 5, 30];
console.log("Index of 5 is", arr18.indexOf(5));

// 19. Check if Array Contains a Number: - Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No".
let arr19 = [2, 4, 6, 8];
console.log(arr19.includes(4) ? "Yes" : "No");

// 20. Create an Array with String Lengths: - Write a code to create a new array containing the lengths of each string from the array `["apple", "banana", "cherry"]`. 
let arr20=["apple", "banana", "cherry"]
let lenStr=[]
arr20.forEach((item)=>{
 lenStr.push(item.length)
})
console.log(lenStr)
