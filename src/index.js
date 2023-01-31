import PortfolioAnimation from "./PortfolioAnimation";

AOS.init();
PortfolioAnimation();

const themeToggler = document.querySelector("#theme");
const body = document.querySelector("body");

themeToggler.addEventListener("change", () => {
  body.classList.toggle("light-theme");
});
