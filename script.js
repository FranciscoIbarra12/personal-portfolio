const button = document.querySelector("#fact-button");
const fact = document.querySelector("#fun-fact");
const imageButton = document.querySelector("#image-toggle");
const image = document.querySelector("img");

button.addEventListener('click', function() {
    fact.hidden = !fact.hidden;
});

imageButton.addEventListener('click', function() {
    image.hidden = !image.hidden;
    imageButton.textContent = image.hidden ? "Show image" : "Hide image";
});