const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

let count = 0;

// input.focus();

function addTask() {
  if (input.value.trim() !== "") {
    list.innerHTML += `<li >${
      input.value + "                      "
    }</li><button id=${count} onclick = 'deleteTask(this.id)'>Delete</button>`;
    input.value = "";
    // input.focus();
    sessionStorage.setItem(count, input.value);
    count++;
  } else {
    alert("Please input  a valid task");
    input.value = "";
    // input.focus();
  }
}

function deleteTask(count) {
  document.getElementById(count).parentElement.remove();
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

button.addEventListener("click", addTask);
