"use strict";

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector('.header--main');
  var headerFixed = document.querySelector('.header--fixed');

  if (scrolled >= 70) {
    headerFixed.classList.add('show');
    header.classList.remove('show');
  } else {
    header.classList.add('show');
    headerFixed.classList.remove('show');
  }
};

var menuToggle = document.querySelector('.toggle-menu');
var modal = document.querySelector('.modal');

menuToggle.addEventListener("click", function (e) {
  modal.classList.add('show');
});

var modalOpenButton = document.getElementById('openModal');
var modalCloseButton = document.getElementById('closeModal');

modalOpenButton.addEventListener("click", function (e) {
  modal.classList.add('show');
  modalOpenButton.classList.add('active');
});
modalCloseButton.addEventListener("click", function (e) {
  modal.classList.remove('show');
  modalOpenButton.classList.remove('active');
});

var mobileAnchors = [].slice.call(document.querySelectorAll('.modal-close-link'));
mobileAnchors.forEach(function (item) {
  item.addEventListener("click", function (e) {
    modal.classList.remove('show');
    modalOpenButton.classList.remove('active');
  });
});

document.addEventListener('keyup', function (event) {
  if (event.keyCode === 27) {
    modal.classList.remove('show');
    modalOpenButton.classList.remove('active');
  }
});

var mySwiper = new Swiper('#slider', {
  freeMode: true,
  slidesPerView: 'auto',
  observer: true,
  observeParents: true,
  grabCursor: true,
});

var mySwiperModal = new Swiper('#modal-slider', {
  freeMode: true,
  slidesPerView: 'auto',
  observer: true,
  observeParents: true,
  grabCursor: true,
});

// var leftArrow = document.getElementById("sliderLeftArrow");
// var rightArrow = document.getElementById("sliderRightArrow");

// if (leftArrow) {
//   leftArrow.addEventListener('mouseover', function (event) {
//     mySwiper["params"].autoplay.reverseDirection = true;
//     mySwiper["params"].autoplay.delay = 1000;
//     mySwiper["params"].autoplay.stopOnLastSlide = true;
//     mySwiper.slidePrev();
//     mySwiper.autoplay.start();
//   });
//   rightArrow.addEventListener('mouseover', function (event) {
//     mySwiper["params"].autoplay.reverseDirection = false;
//     mySwiper["params"].autoplay.delay = 1000;
//     mySwiper["params"].autoplay.stopOnLastSlide = true;
//     mySwiper.slideNext();
//     mySwiper.autoplay.start();
//   });
//   leftArrow.addEventListener('mouseleave', function (event) {
//     mySwiper.autoplay.stop();
//   });
//   rightArrow.addEventListener('mouseleave', function (event) {
//     mySwiper.autoplay.stop();
//   });
// }

// function scrollIt(destination) {
//   var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
//   var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
//   var callback = arguments.length > 3 ? arguments[3] : undefined;
//   var easings = {
//     linear: function linear(t) {
//       return t;
//     },
//     easeInQuad: function easeInQuad(t) {
//       return t * t;
//     },
//     easeOutQuad: function easeOutQuad(t) {
//       return t * (2 - t);
//     },
//     easeInOutQuad: function easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     },
//     easeInCubic: function easeInCubic(t) {
//       return t * t * t;
//     },
//     easeOutCubic: function easeOutCubic(t) {
//       return --t * t * t + 1;
//     },
//     easeInOutCubic: function easeInOutCubic(t) {
//       return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//     },
//     easeInQuart: function easeInQuart(t) {
//       return t * t * t * t;
//     },
//     easeOutQuart: function easeOutQuart(t) {
//       return 1 - --t * t * t * t;
//     },
//     easeInOutQuart: function easeInOutQuart(t) {
//       return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
//     },
//     easeInQuint: function easeInQuint(t) {
//       return t * t * t * t * t;
//     },
//     easeOutQuint: function easeOutQuint(t) {
//       return 1 + --t * t * t * t * t;
//     },
//     easeInOutQuint: function easeInOutQuint(t) {
//       return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
//     }
//   };
//   var start = window.pageYOffset;
//   var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
//   var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//   var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//   var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
//   var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

//   if ('requestAnimationFrame' in window === false) {
//     window.scroll(0, destinationOffsetToScroll);

//     if (callback) {
//       callback();
//     }

//     return;
//   }

//   function scroll() {
//     var now = 'now' in window.performance ? performance.now() : new Date().getTime();
//     var time = Math.min(1, (now - startTime) / duration);
//     var timeFunction = easings[easing](time);
//     window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

//     if (window.pageYOffset === destinationOffsetToScroll) {
//       if (callback) {
//         callback();
//       }

//       return;
//     }

//     requestAnimationFrame(scroll);
//   }

//   scroll();
// }

// var anchors = [].slice.call(document.querySelectorAll('a[href^="#"]'));
// anchors.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.preventDefault();
//     scrollIt(document.querySelector(item.getAttribute("href")), 500, 'easeOutQuad');
//   });
// });