// custom.js

// Test function: show an alert when the page loads
function testBootstrapJS() {
  console.log("Custom JS is loaded!");
  const testDiv = document.createElement("div");
  testDiv.textContent = "✅ Custom JS is working!";
  testDiv.style.padding = "1rem";
  testDiv.style.backgroundColor = "#A43240"; // Sonnaz-Red
  testDiv.style.color = "#ffffff";
  testDiv.style.margin = "1rem 0";
  testDiv.style.borderRadius = "5px";
  document.body.prepend(testDiv);
}

// Run the test function after DOM is loaded
document.addEventListener("DOMContentLoaded", testBootstrapJS);
