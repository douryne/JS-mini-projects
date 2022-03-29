const btn = document.getElementById("btn");
const background = document.getElementById("background");
const popup = document.querySelector(".popup");

btn.addEventListener("click", (e) => {
  background.classList.toggle("active");
  popup.classList.toggle("active");

})

background.addEventListener("click", () => {
  popup.classList.toggle("active")
  background.classList.toggle("active");
})
