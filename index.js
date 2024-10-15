document.addEventListener("DOMContentLoaded", function () {
  const DOMSelectors = {
    form: document.querySelector(".form"),
    itemInput: document.querySelector('input[name="item"]'),
    typeInput: document.querySelector('input[name="type"]'),
    imageInput: document.querySelector('input[name="image"]'),
    button: document.querySelector("button"),
    stuffContainer: document.getElementById("stuffContainer"),
  };

  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(DOMSelectors.itemInput.value);
    console.log(DOMSelectors.typeInput.value);
    console.log(DOMSelectors.imageInput.value);

    const itemValue = DOMSelectors.itemInput.value;
    const typeValue = DOMSelectors.typeInput.value;
    const imageValue = DOMSelectors.imageInput.value;

    const newDiv = document.createElement("div");
    newDiv.classList.add("inputorganizer", "stuffcontainer");

    newDiv.innerHTML = `    
    <img src="${imageValue}" alt="${itemValue}">
    <h3>Item: ${itemValue}</h3>
    <h3>Type: ${typeValue}</h3>

`;
    DOMSelectors.stuffContainer.appendChild(newDiv);

    DOMSelectors.itemInput.value = "";
    DOMSelectors.typeInput.value = "";
    DOMSelectors.imageInput.value = "";
  });
});
