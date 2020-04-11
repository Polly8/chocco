
//////////-Reviews slider-//////////

const authors = document.querySelectorAll(".reviews__switch-item");
const reviews = document.querySelector(".reviews__list");
const item = document.querySelector(".reviews__main");

const itemStyles = getComputedStyle(item);
let itemWidth = itemStyles.width;


let step = parseInt(itemWidth);
const minRight = 0;
const maxRight = step * 2;
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
};