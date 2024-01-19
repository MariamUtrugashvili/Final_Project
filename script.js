let burger = document.querySelector(".menuIcon");
let xmark = document.querySelector(".xLogo");
let mobileMenu = document.querySelector(".headerList");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  xmark.style.display = "block";
  burger.style.display = "none";
});

xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  xmark.style.display = "none";
  burger.style.display = "block";
});