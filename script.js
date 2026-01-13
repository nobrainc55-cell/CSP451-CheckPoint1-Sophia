// script.js - simple demo for CSP451 CheckPoint1 - Sophia
// Requirements satisfied:
// - console.log() statements
// - function definitions
// - function calls

console.log("script.js loaded.");

/**
 * displayWelcome
 * - Logs a message
 * - Adds a small timestamp element under the header title (if present)
 */
function displayWelcome() {
  console.log("displayWelcome() called.");
  try {
    const header = document.querySelector("header");
    if (!header) {
      console.log("No <header> element found — skipping DOM update.");
      return;
    }

    const info = document.createElement("p");
    info.textContent = `Page loaded on ${new Date().toLocaleString()}`;
    info.style.margin = "0.25rem 0 0 0";
    info.style.fontSize = "0.9rem";
    info.style.opacity = "0.9";
    info.className = "load-info";

    // Avoid adding multiple timestamps if the function is called again
    const existing = header.querySelector(".load-info");
    if (existing) existing.remove();

    header.appendChild(info);
  } catch (err) {
    console.error("Error in displayWelcome():", err);
  }
}

/**
 * toggleTheme
 * - Toggles a "dark-mode" class on <body> to demonstrate interactivity.
 * - This is optional: add corresponding CSS if you want visible styling changes.
 */
function toggleTheme() {
  console.log("toggleTheme() called.");
  document.body.classList.toggle("dark-mode");
}

/* Run when DOM is ready */
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired.");
  displayWelcome();

  // Add a small interactive hint: clicking the header toggles the theme.
  const header = document.querySelector("header");
  if (header) {
    header.style.cursor = "pointer";
    header.title = "Click to toggle theme (demo)";
    header.addEventListener("click", () => {
      console.log("Header clicked.");
      toggleTheme();
    });
  }
});

// Added console message for assignment commit
console.log("Footer loaded successfully");

