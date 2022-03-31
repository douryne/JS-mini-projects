const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.style.background = randomBg();
});

function randomBg() {
  return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
}