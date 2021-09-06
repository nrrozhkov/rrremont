const closeButton = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");
const openButton = document.querySelector(".page-header__inner-button")

closeButton.addEventListener("click", function () {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
});

openButton.addEventListener('click', function () {
  mainNav.classList.remove("main-nav--closed");
  mainNav.classList.add("main-nav--opened");
})
