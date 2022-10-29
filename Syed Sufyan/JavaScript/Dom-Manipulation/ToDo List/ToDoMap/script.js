const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
let count = 0;

arrToDo = Object.values(localStorage);

function displayTodo(arr) {
  count = 0;
  // list.innerHTML = "";
  arr.map((item) => {
    list.innerHTML += `<li>${item}<button id=${count} onclick = 'deleteTask(this.id)'>Delete</button></li>`;
    localStorage.setItem(count, item);
    count++;
  });
}

function deleteTask(id) {
  let currElement = document.getElementById(id).previousSibling.textContent;
  arrToDo = arrToDo.filter((item) => {
    item != currElement;
  });
  document.getElementById(id).parentElement.remove();
  localStorage.removeItem(id);
}

// Event Listeners
button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    arrToDo.push(input.value);
    displayTodo(arrToDo);
    input.value = "";
    input.focus();
  } else {
    alert("Please input a valid task");
    input.value = "";
    input.focus();
  }
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

// displayTodo(arrToDo);
