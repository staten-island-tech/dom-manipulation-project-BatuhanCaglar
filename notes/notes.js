const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

let student = {
  name: "Ryan",
  age: 15,
  girlfriend: true,
};
console.log(DOMSelectors.header);
console.log(DOMSelectors.items);

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

//select all buttons as nodelist(can use for each)
const buttons = document.querySelectorAll("button");
//make array from buttons if i want to use filter etc.
const newButtons = Array.form(buttons);
console.log(newButtons);
//iterate through array and change each buttons color
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

//create the HTML for inputs, cards and container aka where the cards go
//select/query the HTML form and get values from inputs
//turns values into object
//insert card with object into HTML
