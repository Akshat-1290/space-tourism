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
            <li class="home-nav">
              <a href="index.html">00 Home</a>
            </li>
            <li class="destination-nav">
              <a href="destination.html">01 Destination</a>
            </li>
            <li class="crew-nav"><a href="crew.html">02 Crew</a></li>
            <li class="technology-nav">
              <a href="technology.html">03 Technology</a>
            </li>
          </ul>
        </nav>
      </section>
  `
);
const activePage = navContainer.dataset.activepage;
document.querySelector(`.${activePage}-nav`).classList.add("nav-active");

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

// Destination Page JS
const planetImage = document.querySelector(".planet-image");
const planetName = document.querySelector(".planet-name");
const planetDesc = document.querySelector(".planet-desc");
const planetDistance = document.querySelector(".planet-distance");
const planetTravelTime = document.querySelector(".planet-travel-time");
const planetList = document.querySelectorAll(".planet-list li");

const getData = async (file, index) => {
  const response = await fetch(`data/${file}.json`);
  const data = await response.json();
  return data.destinations.find(
    (item) => item.index === Number.parseInt(index)
  );
};

const insertPlanetData = (data) => {
  planetImage.src = data.image;
  planetName.textContent = data.name;
  planetDesc.textContent = data.description;
  planetDistance.textContent = data.distance;
  planetTravelTime.textContent = data.travelTime;
};

const changeActiveList = (index, activeClass) => {
  planetList.forEach((e) => {
    e.dataset.index === index
      ? e.classList.add(`${activeClass}`)
      : e.classList.remove(`${activeClass}`);
  });
};

planetList.forEach((e) => {
  e.addEventListener("click", () => {
    getData("destination", e.dataset.index).then((data) => {
      insertPlanetData(data);
      changeActiveList(e.dataset.index, "active-planet");
    });
  });
});
