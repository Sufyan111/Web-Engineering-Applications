const inputBox = document.getElementById("userInput");
const addBtn = document.getElementById("btn");
const showDiv = document.getElementById("itemList");

addBtn.addEventListener("click", () => {
  const newTask = document.createElement("p");
  newTask.innerHTML = inputBox.value;
  console.log(newTask);
  showDiv.appendChild(newTask);
  inputBox.value = "";

  newTask.addEventListener("click", () => {
    newTask.style.textDecoration = "line-through";
    newTask.style.textDecorationColor = "green";
  });
  newTask.addEventListener("dblclick", () => {
    showDiv.removeChild(newTask);
  });
});
