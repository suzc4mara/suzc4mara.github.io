import PortfolioAnimation from "./PortfolioAnimation";

AOS.init();
PortfolioAnimation();

const themeToggler = document.querySelector("#theme");
const body = document.querySelector("body");

themeToggler.addEventListener("change", () => {
  body.classList.toggle("light-theme");
});

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("on");
  navList.classList.toggle("display");
});
