// Navbar JS

const navContainer = document.querySelector("#nav-container");
navContainer.insertAdjacentHTML(
  "afterbegin",
  `
      <section id="navbar">
        <nav>
          <div class="logo">
            <a href="index.html">
              <img src="assets/shared/logo.svg" alt="Website Logo" />
            </a>
          </div>
          <div>
            <img
              class="nav-toggler"
              src="assets/shared/icon-hamburger.svg"
              alt="Hamburger Icon"
            />
          </div>
          <ul class="nav-links">
            <li class="home-nav-btn nav-active">
              <a href="index.html">00 Home</a>
            </li>
            <li class="destination-nav-btn">
              <a href="destination.html">01 Destination</a>
            </li>
            <li class="crew-nav-btn"><a href="crew.html">02 Crew</a></li>
            <li class="technology-nav-btn">
              <a href="technology.html">03 Technology</a>
            </li>
          </ul>
        </nav>
      </section>
  `
);

const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");
let isHamburgerIcon = true;
const toggle = () => {
  navLinks.classList.toggle("nav-link-active");
  navToggler.src = isHamburgerIcon
    ? "assets/shared/icon-close.svg"
    : "assets/shared/icon-hamburger.svg";
  isHamburgerIcon = !isHamburgerIcon;
};

navToggler.addEventListener("click", toggle);
