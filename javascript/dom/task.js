const more=document.querySelector('.more')
const btn=document.querySelector('.btn')


let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    // container.style.backgroundColor = "black";
    more.style.display = "block";
    btn.innerText = "See less...";
    isTrue = false;
  } else {
    // container.style.backgroundColor = "white";
    more.style.display = "none";
    btn.innerText = "See more...";
    isTrue = true;
  }
});