// Navbar JS

const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");

const toggle = () => {
  navLinks.classList.toggle("nav-link-active");
  if (navToggler.src.includes("assets/shared/icon-hamburger.svg")) {
    navToggler.src = "assets/shared/icon-close.svg";
  } else {
    navToggler.src = "assets/shared/icon-hamburger.svg";
  }
};

navToggler.addEventListener("click", toggle);
