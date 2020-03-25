//////////-Humburger menu-//////////

const humburger = document.querySelector(".header__humburger-link");
const menu = document.querySelector(".header__menu");
const menuComputed = getComputedStyle(menu);
const closeMenu = document.querySelector(".menu-close");

humburger.addEventListener("click", function(event){
    event.preventDefault();
    
    menu.style.display = "flex";
    closeMenu.style.display = "block";
    
});

closeMenu.addEventListener("click", function(){
    menu.style.display = "none";
    closeMenu.style.display = "none";
})


//////////-Bars consist-//////////

const consistButton = document.querySelector(".slider__consist");
const consistInfo = document.querySelector(".consist");

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