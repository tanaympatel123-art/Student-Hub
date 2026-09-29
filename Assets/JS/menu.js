const menuButton = document.getElementById("menuButton");

const mainNav = document.getElementById("mainNav");


menuButton.addEventListener("click", function() {

    mainNav.classList.toggle("menu-hidden");

});