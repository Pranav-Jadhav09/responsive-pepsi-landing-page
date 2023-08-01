"use strict";

// function to change src of hero-image onclick
function imgSlider(anything) {
  document.querySelector(".pepsi").src = anything;
}

// function to change color of background onclicking
function changeColor(color) {
  const main = document.querySelector("main");
  main.style.backgroundColor = color;
}

// navigation for mobile
function menuToggle() {
  const toggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");

  toggle.classList.toggle("active");
  navigation.classList.toggle("nav-active");
}
