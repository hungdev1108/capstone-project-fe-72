var dark = document.body;
var font = document.querySelectorAll("p");
var lick = document.querySelector(".navbar__right--darkmode");
var item = document.querySelectorAll(".services__item ");
var fonth4 = document.querySelectorAll("h4");
var fonth3 = document.querySelector("h3");
var fonta = document.querySelectorAll("h4>a");
var from = document.querySelectorAll(".search__input");
var fottera = document.querySelectorAll(".footer__social>a ");
lick.onclick = function () {
  lick.classList.toggle("active");
  dark.classList.toggle("dark-mode");
  fonth3.classList.toggle("dark-modeh");

  for (let i = 0; i < font.length; i++) {
    font[i].classList.toggle("dark-modep");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < fonth4.length; i++) {
    fonth4[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < fonta.length; i++) {
    fonta[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < fottera.length; i++) {
    fottera[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < from.length; i++) {
    from[i].classList.toggle("dark-mode");
  }
};
