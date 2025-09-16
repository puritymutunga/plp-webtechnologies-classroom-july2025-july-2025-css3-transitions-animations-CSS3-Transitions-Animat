/* ================================
   Part 2: Functions, Scope, Parameters & Returns
================================ */

// Global variable
let clickCount = 0;

/**
 * Function with parameters & return value
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} sum of a and b
 */
function addNumbers(a, b) {
  return a + b; // return value
}

/**
 * Function demonstrating local vs global scope
 */
function incrementClicks() {
  let localMessage = "You clicked the box button!";
  clickCount++; // modifies global variable
  console.log(localMessage, "Total:", clickCount);
}

// Reusable function to toggle a CSS class
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

/* ================================
   Part 3: Combining CSS + JS
================================ */
const box = document.getElementById("box");
const triggerBox = document.getElementById("triggerBox");
const triggerModal = document.getElementById("triggerModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Trigger box animation
triggerBox.addEventListener("click", () => {
  toggleAnimation(box, "animate");
  incrementClicks();
  console.log("Sum Example:", addNumbers(2, 3)); // Shows function return value
});

// Open modal
triggerModal.addEventListener("click", () => {
  modal.classList.add("show");
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
