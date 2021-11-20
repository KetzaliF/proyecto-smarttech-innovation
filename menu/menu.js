const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
   menu.classList.toggle('bi-x');
   navbar.classList.toggle('active');
})