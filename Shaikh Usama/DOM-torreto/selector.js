// console.log(document);

// Only single Id is Selected as every ID is Unique
const idSelection = document.getElementById("pTag");
// console.log(idSelection);

// all the class with the same class name is selected and HTML Collection is returned
const classSelection = document.getElementsByClassName("spanTag");
// console.log(classSelection);

// QuerySelector can select both ID and Class and return only single value
const querySelection = document.querySelector("#pTag");
const querySelection1 = document.querySelector(".spanTag");
// console.log(querySelection);
// console.log(querySelection1);

// QuerySelectorAll can select all the classes and ID which has same class name in multiple tags
const querySelectionAll = document.querySelectorAll("#pTag");
const querySelectionAll1 = document.querySelectorAll(".spanTag");
// console.log(querySelectionAll);
// console.log(querySelectionAll1);

const tagNameSelector = document.getElementsByTagName("p");
// console.log(tagNameSelector);

const selectedPtag = document.getElementById("pTag");
// console.log(selectedPtag.innerHTML);
// selectedPtag.innerHTML = "Sec Mundus";

// const changeText = () => {};

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  selectedPtag.textContent == "Selecting a tag using javascript"
    ? (selectedPtag.innerHTML = "some random text")
    : (selectedPtag.innerHTML = "Creatus Est.");
});
