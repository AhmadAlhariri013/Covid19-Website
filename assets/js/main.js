"use strict";

/**
 * Add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Open and close the menu when click on the menu or close icon
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggeler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggeler.classList.toggle("active");
  document.body.classList.toggle("active");
};
addEventOnElem(navToggeler, "click", toggleNavbar);

/**
 *  close the menu when click on the nav link
 */

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggeler.classList.remove("active");
  document.body.classList.remove("active");
};
addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Active Header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTop = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTop.classList.add("active");
  } else {
    header.classList.remove("active");
    backTop.classList.remove("active");
  }
};
addEventOnElem(window, "scroll", activeElemOnScroll);
