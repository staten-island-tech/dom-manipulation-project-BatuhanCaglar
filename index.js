document.addEventListener("DOMContentLoaded", function() {
    const DOMSelectors = {
        form: document.querySelector("form"),
        itemInput: document.querySelector('input[name="item"]'),
        typeInput: document.querySelector('input[name="type"]'),
        imageInput: document.querySelector('input[name="image"]'),
        button: document.querySelector("button")
    };

    DOMSelectors.form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(DOMSelectors.itemInput.value); 
        console.log(DOMSelectors.typeInput.value);
        console.log(DOMSelectors.imageInput.value);
    });

    const itemValue = DOMSelectors.itemInput.value;
    const typeValue = DOMSelectors.typeInput.value;
    const imageValue = DOMSelectors.imageInput.value;
});