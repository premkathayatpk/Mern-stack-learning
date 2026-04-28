let inputItem = document.querySelector("#input");

let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
  if (inputItem.value.trim() === "") {
    alert("Field cannot be empty!");
    return;
  }
  let list = document.createElement("li");
  let listText = document.createElement("span");
  let delBtn = document.createElement("button");
  let lists = document.querySelector(".lists");

  listText.textContent = inputItem.value;
  delBtn.textContent = "Delete";
  delBtn.className = "delBtn";

  list.append(listText);
  list.append(delBtn);
  lists.append(list);

  console.log(list);
  inputItem.value = "";

  delBtn.addEventListener("click", () => {
    list.remove();
  });
});
