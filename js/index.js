

const navToggle = document.querySelectorAll(".nav-toggle").length;
const navLinks = document.querySelectorAll(".nav__link")

for (var i = 0; i < navToggle; i++) {

  document.querySelectorAll(".nav-toggle")[i].addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open')
    });
  });






}
