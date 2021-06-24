//Seleccionar los DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-items");
const btnForm = document.querySelector(".btn-form");

//animacion del menu
let showMenu = true;

menuBtn.addEventListener("click", function() {


    if(showMenu === true) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        //estado del menu
        showMenu = false;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        //estado del menu
        showMenu = true;
    }
    
});

btnForm.addEventListener("click", () => {
    window.open("mailto:pacheco1512@gmail.com");
})