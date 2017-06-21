var nav = document.querySelector(".nav");
var logo = document.querySelector(".main-nav__logo");
var btn = document.querySelector(".toggler__btn");


btn.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.toggle("nav--hidden");
    logo.classList.toggle("main-nav__logo--top-state");
    btn.classList.toggle("toggler__btn--opened");
});
