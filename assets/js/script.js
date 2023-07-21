// Utility functions to create and fetch DOM elements
const createDOMElement = (type, properties = {}, ...classList) => {
  // Create a certain DOM element
  const element = document.createElement(type);
  // Assigns its properties to the element
  for (const [key, value] of Object.entries(properties)) {
    element[key] = value;
  }
  // Adds the necessary classes to the element
  element.classList.add(...classList);
  return element;
};

// fetch data and sends them back in json format
const fetchAndParseJSON = async (path) => {
  const response = await fetch(path);
  return await response.json();
};

// Function to create project cards
const createProjectCards = async () => {
  const projects = await fetchAndParseJSON("./assets/js/projects.json");
  const projectsContainer = document.querySelector(".projects-container");

  projects
    .slice()
    .reverse()
    .forEach((project) => {
      const projectContainer = createDOMElement(
        "div",
        {},
        "project-container",
        "project-card",
        "animate__animated",
        "animate__fadeInRight"
      );
      const imageElement = createDOMElement(
        "img",
        { src: project.image, alt: "Project screenshot", loading: "lazy" },
        "project-pic"
      );
      const titleElement = createDOMElement(
        "h3",
        { innerText: project.id },
        "project-title"
      );
      const descriptionElement = createDOMElement(
        "p",
        { innerText: project.description },
        "project-details"
      );
      const urlElement = createDOMElement(
        "a",
        { innerText: "Check it Out", href: project.url, target: "_blank" },
        "project-link"
      );
      projectContainer.append(
        imageElement,
        titleElement,
        descriptionElement,
        urlElement
      );
      projectsContainer.appendChild(projectContainer);
    });
};

// Function to create skill cards
const createSkillCards = async () => {
  const skills = await fetchAndParseJSON("./assets/js/skills.json");
  const skillsContainer = document.querySelector(".skills-wrapper");

  skills.forEach((skill) => {
    const skillCard = createDOMElement(
      "img",
      { src: skill.src, alt: skill.alt },
      "animate__animated",
      "animate__pulse-card",
      "icon",
      "icon-card"
    );
    skillsContainer.appendChild(skillCard);
  });
};

// Event handlers for scroll to top and hamburger menu
const setupEventHandlers = () => {
  document.querySelector("#scroll-up").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  burger.addEventListener("click", () => ul.classList.toggle("show"));

  document
    .querySelectorAll(".nav-link")
    .forEach((link) =>
      link.addEventListener("click", () => ul.classList.remove("show"))
    );
};

// Functions and event handlers for light/dark theme
const setupThemeSwitcher = () => {
  const body = document.body;
  const btnToggle = document.querySelector(".toggle-label");

  const setThemeProperties = (bgColor, primaryColor, cardColor) => {
    document.documentElement.style.setProperty("--bg-color", bgColor);
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty("--card-color", cardColor);
  };

  const toggleLightMode = () => {
    localStorage.setItem("darkMode", "light");
    body.classList.replace("dark", "light");
    setThemeProperties("#fcfcfc", "#000000", "#fcfcfc");
  };

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", "dark");
    body.classList.replace("light", "dark");
    setThemeProperties("#000000", "#fcfcfc", "#474747");
  };

  let storageValue = window.localStorage.getItem("darkMode") || "light";
  storageValue === "light" ? toggleLightMode() : toggleDarkMode();

  btnToggle.addEventListener("click", () => {
    body.classList.contains("dark") ? toggleLightMode() : toggleDarkMode();
  });
};

// Main function
const main = async () => {
  await Promise.all([createProjectCards(), createSkillCards()]);
  setupEventHandlers();
  setupThemeSwitcher();
};

// Run main function
main();
