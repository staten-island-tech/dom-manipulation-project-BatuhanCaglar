const DOMSelectors = {
  header: document.querySelector("h1"),
  subheader: docoment.querySelector("h2"),
  inputcard: document.querySelector(".inputcard"),
  form: document.querySelector(".form"),
  formgroup: document.querySelector(".form-group"),
  label: document.querySelector(".p"),
  button: document.querySelector(".button"),
  items: document.querySelector(".item-in"),
  types: document.querySelector(".type-in"),
  images: document.querySelector(".image-in"),
  organizer: document.querySelector(".inputorganizer"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  console.log(document.querySelector("input").value);
});