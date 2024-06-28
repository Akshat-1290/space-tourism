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

// Functions For Both destination and crew page

let currentPage = window.location.pathname.split("/")[1].split(".")[0]; // EXtracting path from /path.html
const data = [];

const getData = async () => {
  const response = await fetch(`data/spaceData.json`);
  const fetchedData = await response.json();
  data.push(...fetchedData[`${currentPage}`]);
};
getData();

const changeActiveList = (index, activeClass, list) => {
  list.forEach((e) => {
    Number.parseInt(e.dataset.index) === index
      ? e.classList.add(`${activeClass}`)
      : e.classList.remove(`${activeClass}`);
  });
};

const attachEventHandler = (list, activeClass, insertFunction) => {
  list.forEach((e) => {
    e.addEventListener("click", () => {
      const index = Number.parseInt(e.dataset.index);
      const filteredData = data.find((item) => item.index === index);
      insertFunction(filteredData);
      changeActiveList(index, activeClass, list);
    });
  });
};

// Destination Page JS
const planetImage = document.querySelector(".planet-image");
const planetName = document.querySelector(".planet-name");
const planetDesc = document.querySelector(".planet-desc");
const planetDistance = document.querySelector(".planet-distance");
const planetTravelTime = document.querySelector(".planet-travel-time");

const insertPlanetData = ({
  image,
  name,
  description,
  distance,
  travelTime,
}) => {
  planetImage.src = image;
  planetName.textContent = name;
  planetDesc.textContent = description;
  planetDistance.textContent = distance;
  planetTravelTime.textContent = travelTime;
};

// Crew Page JS

const crewImage = document.querySelector(".crew-image");
const crewPosition = document.querySelector(".position");
const crewName = document.querySelector(".crew-name");
const crewDesc = document.querySelector(".crew-desc");

const insertCrewData = ({ image, position, name, description }) => {
  crewImage.src = image;
  crewPosition.textContent = position;
  crewName.textContent = name;
  crewDesc.textContent = description;
};

// Attaching Event Listener
const activeList = document.querySelectorAll(`.${currentPage}-list li`);
const activeClass =
  currentPage === "destination" ? "active-planet" : "active-crew";
const insertFunction =
  currentPage === "destination" ? insertPlanetData : insertCrewData;
attachEventHandler(activeList, activeClass, insertFunction);

// Changing Crew Item After every 6 seconds

let itemIndex = 2;

const i = setInterval(() => {
  const itemData = data.find((item) => item.index === itemIndex);
  insertCrewData(itemData);
  changeActiveList(itemIndex, activeClass, activeList);
  itemIndex = itemIndex === 4 ? 1 : itemIndex + 1;
}, 4000);
