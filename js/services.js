var dark = document.body;
var font = qur("p");
var lick = document.querySelector(".navbar__right--darkmode");
var item = qur(".services__item ");
var fonth4 = qur("h4");
var fonth3 = document.querySelector("h3");
var fonta = qur("h4>a");
var from = qur(".search__input");
var fottera = qur(".footer__social>a ");
var navBarIcon = document.querySelector("#darkLight");
//blog
var blog = qur(".blog");
var blogcard1 = qur(".blog__card-bottom>a");
var blogcard2 = qur(".footer-meta>a");
var blogcard3 = qur(".read");
var slidebar1 = qur(".blog__sideBar-widget");
var slidebar2 = qur(".sideBar__title>h3");
var slidebar3 = qur(".blog-title>a");
var slidebar4 = qur(".pos-info");
var slidebar5 = qur(".blog__cat>li>a");
var slidebar6 = qur("a.page__number");
var t = qur("h3.sideBar__title");

//contact
var input = qur(".form-control");
var maph1 = qur("h3.cont-title2");
var maph2 = qur(".cont-right>h5");
var maph3 = qur(".cont-right>p>a");
var maph4 = qur(".map-iframe");
// iconheader
var iconheader = document.querySelector(".search__icon");

var fonthh3 = document.querySelector("h3.services__header-title2");

lick.onclick = function () {
  iconheader.classList.toggle("dark-modeh");
  //contact
  for (let i = 0; i < maph4.length; i++) {
    maph4[i].classList.toggle("dark-modep");
  }
  for (let i = 0; i < maph1.length; i++) {
    maph1[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < input.length; i++) {
    input[i].classList.toggle("dark-mode1");
  }
  for (let i = 0; i < maph2.length; i++) {
    maph2[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < maph3.length; i++) {
    maph3[i].classList.toggle("dark-modep");
  }
  //service

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
  //blog
  for (let i = 0; i < blog.length; i++) {
    blog[i].classList.toggle("dark-mode1");
  }
  for (let i = 0; i < t.length; i++) {
    t[i].classList.toggle("dark-mode1");
  }

  for (let i = 0; i < blogcard1.length; i++) {
    blogcard1[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < blogcard2.length; i++) {
    blogcard2[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < blogcard3.length; i++) {
    blogcard3[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < slidebar1.length; i++) {
    slidebar1[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < slidebar2.length; i++) {
    slidebar2[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < slidebar3.length; i++) {
    slidebar3[i].classList.toggle("dark-modeh");
  }
  for (let i = 0; i < slidebar4.length; i++) {
    slidebar4[i].classList.toggle("dark-modep");
  }
  for (let i = 0; i < slidebar5.length; i++) {
    slidebar5[i].classList.toggle("dark-modep");
  }
  for (let i = 0; i < slidebar6.length; i++) {
    slidebar6[i].classList.toggle("dark-mode1");
  }
  navBarIcon.classList.toggle("fa-sun");
  navBarIcon.classList.toggle("fa-moon");
  fonthh3.classList.toggle("dark-modeh");
};
function qur(ele) {
  return document.querySelectorAll(ele);
}
