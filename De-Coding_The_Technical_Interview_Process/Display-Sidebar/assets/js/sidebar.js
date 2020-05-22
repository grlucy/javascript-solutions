const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const nav = document.getElementById("sidebar");

showBtn.onclick = () => {
  showBtn.classList.toggle("hidden");
  nav.style.left = "0";
};

hideBtn.onclick = () => {
  showBtn.classList.toggle("hidden");
  nav.style.left = "-240px";
};
