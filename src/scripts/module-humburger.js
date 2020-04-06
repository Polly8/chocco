
//////////-Humburger menu-//////////

const humburger = document.querySelector(".header__humburger-link");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-menu__close");



humburger.addEventListener("click", function(event){
    event.preventDefault();

    mobileMenu.classList.remove("mobile-menu--closed");
    document.body.style.overflow = "hidden";   
});

closeMenu.addEventListener("click", function(event){
    event.stopPropagation();
    
    mobileMenu.classList.add("mobile-menu--closed");
    document.body.style.overflow = "visible";
})