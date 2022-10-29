let MyVariable = "HELLO WORLD";

function Scope() {
  let MyVariable = "Bye WORLD";
  console.log("Local Scope " + MyVariable);
}

Scope();
console.log("Global Scope " + MyVariable);
