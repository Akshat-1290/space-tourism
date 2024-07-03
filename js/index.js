// Functions For Both destination and crew page
let pathname = window.location.pathname;

// Regex pattern to extract the page name
let currentPage = pathname.match(/\/([^\/]+)\.html?$/)[1];

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

// Changing Crew Item After every 6 seconds

let itemIndex = 2;

const crewCarousel = setInterval(() => {
  const itemData = data.find((item) => item.index === itemIndex);
  insertCrewData(itemData);
  changeActiveList(itemIndex, activeClass, activeList);
  itemIndex = itemIndex === 4 ? 1 : itemIndex + 1;
}, 6000);

currentPage !== "crew" ? clearInterval(crewCarousel) : null;

// Tech Page JS

const techName = document.querySelector(".tech-name");
const techDesc = document.querySelector(".tech-desc");
const techImagePortrait = document.querySelector(".portrait");
const techImageLandscape = document.querySelector(".landscape");

const insertTechData = ({ imagePortrait, imageLandscape, name, desc }) => {
  techImagePortrait.src = imagePortrait;
  techImageLandscape.src = imageLandscape;
  techName.textContent = name;
  techDesc.textContent = desc;
};

// Attaching Event Listener
const activeList = document.querySelectorAll(`.${currentPage}-list li`);
let activeClass = "";
let insertFunction;
switch (currentPage) {
  case "destination":
    activeClass = "active-planet";
    insertFunction = insertPlanetData;
    break;
  case "crew":
    activeClass = "active-crew";
    insertFunction = insertCrewData;
    break;
  case "technology":
    activeClass = "active-tech";
    insertFunction = insertTechData;
    break;
}
attachEventHandler(activeList, activeClass, insertFunction);
