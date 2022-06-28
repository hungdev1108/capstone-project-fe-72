// Dark mode About page
function darkmode() {
  var bgBodyDark = document.getElementsByTagName("body")[0];
  var navBarIcon = document.querySelector("#darkLight");

  // ===== Footer =====
  var footer = document.querySelector(".footer");

  // Change icon moon - sun
  if (navBarIcon.className == "fa-solid fa-moon") {
    navBarIcon.className = "fa-solid fa-sun";
    bgBodyDark.style.backgroundColor = "#232220";
  } else {
    navBarIcon.className = "fa-solid fa-moon";
    bgBodyDark.style.backgroundColor = "white";
  }

  // ===== 404 Page =====
  var bannerSubsite = document.querySelector(".banner-subsite");
  var pageNotFound = document.querySelector(".pagenotfound");

  // Banner Subsite
  if (bannerSubsite.className == "banner-subsite") {
    bannerSubsite.classList.toggle("banner-subsite-darkmodee");
  } else {
    bannerSubsite.classList.remove("banner-subsite-darkmodee");
  }

  // pageNotFound
  if (pageNotFound.className == "pagenotfound") {
    pageNotFound.classList.toggle("pagenotfound-darkmode");
  } else {
    pageNotFound.classList.remove("pagenotfound-darkmode");
  }

  // === Footer ===
  // Footer
  if (footer.className == "footer") {
    footer.classList.toggle("footer-darkmode");
  } else {
    footer.classList.remove("footer-darkmode");
  }
}
