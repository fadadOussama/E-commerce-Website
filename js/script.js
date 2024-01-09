// Close & Open navbar
let btnOpen = document.querySelector(".nav-open-btn");
let btnClose = document.querySelector(".nav-close-btn");
let overlay = document.querySelector("[data-overlay]");
let navbar = document.querySelector("[data-navbar]");
let navbarLinks = document.querySelectorAll(".navbar-link");

btnOpen.addEventListener("click", () => {
  overlay.classList.add("active");
  navbar.classList.add("active");
});

btnClose.addEventListener("click", () => {
  overlay.classList.remove("active");
  navbar.classList.remove("active");
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    btnClose.click();
  });
});

// Header Sticky
let header = document.querySelector(".header-top");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (lastScroll >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScroll = window.scrollY;
});

/* Back to top button */

let btnTop = document.querySelector("[ data-back-top-btn]");

window.addEventListener("scroll", () => {
  this.scrollY > 50 ? btnTop.classList.add("active") : btnTop.classList.remove("active");
});

/* ScrollReveal */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.hero, .shop, .footer`);
sr.reveal(`.collection-card`, { interval: 300 });
sr.reveal(`.banner-card-1`, { origin: "left" });
sr.reveal(`.banner-card-2`, { origin: "right" });
sr.reveal(`.feature, .offer-banner, .blog`, { origin: "bottom" });
sr.reveal(`.offer-content`, { origin: "top" });
