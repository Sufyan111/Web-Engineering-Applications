const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const alertImg = document.getElementById("alertImg");
const hiderBtn = document.getElementById("hiderBtn");
const hider = document.getElementById("hider");

let arrTodo = [];
let count = 0;
let visible = true;
input.focus();

button.addEventListener("click", () => {
  const newTask = document.createElement("li");
  if (input.value.trim() !== "") {
    newTask.innerHTML = input.value;
    list.appendChild(newTask);
    input.value = "";
    alertImg.style.display = "none";
  } else {
    alertImg.style.display = "block";
    input.value = "";
    hiderBtn.style.display = "block";
  }
  newTask.addEventListener("click", () => {
    newTask.style.textDecoration = "line-through";
  });

  newTask.addEventListener("dblclick", () => {
    newTask.remove();
  });
});

// hiderBtn.addEventListener("click", () => {
//   hider.style.display = visible ? "block" : "none";
//   visible = !visible;
// });

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

function deleteTask(count) {}
