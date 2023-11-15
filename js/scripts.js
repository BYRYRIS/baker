document.querySelector(".order-call").addEventListener("click", hideOff);

document.querySelector(".modal-button").addEventListener("click", hideOn);

// add/remove classes
function hideOn() {
    document.querySelector(".blackdrop").classList.toggle("hideModel");
}

function hideOff() {
    document.querySelector(".blackdrop").classList.toggle("hideModel");
}