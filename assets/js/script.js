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
const btnInput = document.querySelector('.toggle-input');

btnToggle.addEventListener('click', () => {

  const body = document.body;

  const toggleLightMode = () => {
    if (body.classList.contains("dark")) {
    // Toggle light mode if body class = .dark
    body.classList.add('light');
    body.classList.remove('dark');
    document.documentElement.style.setProperty('--bg-color', '#fcfcfc');
    document.documentElement.style.setProperty('--primary-color', '#000000');
    document.documentElement.style.setProperty('--card-color', '#fcfcfc');
    
  } else if (body.classList.contains("light")) {
    // Toggle dark mode if body class = .light
    body.classList.add('dark');
    body.classList.remove('light');
    document.documentElement.style.setProperty('--bg-color', '#000000');
    document.documentElement.style.setProperty('--primary-color', '#fcfcfc');
    document.documentElement.style.setProperty('--card-color', '#474747');
  }
}
  toggleLightMode();
})

// reset light/dark class when reloading
