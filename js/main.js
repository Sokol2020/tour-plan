$(document).ready(function () {
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

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }


  //Обработка форм
  $(".form").each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least two letters",
      },
      email: {
        required: "We need your email address to contact",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "We need your phone",
      },
    },
  });    
  });

  $(".subscribe").each(function(){
    $(this).validate({
    errorClass: "error",
    messages: {
      mail: {
        required: "We need your email to contact",
        mail: "Please enter a valid email address.",
      },
    },
  });    
  });
  AOS.init();
});