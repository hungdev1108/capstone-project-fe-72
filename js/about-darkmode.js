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

  // ===== About Page =====
  var bannerSubsite = document.querySelector(".banner-subsite");
  var story = document.querySelector(".story");
  var skills = document.querySelector(".skills");
  var ourTeam = document.querySelector(".ourteam");

  // Banner Subsite
  if (bannerSubsite.className == "banner-subsite") {
    bannerSubsite.classList.toggle("banner-subsite-darkmodee");
  } else {
    bannerSubsite.classList.remove("banner-subsite-darkmodee");
  }

  // Story
  if (story.className == "story") {
    story.classList.toggle("story-darkmode");
  } else {
    story.classList.remove("story-darkmode");
  }

  // Skills
  if (skills.className == "skills") {
    skills.classList.toggle("skills-darkmode");
  } else {
    skills.classList.remove("skills-darkmode");
  }

  // Ourteam
  if (ourTeam.className == "ourteam") {
    ourTeam.classList.toggle("ourteam-darkmode");
  } else {
    ourTeam.classList.remove("ourteam-darkmode");
  }

  // === Footer ===
  // Footer
  if (footer.className == "footer") {
    footer.classList.toggle("footer-darkmode");
  } else {
    footer.classList.remove("footer-darkmode");
  }
}
