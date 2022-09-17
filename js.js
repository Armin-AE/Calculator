const btn = document.querySelectorAll(".numbs");
const input = document.querySelector(".inpt");
const equal = document.querySelector(".equal");
const clearAll = document.getElementById("clear_all");
const del = document.getElementById("delete");
const op = document.querySelectorAll(".operator");
let include = false;

btn.forEach((i) => {
  i.addEventListener("click", () => setInput(i));
});
equal.addEventListener("click", () => {
  input.value = eval(input.value);
});
clearAll.addEventListener("click", () => {
  input.value = "";
});
del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
op.forEach((operator) =>
  operator.addEventListener("click", () => {
    if (input.value != operator.value && !include) {
      input.value += operator.value;
      input.value = input.value.replace("÷", "/");
      input.value = input.value.replace("X", "*");
    }
    includeCheck(operator.value);
  })
);
function includeCheck(operator) {
  if (input.value.indexOf(operator, -1)) {
    include = true;
  }
}
function setInput(i) {
  if (
    input.value === "0" ||
    input.value === "." ||
    input.value === "*" ||
    input.value === "+" ||
    input.value === "-" ||
    input.value === "/"
  ) {
    input.value = "";
  }
  if (input.value != "0" && input.value != ".") {
    input.value += i.value;
    include = false;
  }
}
