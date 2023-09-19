const inputBox = document.querySelector("#inputbox");
const addBtn = document.querySelector("#addbtn");
const todoList = document.querySelector("#todolistid");

let editToDo = null;

// function to Add ToDo list
const addToDo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("Enter a ToDo");
    return false; //this is important otherwise it will save something after alert goes
  }

  if (addBtn.value === "Edit") {
    editToDo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    //   creating p tag inside li tag then append p to li and li to todoList
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //   Creating edit element button inside li tag
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //   Creating delete element button inside li tag
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    //   append li to todoList
    todoList.appendChild(li);
    inputBox.value = ""; //once you enter your task input field gets empty
  }
};

// function to update todo list
const updateToDo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
  }

  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editToDo = e;
  }
};

addBtn.addEventListener("click", addToDo);
todoList.addEventListener("click", updateToDo);
