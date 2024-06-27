// Navbar JS

const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");
let isHamburgerIcon = true;
const toggle = () => {
  navLinks.classList.toggle("nav-link-active");
  navToggler.src = isHamburgerIcon ? "assets/shared/icon-close.svg" : "assets/shared/icon-hamburger.svg";
  isHamburgerIcon=!isHamburgerIcon
};

navToggler.addEventListener("click", toggle);
