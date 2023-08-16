$(document).ready(function () {
  /*====== SHOW & HIDE MENU ======*/
  $(".menu-show-hide-btn").click(function () {
    $("nav .main-menu").toggleClass("open-menu");
  });

  /*===== SCROLL BACK TO TOP BTN =====*/
  var mybutton = document.getElementById("scroll-up-btn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.opacity = "1";
    } else {
      mybutton.style.opacity = "0";
    }
  }
  mybutton.addEventListener("click", topFunction);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  /*===== MIXITUP =====*/
  var mixContainer = document.querySelector(".mix-container");
  var mixer = mixitup(mixContainer);
});

// Search Popup
const searchIcon = document.getElementById("searchIcon");
const closeIcon = document.getElementById("closeIcon");
const searchPopup = document.getElementById("searchPopup");

searchIcon.addEventListener("click", () => {
  searchPopup.classList.add("show");
  searchPopup.classList.add("show");
  searchIcon.classList.add("hide");
  closeIcon.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  searchPopup.classList.remove("show");
  searchIcon.classList.remove("show");
  searchIcon.classList.remove("hide");
  closeIcon.classList.remove("show");
});
