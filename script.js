const container = document.getElementById("board"); // or "container" depending on your HTML
const totalSquares = 800;

function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += hex[Math.floor(Math.random() * 16)];
  return color;
}

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.style.backgroundColor = "rgb(29, 29, 29)"; // ✅ Set default explicitly

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();

    setTimeout(() => {
      square.style.backgroundColor = "rgb(29, 29, 29)"; // ✅ Reset correctly
    }, 1000);
  });

  container.appendChild(square);
}
