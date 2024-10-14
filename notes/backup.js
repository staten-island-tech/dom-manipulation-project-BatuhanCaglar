const DOMSelectors = {
  header: document.querySelector("h1"),
  subheader: document.querySelector("h2"),
  button: document.querySelector("button"),
  inputcard: document.querySelector(".inpurtcard"),
  itemin: document.querySelector(".item-in"),
  typein: document.querySelector(".type-in"),
  imagein: document.querySelector(".image-in"),
  oeganizer: document.querySelector(".inputorganizer"),
  form: document.querySelector(".form"),
  input: document.querySelector(".input"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});


const buttons = document.querySelectorAll("button");
const newButtons = Array.form(buttons);
console.log(newButtons);
newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);

let movie = {
  title: "Star Wars",
  release: 1977,
};

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class = "card"><h2 class = "card-header">${movie.title}</h2></div>`
);
