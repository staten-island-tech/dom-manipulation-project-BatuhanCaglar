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

    const itemValue = DOMSelectors.itemInput.value;
    const typeValue = DOMSelectors.typeInput.value;
    const imageValue = DOMSelectors.imageInput.value;

    const newDiv = document.createElement("div");
    newDiv.classList.add("inputorganizer", "stuffcontainer");

    newDiv.innerHTML = `
          <img src="${imageValue}" alt="${itemValue}" style="width: 300px; height: auto;">
          <h3>Item: ${itemValue}</h3>
          <h3>Type: ${typeValue}</h3>
      `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    newDiv.appendChild(removeButton);

    DOMSelectors.stuffContainer.appendChild(newDiv);

    DOMSelectors.itemInput.value = "";
    DOMSelectors.typeInput.value = "";
    DOMSelectors.imageInput.value = "";

    removeButton.addEventListener("click", function () {
      DOMSelectors.stuffContainer.removeChild(newDiv);
    });
  });
});
