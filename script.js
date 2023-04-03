const canvas = document.getElementById("matrix-canvas");
const context = canvas.getContext("2d");

// Set the canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the characters to be used in the matrix animation
const characters = "F5";

// Set the font style and size for the characters
context.font = "20px Courier";

// Set the number of columns and rows for the matrix animation
const columns = canvas.width / 20;
const rows = canvas.height / 20;

// Create an array of columns for the matrix animation
const drops = [];

// Initialize each column with a random starting position
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height);
}

// Function to draw the matrix animation
function draw() {
  // Set the background color for the canvas
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Loop through each column and draw the characters
  for (let i = 0; i < drops.length; i++) {
    // Set a random character to be drawn
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Set the color for the character
    context.fillStyle = "#0F0";

    // Draw the character at the current position in the column
    context.fillText(character, i * 20, drops[i]);

    // Reset the position for the column if it has reached the bottom of the canvas
    if (drops[i] > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Increment the position for the column
    drops[i]++;
  }
}

// Set the animation interval
setInterval(draw, 35);


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
