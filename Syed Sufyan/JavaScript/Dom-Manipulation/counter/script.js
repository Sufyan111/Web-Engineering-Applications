const addButton = document.getElementById("addBtn");
const subButton = document.getElementById("subBtn");
const count = document.getElementById("pTag");

// Event Listeners
addButton.addEventListener("click", () => {
  count.textContent++;
});
subButton.addEventListener("click", () => {
  count.textContent--;
});
