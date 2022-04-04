const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.classList.toggle("dark");
});