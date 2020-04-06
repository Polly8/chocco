
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