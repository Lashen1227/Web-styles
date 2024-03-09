// colour button code
// Get the button element
const button = document.getElementById("colorButton");

// Add event listener for click event
button.addEventListener("click", function() {
  // Change button background color to red
  button.style.backgroundColor = "red";

  // Change button text color to white
  button.style.color = "white";
});