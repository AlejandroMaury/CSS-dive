let box = document.querySelector("div"),
    input = document.querySelector("input");

input.addEventListener("input", () => {
    box.style.background = input.value;
    box.style.borderRadius = input.value;
})