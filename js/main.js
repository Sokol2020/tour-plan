var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

var mySwiper = new Swiper('.hotel-slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


var reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },
});

var mySwiper = new Swiper('.reviews-slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});



// ymaps.ready(init);
//    function init() {
//      var myMap = new ymaps.Map("map", {
 //       center: [27.8555, 34.313955],
 //       zoom: 17
 //     });
//    }



var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
  console.log("Клик");
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});
