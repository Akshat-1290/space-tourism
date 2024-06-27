// Navbar JS

const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");
const isHamburgerIcon = true;
const toggle = () => {
  navLinks.classList.toggle("nav-link-active" , isHamburgerIcon);
 currentNavIcon.src = isHamburgerIcon ? "assets/shared/icon-close.svg" : "assets/shared/icon-hamburger.svg";
};

navToggler.addEventListener("click", toggle);
