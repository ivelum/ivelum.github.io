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
  loop: true,
  observer: true,
  observeParents: true,
  grabCursor: true,
  loopedSlides: 23,
});

var mySwiperModal = new Swiper('#modal-slider', {
  freeMode: true,
  slidesPerView: 'auto',
  loop: true,
  observer: true,
  observeParents: true,
  grabCursor: true,
  loopedSlides: 23,
});
