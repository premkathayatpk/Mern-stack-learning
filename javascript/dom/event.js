// event handling
//1. event handler (inline event -onClick,onMouseover)
//2.event addEventListener

// const btn=document.querySelector('#btn')

// const myFunction=()=>{
//   alert("My function")
// }

// btn.addEventListener('click',()=>{
//   alert("AddListener")
// })

// btn.addEventListener('mouseover',()=>{
//   alert("AddListener over")
// })

// btn.removeEventListener('mouseover',()=>{

//   alert("AddListener over")
// })

// btn.addEventListener('click',()=>{
//   btn.style.color='blue'
// })

const btn = document.querySelector("#btn");
const first = document.querySelector(".first");

let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    first.style.backgroundColor = "black";
    first.style.color = "white";
    btn.innerText = "change color to white";
    isTrue = false;
  } else {
    first.style.backgroundColor = "white";
    first.style.color = "black";
    btn.innerText = "change color to black";
    isTrue = true;
  }
});
