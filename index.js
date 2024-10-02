const DOMSelectors = {
  header: document.querySelector("h1"),
  subheader: document.querySelector("H2"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  inputcard: document.querySelector(".input-card"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
