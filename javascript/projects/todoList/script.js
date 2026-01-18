const todoInput = document.querySelector("#todoInput");
const items = document.querySelector(".items");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task.length > 0) {
    const li = document.createElement("li");
    li.textContent = task;
    li.classList.add("todo-item");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delBtn");
    li.appendChild(delBtn);
    items.appendChild(li);

delBtn.addEventListener("click",()=>{
  li.remove();
})

    todoInput.value = "";
  }
});
