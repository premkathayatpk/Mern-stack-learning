// 1. Write a function that filters out even numbers from an array.
let arr = [1, 2, 3, 4, 5, , 6, 7, 10, 20];
const filterEvenArr = arr.filter((item) => {
  return item % 2 == 0;
});
console.log(filterEvenArr);

// 2. Filter an array to include only odd numbers.
let arr2 = [1, 2, 3, 4, 5, , 6, 7, 10, 20];

const filterOddArr = arr2.filter((item) => {
  return item % 2 != 0;
});
console.log(filterOddArr);

// 3. Given an array of strings, filter out strings that have more than 3 characters.
let strArr = ["p", "wxyz", "ab", "abcd"];
const filterStrArr = strArr.filter((item) => {
  return item.length > 3;
});
console.log(filterStrArr);

// 4. Write a function that filters out negative numbers from an array.
let arr4 = [1, 2, 3, 4, 5, , 6, 7, -10, -20];

const filterNeg = arr4.filter((item) => {
  return item < 0;
});
console.log(filterNeg);

// 5. Given an array of boolean values, filter out the `true` values.
const arr5 = [true, false, true, false, false, true];
let trueArr = arr5.filter((item) => {
  return item == true;
});
console.log(trueArr);

// 6. Filter an array of strings to include only those that contain the letter 'a'.
let arr6 = ["p", "wxyz", "ab", "abcd"];
const aArr = arr6.filter((item) => {
  return item.includes("a");
});
console.log(aArr);

// 7. Filter an array of numbers to return only those greater than 5.
let arr7 = [1, 2, 3, 4, 5, 6, 7, 10, 20];

const grater5 = arr7.filter((item) => {
  return item > 5;
});
console.log(grater5);

// 8. Write a function that filters out empty strings from an array.

// 9. Write a function that maps an array of numbers to an array where each number is doubled.
let arr9 = [1, 2, 3, 4, 5];
let doubleNum = arr9.map((item) => {
  return item * 2;
});
console.log(doubleNum);

// 10. Convert an array of numbers into an array of strings using `map`.
let numArr = [1, 2, 3, 4, 5];

let stringArr = numArr.toString(numArr);
console.log(stringArr);

// 11. Write a function that converts an array of strings to uppercase using `map`.
let arr11 = ["abc", "ram", "xyz"];
let upperArr = arr11.map((item) => {
  return item.toUpperCase();
});
console.log(upperArr);

// 12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the number is negative).
let arr12 = [1, 2, 3, -3, -5, 5, -1];
let posNegArr = arr12.map((item) => {
  if (item >= 0) {
    return "true";
  } else {
    return "false";
  }
});
console.log(posNegArr);

// 13. Write a function that adds 1 to each number in an array using `map`.
let arr13 = [1, 2, 3, 4, 5];
let add1 = arr9.map((item) => {
  return item + 1;
});
console.log(add1);

// 14. Given an array of strings, return an array of the first letter of each string using `map`.
let arr14 = ["abc", "ram", "xyz"];
let firstLetter = arr14.map((item) => {
  return item[0];
});
console.log(firstLetter);

// 15. Convert an array of strings to an array of their lengths using `map`.
let arr15 = ["ab", "c", "xyz"];
let lengthOfArr = arr15.map((item) => {
  return item.length;
});
console.log(lengthOfArr);

// 16. Write a function that squares each number in an array using `map`.
let arr16 = [1, 2, 3, 4, 5];
let sqrOfNum = arr9.map((item) => {
  return item ** 2;
});
console.log(sqrOfNum);

// 17. Use `forEach` to log each element of an array to the console.
let arr17 = [1, 2, 3, 4, 5];
arr17.forEach((item) => {
  console.log(item);
});

// 18. Write a function that uses `forEach` to calculate the sum of an array of numbers.
let arr18 = [1, 2, 3, 4, 5];
let sumVal = 0;
arr18.forEach((item) => {
  sumVal += item;
});
console.log("sum of arr: ", sumVal);

// 19. Use `forEach` to multiply each number in an array by 2 and log the results.
let arr19 = [1, 2, 3, 4, 5];
let mul = 1;
arr19.forEach((item) => {
  mul *= item;
});
console.log("Mul of arr: ", mul);

// 20. Use `forEach` to log each string in an array in uppercase.
let arr20 = ["a", "abc", "ram"];
let uppArr = arr20.forEach((item) => {
  console.log(item.toUpperCase());
});

// 21. Use `forEach` to add an exclamation mark to each string in an array and log the new strings.
let arr21 = ["a", "abc", "ram"];
arr21.forEach((item) => {
  console.log(item + "!");
});

// 22. Use `forEach` to log the index and value of each element in an array.
let arr22 = [1, 2, 3, 4, 5];
arr22.forEach((item, index) => {
  console.log(index + ":" + item);
});

// 23. Use `forEach` to log only the odd numbers from an array.
let arr23 = [1, 2, 3, 4, 5, 6];
arr23.forEach((item) => {
  if (item % 2 == 0) console.log(item);
});

// 24. Write a function that uses `forEach` to log numbers greater than 10 from an array.
let arr24 = [1, 2, 3, 10, 20, 30, 50];
let graterThan10 = (arr) => {
  console.log("grater than 10:");

  arr.forEach((item) => {
    if (item > 10) {
      console.log(item);
    }
  });
};
graterThan10(arr24);

// 25. Use `forEach` to concatenate all strings in an array into a single string and log it. 
let arr25 = ["a", "abc", "ram"];
let concatArr=""
arr25.forEach((item) => {
  concatArr+=item
});
console.log("Concar array is :",concatArr)