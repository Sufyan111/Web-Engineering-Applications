let toDoInput = document.getElementById("inputUser");
const addBtn = document.getElementById("push");
const showList = document.getElementById("tasks");

const addTask = () => {
  showList.innerHTML = toDoInput.value;
  toDoInput.value = "";
};
