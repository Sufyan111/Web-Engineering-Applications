// const count = document.getElementById("count");
// const increaseBtn = document.getElementById("increase-button");
// const decreaseBtn = document.getElementById("decrease-button");
// const resetBtn = document.getElementById("reset-button");

// const colorChanger = (num) => {
//   if (num > 0) {
//     count.style.color = "var(--clr-primary-1)";
//   } else if (num < 0) {
//     count.style.color = "var(--clr-red-dark)";
//   } else {
//     count.style.color = "black";
//   }
// };

// increaseBtn.addEventListener("click", () => {
//   count.innerHTML++;
//   colorChanger(count.innerHTML);
// });
// decreaseBtn.addEventListener("click", () => {
//   count.innerHTML--;
//   colorChanger(count.innerHTML);
// });
// resetBtn.addEventListener("click", () => {
//   count.innerHTML = 0;
//   colorChanger(count.innerHTML);
// });

// colorChanger(count.innerHTML);

// const counterbtns = document.querySelectorAll(".btn");
// const countValue = document.getElementById("count");
// let counter = 0;

// counterbtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // Change Values
//     if (btn.innerHTML === "Increase") {
//       counter++;
//     } else if (btn.innerHTML === "Decrease") {
//       counter--;
//     } else {
//       counter = 0;
//     }

//     // Change Colors
//     if (counter > 0) {
//       countValue.style.color = "green";
//     }
//     if (counter < 0) {
//       countValue.style.color = "red";
//     }
//     if (counter === 0) {
//       countValue.style.color = "#222";
//     }
//     countValue.innerHTML = counter;
//   });
// });

const counterbtns = document.querySelectorAll(".btn");
const countValue = document.getElementById("count");
let counter = 0;

counterbtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    let classList = e.currentTarget.classList;
    if (classList.contains("increase")) {
      counter++;
    } else if (classList.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }

    // Change Colors
    if (counter > 0) {
      countValue.style.color = "green";
    } else if (counter < 0) {
      countValue.style.color = "red";
    } else {
      countValue.style.color = "#222";
    }

    countValue.innerHTML = counter;
  });
});
