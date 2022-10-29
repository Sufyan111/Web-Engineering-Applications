const count = document.getElementById("value");

const value = document.querySelectorAll(".btn");
let counter = 0;
value.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.innerHTML);

    item.innerHTML === "Increase"
      ? counter++
      : item.innerHTML === "Decrease"
      ? counter--
      : (counter = 0);

    count.innerHTML = counter;
  });
});

// console.log(value);
