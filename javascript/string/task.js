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


