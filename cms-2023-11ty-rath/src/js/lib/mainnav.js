export function init() {}

const nav = document.querySelector("#mainnav");
const list = nav.querySelector("ul");
const links = nav.querySelectorAll("ul a");
const burgerClone = document
  .querySelector("#burger-template")
  .content.cloneNode(true);
const button = burgerClone.querySelector("button");

// Function to set aria-expanded attribute based on window width
function setAriaExpandedAttribute() {
  if (window.innerWidth >= 600) {
    button.setAttribute("aria-expanded", true);
  } else {
    button.setAttribute("aria-expanded", false);
  }
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    button.setAttribute("aria-expanded", "false");
  });
});

// Initial setup when the page loads
setAriaExpandedAttribute();

// Toggle aria-expanded attribute on button click
button.addEventListener("click", (e) => {
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isOpen);
});

// Hide list on keydown Escape
nav.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    button.setAttribute("aria-expanded", false);
  }
});

// Add the button to the page
nav.insertBefore(burgerClone, list);

// Update aria-expanded attribute when the window is resized
window.addEventListener("resize", setAriaExpandedAttribute);
