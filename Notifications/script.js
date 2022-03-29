const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const notif = document.createElement("div");
  notif.classList.add("notif", "created");
  notif.innerText = "Notification created!";
  container.appendChild(notif);

  setTimeout(() => {
    notif.classList.replace("created", "removed");
  }, 3000);
  setTimeout(() => {
    notif.remove();
  }, 3500);
});