let counter = 0;
const count = document.getElementById("value");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

// console.log(count, increaseBtn, decreaseBtn, resetBtn);

// increaseBtn.addEventListener("click", () => {
//   counter++;
//   count.innerHTML = counter;
//   console.log(counter);
// });

// decreaseBtn.addEventListener("click", () => {
//   counter--;

//   count.innerHTML = counter;
//   console.log(counter);
// });

// resetBtn.addEventListener("click", () => {
//   count.innerHTML = 0;
//   counter = 0;
// });

const counterBtn = document.querySelectorAll(".btn");

counterBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    // const listOfClasses = item.classList;
    console.log(event.currentTarget);
    console.log(event.relatedElement);
    console.log(event);
    item.innerHTML === "Increase"
      ? counter++
      : item.innerHTML == "Decrease"
      ? counter--
      : (counter = 0);
    count.innerHTML = counter;

    counter > 0
      ? (count.style.color = "green")
      : counter < 0
      ? (count.style.color = "red")
      : (count.style.color = "black");
  });
});
