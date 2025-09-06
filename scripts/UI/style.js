const burgerMenu = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");
const body = document.querySelector("body");
burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!mobileNav.classList.contains("right-0")) {
    mobileNav.classList.remove("-right-[400px]");
    mobileNav.classList.add("right-0");
  } else {
    mobileNav.classList.remove("right-0");
    mobileNav.classList.add("-right-[400px]");
  }
});
body.addEventListener("click", () => {
  mobileNav.classList.remove("right-0");
  mobileNav.classList.add("-right-[400px]");
});
