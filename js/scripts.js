document.querySelector(".js-order-call").addEventListener("click", hideOff);

document.querySelector(".js-modal-button").addEventListener("click", hideOn);

// add/remove classes
function hideOn() {
    document.querySelector(".blackdrop").classList.toggle("hideModel");
}

function hideOff() {
    document.querySelector(".blackdrop").classList.toggle("hideModel");
}

document.querySelector(".js-mobile-menu-open").addEventListener("click", menuOn);

function menuOn() {
    document.querySelector(".mobile-menu__container").classList.toggle("mobile-menu__hider");
}

document.querySelector(".js-mobile-menu-cancel").addEventListener("click", menuOff);

function menuOff() {
    document.querySelector(".mobile-menu__container").classList.toggle("mobile-menu__hider");
}