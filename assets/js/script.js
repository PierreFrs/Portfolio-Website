// Automated project cards
// Projects import from objects.json
const projectsResponse = await fetch('./assets/js/projects.json');
const projects = await projectsResponse.json();

// Automated projects cards loop
for (let i = 0; i < projects.length; i++) {
  // Creates DOM elements
  const project = projects[i];

  const projectsContainer = document.querySelector('.projects-container');

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  projectContainer.classList.add('project-card');
  projectContainer.classList.add('animate__animated');
  projectContainer.classList.add('animate__fadeInRight');

  const imageElement = document.createElement('img');
  imageElement.src = project.image;
  imageElement.alt = 'Project screenshot';
  imageElement.loading = 'lazy';
  imageElement.classList.add('project-pic');
  const titleElement = document.createElement('h3');
  titleElement.innerText = project.id;
  titleElement.classList.add('project-title');
  const descriptionElement = document.createElement('p');
  descriptionElement.innerText = project.description;
  descriptionElement.classList.add('project-details');
  const urlElement = document.createElement('a');
  urlElement.innerText = 'Check it Out'
  urlElement.href = project.url;
  urlElement.target = '_blank';
  urlElement.classList.add('project-link');

  // Appending created elements to the projects div
  projectsContainer.appendChild(projectContainer);
  projectContainer.appendChild(imageElement);
  projectContainer.appendChild(titleElement);
  projectContainer.appendChild(descriptionElement);
  projectContainer.appendChild(urlElement);
}

// Automated skill cards
// Skill cards import from skills.json
const skillsResponse = await fetch('./assets/js/skills.json');
const skills = await skillsResponse.json();

// Automated skills cards loop
for (let i = 0; i < skills.length; i++) {
// Creates DOM elements
const skill = skills[i];

const skillsContainer = document.querySelector('.skills-wrapper');

const skillCard = document.createElement('img');
skillCard.classList.add('animate__animated');
skillCard.classList.add('animate__pulse-card');
skillCard.classList.add('icon');
skillCard.classList.add('icon-card');
skillCard.src = skill.src;
skillCard.alt = skill.alt;

// Appending created elements to the projects div
skillsContainer.appendChild(skillCard);
}


// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  // Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


// Light/dark theme
const btnToggle = document.querySelector('.toggle-label');
const toggleSwitch = window.getComputedStyle(btnToggle, ":after")
const btnInput = document.querySelector('.toggle-input');
const body = document.body;

// Function to set light mode
const toggleLightMode = () => {
  localStorage.setItem("darkMode", "light");
  body.classList.add('light');
  body.classList.remove('dark');
  document.documentElement.style.setProperty('--bg-color', '#fcfcfc');
  document.documentElement.style.setProperty('--primary-color', '#000000');
  document.documentElement.style.setProperty('--card-color', '#fcfcfc');
} 

// Function to toggle darkMode
const toggleDarkMode = () => {
  localStorage.setItem("darkMode", "dark");
  body.classList.add('dark');
  body.classList.remove('light');
  document.documentElement.style.setProperty('--bg-color', '#000000');
  document.documentElement.style.setProperty('--primary-color', '#fcfcfc');
  document.documentElement.style.setProperty('--card-color', '#474747');
}

// reset light/dark class when reloading
let storageValue = window.localStorage.getItem("darkMode");
if (!storageValue) {
  localStorage.setItem("darkMode", "light");
} else if (storageValue === "light") {
  toggleLightMode();
} else if (storageValue === "dark") {
  toggleDarkMode();
}

// dark/light mode switch event listener
btnToggle.addEventListener('click', () => {
  if (body.classList.contains("dark")) {
    toggleLightMode();
  } else {
    toggleDarkMode()
  }
})

