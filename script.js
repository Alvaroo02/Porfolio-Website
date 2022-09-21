let button = document.querySelector("button");
let cara = document.getElementById("cara");

button.addEventListener("click", function() {
    cara.style.display = "block";
    cara.style.cursor = "pointer";
})

cara.addEventListener("click", function() {
    cara.style.display = "none";
})