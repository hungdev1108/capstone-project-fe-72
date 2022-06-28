// counter up
$(".counter-num").countUp();

// Magnific Popup
$(document).ready(function () {
  $(".videoplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1", //
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },
      },

      srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
  });
});

// OwlCarousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

// Show and hide menu
function showMenu() {
  var test = document.querySelector(".menu__overlay");
  if ((test.style.display = "none")) {
    test.style.display = "block";
  }
}

function closeMenu() {
  var test = document.querySelector(".menu__overlay");
  if ((test.style.display = "block")) {
    test.style.display = "none";
  }
}

// backToTop hide and show (Tham khao W3School)
var backToTop = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// Function scrollFunction handle
function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Darkmode features
function darkmode() {
  var bgBodyDark = document.getElementsByTagName("body")[0];
  var navBarIcon = document.querySelector("#darkLight");

  //   ===== Home Page =====
  var bannerHome = document.querySelector(".banner-home");
  var aboutUsSection = document.querySelector(".aboutUs");
  var bookingSection = document.querySelector(".booking");
  var categoriesSection = document.querySelector(".categories");
  var servicesSection = document.querySelector(".services");
  var statsSection = document.querySelector(".stats");
  var blogSection = document.querySelector(".blog");
  var testimonialsSection = document.querySelector(".testimonials");

  // ===== About =====
  var ourTeam = document.querySelector(".ourteam");

  // ===== Contact =====
  var contact = document.querySelector(".contact");

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

  // Banner home
  if (bannerHome.className == "banner-home") {
    bannerHome.classList.toggle("banner-home-darkmode");
  } else {
    bannerHome.classList.remove("banner-home-darkmode");
  }

  // About Section
  if (aboutUsSection.className == "aboutUs") {
    aboutUsSection.classList.toggle("aboutUs-darkmode");
  } else {
    aboutUsSection.classList.remove("aboutUs-darkmode");
  }

  // Booking Section
  if (bookingSection.className == "booking") {
    bookingSection.classList.toggle("booking-darkmode");
  } else {
    bookingSection.classList.remove("booking-darkmode");
  }

  // Categories Section
  if (categoriesSection.className == "categories") {
    categoriesSection.classList.toggle("categories-darkmode");
  } else {
    categoriesSection.classList.remove("categories-darkmode");
  }

  // Services Section
  if (servicesSection.className == "services") {
    servicesSection.classList.toggle("services-darkmode");
  } else {
    servicesSection.classList.remove("services-darkmode");
  }

  // Stats Section
  if (statsSection.className == "stats") {
    statsSection.classList.toggle("stats-darkmode");
  } else {
    statsSection.classList.remove("stats-darkmode");
  }

  // Blog Section
  if (blogSection.className == "blog") {
    blogSection.classList.toggle("blog-darkmode");
  } else {
    blogSection.classList.remove("blog-darkmode");
  }

  // Testimonials Section
  if (testimonialsSection.className == "testimonials") {
    testimonialsSection.classList.toggle("testimonials-darkmode");
  } else {
    testimonialsSection.classList.remove("testimonials-darkmode");
  }
  //   ===== Home Page =====

  // === Footer ===
  // Footer
  if (footer.className == "footer") {
    footer.classList.toggle("footer-darkmode");
  } else {
    footer.classList.remove("footer-darkmode");
  }

  // === About page ===
  // Ourteam
  if (ourTeam.className == "ourteam") {
    ourTeam.classList.toggle("ourteam-darkmode");
  } else {
    ourTeam.classList.remove("ourteam-darkmode");
  }

  // === Contact page ===
  // Contact
  if (contact.className == "contact") {
    contact.classList.toggle("contact-darkmode");
  } else {
    contact.classList.remove("contact-darkmode");
  }
}
