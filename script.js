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



//////////-Bars consist-//////////

const consistButton = document.querySelector(".consist-wrapper");
const consistInfo = document.querySelector(".consist-info-wrapper");

consistButton.addEventListener("mouseover", function(){
    
    if (consistInfo.classList.contains("hidden")){       
        consistInfo.classList.remove("hidden");
    }
});

consistButton.addEventListener("mouseout", function(){
    
    if (!(consistInfo.classList.contains("hidden"))){       
        consistInfo.classList.add("hidden");
    }
})


//////////-Menu accordion-//////////

const accoMenu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__item");
const itemLength = menuItem.length;

for (var i = 0; i < itemLength; i++){

    menuItem[i].addEventListener("click", function(event){
        event.stopPropagation();
        event.preventDefault();

        if (this.classList.contains("menu__item--opened")){

            this.classList.remove("menu__item--opened");
        }else{

            for (var i = 0; i < itemLength; i++){
                menuItem[i].classList.remove("menu__item--opened");
            }

            this.classList.add("menu__item--opened");                    
        }
    })
};

accoMenu.addEventListener("click", function(){

    for (i = 0; i < itemLength; i++){
        menuItem[i].classList.remove("menu__item--opened");
    }
})


//////////-Team accordion-//////////

const teamItem = document.querySelectorAll(".team__item");
const linkTeam = document.querySelectorAll(".team__name");
const linkLength = linkTeam.length;
const teamLength = teamItem.length;

for (i = 0; i < linkLength; i++){

    linkTeam[i].addEventListener("click", function(event){
        event.stopPropagation();
        event.preventDefault();

        if (this.parentNode.classList.contains("team__item--active")){
            
            this.parentNode.classList.remove("team__item--active");
        }else{
            
            for (i = 0; i < teamLength; i++){

                linkTeam[i].parentNode.classList.remove("team__item--active");
            }

            this.parentNode.classList.add("team__item--active");
        }        
    })
}