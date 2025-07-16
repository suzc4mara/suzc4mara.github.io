import PortfolioAnimation from "./PortfolioAnimation";

AOS.init();
PortfolioAnimation();


const themeToggler = document.querySelector("#theme");
const body = document.querySelector("body");
const logoImg = document.getElementById("logo-img");

function updateLogo() {
  if (body.classList.contains("light-theme")) {
    logoImg.src = "./assets/svg/logo2-header.svg";
  } else {
    logoImg.src = "./assets/svg/logo1-header.svg";
  }
}

themeToggler.addEventListener("change", () => {
  body.classList.toggle("light-theme");
  updateLogo();
});

// Atualiza logo ao carregar
updateLogo();

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("on");
  navList.classList.toggle("display");
});
