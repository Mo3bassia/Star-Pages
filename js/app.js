AOS.init();

let navbar = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY > 300) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
