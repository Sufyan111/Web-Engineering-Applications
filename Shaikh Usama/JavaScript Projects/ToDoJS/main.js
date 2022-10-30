let ourForm = document.getElementById("ourForm");
let userInput = document.getElementById("userInput");
let itemList = document.getElementById("item-list");

ourForm.addEventListener("submit", (item) => {
  item.preventDefault();
  //   alert("thanks");
  createItem(userInput.value);
});

const createItem = (item) => {
  let ourHtml = ` <li>${item} <button onclick="deleteItem(this)">Delete</button></li>`;
  itemList.insertAdjacentHTML("afterbegin", ourHtml);
  userInput.value = "";
  userInput.focus();
};

const deleteItem = (itemDelete) => {
  itemDelete.parentElement.remove();
  console.log("item deleted");
};
