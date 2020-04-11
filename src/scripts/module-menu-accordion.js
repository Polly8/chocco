
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
});