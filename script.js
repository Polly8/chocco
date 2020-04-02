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



//////////-Slider bars-//////////

const right = document.querySelector(".bars__arrow--next");
const left = document.querySelector(".bars__arrow--prev");
const sliders = document.querySelector(".slider__list");

right.addEventListener("click", function(event){
    event.preventDefault();

    loop("right", event);
});

left.addEventListener("click", function(event){
    event.preventDefault();

    loop("left", event);
});


function loop(direction, event){
    event.preventDefault();  

    if(direction === "right"){
        sliders.appendChild(sliders.firstElementChild);

    }else{
        sliders.insertBefore(sliders.lastElementChild, sliders.firstElementChild);
    }
}



//////////-Reviews slider-//////////

const authors = document.querySelectorAll(".reviews__switch-item");
const reviews = document.querySelector(".reviews__list");

const minRight = 0;
const maxRight = 1880;
const step = 940;
let currentRight = 0;

reviews.style.right = currentRight;

for (i = 0; i < authors.length; i++){

    authors[i].addEventListener("click", function(event){
        event.stopPropagation();
        event.preventDefault();
            
        for (i = 0; i < authors.length; i++){
            authors[i].classList.remove("reviews__switch-item--active");
        }

        this.classList.add("reviews__switch-item--active");


        if(this.classList.contains("second-review")){
            
            currentRight = step;
            reviews.style.right = currentRight + "px";

        }else if(this.classList.contains("third-review")){

            currentRight = step*2;
            reviews.style.right = currentRight + "px";

        }else{

            currentRight = 0;
            reviews.style.right = currentRight + "px";
        }     
    });    
}






//////////-Form figures valid-//////////

/*const figuresInput = document.querySelectorAll(".input-figures");

for (i=0; i < figuresInput.length; i++){

    figuresInput[i].addEventListener("keydown", function(event){

        console.log(event.key);
    });
};

*/


//////////-Form-//////////

const myForm = document.querySelector(".order");
const send = document.querySelector(".order__submit");
const modal = document.querySelector(".modal-form");
const modalText = document.querySelector(".modal-form__text");
const modalClose = document.querySelector(".modal-form__btn");

send.addEventListener("click", function(event){
    event.preventDefault();

    if(validateForm(myForm)){

        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: "some@mail.com"
        }

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
        xhr.send(JSON.stringify(data));

        xhr.addEventListener("load", function(){
            
            if(xhr.resonse.status){

                modalText.textContent = "Сообщение отправлено";
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                
                console.log("It's okay!");

                modalClose.addEventListener("click", function(event){
                    event.stopPropagation();
                    event.preventDefault();

                    modal.style.display = "none";
                    document.body.style.overflow = "visible";         
                });

                modal.addEventListener("click", function(event){
                    event.stopPropagation();

                    modal.style.display = "none";
                    document.body.style.overflow = "visible";          
                });

                document.addEventListener("keyup", function(event){
                    let keyName = event.key;

                    if(keyName === "Escape"){
                        modal.style.display = "none";
                        document.body.style.overflow = "visible"; 
                    }
                });
            }
        }); 
        
    }else{
        console.log("No working validate form!");
    }
});


function validateForm(form){
    let valid = true;

    if(!validateField(form.elements.name)){
        valid = false;
    };

    if(!validateField(form.elements.phone)){
        valid = false;
    };

    return valid;
};


function validateField(field){

    field.nextElementSibling.textContent = field.validationMessage;

    return field.checkValidity();
};