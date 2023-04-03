const header = document.querySelector("header");
const bars = document.querySelector("header .bars");

// EVENT LISTENERS

// Toggle Menu
bars.addEventListener("click", () => {
  toggleMenu();
});

// FUNCTIONS

// Toggle Menu

const toggleMenu = () => {
  header.classList.toggle("show-nav");
};
