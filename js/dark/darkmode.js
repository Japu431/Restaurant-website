const toggle = document.querySelector("#toggle");
const dark = "dark";
const body = document.body;

const changeToggle = toggle.addEventListener("click", (change) => {
  let checkado = change.target.checked;
  body.classList.toggle(dark, checkado);
});
