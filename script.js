//your JS code here. If required.
const board = document.getElementById("board");
const numSquares = 800;

// Random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create squares
for (let i = 0; i < numSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;

    setTimeout(() => {
      square.style.backgroundColor = "#e0e0e0";
    }, 1000); // Revert after 1 second
  });

  board.appendChild(square);
}
