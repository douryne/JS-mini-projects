function createHeart() {
  const heart = document.createElement("div");
  document.body.appendChild(heart);
  heart.classList.add("heart");

  heart.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
  heart.style.animationDuration = `${Math.random() * 2 + 2}s`
  heart.style.fontSize = `${Math.random() + 1}rem`
  
  heart.innerText = "🤍";

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 200);

