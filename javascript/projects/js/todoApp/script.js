let inputItem = document.querySelector("#input");
let addBtn = document.querySelector(".addBtn");
let lists = document.querySelector(".lists");

addBtn.addEventListener("click", () => {
  let data = inputItem.value.trim();

  if (!data) {
    alert("Field cannot be empty!");
    return;
  }
  let existingData = JSON.parse(localStorage.getItem("data")) || [];

  existingData.push(data);
  localStorage.setItem("data", JSON.stringify(existingData));
  renderList(existingData);

  inputItem.value = "";
});

const renderList = (dataArr) => {
  lists.innerHTML = "";

  dataArr.forEach((item, index) => {
    let list = document.createElement("li");
    let listText = document.createElement("span");
    let delBtn = document.createElement("button");

    listText.textContent = item;

    delBtn.textContent = "Delete";
    delBtn.className = "delBtn";

    delBtn.addEventListener("click", () => {
      deleteItem(index);
    });
    list.append(listText);
    list.append(delBtn);
    lists.append(list);
  });
};

const deleteItem = (index) => {
  let existingData = JSON.parse(localStorage.getItem("data")) || [];

  existingData.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(existingData));

  renderList(existingData);
};

window.addEventListener("DOMContentLoaded", () => {
  let existingData = JSON.parse(localStorage.getItem("data")) || [];
  renderList(existingData);
});
