// 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`.
let str = "Hello EveryOne";
let lowStr = str.toLowerCase();
let count=lowStr.split('').filter(ch=>ch=='e').length
console.log(count)

// 2. Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `if else` statements. 
if(str.startsWith('H')&& str.endsWith('e')){
  console.log(`${str} is start with H and end with e `)
}
else{
  console.log(`${str} is not start with H and end with e `)
}

// 3. Write a program that loops through a string and prints only the uppercase letters. 
console.log("Upper Letter are ",)
for(let i=0;i<str.length;i++){
  let chr=str[i]
if(chr>='A' && chr<="Z"){
  console.log(chr)
}
}

// 4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given string. 
console.log(str.replaceAll('Hello','Hi'))
//Or using loop
let word=str.split(" ")
let result=""
for(let i=0;i<word.length;i++){
  if(word[i]==='Hello'){
    result+="Hi"
  }
  else{
    result+=word[i]
  }
  if(i<word.length-1){
    result+=" "
  }
}
console.log(result)


// 5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`. 
count=0
for(let i=0;i<lowStr.length;i++){
 let chr=lowStr.split('')[i]
  if(chr=='a'||chr=='e'||chr=='i'||chr=='o'||chr=='u'){
    count++
  }
}
console.log("Num of vowel letter ",count)


// 6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello EveryOne"` to form a new string
let splitStr=str.split(" ")
let newStr=""
for(let i=0;i<splitStr.length;i++){
  newStr+=splitStr[i].slice(0,1)
}
console.log("concatenate the first letter of each word: ",newStr)

// 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `if else` statements. 
let s='radar'
let rev=''
for(let i=s.length-1;i>=0;i--){
  // console.log(n[i])
  rev+=s[i]
}
console.log(rev)
if(s==rev){
  console.log(s+" is palendrom ")
}

// 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the string is empty. 
 let fullName='  Sipalaya Info Tech  '
console.log(fullName)
console.log(fullName.trim())

// 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and to uppercase if it’s lowercase. 
convertedStr=""
for(let i=0;i<str.length;i++){
  let char=str[i]
  if (char >= 'a' && char <= 'z') {
    convertedStr += char.toUpperCase();
  } 
  else if (char >= 'A' && char <= 'Z') {
    convertedStr += char.toLowerCase();
  } 
  else {
    convertedStr += char;
  }

}
console.log(convertedStr)

// 10. Write a program that slices the first 5 characters of a string and checks if this substring is equal to `"Hello"`. 

let sliceStr=str.slice(0,5)
if("Hello"==sliceStr){
  console.log(`substring is equal to "Hello"`)
}
else{
  console.log(`substring is not equal to "Hello"`)
}

// 11. Create a program that replaces every vowel in a string with an asterisk (*) using a loop. 
let repStr=""
for(let i=0;i<lowStr.length;i++){
 let chr=lowStr[i]
  if(chr=='a'||chr=='e'||chr=='i'||chr=='o'||chr=='u'){
   repStr= lowStr.replaceAll(chr,'*')

  }
}
console.log(repStr)

// 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it does, replace it with `"Hi"`. 
let repHiStr=""
if(str.includes("Hello")){
  repHiStr=str.replaceAll("Hello",'Hi')
}
console.log(repHiStr)

// 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`. 
let countSpace=0
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    countSpace++
  }
}
console.log(countSpace)

// 14. Write a program that checks if the length of a string is greater than 10. If it is, print the string in uppercase; otherwise, print it in lowercase. 
if(str.length>10){
  console.log(str.toUpperCase())
}
else{
  console.log(str.toLowerCase())
}

// 15. Create a program that loops through a string and prints the index of each letter 'o' in the string `"Hello EveryOne"`. 
for(let i=0;i<str.length;i++){
  if(str[i]=='o'){
    console.log(i)
  }
}

// 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statements. 
let trimStr=str.trim()
if(trimStr.length%2==0){
  console.log("length is even")
}else{
    console.log("length is Odd")

}


// 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use `if-else` statements to print the result. 
let str17="evereone"
if(str17[0]==str17[str17.length-1]){
  console.log("first and last characters of a string are the same")
}

// 18. Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else` statements. 
console.log(str.replace(str.slice(0,3),"ABC"))


// 19. Create a program that uses a loop to reverse a string and print the reversed string. 
let revstr=''
for(let i=str.length-1;i>=0;i--){
  // console.log(n[i])
  revstr+=str[i]
}
console.log(revstr)
