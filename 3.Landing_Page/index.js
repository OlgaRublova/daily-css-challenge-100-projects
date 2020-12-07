const toggleMenu = document.querySelector(".toggle");
const section = document.querySelector("section");



toggleMenu.addEventListener("click", menuToggle);

function menuToggle() {
    toggleMenu.classList.toggle("active");
    section.classList.toggle("active");
    console.log("test");
}