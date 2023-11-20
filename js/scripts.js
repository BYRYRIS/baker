document.querySelector(".js-order-call").addEventListener("click", hideOff);
document.querySelector(".js-modal-button").addEventListener("click", hideOn);
document
  .querySelector(".header__mobile-button")
  .addEventListener("click", hideOff);
document
  .querySelector(".mobile-menu__button")
  .addEventListener("click", menuOn);
document
  .querySelector(".js-mobile-menu-cancel")
  .addEventListener("click", menuOff);

// add/remove classes
function hideOn() {
  document.querySelector(".blackdrop").classList.toggle("hideModel");
}

function hideOff() {
  document.querySelector(".blackdrop").classList.toggle("hideModel");
}

function menuOn() {
  document
    .querySelector(".mobile-menu__container")
    .classList.toggle("mobile-menu__hider");
}

function menuOff() {
  document
    .querySelector(".mobile-menu__container")
    .classList.toggle("mobile-menu__hider");
}

// swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.pagination',
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active"
  },

  navigation: {
    nextEl: '.icon-button.next',
    prevEl: '.icon-button.prev',
  },
});