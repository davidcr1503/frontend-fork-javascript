const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobButtonmenu = document.querySelector(".mobButtonMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopcartButton = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleMenu);
mobButtonmenu.addEventListener("click", toggleMobileMenu);
shopcartButton.addEventListener("click", toggleShopcartAside);

function toggleMenu() {
    const asideOpen = !aside.classList.contains("inactive");
    
    if(asideOpen) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const asideOpen = !aside.classList.contains("inactive");

    if(asideOpen) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShopcartAside () {
    const mobileMenuOpen = !mobileMenu.classList.contains("inactive");

    if(mobileMenuOpen) {
        mobileMenu.classList.add("inactive"); // close it
    }

    aside.classList.toggle("inactive");
}